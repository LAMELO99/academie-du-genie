import type { Subject } from "@/lib/types";
import { court, embed, ordre, qcm, quiz, search, vf } from "../helpers";

const NOTA_BENE = "Nota Bene";
const CUAH = "C'est une autre histoire";

export const histoireGeo: Subject = {
  slug: "histoire-geographie",
  name: "Histoire-Géographie",
  shortName: "Histoire-Géo",
  coefficient: 3,
  color: "#b45309",
  emoji: "🏛️",
  description: "De l'Égypte des pharaons aux guerres mondiales, et la géographie du monde.",
  chapters: [
    {
      slug: "egypte-ancienne",
      title: "L'Égypte ancienne",
      summary: "Le Nil, les pharaons, les pyramides et les hiéroglyphes.",
      lesson: `## Un don du Nil
L'Égypte naît le long du **Nil** : ses crues déposent un limon fertile qui permet l'agriculture dans le désert.

## Le pharaon
Le **pharaon** est un roi considéré comme un dieu vivant. L'Égypte est unifiée vers **−3100**.

## Religion et au-delà
- De nombreux dieux : **Rê** (le Soleil), Osiris (les morts), Anubis (l'embaumement)…
- Les Égyptiens croient à la vie après la mort : ils pratiquent la **momification**.
- Les **pyramides de Gizeh** sont des tombeaux de pharaons (Khéops, vers −2560).

## L'écriture
Les **hiéroglyphes**, déchiffrés en **1822** par **Jean-François Champollion** grâce à la **pierre de Rosette**.

## Repères
- Ramsès II règne au XIIIe siècle av. J.-C.
- 1922 : Howard Carter découvre la tombe de **Toutânkhamon**.
- −30 : mort de **Cléopâtre VII**, l'Égypte devient romaine.`,
      videos: [
        embed("SrBLTMs71x0", "Les Égyptiens - De la Préhistoire à l'Antiquité", "Quelle Histoire"),
        search("L'Égypte antique", CUAH, "C'est une autre histoire Egypte"),
      ],
      evaluation: quiz(
        qcm("Quel fleuve traverse l'Égypte ?", ["Le Nil", "Le Tigre", "L'Euphrate", "Le Gange"], 0, "Le Nil et ses crues fertiles sont à l'origine de la civilisation égyptienne."),
        vf("Les pyramides de Gizeh sont des tombeaux de pharaons.", true, "Elles abritaient les sépultures de Khéops, Khéphren et Mykérinos."),
        court("Comment appelle-t-on le souverain de l'Égypte ancienne ?", ["pharaon"], "Le pharaon est à la fois roi et dieu vivant."),
        qcm("Quelle écriture utilisaient les Égyptiens ?", ["Les hiéroglyphes", "Le cunéiforme", "L'alphabet latin", "Les idéogrammes chinois"], 0, "Le cunéiforme est l'écriture de la Mésopotamie ; l'Égypte utilise les hiéroglyphes."),
        qcm("Qui a déchiffré les hiéroglyphes en 1822 ?", ["Champollion", "Napoléon", "Howard Carter", "Hérodote"], 0, "Jean-François Champollion y parvient grâce à la pierre de Rosette."),
        vf("La tombe de Toutânkhamon a été découverte en 1922 par Howard Carter.", true, "C'est l'une des plus célèbres découvertes de l'archéologie, presque intacte."),
        court("Quelle pierre, portant un même texte en trois écritures, a permis de déchiffrer les hiéroglyphes ? La pierre de…", ["Rosette", "pierre de Rosette"], "La pierre de Rosette porte le même décret en hiéroglyphes, en démotique et en grec."),
        qcm("Comment les Égyptiens conservaient-ils les corps des défunts ?", ["La momification", "La crémation", "La congélation", "L'enterrement simple"], 0, "Ils croyaient que le corps devait être préservé pour la vie dans l'au-delà."),
        ordre("Range ces événements dans l'ordre chronologique.", ["Unification de l'Égypte (vers −3100)", "Pyramide de Khéops (vers −2560)", "Règne de Ramsès II (XIIIe s. av. J.-C.)", "Mort de Cléopâtre VII (−30)"], "L'histoire de l'Égypte pharaonique s'étend sur environ 3 000 ans."),
        qcm("Quel est le dieu du Soleil ?", ["Rê (Râ)", "Anubis", "Osiris", "Bastet"], 0, "Rê est le dieu Soleil ; Anubis préside à l'embaumement et Osiris règne sur les morts."),
      ),
    },
    {
      slug: "rome-antique",
      title: "La Rome antique",
      summary: "De la fondation légendaire à la chute de l'Empire d'Occident.",
      lesson: `## Les trois régimes
1. **La Royauté** : fondation légendaire en **753 av. J.-C.** par **Romulus** (et son jumeau Rémus).
2. **La République** (509 av. J.-C.) : consuls et Sénat.
3. **L'Empire** (27 av. J.-C.) : **Auguste** est le premier empereur.

## Jules César
Général et homme politique, il conquiert la Gaule : il bat **Vercingétorix à Alésia en 52 av. J.-C.** Il est assassiné en 44 av. J.-C. — il n'a **jamais été empereur**.

## La vie à Rome
- On parle **latin**.
- Spectacles : courses de chars, combats de gladiateurs au **Colisée**.
- Le **christianisme**, d'abord persécuté, est autorisé par **Constantin** en 313.

## La fin
L'Empire romain d'**Occident** disparaît en **476**. (Celui d'Orient dure jusqu'en 1453.)`,
      videos: [
        embed("B5qbb4a4KF0", "Les empereurs romains, tous assassinés ?", NOTA_BENE),
        search("La Rome antique", NOTA_BENE, "Nota Bene Rome antique"),
      ],
      evaluation: quiz(
        qcm("En quelle année Rome a-t-elle été fondée selon la légende ?", ["753 av. J.-C.", "476", "44 av. J.-C.", "1492"], 0, "La tradition fixe la fondation de Rome par Romulus en 753 av. J.-C."),
        court("Les jumeaux fondateurs de Rome s'appellent Romulus et…", ["Rémus"], "Selon la légende, ils furent allaités par une louve."),
        vf("Jules César a été le premier empereur romain.", false, "César fut dictateur mais jamais empereur. Le premier empereur est Auguste, son fils adoptif."),
        qcm("Qui est le premier empereur romain ?", ["Auguste", "Jules César", "Néron", "Constantin"], 0, "Octave reçoit le titre d'Auguste en 27 av. J.-C."),
        qcm("Où se déroulaient les combats de gladiateurs à Rome ?", ["Au Colisée", "Au Forum", "Au Panthéon", "Au Sénat"], 0, "Le Colisée (amphithéâtre Flavien) pouvait accueillir environ 50 000 spectateurs."),
        vf("Vercingétorix a été vaincu par César à Alésia en 52 av. J.-C.", true, "Cette défaite marque la fin de l'indépendance de la Gaule."),
        court("Quelle langue parlaient les Romains ?", ["latin"], "Le latin est à l'origine du français, de l'espagnol, de l'italien…"),
        qcm("En quelle année disparaît l'Empire romain d'Occident ?", ["476", "1453", "52 av. J.-C.", "800"], 0, "En 476, le dernier empereur d'Occident est déposé. 1453 marque la fin de l'Empire d'Orient."),
        ordre("Range ces périodes dans l'ordre chronologique.", ["La Royauté (753 av. J.-C.)", "La République (509 av. J.-C.)", "L'Empire (27 av. J.-C.)", "Chute de l'Empire d'Occident (476)"], "Royauté, République puis Empire : les trois régimes successifs de Rome."),
        qcm("Quel empereur autorise le christianisme en 313 ?", ["Constantin", "Néron", "Auguste", "Caligula"], 0, "Par l'édit de Milan (313), Constantin accorde la liberté de culte aux chrétiens."),
      ),
    },
    {
      slug: "revolution-francaise",
      title: "La Révolution française",
      summary: "1789-1799 : la fin de la monarchie absolue.",
      lesson: `## La société d'ordres
Trois ordres : le **clergé**, la **noblesse** (privilégiés) et le **tiers état** (environ 98 % de la population), qui paie l'essentiel des impôts.

## 1789, l'année décisive
- **Mai** : réunion des **États généraux**.
- **14 juillet** : **prise de la Bastille**.
- **4 août** : **abolition des privilèges**.
- **26 août** : **Déclaration des droits de l'homme et du citoyen**.

## De la monarchie à la République
- **Septembre 1792** : proclamation de la **Ire République**.
- **21 janvier 1793** : exécution de **Louis XVI**.
- **1793-1794** : **la Terreur**, menée notamment par **Robespierre**.

## La fin de la Révolution
Le **18 brumaire (novembre 1799)**, **Napoléon Bonaparte** prend le pouvoir par un coup d'État.`,
      videos: [
        search("La Révolution française", NOTA_BENE, "Nota Bene Révolution française"),
        search("La Révolution française racontée", CUAH, "C'est une autre histoire Révolution française"),
      ],
      evaluation: quiz(
        qcm("Quand a eu lieu la prise de la Bastille ?", ["14 juillet 1789", "4 août 1789", "21 janvier 1793", "9 novembre 1799"], 0, "Le 14 juillet 1789 est devenu la fête nationale française."),
        vf("La Déclaration des droits de l'homme et du citoyen a été adoptée en août 1789.", true, "Elle est adoptée le 26 août 1789."),
        court("Quel roi a été guillotiné en janvier 1793 ?", ["Louis XVI", "Louis 16"], "Louis XVI est exécuté le 21 janvier 1793, place de la Révolution (actuelle Concorde)."),
        qcm("Quel ordre regroupait la grande majorité de la population ?", ["Le tiers état", "Le clergé", "La noblesse", "La cour"], 0, "Le tiers état représente environ 98 % des Français : paysans, artisans, bourgeois."),
        vf("Les privilèges ont été abolis dans la nuit du 4 août 1789.", true, "Les députés votent la fin des privilèges de la noblesse et du clergé."),
        qcm("En quelle année la Ire République est-elle proclamée ?", ["1792", "1789", "1804", "1815"], 0, "Elle est proclamée en septembre 1792, après la chute de la monarchie."),
        court("Qui prend le pouvoir par le coup d'État du 18 brumaire 1799 ?", ["Napoléon Bonaparte", "Bonaparte", "Napoléon"], "Bonaparte met fin au Directoire et devient Premier consul."),
        qcm("Comment appelle-t-on la période 1793-1794 ?", ["La Terreur", "La Restauration", "Le Directoire", "La Commune"], 0, "Pendant la Terreur, les « suspects » sont arrêtés et des milliers sont exécutés."),
        ordre("Range ces événements dans l'ordre chronologique.", ["Réunion des États généraux", "Prise de la Bastille", "Proclamation de la République", "Exécution de Louis XVI", "Coup d'État de Bonaparte"], "Mai 1789, juillet 1789, septembre 1792, janvier 1793, novembre 1799."),
        vf("Robespierre est l'une des grandes figures de la Terreur.", true, "Il domine le Comité de salut public avant d'être lui-même guillotiné en juillet 1794."),
      ),
    },
    {
      slug: "premiere-guerre-mondiale",
      title: "La Première Guerre mondiale",
      summary: "1914-1918 : tranchées, Verdun et guerre totale.",
      lesson: `## Le déclenchement
Le **28 juin 1914**, l'archiduc François-Ferdinand est assassiné à **Sarajevo**. Le jeu des alliances entraîne l'Europe dans la guerre :
- **Triple-Entente** : France, Royaume-Uni, Russie
- **Triple-Alliance / Empires centraux** : Allemagne, Autriche-Hongrie (puis Empire ottoman)

## Une guerre de tranchées
Après la **bataille de la Marne** (septembre 1914), le front se fige : c'est la **guerre de position**. Les soldats français sont surnommés les **poilus**.

## Verdun, 1916
Bataille de près de 10 mois, symbole de l'enfer des tranchées.

## Une guerre totale
Toute la société est mobilisée : économie, femmes à l'usine (les « munitionnettes »), propagande.

## La fin
- 1917 : entrée en guerre des **États-Unis**.
- **11 novembre 1918** : **armistice**.
- 1919 : **traité de Versailles**.`,
      videos: [
        embed("a6jyG_cz48k", "5 batailles de la Première Guerre mondiale - Nota Bene #17", NOTA_BENE),
        search("La Grande Guerre expliquée", NOTA_BENE, "Nota Bene Première Guerre mondiale"),
      ],
      evaluation: quiz(
        qcm("Quelles sont les dates de la Première Guerre mondiale ?", ["1914-1918", "1939-1945", "1870-1871", "1912-1916"], 0, "Elle commence en août 1914 et se termine par l'armistice de novembre 1918."),
        vf("L'attentat de Sarajevo est l'élément déclencheur de la guerre.", true, "L'assassinat de l'archiduc François-Ferdinand, le 28 juin 1914, déclenche la crise."),
        court("Quelle bataille de 1916 est devenue le symbole de l'enfer des tranchées pour les Français ?", ["Verdun"], "La bataille de Verdun (février-décembre 1916) fait plus de 300 000 morts."),
        qcm("Quel surnom donne-t-on aux soldats français de 14-18 ?", ["Les poilus", "Les grognards", "Les sans-culottes", "Les maquisards"], 0, "Les grognards sont les soldats de Napoléon, les maquisards des résistants de 39-45."),
        qcm("Quand l'armistice a-t-il été signé ?", ["11 novembre 1918", "8 mai 1945", "14 juillet 1919", "28 juin 1914"], 0, "Le 11 novembre est un jour férié de commémoration en France."),
        vf("Les États-Unis sont entrés en guerre en 1917.", true, "Ils entrent en guerre en avril 1917 aux côtés de l'Entente."),
        court("Quel traité de paix est signé avec l'Allemagne en 1919 ? Le traité de…", ["Versailles", "traité de Versailles"], "Il est signé le 28 juin 1919 dans la galerie des Glaces du château de Versailles."),
        qcm("Quel pays faisait partie de la Triple-Entente ?", ["La Russie", "L'Allemagne", "L'Autriche-Hongrie", "L'Empire ottoman"], 0, "La Triple-Entente réunit la France, le Royaume-Uni et la Russie."),
        ordre("Range ces événements dans l'ordre chronologique.", ["Attentat de Sarajevo", "Bataille de la Marne", "Bataille de Verdun", "Entrée en guerre des États-Unis", "Armistice"], "Juin 1914, septembre 1914, 1916, avril 1917, novembre 1918."),
        vf("Sur le front de l'Ouest, la guerre de tranchées s'installe dès la fin de 1914.", true, "Après la Marne et la « course à la mer », le front se fige de la mer du Nord à la Suisse."),
      ),
    },
    {
      slug: "seconde-guerre-mondiale",
      title: "La Seconde Guerre mondiale",
      summary: "1939-1945 : guerre d'anéantissement, Résistance et Libération.",
      lesson: `## Le début
Le **1er septembre 1939**, l'Allemagne nazie d'**Hitler** envahit la **Pologne**. La France et le Royaume-Uni lui déclarent la guerre.

## La France dans la guerre
- **Juin 1940** : défaite française. Le maréchal **Pétain** dirige le **régime de Vichy**, qui collabore avec l'Allemagne.
- **18 juin 1940** : **appel du général de Gaulle** depuis Londres.
- **Jean Moulin** unifie la Résistance intérieure (Conseil national de la Résistance, 1943).

## Une guerre mondiale
- **Décembre 1941** : attaque japonaise de **Pearl Harbor**, les États-Unis entrent en guerre.
- **1942-1943** : **Stalingrad**, tournant de la guerre à l'Est.
- **6 juin 1944** : **débarquement en Normandie**.

## Un génocide
Les nazis exterminent environ 6 millions de Juifs : c'est la **Shoah**.

## La fin
- **8 mai 1945** : capitulation de l'Allemagne.
- **Août 1945** : bombes atomiques sur **Hiroshima** et **Nagasaki** ; le Japon capitule le 2 septembre.`,
      videos: [
        search("La Seconde Guerre mondiale", CUAH, "C'est une autre histoire Seconde Guerre mondiale"),
        search("La Seconde Guerre mondiale racontée", NOTA_BENE, "Nota Bene Seconde Guerre mondiale"),
      ],
      evaluation: quiz(
        qcm("Quel événement déclenche la guerre en Europe en 1939 ?", ["L'invasion de la Pologne par l'Allemagne", "L'attaque de Pearl Harbor", "Le débarquement en Normandie", "La bataille de Stalingrad"], 0, "Le 1er septembre 1939, l'Allemagne envahit la Pologne ; la France et le Royaume-Uni déclarent la guerre le 3."),
        vf("L'appel du 18 juin 1940 a été lancé par le général de Gaulle depuis Londres.", true, "Il appelle les Français à continuer le combat, sur les ondes de la BBC."),
        court("En quelle année a eu lieu le débarquement en Normandie ?", ["1944"], "Le Jour J est le 6 juin 1944."),
        qcm("Quelle bataille marque le tournant de la guerre sur le front de l'Est ?", ["Stalingrad", "Verdun", "Waterloo", "La Marne"], 0, "La défaite allemande à Stalingrad (février 1943) marque le début du recul nazi."),
        qcm("Qui dirige l'État français (régime de Vichy) ?", ["Philippe Pétain", "Charles de Gaulle", "Jean Moulin", "Léon Blum"], 0, "Le maréchal Pétain obtient les pleins pouvoirs en juillet 1940 et engage la collaboration."),
        vf("Le génocide des Juifs par les nazis est appelé la Shoah.", true, "Environ 6 millions de Juifs d'Europe ont été assassinés."),
        court("En août 1945, deux villes japonaises sont frappées par la bombe atomique : Hiroshima et…", ["Nagasaki"], "Hiroshima le 6 août, Nagasaki le 9 août 1945."),
        qcm("Quand la guerre se termine-t-elle en Europe ?", ["8 mai 1945", "11 novembre 1918", "2 septembre 1945", "6 juin 1944"], 0, "L'Allemagne capitule le 8 mai 1945. Le 2 septembre est la capitulation du Japon."),
        ordre("Range ces événements dans l'ordre chronologique.", ["Invasion de la Pologne", "Défaite de la France", "Attaque de Pearl Harbor", "Bataille de Stalingrad", "Débarquement en Normandie", "Capitulation de l'Allemagne"], "1939, juin 1940, décembre 1941, 1942-1943, juin 1944, mai 1945."),
        qcm("Qui unifie la Résistance intérieure française en 1943 ?", ["Jean Moulin", "Philippe Pétain", "Winston Churchill", "Joseph Joffre"], 0, "Jean Moulin, envoyé de De Gaulle, crée le Conseil national de la Résistance."),
      ),
    },
    {
      slug: "geographie-monde",
      title: "Géographie : la France et le monde",
      summary: "Continents, océans, fleuves et capitales.",
      lesson: `## Les continents (du plus grand au plus petit)
**Asie**, **Afrique**, **Amérique du Nord**, Amérique du Sud, Antarctique, **Europe**, **Océanie**.

## Les océans
Le **Pacifique** est le plus grand, devant l'Atlantique, l'océan Indien, l'Austral et l'Arctique.

## Records
- Plus grand désert chaud : le **Sahara**.
- Pays le plus peuplé : l'**Inde** (devant la Chine depuis 2023).
- L'**équateur** traverse l'Amérique du Sud, l'Afrique et l'Asie du Sud-Est — pas la France.

## La France
- **13 régions** en métropole depuis 2016.
- Plus long fleuve : la **Loire** (environ 1 000 km).
- Plus haut sommet : le **mont Blanc** (Alpes).

## Quelques capitales
Espagne : **Madrid** — Australie : **Canberra** (pas Sydney !) — Canada : Ottawa — Brésil : Brasília.`,
      videos: [
        search("Les continents et les océans", "Vidéos éducatives", "géographie continents et océans cours collège"),
        search("Les fleuves de France", "Vidéos éducatives", "les fleuves de France cours"),
      ],
      evaluation: quiz(
        qcm("Quelle est la capitale de l'Australie ?", ["Canberra", "Sydney", "Melbourne", "Perth"], 0, "Piège classique : Sydney est la plus grande ville, mais la capitale est Canberra."),
        court("Quel est le plus long fleuve de France ?", ["Loire", "la Loire"], "La Loire mesure environ 1 000 km."),
        qcm("Quel est le plus grand océan ?", ["Pacifique", "Atlantique", "Indien", "Arctique"], 0, "Le Pacifique couvre environ un tiers de la surface de la Terre."),
        vf("Le mont Blanc est le plus haut sommet des Alpes.", true, "Il culmine à environ 4 800 m."),
        qcm("Quel est le pays le plus peuplé du monde ?", ["L'Inde", "La Chine", "Les États-Unis", "L'Indonésie"], 0, "L'Inde a dépassé la Chine en 2023, avec plus de 1,4 milliard d'habitants."),
        court("Combien de régions compte la France métropolitaine depuis 2016 ?", ["13", "treize"], "Depuis la réforme de 2016, il y a 13 régions en métropole (18 avec l'outre-mer)."),
        qcm("Quel est le plus grand désert chaud du monde ?", ["Le Sahara", "Le Gobi", "Le Kalahari", "L'Atacama"], 0, "Le Sahara couvre environ 9 millions de km² en Afrique du Nord."),
        vf("L'équateur passe par la France.", false, "L'équateur traverse notamment l'Équateur, le Brésil, le Kenya et l'Indonésie. La France métropolitaine est dans l'hémisphère Nord, loin de lui."),
        ordre("Range ces continents du plus grand au plus petit (superficie).", ["Asie", "Afrique", "Amérique du Nord", "Europe", "Océanie"], "Asie ≈ 44 M km², Afrique ≈ 30 M, Amérique du Nord ≈ 24 M, Europe ≈ 10 M, Océanie ≈ 8,5 M."),
        court("Quelle est la capitale de l'Espagne ?", ["Madrid"], "Madrid est située au centre de la péninsule Ibérique."),
      ),
    },
  ],
};
