"use client";

import { useState } from "react";
import type { CreativeEvaluation } from "@/lib/types";

const MIN_CHARS = 120;

export interface CreativeOutcome {
  score: number;
  challenge: string;
  text: string;
  marks: number[];
  rubric: string[];
}

export function CreativeRunner({ evaluation, onFinish }: { evaluation: CreativeEvaluation; onFinish: (o: CreativeOutcome) => void }) {
  const [ci, setCi] = useState(() => Math.floor(Math.random() * evaluation.challenges.length));
  const [text, setText] = useState("");
  const [step, setStep] = useState<"write" | "grade">("write");
  const [marks, setMarks] = useState<(number | null)[]>(() => evaluation.rubric.map(() => null));
  const challenge = evaluation.challenges[ci]!;

  if (step === "write") {
    return (
      <div className="space-y-4">
        <div className="card subject-tint p-5">
          <p className="subject-text text-xs font-bold uppercase tracking-wide">Ton défi</p>
          <p className="mt-1 text-xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
            {challenge}
          </p>
          {evaluation.challenges.length > 1 && text.length === 0 && (
            <button type="button" className="muted mt-3 text-sm underline" onClick={() => setCi((ci + 1) % evaluation.challenges.length)}>
              Proposer un autre défi
            </button>
          )}
        </div>
        <textarea
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Commence par noter toutes tes idées, puis développe la meilleure…"
          aria-label="Ta réponse au défi"
        />
        <div className="flex items-center justify-between gap-3">
          <span className="muted text-sm">
            {text.trim().length} / {MIN_CHARS} caractères minimum
          </span>
          <button type="button" className="btn btn-primary" disabled={text.trim().length < MIN_CHARS} onClick={() => setStep("grade")}>
            Passer à l&apos;auto-évaluation →
          </button>
        </div>
      </div>
    );
  }

  const done = marks.every((m) => m !== null);
  const total = marks.reduce<number>((s, m) => s + (m ?? 0), 0);

  return (
    <div className="space-y-4">
      <p className="font-medium">Relis ta production et note-toi honnêtement pour chaque critère : 0 = non, 1 = en partie, 2 = oui, pleinement.</p>
      <ol className="space-y-3">
        {evaluation.rubric.map((r, i) => (
          <li key={i} className="card p-4">
            <p className="mb-3">
              <span className="subject-text mr-1 font-bold">{i + 1}.</span>
              {r}
            </p>
            <div className="grid grid-cols-3 gap-2" role="radiogroup" aria-label={`Critère ${i + 1}`}>
              {[0, 1, 2].map((v) => (
                <button
                  key={v}
                  type="button"
                  role="radio"
                  aria-checked={marks[i] === v}
                  onClick={() => setMarks((prev) => prev.map((m, j) => (j === i ? v : m)))}
                  className={`rounded-lg border-2 py-2 text-sm font-semibold ${marks[i] === v ? "subject-border subject-tint" : "border-app"}`}
                >
                  {v} {v === 0 ? "· non" : v === 1 ? "· en partie" : "· oui"}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <div className="card sticky bottom-20 flex items-center justify-between gap-3 p-4 sm:bottom-4">
        <span className="font-semibold">
          Total : <span className="subject-text">{total}</span> / 20
        </span>
        <div className="flex gap-2">
          <button type="button" className="btn btn-ghost" onClick={() => setStep("write")}>
            ← Modifier
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={!done}
            onClick={() => onFinish({ score: total, challenge, text, marks: marks.map((m) => m ?? 0), rubric: evaluation.rubric })}
          >
            Valider ma note
          </button>
        </div>
      </div>
    </div>
  );
}
