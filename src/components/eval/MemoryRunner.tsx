"use client";

import { useEffect, useState } from "react";
import type { MemoryEvaluation } from "@/lib/types";
import { gradeMemory, type MemoryResult } from "@/lib/memory";
import { shuffle } from "@/lib/random";

export function MemoryRunner({ evaluation, onFinish }: { evaluation: MemoryEvaluation; onFinish: (r: MemoryResult & { items: string[]; input: string }) => void }) {
  const [items] = useState(() => shuffle(evaluation.pool).slice(0, 10));
  const [phase, setPhase] = useState<"memorize" | "recall">("memorize");
  const [left, setLeft] = useState(evaluation.seconds);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (phase !== "memorize") return;
    const t = setTimeout(() => {
      if (left <= 1) setPhase("recall");
      setLeft((s) => s - 1);
    }, 1000);
    return () => clearTimeout(t);
  }, [left, phase]);

  if (phase === "memorize") {
    return (
      <div className="space-y-5">
        <p className="text-center font-medium">{evaluation.instructions}</p>
        <div className="flex items-center justify-center gap-3">
          <div className="subject-text text-5xl font-bold tabular-nums" aria-live="polite" aria-label={`${left} secondes restantes`}>
            {left}
          </div>
          <span className="muted">secondes</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full surface-2">
          <div className="subject-bg h-full transition-all duration-1000 ease-linear" style={{ width: `${(left / evaluation.seconds) * 100}%` }} />
        </div>
        <ol className={`grid gap-2 ${evaluation.mode === "nombres" ? "grid-cols-5" : "grid-cols-2 sm:grid-cols-5"}`} data-testid="memory-items">
          {items.map((it, i) => (
            <li key={i} className="card relative px-2 py-4 text-center text-lg font-bold sm:text-xl">
              {evaluation.ordered && <span className="muted absolute left-2 top-1 text-[10px] font-medium">{i + 1}</span>}
              {it}
            </li>
          ))}
        </ol>
        <div className="text-center">
          <button type="button" className="btn btn-ghost" onClick={() => setPhase("recall")}>
            J&apos;ai mémorisé, je passe au rappel
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        onFinish({ ...gradeMemory(items, input, evaluation.ordered), items, input });
      }}
    >
      <p className="font-medium">
        Réécris les {items.length} {evaluation.mode === "nombres" ? "nombres" : "mots"}
        {evaluation.ordered ? " dans l'ordre" : ", dans l'ordre que tu veux"}, séparés par des espaces ou des virgules.
      </p>
      <textarea
        rows={4}
        autoFocus
        autoComplete="off"
        autoCapitalize="off"
        spellCheck={false}
        inputMode={evaluation.mode === "nombres" ? "numeric" : "text"}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={evaluation.mode === "nombres" ? "ex. 4 7 1 …" : "ex. pomme, lampe, …"}
        aria-label="Ta liste"
      />
      <button type="submit" className="btn btn-primary w-full">
        Rendre ma copie
      </button>
    </form>
  );
}
