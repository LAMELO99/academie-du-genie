"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import type { Evaluation } from "@/lib/types";
import { recordAttempt, useHydrated, useProgress } from "@/lib/storage";
import { chapterKey } from "@/lib/stats";
import { appreciation, formatNote, noteColor } from "@/lib/appreciation";
import { formatDateFr } from "@/lib/dates";
import type { QuestionResult } from "@/lib/grading";
import type { MemoryResult } from "@/lib/memory";
import { QuizRunner } from "./QuizRunner";
import { MemoryRunner } from "./MemoryRunner";
import { CreativeRunner, type CreativeOutcome } from "./CreativeRunner";
import { ScoreRing } from "../ScoreRing";

type Outcome =
  | { kind: "quiz"; score: number; correct: number; total: number; results: QuestionResult[]; explanations: string[]; prompts: string[] }
  | ({ kind: "memoire"; score: number } & MemoryResult & { items: string[]; input: string })
  | ({ kind: "creativite" } & CreativeOutcome);

export interface EvaluationRunnerProps {
  subject: { slug: string; name: string; color: string; emoji: string };
  chapter: { slug: string; title: string };
  evaluation: Evaluation;
  next?: { slug: string; title: string } | null;
}

export function EvaluationRunner({ subject, chapter, evaluation, next }: EvaluationRunnerProps) {
  const hydrated = useHydrated();
  const progress = useProgress();
  const [phase, setPhase] = useState<"intro" | "running" | "done">("intro");
  const [attemptId, setAttemptId] = useState(0);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [previousBest, setPreviousBest] = useState<number | null>(null);

  const key = chapterKey(subject.slug, chapter.slug);
  const history = progress.attempts.filter((a) => a.key === key);
  const best = history.length ? Math.max(...history.map((a) => a.score)) : null;
  const chapterHref = `/matieres/${subject.slug}/${chapter.slug}`;

  const finish = (o: Outcome) => {
    setPreviousBest(best);
    recordAttempt({ key, subject: subject.slug, chapter: chapter.slug, score: o.score });
    setOutcome(o);
    setPhase("done");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const start = () => {
    setAttemptId((n) => n + 1);
    setOutcome(null);
    setPhase("running");
  };

  const style = { "--c": subject.color } as CSSProperties;

  return (
    <div style={style} className="space-y-6">
      {phase === "intro" && (
        <div className="card space-y-5 p-6">
          <div>
            <p className="subject-text text-sm font-semibold">
              {subject.emoji} {subject.name}
            </p>
            <h1 className="mt-1 text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              Évaluation : {chapter.title}
            </h1>
          </div>
          <ul className="muted space-y-1 text-sm">
            {evaluation.kind === "quiz" && (
              <>
                <li>• 10 questions (QCM, vrai/faux, réponse courte, remise dans l&apos;ordre)</li>
                <li>• Chaque bonne réponse vaut 2 points : note sur 20</li>
              </>
            )}
            {evaluation.kind === "memoire" && (
              <>
                <li>• Tu as {evaluation.seconds} secondes pour mémoriser 10 {evaluation.mode === "nombres" ? "nombres" : "mots"}</li>
                <li>• Puis tu les réécris {evaluation.ordered ? "dans l'ordre" : "dans n'importe quel ordre"} : 2 points par élément retrouvé</li>
              </>
            )}
            {evaluation.kind === "creativite" && (
              <>
                <li>• Un défi « Et si… » à développer par écrit</li>
                <li>• Puis une auto-évaluation honnête sur 10 critères (0 à 2 points chacun)</li>
              </>
            )}
            <li>• Correction détaillée à la fin, et tu peux refaire l&apos;évaluation : la meilleure note est gardée</li>
          </ul>
          {hydrated && best !== null && (
            <p className="text-sm">
              Ta meilleure note : <strong className={noteColor(best)}>{formatNote(best)}/20</strong> ({history.length} tentative{history.length > 1 ? "s" : ""})
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            <button type="button" className="btn btn-primary" onClick={start}>
              {history.length ? "Recommencer l'évaluation" : "Commencer l'évaluation"}
            </button>
            <Link href={chapterHref} className="btn btn-ghost">
              Revoir le cours
            </Link>
          </div>
        </div>
      )}

      {phase === "running" && (
        <div key={attemptId}>
          {evaluation.kind === "quiz" && (
            <QuizRunner
              questions={evaluation.questions}
              onFinish={(o) =>
                finish({
                  kind: "quiz",
                  ...o,
                  explanations: evaluation.questions.map((q) => q.explanation),
                  prompts: evaluation.questions.map((q) => q.prompt),
                })
              }
            />
          )}
          {evaluation.kind === "memoire" && <MemoryRunner evaluation={evaluation} onFinish={(r) => finish({ kind: "memoire", ...r })} />}
          {evaluation.kind === "creativite" && <CreativeRunner evaluation={evaluation} onFinish={(o) => finish({ kind: "creativite", ...o })} />}
        </div>
      )}

      {phase === "done" && outcome && (
        <ResultView
          outcome={outcome}
          previousBest={previousBest}
          history={history.map((a) => ({ date: a.date, score: a.score }))}
          onRetry={start}
          chapterHref={chapterHref}
          nextHref={next ? `/matieres/${subject.slug}/${next.slug}` : `/matieres/${subject.slug}`}
          nextLabel={next ? `Chapitre suivant : ${next.title}` : "Retour à la matière"}
        />
      )}
    </div>
  );
}

function ResultView({
  outcome,
  previousBest,
  history,
  onRetry,
  chapterHref,
  nextHref,
  nextLabel,
}: {
  outcome: Outcome;
  previousBest: number | null;
  history: { date: string; score: number }[];
  onRetry: () => void;
  chapterHref: string;
  nextHref: string;
  nextLabel: string;
}) {
  const score = outcome.score;
  const isRecord = previousBest !== null && score > previousBest;
  return (
    <div className="space-y-6">
      <section className="card pop-in flex flex-col items-center gap-3 p-6 text-center sm:flex-row sm:text-left">
        <ScoreRing score={score} />
        <div className="space-y-2">
          <p className="muted text-sm font-medium uppercase tracking-wide">Appréciation</p>
          <p className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)" }} data-testid="appreciation">
            {appreciation(score)}
          </p>
          {outcome.kind === "quiz" && (
            <p className="muted">
              {outcome.correct} bonne{outcome.correct > 1 ? "s" : ""} réponse{outcome.correct > 1 ? "s" : ""} sur {outcome.total}
            </p>
          )}
          {outcome.kind === "memoire" && (
            <p className="muted">
              {outcome.correct} élément{outcome.correct > 1 ? "s" : ""} retrouvé{outcome.correct > 1 ? "s" : ""} sur {outcome.total}
            </p>
          )}
          {isRecord && <p className="font-semibold text-emerald-600 dark:text-emerald-400">🎉 Nouveau record ! (avant : {formatNote(previousBest)}/20)</p>}
          {previousBest !== null && !isRecord && <p className="muted text-sm">Meilleure note conservée : {formatNote(Math.max(previousBest, score))}/20</p>}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <button type="button" className="btn btn-primary" onClick={onRetry}>
          ↻ Refaire l&apos;évaluation
        </button>
        <Link href={chapterHref} className="btn btn-ghost">
          Revoir le cours
        </Link>
        <Link href={nextHref} className="btn btn-ghost">
          {nextLabel} →
        </Link>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          Correction détaillée
        </h2>
        {outcome.kind === "quiz" && <QuizCorrection outcome={outcome} />}
        {outcome.kind === "memoire" && <MemoryCorrection outcome={outcome} />}
        {outcome.kind === "creativite" && <CreativeCorrection outcome={outcome} />}
      </section>

      {history.length > 0 && (
        <section className="card p-5">
          <h2 className="mb-3 font-semibold">Historique de tes tentatives</h2>
          <ol className="space-y-1 text-sm">
            {[...history].reverse().map((h, i) => (
              <li key={i} className="flex justify-between border-b border-app py-1 last:border-0">
                <span className="muted">{formatDateFr(h.date)}</span>
                <strong className={noteColor(h.score)}>{formatNote(h.score)}/20</strong>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}

function QuizCorrection({ outcome }: { outcome: Extract<Outcome, { kind: "quiz" }> }) {
  return (
    <ol className="space-y-3">
      {outcome.results.map((r, i) => (
        <li key={i} className={`card border-l-4 p-4 ${r.correct ? "border-l-emerald-500" : "border-l-rose-500"}`} data-testid={r.correct ? "correct" : "wrong"}>
          <p className="font-medium">
            <span aria-hidden>{r.correct ? "✅" : "❌"}</span> <span className="sr-only">{r.correct ? "Juste" : "Faux"} :</span> {i + 1}. {outcome.prompts[i]}
          </p>
          {!r.correct && (
            <div className="mt-2 grid gap-1 text-sm sm:grid-cols-2">
              <p>
                <span className="muted">Ta réponse : </span>
                <span className="text-rose-600 dark:text-rose-400">{r.given}</span>
              </p>
              <p>
                <span className="muted">Bonne réponse : </span>
                <span className="font-semibold text-emerald-700 dark:text-emerald-400">{r.expected}</span>
              </p>
            </div>
          )}
          <p className="muted mt-2 text-sm">💡 {outcome.explanations[i]}</p>
        </li>
      ))}
    </ol>
  );
}

function MemoryCorrection({ outcome }: { outcome: Extract<Outcome, { kind: "memoire" }> }) {
  return (
    <div className="card space-y-3 p-4">
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {outcome.details.map((d, i) => (
          <li
            key={i}
            className={`rounded-lg px-2 py-2 text-center font-semibold ${d.found ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "bg-rose-500/15 text-rose-700 dark:text-rose-300"}`}
          >
            {d.found ? "✓" : "✗"} {d.expected}
          </li>
        ))}
      </ol>
      <p className="text-sm">
        <span className="muted">Ce que tu as écrit : </span>
        {outcome.input.trim() || "(rien)"}
      </p>
      <p className="muted text-sm">
        💡 {outcome.correct >= 8
          ? "Superbe mémoire ! Essaie maintenant une technique plus avancée dans le chapitre suivant."
          : "Relis la fiche de cours et applique la technique pendant les 30 secondes : visualise chaque élément de façon exagérée et relie-les entre eux."}
      </p>
    </div>
  );
}

function CreativeCorrection({ outcome }: { outcome: Extract<Outcome, { kind: "creativite" }> }) {
  const weak = outcome.rubric.map((r, i) => ({ r, m: outcome.marks[i] ?? 0 })).filter((x) => x.m < 2);
  return (
    <div className="space-y-3">
      <div className="card p-4">
        <p className="subject-text text-sm font-semibold">{outcome.challenge}</p>
        <p className="mt-2 whitespace-pre-wrap text-sm">{outcome.text}</p>
      </div>
      <ol className="card space-y-1 p-4 text-sm">
        {outcome.rubric.map((r, i) => (
          <li key={i} className="flex justify-between gap-3 border-b border-app py-1 last:border-0">
            <span>{r}</span>
            <strong>{outcome.marks[i]}/2</strong>
          </li>
        ))}
      </ol>
      {weak.length > 0 && (
        <div className="card p-4 text-sm">
          <p className="mb-2 font-semibold">💡 Pistes pour progresser</p>
          <ul className="muted list-disc space-y-1 pl-5">
            {weak.slice(0, 4).map((w, i) => (
              <li key={i}>La prochaine fois : « {w.r} »</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
