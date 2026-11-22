import type { Chapter, Subject, SubjectMeta } from "@/lib/types";
import { maths } from "./subjects/maths";
import { francais } from "./subjects/francais";
import { histoireGeo } from "./subjects/histoire-geo";
import { svt } from "./subjects/svt";
import { physique } from "./subjects/physique";
import { anglais } from "./subjects/anglais";
import { espagnol } from "./subjects/espagnol";
import { logique } from "./subjects/logique";
import { memoire } from "./subjects/memoire";
import { creativite } from "./subjects/creativite";
import { manipulation } from "./subjects/manipulation";
import { eloquence } from "./subjects/eloquence";
import { strategie } from "./subjects/strategie";
import { hacking } from "./subjects/hacking";
import { code } from "./subjects/code";

/**
 * Registre des matières.
 * Pour ajouter une matière : créer src/data/subjects/ma-matiere.ts, puis l'ajouter ici.
 */
export const SUBJECTS: Subject[] = [
  maths,
  francais,
  histoireGeo,
  svt,
  physique,
  anglais,
  espagnol,
  logique,
  memoire,
  creativite,
  eloquence,
  strategie,
  manipulation,
  hacking,
  code,
];

export function getSubject(slug: string): Subject | undefined {
  return SUBJECTS.find((s) => s.slug === slug);
}

export function getChapter(subjectSlug: string, chapterSlug: string): { subject: Subject; chapter: Chapter; index: number } | undefined {
  const subject = getSubject(subjectSlug);
  if (!subject) return undefined;
  const index = subject.chapters.findIndex((c) => c.slug === chapterSlug);
  const chapter = subject.chapters[index];
  return chapter ? { subject, chapter, index } : undefined;
}

/** Résumé des matières sans le contenu des cours ni des évaluations. */
export function toMeta(s: Subject): SubjectMeta {
  return {
    slug: s.slug,
    name: s.name,
    shortName: s.shortName,
    coefficient: s.coefficient,
    color: s.color,
    emoji: s.emoji,
    description: s.description,
    comingSoon: s.comingSoon,
    chapters: s.chapters.map((c) => ({
      slug: c.slug,
      title: c.title,
      summary: c.summary,
      locked: c.locked,
      evaluation: c.evaluation ? { kind: c.evaluation.kind } : null,
    })),
  };
}

export const SUBJECT_META: SubjectMeta[] = SUBJECTS.map(toMeta);
