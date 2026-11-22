import type { Attempt, ChapterMeta as Chapter, SubjectMeta as Subject } from "./types";

export const DEFI_SUBJECT = "defi";

export function chapterKey(subject: string, chapter: string) {
  return `${subject}/${chapter}`;
}

/** Meilleure note par chapitre (hors défis du jour). */
export function bestScores(attempts: Attempt[]): Map<string, number> {
  const best = new Map<string, number>();
  for (const a of attempts) {
    if (a.subject === DEFI_SUBJECT) continue;
    const prev = best.get(a.key);
    if (prev === undefined || a.score > prev) best.set(a.key, a.score);
  }
  return best;
}

export function historyFor(attempts: Attempt[], key: string): Attempt[] {
  return attempts.filter((a) => a.key === key);
}

/** Moyenne d'une matière = moyenne des meilleures notes de ses chapitres évalués. */
export function subjectAverage(subject: Subject, best: Map<string, number>): number | null {
  const notes = subject.chapters
    .map((c) => best.get(chapterKey(subject.slug, c.slug)))
    .filter((n): n is number => n !== undefined);
  if (notes.length === 0) return null;
  return round2(notes.reduce((s, n) => s + n, 0) / notes.length);
}

/** Moyenne générale pondérée par les coefficients des matières évaluées. */
export function generalAverage(subjects: Subject[], best: Map<string, number>): number | null {
  let sum = 0;
  let coefs = 0;
  for (const s of subjects) {
    const avg = subjectAverage(s, best);
    if (avg === null) continue;
    sum += avg * s.coefficient;
    coefs += s.coefficient;
  }
  return coefs === 0 ? null : round2(sum / coefs);
}

export function round2(n: number) {
  return Math.round(n * 100) / 100;
}

/** Évolution de la moyenne générale après chaque évaluation. */
export function progressionSeries(subjects: Subject[], attempts: Attempt[]) {
  const sorted = [...attempts]
    .filter((a) => a.subject !== DEFI_SUBJECT)
    .sort((a, b) => a.date.localeCompare(b.date));
  const points: { date: string; value: number }[] = [];
  for (let i = 0; i < sorted.length; i++) {
    const avg = generalAverage(subjects, bestScores(sorted.slice(0, i + 1)));
    if (avg !== null) points.push({ date: (sorted[i] as Attempt).date, value: avg });
  }
  return points;
}

export function evaluableChapters(subject: Subject): Chapter[] {
  return subject.chapters.filter((c) => !c.locked && c.evaluation !== null);
}

/** Prochain chapitre conseillé : d'abord une note faible à rattraper, sinon un chapitre nouveau. */
export function recommendedChapter(
  subjects: Subject[],
  best: Map<string, number>,
): { subject: Subject; chapter: Chapter; reason: string } | null {
  let weakest: { subject: Subject; chapter: Chapter; note: number } | null = null;
  for (const s of subjects) {
    for (const c of evaluableChapters(s)) {
      const n = best.get(chapterKey(s.slug, c.slug));
      if (n !== undefined && n < 10 && (!weakest || n < weakest.note)) {
        weakest = { subject: s, chapter: c, note: n };
      }
    }
  }
  if (weakest) {
    return {
      subject: weakest.subject,
      chapter: weakest.chapter,
      reason: `Ta meilleure note est ${String(weakest.note).replace(".", ",")}/20 : retente ta chance !`,
    };
  }
  const candidates = subjects
    .filter((s) => !s.comingSoon)
    .map((s) => {
      const chapters = evaluableChapters(s);
      const done = chapters.filter((c) => best.has(chapterKey(s.slug, c.slug))).length;
      const next = chapters.find((c) => !best.has(chapterKey(s.slug, c.slug)));
      return { s, done, next, ratio: chapters.length ? done / chapters.length : 1 };
    })
    .filter((x) => x.next)
    .sort((a, b) => a.ratio - b.ratio || b.s.coefficient - a.s.coefficient);
  const pick = candidates[0];
  if (!pick || !pick.next) return null;
  return {
    subject: pick.s,
    chapter: pick.next,
    reason:
      pick.done === 0
        ? `Tu n'as pas encore commencé ${pick.s.name}.`
        : `C'est la matière où tu as le moins avancé.`,
  };
}

export interface SubjectReport {
  subject: Subject;
  average: number | null;
  evaluated: number;
  total: number;
}

export function subjectReports(subjects: Subject[], best: Map<string, number>): SubjectReport[] {
  return subjects.map((s) => ({
    subject: s,
    average: subjectAverage(s, best),
    evaluated: evaluableChapters(s).filter((c) => best.has(chapterKey(s.slug, c.slug))).length,
    total: evaluableChapters(s).length,
  }));
}

export function strengthsAndWeaknesses(reports: SubjectReport[]) {
  const rated = reports.filter((r) => r.average !== null) as (SubjectReport & { average: number })[];
  const strengths = rated.filter((r) => r.average >= 14).sort((a, b) => b.average - a.average);
  let weaknesses = rated.filter((r) => r.average < 12).sort((a, b) => a.average - b.average);
  if (weaknesses.length === 0 && rated.length >= 3) {
    weaknesses = [...rated].sort((a, b) => a.average - b.average).slice(0, 1);
    if (weaknesses[0] && weaknesses[0].average >= 16) weaknesses = [];
  }
  return { strengths, weaknesses };
}
