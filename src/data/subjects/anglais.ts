import type { Subject } from "@/lib/types";
import { court, ordre, qcm, quiz, search, vf } from "../helpers";

const CH = "Cours d'anglais en vidéo";

export const anglais: Subject = {
  slug: "anglais",
  name: "Anglais",
  shortName: "Anglais",
  coefficient: 3,
  color: "#2563eb",
  emoji: "🇬🇧",
  description: "Les temps, les comparaisons, le futur et les modaux.",
  chapters: [
    {
      slug: "present-simple-continuous",
      title: "Present simple vs present continuous",
      summary: "Habitudes ou actions en cours ?",
      lesson: `## Present simple : habitudes et vérités
- Forme : base verbale, **+ s à la 3e personne du singulier** (he/she/it).
> She **goes** to school every day. He **plays** football on Saturdays.
- Négation : **don't / doesn't** + base. They **don't** like coffee.
- Question : **Do / Does** + sujet + base. **Do** you speak English?
- Mots-repères : *every day, usually, always, never, on Saturdays*.

## Present continuous : action en cours
- Forme : **be (am/is/are) + verbe-ing**.
> Look! It **is raining**. My brother **is watching** TV right now.
- Mots-repères : *now, right now, look!, listen!*

## Attention
Les verbes d'état (*know, like, want, understand*) ne se mettent **pas** à la forme -ing.
> ✗ I am knowing → ✔ I **know**`,
      videos: [search("Present simple ou present continuous", CH, "present simple present continuous cours anglais")],
      evaluation: quiz(
        qcm("She ___ to school every day.", ["goes", "is going", "go", "going"], 0, "Habitude (every day) → present simple, avec -s à la 3e personne : goes."),
        qcm("Look! It ___.", ["is raining", "rains", "rain", "rained"], 0, "« Look! » indique une action en cours → present continuous."),
        court("He ___ (play) football on Saturdays.", ["plays"], "Habitude + 3e personne du singulier : plays."),
        vf("« I am knowing the answer » est correct.", false, "« Know » est un verbe d'état : on dit « I know the answer »."),
        qcm("They ___ like coffee.", ["don't", "doesn't", "aren't", "isn't"], 0, "Négation au present simple avec « they » : don't."),
        court("___ you speak English? (un seul mot)", ["do"], "Question au present simple : Do + sujet + base verbale."),
        qcm("Listen, the baby ___.", ["is crying", "cries", "cry", "crying"], 0, "« Listen » → action en train de se produire → is crying."),
        vf("Au present simple, on ajoute un -s au verbe à la 3e personne du singulier.", true, "He works, she plays, it rains."),
        court("My brother ___ (watch) TV right now.", ["is watching", "'s watching"], "« Right now » → present continuous : is watching."),
        ordre("Remets les mots dans l'ordre pour former une question.", ["Where", "do", "you", "live"], "Mot interrogatif + auxiliaire do + sujet + verbe : Where do you live?"),
      ),
    },
    {
      slug: "past-simple",
      title: "Past simple et verbes irréguliers",
      summary: "Raconter des actions terminées dans le passé.",
      lesson: `## Formation
- Verbes réguliers : **base + -ed**. visit → visit**ed**, play → play**ed**
- Verbes irréguliers : forme à apprendre par cœur.

Base → **prétérit** → participe passé :
- go → **went** → gone
- see → **saw** → seen
- make → **made** → made
- buy → **bought** → bought
- write → **wrote** → written
- eat → **ate** → eaten

## Négation et question
On utilise **did** + **base verbale** (le verbe ne change plus !).
> She **didn't come**. **Did** you **see** the film?
> ✗ I didn't went → ✔ I didn't **go**

## Mots-repères
*yesterday, last week, last summer, ago, in 2010*`,
      videos: [search("Le prétérit en anglais", CH, "past simple prétérit anglais cours verbes irréguliers")],
      evaluation: quiz(
        court("Quel est le prétérit de « go » ?", ["went"], "Go est irrégulier : go – went – gone."),
        court("Quel est le prétérit de « see » ?", ["saw"], "See – saw – seen."),
        qcm("Yesterday I ___ a cake.", ["made", "make", "maked", "making"], 0, "Make est irrégulier : make – made – made."),
        vf("« I didn't went » est correct.", false, "Après did/didn't, on met la base verbale : I didn't go."),
        qcm("Quel est le prétérit de « buy » ?", ["bought", "buyed", "brought", "buy"], 0, "Buy – bought – bought (attention : brought vient de « bring »)."),
        court("She ___ (not / come) to the party.", ["didn't come", "did not come"], "Négation au prétérit : didn't + base verbale."),
        qcm("___ you see the film last night?", ["Did", "Do", "Were", "Have"], 0, "« Last night » → passé → auxiliaire Did."),
        court("Quel est le prétérit de « write » ?", ["wrote"], "Write – wrote – written."),
        vf("Les verbes réguliers forment leur prétérit en -ed.", true, "Work → worked, play → played, visit → visited."),
        ordre("Remets dans l'ordre : base verbale, prétérit, participe passé du verbe « to eat ».", ["eat", "ate", "eaten"], "Eat – ate – eaten."),
      ),
    },
    {
      slug: "comparatives-superlatives",
      title: "Comparatifs et superlatifs",
      summary: "Comparer deux choses ou désigner la meilleure.",
      lesson: `## Adjectifs courts (1 syllabe, ou 2 en -y)
- Comparatif : **-er + than**. big → **bigger** than, easy → **easier**
- Superlatif : **the -est**. tall → **the tallest**

## Adjectifs longs
- Comparatif : **more** + adjectif + than. Paris is **more expensive** than Lyon.
- Superlatif : **the most** + adjectif. **the most interesting**

## Irréguliers
- good → **better** → the best
- bad → **worse** → the worst
- far → farther/further → **the farthest**/the furthest

## Égalité
**as** + adjectif + **as**. She is **as tall as** her brother.`,
      videos: [search("Comparatifs et superlatifs", CH, "comparatif superlatif anglais cours")],
      evaluation: quiz(
        qcm("An elephant is ___ than a mouse.", ["bigger", "more big", "biggest", "the bigger"], 0, "Adjectif court : big → bigger (on double le g)."),
        court("Quel est le comparatif de « good » ?", ["better"], "Good est irrégulier : good – better – the best."),
        qcm("This is ___ book I've ever read.", ["the most interesting", "the more interesting", "most interesting", "interestinger"], 0, "Adjectif long au superlatif : the most interesting."),
        vf("Le comparatif de « bad » est « worse ».", true, "Bad – worse – the worst."),
        court("Quel est le superlatif de « tall » ?", ["the tallest", "tallest"], "Adjectif court : the + -est → the tallest."),
        qcm("Paris is ___ expensive than Lyon.", ["more", "most", "much", "the"], 0, "Adjectif long au comparatif : more … than."),
        vf("« as tall as » exprime l'égalité.", true, "She is as tall as her brother = elle est aussi grande que son frère."),
        qcm("Quel est le superlatif de « far » ?", ["the farthest", "the farer", "the most far", "the farest"], 0, "Far – farther – the farthest (ou further – the furthest)."),
        court("Quel est le comparatif de « easy » ?", ["easier"], "Adjectif en -y : le y devient i → easier."),
        ordre("Remets dans l'ordre : adjectif, comparatif, superlatif.", ["good", "better", "the best"], "Good – better – the best."),
      ),
    },
    {
      slug: "future",
      title: "Le futur : will et going to",
      summary: "Prédictions, décisions et projets.",
      lesson: `## Will + base verbale
- **Prédiction** ou opinion : I think she **will win**.
- **Décision spontanée** : The phone is ringing — I**'ll** answer it!
- Négation : **won't** (= will not).
> She **will be** 15 next year.
> ✗ I will to go → ✔ I **will go**

## Be going to + base verbale
- **Projet déjà décidé** : We **are going to visit** our grandparents next weekend.
- **Prédiction à partir d'un indice visible** : Look at those clouds! It **is going to rain**.

## Mots-repères
*tomorrow* (demain), *next week*, *soon*, *in 2030*`,
      videos: [search("Will ou be going to", CH, "will be going to futur anglais cours")],
      evaluation: quiz(
        qcm("Look at those clouds! It ___ rain.", ["is going to", "will", "goes to", "going"], 0, "Prédiction fondée sur un indice visible (les nuages) → be going to."),
        vf("« Will » s'utilise pour une décision prise sur le moment.", true, "« I'll answer it! » : on décide au moment où l'on parle."),
        court("Quelle est la forme contractée de « will not » ?", ["won't"], "Will not → won't."),
        qcm("I think she ___ win the match.", ["will", "is going", "goes", "going to"], 0, "Opinion / prédiction avec « I think » → will."),
        qcm("We ___ visit our grandparents next weekend — we've already booked the tickets.", ["are going to", "will be", "go to", "going"], 0, "Projet déjà décidé (billets réservés) → be going to."),
        court("She ___ (be) 15 next year.", ["will be", "'ll be"], "Fait futur certain → will + base verbale : will be."),
        vf("« I will to go » est correct.", false, "Will est suivi de la base verbale sans « to » : I will go."),
        qcm("The phone is ringing! I ___ answer it.", ["'ll", "am going to", "going", "will to"], 0, "Décision spontanée → will (forme contractée 'll)."),
        court("Comment dit-on « demain » en anglais ?", ["tomorrow"], "Tomorrow = demain ; yesterday = hier ; today = aujourd'hui."),
        ordre("Remets les mots dans l'ordre pour former une phrase.", ["I", "am", "going", "to", "travel"], "Sujet + be + going to + base verbale."),
      ),
    },
    {
      slug: "modal-verbs",
      title: "Les modaux",
      summary: "Can, must, should, may, might…",
      lesson: `## Règles communes
- Toujours suivis de la **base verbale sans « to »**.
- Pas de -s à la 3e personne. She **can** swim.

## Le sens
- **can / could** : capacité, permission. She **could** swim when she was five.
- **may** : permission polie. **May** I open the window?
- **must** : obligation. You **must** wear a seatbelt.
- **mustn't** : **interdiction**. You **mustn't** smoke here.
- **don't have to** : absence d'obligation. You **don't have to** come = tu n'es pas obligé.
- **should** : conseil. You **should** study more = tu devrais.
- **might** : faible probabilité. It **might** rain later.

## Négations
can't (cannot), mustn't, shouldn't, won't.`,
      videos: [search("Les modaux en anglais", CH, "modaux anglais can must should cours")],
      evaluation: quiz(
        qcm("You ___ wear a seatbelt. It's the law.", ["must", "can", "might", "may"], 0, "Obligation (c'est la loi) → must."),
        qcm("___ I open the window, please?", ["May", "Mustn't", "Won't", "Doesn't"], 0, "Demande de permission polie → May I…?"),
        vf("« Mustn't » signifie « ne pas être obligé de ».", false, "Mustn't exprime une interdiction. « Pas obligé », c'est don't have to."),
        court("Quel modal traduit « tu devrais » (conseil) ?", ["should", "you should"], "Should exprime un conseil : You should study more."),
        qcm("She ___ swim when she was five.", ["could", "can", "must", "should"], 0, "Capacité dans le passé → could."),
        vf("Les modaux sont suivis de la base verbale sans « to ».", true, "I can swim (et non I can to swim)."),
        qcm("« You don't have to come » signifie…", ["Tu n'es pas obligé de venir", "Tu n'as pas le droit de venir", "Tu ne peux pas venir", "Tu viendras"], 0, "Don't have to = absence d'obligation."),
        court("Quelle est la forme négative contractée de « can » ?", ["can't", "cannot", "can not"], "Can → can't (ou cannot)."),
        qcm("It ___ rain later, take an umbrella just in case.", ["might", "must", "mustn't", "can't"], 0, "Faible probabilité (just in case) → might."),
        ordre("Remets les mots dans l'ordre pour former une phrase.", ["You", "should", "study", "more"], "Sujet + modal + base verbale + complément."),
      ),
    },
  ],
};
