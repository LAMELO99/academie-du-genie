import type { Subject } from "@/lib/types";
import { search } from "../helpers";

const CH = "Créativité et imagination";

/** Critères communs à tous les défis (notés 0, 1 ou 2). */
const BASE = [
  "J'ai proposé au moins 3 idées différentes avant de choisir.",
  "Mon idée principale est originale (peu de gens y penseraient).",
  "J'ai décrit des conséquences concrètes et précises.",
  "J'ai pensé à au moins une conséquence inattendue ou surprenante.",
  "Mon texte est clair et bien organisé.",
];

export const creativite: Subject = {
  slug: "creativite",
  name: "Créativité",
  shortName: "Créativité",
  coefficient: 1,
  color: "#ca8a04",
  emoji: "💡",
  description: "Défis « Et si… », invention, écriture et résolution créative.",
  chapters: [
    {
      slug: "pensee-divergente",
      title: "La pensée divergente",
      summary: "Trouver un maximum d'idées, sans se censurer.",
      lesson: `## Diverger puis converger
- **Diverger** : produire **beaucoup** d'idées, même farfelues, sans juger.
- **Converger** : choisir ensuite la meilleure et la développer.

## Les règles du brainstorming
1. **La quantité d'abord** : vise 10 idées, pas une seule bonne.
2. **Pas de critique** pendant la recherche.
3. **Rebondir** sur ses propres idées.
4. Les idées **folles** sont bienvenues : elles en inspirent de meilleures.

## Exercice type
« À quoi peut servir un trombone ? » → marque-page, crochet, tige pour réinitialiser un appareil, mini-sculpture, attache pour câbles…

> L'évaluation : un défi « Et si… », puis tu t'auto-évalues honnêtement avec une grille de 10 critères (0, 1 ou 2 points chacun).`,
      videos: [search("La pensée divergente", CH, "pensée divergente créativité exercice")],
      evaluation: {
        kind: "creativite",
        challenges: [
          "Et si les humains pouvaient faire la photosynthèse comme les plantes ?",
          "Et si on ne pouvait plus mentir, même un tout petit peu ?",
          "Et si chaque objet de ta maison pouvait parler pendant une heure par jour ?",
        ],
        rubric: [
          ...BASE,
          "J'ai trouvé au moins 5 conséquences différentes.",
          "J'ai exploré des domaines variés (école, famille, économie, nature…).",
          "J'ai repoussé mes premières idées pour aller plus loin.",
          "J'ai combiné deux idées pour en créer une nouvelle.",
          "J'ai pris du plaisir et osé des idées un peu folles.",
        ],
      },
    },
    {
      slug: "scenarios-et-si",
      title: "Les scénarios « Et si… »",
      summary: "Imaginer un monde où une règle change.",
      lesson: `## La méthode du « Et si… »
On change **une seule règle** du monde, puis on déroule les conséquences **logiquement**.

## L'arbre des conséquences
1. **Conséquence directe** : Et si la gravité diminuait de moitié ? → on saute deux fois plus haut.
2. **Conséquences de second ordre** : les sports changent, les bâtiments peuvent être plus hauts…
3. **Conséquences lointaines** : nouvelles professions, nouvelles lois, nouveaux problèmes.

## Rendre crédible
Pense aux **gagnants** et aux **perdants**, aux métiers qui apparaissent ou disparaissent, à ce qui se passe dans **la vie quotidienne**.

> L'évaluation : écris ton scénario (au moins quelques lignes), puis note-toi avec la grille.`,
      videos: [search("Les défis Et si", CH, "et si scénario imagination science")],
      evaluation: {
        kind: "creativite",
        challenges: [
          "Et si la gravité sur Terre diminuait de moitié du jour au lendemain ?",
          "Et si les dinosaures n'avaient jamais disparu ?",
          "Et si Internet disparaissait pendant un an ?",
        ],
        rubric: [
          ...BASE,
          "J'ai décrit une conséquence directe ET des conséquences de second ordre.",
          "J'ai identifié des gagnants et des perdants.",
          "J'ai imaginé un métier ou un objet nouveau dans ce monde.",
          "Mon scénario reste logique du début à la fin.",
          "J'ai décrit une journée concrète dans ce monde.",
        ],
      },
    },
    {
      slug: "inventer-objets",
      title: "Inventer des objets (SCAMPER)",
      summary: "Transformer un objet existant en invention.",
      lesson: `## La méthode SCAMPER
Sept questions pour réinventer n'importe quel objet :
- **S**ubstituer : remplacer un matériau, une pièce.
- **C**ombiner : fusionner deux objets (un stylo-lampe).
- **A**dapter : s'inspirer d'ailleurs (la nature : le velcro vient de la bardane).
- **M**odifier : agrandir, réduire, changer la forme.
- **P**roposer d'autres usages.
- **É**liminer : retirer une partie (l'écouteur sans fil).
- **R**éorganiser / inverser.

> L'évaluation : invente un objet à partir d'un défi, décris-le, puis note-toi.`,
      videos: [search("La méthode SCAMPER", CH, "méthode SCAMPER créativité exemple")],
      evaluation: {
        kind: "creativite",
        challenges: [
          "Et si tu devais réinventer le cartable pour l'an 2050 ?",
          "Et si un parapluie pouvait faire autre chose que protéger de la pluie ?",
          "Et si tu inventais un objet pour ne plus jamais perdre tes clés ?",
        ],
        rubric: [
          ...BASE,
          "J'ai utilisé au moins 3 lettres de la méthode SCAMPER.",
          "J'ai expliqué à qui sert mon invention.",
          "J'ai décrit comment elle fonctionne.",
          "J'ai pensé à un défaut de mon invention et à une solution.",
          "J'ai donné un nom accrocheur à mon invention.",
        ],
      },
    },
    {
      slug: "ecriture-creative",
      title: "L'écriture créative",
      summary: "Raconter une histoire courte et marquante.",
      lesson: `## La structure d'un récit
1. **Situation initiale** : qui, où, quand ?
2. **Élément perturbateur** : ce qui change tout.
3. **Péripéties** : obstacles et rebondissements.
4. **Dénouement** et **situation finale**.

## Les ingrédients
- Un **personnage** avec un désir.
- Un **obstacle**.
- Des **détails sensoriels** (bruits, odeurs, couleurs).
- Une **chute** surprenante.

## Astuce
« Montrer plutôt que dire » : au lieu de « il avait peur », écris « ses mains tremblaient ».`,
      videos: [search("Conseils d'écriture créative", CH, "écriture créative conseils histoire courte")],
      evaluation: {
        kind: "creativite",
        challenges: [
          "Et si tu te réveillais un matin avec la capacité de comprendre les animaux ? Raconte ta journée.",
          "Et si ton ombre décidait de partir vivre sa propre vie ? Raconte.",
          "Et si tu trouvais une porte dans ta chambre qui n'existait pas hier ? Raconte.",
        ],
        rubric: [
          ...BASE,
          "Mon histoire a un début, un milieu et une fin.",
          "Mon personnage a un désir ou un objectif clair.",
          "J'ai utilisé au moins deux détails sensoriels.",
          "J'ai « montré » une émotion au lieu de la nommer.",
          "Ma fin est surprenante ou marquante.",
        ],
      },
    },
    {
      slug: "resolution-creative",
      title: "La résolution créative de problèmes",
      summary: "Reformuler, inverser, s'inspirer pour résoudre.",
      lesson: `## Reformuler le problème
« Comment avoir de meilleures notes ? » devient « Comment rendre mes révisions plus efficaces ? » ou « Comment mieux dormir avant un contrôle ? ». Chaque formulation ouvre des pistes nouvelles.

## L'inversion
Demande-toi : « Comment **aggraver** le problème ? » puis inverse chaque réponse.
> Pour être en retard : se coucher tard, ne pas préparer son sac… → solutions : se coucher tôt, préparer son sac la veille.

## Le biomimétisme
S'inspirer de la nature : le Shinkansen (train japonais) a un nez inspiré du bec du martin-pêcheur.

## Les six chapeaux (de Bono)
Regarder un problème sous 6 angles : faits, émotions, risques, avantages, créativité, organisation.`,
      videos: [search("Résolution créative de problèmes", CH, "résolution créative de problèmes méthode inversion")],
      evaluation: {
        kind: "creativite",
        challenges: [
          "Et si tu devais réduire de moitié le gaspillage alimentaire à la cantine ?",
          "Et si tu devais rendre les devoirs aussi amusants qu'un jeu vidéo ?",
          "Et si ta ville devait accueillir deux fois plus de vélos sans accident ?",
        ],
        rubric: [
          ...BASE,
          "J'ai reformulé le problème d'au moins deux façons.",
          "J'ai utilisé la technique de l'inversion.",
          "Je me suis inspiré de la nature ou d'un autre domaine.",
          "Ma solution est réalisable concrètement.",
          "J'ai envisagé les obstacles et comment les dépasser.",
        ],
      },
    },
  ],
};
