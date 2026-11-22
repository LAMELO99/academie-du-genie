import type { Subject } from "@/lib/types";
import { court, embed, ordre, qcm, quiz, search, vf } from "../helpers";

const MONKA = "Yvan Monka";

export const maths: Subject = {
  slug: "mathematiques",
  name: "Mathématiques",
  shortName: "Maths",
  coefficient: 4,
  color: "#4f46e5",
  emoji: "📐",
  description: "Calcul, fractions, puissances, équations, géométrie et fonctions.",
  chapters: [
    {
      slug: "priorites-et-relatifs",
      title: "Nombres relatifs et priorités opératoires",
      summary: "Calculer sans se tromper avec des nombres positifs et négatifs.",
      lesson: `## Les priorités opératoires
On effectue les calculs dans cet ordre :
1. Les **parenthèses** (les plus intérieures d'abord)
2. Les **puissances**
3. Les **multiplications et divisions**, de gauche à droite
4. Les **additions et soustractions**, de gauche à droite

> Exemple : 3 + 4 × 2 = 3 + 8 = **11** (et non 14 !)

## Additionner des relatifs
- Même signe : on additionne les distances à zéro et on garde le signe. (−3) + (−5) = **−8**
- Signes différents : on soustrait les distances à zéro et on prend le signe du « plus fort ». (−5) + 8 = **3**
- Soustraire, c'est ajouter l'opposé : 4 − (−2) = 4 + 2 = **6**

## Multiplier et diviser des relatifs
- **Règle des signes** : deux signes identiques donnent **+**, deux signes différents donnent **−**.
- Avec plusieurs facteurs, on compte les négatifs : nombre **pair** → résultat positif, **impair** → négatif.

> Exemple : (−3) × (−4) = **12** ; 24 ÷ (−6) = **−4**`,
      videos: [
        search("Les priorités opératoires", MONKA, "Yvan Monka priorités opératoires"),
        search("Additionner et multiplier des nombres relatifs", MONKA, "Yvan Monka nombres relatifs cours"),
      ],
      evaluation: quiz(
        qcm("Combien vaut 3 + 4 × 2 ?", ["14", "11", "10", "24"], 1, "La multiplication est prioritaire : 4 × 2 = 8, puis 3 + 8 = 11."),
        court("Calcule : (−5) + 8", ["3", "+3"], "Signes différents : 8 − 5 = 3, et c'est 8 (positif) le plus fort, donc +3."),
        qcm("Combien vaut (−3) × (−4) ?", ["−12", "12", "−7", "7"], 1, "Deux signes identiques donnent un résultat positif : 3 × 4 = 12."),
        vf("Dans 20 − 8 ÷ 2, on commence par la soustraction.", false, "La division est prioritaire : 8 ÷ 2 = 4, puis 20 − 4 = 16."),
        court("Calcule : 18 − 2 × (3 + 4)", ["4"], "Parenthèses : 3 + 4 = 7 ; multiplication : 2 × 7 = 14 ; puis 18 − 14 = 4."),
        qcm("Combien vaut −7 − 5 ?", ["−2", "2", "−12", "12"], 2, "On part de −7 et on recule encore de 5 : −7 + (−5) = −12."),
        ordre("Range ces nombres du plus petit au plus grand.", ["−8", "−3", "0", "2", "5"], "Plus un nombre négatif est loin de zéro, plus il est petit : −8 < −3 < 0 < 2 < 5."),
        court("Calcule : 24 ÷ (−6)", ["-4"], "Signes différents → résultat négatif : 24 ÷ 6 = 4, donc −4."),
        vf("Le produit de trois nombres négatifs est négatif.", true, "Trois facteurs négatifs, c'est un nombre impair de signes −, donc le résultat est négatif."),
        qcm("Piège ! Combien vaut 6 − 2 × 3 + 1 ?", ["13", "1", "−1", "9"], 1, "D'abord 2 × 3 = 6. Ensuite de gauche à droite : 6 − 6 = 0, puis 0 + 1 = 1."),
      ),
    },
    {
      slug: "fractions",
      title: "Les fractions",
      summary: "Simplifier, comparer et calculer avec des fractions.",
      lesson: `## Vocabulaire
Dans **a/b**, *a* est le **numérateur** et *b* le **dénominateur** (jamais 0).

## Simplifier
On divise le numérateur et le dénominateur par un même nombre.
> 18/24 = (18 ÷ 6)/(24 ÷ 6) = **3/4**

## Additionner et soustraire
On met les fractions **au même dénominateur**, puis on additionne les numérateurs.
> 1/2 + 1/4 = 2/4 + 1/4 = **3/4**

## Multiplier
On multiplie les numérateurs entre eux et les dénominateurs entre eux.
> 2/3 × 3/5 = 6/15 = **2/5**

## Diviser
Diviser par une fraction, c'est **multiplier par son inverse**.
> 3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = **3/2**

## Prendre une fraction d'une quantité
> Un quart de 60 € : 60 × 1/4 = 60 ÷ 4 = **15 €**`,
      videos: [
        embed("m0HUFgWbgsA", "LE COURS : Les fractions - Sixième - Cinquième", MONKA),
        embed("a0Qb812W75c", "LE COURS : Les fractions - Quatrième - Troisième", MONKA),
      ],
      evaluation: quiz(
        qcm("Quelle est la forme simplifiée de 2/4 ?", ["1/2", "2/3", "1/4", "4/2"], 0, "On divise en haut et en bas par 2 : 2/4 = 1/2."),
        court("Calcule : 1/3 + 1/3 (réponds sous la forme a/b)", ["2/3"], "Même dénominateur : on additionne les numérateurs, 1 + 1 = 2, d'où 2/3.", "a/b"),
        qcm("Combien vaut 1/2 + 1/4 ?", ["2/6", "3/4", "1/6", "2/4"], 1, "1/2 = 2/4, donc 2/4 + 1/4 = 3/4. On n'additionne jamais les dénominateurs !"),
        vf("3/5 est plus grand que 3/4.", false, "Avec le même numérateur, la fraction au plus grand dénominateur est la plus petite : 3/5 = 0,6 < 3/4 = 0,75."),
        court("Calcule et simplifie : 2/3 × 3/5", ["2/5", "6/15", "0.4"], "2 × 3 = 6 et 3 × 5 = 15, donc 6/15, qui se simplifie par 3 en 2/5.", "a/b"),
        qcm("Combien vaut 3/4 ÷ 1/2 ?", ["3/8", "3/2", "2/3", "6/8"], 1, "Diviser par 1/2, c'est multiplier par 2 : 3/4 × 2 = 6/4 = 3/2."),
        ordre("Range ces fractions de la plus petite à la plus grande.", ["1/4", "1/3", "1/2", "2/3", "3/4"], "En décimal : 0,25 < 0,33 < 0,5 < 0,67 < 0,75."),
        court("Simplifie au maximum : 18/24", ["3/4", "0.75"], "Le plus grand diviseur commun est 6 : 18 ÷ 6 = 3 et 24 ÷ 6 = 4.", "a/b"),
        vf("Multiplier le numérateur et le dénominateur par un même nombre non nul ne change pas la valeur de la fraction.", true, "C'est le principe des fractions égales : 1/2 = 2/4 = 5/10."),
        qcm("Combien vaut un quart de 60 € ?", ["15 €", "20 €", "6 €", "240 €"], 0, "Prendre 1/4, c'est diviser par 4 : 60 ÷ 4 = 15 €."),
      ),
    },
    {
      slug: "puissances",
      title: "Les puissances",
      summary: "Écrire et calculer des puissances, notation scientifique.",
      lesson: `## Définition
**aⁿ** = a × a × … × a (n facteurs).
> 2⁵ = 2 × 2 × 2 × 2 × 2 = **32**

Attention : (−2)² = (−2) × (−2) = **4**, mais −2² = −(2 × 2) = **−4**.

## Règles de calcul
- aᵐ × aⁿ = **aᵐ⁺ⁿ** → a³ × a⁴ = a⁷
- (aᵐ)ⁿ = **aᵐˣⁿ** → (5²)³ = 5⁶
- a⁰ = **1** (pour a ≠ 0)

## Puissances de 10
- 10³ = 1 000 ; 10⁰ = 1 ; 10⁻² = 1/100 = **0,01**

## Notation scientifique
Un nombre s'écrit **a × 10ⁿ** avec 1 ≤ a < 10.
> 45 000 = **4,5 × 10⁴** ; 0,003 = 3 × 10⁻³`,
      videos: [
        embed("IxCzv5FPJ3s", "LE COURS : Les puissances - Quatrième - Troisième", MONKA),
        embed("4CEYTrvUP0I", "Calculer les puissances avec les nombres relatifs - Quatrième", MONKA),
      ],
      evaluation: quiz(
        court("Calcule : 2⁵", ["32"], "2 × 2 × 2 × 2 × 2 = 32."),
        qcm("Combien vaut 10³ ?", ["30", "1 000", "100", "10 000"], 1, "10³ = 10 × 10 × 10 = 1 000 (un 1 suivi de 3 zéros)."),
        vf("(−2)² = −4", false, "(−2)² = (−2) × (−2) = 4 : deux signes moins donnent un plus."),
        qcm("Simplifie : a³ × a⁴", ["a⁷", "a¹²", "a¹", "2a⁷"], 0, "Quand on multiplie des puissances d'un même nombre, on additionne les exposants : 3 + 4 = 7."),
        court("Écris 10⁻² en nombre décimal.", ["0.01", "1/100"], "10⁻² = 1/10² = 1/100 = 0,01."),
        qcm("Quelle est l'écriture scientifique de 45 000 ?", ["45 × 10³", "4,5 × 10⁴", "0,45 × 10⁵", "4,5 × 10³"], 1, "Le nombre devant doit être entre 1 et 10 : 4,5 × 10 000 = 45 000."),
        vf("Tout nombre non nul élevé à la puissance 0 vaut 1.", true, "Par convention a⁰ = 1, par exemple 7⁰ = 1."),
        court("Calcule : 3⁴", ["81"], "3 × 3 = 9, 9 × 3 = 27, 27 × 3 = 81."),
        qcm("Simplifie : (5²)³", ["5⁵", "5⁶", "5⁹", "10⁶"], 1, "Puissance d'une puissance : on multiplie les exposants, 2 × 3 = 6."),
        ordre("Range du plus petit au plus grand.", ["10⁻³", "10⁻¹", "10⁰", "10²", "10⁵"], "0,001 < 0,1 < 1 < 100 < 100 000."),
      ),
    },
    {
      slug: "equations",
      title: "Équations du premier degré",
      summary: "Trouver l'inconnue x et résoudre des problèmes.",
      lesson: `## Le principe de la balance
Une équation est une égalité avec une inconnue. On peut faire **la même opération des deux côtés** sans changer les solutions.

## Méthode
1. Regrouper les termes en *x* d'un côté, les nombres de l'autre.
2. Diviser par le coefficient de *x*.
3. **Vérifier** en remplaçant.

> 3x + 5 = 20 → 3x = 15 → x = **5**. Vérification : 3 × 5 + 5 = 20 ✔

> 4x + 1 = 2x + 9 → 2x = 8 → x = **4**

## Avec des parenthèses
On développe d'abord : 5(x − 2) = 15 → 5x − 10 = 15 → 5x = 25 → x = **5**

## Mettre un problème en équation
« Un nombre multiplié par 4, plus 6, donne 30 » → 4x + 6 = 30 → x = **6**

## Cas particulier
0x = 5 n'a **aucune solution** (0 fois un nombre vaut toujours 0).`,
      videos: [
        embed("Z0i031tIdpQ", "LE COURS : Les équations - Quatrième", MONKA),
        embed("WoTpA2RyuVU", "LE COURS : Les équations - Troisième - Seconde", MONKA),
      ],
      evaluation: quiz(
        court("Résous : x + 7 = 12. x = ?", ["5"], "On soustrait 7 des deux côtés : x = 12 − 7 = 5."),
        court("Résous : 3x = 21. x = ?", ["7"], "On divise les deux côtés par 3 : x = 21 ÷ 3 = 7."),
        qcm("Résous : 2x − 4 = 10", ["x = 3", "x = 7", "x = 14", "x = 12"], 1, "2x = 10 + 4 = 14, donc x = 14 ÷ 2 = 7."),
        vf("x = 2 est solution de 5x − 3 = 7.", true, "5 × 2 − 3 = 10 − 3 = 7 ✔"),
        court("Résous : 4x + 1 = 2x + 9. x = ?", ["4"], "4x − 2x = 9 − 1, soit 2x = 8, donc x = 4."),
        qcm("Pour résoudre x/3 = 5, que fait-on des deux côtés ?", ["On ajoute 3", "On multiplie par 3", "On divise par 3", "On soustrait 5"], 1, "On multiplie par 3 pour « défaire » la division : x = 15."),
        ordre("Remets dans l'ordre les étapes pour résoudre 3x + 5 = 20.", ["Écrire l'équation 3x + 5 = 20", "Soustraire 5 des deux côtés : 3x = 15", "Diviser les deux côtés par 3 : x = 5", "Vérifier : 3 × 5 + 5 = 20"], "On isole d'abord le terme en x, puis x lui-même, et on termine toujours par une vérification."),
        court("Résous : 5(x − 2) = 15. x = ?", ["5"], "5x − 10 = 15, donc 5x = 25 et x = 5. (Ou : x − 2 = 3.)"),
        qcm("Un nombre multiplié par 4, auquel on ajoute 6, donne 30. Quel est ce nombre ?", ["6", "9", "24", "4"], 0, "4x + 6 = 30 → 4x = 24 → x = 6."),
        vf("L'équation 0x = 5 a une solution.", false, "0 × x vaut toujours 0, jamais 5 : il n'y a aucune solution."),
      ),
    },
    {
      slug: "pythagore",
      title: "Le théorème de Pythagore",
      summary: "Calculer une longueur dans un triangle rectangle.",
      lesson: `## Le théorème
Dans un triangle **rectangle**, le carré de l'**hypoténuse** (le côté opposé à l'angle droit, le plus long) est égal à la somme des carrés des deux autres côtés.

> Triangle ABC rectangle en A : **BC² = AB² + AC²**

## Calculer l'hypoténuse
> AB = 3, AC = 4 → BC² = 9 + 16 = 25 → BC = **5**

## Calculer un autre côté
> BC = 13, AB = 5 → AC² = 169 − 25 = 144 → AC = **12**

## La réciproque : le triangle est-il rectangle ?
On compare le carré du plus grand côté à la somme des carrés des deux autres.
- 8, 15, 17 : 17² = 289 et 8² + 15² = 64 + 225 = 289 → **rectangle**
- 5, 12, 14 : 14² = 196 mais 25 + 144 = 169 → **pas rectangle**

## Triplets à connaître
(3, 4, 5) — (6, 8, 10) — (5, 12, 13) — (8, 15, 17)`,
      videos: [
        embed("QYM86GzWWG8", "LE COURS : Le théorème de Pythagore - Quatrième", MONKA),
        embed("QsWj9HgGcdk", "EXERCICE : Résoudre un problème à l'aide du théorème de Pythagore", MONKA),
      ],
      evaluation: quiz(
        qcm("Le théorème de Pythagore s'applique dans un triangle…", ["rectangle", "isocèle", "équilatéral", "quelconque"], 0, "Il faut un angle droit : le théorème ne concerne que les triangles rectangles."),
        court("Un triangle rectangle a des côtés de l'angle droit de 3 cm et 4 cm. Longueur de l'hypoténuse (en cm) ?", ["5", "5 cm"], "3² + 4² = 9 + 16 = 25, et √25 = 5."),
        vf("L'hypoténuse est le plus long côté d'un triangle rectangle.", true, "Elle est opposée à l'angle droit, le plus grand angle du triangle."),
        qcm("ABC est rectangle en A. Quelle égalité est vraie ?", ["BC² = AB² + AC²", "AB² = BC² + AC²", "AC² = AB² + BC²", "BC = AB + AC"], 0, "Rectangle en A : l'hypoténuse est [BC], le côté opposé à A."),
        court("Côtés de l'angle droit : 6 et 8. Hypoténuse ?", ["10"], "36 + 64 = 100, et √100 = 10."),
        court("Hypoténuse 13, un côté 5. Longueur du troisième côté ?", ["12"], "13² − 5² = 169 − 25 = 144, et √144 = 12."),
        vf("Un triangle de côtés 5, 12 et 14 est rectangle.", false, "14² = 196 alors que 5² + 12² = 169 : l'égalité n'est pas vérifiée."),
        qcm("Un triangle a pour côtés 8, 15 et 17. Il est…", ["rectangle", "non rectangle", "équilatéral", "impossible à dire"], 0, "17² = 289 et 8² + 15² = 64 + 225 = 289 : la réciproque prouve qu'il est rectangle."),
        court("Un écran mesure 9 pouces de haut et 12 de large. Sa diagonale mesure combien de pouces ?", ["15"], "9² + 12² = 81 + 144 = 225, et √225 = 15."),
        ordre("Remets dans l'ordre les étapes du calcul de l'hypoténuse.", ["Repérer l'angle droit et l'hypoténuse", "Écrire l'égalité de Pythagore", "Remplacer par les longueurs connues", "Calculer la somme des carrés", "Prendre la racine carrée"], "On identifie d'abord la figure, on écrit la formule, puis on calcule et on termine par la racine carrée."),
      ),
    },
    {
      slug: "fonctions-affines",
      title: "Les fonctions affines",
      summary: "f(x) = ax + b : calculer, lire et représenter.",
      lesson: `## Définition
Une fonction **affine** s'écrit **f(x) = ax + b**.
- *a* est le **coefficient directeur** (la pente)
- *b* est l'**ordonnée à l'origine** : f(0) = b
- Si b = 0, f(x) = ax est une fonction **linéaire** (cas particulier d'affine).

## Calculer une image
> f(x) = 2x + 3 → f(4) = 2 × 4 + 3 = **11**

## Trouver un antécédent
On résout f(x) = valeur.
> f(x) = 4x − 8 = 0 → x = **2**

## Représentation graphique
C'est une **droite**.
- a > 0 : la fonction est **croissante** ; a < 0 : **décroissante**.

## Trouver a et b avec deux points
Par (0 ; 1) et (2 ; 5) : a = (5 − 1)/(2 − 0) = **2** et b = 1 → **f(x) = 2x + 1**`,
      videos: [
        embed("n5_pRx4ozIg", "LE COURS : Fonctions affines - Troisième - Seconde", MONKA),
        search("Représenter une fonction affine", MONKA, "Yvan Monka représenter une fonction affine troisième"),
      ],
      evaluation: quiz(
        qcm("Quelle est la forme d'une fonction affine ?", ["f(x) = ax + b", "f(x) = ax²", "f(x) = a/x", "f(x) = √x"], 0, "Une fonction affine est de la forme ax + b."),
        court("f(x) = 2x + 3. Calcule f(4).", ["11"], "f(4) = 2 × 4 + 3 = 8 + 3 = 11."),
        vf("Une fonction linéaire est une fonction affine avec b = 0.", true, "f(x) = ax est bien de la forme ax + b, avec b = 0."),
        qcm("Dans f(x) = −3x + 5, quel est le coefficient directeur ?", ["5", "−3", "3", "−5"], 1, "Le coefficient directeur est le nombre devant x : −3."),
        court("f(x) = 5x − 2. Calcule f(0).", ["-2"], "f(0) = 5 × 0 − 2 = −2 : c'est l'ordonnée à l'origine b."),
        vf("La représentation graphique d'une fonction affine est une droite.", true, "C'est même la propriété qui caractérise les fonctions affines."),
        qcm("Si a > 0, la fonction affine est…", ["croissante", "décroissante", "constante", "impossible à dire"], 0, "Quand x augmente de 1, f(x) augmente de a > 0 : la fonction monte."),
        court("f(x) = 4x − 8. Quel est l'antécédent de 0 ?", ["2"], "On résout 4x − 8 = 0 : 4x = 8, donc x = 2."),
        qcm("Quelle fonction affine passe par les points (0 ; 1) et (2 ; 5) ?", ["f(x) = 2x + 1", "f(x) = x + 2", "f(x) = 4x + 1", "f(x) = 2x + 5"], 0, "b = f(0) = 1 et a = (5 − 1) ÷ (2 − 0) = 2."),
        ordre("Avec f(x) = 2x − 1, range ces images de la plus petite à la plus grande.", ["f(−2)", "f(0)", "f(1)", "f(3)"], "f(−2) = −5, f(0) = −1, f(1) = 1, f(3) = 5 : a > 0 donc f est croissante."),
      ),
    },
  ],
};
