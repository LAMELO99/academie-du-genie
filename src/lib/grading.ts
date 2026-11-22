import type { Question } from "./types";
import { matchesShort } from "./normalize";

/** Réponse donnée par l'élève, selon le type de question. */
export type Answer = number | boolean | string | string[] | null;

export interface QuestionResult {
  correct: boolean;
  expected: string;
  given: string;
}

export function expectedText(q: Question): string {
  switch (q.type) {
    case "qcm":
      return q.choices[q.answer] ?? "";
    case "vrai-faux":
      return q.answer ? "Vrai" : "Faux";
    case "courte":
      return q.accept[0] ?? "";
    case "ordre":
      return q.items.join(" → ");
  }
}

export function givenText(q: Question, a: Answer): string {
  if (a === null || a === undefined || a === "") return "(pas de réponse)";
  switch (q.type) {
    case "qcm":
      return typeof a === "number" ? (q.choices[a] ?? "") : "";
    case "vrai-faux":
      return a === true ? "Vrai" : "Faux";
    case "courte":
      return String(a);
    case "ordre":
      return Array.isArray(a) ? a.join(" → ") : "";
  }
}

export function gradeQuestion(q: Question, a: Answer): QuestionResult {
  let correct = false;
  switch (q.type) {
    case "qcm":
      correct = a === q.answer;
      break;
    case "vrai-faux":
      correct = a === q.answer;
      break;
    case "courte":
      correct = typeof a === "string" && matchesShort(a, q.accept, q.accents === true);
      break;
    case "ordre":
      correct =
        Array.isArray(a) && a.length === q.items.length && a.every((v, i) => v === q.items[i]);
      break;
  }
  return { correct, expected: expectedText(q), given: givenText(q, a) };
}

/** Note sur 20, arrondie au demi-point. */
export function scoreOn20(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round(((correct / total) * 20) * 2) / 2;
}

export function gradeQuiz(questions: Question[], answers: Answer[]) {
  const results = questions.map((q, i) => gradeQuestion(q, answers[i] ?? null));
  const correct = results.filter((r) => r.correct).length;
  return { results, correct, score: scoreOn20(correct, questions.length) };
}

/** Bonne réponse "canonique" pour une question (utilisé par les tests). */
export function correctAnswer(q: Question): Answer {
  switch (q.type) {
    case "qcm":
      return q.answer;
    case "vrai-faux":
      return q.answer;
    case "courte":
      return q.accept[0] ?? "";
    case "ordre":
      return [...q.items];
  }
}
