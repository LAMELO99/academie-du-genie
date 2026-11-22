import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SUBJECTS, getChapter } from "@/data";
import { EvaluationRunner } from "@/components/eval/EvaluationRunner";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUBJECTS.flatMap((s) =>
    s.chapters.filter((c) => c.evaluation && !c.locked).map((c) => ({ matiere: s.slug, chapitre: c.slug })),
  );
}

type Params = { params: Promise<{ matiere: string; chapitre: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { matiere, chapitre } = await params;
  const found = getChapter(matiere, chapitre);
  return { title: found ? `Évaluation · ${found.chapter.title}` : "Évaluation" };
}

export default async function EvaluationPage({ params }: Params) {
  const { matiere, chapitre } = await params;
  const found = getChapter(matiere, chapitre);
  if (!found || !found.chapter.evaluation || found.chapter.locked) notFound();
  const { subject, chapter, index } = found;
  const evaluation = chapter.evaluation;
  if (!evaluation) notFound();
  const next = subject.chapters[index + 1];
  return (
    <div className="space-y-4">
      <nav className="muted text-sm" aria-label="Fil d'Ariane">
        <Link href={`/matieres/${subject.slug}`} className="underline underline-offset-2">
          {subject.shortName}
        </Link>{" "}
        /{" "}
        <Link href={`/matieres/${subject.slug}/${chapter.slug}`} className="underline underline-offset-2">
          {chapter.title}
        </Link>{" "}
        / Évaluation
      </nav>
      <EvaluationRunner
        subject={{ slug: subject.slug, name: subject.name, color: subject.color, emoji: subject.emoji }}
        chapter={{ slug: chapter.slug, title: chapter.title }}
        evaluation={evaluation}
        next={next && !next.locked ? { slug: next.slug, title: next.title } : null}
      />
    </div>
  );
}
