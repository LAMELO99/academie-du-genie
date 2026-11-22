import type { Question, Subject } from "./types";
import { hashString, seededRandom, shuffle } from "./random";

export interface DailyItem {
  question: Question;
  subject: Subject;
  chapterSlug: string;
  chapterTitle: string;
}

/**
 * Défi du jour : 10 questions tirées de matières différentes, identiques pour une date donnée.
 * Une seule question par chapitre ; les matières sont parcourues à tour de rôle.
 */
export function dailyChallenge(subjects: Subject[], date: string, count = 10): DailyItem[] {
  const rand = seededRandom(hashString(`defi-${date}`));
  const pools = shuffle(
    subjects
      .map((s) => ({
        subject: s,
        chapters: shuffle(
          s.chapters.filter((c) => !c.locked && c.evaluation?.kind === "quiz"),
          rand,
        ),
      }))
      .filter((p) => p.chapters.length > 0),
    rand,
  );
  const items: DailyItem[] = [];
  let round = 0;
  while (items.length < count && pools.some((p) => p.chapters.length > round)) {
    for (const p of pools) {
      if (items.length >= count) break;
      const chapter = p.chapters[round];
      if (!chapter || chapter.evaluation?.kind !== "quiz") continue;
      const qs = chapter.evaluation.questions;
      const question = qs[Math.floor(rand() * qs.length)];
      if (!question) continue;
      items.push({ question, subject: p.subject, chapterSlug: chapter.slug, chapterTitle: chapter.title });
    }
    round++;
  }
  return items;
}
