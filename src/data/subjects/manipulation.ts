import type { Subject } from "@/lib/types";
import { court, ordre, qcm, quiz, search, vf } from "../helpers";

const HM = "Hygiène Mentale";
const TEB = "La Tronche en Biais";
const CH = "Psychologie sociale";

export const manipulation: Subject = {
  slug: "manipulation",
  name: "Manipulation : techniques et parades",
  shortName: "Manipulation",
  coefficient: 1,
  color: "#c026d3",
  emoji: "🎭",
  description: "Les vraies techniques d'influence étudiées par la psychologie sociale : engagement, soumission librement consentie, biais, désinformation — pour les reconnaître et ne plus les subir.",
  chapters: [
    {
      slug: "principes-influence",
      title: "Les 6 principes de l'influence (Cialdini)",
      summary: "Réciprocité, cohérence, preuve sociale, autorité, sympathie, rareté.",
      lesson: `## Les travaux de Robert Cialdini
Le psychologue **Robert Cialdini**, dans **« Influence et manipulation »** (1984), décrit six leviers qui déclenchent un « oui » quasi automatique.

1. **Réciprocité** : on se sent obligé de rendre ce qu'on a reçu. *Un échantillon « gratuit », un café offert avant la demande.*
2. **Engagement et cohérence** : après un premier « oui », on veut rester cohérent avec soi-même.
3. **Preuve sociale** : on imite les autres. *« Déjà 1 million d'utilisateurs », les rires enregistrés, les faux avis.*
4. **Autorité** : on obéit à l'expert, ou à qui en a les signes (**blouse, uniforme, titre**). C'est ce que montre la célèbre **expérience de Milgram**.
5. **Sympathie** : on dit oui plus facilement à qui nous plaît ou nous ressemble. Les vendeurs cherchent des **points communs** et nous flattent.
6. **Rareté** : ce qui est rare paraît précieux. *« Plus que 2 en stock », « offre limitée ».*

## La parade
Repère le levier et pose-toi la vraie question : *« Est-ce que je le voudrais autant sans ça ? »* Et rappelle-toi : une faveur « offerte » pour t'obliger n'est pas un cadeau.`,
      videos: [
        search("Les 6 principes de Cialdini", HM, "Cialdini influence manipulation réciprocité rareté"),
        search("L'expérience de Milgram", TEB, "expérience de Milgram soumission à l'autorité"),
      ],
      evaluation: quiz(
        qcm("Un magasin offre un échantillon gratuit pour inciter à l'achat. Quel principe ?", ["Réciprocité", "Rareté", "Autorité", "Preuve sociale"], 0, "On se sent redevable après avoir reçu quelque chose."),
        qcm("« Plus que 2 articles en stock ! » Quel principe ?", ["Rareté", "Sympathie", "Engagement", "Réciprocité"], 0, "Ce qui semble rare paraît plus désirable."),
        qcm("Un acteur en blouse blanche vante un dentifrice. Quel principe ?", ["Autorité", "Réciprocité", "Rareté", "Engagement"], 0, "La blouse évoque un médecin : signe d'autorité."),
        court("Quel principe nous pousse à faire comme la majorité ?", ["preuve sociale", "conformisme"], "Quand on hésite, on regarde ce que font les autres."),
        qcm("Qui est l'auteur de « Influence et manipulation » (1984) ?", ["Robert Cialdini", "Sigmund Freud", "Milgram", "Pavlov"], 0, "Cialdini a identifié les six grands principes de l'influence."),
        qcm("Quelle célèbre expérience montre la soumission à l'autorité ?", ["L'expérience de Milgram", "L'expérience de Pavlov", "Le test de Rorschach", "L'effet placebo"], 0, "Milgram a montré que des gens obéissent à un ordre, même douteux, donné par une figure d'autorité."),
        vf("On dit plus facilement oui à quelqu'un qu'on apprécie ou qui nous ressemble.", true, "C'est le principe de sympathie, très utilisé en vente."),
        court("Compléter : le principe qui nous pousse à rester fidèle à un premier « oui » s'appelle l'engagement et la…", ["cohérence"], "On veut rester cohérent avec ce qu'on a déjà dit ou fait."),
        qcm("Les rires enregistrés dans les séries comiques exploitent…", ["La preuve sociale", "La réciprocité", "La rareté", "L'autorité"], 0, "Entendre rire les autres nous pousse à trouver ça drôle."),
        qcm("Quelle question aide à résister au principe de rareté ?", ["« En voudrais-je autant s'il y en avait des milliers ? »", "« Qui d'autre l'a acheté ? »", "« Le vendeur est-il sympa ? »", "« Est-ce bientôt épuisé ? »"], 0, "On se recentre sur la valeur réelle, pas sur la peur de rater."),
      ),
    },
    {
      slug: "engagement-techniques",
      title: "Les techniques d'engagement",
      summary: "Pied dans la porte, porte-au-nez, amorçage, leurre.",
      lesson: `## La soumission librement consentie
Les psychologues français **Joule et Beauvois** (« Petit traité de manipulation à l'usage des honnêtes gens ») l'ont montré : on obtient beaucoup plus en amenant la personne à **décider elle-même**, par petites marches, qu'en donnant un ordre. Le piège : la victime a l'impression d'être **libre**.

## Le pied dans la porte
Une **petite** demande d'abord (facile à accepter), puis la **grande** visée.
> « Tu peux surveiller mon sac 2 min ? » … plus tard … « Tu peux m'aider à déménager ? »
Le premier « oui » engage. (Expérience de **Freedman et Fraser**, 1966.)

## La porte-au-nez
L'inverse : une demande **énorme**, forcément refusée, puis une **raisonnable**, qui passe par contraste et par un sentiment de concession.
> « Prête-moi 100 € ? » — « Non ! » — « Alors juste 10 ? » — « D'accord. »

## L'amorçage (low-ball)
On fait prendre une décision sur une base **avantageuse**, puis on révèle le **vrai** coût. Comme on s'est déjà engagé, on maintient sa décision.
> « Super promo ! » … une fois décidé … « Ah, elle vient de se terminer, mais… »

## Le leurre
On attire avec une option très attractive qui **disparaît**, remplacée par une moins bonne — qu'on accepte quand même.

## La parade
Reviens à ta **décision initiale** : « Est-ce que je dirais oui à **cette** demande-là, maintenant, si c'était la première ? »`,
      videos: [
        search("Le pied dans la porte", TEB, "pied dans la porte porte au nez manipulation psychologie"),
        search("Petit traité de manipulation", HM, "Joule Beauvois soumission librement consentie"),
      ],
      evaluation: quiz(
        qcm("On accepte une petite demande, puis une plus grande passe mieux. Quelle technique ?", ["Le pied dans la porte", "La porte-au-nez", "Le leurre", "L'amorçage"], 0, "Le premier « oui » nous engage pour le suivant."),
        qcm("Une demande énorme refusée, puis une raisonnable acceptée par contraste. Quelle technique ?", ["La porte-au-nez", "Le pied dans la porte", "L'amorçage", "La preuve sociale"], 0, "Le refus crée un sentiment de concession qui pousse à accepter la 2ᵉ demande."),
        court("Quel duo de psychologues français a écrit le « Petit traité de manipulation à l'usage des honnêtes gens » ?", ["Joule et Beauvois", "Joule Beauvois", "Beauvois et Joule"], "Robert-Vincent Joule et Jean-Léon Beauvois."),
        qcm("On fait décider sur une base avantageuse, puis on révèle le vrai coût. Quelle technique ?", ["L'amorçage (low-ball)", "La porte-au-nez", "La preuve sociale", "Le pied dans la porte"], 0, "Comme on est déjà engagé, on maintient sa décision malgré le changement."),
        vf("La « soumission librement consentie » fonctionne parce que la victime croit décider librement.", true, "C'est ce qui rend ces techniques si efficaces : pas d'ordre, pas de menace."),
        court("Technique où une offre très alléchante disparaît et est remplacée par une moins bonne, acceptée quand même ?", ["leurre", "le leurre"], "Le leurre exploite l'engagement déjà pris dans la décision."),
        qcm("« Tu surveilles mon sac ? » puis « Tu m'aides à déménager ? » illustre…", ["Le pied dans la porte", "La porte-au-nez", "Le leurre", "La rareté"], 0, "On commence petit pour obtenir ensuite beaucoup plus."),
        vf("La meilleure parade est de revenir à ce qu'on déciderait si la demande était posée pour la première fois.", true, "On annule l'effet d'engagement en repartant de zéro."),
        qcm("Pourquoi la porte-au-nez fonctionne-t-elle ?", ["Par contraste et sentiment de concession mutuelle", "Par la peur", "Par la fatigue", "Par hasard"], 0, "Après avoir « reculé », l'autre a l'impression de devoir faire un geste à son tour."),
        ordre("Remets dans l'ordre un pied dans la porte réussi.", ["Petite demande facile à accepter", "La personne dit oui", "Elle se sent engagée", "Grande demande visée, acceptée plus facilement"], "On gravit les marches une à une jusqu'à la vraie demande."),
      ),
    },
    {
      slug: "biais-cognitifs",
      title: "Les biais cognitifs",
      summary: "Les failles du cerveau que la manipulation exploite.",
      lesson: `## Des raccourcis exploitables
Le cerveau utilise des **heuristiques** (raccourcis rapides). Elles créent des erreurs systématiques, les **biais cognitifs**, que la publicité et la manipulation exploitent. Tout le monde en a.

## Les plus utilisés
- **Biais de confirmation** : on retient ce qui confirme ce qu'on pense déjà.
- **Effet d'ancrage** : le premier chiffre entendu fixe la référence. *Prix barré « 200 € », puis « 99 € » : « quelle affaire ! »* C'est le premier levier d'une **négociation**.
- **Effet de halo** : une qualité visible (beauté, célébrité) déteint sur le reste.
- **Effet de cadrage (framing)** : « 90 % de réussite » rassure plus que « 10 % d'échec », pour une info identique.
- **Coûts irrécupérables** : continuer une mauvaise chose parce qu'on y a déjà investi.
- **Effet de simple exposition** : à force de voir un message (ou une pub), on l'apprécie davantage — d'où le **matraquage** publicitaire.
- **Peur de rater (FOMO)** : « offre qui se termine ce soir ».

## La parade
Cherche **activement** les arguments **contraires**, compare les **sources**, et accepte de changer d'avis.`,
      videos: [
        search("Les biais cognitifs", TEB, "La Tronche en Biais biais cognitifs"),
        search("L'effet d'ancrage", CH, "effet d'ancrage biais négociation explication"),
      ],
      evaluation: quiz(
        qcm("On cherche surtout ce qui confirme ce qu'on pense déjà. Quel biais ?", ["Biais de confirmation", "Effet de halo", "Effet d'ancrage", "Coûts irrécupérables"], 0, "On filtre inconsciemment ce qui nous contredit."),
        qcm("Un prix barré « 200 € » à côté de « 99 € ». Quel biais est exploité ?", ["Effet d'ancrage", "Effet de halo", "Biais de confirmation", "FOMO"], 0, "Le premier chiffre sert d'ancre, même s'il est artificiel."),
        vf("Avec l'effet de halo, une qualité visible influence le jugement sur d'autres qualités.", true, "On prête plus facilement de l'intelligence à une personne belle ou célèbre."),
        court("« 90 % de réussite » rassure plus que « 10 % d'échec ». Quel effet ?", ["cadrage", "effet de cadrage", "framing"], "La même info, présentée autrement, change la décision."),
        qcm("Tu finis un film nul parce que tu as payé ta place. Quel biais ?", ["Coûts irrécupérables", "Ancrage", "Halo", "Confirmation"], 0, "L'argent est dépensé quoi qu'il arrive : il ne devrait pas peser sur la décision."),
        vf("Être très intelligent protège totalement des biais cognitifs.", false, "Les biais touchent tout le monde ; les connaître aide mais ne suffit pas."),
        court("Comment appelle-t-on les raccourcis mentaux rapides du cerveau ?", ["heuristiques", "heuristique"], "Elles font gagner du temps mais produisent des biais."),
        qcm("Pourquoi une publicité répétée des dizaines de fois finit-elle par nous plaire ?", ["L'effet de simple exposition", "Le biais de confirmation", "L'effet de cadrage", "Les coûts irrécupérables"], 0, "Plus on voit une chose, plus on a tendance à l'apprécier : d'où le matraquage."),
        qcm("« Offre valable seulement ce soir ! » joue surtout sur…", ["La peur de rater (FOMO)", "L'effet de halo", "Le biais de confirmation", "Les coûts irrécupérables"], 0, "La crainte de manquer l'occasion pousse à décider vite."),
        ordre("Remets dans l'ordre une méthode pour limiter le biais de confirmation.", ["Formuler mon opinion", "Chercher des arguments contraires", "Comparer les sources", "Ajuster mon avis si nécessaire"], "On sait ce qu'on pense, puis on le confronte honnêtement."),
      ),
    },
    {
      slug: "manipulation-relationnelle",
      title: "Manipulation relationnelle et emprise",
      summary: "Gaslighting, culpabilisation, cold reading, effet Barnum.",
      lesson: `## Les techniques dans la relation
- **Culpabilisation** : « Si tu m'aimais, tu ferais ça. » On remplace l'argument par la faute.
- **Chantage affectif** : menace de retirer son affection ou de se mettre en danger.
- **Gaslighting** : faire douter quelqu'un de sa mémoire ou de ses perceptions (« Ça ne s'est jamais passé, tu inventes »). Objectif : prendre le contrôle.
- **Love bombing** : submerger de compliments et d'attentions au début, pour créer une dépendance, puis alterner avec le froid.
- **Isolement** : éloigner la personne de ses proches pour qu'elle n'ait plus de regard extérieur.
- **Dévalorisation** puis valorisation, en alternance, pour déstabiliser : c'est un ressort de l'**emprise**.

## Le faux « don de voyance » : cold reading et effet Barnum
- **Effet Barnum (ou Forer)** : on se reconnaît dans des descriptions **si vagues** qu'elles valent pour presque tout le monde (*« Tu as besoin que les autres t'apprécient, mais tu es parfois critique envers toi-même »*). C'est le secret des **horoscopes**.
- **Cold reading** : le voyant lance des affirmations générales, **observe les réactions** et ajuste. Tu crois qu'il devine ; en réalité **c'est toi** qui donnes les infos.

## La parade
Fie-toi à ton **ressenti** (malaise, pression), garde des **liens extérieurs**, vérifie les faits, et sache qu'un propos « bluffant » est souvent juste **assez vague** pour coller à tout le monde.`,
      videos: [
        search("Le gaslighting et l'emprise", CH, "gaslighting emprise manipulation relationnelle"),
        search("L'effet Barnum et le cold reading", HM, "effet Barnum cold reading horoscope voyance"),
      ],
      evaluation: quiz(
        court("Comment appelle-t-on le fait de faire douter quelqu'un de sa mémoire ou de ses perceptions ?", ["gaslighting"], "Le terme vient du film « Gaslight ». But : prendre le contrôle."),
        qcm("« Si tu m'aimais vraiment, tu ferais ça. » Quelle technique ?", ["La culpabilisation", "Un argument logique", "La preuve sociale", "Le cold reading"], 0, "On joue sur la culpabilité au lieu de donner une vraie raison."),
        qcm("Un horoscope qui « tombe toujours juste » exploite surtout…", ["L'effet Barnum", "L'effet d'ancrage", "La réciprocité", "Le pied dans la porte"], 0, "Des descriptions assez vagues pour valoir pour presque tout le monde."),
        vf("Dans le cold reading, c'est souvent la personne elle-même qui fournit les informations au « voyant ».", true, "Le voyant lance des généralités, observe les réactions et ajuste."),
        court("Comment appelle-t-on le fait de submerger quelqu'un d'attentions au début d'une relation pour créer une dépendance ?", ["love bombing"], "Le love bombing alterne ensuite avec des phases froides."),
        qcm("Pourquoi un manipulateur cherche-t-il souvent à isoler sa cible ?", ["Pour qu'elle n'ait plus de regard extérieur", "Pour lui faire plaisir", "Pour l'aider à travailler", "Par timidité"], 0, "Isolée, la personne n'a plus personne pour l'alerter."),
        vf("L'alternance entre dévalorisation et valorisation est un ressort de l'emprise.", true, "Ce « chaud-froid » déstabilise et crée une dépendance."),
        qcm("L'effet Barnum est aussi appelé effet…", ["Forer", "Milgram", "Pavlov", "Mozart"], 0, "D'après le psychologue Bertram Forer, qui l'a démontré en 1948."),
        qcm("Quel est le meilleur indicateur d'une relation manipulatrice ?", ["Un malaise persistant et une impression de ne plus avoir le choix", "Un désaccord ponctuel", "Une critique une fois", "Un compliment"], 0, "Le ressenti de pression et de perte de liberté doit alerter."),
        ordre("Remets dans l'ordre une stratégie d'emprise souvent décrite.", ["Love bombing (séduction intense)", "Isolement des proches", "Dévalorisation", "Alternance chaud-froid et contrôle"], "On séduit, on isole, on dévalorise, puis on contrôle par l'alternance."),
      ),
    },
    {
      slug: "rhetorique-et-propagande",
      title: "Rhétorique manipulatrice et propagande",
      summary: "Sophismes, FUD, homme de paille, désinformation.",
      lesson: `## Les sophismes : de faux arguments
- **Ad hominem** : attaquer la personne au lieu de son argument.
- **Homme de paille** : déformer l'argument adverse pour le démolir plus facilement.
- **Fausse alternative** : « C'est moi ou le chaos. »
- **Pente glissante** : « Si on autorise X, bientôt ce sera la catastrophe. »
- **Appel à la popularité** : « Tout le monde le pense, donc c'est vrai. »
- **Whataboutisme** : répondre à une critique par « et vous alors ? » pour détourner.

## Les techniques de propagande et de désinformation
- **FUD** (Fear, Uncertainty, Doubt) : semer **peur, incertitude et doute**.
- **Bouc émissaire** : désigner un coupable unique à tous les problèmes.
- **Matraquage** : répéter un slogan jusqu'à ce qu'il paraisse évident.
- **Novlangue** : déformer les mots pour masquer la réalité (*« frappe chirurgicale »*).
- **Astroturfing** : faux comptes et faux avis simulant un mouvement spontané.
- **Deepfakes** : vidéos truquées par IA.

## La parade
Attaque l'**argument**, pas la personne. Pour une info : qui est la **source** ? quelle **date** ? **recoupe** avec d'autres médias fiables, et pour une image, fais une **recherche inversée**. Le nombre de partages ne prouve rien.`,
      videos: [
        search("Les sophismes expliqués", HM, "sophismes homme de paille ad hominem whataboutisme"),
        search("Reconnaître la désinformation", TEB, "désinformation propagande esprit critique"),
      ],
      evaluation: quiz(
        qcm("Attaquer la personne plutôt que son argument, c'est…", ["Un argument ad hominem", "Un homme de paille", "Une concession", "Une preuve sociale"], 0, "« Tu dis ça mais tu as eu 5 en maths » ne répond pas à l'argument."),
        court("Comment appelle-t-on le fait de déformer l'argument adverse pour le réfuter plus facilement ?", ["homme de paille", "épouvantail"], "On attaque une caricature au lieu de la vraie position."),
        qcm("« C'est moi ou le chaos. » Quel sophisme ?", ["La fausse alternative", "L'ad hominem", "La pente glissante", "Le whataboutisme"], 0, "On fait croire qu'il n'existe que deux options."),
        qcm("Répondre à une critique par « et vous alors ? » pour détourner, c'est…", ["Le whataboutisme", "La preuve sociale", "L'appel à l'autorité", "La réciprocité"], 0, "On change de sujet au lieu de répondre à la critique."),
        court("Que veut dire le sigle FUD en désinformation ? Peur, incertitude et…", ["doute", "le doute"], "FUD = Fear, Uncertainty, Doubt : semer la peur, l'incertitude et le doute."),
        qcm("Désigner un coupable unique à tous les problèmes, c'est la technique du…", ["Bouc émissaire", "Matraquage", "Deepfake", "Halo"], 0, "On canalise la colère sur une cible, souvent injustement."),
        vf("Un grand nombre de partages prouve qu'une information est vraie.", false, "Les fausses informations circulent souvent plus vite que les vraies."),
        court("Comment appelle-t-on l'usage de faux comptes et faux avis pour simuler un mouvement spontané ?", ["astroturfing"], "Du nom d'une marque de gazon artificiel : un faux mouvement « de la base »."),
        qcm("Quel outil aide à savoir si une photo a été sortie de son contexte ?", ["La recherche d'image inversée", "Un filtre photo", "Le mode avion", "Une capture d'écran"], 0, "Elle retrouve où et quand l'image est apparue pour la première fois."),
        ordre("Remets dans l'ordre les étapes pour vérifier une information.", ["Identifier la source", "Vérifier l'auteur et la date", "Recouper avec d'autres médias fiables", "Décider de partager ou non"], "On remonte à l'origine, on vérifie, on recoupe, puis on décide."),
      ),
    },
    {
      slug: "se-proteger",
      title: "Se protéger : affirmation de soi",
      summary: "Dire non, méthode DESC, disque rayé.",
      lesson: `## L'assertivité
Être **assertif**, c'est exprimer ses besoins et ses limites **clairement**, en **respectant** l'autre. Ni agressif, ni soumis.

## La méthode DESC
1. **Décrire** les faits, sans jugement.
2. **Exprimer** ce que tu ressens (en « je »).
3. **Spécifier** ce que tu souhaites.
4. Préciser les **conséquences** positives.
> « Quand tu me demandes mes devoirs (D), je me sens mal à l'aise (E). Je préfère t'expliquer l'exercice (S) : tu sauras le refaire (C). »

## Des outils concrets contre les techniques vues
- Le **disque rayé** : répéter calmement le même refus, sans se justifier à l'infini. (Contre l'insistance.)
- **Demander un délai** avant de décider ou de signer. (Contre l'urgence, l'amorçage, le leurre.)
- Revenir à sa **décision initiale**. (Contre le pied dans la porte.)
- Parler en **« je »**, pas en « tu » accusateur. (Pour sortir de la culpabilisation.)
- Tu as le droit de **changer d'avis** et de dire **non** sans un dossier d'explications.
- En ligne : **bloquer, signaler, en parler** à un adulte de confiance.

> Ce chapitre t'apprend à **te défendre**. Manipuler les autres détruit la confiance et les relations : on apprend ces techniques pour les **reconnaître**, pas pour les pratiquer.`,
      videos: [
        search("Savoir dire non (assertivité)", CH, "assertivité savoir dire non affirmation de soi"),
        search("La méthode DESC", CH, "méthode DESC communication assertive exemple"),
      ],
      evaluation: quiz(
        qcm("Qu'est-ce que l'assertivité ?", ["Exprimer ses besoins en respectant les autres", "Imposer son avis", "Toujours dire oui", "Se taire"], 0, "C'est le juste milieu entre agressivité et soumission."),
        ordre("Remets dans l'ordre les étapes de la méthode DESC.", ["Décrire les faits", "Exprimer son ressenti", "Spécifier ce qu'on souhaite", "Conséquences positives"], "D-E-S-C : Décrire, Exprimer, Spécifier, Conséquences."),
        vf("Être assertif, c'est être agressif.", false, "L'assertivité respecte l'autre ; l'agressivité l'attaque."),
        court("Comment s'appelle la technique qui consiste à répéter calmement le même refus ?", ["disque rayé"], "Comme un disque rayé, on répète sans se laisser entraîner dans un débat."),
        qcm("Quelle parade contre l'amorçage, le leurre ou l'urgence ?", ["Demander un délai avant de décider", "Décider tout de suite", "Signer sans lire", "Faire confiance au vendeur"], 0, "Une offre honnête supporte un délai de réflexion."),
        vf("On a le droit de changer d'avis, même après avoir dit oui sous pression.", true, "Un engagement obtenu par manipulation peut être reconsidéré."),
        qcm("Laquelle de ces phrases est un message en « je » ?", ["« Je me sens mal à l'aise quand on se moque de moi. »", "« Tu es toujours méchant. »", "« Tu ne comprends jamais rien. »", "« Vous êtes tous pareils. »"], 0, "Parler de son ressenti évite d'accuser et sort de la culpabilisation."),
        qcm("Quelle est la bonne parade contre le pied dans la porte ?", ["Revenir à sa décision initiale", "Accepter pour rester cohérent", "Dire oui plus vite", "Faire une grande concession"], 0, "On se demande ce qu'on déciderait si la demande était posée pour la première fois."),
        qcm("Quelqu'un te met mal à l'aise en ligne. Que fais-tu ?", ["J'en parle à un adulte de confiance, je bloque et je signale", "Je réponds de façon agressive", "Je garde tout pour moi", "J'envoie ce qu'il demande pour qu'il arrête"], 0, "Ne reste pas seul : bloquer, signaler et en parler sont les bons réflexes."),
        vf("On apprend les techniques de manipulation surtout pour les reconnaître et s'en protéger.", true, "Les pratiquer abîme la confiance ; les connaître permet de ne plus les subir."),
      ),
    },
  ],
};
