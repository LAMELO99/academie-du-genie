import type { Subject } from "@/lib/types";
import { court, ordre, qcm, quiz, search, vf } from "../helpers";

const NOZMAN = "Dr Nozman";
const EPENSER = "e-penser";

export const svt: Subject = {
  slug: "svt",
  name: "Sciences de la vie et de la Terre",
  shortName: "SVT",
  coefficient: 3,
  color: "#16a34a",
  emoji: "🧬",
  description: "La cellule, le corps humain, la génétique et l'évolution du vivant.",
  chapters: [
    {
      slug: "cellule",
      title: "La cellule, unité du vivant",
      summary: "Tous les êtres vivants sont faits de cellules.",
      lesson: `## Une unité commune
Tous les êtres vivants sont formés de **cellules**. Le corps humain en compte environ **30 000 milliards**. Elles s'observent au **microscope**.

## Ce que contient une cellule
- Une **membrane** qui la délimite
- Le **cytoplasme**
- Un **noyau** qui contient l'**ADN** (sauf chez les bactéries, qui n'ont pas de noyau)
- Des **mitochondries** qui produisent l'énergie (respiration cellulaire)

## Cellule végétale
Elle possède en plus une **paroi** rigide et des **chloroplastes**, siège de la **photosynthèse**.

## Organisation du vivant
**Cellule → tissu → organe → appareil (système) → organisme**

> Toute cellule provient d'une autre cellule, par **division cellulaire**.`,
      videos: [
        search("La cellule expliquée", NOZMAN, "Dr Nozman cellule"),
        search("Qu'est-ce qu'une cellule ?", "Vidéos éducatives", "la cellule unité du vivant cours SVT"),
      ],
      evaluation: quiz(
        qcm("Quelle est l'unité de base de tous les êtres vivants ?", ["La cellule", "L'atome", "L'organe", "Le tissu"], 0, "Tout être vivant est constitué d'une ou plusieurs cellules."),
        vf("Les cellules végétales possèdent une paroi et souvent des chloroplastes.", true, "C'est ce qui les distingue des cellules animales."),
        court("Quelle structure de la cellule contient l'ADN (chez les animaux et les végétaux) ?", ["noyau", "le noyau"], "Le noyau renferme l'information génétique sous forme d'ADN."),
        qcm("Quel organite réalise la photosynthèse ?", ["Le chloroplaste", "La mitochondrie", "Le noyau", "La membrane"], 0, "Les chloroplastes contiennent la chlorophylle, qui capte l'énergie lumineuse."),
        qcm("Quel instrument permet d'observer des cellules ?", ["Le microscope", "Le télescope", "Le périscope", "Le stéthoscope"], 0, "La plupart des cellules mesurent quelques micromètres : il faut un microscope."),
        vf("Une bactérie possède un noyau.", false, "Les bactéries sont des cellules sans noyau : leur ADN est libre dans le cytoplasme."),
        court("Quel organite produit l'énergie de la cellule grâce à la respiration ?", ["mitochondrie", "mitochondries"], "Les mitochondries utilisent le dioxygène et le glucose pour libérer de l'énergie."),
        qcm("Combien de cellules compte environ le corps humain ?", ["Environ 30 000 milliards", "1 million", "100", "1 milliard"], 0, "Les estimations actuelles tournent autour de 30 000 à 37 000 milliards."),
        ordre("Range ces niveaux du plus simple au plus complexe.", ["Cellule", "Tissu", "Organe", "Appareil", "Organisme"], "Des cellules forment des tissus, qui forment des organes, regroupés en appareils dans l'organisme."),
        vf("Toute cellule provient d'une autre cellule par division.", true, "C'est un principe fondamental de la biologie : il n'y a pas de génération spontanée."),
      ),
    },
    {
      slug: "digestion",
      title: "La digestion",
      summary: "Le voyage des aliments jusqu'au sang.",
      lesson: `## Le tube digestif
**Bouche → œsophage → estomac → intestin grêle → gros intestin**.
Le foie et le pancréas sont des **glandes annexes** : les aliments n'y passent pas.

## Une transformation mécanique et chimique
- Les dents broient, l'estomac brasse.
- Les **sucs digestifs** (salive, suc gastrique très acide, suc pancréatique) contiennent des **enzymes** qui découpent les aliments en **nutriments**.
> L'amidon (pain, pâtes) est transformé en **glucose**.
- Le **foie** produit la **bile**, qui aide à digérer les graisses.

## L'absorption
Dans l'**intestin grêle**, les nutriments passent dans le **sang** : c'est l'**absorption**. Ses replis et ses **villosités** multiplient la surface d'échange (plusieurs dizaines de m² chez l'adulte).

## Les déchets
Ce qui n'est pas absorbé passe dans le gros intestin et forme les selles.`,
      videos: [
        search("La digestion", NOZMAN, "Dr Nozman digestion"),
        search("Le système digestif", "Vidéos éducatives", "système digestif cours SVT collège"),
      ],
      evaluation: quiz(
        qcm("Où commence la digestion ?", ["Dans la bouche", "Dans l'estomac", "Dans l'intestin grêle", "Dans le gros intestin"], 0, "Dès la bouche, les dents broient et la salive commence à digérer l'amidon."),
        court("Les sucs digestifs contiennent des molécules qui découpent les aliments. Comment s'appellent-elles ?", ["enzymes", "enzyme", "enzymes digestives"], "Les enzymes digestives transforment les grosses molécules en nutriments."),
        vf("Les nutriments passent dans le sang au niveau de l'intestin grêle.", true, "C'est l'absorption intestinale, facilitée par les villosités."),
        ordre("Remets dans l'ordre le trajet des aliments.", ["Bouche", "Œsophage", "Estomac", "Intestin grêle", "Gros intestin"], "Le tube digestif est un long conduit qui va de la bouche à l'anus."),
        qcm("En quoi l'amidon est-il transformé par la digestion ?", ["En glucose", "En protéines", "En lipides", "En vitamines"], 0, "L'amidon est une longue chaîne de glucose que les enzymes découpent."),
        vf("Le foie fait partie du tube digestif.", false, "Le foie est une glande annexe : les aliments n'y passent pas, mais il produit la bile."),
        court("Comment appelle-t-on le passage des nutriments de l'intestin vers le sang ?", ["absorption", "absorption intestinale"], "C'est l'absorption, qui a lieu surtout dans l'intestin grêle."),
        qcm("Quel organe produit la bile ?", ["Le foie", "Le pancréas", "L'estomac", "La rate"], 0, "La bile est fabriquée par le foie et stockée dans la vésicule biliaire."),
        qcm("À quoi servent les villosités intestinales ?", ["À augmenter la surface d'échange", "À broyer les aliments", "À produire la salive", "À stocker les selles"], 0, "Leurs replis multiplient la surface d'absorption."),
        vf("L'estomac contient un suc très acide.", true, "Le suc gastrique contient de l'acide chlorhydrique (pH proche de 2)."),
      ),
    },
    {
      slug: "circulation-respiration",
      title: "Respiration et circulation sanguine",
      summary: "Le dioxygène voyage des poumons jusqu'aux muscles.",
      lesson: `## La respiration
L'air suit le trajet : **nez/bouche → trachée → bronches → bronchioles → alvéoles pulmonaires**.
Dans les **alvéoles**, le sang prend le **dioxygène (O₂)** et rejette le **dioxyde de carbone (CO₂)**.

## Le cœur
Une pompe musculaire à **quatre cavités** (2 oreillettes, 2 ventricules).
- Les **artères** partent du cœur.
- Les **veines** reviennent au cœur.
- Les **capillaires** relient les deux, au contact des organes.

## Le sang
Les **globules rouges** (hématies) transportent le dioxygène.

## À l'effort
Les muscles utilisent **dioxygène + glucose** pour produire de l'**énergie**. Ils en ont besoin de plus : la **fréquence cardiaque** et la **fréquence respiratoire augmentent**.`,
      videos: [
        search("Comment fonctionne le cœur ?", NOZMAN, "Dr Nozman coeur circulation sanguine"),
        search("La respiration humaine", "Vidéos éducatives", "respiration poumons alvéoles cours SVT"),
      ],
      evaluation: quiz(
        qcm("Quel organe pompe le sang dans tout le corps ?", ["Le cœur", "Les poumons", "Le foie", "Les reins"], 0, "Le cœur est un muscle qui se contracte environ 70 fois par minute au repos."),
        court("Quel gaz les poumons prélèvent-ils dans l'air pour le transmettre au sang ?", ["dioxygène", "oxygène", "O2"], "Le dioxygène (O₂) passe des alvéoles vers le sang."),
        vf("Le sang rejette du dioxyde de carbone au niveau des poumons.", true, "Le CO₂ produit par les organes est expulsé lors de l'expiration."),
        qcm("Où ont lieu les échanges gazeux dans les poumons ?", ["Dans les alvéoles pulmonaires", "Dans les bronches", "Dans la trachée", "Dans les côtes"], 0, "Les alvéoles ont une paroi très fine entourée de capillaires sanguins."),
        qcm("Comment s'appellent les vaisseaux qui partent du cœur ?", ["Les artères", "Les veines", "Les capillaires", "Les nerfs"], 0, "Artères : du cœur vers les organes. Veines : des organes vers le cœur."),
        vf("Le cœur humain comporte quatre cavités.", true, "Deux oreillettes et deux ventricules."),
        court("Quelles cellules du sang transportent le dioxygène ?", ["globules rouges", "globule rouge", "hématies"], "Les globules rouges contiennent l'hémoglobine, qui fixe le dioxygène."),
        qcm("Pendant un effort, la fréquence cardiaque…", ["augmente", "diminue", "reste identique", "s'arrête"], 0, "Les muscles ont besoin de plus de dioxygène et de glucose : le cœur bat plus vite."),
        ordre("Remets dans l'ordre le trajet de l'air inspiré.", ["Nez ou bouche", "Trachée", "Bronches", "Bronchioles", "Alvéoles"], "L'air descend par des conduits de plus en plus fins jusqu'aux alvéoles."),
        qcm("Les muscles utilisent dioxygène et glucose pour produire…", ["de l'énergie", "de l'ADN", "de la bile", "des globules rouges"], 0, "C'est la respiration cellulaire, qui a lieu dans les mitochondries."),
      ),
    },
    {
      slug: "adn-genetique",
      title: "ADN et hérédité",
      summary: "Gènes, chromosomes et transmission des caractères.",
      lesson: `## L'ADN
L'**ADN** est une longue molécule en forme de **double hélice**, située dans le **noyau** des cellules. Il porte l'information génétique.

## Les chromosomes
L'ADN est organisé en **chromosomes**. L'être humain en possède **46**, soit **23 paires**.
- Une paire de chromosomes sexuels : **XX** chez la femme, **XY** chez l'homme.

## Gènes et allèles
- Un **gène** est une portion d'ADN qui détermine un caractère (groupe sanguin, couleur des yeux…).
- Un gène peut exister en plusieurs versions : les **allèles**.

## La transmission
Chaque enfant reçoit **la moitié de ses chromosomes de chaque parent** (un chromosome de chaque paire). Seuls les **vrais jumeaux** ont (presque) le même ADN.

> Du plus petit au plus grand : gène ⊂ chromosome ⊂ noyau ⊂ cellule.`,
      videos: [
        search("L'ADN expliqué simplement", NOZMAN, "Dr Nozman ADN"),
        search("L'ADN et la génétique", EPENSER, "e-penser ADN génétique"),
      ],
      evaluation: quiz(
        qcm("Où se trouve principalement l'ADN ?", ["Dans le noyau des cellules", "Dans la membrane des cellules", "Uniquement dans les os", "Dans le plasma sanguin"], 0, "L'ADN est rangé dans le noyau sous forme de chromosomes."),
        court("Combien de chromosomes possède une cellule humaine ordinaire ?", ["46"], "46 chromosomes, soit 23 paires."),
        vf("Chez l'être humain, les chromosomes vont par paires.", true, "Un chromosome de chaque paire vient du père, l'autre de la mère."),
        qcm("Quels sont les chromosomes sexuels d'un homme ?", ["XY", "XX", "YY", "X seul"], 0, "XY pour un homme, XX pour une femme."),
        qcm("Comment appelle-t-on la portion d'ADN qui détermine un caractère ?", ["Un gène", "Un allèle", "Une protéine", "Une cellule"], 0, "Le gène est l'unité d'information ; l'allèle en est une version."),
        vf("Deux vrais jumeaux ont (presque) le même ADN.", true, "Ils proviennent du même œuf qui s'est séparé en deux."),
        court("Comment appelle-t-on les différentes versions d'un même gène ?", ["allèles", "allèle"], "Exemple : le gène du groupe sanguin a les allèles A, B et O."),
        qcm("Quelle est la forme de la molécule d'ADN ?", ["Une double hélice", "Un cercle simple", "Un cube", "Une étoile"], 0, "Sa structure en double hélice a été décrite en 1953."),
        qcm("D'où viennent les chromosomes d'un enfant ?", ["La moitié de chaque parent", "Tous de la mère", "Tous du père", "Uniquement des grands-parents"], 0, "Chaque parent transmet un chromosome de chaque paire, soit 23 chromosomes."),
        ordre("Range du plus petit au plus grand.", ["Gène", "Chromosome", "Noyau", "Cellule"], "Un gène est une portion de chromosome, les chromosomes sont dans le noyau, le noyau est dans la cellule."),
      ),
    },
    {
      slug: "evolution",
      title: "L'évolution du vivant",
      summary: "Darwin, la sélection naturelle et l'histoire de la vie.",
      lesson: `## Darwin
En 1859, **Charles Darwin** publie *De l'origine des espèces*. Il explique que les espèces se transforment au cours du temps par **sélection naturelle**.

## La sélection naturelle
1. Les individus d'une espèce sont tous un peu différents (grâce aux **mutations** de l'ADN).
2. Ceux qui sont **mieux adaptés** à leur milieu survivent et se **reproduisent davantage**.
3. Leurs caractères se répandent dans la population.

## Les preuves
Les **fossiles** (restes ou traces conservés dans les roches) montrent les espèces disparues.

## Repères
- Vie sur Terre : il y a environ **3,5 à 4 milliards d'années** (bactéries)
- Premiers poissons : environ 500 millions d'années
- Premiers dinosaures : environ 230 millions d'années
- Disparition des dinosaures non aviens : **66 millions d'années**
- *Homo sapiens* : environ 300 000 ans

> L'humain ne descend pas du chimpanzé : ils partagent un **ancêtre commun**. Et les **oiseaux** sont des descendants des dinosaures !`,
      videos: [
        search("La théorie de l'évolution", EPENSER, "e-penser évolution"),
        search("Darwin et la sélection naturelle", NOZMAN, "Dr Nozman évolution"),
      ],
      evaluation: quiz(
        qcm("Qui a publié « De l'origine des espèces » en 1859 ?", ["Charles Darwin", "Louis Pasteur", "Isaac Newton", "Gregor Mendel"], 0, "Darwin y expose la théorie de l'évolution par sélection naturelle."),
        court("Le mécanisme principal de l'évolution décrit par Darwin est la sélection…", ["naturelle", "sélection naturelle"], "La sélection naturelle favorise les individus les mieux adaptés."),
        vf("L'être humain descend du chimpanzé.", false, "Humains et chimpanzés partagent un ancêtre commun, qui a vécu il y a environ 7 millions d'années."),
        qcm("Comment appelle-t-on les restes d'êtres vivants conservés dans les roches ?", ["Des fossiles", "Des minéraux", "Des cristaux", "Des sédiments"], 0, "Les fossiles sont des preuves de l'évolution."),
        vf("Les mutations de l'ADN sont une source de diversité.", true, "Elles créent de nouveaux allèles, sur lesquels agit la sélection naturelle."),
        qcm("Depuis combien de temps environ la vie existe-t-elle sur Terre ?", ["3,5 à 4 milliards d'années", "6 000 ans", "66 millions d'années", "300 000 ans"], 0, "Les plus anciennes traces de vie (bactéries) datent d'environ 3,5 milliards d'années ou plus."),
        court("Il y a environ combien de millions d'années les dinosaures non aviens ont-ils disparu ?", ["66", "65"], "Il y a environ 66 millions d'années, probablement à la suite de la chute d'un astéroïde."),
        qcm("De quel groupe les oiseaux descendent-ils ?", ["Des dinosaures", "Des mammifères", "Des poissons actuels", "Des insectes"], 0, "Les oiseaux sont des dinosaures théropodes qui ont survécu."),
        ordre("Range ces étapes de l'histoire de la vie dans l'ordre chronologique.", ["Premières bactéries", "Premiers poissons", "Premiers dinosaures", "Disparition des dinosaures non aviens", "Apparition d'Homo sapiens"], "≈ 3,5 milliards, 500 millions, 230 millions, 66 millions d'années, puis 300 000 ans."),
        qcm("Selon la sélection naturelle, les individus les mieux adaptés à leur milieu…", ["survivent et se reproduisent davantage", "disparaissent toujours", "ne changent jamais", "choisissent leurs mutations"], 0, "Les mutations sont dues au hasard ; c'est le milieu qui « trie » les individus."),
      ),
    },
  ],
};
