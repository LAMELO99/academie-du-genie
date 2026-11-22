/** Types partagés de l'Académie du Génie. */

export type Video =
  | { kind: "embed"; id: string; title: string; channel: string }
  | { kind: "search"; query: string; title: string; channel: string };

export interface QcmQuestion {
  type: "qcm";
  prompt: string;
  choices: string[];
  /** Index de la bonne réponse dans `choices`. */
  answer: number;
  explanation: string;
}

export interface TrueFalseQuestion {
  type: "vrai-faux";
  prompt: string;
  answer: boolean;
  explanation: string;
}

export interface ShortQuestion {
  type: "courte";
  prompt: string;
  /** Réponses acceptées (comparées sans accents, casse ni espaces superflus). */
  accept: string[];
  explanation: string;
  placeholder?: string;
  /** true : les accents comptent (ex. « chanté » ≠ « chante »). */
  accents?: boolean;
}

export interface OrderQuestion {
  type: "ordre";
  prompt: string;
  /** Éléments dans le BON ordre ; ils sont mélangés à l'affichage. */
  items: string[];
  explanation: string;
}

export type Question = QcmQuestion | TrueFalseQuestion | ShortQuestion | OrderQuestion;

/** Évaluation de mémoire : une liste à mémoriser 30 s puis à réécrire. */
export interface MemoryEvaluation {
  kind: "memoire";
  mode: "mots" | "nombres";
  /** Réservoir dans lequel on tire 10 éléments à chaque tentative. */
  pool: string[];
  /** true : l'ordre compte (rappel sériel). */
  ordered: boolean;
  seconds: number;
  instructions: string;
}

/** Évaluation de créativité : un défi « Et si… » + grille d'auto-évaluation. */
export interface CreativeEvaluation {
  kind: "creativite";
  challenges: string[];
  /** 10 critères notés 0, 1 ou 2 → total sur 20. */
  rubric: string[];
}

export interface QuizEvaluation {
  kind: "quiz";
  questions: Question[];
}

export type Evaluation = QuizEvaluation | MemoryEvaluation | CreativeEvaluation;

export interface Chapter {
  slug: string;
  title: string;
  summary: string;
  /** Fiche de cours en Markdown simplifié (## titres, - listes, **gras**, > exemple). */
  lesson: string;
  videos: Video[];
  evaluation: Evaluation | null;
  locked?: boolean;
}

export interface Subject {
  slug: string;
  name: string;
  shortName: string;
  coefficient: number;
  /** Couleur principale (hex). */
  color: string;
  emoji: string;
  description: string;
  chapters: Chapter[];
  comingSoon?: boolean;
}

export interface Attempt {
  /** Clé "matiere/chapitre" ou "defi/AAAA-MM-JJ". */
  key: string;
  subject: string;
  chapter: string;
  score: number; // sur 20
  date: string; // ISO
}

/** Version allégée d'un chapitre (sans contenu), transmise aux composants client. */
export interface ChapterMeta {
  slug: string;
  title: string;
  summary: string;
  locked?: boolean;
  evaluation: { kind: Evaluation["kind"] } | null;
}

/** Version allégée d'une matière (sans contenu), transmise aux composants client. */
export interface SubjectMeta {
  slug: string;
  name: string;
  shortName: string;
  coefficient: number;
  color: string;
  emoji: string;
  description: string;
  comingSoon?: boolean;
  chapters: ChapterMeta[];
}
