"use client";

import Link from "next/link";
import type { SubjectMeta } from "@/lib/types";
import { useHydrated, useProgress } from "@/lib/storage";
import { bestScores, chapterKey, subjectAverage } from "@/lib/stats";
import { appreciation, formatNote, noteColor } from "@/lib/appreciation";

export function SubjectAverageBadge({ subject }: { subject: SubjectMeta }) {
  const hydrated = useHydrated();
  const { attempts } = useProgress();
  const avg = hydrated ? subjectAverage(subject, bestScores(attempts)) : null;
  if (avg === null) return <p className="muted text-sm">Pas encore de note dans cette matière.</p>;
  return (
    <p className="text-sm">
      Moyenne : <strong className={noteColor(avg)}>{formatNote(avg)}/20</strong> · <span className="muted">{appreciation(avg)}</span>
    </p>
  );
}

export function ChapterList({ subject }: { subject: SubjectMeta }) {
  const hydrated = useHydrated();
  const { attempts } = useProgress();
  const best = bestScores(attempts);
  return (
    <ol className="space-y-3">
      {subject.chapters.map((c, i) => {
        const note = hydrated ? best.get(chapterKey(subject.slug, c.slug)) : undefined;
        const tries = hydrated ? attempts.filter((a) => a.key === chapterKey(subject.slug, c.slug)).length : 0;
        const inner = (
          <>
            <span className="subject-bg grid h-10 w-10 shrink-0 place-items-center rounded-xl font-bold text-white" aria-hidden>
              {c.locked ? "🔒" : i + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold">{c.title}</span>
              <span className="muted block text-sm">{c.summary}</span>
            </span>
            {c.locked ? (
              <span className="rounded-full surface-2 px-2.5 py-1 text-xs font-semibold">Bientôt</span>
            ) : note !== undefined ? (
              <span className="text-right">
                <strong className={`block ${noteColor(note)}`}>{formatNote(note)}/20</strong>
                <span className="muted text-[11px]">
                  {tries} essai{tries > 1 ? "s" : ""}
                </span>
              </span>
            ) : (
              <span className="muted text-sm">À faire</span>
            )}
          </>
        );
        return (
          <li key={c.slug}>
            {c.locked ? (
              <div className="card flex items-center gap-4 p-4 opacity-60" aria-disabled>
                {inner}
              </div>
            ) : (
              <Link href={`/matieres/${subject.slug}/${c.slug}`} className="card flex items-center gap-4 p-4 transition hover:-translate-y-0.5">
                {inner}
              </Link>
            )}
          </li>
        );
      })}
    </ol>
  );
}

export function ChapterBest({ subjectSlug, chapterSlug }: { subjectSlug: string; chapterSlug: string }) {
  const hydrated = useHydrated();
  const { attempts } = useProgress();
  if (!hydrated) return null;
  const list = attempts.filter((a) => a.key === chapterKey(subjectSlug, chapterSlug));
  if (!list.length) return null;
  const best = Math.max(...list.map((a) => a.score));
  return (
    <p className="text-sm">
      Ta meilleure note : <strong className={noteColor(best)}>{formatNote(best)}/20</strong> ({list.length} tentative{list.length > 1 ? "s" : ""})
    </p>
  );
}
