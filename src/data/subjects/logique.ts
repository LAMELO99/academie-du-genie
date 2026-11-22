import type { Subject } from "@/lib/types";
import { court, ordre, qcm, quiz, search, vf } from "../helpers";

const CH = "Énigmes et casse-têtes";

export const logique: Subject = {
  slug: "logique",
  name: "Logique",
  shortName: "Logique",
  coefficient: 2,
  color: "#7c3aed",
  emoji: "🧩",
  description: "Énigmes à pièges, suites, déductions et raisonnements.",
  chapters: [
    {
      slug: "pieges",
      title: "Les énigmes à pièges",
      summary: "Lire attentivement avant de calculer !",
      lesson: `## La règle d'or : relire l'énoncé
Beaucoup d'énigmes sont conçues pour déclencher une réponse **automatique et fausse**. Avant de calculer, demande-toi : *qu'est-ce qu'on me demande exactement ?*

## Les pièges classiques
- **Les mots qui trompent** : « tous meurent **sauf** 9 » → il en reste 9.
- **Le calcul trop rapide** : une batte et une balle coûtent 1,10 € ; la batte coûte 1 € **de plus** que la balle. La balle ne coûte pas 10 centimes mais **5** (5 c + 1,05 € = 1,10 €).
- **Les fausses proportions** : si 5 machines font 5 objets en 5 minutes, chaque machine fait 1 objet en 5 minutes. 100 machines font donc 100 objets en **5 minutes**.
- **La croissance exponentielle** : ce qui double chaque jour était à moitié la veille.
- **Les présupposés** : vérifie que la question a un sens (Moïse ou Noé ? enterrer des survivants ?).

> Astuce : reformule l'énoncé avec tes mots, puis teste ta réponse.`,
      videos: [search("Énigmes à pièges", CH, "énigmes pièges logique réponse")],
      evaluation: quiz(
        court("Un fermier a 17 moutons. Tous meurent sauf 9. Combien en reste-t-il ?", ["9"], "« Tous sauf 9 » : 9 moutons survivent. Pas besoin de calculer 17 − 9 !"),
        qcm("Combien de mois de l'année ont 28 jours ?", ["Les 12", "1 seul", "2", "Aucun"], 0, "Tous les mois ont au moins 28 jours ! Février est le seul à n'en avoir que 28 (ou 29)."),
        court("Une batte et une balle coûtent 1,10 € au total. La batte coûte 1 € de plus que la balle. Combien coûte la balle (en centimes) ?", ["5", "5 centimes"], "Balle = x, batte = x + 1. Donc 2x + 1 = 1,10 et x = 0,05 € = 5 centimes. (10 c donnerait une batte à 1,10 € et un total de 1,20 €.)"),
        vf("Pendant une course, tu doubles le deuxième. Tu es donc premier.", false, "Tu prends sa place : tu es deuxième. Le premier est toujours devant toi."),
        qcm("Le père de Marie a cinq filles : Lala, Lélé, Lili, Lolo… Comment s'appelle la cinquième ?", ["Marie", "Lulu", "Lyly", "Impossible à savoir"], 0, "C'est écrit dans l'énoncé : c'est le père de Marie !"),
        court("Il faut 5 minutes à 5 machines pour fabriquer 5 objets. Combien de minutes faut-il à 100 machines pour fabriquer 100 objets ?", ["5", "5 minutes"], "Chaque machine fabrique 1 objet en 5 minutes. 100 machines fabriquent 100 objets en 5 minutes."),
        qcm("Qu'est-ce qui est le plus lourd : 1 kg de plumes ou 1 kg de plomb ?", ["Aucun, ils pèsent pareil", "Le plomb", "Les plumes", "Ça dépend de la gravité"], 0, "Un kilogramme reste un kilogramme : seul le volume change."),
        court("Un nénuphar double de taille chaque jour. Il couvre tout l'étang en 48 jours. En combien de jours couvre-t-il la moitié de l'étang ?", ["47", "47 jours"], "S'il double chaque jour, la veille (jour 47) il couvrait la moitié. Pas 24 !"),
        vf("Un avion s'écrase pile sur la frontière entre la France et l'Espagne. On enterre les survivants dans leur pays de résidence.", false, "On n'enterre pas les survivants !"),
        qcm("Combien d'animaux de chaque espèce Moïse a-t-il emmenés dans l'arche ?", ["Aucun : c'était Noé", "2", "1", "7"], 0, "Dans le récit biblique, c'est Noé qui construit l'arche, pas Moïse."),
      ),
    },
    {
      slug: "suites-logiques",
      title: "Les suites logiques",
      summary: "Trouver la règle cachée et deviner la suite.",
      lesson: `## La méthode
1. Calcule l'**écart** entre deux termes consécutifs.
2. Si l'écart est constant → on **ajoute** toujours le même nombre. 2, 4, 6, 8 → **10**
3. Sinon, regarde si l'écart **change régulièrement** : 100, 90, 81, 73 (−10, −9, −8, −7) → **66**
4. Cherche un **rapport** : 3, 6, 12, 24 (×2) → **48**

## Les suites célèbres
- **Carrés** : 1, 4, 9, 16, **25**
- **Fibonacci** : chaque terme est la somme des deux précédents. 1, 1, 2, 3, 5, 8, **13**
- **Nombres premiers** : 2, 3, 5, 7, 11, **13**

## Les suites de lettres
- Une lettre sur deux : A, C, E, G, **I**
- Des initiales : L, M, M, J, V, S, **D** (les jours de la semaine !)`,
      videos: [search("Suites logiques", CH, "suites logiques test QI explication")],
      evaluation: quiz(
        court("Complète la suite : 2, 4, 6, 8, …", ["10"], "On ajoute 2 à chaque fois."),
        court("Complète la suite : 1, 4, 9, 16, …", ["25"], "Ce sont les carrés : 1², 2², 3², 4², donc 5² = 25."),
        qcm("Complète : 1, 1, 2, 3, 5, 8, …", ["13", "11", "12", "16"], 0, "Suite de Fibonacci : 5 + 8 = 13."),
        court("Complète la suite : 3, 6, 12, 24, …", ["48"], "On multiplie par 2 à chaque fois."),
        qcm("Complète : L, M, M, J, V, S, …", ["D", "L", "M", "S"], 0, "Ce sont les initiales des jours : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche."),
        court("Complète la suite : 100, 90, 81, 73, …", ["66"], "On retire 10, puis 9, puis 8, puis 7 : 73 − 7 = 66."),
        qcm("Complète : A, C, E, G, …", ["I", "H", "J", "K"], 0, "On saute une lettre à chaque fois : G, (H), I."),
        court("Complète la suite : 2, 3, 5, 7, 11, …", ["13"], "Ce sont les nombres premiers : après 11 vient 13."),
        vf("Dans la suite 1, 2, 4, 8, 16, chaque terme est le double du précédent.", true, "1 × 2 = 2, 2 × 2 = 4, … Le terme suivant est 32."),
        ordre("Range ces nombres pour former une suite où l'on ajoute 3 à chaque étape.", ["4", "7", "10", "13", "16"], "4 + 3 = 7, 7 + 3 = 10, 10 + 3 = 13, 13 + 3 = 16."),
      ),
    },
    {
      slug: "deduction",
      title: "La déduction",
      summary: "Syllogismes, menteurs et sincères, classements.",
      lesson: `## Le syllogisme
« Tous les chats sont des mammifères. Félix est un chat. **Donc** Félix est un mammifère. » ✔
Mais attention : cela ne veut pas dire que tous les mammifères sont des chats !

## Le piège de la réciproque
« S'il pleut, le sol est mouillé. Le sol est mouillé. » → On **ne peut pas** conclure qu'il a plu (quelqu'un a pu arroser).

## Menteurs et sincères
Un sincère dit toujours vrai, un menteur toujours faux. On **suppose** un cas et on cherche une **contradiction**.

## Les classements
Traduis chaque indice en relation simple (A > B, B > C), puis assemble : A > B > C.

## Un seul contre-exemple suffit
« Tous les oiseaux volent » est **faux** : le manchot et l'autruche ne volent pas.`,
      videos: [search("Énigmes de déduction", CH, "énigme logique déduction menteur sincère")],
      evaluation: quiz(
        qcm("Tous les chats sont des mammifères. Félix est un chat. Donc…", ["Félix est un mammifère", "Tous les mammifères sont des chats", "Félix n'est pas un mammifère", "On ne peut rien dire"], 0, "C'est un syllogisme valide : Félix appartient à l'ensemble des chats, inclus dans celui des mammifères."),
        vf("« Tous les oiseaux volent » est vrai.", false, "Un seul contre-exemple suffit : le manchot ou l'autruche."),
        qcm("Alice est plus grande que Bob. Bob est plus grand que Chloé. Qui est le plus petit ?", ["Chloé", "Bob", "Alice", "Impossible à dire"], 0, "Alice > Bob > Chloé."),
        court("Paul a deux fois l'âge de Léa. Léa a 6 ans. Quel âge aura Paul dans 6 ans ?", ["18", "18 ans"], "Paul a 12 ans aujourd'hui, donc 18 ans dans 6 ans (et pas 24 !)."),
        qcm("A dit : « B est un menteur. » B dit : « A et moi sommes du même type. » (Un sincère dit toujours vrai, un menteur toujours faux.) Qui ment ?", ["B", "A", "Les deux", "Aucun"], 0, "Si A mentait, B serait sincère et dirait vrai : A et B seraient du même type, donc A sincère. Contradiction ! A est donc sincère et B ment."),
        vf("« S'il pleut, le sol est mouillé. Le sol est mouillé. Donc il a plu. » Ce raisonnement est valide.", false, "Le sol peut être mouillé pour une autre raison (arrosage). C'est l'erreur de la réciproque."),
        qcm("Trois boîtes sont étiquetées « Pommes », « Oranges » et « Mélange ». Toutes les étiquettes sont fausses. Dans quelle boîte piocher UN seul fruit pour tout réétiqueter ?", ["Celle étiquetée « Mélange »", "Celle étiquetée « Pommes »", "Celle étiquetée « Oranges »", "C'est impossible"], 0, "La boîte « Mélange » ne contient qu'un seul type de fruit. Si tu tires une pomme, c'est la boîte de pommes ; les deux autres étiquettes se déduisent alors."),
        court("Combien de personnes faut-il au minimum pour avoir deux pères et deux fils ?", ["3", "trois"], "Un grand-père, son fils et son petit-fils : 2 pères et 2 fils, mais 3 personnes."),
        qcm("Aucun A n'est B, et tous les C sont des A. Que peut-on conclure ?", ["Aucun C n'est B", "Tous les C sont B", "Certains B sont C", "Tous les B sont A"], 0, "Les C sont à l'intérieur des A, et les A n'ont rien en commun avec les B."),
        ordre("Zoé est première. Nina arrive juste après Léo. Max arrive après Nina. Range les coureurs du premier au dernier.", ["Zoé", "Léo", "Nina", "Max"], "Zoé est 1re. Léo et Nina se suivent, et Max est derrière Nina : Léo 2e, Nina 3e, Max 4e."),
      ),
    },
    {
      slug: "raisonnement-chiffre",
      title: "Problèmes de raisonnement",
      summary: "Des énigmes chiffrées où il faut réfléchir avant de calculer.",
      lesson: `## Raisonner sur une unité
« 3 chats attrapent 3 souris en 3 minutes » → **1 chat attrape 1 souris en 3 minutes**. En 100 minutes, un chat attrape environ 33 souris : il faut donc **3 chats** pour 100 souris.

## Simuler pas à pas
L'escargot qui monte 3 m le jour et redescend 2 m la nuit gagne 1 m par jour… **sauf le dernier jour**, où il sort sans redescendre !

## Compter méthodiquement
- Poignées de main entre 5 personnes : 4 + 3 + 2 + 1 = **10**.
- Combien de fois le chiffre 1 entre 1 et 20 ? On compte les unités ET les dizaines.

## Les durées
Convertis tout dans la même unité avant de comparer : 100 s ≈ 1 min 40 s.

## Le plus petit multiple commun
Divisible par 2, 3 et 5 → 2 × 3 × 5 = **30**.`,
      videos: [search("Problèmes de logique mathématique", CH, "énigmes mathématiques logique escargot puits")],
      evaluation: quiz(
        court("Si 3 chats attrapent 3 souris en 3 minutes, combien de chats faut-il pour attraper 100 souris en 100 minutes ?", ["3", "trois"], "Un chat attrape 1 souris en 3 minutes, soit environ 33 en 100 minutes : 3 chats suffisent."),
        qcm("Un escargot est au fond d'un puits de 10 m. Il monte de 3 m le jour et redescend de 2 m la nuit. En combien de jours sort-il ?", ["8", "10", "7", "5"], 0, "Au matin du 8e jour il est à 7 m ; il monte de 3 m et atteint 10 m : il est sorti, il ne redescend pas."),
        court("Je pense à un nombre. Je le multiplie par 3 et j'ajoute 4 : j'obtiens 19. Quel est ce nombre ?", ["5"], "On remonte les opérations : 19 − 4 = 15, puis 15 ÷ 3 = 5."),
        vf("Un nombre pair plus un nombre pair donne toujours un nombre pair.", true, "2a + 2b = 2(a + b) : c'est toujours un multiple de 2."),
        qcm("Combien de fois écrit-on le chiffre 1 en écrivant tous les nombres de 1 à 20 ?", ["12", "11", "10", "2"], 0, "1, 10, 11 (deux fois), 12, 13, 14, 15, 16, 17, 18, 19 : 1 + 1 + 2 + 8 = 12."),
        court("Un train part à 14 h 45 et le trajet dure 2 h 30. À quelle heure arrive-t-il ?", ["17h15", "17 h 15", "17:15", "17h 15"], "14 h 45 + 2 h = 16 h 45, puis + 30 min = 17 h 15."),
        qcm("Cinq personnes se serrent toutes la main une fois. Combien de poignées de main au total ?", ["10", "20", "25", "5"], 0, "4 + 3 + 2 + 1 = 10 (ou 5 × 4 ÷ 2, car chaque poignée concerne deux personnes)."),
        court("Il y a 3 pommes sur la table. Tu en prends 2. Combien de pommes as-tu ?", ["2", "deux"], "Piège : la question porte sur ce que TU as, c'est-à-dire les 2 que tu as prises."),
        qcm("Quel est le plus petit nombre entier positif divisible à la fois par 2, 3 et 5 ?", ["30", "15", "10", "60"], 0, "2, 3 et 5 sont premiers entre eux : 2 × 3 × 5 = 30."),
        ordre("Range ces durées de la plus courte à la plus longue.", ["100 secondes", "2 minutes", "1/2 heure", "40 minutes", "1 heure"], "100 s ≈ 1,7 min < 2 min < 30 min < 40 min < 60 min."),
      ),
    },
    {
      slug: "enigmes-avancees",
      title: "Énigmes avancées",
      summary: "Devinettes, liens de parenté et probabilités sûres.",
      lesson: `## Sortir du cadre
Certaines énigmes jouent sur un **présupposé** : « un docteur » peut être une femme, un « trou » grandit quand on enlève de la terre…

## Les liens de parenté
Remplace pas à pas : « le fils de mon père », quand on n'a ni frère ni sœur, c'est **moi**.

## Le principe des tiroirs
Avec 2 couleurs de chaussettes, en prendre **3** garantit une paire de même couleur (au pire : 1 rouge, 1 bleue, puis la 3e forme forcément une paire).

## Les jours de la semaine
Les jours reviennent tous les **7** jours : dans 10 jours, c'est comme dans 3 jours.

## Compter les figures
Dans un damier 2 × 2, il y a 4 petits carrés **et** 1 grand : **5** carrés.`,
      videos: [search("Énigmes difficiles expliquées", CH, "énigmes difficiles logique explication")],
      evaluation: quiz(
        qcm("Deux pères et deux fils vont à la pêche. Ils attrapent 3 poissons et chacun en ramène exactement un. Comment est-ce possible ?", ["Ils ne sont que trois : grand-père, père et fils", "Un poisson a été coupé en deux", "L'un d'eux n'a rien pêché", "C'est impossible"], 0, "Le père est à la fois père et fils : 3 personnes suffisent."),
        court("Qu'est-ce qui a des aiguilles mais ne pique pas ?", ["horloge", "montre", "pendule", "réveil"], "Une horloge (ou une montre) a des aiguilles qui indiquent l'heure."),
        vf("Un docteur dit : « Ce garçon est mon frère. » Le garçon dit : « Ce docteur n'est pas mon frère. » C'est impossible.", false, "Le docteur est une femme : c'est sa sœur !"),
        qcm("Plus on m'enlève de matière, plus je deviens grand. Qui suis-je ?", ["Un trou", "Un ballon", "Une ombre", "Un arbre"], 0, "Plus on creuse, plus le trou grandit."),
        court("Combien de carrés y a-t-il au total dans un damier de 2 cases sur 2 ?", ["5", "cinq"], "4 petits carrés + 1 grand carré qui les contient = 5."),
        qcm("Un homme regarde un portrait et dit : « Je n'ai ni frère ni sœur, mais le père de cet homme est le fils de mon père. » Qui est sur le portrait ?", ["Son fils", "Lui-même", "Son père", "Son neveu"], 0, "« Le fils de mon père », c'est lui-même (il est fils unique). Le père de l'homme du portrait, c'est donc lui : c'est son fils."),
        vf("Si aujourd'hui est mercredi, dans 10 jours ce sera samedi.", true, "10 jours = 7 + 3. Mercredi + 3 jours = samedi."),
        court("Aujourd'hui, c'est jeudi. Quel jour était le lendemain d'avant-hier ?", ["mercredi"], "Avant-hier = mardi, et le lendemain de mardi = mercredi (c'est-à-dire hier)."),
        qcm("Dans le noir, un tiroir contient 4 chaussettes rouges et 4 bleues. Combien faut-il en prendre au minimum pour être sûr d'avoir une paire de la même couleur ?", ["3", "2", "5", "8"], 0, "Avec 2 couleurs, au pire les deux premières sont différentes ; la 3e forme forcément une paire."),
        ordre("Anna est plus âgée que Ben. Clara est plus jeune que Ben. Dan est le plus âgé. Range-les du plus jeune au plus âgé.", ["Clara", "Ben", "Anna", "Dan"], "Clara < Ben < Anna, et Dan est le plus âgé de tous."),
      ),
    },
  ],
};
