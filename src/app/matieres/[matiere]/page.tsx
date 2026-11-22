import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { SUBJECTS, getSubject, toMeta } from "@/data";
import { ChapterList, SubjectAverageBadge } from "@/components/pages/ChapterList";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUBJECTS.map((s) => ({ matiere: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ matiere: string }> }): Promise<Metadata> {
  const { matiere } = await params;
  const s = getSubject(matiere);
  return { title: s?.name ?? "Matière", description: s?.description };
}

export default async function SubjectPage({ params }: { params: Promise<{ matiere: string }> }) {
  const { matiere } = await params;
  const subject = getSubject(matiere);
  if (!subject) notFound();
  const meta = toMeta(subject);
  return (
    <div className="space-y-6" style={{ "--c": subject.color } as CSSProperties}>
      <nav className="muted text-sm" aria-label="Fil d'Ariane">
        <Link href="/matieres" className="underline underline-offset-2">
          Matières
        </Link>{" "}
        / {subject.shortName}
      </nav>
      <header className="card subject-tint flex items-start gap-4 p-5">
        <span className="text-5xl" aria-hidden>
          {subject.emoji}
        </span>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            {subject.name}
          </h1>
          <p className="muted">{subject.description}</p>
          <p className="text-sm">
            <span className="subject-bg rounded-full px-2 py-0.5 text-xs font-bold text-white">coefficient {subject.coefficient}</span>
          </p>
          <SubjectAverageBadge subject={meta} />
        </div>
      </header>
      {subject.comingSoon && (
        <div className="card p-4 text-sm">
          🚧 Cette matière est en préparation : les chapitres seront débloqués bientôt. Elle ne compte pas encore dans ta moyenne.
        </div>
      )}
      <ChapterList subject={meta} />
    </div>
  );
}
