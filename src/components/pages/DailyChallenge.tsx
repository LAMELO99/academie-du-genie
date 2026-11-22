"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import type { Question } from "@/lib/types";
import { recordAttempt, useHydrated, useProgress } from "@/lib/storage";
import { DEFI_SUBJECT } from "@/lib/stats";
import { appreciation, formatNote, noteColor } from "@/lib/appreciation";
import { QuizRunner, type QuizOutcome } from "../eval/QuizRunner";
import { ScoreRing } from "../ScoreRing";

export interface DailyPayload {
  date: string;
  items: { question: Question; subject: { slug: string; shortName: string; color: string; emoji: string }; chapterSlug: string; chapterTitle: string }[];
}

export function DailyChallenge({ date, items }: DailyPayload) {
  const hydrated = useHydrated();
  const { attempts } = useProgress();
  const [phase, setPhase] = useState<"intro" | "running" | "done">("intro");
  const [run, setRun] = useState(0);
  const [outcome, setOutcome] = useState<QuizOutcome | null>(null);
  const key = `defi/${date}`;
  const today = hydrated ? attempts.filter((a) => a.key === key) : [];
  const best = today.length ? Math.max(...today.map((a) => a.score)) : null;
  const subjects = [...new Map(items.map((i) => [i.subject.slug, i.subject])).values()];
  const pretty = new Date(`${date}T12:00:00`).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });

  return (
    <div className="space-y-6" style={{ "--c": "#f43f5e" } as CSSProperties}>
      <header>
        <p className="subject-text text-sm font-semibold">🎯 Défi du jour · {pretty}</p>
        <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          10 questions, {subjects.length} matières
        </h1>
        <p className="muted mt-1">Un nouveau mélange chaque jour. Chaque point gagné rapporte un bonus d&apos;XP.</p>
      </header>

      {phase === "intro" && (
        <div className="card space-y-4 p-5">
          <div className="flex flex-wrap gap-2">
            {subjects.map((s) => (
              <span key={s.slug} className="rounded-full px-2.5 py-1 text-xs font-semibold text-white" style={{ background: s.color }}>
                {s.emoji} {s.shortName}
              </span>
            ))}
          </div>
          {best !== null && (
            <p className="text-sm">
              Ton meilleur score aujourd&apos;hui : <strong className={noteColor(best)}>{formatNote(best)}/20</strong>
            </p>
          )}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setRun((r) => r + 1);
              setPhase("running");
            }}
          >
            {best !== null ? "Rejouer le défi" : "Relever le défi"}
          </button>
        </div>
      )}

      {phase === "running" && (
        <QuizRunner
          key={run}
          questions={items.map((i) => i.question)}
          tags={items.map((i) => ({ label: `${i.subject.emoji} ${i.subject.shortName}`, color: i.subject.color }))}
          onFinish={(o) => {
            recordAttempt({ key, subject: DEFI_SUBJECT, chapter: date, score: o.score });
            setOutcome(o);
            setPhase("done");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      )}

      {phase === "done" && outcome && (
        <div className="space-y-5">
          <section className="card pop-in flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:text-left">
            <ScoreRing score={outcome.score} />
            <div>
              <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                {appreciation(outcome.score)}
              </p>
              <p className="muted">
                {outcome.correct}/{outcome.total} bonnes réponses · +{Math.round(outcome.score * 3 + 5)} XP
              </p>
            </div>
          </section>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setRun((r) => r + 1);
                setPhase("running");
              }}
            >
              ↻ Rejouer
            </button>
            <Link href="/" className="btn btn-ghost">
              Tableau de bord
            </Link>
          </div>
          <ol className="space-y-3">
            {outcome.results.map((r, i) => {
              const it = items[i]!;
              return (
                <li key={i} className={`card border-l-4 p-4 ${r.correct ? "border-l-emerald-500" : "border-l-rose-500"}`}>
                  <p className="mb-1 text-xs font-semibold" style={{ color: it.subject.color }}>
                    {it.subject.emoji} {it.subject.shortName} · {it.chapterTitle}
                  </p>
                  <p className="font-medium">
                    {r.correct ? "✅" : "❌"} {it.question.prompt}
                  </p>
                  {!r.correct && (
                    <p className="mt-1 text-sm">
                      <span className="muted">Ta réponse : </span>
                      <span className="text-rose-600 dark:text-rose-400">{r.given}</span>
                      <span className="muted"> · Bonne réponse : </span>
                      <strong className="text-emerald-700 dark:text-emerald-400">{r.expected}</strong>
                    </p>
                  )}
                  <p className="muted mt-1 text-sm">💡 {it.question.explanation}</p>
                  {!r.correct && (
                    <Link href={`/matieres/${it.subject.slug}/${it.chapterSlug}`} className="mt-1 inline-block text-sm underline underline-offset-2">
                      Revoir le chapitre →
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}
