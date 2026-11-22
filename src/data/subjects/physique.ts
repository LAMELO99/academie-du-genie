import type { Subject } from "@/lib/types";
import { court, ordre, qcm, quiz, search, vf } from "../helpers";

const EPENSER = "e-penser";
const NOZMAN = "Dr Nozman";
const PAUL_OLIVIER = "Paul Olivier";

export const physique: Subject = {
  slug: "physique-chimie",
  name: "Physique-Chimie",
  shortName: "Physique",
  coefficient: 3,
  color: "#0891b2",
  emoji: "⚗️",
  description: "Matière, atomes, électricité, mouvement et lumière.",
  chapters: [
    {
      slug: "etats-de-la-matiere",
      title: "Les états de la matière",
      summary: "Solide, liquide, gaz et changements d'état.",
      lesson: `## Trois états
- **Solide** : forme et volume propres.
- **Liquide** : volume propre, prend la forme du récipient.
- **Gaz** : occupe **tout l'espace disponible**, compressible.

## Les changements d'état
- Solide → liquide : **fusion**
- Liquide → solide : **solidification**
- Liquide → gaz : **vaporisation**
- Gaz → liquide : **liquéfaction** (on dit aussi condensation liquide)

## Ce qui se conserve
- La **masse se conserve**.
- Le **volume ne se conserve pas** (l'eau gelée prend plus de place).

## L'eau pure
Sous pression atmosphérique normale : fusion à **0 °C**, ébullition à **100 °C**.
Pendant un changement d'état d'un corps pur, la température reste **constante** : c'est un **palier**.`,
      videos: [
        search("Les changements d'état", PAUL_OLIVIER, "Paul Olivier changements d'état"),
        search("Les états de la matière", NOZMAN, "Dr Nozman états de la matière"),
      ],
      evaluation: quiz(
        qcm("À quelle température l'eau pure gèle-t-elle (pression normale) ?", ["0 °C", "100 °C", "−10 °C", "4 °C"], 0, "La solidification de l'eau pure se fait à 0 °C."),
        court("Comment appelle-t-on le passage de l'état solide à l'état liquide ?", ["fusion"], "La glace qui fond subit une fusion."),
        vf("La masse se conserve lors d'un changement d'état.", true, "100 g de glace donnent 100 g d'eau liquide."),
        qcm("Comment appelle-t-on le passage de l'état liquide à l'état gazeux ?", ["Vaporisation", "Condensation", "Solidification", "Fusion"], 0, "L'ébullition et l'évaporation sont deux formes de vaporisation."),
        vf("Le volume se conserve lors d'un changement d'état.", false, "Le volume change : 1 L d'eau donne environ 1,09 L de glace."),
        qcm("À quelle température l'eau pure bout-elle sous pression atmosphérique normale ?", ["100 °C", "0 °C", "50 °C", "212 °C"], 0, "100 °C (212 est la valeur en degrés Fahrenheit !)."),
        court("Comment appelle-t-on le passage de l'état gazeux à l'état liquide ?", ["liquéfaction", "condensation", "condensation liquide"], "On parle de liquéfaction, ou de condensation liquide (la buée sur une vitre)."),
        qcm("Quelle propriété caractérise un gaz ?", ["Il occupe tout l'espace disponible", "Il a une forme propre", "Il est incompressible", "Il n'a pas de masse"], 0, "Un gaz a une masse, il est compressible et remplit tout le récipient."),
        ordre("On chauffe un glaçon jusqu'à obtenir de la vapeur. Remets dans l'ordre.", ["Solide", "Fusion", "Liquide", "Vaporisation", "Gaz"], "Le glaçon fond (fusion), puis l'eau liquide se vaporise."),
        vf("Pendant la fusion de la glace pure, la température reste constante.", true, "On observe un palier à 0 °C tant qu'il reste de la glace."),
      ),
    },
    {
      slug: "atomes-molecules",
      title: "Atomes et molécules",
      summary: "De quoi la matière est-elle faite ?",
      lesson: `## L'atome
La matière est faite d'**atomes**, extrêmement petits (environ 10⁻¹⁰ m).
- Un **noyau** central contenant des **protons** (+) et des **neutrons**.
- Des **électrons** (−) autour.
- Un atome est **électriquement neutre** (autant de protons que d'électrons).

## Quelques symboles
H (hydrogène), **C** (carbone), **O** (oxygène), N (azote), Na (sodium), Cl (chlore).

## Les molécules
Une **molécule** est un assemblage d'atomes.
- Eau : **H₂O** (2 H + 1 O = 3 atomes)
- Dioxyde de carbone : **CO₂**
- Dioxygène : O₂

## Les transformations chimiques
Les atomes se réarrangent mais **se conservent** : rien ne se perd.
> Combustion du méthane : CH₄ + **2** O₂ → CO₂ + 2 H₂O`,
      videos: [
        search("Qu'est-ce qu'un atome ?", EPENSER, "e-penser atome"),
        search("Atomes et molécules", PAUL_OLIVIER, "Paul Olivier atomes molécules"),
      ],
      evaluation: quiz(
        qcm("Quelle est la formule de la molécule d'eau ?", ["H₂O", "CO₂", "O₂", "NaCl"], 0, "Deux atomes d'hydrogène et un atome d'oxygène."),
        court("Combien d'atomes contient une molécule d'eau H₂O ?", ["3", "trois"], "2 atomes d'hydrogène + 1 atome d'oxygène = 3 atomes."),
        vf("Un atome est électriquement neutre.", true, "Il contient autant de protons (charges +) que d'électrons (charges −)."),
        qcm("Que contient le noyau d'un atome ?", ["Des protons et des neutrons", "Des électrons", "Uniquement des protons", "Des molécules"], 0, "Les électrons se trouvent autour du noyau."),
        qcm("Quel est le symbole du carbone ?", ["C", "Ca", "Co", "K"], 0, "Ca = calcium, Co = cobalt, K = potassium."),
        vf("Au cours d'une transformation chimique, les atomes se conservent.", true, "« Rien ne se perd, rien ne se crée, tout se transforme » (Lavoisier)."),
        court("Quel est le symbole chimique de l'oxygène ?", ["O"], "L'atome d'oxygène a pour symbole O ; la molécule de dioxygène s'écrit O₂."),
        qcm("Que désigne la formule CO₂ ?", ["Le dioxyde de carbone", "Le monoxyde de carbone", "Le méthane", "Le dioxygène"], 0, "Un atome de carbone et deux atomes d'oxygène."),
        ordre("Range du plus petit au plus grand.", ["Noyau d'un atome", "Atome", "Molécule d'eau", "Cellule"], "Le noyau est environ 100 000 fois plus petit que l'atome ; une molécule contient plusieurs atomes ; une cellule, des milliards de molécules."),
        qcm("CH₄ + ? O₂ → CO₂ + 2 H₂O. Combien de molécules de dioxygène faut-il ?", ["2", "1", "3", "4"], 0, "À droite il y a 2 + 2 = 4 atomes d'oxygène, il faut donc 2 molécules d'O₂."),
      ),
    },
    {
      slug: "electricite",
      title: "Circuits électriques et loi d'Ohm",
      summary: "Tension, intensité, résistance et puissance.",
      lesson: `## Les grandeurs
- **Tension** U, en **volts (V)**, mesurée au **voltmètre** branché en **dérivation**.
- **Intensité** I, en **ampères (A)**, mesurée à l'**ampèremètre** branché en **série**.
- **Résistance** R, en **ohms (Ω)**.

## Série ou dérivation
- **Série** : une seule boucle, l'intensité est **la même partout**. Si une lampe grille, tout s'éteint.
- **Dérivation** : plusieurs branches, la **tension est la même** aux bornes de chaque branche.

## La loi d'Ohm
**U = R × I**
> R = 10 Ω, I = 0,5 A → U = 10 × 0,5 = **5 V**
> U = 12 V, R = 4 Ω → I = 12 ÷ 4 = **3 A**

## La puissance
**P = U × I** (en watts).
> 230 V × 0,5 A = **115 W**`,
      videos: [
        search("La loi d'Ohm", PAUL_OLIVIER, "Paul Olivier loi d'Ohm"),
        search("L'électricité expliquée", EPENSER, "e-penser électricité"),
      ],
      evaluation: quiz(
        qcm("Quelle est l'unité de la tension électrique ?", ["Le volt", "L'ampère", "L'ohm", "Le watt"], 0, "La tension s'exprime en volts (V)."),
        court("R = 10 Ω et I = 0,5 A. Calcule la tension U (en V).", ["5", "5 V"], "U = R × I = 10 × 0,5 = 5 V."),
        vf("Dans un circuit en série, l'intensité est la même en tout point.", true, "C'est la loi d'unicité de l'intensité en série."),
        qcm("Quel appareil mesure l'intensité ?", ["L'ampèremètre", "Le voltmètre", "L'ohmmètre", "Le thermomètre"], 0, "L'ampèremètre se branche en série."),
        vf("Le voltmètre se branche en série.", false, "Le voltmètre se branche en dérivation, aux bornes du dipôle."),
        court("U = 12 V et R = 4 Ω. Calcule l'intensité I (en A).", ["3", "3 A"], "I = U ÷ R = 12 ÷ 4 = 3 A."),
        qcm("Une lampe fonctionne sous 230 V avec une intensité de 0,5 A. Quelle est sa puissance ?", ["115 W", "230 W", "460 W", "0,002 W"], 0, "P = U × I = 230 × 0,5 = 115 W."),
        qcm("Dans un circuit en série, une lampe grille. Que se passe-t-il ?", ["Les autres lampes s'éteignent", "Les autres brillent plus", "Rien ne change", "Il y a un court-circuit"], 0, "Le circuit est ouvert : le courant ne circule plus du tout."),
        vf("En dérivation, la tension est la même aux bornes de chaque branche.", true, "C'est pourquoi les appareils de la maison sont branchés en dérivation (230 V chacun)."),
        ordre("Range ces intensités de la plus petite à la plus grande.", ["20 mA", "0,5 A", "2 A", "1 kA"], "20 mA = 0,02 A ; 1 kA = 1 000 A."),
      ),
    },
    {
      slug: "vitesse-mouvement",
      title: "Vitesse et mouvement",
      summary: "Décrire un mouvement et calculer une vitesse.",
      lesson: `## Décrire un mouvement
- Le mouvement dépend du **référentiel** : un passager est immobile par rapport au train, mais en mouvement par rapport au quai.
- **Trajectoire** : rectiligne, circulaire ou curviligne.
- **Vitesse** : **uniforme** (constante), **accélérée** ou **ralentie**.

## La vitesse moyenne
**v = d ÷ t**
> 150 km en 2 h → v = **75 km/h**
> 90 km/h pendant 30 min (0,5 h) → d = 90 × 0,5 = **45 km**

## Conversions
**1 m/s = 3,6 km/h**
> 36 km/h ÷ 3,6 = **10 m/s**

## Quelques vitesses
Son dans l'air : environ **340 m/s**. Lumière dans le vide : environ **300 000 km/s**.`,
      videos: [
        search("Calculer une vitesse", PAUL_OLIVIER, "Paul Olivier vitesse mouvement"),
        search("Le mouvement et la relativité", EPENSER, "e-penser mouvement référentiel"),
      ],
      evaluation: quiz(
        qcm("Quelle est la formule de la vitesse moyenne ?", ["v = d ÷ t", "v = d × t", "v = t ÷ d", "v = d + t"], 0, "La vitesse est une distance parcourue divisée par la durée."),
        court("Une voiture parcourt 150 km en 2 h. Vitesse moyenne en km/h ?", ["75", "75 km/h"], "v = 150 ÷ 2 = 75 km/h."),
        qcm("1 m/s correspond à…", ["3,6 km/h", "36 km/h", "1 000 km/h", "60 km/h"], 0, "En 1 h (3 600 s) on parcourt 3 600 m = 3,6 km."),
        vf("Un mouvement uniforme a une vitesse constante.", true, "Uniforme signifie que la valeur de la vitesse ne change pas."),
        court("Convertis 36 km/h en m/s.", ["10", "10 m/s"], "36 ÷ 3,6 = 10 m/s."),
        qcm("Une balle lâchée tombe verticalement. Son mouvement est…", ["rectiligne accéléré", "circulaire uniforme", "rectiligne ralenti", "immobile"], 0, "Elle va tout droit vers le bas et sa vitesse augmente à cause de la pesanteur."),
        vf("La description d'un mouvement dépend du référentiel choisi.", true, "Un passager assis est immobile dans le train mais avance par rapport au quai."),
        court("Une voiture roule à 90 km/h pendant 30 minutes. Distance parcourue (en km) ?", ["45", "45 km"], "30 min = 0,5 h, donc d = 90 × 0,5 = 45 km."),
        qcm("Quelle est la vitesse de la lumière dans le vide (environ) ?", ["300 000 km/s", "300 km/h", "340 m/s", "3 000 km/s"], 0, "340 m/s, c'est la vitesse du son dans l'air."),
        ordre("Range du plus lent au plus rapide.", ["Escargot", "Piéton", "Guépard", "Son dans l'air", "Lumière"], "≈ 0,001 m/s, 1,4 m/s, 30 m/s, 340 m/s, 300 000 km/s."),
      ),
    },
    {
      slug: "lumiere",
      title: "La lumière",
      summary: "Propagation, couleurs et année-lumière.",
      lesson: `## Sources de lumière
- **Sources primaires** : produisent leur propre lumière (Soleil, lampe, flamme).
- **Objets diffusants** : renvoient la lumière reçue (Lune, cahier).

## Propagation
Dans un milieu **homogène et transparent**, la lumière se propage **en ligne droite**. Elle peut voyager **dans le vide**, à environ **300 000 km/s**.
- Lumière du Soleil → Terre : environ **8 minutes**.
- L'**année-lumière** est une unité de **distance** (≈ 9 500 milliards de km).

## Les couleurs
- La lumière blanche est un mélange de couleurs : un **prisme** la décompose en un **spectre** (rouge, orange, jaune, vert, bleu, violet).
- Couleurs primaires de la lumière (synthèse additive) : **rouge, vert, bleu**.
- Un objet rouge **diffuse** le rouge et **absorbe** les autres couleurs.`,
      videos: [
        search("La vitesse de la lumière", EPENSER, "e-penser lumière"),
        search("La lumière et les couleurs", PAUL_OLIVIER, "Paul Olivier lumière couleurs"),
      ],
      evaluation: quiz(
        qcm("Dans un milieu homogène et transparent, la lumière se propage…", ["en ligne droite", "en zigzag", "en cercle", "elle ne se propage pas"], 0, "C'est la propagation rectiligne de la lumière, représentée par des rayons."),
        vf("La lumière blanche est composée de plusieurs couleurs.", true, "Newton l'a montré avec un prisme."),
        court("Quand un prisme décompose la lumière blanche, on obtient un…", ["spectre", "spectre lumineux"], "Le spectre de la lumière blanche va du rouge au violet, comme l'arc-en-ciel."),
        qcm("Combien de temps met la lumière du Soleil pour atteindre la Terre ?", ["Environ 8 minutes", "1 seconde", "1 heure", "1 jour"], 0, "150 millions de km ÷ 300 000 km/s ≈ 500 s ≈ 8 min 20 s."),
        vf("La lumière peut se propager dans le vide.", true, "Contrairement au son, elle n'a pas besoin de matière : elle nous arrive des étoiles."),
        qcm("Lequel de ces objets est une source primaire de lumière ?", ["Le Soleil", "La Lune", "Un miroir", "Un cahier blanc"], 0, "La Lune ne fait que diffuser la lumière du Soleil."),
        court("Une année-lumière est une unité de…", ["distance", "longueur"], "C'est la distance parcourue par la lumière en un an, environ 9 500 milliards de km."),
        qcm("Quelles sont les trois couleurs primaires de la lumière ?", ["Rouge, vert, bleu", "Rouge, jaune, bleu", "Cyan, magenta, jaune", "Noir, blanc, gris"], 0, "En synthèse additive (écrans), rouge + vert + bleu = blanc."),
        vf("Un objet rouge éclairé en lumière blanche absorbe le rouge.", false, "Il diffuse le rouge (c'est pour ça qu'on le voit rouge) et absorbe les autres couleurs."),
        ordre("Range ces couleurs dans l'ordre de l'arc-en-ciel, du rouge au violet.", ["Rouge", "Orange", "Jaune", "Vert", "Bleu", "Violet"], "C'est l'ordre du spectre de la lumière blanche."),
      ),
    },
  ],
};
