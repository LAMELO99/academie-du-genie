import type { Subject } from "@/lib/types";
import { court, ordre, qcm, quiz, search, vf } from "../helpers";

const CH = "Éloquence et prise de parole";

export const eloquence: Subject = {
  slug: "eloquence",
  name: "Éloquence",
  shortName: "Éloquence",
  coefficient: 2,
  color: "#0d9488",
  emoji: "🎤",
  description: "Parler en public, construire un discours, argumenter et convaincre.",
  chapters: [
    {
      slug: "bases-prise-de-parole",
      title: "Les bases de la prise de parole",
      summary: "Voix, regard, posture et gestion du trac.",
      lesson: `## La voix
- **Volume** : parle pour être entendu du fond de la salle.
- **Débit** : posé, avec des variations. Trop vite, on te perd ; trop lent et monotone, on s'ennuie.
- **Articulation** : prononce chaque syllabe.
- **Pauses** : un silence avant une idée forte lui donne du poids.
- Chasse les tics de langage : « euh », « du coup », « en fait ».

## Le corps
- **Regard** : balaie le public, regarde les gens.
- **Posture** : ancré sur tes deux pieds, épaules ouvertes.
- **Gestes** ouverts qui accompagnent la parole. Évite les bras croisés et les mains dans les poches.

## Le trac
C'est normal : c'est de l'énergie. Pour le calmer : **respiration abdominale lente**, préparation, et répétition à voix haute.

> Préparer : choisir son message principal → construire le plan → répéter à voix haute → parler.`,
      videos: [
        search("Prendre la parole en public", CH, "prendre la parole en public conseils"),
        search("Gérer le trac", CH, "comment gérer le trac prise de parole"),
      ],
      evaluation: quiz(
        qcm("Pour paraître sûr de soi, que vaut-il mieux faire ?", ["Regarder le public", "Regarder ses pieds", "Fixer le plafond", "Lire ses notes sans lever les yeux"], 0, "Le regard crée le lien avec l'auditoire."),
        vf("Faire des pauses rend un discours plus fort.", true, "Un silence bien placé met en valeur l'idée qui suit."),
        court("Comment appelle-t-on la peur ressentie avant de parler en public ?", ["trac"], "Le trac est normal : bien géré, il donne de l'énergie."),
        qcm("Quel débit est le plus efficace ?", ["Posé, avec des variations", "Le plus rapide possible", "Lent et monotone", "Toujours le même rythme"], 0, "Varier le rythme garde l'attention du public."),
        vf("Les tics de langage (« euh », « du coup ») renforcent la crédibilité.", false, "Ils parasitent le message. Mieux vaut une courte pause silencieuse."),
        qcm("Quelle technique aide à calmer le trac ?", ["Une respiration abdominale lente", "Boire trois cafés", "Parler le plus vite possible", "Éviter de se préparer"], 0, "Respirer lentement apaise le rythme cardiaque."),
        court("Comment appelle-t-on le fait de bien prononcer chaque syllabe ?", ["articulation", "articuler"], "Une bonne articulation rend le discours clair, même à faible volume."),
        qcm("Que faire de ses mains ?", ["Des gestes ouverts qui accompagnent la parole", "Les garder dans les poches", "Croiser les bras", "Jouer avec un stylo"], 0, "Les gestes ouverts soutiennent le message et montrent l'assurance."),
        vf("La voix et le langage du corps comptent beaucoup dans l'impression qu'on laisse.", true, "Le même texte peut convaincre ou ennuyer selon la façon de le dire."),
        ordre("Remets dans l'ordre la préparation d'une prise de parole.", ["Choisir son message principal", "Construire le plan", "Répéter à voix haute", "Prendre la parole"], "On sait d'abord ce qu'on veut dire, puis on l'organise et on s'entraîne."),
      ),
    },
    {
      slug: "construire-un-discours",
      title: "Construire un discours",
      summary: "Accroche, plan, transitions et conclusion.",
      lesson: `## La structure
1. **L'accroche** : capte l'attention dès la première phrase (question surprenante, anecdote, chiffre frappant).
2. **L'annonce** du sujet et du plan.
3. **Le développement** : tes arguments, chacun avec un **exemple concret**.
4. **La conclusion** : résume et termine par une phrase forte. On n'y ajoute pas de nouvel argument.

## Les plans classiques
- **Plan dialectique** : thèse, antithèse, synthèse.
- **Plan thématique** : un thème par partie.

## Les outils
- **Transitions** : elles relient les parties (« Mais ce n'est pas tout… »).
- **La règle de trois** : trois éléments se retiennent bien. *« Veni, vidi, vici »* (Jules César).
- Ne lis pas un texte écrit mot à mot : garde des **notes clés**.`,
      videos: [
        search("Structurer un discours", CH, "structurer un discours accroche plan conclusion"),
        search("La règle de trois en rhétorique", CH, "règle de trois rhétorique discours"),
      ],
      evaluation: quiz(
        qcm("À quoi sert l'accroche d'un discours ?", ["À capter l'attention dès le début", "À remercier le public", "À résumer la fin", "À présenter sa bibliographie"], 0, "Les premières secondes décident si le public va écouter."),
        ordre("Remets dans l'ordre les parties d'un discours.", ["Accroche", "Annonce du sujet", "Développement", "Conclusion"], "On capte l'attention, on annonce, on développe, on conclut."),
        vf("La conclusion doit introduire un tout nouvel argument.", false, "Elle résume et termine sur une phrase forte, sans ouvrir de nouveau débat."),
        court("Thèse, antithèse, synthèse : comment s'appelle ce plan ?", ["dialectique", "plan dialectique"], "Le plan dialectique confronte deux points de vue avant de les dépasser."),
        qcm("Qu'est-ce que la règle de trois ?", ["Présenter les idées par trois pour qu'elles marquent", "Parler trois minutes maximum", "Répéter trois fois la même phrase", "Avoir trois auditeurs"], 0, "Le rythme ternaire est facile à retenir et sonne « complet »."),
        qcm("Laquelle de ces accroches est la plus efficace ?", ["Une question surprenante ou une anecdote", "« Bonjour, je vais vous parler de… »", "« Désolé, je ne suis pas très bon… »", "La lecture du plan détaillé"], 0, "Il faut éveiller la curiosité tout de suite. S'excuser affaiblit l'orateur."),
        vf("Un exemple concret rend un argument plus convaincant.", true, "Un exemple rend l'idée vivante et vérifiable."),
        court("À qui attribue-t-on la formule « Veni, vidi, vici » ?", ["César", "Jules César"], "« Je suis venu, j'ai vu, j'ai vaincu » : un exemple célèbre de rythme ternaire."),
        qcm("Quel est le rôle d'une transition ?", ["Relier deux parties du discours", "Remplir un silence", "Changer de sujet au hasard", "Conclure"], 0, "Elle guide le public d'une idée à la suivante."),
        vf("Il vaut mieux écrire son discours mot à mot et le lire.", false, "Lire coupe le regard et la spontanéité. Mieux vaut des notes clés et beaucoup de répétitions."),
      ),
    },
    {
      slug: "rhetorique-aristote",
      title: "La rhétorique d'Aristote",
      summary: "Ethos, pathos, logos : les trois piliers pour convaincre.",
      lesson: `## Les trois preuves
Le philosophe grec **Aristote** distingue trois façons de convaincre :
- **Ethos** : la **crédibilité** de l'orateur. *« Médecin depuis 20 ans, je peux vous dire que… »*
- **Pathos** : les **émotions** du public. *« Pensez aux enfants qui… »*
- **Logos** : le **raisonnement** et les preuves. *Statistiques, logique, faits.*

Un discours convaincant **combine** les trois.

## Le kairos
Le **kairos**, c'est le **moment opportun** : dire la bonne chose au bon moment.

## Les cinq étapes de la rhétorique classique
1. **Invention** : trouver les idées.
2. **Disposition** : les organiser.
3. **Élocution** : choisir les mots et le style.
4. **Mémoire** : retenir le discours.
5. **Action** : le prononcer (voix et gestes).`,
      videos: [
        search("Ethos, pathos, logos", CH, "ethos pathos logos Aristote rhétorique"),
        search("La rhétorique expliquée", CH, "rhétorique Aristote explication"),
      ],
      evaluation: quiz(
        qcm("Que désigne le logos ?", ["Le raisonnement", "L'émotion", "La crédibilité", "Le moment opportun"], 0, "Logos : la logique, les preuves, les faits."),
        qcm("Que désigne le pathos ?", ["L'émotion", "Le raisonnement", "La crédibilité", "Le plan"], 0, "Pathos : toucher les émotions du public."),
        court("Comment s'appelle la crédibilité de l'orateur selon Aristote ?", ["ethos"], "L'ethos repose sur l'expertise, l'honnêteté et l'image de l'orateur."),
        vf("Aristote est un philosophe grec.", true, "Il a vécu au IVe siècle av. J.-C. et a écrit la « Rhétorique »."),
        qcm("« En tant que médecin depuis 20 ans, je vous assure que… » Quel pilier ?", ["Ethos", "Pathos", "Logos", "Kairos"], 0, "L'orateur s'appuie sur sa crédibilité."),
        qcm("Des statistiques et des preuves relèvent surtout du…", ["Logos", "Pathos", "Ethos", "Kairos"], 0, "Ce sont des arguments rationnels."),
        court("Comment appelle-t-on le fait de saisir le moment opportun ?", ["kairos"], "Le même argument peut échouer ou réussir selon le moment."),
        vf("Un discours convaincant combine souvent ethos, pathos et logos.", true, "La raison seule ennuie, l'émotion seule manipule : l'équilibre convainc."),
        qcm("« Pensez aux enfants qui dorment dehors ce soir… » Quel pilier ?", ["Pathos", "Logos", "Ethos", "Disposition"], 0, "On fait appel à l'émotion du public."),
        ordre("Remets dans l'ordre les cinq étapes de la rhétorique classique.", ["Invention (trouver les idées)", "Disposition (les organiser)", "Élocution (choisir les mots)", "Mémoire (retenir)", "Action (prononcer)"], "On trouve, on organise, on rédige, on mémorise, puis on prononce."),
      ),
    },
    {
      slug: "argumenter-debattre",
      title: "Argumenter et débattre",
      summary: "Concéder, réfuter et repérer les sophismes.",
      lesson: `## Un paragraphe argumentatif
**Idée (argument) → explication → exemple → conclusion partielle.**

## Débattre avec élégance
- **Écoute** l'autre jusqu'au bout.
- **Concède** ce qui est juste : « **Certes**…, **mais**… ». Cela te rend plus crédible.
- **Réfute** : montre qu'un argument est faux ou faible.

## Les sophismes : de faux arguments
- **Ad hominem** : attaquer la personne au lieu de son argument.
- **Homme de paille** : déformer l'argument adverse pour le démolir plus facilement.
- **Fausse alternative** : « Soit tu es avec moi, soit contre moi. »
- **Pente glissante** : « Si on autorise X, bientôt ce sera la catastrophe. »
- **Appel à la popularité** : « Tout le monde le fait, donc c'est bien. »`,
      videos: [
        search("Les sophismes", "Hygiène Mentale", "sophismes homme de paille ad hominem"),
        search("Bien débattre", CH, "comment bien débattre argumenter"),
      ],
      evaluation: quiz(
        qcm("Qu'est-ce qu'un argument ad hominem ?", ["Attaquer la personne plutôt que son argument", "Donner un exemple", "Citer un expert", "Faire une concession"], 0, "« Tu dis ça mais tu as eu 5 en maths » ne répond pas à l'argument."),
        qcm("« Soit tu es avec moi, soit tu es contre moi. » Quel sophisme ?", ["La fausse alternative", "L'ad hominem", "La pente glissante", "L'appel à l'autorité"], 0, "On fait croire qu'il n'existe que deux options."),
        court("Comment appelle-t-on le fait de déformer l'argument adverse pour le réfuter plus facilement ?", ["homme de paille", "épouvantail"], "On attaque une caricature au lieu de la vraie position."),
        vf("Concéder un point à son adversaire affaiblit toujours son argumentation.", false, "Une concession montre l'honnêteté et rend la suite plus crédible."),
        qcm("« Si on autorise les portables en classe, bientôt plus personne n'apprendra rien. » Quel sophisme ?", ["La pente glissante", "L'homme de paille", "La fausse alternative", "L'ad hominem"], 0, "On enchaîne des conséquences de plus en plus graves sans les prouver."),
        ordre("Remets dans l'ordre un paragraphe argumentatif.", ["Idée (argument)", "Explication", "Exemple", "Conclusion partielle"], "L'idée, puis pourquoi, puis la preuve concrète, puis le bilan."),
        vf("Écouter son adversaire jusqu'au bout aide à mieux lui répondre.", true, "On comprend sa vraie position et on évite l'homme de paille."),
        court("Complète la concession : « Certes, l'uniforme coûte cher, … il réduit les inégalités. »", ["mais", "cependant", "pourtant", "néanmoins", "toutefois"], "« Certes… mais… » est la structure classique de la concession."),
        qcm("« Tout le monde le fait, donc c'est bien. » Quel sophisme ?", ["L'appel à la popularité", "L'appel à l'autorité", "L'ad hominem", "La pente glissante"], 0, "La popularité d'une idée ne prouve pas qu'elle est juste."),
        qcm("Que signifie « réfuter » un argument ?", ["Montrer qu'il est faux ou faible", "L'approuver", "Le répéter", "L'ignorer"], 0, "Réfuter, c'est démontrer la faiblesse d'un argument."),
      ),
    },
    {
      slug: "grands-orateurs",
      title: "Les grands orateurs",
      summary: "De Démosthène à Martin Luther King.",
      lesson: `## Dans l'Antiquité
- **Démosthène** (IVe s. av. J.-C.) : bègue, il se serait entraîné avec des **cailloux dans la bouche** face à la mer (selon la tradition).
- **Cicéron** (Ier s. av. J.-C.) : le grand orateur romain, auteur des **Catilinaires**.

## Au XXe siècle
- **Winston Churchill**, 1940 : « Je n'ai à offrir que du sang, du labeur, des larmes et de la sueur. »
- **Charles de Gaulle** : **l'appel du 18 juin 1940**, à la radio de Londres.
- **Martin Luther King** : **« I have a dream »**, à Washington, le 28 août **1963**.
- **Simone Veil**, 1974 : défend à l'Assemblée la loi sur l'**IVG**.
- **Robert Badinter**, 1981 : obtient l'**abolition de la peine de mort** en France.

## Aujourd'hui
Les concours d'éloquence se multiplient. Le documentaire **« À voix haute »** (2017) suit des étudiants de Seine-Saint-Denis qui préparent le concours Eloquentia.`,
      videos: [
        search("I have a dream (sous-titré)", "Archives", "I have a dream Martin Luther King discours sous-titré français"),
        search("Discours de Robert Badinter sur l'abolition", "Archives", "discours Robert Badinter abolition peine de mort 1981"),
      ],
      evaluation: quiz(
        qcm("Qui a prononcé le discours « I have a dream » ?", ["Martin Luther King", "Barack Obama", "Nelson Mandela", "John F. Kennedy"], 0, "Prononcé à Washington lors de la Marche pour l'emploi et la liberté."),
        court("En quelle année a été prononcé « I have a dream » ?", ["1963"], "Le 28 août 1963."),
        qcm("Qui a défendu l'abolition de la peine de mort en France en 1981 ?", ["Robert Badinter", "Victor Hugo", "Simone Veil", "Jean Jaurès"], 0, "Garde des Sceaux, il porte la loi votée en 1981."),
        vf("Selon la tradition, Démosthène s'entraînait avec des cailloux dans la bouche.", true, "Il voulait corriger son élocution difficile en forçant l'articulation."),
        qcm("Qui a dit : « Je n'ai à offrir que du sang, du labeur, des larmes et de la sueur » ?", ["Winston Churchill", "Charles de Gaulle", "Franklin Roosevelt", "Napoléon"], 0, "Premier discours de Churchill comme Premier ministre, en mai 1940."),
        court("Quel orateur romain est l'auteur des Catilinaires ?", ["Cicéron"], "Cicéron y dénonce le complot de Catilina en 63 av. J.-C."),
        qcm("Quelle loi Simone Veil défend-elle à l'Assemblée en 1974 ?", ["La loi sur l'IVG", "L'abolition de la peine de mort", "Le droit de vote des femmes", "L'école obligatoire"], 0, "La loi Veil dépénalise l'interruption volontaire de grossesse."),
        vf("L'appel du 18 juin 1940 a été prononcé à la radio.", true, "Le général de Gaulle s'exprime au micro de la BBC, à Londres."),
        qcm("Que montre le documentaire « À voix haute » (2017) ?", ["Des étudiants qui préparent un concours d'éloquence", "La vie de Cicéron", "Un débat présidentiel", "Une école de théâtre"], 0, "Il suit des étudiants de Seine-Saint-Denis qui préparent le concours Eloquentia."),
        ordre("Range ces orateurs et discours dans l'ordre chronologique.", ["Démosthène", "Cicéron", "Appel du 18 juin", "I have a dream", "Discours de Badinter sur l'abolition"], "IVe s. av. J.-C., Ier s. av. J.-C., 1940, 1963, 1981."),
      ),
    },
  ],
};
