import type { Attempt, SubjectMeta as Subject } from "./types";
import { bestScores, chapterKey, DEFI_SUBJECT, generalAverage } from "./stats";
import { bestStreak } from "./dates";

export const LEVELS = [
  { name: "Apprenti", min: 0, emoji: "🌱" },
  { name: "Élève studieux", min: 150, emoji: "📘" },
  { name: "Érudit", min: 450, emoji: "🦉" },
  { name: "Savant", min: 1000, emoji: "🔭" },
  { name: "Génie", min: 2000, emoji: "🧠" },
] as const;

/** XP : 10 × meilleure note par chapitre + 5 par tentative + 3 × note des défis du jour. */
export function computeXp(attempts: Attempt[]): number {
  const best = bestScores(attempts);
  let xp = 0;
  for (const n of best.values()) xp += n * 10;
  for (const a of attempts) {
    xp += 5;
    if (a.subject === DEFI_SUBJECT) xp += a.score * 3;
  }
  return Math.round(xp);
}

export function levelFor(xp: number) {
  let idx = 0;
  LEVELS.forEach((l, i) => {
    if (xp >= l.min) idx = i;
  });
  const current = LEVELS[idx]!;
  const next = LEVELS[idx + 1] ?? null;
  const progress = next ? (xp - current.min) / (next.min - current.min) : 1;
  return { index: idx, current, next, progress: Math.max(0, Math.min(1, progress)) };
}

export interface Badge {
  id: string;
  name: string;
  emoji: string;
  description: string;
  earned: boolean;
}

export function computeBadges(subjects: Subject[], attempts: Attempt[], days: string[]): Badge[] {
  const best = bestScores(attempts);
  const notes = [...best.values()];
  const subjectsTried = new Set(
    attempts.filter((a) => a.subject !== DEFI_SUBJECT).map((a) => a.subject),
  );
  const activeSubjects = subjects.filter((s) => !s.comingSoon);
  const avg = generalAverage(subjects, best);
  const streak = bestStreak(days);
  const defis = attempts.filter((a) => a.subject === DEFI_SUBJECT);
  const completedSubject = activeSubjects.some((s) =>
    s.chapters
      .filter((c) => !c.locked && c.evaluation)
      .every((c) => (best.get(chapterKey(s.slug, c.slug)) ?? 0) >= 10),
  );
  const improved = (() => {
    const byKey = new Map<string, number>();
    for (const a of [...attempts].sort((x, y) => x.date.localeCompare(y.date))) {
      const first = byKey.get(a.key);
      if (first === undefined) byKey.set(a.key, a.score);
      else if (a.score - first >= 5) return true;
    }
    return false;
  })();
  const b = (id: string, name: string, emoji: string, description: string, earned: boolean) => ({
    id,
    name,
    emoji,
    description,
    earned,
  });
  return [
    b("premier-pas", "Premier pas", "👣", "Terminer une première évaluation.", attempts.length > 0),
    b("la-moyenne", "La moyenne !", "✅", "Obtenir au moins 10/20 à une évaluation.", notes.some((n) => n >= 10)),
    b("parfait", "Sans faute", "💯", "Obtenir 20/20 à une évaluation.", notes.some((n) => n >= 20)),
    b("touche-a-tout", "Touche-à-tout", "🎨", "Être évalué dans 5 matières différentes.", subjectsTried.size >= 5),
    b("encyclopedie", "Encyclopédie", "📚", "Être évalué dans toutes les matières ouvertes.", subjectsTried.size >= activeSubjects.length),
    b("dix-chapitres", "Dix chapitres", "🔟", "Valider 10 chapitres différents.", notes.length >= 10),
    b("matiere-complete", "Matière bouclée", "🏁", "Avoir au moins 10/20 à tous les chapitres d'une matière.", completedSubject),
    b("perseverant", "Persévérant", "💪", "Gagner 5 points en refaisant une évaluation.", improved),
    b("serie-3", "Régulier", "🔥", "Travailler 3 jours de suite.", streak >= 3),
    b("serie-7", "Inarrêtable", "🚀", "Travailler 7 jours de suite.", streak >= 7),
    b("defi", "Défi relevé", "🎯", "Terminer un défi du jour.", defis.length > 0),
    b("mention-tb", "Mention Très bien", "🏅", "Avoir une moyenne générale de 16 ou plus (5 chapitres minimum).", avg !== null && avg >= 16 && notes.length >= 5),
  ];
}
