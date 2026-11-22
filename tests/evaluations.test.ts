import { describe, expect, it } from "vitest";
import { SUBJECTS } from "@/data";
import { VERIFIED_VIDEO_IDS } from "@/data/verified-videos";
import { correctAnswer, gradeQuestion, gradeQuiz, type Answer } from "@/lib/grading";
import { gradeMemory } from "@/lib/memory";
import { normalize } from "@/lib/normalize";
import type { Question } from "@/lib/types";

const COEFS: Record<string, number> = {
  mathematiques: 4,
  francais: 4,
  "histoire-geographie": 3,
  svt: 3,
  "physique-chimie": 3,
  anglais: 3,
  espagnol: 2,
  logique: 2,
  memoire: 1,
  creativite: 1,
  eloquence: 2,
  strategie: 2,
  manipulation: 1,
  hacking: 2,
  code: 2,
};

/** Une réponse volontairement fausse pour chaque type de question. */
function wrongAnswer(q: Question): Answer {
  switch (q.type) {
    case "qcm":
      return (q.answer + 1) % q.choices.length;
    case "vrai-faux":
      return !q.answer;
    case "courte":
      return "réponse-volontairement-fausse";
    case "ordre":
      return [...q.items].reverse();
  }
}

describe("structure des matières", () => {
  it("contient les 15 matières avec les bons coefficients", () => {
    expect(SUBJECTS.map((s) => s.slug).sort()).toEqual(Object.keys(COEFS).sort());
    for (const s of SUBJECTS) expect(s.coefficient, s.slug).toBe(COEFS[s.slug]);
  });

  it("a des slugs uniques et au moins 5 chapitres par matière", () => {
    expect(new Set(SUBJECTS.map((s) => s.slug)).size).toBe(SUBJECTS.length);
    for (const s of SUBJECTS) {
      expect(s.chapters.length, s.slug).toBeGreaterThanOrEqual(5);
      expect(new Set(s.chapters.map((c) => c.slug)).size, s.slug).toBe(s.chapters.length);
      expect(s.color).toMatch(/^#[0-9a-f]{6}$/i);
    }
  });

  it("verrouille tous les chapitres de Code (« bientôt »)", () => {
    const code = SUBJECTS.find((s) => s.slug === "code")!;
    expect(code.comingSoon).toBe(true);
    for (const c of code.chapters) {
      expect(c.locked).toBe(true);
      expect(c.evaluation).toBeNull();
    }
  });

  it("donne une fiche de cours et 1 à 3 vidéos à chaque chapitre ouvert", () => {
    for (const s of SUBJECTS) {
      for (const c of s.chapters.filter((c) => !c.locked)) {
        expect(c.lesson.length, `${s.slug}/${c.slug}`).toBeGreaterThan(150);
        expect(c.videos.length, `${s.slug}/${c.slug}`).toBeGreaterThanOrEqual(1);
        expect(c.videos.length, `${s.slug}/${c.slug}`).toBeLessThanOrEqual(3);
        expect(c.evaluation, `${s.slug}/${c.slug}`).not.toBeNull();
      }
    }
  });
});

describe("vidéos", () => {
  it("n'intègre que des identifiants vérifiés ; sinon un lien de recherche", () => {
    for (const s of SUBJECTS) {
      for (const c of s.chapters) {
        for (const v of c.videos) {
          if (v.kind === "embed") {
            expect(v.id).toMatch(/^[A-Za-z0-9_-]{11}$/);
            expect(VERIFIED_VIDEO_IDS[v.id], `vidéo non vérifiée ${v.id} dans ${s.slug}/${c.slug}`).toBeDefined();
          } else {
            expect(v.query.trim().length).toBeGreaterThan(3);
          }
        }
      }
    }
  });
});

const quizChapters = SUBJECTS.flatMap((s) =>
  s.chapters
    .filter((c) => c.evaluation?.kind === "quiz")
    .map((c) => ({ id: `${s.slug}/${c.slug}`, questions: c.evaluation!.kind === "quiz" ? c.evaluation!.questions : [] })),
);

describe.each(quizChapters)("évaluation $id", ({ id, questions }) => {
  it("comporte exactement 10 questions bien formées", () => {
    expect(questions).toHaveLength(10);
    for (const q of questions) {
      expect(q.prompt.trim(), id).not.toBe("");
      expect(q.explanation.trim().length, `${id} : ${q.prompt}`).toBeGreaterThan(10);
      if (q.type === "qcm") {
        expect(q.choices.length).toBeGreaterThanOrEqual(2);
        expect(new Set(q.choices).size, `choix en double : ${q.prompt}`).toBe(q.choices.length);
        expect(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.choices.length, q.prompt).toBe(true);
      }
      if (q.type === "courte") {
        expect(q.accept.length).toBeGreaterThan(0);
        for (const a of q.accept) expect(normalize(a), `réponse vide après normalisation : ${a}`).not.toBe("");
      }
      if (q.type === "ordre") {
        expect(q.items.length).toBeGreaterThanOrEqual(3);
        expect(new Set(q.items).size).toBe(q.items.length);
      }
    }
  });

  it("donne 20/20 avec les bonnes réponses", () => {
    const r = gradeQuiz(questions, questions.map(correctAnswer));
    expect(r.score).toBe(20);
    expect(r.results.every((x) => x.correct)).toBe(true);
  });

  it("accepte chaque variante de réponse courte prévue", () => {
    for (const q of questions) {
      if (q.type !== "courte") continue;
      for (const a of q.accept) expect(gradeQuestion(q, a).correct, `${q.prompt} ← « ${a} »`).toBe(true);
      expect(gradeQuestion(q, a_upper(q.accept[0]!)).correct, `majuscules : ${q.prompt}`).toBe(true);
    }
  });

  it("donne 0/20 avec des réponses fausses ou vides", () => {
    expect(gradeQuiz(questions, questions.map(wrongAnswer)).score).toBe(0);
    expect(gradeQuiz(questions, questions.map(() => null)).score).toBe(0);
  });
});

function a_upper(s: string) {
  return `  ${s.toUpperCase()}  `;
}

describe("évaluations de mémoire", () => {
  const memory = SUBJECTS.flatMap((s) => s.chapters).filter((c) => c.evaluation?.kind === "memoire");
  it("existent pour chaque chapitre de Mémoire, avec 30 s d'affichage", () => {
    expect(memory.length).toBeGreaterThanOrEqual(5);
    for (const c of memory) {
      const e = c.evaluation!;
      if (e.kind !== "memoire") continue;
      expect(e.seconds).toBe(30);
      expect(new Set(e.pool).size).toBe(e.pool.length);
      expect(e.pool.length).toBeGreaterThanOrEqual(10);
      for (const w of e.pool) expect(w).not.toMatch(/\s/);
      const ten = e.pool.slice(0, 10);
      expect(gradeMemory(ten, ten.join(" "), e.ordered).score).toBe(20);
    }
  });

  it("corrige un rappel partiel, désordonné ou sans accents", () => {
    const list = ["pomme", "gâteau", "lune", "robot"];
    expect(gradeMemory(list, "POMME, gateau lune robot", true).correct).toBe(4);
    expect(gradeMemory(list, "robot lune gateau pomme", false).correct).toBe(4);
    expect(gradeMemory(list, "robot lune gateau pomme", true).correct).toBe(0);
    expect(gradeMemory(list, "pomme pomme pomme", false).correct).toBe(1);
    expect(gradeMemory(list, "pomme lune", false).score).toBe(10);
  });
});

describe("évaluations de créativité", () => {
  it("ont des défis « Et si… » et une grille de 10 critères", () => {
    const creative = SUBJECTS.flatMap((s) => s.chapters).filter((c) => c.evaluation?.kind === "creativite");
    expect(creative.length).toBeGreaterThanOrEqual(5);
    for (const c of creative) {
      const e = c.evaluation!;
      if (e.kind !== "creativite") continue;
      expect(e.rubric).toHaveLength(10);
      expect(new Set(e.rubric).size).toBe(10);
      for (const ch of e.challenges) expect(ch.startsWith("Et si")).toBe(true);
    }
  });
});
