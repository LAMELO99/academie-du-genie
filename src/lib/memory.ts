import { normalize } from "./normalize";
import { scoreOn20 } from "./grading";

export interface MemoryResult {
  correct: number;
  total: number;
  score: number;
  details: { expected: string; found: boolean }[];
}

/** Découpe une saisie libre en éléments (virgules, espaces, retours à la ligne). */
export function splitRecall(input: string): string[] {
  return input
    .split(/[\s,;]+/)
    .map((s) => normalize(s))
    .filter(Boolean);
}

/**
 * Corrige un rappel.
 * - ordered = false : chaque élément retrouvé (n'importe où) compte, sans doublon.
 * - ordered = true  : l'élément doit être à la bonne position.
 */
export function gradeMemory(expected: string[], input: string, ordered: boolean): MemoryResult {
  const given = splitRecall(input);
  const exp = expected.map((e) => normalize(e));
  let details: { expected: string; found: boolean }[];
  if (ordered) {
    details = expected.map((e, i) => ({ expected: e, found: given[i] === exp[i] }));
  } else {
    const remaining = [...given];
    details = expected.map((e, i) => {
      const idx = remaining.indexOf(exp[i] as string);
      if (idx >= 0) remaining.splice(idx, 1);
      return { expected: e, found: idx >= 0 };
    });
  }
  const correct = details.filter((d) => d.found).length;
  return { correct, total: expected.length, score: scoreOn20(correct, expected.length), details };
}
