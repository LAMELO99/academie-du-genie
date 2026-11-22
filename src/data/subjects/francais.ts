import type { Subject } from "@/lib/types";
import { court, courtExact, embed, ordre, qcm, quiz, search, vf } from "../helpers";

const BONS_PROFS = "Les Bons Profs";

export const francais: Subject = {
  slug: "francais",
  name: "Français et littérature",
  shortName: "Français",
  coefficient: 4,
  color: "#e11d48",
  emoji: "📖",
  description: "Grammaire, conjugaison, orthographe, figures de style et grands auteurs.",
  chapters: [
    {
      slug: "classes-grammaticales",
      title: "Les classes grammaticales",
      summary: "Reconnaître la nature des mots : nom, verbe, adjectif…",
      lesson: `## Les mots variables
- **Nom** : désigne une personne, un animal, une chose, une idée. *chat, Paris, liberté*
- **Déterminant** : précède le nom. Articles (*le, une, des*), possessifs (*mon, notre*), démonstratifs (*ce, cette*)
- **Adjectif** : précise le nom. *un **petit** chat*
- **Pronom** : remplace un nom. *il, nous, celui-ci, qui*
- **Verbe** : exprime une action ou un état. Il se conjugue. *dort, est*

## Les mots invariables
- **Adverbe** : modifie un verbe, un adjectif… *vite, très, rapidement*
- **Préposition** : *à, de, pour, sous, avec, sans*
- **Conjonction de coordination** : **mais, ou, et, donc, or, ni, car**
- **Conjonction de subordination** : *que, quand, parce que, si*

> Astuce : un adverbe en **-ment** vient souvent d'un adjectif : rapide → rapidement.`,
      videos: [search("Les classes grammaticales", BONS_PROFS, "Les Bons Profs classes grammaticales nature des mots")],
      evaluation: quiz(
        qcm("Dans « Le petit chat dort », quelle est la nature de « petit » ?", ["Nom", "Adjectif", "Verbe", "Adverbe"], 1, "« Petit » précise le nom « chat » : c'est un adjectif qualificatif."),
        qcm("Quelle est la nature de « rapidement » ?", ["Adjectif", "Adverbe", "Nom", "Préposition"], 1, "Mot invariable en -ment formé sur l'adjectif « rapide » : c'est un adverbe."),
        vf("« Et » est une conjonction de coordination.", true, "Mais, ou, et, donc, or, ni, car : ce sont les sept conjonctions de coordination."),
        court("Quelle est la nature de « dort » dans « Le chat dort » ?", ["verbe"], "« Dort » exprime une action et se conjugue (verbe dormir) : c'est un verbe."),
        qcm("Lequel de ces mots est un pronom personnel ?", ["nous", "notre", "nos", "ce"], 0, "« Nous » remplace un groupe nominal. « Notre » et « nos » sont des déterminants possessifs, « ce » un déterminant démonstratif."),
        vf("« Sous » est une préposition.", true, "« Sous » est invariable et introduit un complément : sous la table."),
        qcm("Dans « Il mange une pomme », quelle est la nature de « une » ?", ["Article indéfini", "Article défini", "Pronom", "Adjectif"], 0, "« Une » introduit un nom non précisé : c'est un article indéfini (défini : la)."),
        court("Complète la liste des conjonctions de coordination : mais, ou, et, donc, or, ni, …", ["car"], "Le moyen mnémotechnique : « Mais où est donc Ornicar ? »"),
        qcm("Lequel de ces mots est un nom commun ?", ["liberté", "librement", "libre", "libérer"], 0, "« Liberté » est un nom ; librement est un adverbe, libre un adjectif, libérer un verbe."),
        ordre("Remets les mots dans l'ordre pour former une phrase correcte.", ["Le", "chien", "noir", "aboie", "fort"], "Déterminant + nom + adjectif forment le sujet, puis le verbe et l'adverbe : « Le chien noir aboie fort »."),
      ),
    },
    {
      slug: "conjugaison",
      title: "Les temps de l'indicatif",
      summary: "Présent, imparfait, futur, passé composé et passé simple.",
      lesson: `## Les temps simples
- **Présent** : je chante, nous finissons, vous **faites**, nous **allons**
- **Imparfait** (action qui dure dans le passé) : terminaisons *-ais, -ais, -ait, -ions, -iez, -aient*. Ils chant**aient**
- **Futur simple** : *-rai, -ras, -ra, -rons, -rez, -ront*. Je **serai**, tu finir**as**
- **Passé simple** (récit) : il chant**a**, ils chant**èrent**

## Le passé composé
Auxiliaire **avoir** ou **être** au présent + **participe passé**.
- J'**ai pris**, nous **avons mangé**
- Avec **être** : les verbes de mouvement ou d'état (*aller, venir, partir, arriver, naître, mourir, tomber, rester…*) et les verbes pronominaux. Je **suis parti**

> Ne confonds pas futur (*je finirai*) et conditionnel (*je finirais*) : le conditionnel prend un **-s**.`,
      videos: [search("Les temps de l'indicatif", BONS_PROFS, "Les Bons Profs conjugaison temps de l'indicatif")],
      evaluation: quiz(
        qcm("À quel temps est « nous finissons » ?", ["Présent", "Imparfait", "Futur", "Passé simple"], 0, "Finir, 2e groupe : nous finissons au présent (imparfait : nous finissions)."),
        court("Conjugue « aller » au présent avec « nous ».", ["allons", "nous allons"], "Aller est irrégulier : je vais, tu vas, il va, nous allons, vous allez, ils vont."),
        qcm("Quel est le passé composé de « je prends » ?", ["J'ai pris", "Je suis pris", "J'ai prendu", "Je prenais"], 0, "Prendre se conjugue avec avoir et son participe passé est « pris »."),
        vf("« Ils chantaient » est à l'imparfait.", true, "La terminaison -aient est celle de l'imparfait à la 3e personne du pluriel."),
        court("Conjugue « être » au futur simple : « je … »", ["serai", "je serai"], "Être au futur : je serai, tu seras, il sera…"),
        qcm("Quel auxiliaire utilise « partir » au passé composé ?", ["Avoir", "Être", "Les deux", "Aucun"], 1, "Partir est un verbe de mouvement : je suis parti(e)."),
        vf("« Tu finiras » est au conditionnel présent.", false, "C'est le futur simple. Le conditionnel serait « tu finirais »."),
        court("Conjugue « faire » au présent avec « vous ».", ["faites", "vous faites"], "Vous faites (et non « vous faisez ») : c'est une forme irrégulière, comme vous dites, vous êtes."),
        qcm("Quel est le passé simple de « il chante » ?", ["Il chanta", "Il chantait", "Il chantera", "Il a chanté"], 0, "Au passé simple, les verbes en -er font -a à la 3e personne du singulier."),
        ordre("Range ces formes du verbe « manger » dans cet ordre : présent, imparfait, futur, passé composé.", ["je mange", "je mangeais", "je mangerai", "j'ai mangé"], "Présent : je mange ; imparfait : je mangeais ; futur : je mangerai ; passé composé : j'ai mangé."),
      ),
    },
    {
      slug: "participe-passe",
      title: "L'accord du participe passé",
      summary: "Avec être, avec avoir : les règles et les pièges.",
      lesson: `## Avec l'auxiliaire être
Le participe passé s'accorde avec le **sujet**.
> Les filles sont part**ies**. Marie est tomb**ée**. Nous (des garçons) sommes ven**us**.

## Avec l'auxiliaire avoir
Le participe passé **ne s'accorde jamais avec le sujet**.
- Il s'accorde avec le **COD** seulement si celui-ci est placé **avant** le verbe.
> La pomme **que** j'ai mang**ée** (que = la pomme, placé avant).
> Elles ont chant**é** une chanson (COD après → pas d'accord).

## La méthode
1. Repérer l'auxiliaire.
2. **Être** → accord avec le sujet.
3. **Avoir** → chercher le COD (*avoir quoi ?*). Placé avant → accord ; après ou absent → pas d'accord.

> Astuce : remplace par un verbe du 3e groupe comme *prendre* (pris/prise) pour entendre l'accord.`,
      videos: [search("L'accord du participe passé", BONS_PROFS, "Les Bons Profs accord du participe passé")],
      evaluation: quiz(
        qcm("Les filles sont ___ (partir).", ["parti", "partis", "parties", "partie"], 2, "Auxiliaire être : accord avec le sujet « les filles » (féminin pluriel)."),
        vf("Avec l'auxiliaire avoir, le participe passé s'accorde avec le sujet.", false, "Jamais avec le sujet ! Seulement avec le COD placé avant le verbe."),
        qcm("La pomme que j'ai ___ (manger).", ["mangé", "mangée", "mangés", "mangées"], 1, "Le COD « que » (= la pomme) est placé avant : accord au féminin singulier."),
        courtExact("Elles ont ___ (chanter) une chanson.", ["chanté"], "Le COD « une chanson » est placé après le verbe : pas d'accord. On écrit « chanté »."),
        qcm("Paul et Léo : « Nous sommes ___ (venir). »", ["venu", "venus", "venue", "venues"], 1, "Être : accord avec « nous », qui désigne ici deux garçons (masculin pluriel)."),
        vf("« Les lettres qu'il a écrites » est correctement accordé.", true, "Le COD « qu' » (= les lettres) est placé avant : écrites, au féminin pluriel."),
        courtExact("Marie est ___ (tomber).", ["tombée"], "Auxiliaire être : accord avec Marie, féminin singulier → « tombée »."),
        qcm("Ils ont ___ leurs devoirs (finir).", ["fini", "finis", "finit", "finies"], 0, "Avoir + COD placé après (« leurs devoirs ») : pas d'accord."),
        vf("Avec avoir, il n'y a pas d'accord si le COD est placé après le verbe.", true, "C'est la règle : on ne sait pas encore ce qu'on a « fait » au moment d'écrire le participe."),
        ordre("Remets les mots dans l'ordre pour former une phrase correcte.", ["Les", "fleurs", "que", "tu", "as", "cueillies", "sont", "belles"], "« Les fleurs que tu as cueillies sont belles » : cueillies s'accorde avec « que » (= les fleurs), placé avant."),
      ),
    },
    {
      slug: "figures-de-style",
      title: "Les figures de style",
      summary: "Métaphore, comparaison, hyperbole, oxymore…",
      lesson: `## Les figures d'analogie
- **Comparaison** : rapproche deux éléments avec un outil (*comme, tel, pareil à*). *Fort **comme** un bœuf.*
- **Métaphore** : comparaison **sans outil**. *Cet homme est un lion.*
- **Personnification** : donne des traits humains à une chose ou un animal. *Le vent hurle.*

## Les figures d'opposition
- **Antithèse** : oppose deux idées. *Je vis, je meurs* (Louise Labé)
- **Oxymore** : deux mots contraires côte à côte. *Cette obscure clarté* (Corneille)

## Exagérer ou atténuer
- **Hyperbole** : exagération. *Je meurs de faim.*
- **Litote** : dire moins pour suggérer plus. *Va, je ne te hais point* (Corneille) = je t'aime
- **Euphémisme** : adoucir une réalité. *Il nous a quittés* = il est mort

## Répétitions et sonorités
- **Anaphore** : même mot en début de vers ou de phrase.
- **Allitération** : répétition d'une **consonne**. *Pour qui sont ces serpents qui sifflent sur vos têtes* (Racine)
- **Assonance** : répétition d'une **voyelle**.`,
      videos: [
        embed("MMR5hmIuRH8", "Les figures de style en poésie - Français Première - Les Bons Profs", BONS_PROFS),
        search("Les figures de style au brevet", BONS_PROFS, "figures de style brevet cours"),
      ],
      evaluation: quiz(
        qcm("« Cet homme est un lion. » Quelle figure ?", ["Comparaison", "Métaphore", "Personnification", "Hyperbole"], 1, "On rapproche l'homme et le lion sans outil de comparaison : c'est une métaphore."),
        qcm("« Il est fort comme un bœuf. » Quelle figure ?", ["Comparaison", "Métaphore", "Litote", "Antithèse"], 0, "Il y a un outil de comparaison : « comme »."),
        vf("« Je meurs de faim » est une hyperbole.", true, "On exagère : on a très faim, mais on n'en meurt pas."),
        court("Quelle figure donne des caractéristiques humaines à un objet ou un animal ?", ["personnification"], "Exemple : « Le vent hurle » — hurler est une action humaine (ou animale) prêtée au vent."),
        qcm("« Va, je ne te hais point » (Corneille). Quelle figure ?", ["Litote", "Hyperbole", "Anaphore", "Oxymore"], 0, "Chimène dit moins pour faire entendre plus : elle aime Rodrigue."),
        qcm("« Cette obscure clarté » (Corneille). Quelle figure ?", ["Oxymore", "Comparaison", "Métaphore", "Euphémisme"], 0, "Deux mots de sens contraire (obscure / clarté) sont accolés : c'est un oxymore."),
        vf("L'anaphore consiste à répéter un mot en début de vers ou de phrase.", true, "Exemple : « Rome, l'unique objet de mon ressentiment ! Rome, à qui… »"),
        court("« Pour qui sont ces serpents qui sifflent sur vos têtes » : répétition du son [s]. Quelle figure ?", ["allitération"], "La répétition d'une consonne est une allitération (d'une voyelle : une assonance)."),
        qcm("Dire « Il nous a quittés » pour « il est mort », c'est…", ["Un euphémisme", "Une hyperbole", "Une métaphore", "Une antithèse"], 0, "On adoucit une réalité pénible : c'est un euphémisme."),
        qcm("« Je vis, je meurs » (Louise Labé). Quelle figure ?", ["Antithèse", "Comparaison", "Personnification", "Litote"], 0, "Deux idées opposées (vivre / mourir) sont mises en parallèle : c'est une antithèse."),
      ),
    },
    {
      slug: "mouvements-litteraires",
      title: "Les grands mouvements littéraires",
      summary: "De l'Humanisme au Surréalisme, les auteurs incontournables.",
      lesson: `## XVIᵉ siècle — l'Humanisme
L'homme et le savoir au centre. **Rabelais** (*Gargantua*), **Montaigne** (*Essais*), **Ronsard** (poésie).

## XVIIᵉ siècle — le Classicisme
Ordre, raison, règle des trois unités au théâtre. **Molière** (*Le Misanthrope*), **Racine** (*Phèdre*), **Corneille** (*Le Cid*), **La Fontaine** (*Fables*).

## XVIIIᵉ siècle — les Lumières
La raison contre l'intolérance. **Voltaire** (*Candide*), **Montesquieu**, **Rousseau**, **Diderot** (*L'Encyclopédie*).

## XIXᵉ siècle
- **Romantisme** : sentiments, nature, mélancolie. **Victor Hugo** (*Les Misérables*), Lamartine, Musset.
- **Réalisme** : peindre la société telle qu'elle est. **Balzac**, **Flaubert** (*Madame Bovary*).
- **Naturalisme** : réalisme quasi scientifique. **Zola** (*Germinal*).
- **Symbolisme** : Baudelaire, Verlaine, Rimbaud.

## XXᵉ siècle — le Surréalisme
Rêve, inconscient, écriture automatique. **André Breton**, Éluard, Aragon.`,
      videos: [
        search("Les mouvements littéraires", BONS_PROFS, "Les Bons Profs mouvements littéraires"),
        search("Le Romantisme expliqué", "Vidéos éducatives", "le romantisme mouvement littéraire cours"),
      ],
      evaluation: quiz(
        qcm("À quel mouvement appartient Molière ?", ["Classicisme", "Romantisme", "Surréalisme", "Réalisme"], 0, "Molière (1622-1673) est un auteur majeur du Classicisme, au XVIIe siècle."),
        qcm("Qui a écrit « Les Misérables » ?", ["Victor Hugo", "Émile Zola", "Honoré de Balzac", "Gustave Flaubert"], 0, "Victor Hugo publie Les Misérables en 1862 ; il est la grande figure du Romantisme."),
        vf("Le Romantisme met en avant les sentiments et la nature.", true, "Les romantiques expriment le « moi », la passion, la mélancolie et la contemplation de la nature."),
        court("Qui est l'auteur de « Madame Bovary » ?", ["Flaubert", "Gustave Flaubert"], "Gustave Flaubert, maître du Réalisme, publie Madame Bovary en 1857."),
        qcm("À quel siècle correspondent les Lumières ?", ["XVIIe", "XVIIIe", "XIXe", "XXe"], 1, "Les Lumières (Voltaire, Rousseau, Diderot) dominent le XVIIIe siècle."),
        qcm("À quel mouvement appartient Émile Zola ?", ["Naturalisme", "Classicisme", "Humanisme", "Symbolisme"], 0, "Zola est le chef de file du Naturalisme (cycle des Rougon-Macquart, Germinal)."),
        ordre("Range ces mouvements dans l'ordre chronologique.", ["Humanisme", "Classicisme", "Lumières", "Romantisme", "Surréalisme"], "XVIe, XVIIe, XVIIIe, XIXe puis XXe siècle."),
        vf("André Breton est le chef de file du Surréalisme.", true, "Il rédige le Manifeste du surréalisme en 1924."),
        court("Qui a écrit « Candide » ?", ["Voltaire"], "Voltaire publie Candide en 1759, un conte philosophique des Lumières."),
        qcm("Rabelais et Montaigne appartiennent à…", ["l'Humanisme", "le Romantisme", "le Réalisme", "le Surréalisme"], 0, "Ce sont deux grands humanistes du XVIe siècle."),
      ),
    },
  ],
};
