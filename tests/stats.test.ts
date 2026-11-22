import { describe, expect, it } from "vitest";
import { SUBJECT_META, SUBJECTS } from "@/data";
import { appreciation, mention } from "@/lib/appreciation";
import { bestStreak, currentStreak } from "@/lib/dates";
import { dailyChallenge } from "@/lib/daily";
import { computeBadges, computeXp, levelFor } from "@/lib/levels";
import { matchesShort, normalize } from "@/lib/normalize";
import { bestScores, generalAverage, progressionSeries, recommendedChapter, strengthsAndWeaknesses, subjectAverage, subjectReports } from "@/lib/stats";
import type { Attempt } from "@/lib/types";

const at = (key: string, score: number, date = "2026-01-01T10:00:00.000Z"): Attempt => {
  const [subject, chapter] = key.split("/") as [string, string];
  return { key, subject, chapter, score, date };
};

const maths = SUBJECT_META.find((s) => s.slug === "mathematiques")!;
const memoire = SUBJECT_META.find((s) => s.slug === "memoire")!;

describe("moyennes", () => {
  it("garde la meilleure note de chaque chapitre", () => {
    const best = bestScores([at("mathematiques/fractions", 8), at("mathematiques/fractions", 14), at("mathematiques/fractions", 12)]);
    expect(best.get("mathematiques/fractions")).toBe(14);
  });

  it("calcule la moyenne d'une matière sur les chapitres évalués", () => {
    const best = bestScores([at("mathematiques/fractions", 10), at("mathematiques/puissances", 16)]);
    expect(subjectAverage(maths, best)).toBe(13);
    expect(subjectAverage(memoire, best)).toBeNull();
  });

  it("pondère la moyenne générale par les coefficients", () => {
    // Maths (coef 4) : 16 ; Mémoire (coef 1) : 6 → (64 + 6) / 5 = 14
    const best = bestScores([at("mathematiques/fractions", 16), at("memoire/liste-de-mots", 6)]);
    expect(generalAverage(SUBJECT_META, best)).toBe(14);
    expect(generalAverage(SUBJECT_META, new Map())).toBeNull();
  });

  it("ignore les défis du jour dans les moyennes", () => {
    const best = bestScores([at("defi/2026-01-01", 20)]);
    expect(generalAverage(SUBJECT_META, best)).toBeNull();
  });

  it("trace la progression après chaque évaluation", () => {
    const s = progressionSeries(SUBJECT_META, [
      at("mathematiques/fractions", 10, "2026-01-01T10:00:00Z"),
      at("mathematiques/fractions", 18, "2026-01-02T10:00:00Z"),
      at("defi/2026-01-02", 4, "2026-01-02T11:00:00Z"),
    ]);
    expect(s.map((p) => p.value)).toEqual([10, 18]);
  });

  it("identifie points forts et matières à travailler", () => {
    const best = bestScores([at("mathematiques/fractions", 17), at("anglais/future", 8), at("logique/pieges", 12)]);
    const { strengths, weaknesses } = strengthsAndWeaknesses(subjectReports(SUBJECT_META, best));
    expect(strengths.map((r) => r.subject.slug)).toEqual(["mathematiques"]);
    expect(weaknesses.map((r) => r.subject.slug)).toEqual(["anglais"]);
  });
});

describe("bulletin", () => {
  it("attribue les mentions aux bons seuils", () => {
    expect(mention(16)).toBe("Très bien");
    expect(mention(15.99)).toBe("Bien");
    expect(mention(14)).toBe("Bien");
    expect(mention(12)).toBe("Assez bien");
    expect(mention(11.9)).toBeNull();
    expect(mention(null)).toBeNull();
  });

  it("formule des appréciations de bulletin", () => {
    expect(appreciation(19)).toMatch(/Excellent travail/);
    expect(appreciation(10)).toMatch(/Peut mieux faire/i);
    expect(appreciation(9)).toMatch(/Peut mieux faire/);
    expect(appreciation(2)).toMatch(/insuffisant/i);
  });
});

describe("série de jours", () => {
  it("compte les jours consécutifs jusqu'à aujourd'hui ou hier", () => {
    expect(currentStreak(["2026-03-01", "2026-03-02", "2026-03-03"], "2026-03-03")).toBe(3);
    expect(currentStreak(["2026-03-01", "2026-03-02"], "2026-03-03")).toBe(2);
    expect(currentStreak(["2026-03-01"], "2026-03-03")).toBe(0);
    expect(currentStreak(["2026-02-28", "2026-03-01"], "2026-03-01")).toBe(2);
    expect(bestStreak(["2026-01-01", "2026-01-02", "2026-01-05", "2026-01-06", "2026-01-07"])).toBe(3);
  });
});

describe("motivation", () => {
  it("fait passer les niveaux d'Apprenti à Génie", () => {
    expect(levelFor(0).current.name).toBe("Apprenti");
    expect(levelFor(450).current.name).toBe("Érudit");
    expect(levelFor(5000).current.name).toBe("Génie");
    expect(levelFor(5000).next).toBeNull();
  });

  it("calcule l'XP et débloque des badges", () => {
    const attempts = [at("mathematiques/fractions", 20), at("defi/2026-01-01", 10)];
    expect(computeXp(attempts)).toBe(20 * 10 + 5 + 5 + 10 * 3);
    const earned = computeBadges(SUBJECT_META, attempts, ["2026-01-01"]).filter((b) => b.earned).map((b) => b.id);
    expect(earned).toEqual(expect.arrayContaining(["premier-pas", "parfait", "defi", "la-moyenne"]));
    expect(earned).not.toContain("serie-3");
  });

  it("conseille d'abord une note faible, sinon une matière peu avancée", () => {
    const weak = recommendedChapter(SUBJECT_META, bestScores([at("anglais/future", 6)]));
    expect(weak?.chapter.slug).toBe("future");
    const fresh = recommendedChapter(SUBJECT_META, new Map());
    expect(fresh?.subject.comingSoon).toBeFalsy();
    expect(fresh?.chapter.locked).toBeFalsy();
  });

  it("propose un défi du jour déterministe et varié", () => {
    const a = dailyChallenge(SUBJECTS, "2026-11-22");
    const b = dailyChallenge(SUBJECTS, "2026-11-22");
    const c = dailyChallenge(SUBJECTS, "2026-11-23");
    expect(a).toHaveLength(10);
    expect(a.map((i) => i.question.prompt)).toEqual(b.map((i) => i.question.prompt));
    expect(a.map((i) => i.question.prompt)).not.toEqual(c.map((i) => i.question.prompt));
    expect(new Set(a.map((i) => i.subject.slug)).size).toBeGreaterThanOrEqual(6);
    expect(new Set(a.map((i) => `${i.subject.slug}/${i.chapterSlug}`)).size).toBe(10);
  });
});

describe("normalisation des réponses", () => {
  it("ignore casse, accents, espaces et articles", () => {
    expect(normalize("  La Loire ")).toBe("loire");
    expect(normalize("lac")).toBe("lac");
    expect(matchesShort("MITOCHONDRIE", ["mitochondrie"])).toBe(true);
    expect(matchesShort("0,01", ["0.01"])).toBe(true);
    expect(matchesShort("−4", ["-4"])).toBe(true);
    expect(matchesShort("5V", ["5 V"])).toBe(true);
    expect(matchesShort("", ["0"])).toBe(false);
    expect(matchesShort("chante", ["chanté"], true)).toBe(false);
    expect(matchesShort("Chanté", ["chanté"], true)).toBe(true);
  });
});
