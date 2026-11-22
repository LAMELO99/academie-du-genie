import type { Subject } from "@/lib/types";
import { search } from "../helpers";

const CH = "Techniques de mémorisation";

const OBJETS = [
  "pomme", "chaise", "guitare", "nuage", "bateau", "cactus", "lampe", "tigre", "montre", "parapluie",
  "fusée", "citron", "violon", "plume", "dragon", "ballon", "clef", "pirate", "tambour", "fromage",
  "volcan", "girafe", "miroir", "bougie", "robot", "piano", "baleine", "couronne", "tracteur", "sapin",
  "pingouin", "valise", "trompette", "carotte", "lune", "marteau", "escargot", "chapeau", "hibou", "gâteau",
];

const ABSTRAITS = [
  "liberté", "courage", "silence", "vitesse", "justice", "hasard", "promesse", "colère", "mystère", "patience",
  "énergie", "sagesse", "victoire", "rêve", "secret", "voyage", "équilibre", "talent", "lumière", "souvenir",
  "fierté", "surprise", "chance", "honneur", "joie", "peur", "espoir", "temps", "idée", "mémoire",
];

const CHIFFRES = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const NOMBRES = Array.from({ length: 90 }, (_, i) => String(i + 10));

export const memoire: Subject = {
  slug: "memoire",
  name: "Mémoire",
  shortName: "Mémoire",
  coefficient: 1,
  color: "#db2777",
  emoji: "🧠",
  description: "Techniques pour retenir des listes, des nombres et des séquences.",
  chapters: [
    {
      slug: "empan-chiffres",
      title: "L'empan de chiffres",
      summary: "Retenir une série de 10 chiffres dans l'ordre.",
      lesson: `## Qu'est-ce que l'empan ?
C'est le nombre d'éléments que ta **mémoire de travail** peut garder à la fois : en moyenne **7 ± 2**. Dix chiffres, c'est donc un vrai défi !

## Technique 1 : le regroupement (« chunking »)
On regroupe les chiffres par **paquets** : 0 6 1 2 4 5 8 9 3 7 devient **06 12 45 89 37**. Cinq paquets au lieu de dix chiffres, comme un numéro de téléphone.

## Technique 2 : la répétition à voix basse
Répète la série dans ta tête, en rythme, pendant les 30 secondes.

## Technique 3 : donner du sens
12 = douze mois, 45 = fin de la guerre, 89 = la Révolution…

> Pendant l'évaluation : tu as **30 secondes** pour mémoriser, puis tu réécris les chiffres **dans l'ordre**, séparés par des espaces.`,
      videos: [search("Mémoriser des nombres", CH, "technique mémoriser des nombres chunking")],
      evaluation: {
        kind: "memoire",
        mode: "nombres",
        pool: CHIFFRES,
        ordered: true,
        seconds: 30,
        instructions: "Mémorise ces 10 chiffres dans l'ordre. Astuce : regroupe-les par deux !",
      },
    },
    {
      slug: "liste-de-mots",
      title: "Retenir une liste de mots",
      summary: "10 objets à retenir, dans n'importe quel ordre.",
      lesson: `## Visualiser
Le cerveau retient bien mieux les **images** que les mots. Pour chaque mot, imagine l'objet de façon **précise, colorée, exagérée**.

## Catégoriser
Classe les mots en groupes : animaux, nourriture, instruments… Il est plus facile de se souvenir de « 3 animaux, 2 fruits, 2 instruments… ».

## L'effet de position
On retient mieux le **début** et la **fin** d'une liste : accorde plus d'attention au **milieu**.

> Pendant l'évaluation : 30 secondes pour mémoriser 10 mots, puis tu les réécris **dans l'ordre que tu veux**.`,
      videos: [search("Retenir une liste de mots", CH, "technique pour retenir une liste de mots")],
      evaluation: {
        kind: "memoire",
        mode: "mots",
        pool: OBJETS,
        ordered: false,
        seconds: 30,
        instructions: "Mémorise ces 10 mots. L'ordre n'a pas d'importance.",
      },
    },
    {
      slug: "methode-des-liens",
      title: "La méthode des liens",
      summary: "Relier les mots par une histoire pour garder l'ordre.",
      lesson: `## Le principe
On invente une **histoire absurde** qui relie chaque mot au suivant. L'histoire garde l'**ordre** tout seul.

> Liste : pomme, guitare, tigre, fusée…
> *Une **pomme** géante joue de la **guitare** ; le bruit réveille un **tigre** qui saute dans une **fusée**…*

## Les règles d'une bonne image
- **Action** : les objets bougent, interagissent.
- **Exagération** : taille énorme, quantité folle.
- **Émotion et humour** : plus c'est drôle, mieux c'est retenu.

> Pendant l'évaluation : 30 secondes pour 10 mots, à réécrire **dans l'ordre**.`,
      videos: [search("La méthode des liens", CH, "méthode des liens mémorisation histoire")],
      evaluation: {
        kind: "memoire",
        mode: "mots",
        pool: OBJETS,
        ordered: true,
        seconds: 30,
        instructions: "Mémorise ces 10 mots DANS L'ORDRE en inventant une histoire qui les relie.",
      },
    },
    {
      slug: "palais-de-memoire",
      title: "Le palais de mémoire",
      summary: "La technique des champions : ranger les idées dans un lieu connu.",
      lesson: `## La méthode des lieux
Utilisée depuis l'Antiquité (Cicéron), c'est la technique des champions de mémoire.
1. Choisis un **lieu que tu connais par cœur** : ta maison, ton trajet vers l'école.
2. Définis un **parcours** avec des étapes : porte d'entrée, paillasson, couloir, cuisine, frigo…
3. Dépose **une image par étape**.
4. Pour te souvenir, tu **refais le trajet** dans ta tête.

## Pourquoi ça marche ?
Notre mémoire **spatiale** est très puissante. Elle sert d'« étagères » pour ranger des informations abstraites.

> Pendant l'évaluation : 10 mots abstraits (plus difficiles !) à placer dans ton palais, puis à réécrire **dans l'ordre**.`,
      videos: [search("Le palais de mémoire", CH, "palais de mémoire méthode des lieux expliquée")],
      evaluation: {
        kind: "memoire",
        mode: "mots",
        pool: ABSTRAITS,
        ordered: true,
        seconds: 30,
        instructions: "Place chaque mot dans une pièce de ton palais de mémoire, puis réécris-les dans l'ordre.",
      },
    },
    {
      slug: "grands-nombres",
      title: "Mémoriser de grands nombres",
      summary: "10 nombres à deux chiffres, dans l'ordre.",
      lesson: `## Des nombres aux images
Les experts associent chaque nombre de 00 à 99 à une **image** fixe. Exemple simple, par la forme ou le sens :
- 10 = une batte et une balle, 11 = des baguettes, 12 = une boîte d'œufs (douzaine), 24 = une journée, 31 = le réveillon…

## Le code phonétique (avancé)
Chaque chiffre correspond à un son : 1 = t/d, 2 = n, 3 = m, 4 = r, 5 = l… 32 = « m-n » → **mine**.

## Combine avec le palais
Place les images des nombres le long de ton parcours : dix nombres deviennent dix scènes.

> Pendant l'évaluation : 10 nombres de 10 à 99 à réécrire **dans l'ordre**, séparés par des espaces.`,
      videos: [search("Système majeur et mémorisation des nombres", CH, "système majeur mémorisation des nombres code phonétique")],
      evaluation: {
        kind: "memoire",
        mode: "nombres",
        pool: NOMBRES,
        ordered: true,
        seconds: 30,
        instructions: "Mémorise ces 10 nombres dans l'ordre. Transforme-les en images !",
      },
    },
  ],
};
