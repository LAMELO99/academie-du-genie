import type { Subject } from "@/lib/types";
import { court, ordre, qcm, quiz, search, vf } from "../helpers";

const CH = "Stratégie et décision";

export const strategie: Subject = {
  slug: "strategie",
  name: "Stratégie",
  shortName: "Stratégie",
  coefficient: 2,
  color: "#65a30d",
  emoji: "♟️",
  description: "Se fixer des objectifs, anticiper, décider et apprendre des grands stratèges.",
  chapters: [
    {
      slug: "penser-en-stratege",
      title: "Penser comme un stratège",
      summary: "Objectifs, stratégie, tactique et objectifs SMART.",
      lesson: `## Stratégie et tactique
- **Stratégie** : le **plan global** pour atteindre un objectif à **long terme**.
- **Tactique** : les **actions concrètes** à court terme qui servent la stratégie.

## Sun Tzu
Dans **« L'Art de la guerre »** (Chine antique), Sun Tzu écrit : *« Connais ton ennemi et connais-toi toi-même. »* Avant d'agir, un stratège **analyse** ses forces, ses faiblesses et ses ressources.

## Des objectifs SMART
**S**pécifique, **M**esurable, **A**tteignable, **R**éaliste, **T**emporellement défini.
> ✗ « Lire plus » → ✔ « Lire 10 pages par jour pendant un mois »

## La boucle du stratège
**Objectif → analyse → choix d'une stratégie → action → évaluation et ajustement.**
Une bonne stratégie **s'adapte**. Et choisir, c'est aussi **renoncer**.`,
      videos: [
        search("Stratégie et tactique", CH, "différence stratégie tactique explication"),
        search("L'Art de la guerre de Sun Tzu", CH, "Sun Tzu Art de la guerre résumé"),
      ],
      evaluation: quiz(
        qcm("Quelle est la différence entre stratégie et tactique ?", ["La stratégie est le plan global à long terme, la tactique les actions concrètes à court terme", "C'est la même chose", "La tactique est le plan global, la stratégie les détails", "La stratégie ne concerne que la guerre"], 0, "La tactique sert la stratégie, comme les coups servent le plan de jeu."),
        court("Qui a écrit « L'Art de la guerre » ?", ["Sun Tzu", "Sun Zi", "Sunzi"], "Sun Tzu est un stratège chinois de l'Antiquité."),
        vf("« Connais ton ennemi et connais-toi toi-même » est attribué à Sun Tzu.", true, "C'est l'une des maximes les plus célèbres de « L'Art de la guerre »."),
        qcm("Dans un objectif SMART, que signifie le S ?", ["Spécifique", "Simple", "Stratégique", "Solide"], 0, "Un objectif précis est plus facile à atteindre qu'un objectif vague."),
        court("Dans SMART, que signifie le M ?", ["mesurable"], "On doit pouvoir mesurer si l'objectif est atteint."),
        ordre("Remets dans l'ordre la boucle du stratège.", ["Définir l'objectif", "Analyser la situation", "Choisir une stratégie", "Agir", "Évaluer et ajuster"], "On sait où l'on va, on analyse, on choisit, on agit, puis on corrige."),
        vf("Une bonne stratégie ne change jamais.", false, "Les situations évoluent : un bon stratège ajuste son plan."),
        qcm("Lequel de ces objectifs est SMART ?", ["Lire 10 pages par jour pendant un mois", "Lire plus", "Devenir cultivé", "Lire un jour"], 0, "Précis, mesurable, réaliste et limité dans le temps."),
        qcm("Que fait un stratège avant d'agir ?", ["Il analyse ses forces, ses faiblesses et ses ressources", "Il agit au hasard", "Il copie son adversaire", "Il attend que tout se règle seul"], 0, "L'analyse évite de foncer dans un mur."),
        vf("En stratégie, choisir, c'est aussi renoncer.", true, "On ne peut pas tout faire : se concentrer sur une option implique d'en abandonner d'autres."),
      ),
    },
    {
      slug: "theorie-des-jeux",
      title: "La théorie des jeux",
      summary: "Dilemme du prisonnier, équilibre de Nash, coopération.",
      lesson: `## Des jeux pour comprendre les décisions
La **théorie des jeux** étudie les situations où ton résultat dépend aussi des choix des autres.

## Le dilemme du prisonnier
Deux suspects sont interrogés séparément :
- Les deux **se taisent** : **1 an** de prison chacun.
- L'un **trahit**, l'autre se tait : le traître est **libre**, l'autre prend **10 ans**.
- Les deux **trahissent** : **5 ans** chacun.
Trahir est tentant pour chacun… mais si les deux trahissent, ils finissent plus mal que s'ils avaient coopéré.

## Notions clés
- **Équilibre de Nash** (John Nash) : situation où **aucun joueur n'a intérêt à changer seul** de stratégie.
- **Jeu à somme nulle** : ce que l'un gagne, l'autre le perd.
- **Information parfaite** (échecs : on voit tout) ou **imparfaite** (poker : cartes cachées).
- **Donnant-donnant** : coopérer d'abord, puis imiter le dernier coup de l'autre. Une stratégie redoutable dans les jeux répétés.`,
      videos: [
        search("Le dilemme du prisonnier", "Science Étonnante", "dilemme du prisonnier théorie des jeux explication"),
        search("L'équilibre de Nash", CH, "équilibre de Nash expliqué simplement"),
      ],
      evaluation: quiz(
        qcm("Qu'est-ce qu'un jeu à somme nulle ?", ["Ce que l'un gagne, l'autre le perd", "Personne ne gagne jamais", "Tout le monde gagne", "Un jeu sans règles"], 0, "Exemple : une partie d'échecs ou le partage d'un gâteau fixe."),
        court("Quel mathématicien a donné son nom à un équilibre célèbre (film « Un homme d'exception ») ?", ["Nash", "John Nash"], "John Nash, prix Nobel d'économie en 1994."),
        qcm("Dans le dilemme du prisonnier (1 an chacun s'ils se taisent, 5 ans chacun s'ils trahissent tous deux, 0 et 10 ans si un seul trahit), quel choix minimise le total des peines ?", ["Les deux se taisent", "Les deux trahissent", "Un seul trahit", "Aucune différence"], 0, "Total : 2 ans s'ils se taisent, contre 10 ans dans les autres cas."),
        vf("Dans le dilemme du prisonnier, trahir est tentant pour chacun, même si coopérer serait meilleur pour les deux.", true, "C'est tout le paradoxe : l'intérêt individuel s'oppose à l'intérêt collectif."),
        qcm("Que fait la stratégie « donnant-donnant » ?", ["Elle coopère d'abord puis imite le dernier coup de l'autre", "Elle trahit toujours", "Elle joue au hasard", "Elle coopère toujours quoi qu'il arrive"], 0, "Gentille, mais pas naïve : elle répond à la trahison."),
        vf("Les échecs sont un jeu à information parfaite.", true, "Chaque joueur voit toute la position : rien n'est caché."),
        qcm("Le poker est un jeu à…", ["Information imparfaite", "Information parfaite", "Somme positive garantie", "Un seul joueur"], 0, "Les cartes adverses sont cachées."),
        court("Dans le dilemme du prisonnier, si les deux trahissent (5 ans chacun), quel est le total des années de prison ?", ["10"], "5 + 5 = 10 ans, contre seulement 2 ans s'ils avaient coopéré."),
        qcm("Qu'est-ce qu'un équilibre de Nash ?", ["Une situation où aucun joueur n'a intérêt à changer seul de stratégie", "Un match nul", "Une partie où tout le monde gagne", "Un jeu sans adversaire"], 0, "Chacun joue la meilleure réponse aux choix des autres."),
        ordre("Pour le prisonnier A, range les issues de la meilleure à la pire.", ["A trahit, B se tait (0 an)", "Les deux se taisent (1 an)", "Les deux trahissent (5 ans)", "A se tait, B trahit (10 ans)"], "0 < 1 < 5 < 10 ans de prison."),
      ),
    },
    {
      slug: "echecs",
      title: "Stratégie aux échecs",
      summary: "Valeur des pièces, centre, roque et sacrifices.",
      lesson: `## La valeur des pièces
**Pion = 1 · Cavalier = 3 · Fou = 3 · Tour = 5 · Dame = 9** (le roi est inestimable).
Ces valeurs aident à juger un échange.

## Les principes d'ouverture
1. **Contrôler le centre** (cases d4, e4, d5, e5).
2. **Développer** ses pièces rapidement.
3. **Mettre son roi à l'abri** grâce au **roque** (le roi et la tour se déplacent ensemble).

## Vocabulaire
- **Échec et mat** : le roi est attaqué et ne peut pas s'échapper. La partie est gagnée.
- **Pat** : le joueur n'est pas en échec mais n'a aucun coup légal. C'est une **partie nulle**.
- **Sacrifice** : donner du matériel pour obtenir un avantage (attaque, position).

## Une date
En **1997**, l'ordinateur **Deep Blue** (IBM) bat le champion du monde **Garry Kasparov**.`,
      videos: [
        search("Les principes d'ouverture aux échecs", CH, "échecs principes d'ouverture débutant"),
        search("La valeur des pièces aux échecs", CH, "valeur des pièces échecs débutant"),
      ],
      evaluation: quiz(
        court("Combien vaut une tour aux échecs (en points) ?", ["5"], "Tour = 5 points."),
        qcm("Combien vaut la dame ?", ["9", "5", "3", "10"], 0, "La dame est la pièce la plus puissante : 9 points."),
        vf("En début de partie, il est conseillé de contrôler le centre.", true, "Les pièces centrales ont plus de mobilité."),
        court("Comment s'appelle le coup spécial où le roi et la tour se déplacent ensemble ?", ["roque", "roquer"], "Le roque met le roi à l'abri et active la tour."),
        qcm("Que signifie « échec et mat » ?", ["Le roi est attaqué et ne peut pas s'échapper", "Le roi est attaqué mais peut fuir", "La partie est nulle", "On a pris la dame"], 0, "C'est la fin de la partie : le joueur maté a perdu."),
        ordre("Range ces pièces de la moins précieuse à la plus précieuse.", ["Pion", "Cavalier", "Tour", "Dame"], "1, 3, 5 puis 9 points."),
        vf("Le pat est une victoire.", false, "Le pat est une partie nulle : attention à ne pas l'offrir quand on gagne !"),
        qcm("Qu'est-ce qu'un sacrifice aux échecs ?", ["Donner du matériel pour obtenir un avantage", "Abandonner la partie", "Échanger deux pièces égales", "Perdre une pièce par erreur"], 0, "On cède volontairement du matériel pour une attaque ou une meilleure position."),
        qcm("Quel champion du monde a été battu par l'ordinateur Deep Blue en 1997 ?", ["Garry Kasparov", "Magnus Carlsen", "Bobby Fischer", "Anatoli Karpov"], 0, "C'est la première victoire d'une machine sur un champion du monde en match."),
        court("Combien de points représentent ensemble un cavalier, un fou et une tour ?", ["11"], "3 + 3 + 5 = 11."),
      ),
    },
    {
      slug: "decider",
      title: "Décider sous incertitude",
      summary: "SWOT, matrice d'Eisenhower, probabilités et plan B.",
      lesson: `## L'analyse SWOT (FFOM en français)
- **Internes** : **Forces** et **Faiblesses**.
- **Externes** : **Opportunités** et **Menaces**.

## La matrice d'Eisenhower
- **Urgent et important** : à faire **tout de suite**.
- **Important, pas urgent** : à **planifier**.
- **Urgent, pas important** : à **déléguer** ou faire vite.
- **Ni urgent ni important** : à **abandonner**.

## Penser en probabilités
- Une pièce n'a **pas de mémoire** : après 3 « face », la probabilité de « face » reste **1/2**. Croire le contraire, c'est le **sophisme du joueur**.
- L'**espérance** : moyenne des gains pondérée par les probabilités.
> 50 % de gagner 10 €, 50 % de perdre 4 € → 0,5 × 10 − 0,5 × 4 = **+3 €** en moyenne.

## Deux réflexes
- **Loi de Pareto** : environ 80 % des effets viennent de 20 % des causes.
- Toujours prévoir un **plan B**.`,
      videos: [
        search("La matrice d'Eisenhower", CH, "matrice d'Eisenhower urgent important"),
        search("Le sophisme du joueur", "Hygiène Mentale", "sophisme du joueur probabilités"),
      ],
      evaluation: quiz(
        qcm("Dans une analyse SWOT, les opportunités et les menaces sont des facteurs…", ["Externes", "Internes", "Financiers uniquement", "Imaginaires"], 0, "Forces et faiblesses sont internes ; opportunités et menaces viennent de l'environnement."),
        court("SWOT se dit FFOM en français. Que signifie le premier F ?", ["forces"], "Forces, Faiblesses, Opportunités, Menaces."),
        qcm("Matrice d'Eisenhower : une tâche urgente et importante est…", ["À faire tout de suite", "À planifier", "À déléguer", "À abandonner"], 0, "C'est la priorité absolue."),
        qcm("Une tâche importante mais pas urgente est…", ["À planifier", "À faire tout de suite", "À abandonner", "À déléguer"], 0, "C'est là qu'on prépare l'avenir, par exemple réviser bien avant le contrôle."),
        vf("D'après la loi de Pareto, environ 80 % des effets viennent de 20 % des causes.", true, "Exemple : une petite partie du cours rapporte souvent l'essentiel des points."),
        court("Comment appelle-t-on la solution de secours qu'on prépare au cas où ?", ["plan B"], "Un bon stratège prévoit ce qu'il fera si le plan A échoue."),
        qcm("Une pièce équilibrée est tombée 3 fois sur « face ». Probabilité de « face » au prochain lancer ?", ["1/2", "Plus de 1/2", "Moins de 1/2", "0"], 0, "La pièce n'a pas de mémoire : chaque lancer est indépendant."),
        vf("Après plusieurs « pile », « face » devient plus probable.", false, "C'est le sophisme du joueur : les lancers sont indépendants."),
        qcm("Un jeu : 50 % de chances de gagner 10 €, 50 % de perdre 4 €. Quelle est l'espérance de gain ?", ["+3 €", "+6 €", "+14 €", "−3 €"], 0, "0,5 × 10 − 0,5 × 4 = 5 − 2 = 3 €."),
        ordre("Range ces tâches de la plus prioritaire à la moins prioritaire (matrice d'Eisenhower).", ["Urgent et important", "Important, pas urgent", "Urgent, pas important", "Ni urgent ni important"], "Faire, planifier, déléguer, abandonner."),
      ),
    },
    {
      slug: "grandes-strategies",
      title: "Les grandes stratégies de l'histoire",
      summary: "Ruse, encerclement, temporisation et diversion.",
      lesson: `## La ruse : le cheval de Troie
Selon la légende, les Grecs entrent dans Troie cachés dans un **cheval de bois** offert en cadeau.

## L'encerclement : Hannibal à Cannes (216 av. J.-C.)
Le Carthaginois **Hannibal**, qui avait traversé les Alpes avec des **éléphants**, encercle une armée romaine bien plus nombreuse.

## La temporisation : Fabius
Le Romain **Fabius Maximus**, surnommé **« le Temporisateur »**, évite la bataille frontale contre Hannibal et l'épuise peu à peu.

## La manœuvre : Austerlitz (1805)
**Napoléon** feint la faiblesse puis frappe au centre : c'est la « bataille des Trois Empereurs ».

## La terre brûlée : la Russie (1812)
Les **Russes** reculent en détruisant les ressources : la Grande Armée de Napoléon s'épuise.

## La diversion : l'opération Fortitude (1944)
Les Alliés font croire que le débarquement aura lieu dans le **Pas-de-Calais**, et non en Normandie.

> Le point commun : la **surprise** et la **maîtrise de l'information**.`,
      videos: [
        search("La bataille de Cannes", "Nota Bene", "Hannibal bataille de Cannes"),
        search("La bataille d'Austerlitz", "Nota Bene", "bataille d'Austerlitz explication"),
      ],
      evaluation: quiz(
        qcm("Quelle ruse permet aux Grecs de prendre Troie selon la légende ?", ["Un cheval de bois", "Un tunnel", "Un traître", "Un siège de cent ans"], 0, "Les soldats cachés dans le cheval ouvrent les portes de la ville de nuit."),
        qcm("Quelle manœuvre Hannibal réalise-t-il à Cannes en 216 av. J.-C. ?", ["Un encerclement", "Une retraite", "Un siège", "Un débarquement"], 0, "Le centre recule, les ailes se referment : l'armée romaine est encerclée."),
        court("Quelle victoire de Napoléon, en 1805, est surnommée la « bataille des Trois Empereurs » ?", ["Austerlitz"], "Napoléon y bat les empereurs d'Autriche et de Russie."),
        vf("L'opération Fortitude visait à faire croire que le débarquement aurait lieu ailleurs qu'en Normandie.", true, "Faux chars gonflables, faux messages radio : les Allemands attendaient les Alliés dans le Pas-de-Calais."),
        qcm("Qui utilise la stratégie de la terre brûlée en 1812 ?", ["Les Russes contre Napoléon", "Napoléon contre les Russes", "Les Anglais contre les Français", "Hannibal contre Rome"], 0, "En reculant et en détruisant les ressources, les Russes affament la Grande Armée."),
        court("Quel général romain est surnommé « le Temporisateur » ?", ["Fabius", "Fabius Maximus", "Quintus Fabius Maximus"], "Il refuse la bataille frontale contre Hannibal et l'use dans la durée."),
        qcm("Avec quels animaux Hannibal a-t-il traversé les Alpes ?", ["Des éléphants", "Des chameaux", "Des chiens de guerre", "Des bœufs uniquement"], 0, "Ses éléphants de guerre sont restés célèbres."),
        vf("« Diviser pour mieux régner » consiste à unir ses adversaires.", false, "C'est l'inverse : on divise ses adversaires pour les affaiblir."),
        ordre("Range ces événements dans l'ordre chronologique.", ["Guerre de Troie (légende)", "Bataille de Cannes", "Bataille d'Austerlitz", "Campagne de Russie", "Opération Fortitude"], "Légende antique, 216 av. J.-C., 1805, 1812, 1944."),
        qcm("Quel est le point commun de ces grandes stratégies ?", ["La surprise et la maîtrise de l'information", "Avoir toujours plus de soldats", "Attaquer sans réfléchir", "La chance uniquement"], 0, "Cannes, Austerlitz ou Fortitude montrent que l'intelligence peut battre le nombre."),
      ),
    },
  ],
};
