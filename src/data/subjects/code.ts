import type { Chapter, Subject } from "@/lib/types";

const soon = (slug: string, title: string, summary: string): Chapter => ({
  slug,
  title,
  summary,
  lesson: `## Bientôt disponible
Ce chapitre est en préparation. Il contiendra une fiche de cours, des vidéos et une évaluation notée sur 20.`,
  videos: [],
  evaluation: null,
  locked: true,
});

export const code: Subject = {
  slug: "code",
  name: "Code / Informatique",
  shortName: "Code",
  coefficient: 2,
  color: "#475569",
  emoji: "💻",
  description: "Algorithmique et programmation : chapitres bientôt disponibles.",
  comingSoon: true,
  chapters: [
    soon("algorithmes", "Qu'est-ce qu'un algorithme ?", "Des recettes de cuisine aux programmes."),
    soon("variables", "Les variables", "Stocker et manipuler des informations."),
    soon("conditions", "Les conditions", "Si… alors… sinon."),
    soon("boucles", "Les boucles", "Répéter sans se répéter."),
    soon("fonctions", "Les fonctions", "Découper un problème en petits blocs."),
  ],
};
