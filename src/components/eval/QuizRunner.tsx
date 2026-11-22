"use client";

import { useMemo, useState } from "react";
import type { Question } from "@/lib/types";
import { gradeQuiz, type Answer, type QuestionResult } from "@/lib/grading";
import { shuffle, shuffleDifferent } from "@/lib/random";

export interface QuizOutcome {
  score: number;
  correct: number;
  total: number;
  results: QuestionResult[];
}

const TYPE_LABEL: Record<Question["type"], string> = {
  qcm: "QCM",
  "vrai-faux": "Vrai ou faux",
  courte: "Réponse courte",
  ordre: "Remise dans l'ordre",
};

function isAnswered(q: Question, a: Answer) {
  if (q.type === "ordre") return true;
  return a !== null && a !== "";
}

export function QuizRunner({
  questions,
  tags,
  onFinish,
}: {
  questions: Question[];
  /** Étiquette optionnelle par question (ex. la matière dans le défi du jour). */
  tags?: { label: string; color: string }[];
  onFinish: (o: QuizOutcome) => void;
}) {
  // Mélanges propres à cette tentative (le composant n'est monté qu'après « Commencer »).
  const layout = useMemo(
    () =>
      questions.map((q) => ({
        choiceOrder: q.type === "qcm" ? shuffle(q.choices.map((_, i) => i)) : [],
        initialOrder: q.type === "ordre" ? shuffleDifferent(q.items) : [],
      })),
    [questions],
  );
  const [answers, setAnswers] = useState<Answer[]>(() =>
    questions.map((q, i) => (q.type === "ordre" ? (layout[i]?.initialOrder ?? null) : null)),
  );
  const [index, setIndex] = useState(0);
  const q = questions[index]!;
  const a = answers[index] ?? null;
  const setAnswer = (v: Answer) => setAnswers((prev) => prev.map((x, i) => (i === index ? v : x)));
  const isLast = index === questions.length - 1;

  const finish = () => {
    const unanswered = questions.filter((qq, i) => !isAnswered(qq, answers[i] ?? null)).length;
    if (unanswered > 0 && !window.confirm(`Il reste ${unanswered} question(s) sans réponse. Rendre la copie quand même ?`)) return;
    const g = gradeQuiz(questions, answers);
    onFinish({ score: g.score, correct: g.correct, total: questions.length, results: g.results });
  };

  const tag = tags?.[index];

  return (
    <div className="space-y-5">
      <div>
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium">
            Question {index + 1} / {questions.length}
          </span>
          <span className="muted">{TYPE_LABEL[q.type]}</span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full surface-2"
          role="progressbar"
          aria-label="Progression"
          aria-valuenow={index + 1}
          aria-valuemin={1}
          aria-valuemax={questions.length}
        >
          <div className="subject-bg h-full rounded-full transition-all" style={{ width: `${((index + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="card space-y-4 p-5">
        {tag && (
          <span className="inline-block rounded-full px-2.5 py-1 text-xs font-semibold text-white" style={{ background: tag.color }}>
            {tag.label}
          </span>
        )}
        <p className="text-lg font-semibold leading-snug" data-testid="prompt">
          {q.prompt}
        </p>

        {q.type === "qcm" && (
          <div className="grid gap-2" role="radiogroup" aria-label="Choix">
            {layout[index]!.choiceOrder.map((ci) => (
              <button
                key={ci}
                type="button"
                role="radio"
                aria-checked={a === ci}
                onClick={() => setAnswer(ci)}
                className={`rounded-xl border-2 px-4 py-3 text-left transition ${a === ci ? "subject-border subject-tint font-semibold" : "border-app"}`}
              >
                {q.choices[ci]}
              </button>
            ))}
          </div>
        )}

        {q.type === "vrai-faux" && (
          <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Vrai ou faux">
            {[true, false].map((v) => (
              <button
                key={String(v)}
                type="button"
                role="radio"
                aria-checked={a === v}
                onClick={() => setAnswer(v)}
                className={`rounded-xl border-2 px-4 py-4 text-lg font-semibold transition ${a === v ? "subject-border subject-tint" : "border-app"}`}
              >
                {v ? "Vrai" : "Faux"}
              </button>
            ))}
          </div>
        )}

        {q.type === "courte" && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (isLast) finish();
              else setIndex(index + 1);
            }}
          >
            <label className="sr-only" htmlFor={`q-${index}`}>
              Ta réponse
            </label>
            <input
              id={`q-${index}`}
              key={index}
              type="text"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              placeholder={q.placeholder ?? "Ta réponse…"}
              value={typeof a === "string" ? a : ""}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <p className="muted mt-2 text-xs">
              {q.accents
                ? "Attention : ici l'orthographe exacte, accents compris, est évaluée."
                : "Les majuscules et les accents ne comptent pas."}
            </p>
          </form>
        )}

        {q.type === "ordre" && Array.isArray(a) && <OrderList items={a} onChange={(next) => setAnswer(next)} />}
      </div>

      <div className="flex items-center justify-between gap-3">
        <button type="button" className="btn btn-ghost" onClick={() => setIndex(index - 1)} disabled={index === 0}>
          ← Précédente
        </button>
        {isLast ? (
          <button type="button" className="btn btn-primary" onClick={finish}>
            Rendre ma copie
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={() => setIndex(index + 1)}>
            Suivante →
          </button>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-1.5" aria-label="Aller à une question">
        {questions.map((qq, i) => {
          const done = isAnswered(qq, answers[i] ?? null);
          return (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Question ${i + 1}${done ? " (répondue)" : ""}`}
              className={`h-8 w-8 rounded-full text-xs font-semibold ${i === index ? "subject-bg text-white" : done ? "subject-tint subject-text" : "surface-2 muted"}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function OrderList({ items, onChange }: { items: string[]; onChange: (v: string[]) => void }) {
  const move = (i: number, d: -1 | 1) => {
    const j = i + d;
    if (j < 0 || j >= items.length) return;
    const next = [...items];
    [next[i], next[j]] = [next[j]!, next[i]!];
    onChange(next);
  };
  return (
    <div>
      <p className="muted mb-2 text-sm">Remets les éléments dans le bon ordre, du haut vers le bas, avec les flèches.</p>
      <ol className="space-y-2">
        {items.map((it, i) => (
          <li key={it} className="flex items-center gap-2 rounded-xl border border-app p-2 pl-3" style={{ background: "var(--surface)" }}>
            <span className="subject-text w-5 text-sm font-bold">{i + 1}</span>
            <span className="flex-1">{it}</span>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg surface-2 disabled:opacity-30"
              onClick={() => move(i, -1)}
              disabled={i === 0}
              aria-label={`Monter « ${it} »`}
            >
              ↑
            </button>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-lg surface-2 disabled:opacity-30"
              onClick={() => move(i, 1)}
              disabled={i === items.length - 1}
              aria-label={`Descendre « ${it} »`}
            >
              ↓
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
