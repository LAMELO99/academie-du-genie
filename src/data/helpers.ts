import type { OrderQuestion, QcmQuestion, ShortQuestion, TrueFalseQuestion, Video } from "@/lib/types";

/** Petits constructeurs pour écrire le contenu de façon compacte. */
export const qcm = (prompt: string, choices: string[], answer: number, explanation: string): QcmQuestion => ({
  type: "qcm",
  prompt,
  choices,
  answer,
  explanation,
});

export const vf = (prompt: string, answer: boolean, explanation: string): TrueFalseQuestion => ({
  type: "vrai-faux",
  prompt,
  answer,
  explanation,
});

export const court = (prompt: string, accept: string[], explanation: string, placeholder?: string): ShortQuestion => ({
  type: "courte",
  prompt,
  accept,
  explanation,
  placeholder,
});

/** Réponse courte où l'orthographe exacte (accents compris) est évaluée. */
export const courtExact = (prompt: string, accept: string[], explanation: string): ShortQuestion => ({
  ...court(prompt, accept, explanation),
  accents: true,
});

export const ordre = (prompt: string, items: string[], explanation: string): OrderQuestion => ({
  type: "ordre",
  prompt,
  items,
  explanation,
});

/** Vidéo intégrée : uniquement des identifiants trouvés et vérifiés, jamais inventés. */
export const embed = (id: string, title: string, channel: string): Video => ({ kind: "embed", id, title, channel });

/** Lien de recherche YouTube, quand on ne peut pas garantir l'identifiant exact. */
export const search = (title: string, channel: string, query: string): Video => ({
  kind: "search",
  query,
  title,
  channel,
});

export const quiz = (...questions: import("@/lib/types").Question[]) => ({ kind: "quiz" as const, questions });
