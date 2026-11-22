import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { SUBJECTS, getChapter } from "@/data";
import { Lesson } from "@/components/Lesson";
import { Videos } from "@/components/Videos";
import { ChapterBest } from "@/components/pages/ChapterList";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUBJECTS.flatMap((s) => s.chapters.map((c) => ({ matiere: s.slug, chapitre: c.slug })));
}

type Params = { params: Promise<{ matiere: string; chapitre: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { matiere, chapitre } = await params;
  const found = getChapter(matiere, chapitre);
  return { title: found ? `${found.chapter.title} · ${found.subject.shortName}` : "Chapitre", description: found?.chapter.summary };
}

export default async function ChapterPage({ params }: Params) {
  const { matiere, chapitre } = await params;
  const found = getChapter(matiere, chapitre);
  if (!found) notFound();
  const { subject, chapter, index } = found;
  const prev = subject.chapters[index - 1];
  const next = subject.chapters[index + 1];

  return (
    <article className="space-y-6" style={{ "--c": subject.color } as CSSProperties}>
      <nav className="muted text-sm" aria-label="Fil d'Ariane">
        <Link href="/matieres" className="underline underline-offset-2">
          Matières
        </Link>{" "}
        /{" "}
        <Link href={`/matieres/${subject.slug}`} className="underline underline-offset-2">
          {subject.shortName}
        </Link>{" "}
        / Chapitre {index + 1}
      </nav>

      <header className="space-y-2">
        <p className="subject-text text-sm font-semibold">
          {subject.emoji} {subject.name} · Chapitre {index + 1}/{subject.chapters.length}
        </p>
        <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          {chapter.title}
        </h1>
        <p className="muted">{chapter.summary}</p>
        <ChapterBest subjectSlug={subject.slug} chapterSlug={chapter.slug} />
      </header>

      <section className="card p-5 sm:p-6" aria-labelledby="fiche">
        <h2 id="fiche" className="subject-text mb-3 text-xs font-bold uppercase tracking-wide">
          📝 Fiche de cours
        </h2>
        <Lesson source={chapter.lesson} />
      </section>

      {chapter.videos.length > 0 && (
        <section className="space-y-3" aria-labelledby="videos">
          <h2 id="videos" className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            🎬 Vidéos
          </h2>
          <Videos videos={chapter.videos} />
        </section>
      )}

      {chapter.evaluation && !chapter.locked && (
        <section className="card subject-tint flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-bold">Prêt pour l&apos;évaluation ?</p>
            <p className="muted text-sm">
              {chapter.evaluation.kind === "quiz" && "10 questions, note sur 20, correction détaillée."}
              {chapter.evaluation.kind === "memoire" && "30 secondes pour mémoriser, puis tu réécris tout."}
              {chapter.evaluation.kind === "creativite" && "Un défi « Et si… » et une grille d'auto-évaluation."}
            </p>
          </div>
          <Link href={`/matieres/${subject.slug}/${chapter.slug}/evaluation`} className="btn btn-primary">
            Passer l&apos;évaluation →
          </Link>
        </section>
      )}

      <nav className="flex justify-between gap-3 text-sm" aria-label="Chapitres">
        {prev ? (
          <Link href={`/matieres/${subject.slug}/${prev.slug}`} className="btn btn-ghost">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next && !next.locked && (
          <Link href={`/matieres/${subject.slug}/${next.slug}`} className="btn btn-ghost text-right">
            {next.title} →
          </Link>
        )}
      </nav>
    </article>
  );
}
