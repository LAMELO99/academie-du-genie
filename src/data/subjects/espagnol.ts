import type { Subject } from "@/lib/types";
import { court, ordre, qcm, quiz, search, vf } from "../helpers";

const CH = "Cours d'espagnol en vidéo";

export const espagnol: Subject = {
  slug: "espagnol",
  name: "Espagnol",
  shortName: "Espagnol",
  coefficient: 2,
  color: "#ea580c",
  emoji: "🇪🇸",
  description: "Se présenter, ser et estar, le présent, gustar et le passé.",
  chapters: [
    {
      slug: "saludos",
      title: "Saludos y presentaciones",
      summary: "Saluer, se présenter et poser des questions simples.",
      lesson: `## Saluer
- **¡Hola!** : salut
- **Buenos días** (le matin), **buenas tardes** (l'après-midi), **buenas noches** (le soir / bonne nuit)
- **Adiós** : au revoir — **Hasta luego** : à plus tard

## Se présenter
- **¿Cómo te llamas?** — **Me llamo** Ana. (Je m'appelle Ana.)
- **¿Cuántos años tienes?** — Tengo catorce años. (J'ai 14 ans.)
- **¿Cómo estás?** — Estoy bien, **gracias**.
- **Encantado / Encantada** : enchanté(e), quand on rencontre quelqu'un.

## La ponctuation
Les questions et exclamations s'ouvrent par un signe **à l'envers** : **¿…?** et **¡…!**`,
      videos: [search("Se présenter en espagnol", CH, "se présenter en espagnol cours débutant")],
      evaluation: quiz(
        qcm("Comment dit-on « bonjour » le matin ?", ["Buenos días", "Buenas noches", "Adiós", "Gracias"], 0, "Buenos días le matin, buenas tardes l'après-midi, buenas noches le soir."),
        court("Comment dit-on « je m'appelle » ?", ["me llamo", "yo me llamo"], "Me llamo + prénom. La question est ¿Cómo te llamas?"),
        qcm("Que signifie « ¿Cómo estás? » ?", ["Comment vas-tu ?", "Comment t'appelles-tu ?", "Quel âge as-tu ?", "Où habites-tu ?"], 0, "Estar sert à parler de son état : ¿Cómo estás? — Estoy bien."),
        vf("« Adiós » signifie « au revoir ».", true, "On peut aussi dire « hasta luego » (à plus tard)."),
        court("Comment dit-on « merci » ?", ["gracias"], "Gracias ; « muchas gracias » = merci beaucoup."),
        qcm("Que signifie « ¿Cuántos años tienes? » ?", ["Quel âge as-tu ?", "Combien de frères as-tu ?", "Quelle heure est-il ?", "Combien ça coûte ?"], 0, "Mot à mot : « Combien d'années as-tu ? »"),
        vf("En espagnol, une question commence par un point d'interrogation à l'envers.", true, "On écrit ¿Cómo estás? avec ¿ au début et ? à la fin."),
        court("Comment dit-on « bonne nuit » ?", ["buenas noches"], "Buenas noches s'utilise le soir et pour souhaiter bonne nuit."),
        qcm("Quand dit-on « Encantado » ?", ["Quand on rencontre quelqu'un", "Pour s'excuser", "Pour refuser", "Pour commander au restaurant"], 0, "Encantado / encantada = enchanté(e)."),
        ordre("Remets ce dialogue dans l'ordre.", ["¡Hola!", "¿Cómo te llamas?", "Me llamo Ana, ¿y tú?", "Me llamo Pablo. ¡Encantado!"], "On salue, on demande le prénom, on répond et on retourne la question, puis on se dit enchanté."),
      ),
    },
    {
      slug: "ser-estar",
      title: "Ser et estar",
      summary: "Deux verbes pour dire « être ».",
      lesson: `## Ser : l'identité, ce qui est permanent
Nationalité, profession, caractère, description physique, date et jour.
> Yo **soy** francés. Ella **es** médica. **Soy** alto. Hoy **es** lunes.

## Estar : la localisation et l'état passager
> Madrid **está** en España. Nosotros **estamos** cansados. Ellos **están** en casa.

## Conjugaison au présent
Pour chaque personne : **ser** / **estar**
- yo : **soy** / **estoy**
- tú : **eres** / **estás**
- él, ella : **es** / **está**
- nosotros : **somos** / **estamos**
- vosotros : **sois** / **estáis**
- ellos : **son** / **están**`,
      videos: [search("Ser ou estar", CH, "ser estar différence cours espagnol")],
      evaluation: quiz(
        qcm("Yo ___ francés.", ["soy", "estoy", "es", "está"], 0, "La nationalité est une identité → ser : yo soy."),
        qcm("Madrid ___ en España.", ["está", "es", "son", "soy"], 0, "La localisation s'exprime avec estar."),
        vf("« Estar » s'utilise pour la localisation et les états passagers.", true, "Estoy cansado (je suis fatigué), estoy en casa (je suis à la maison)."),
        court("Nosotros ___ cansados. (être fatigués)", ["estamos"], "La fatigue est un état passager → estar → nosotros estamos."),
        qcm("Ella ___ médica.", ["es", "está", "son", "estás"], 0, "La profession s'exprime avec ser."),
        court("Conjugue « ser » au présent avec « tú ».", ["eres", "tu eres"], "Ser : soy, eres, es, somos, sois, son."),
        vf("« Estoy alto » signifie « je suis grand (de taille) ».", false, "La taille est une caractéristique durable : on dit « soy alto »."),
        qcm("Hoy ___ lunes.", ["es", "está", "estoy", "son"], 0, "Pour le jour et la date, on utilise ser."),
        court("Ellos ___ en casa. (être à la maison)", ["están"], "Localisation → estar → ellos están."),
        ordre("Remets dans l'ordre la conjugaison de « ser » (yo, tú, él, nosotros, vosotros, ellos).", ["soy", "eres", "es", "somos", "sois", "son"], "Yo soy, tú eres, él es, nosotros somos, vosotros sois, ellos son."),
      ),
    },
    {
      slug: "presente",
      title: "Le présent des verbes réguliers",
      summary: "Verbes en -ar, -er et -ir.",
      lesson: `## Les terminaisons
Pour chaque personne : **-ar** (hablar) / **-er** (comer) / **-ir** (vivir)
- yo : habl**o** / com**o** / viv**o**
- tú : habl**as** / com**es** / viv**es**
- él, ella : habl**a** / com**e** / viv**e**
- nosotros : habl**amos** / com**emos** / viv**imos**
- vosotros : habl**áis** / com**éis** / viv**ís**
- ellos : habl**an** / com**en** / viv**en**

## Le pronom est souvent omis
La terminaison suffit : **Hablo** español = je parle espagnol.

> Yo **como** = je mange. Ella **escribe** una carta. Nosotros **estudiamos** español.`,
      videos: [search("Le présent en espagnol", CH, "présent de l'indicatif espagnol verbes réguliers cours")],
      evaluation: quiz(
        court("Conjugue « hablar » avec « yo ».", ["hablo", "yo hablo"], "Verbe en -ar : yo hablo."),
        qcm("Conjugue « comer » avec « nosotros ».", ["comemos", "comimos", "comamos", "coméis"], 0, "Verbe en -er : nosotros comemos. (Coméis = vosotros.)"),
        qcm("Conjugue « vivir » avec « ellos ».", ["viven", "vivan", "vivimos", "vive"], 0, "Verbe en -ir : ellos viven."),
        vf("Les terminaisons des verbes en -ar sont : -o, -as, -a, -amos, -áis, -an.", true, "Hablo, hablas, habla, hablamos, habláis, hablan."),
        court("Conjugue « trabajar » avec « tú ».", ["trabajas", "tu trabajas"], "Verbe en -ar : tú trabajas."),
        qcm("Ella ___ (escribir) una carta.", ["escribe", "escriba", "escribo", "escriben"], 0, "Verbe en -ir à la 3e personne du singulier : escribe."),
        court("Conjugue « beber » avec « vosotros ».", ["bebéis", "vosotros bebéis"], "Verbe en -er : vosotros bebéis."),
        vf("« Yo como » signifie « je mange ».", true, "Comer = manger. (Attention, « como » veut aussi dire « comme ».)"),
        qcm("Nosotros ___ (estudiar) español.", ["estudiamos", "estudian", "estudio", "estudias"], 0, "Verbe en -ar avec nosotros : -amos."),
        ordre("Remets dans l'ordre la conjugaison de « comer » (yo, tú, él, nosotros, vosotros, ellos).", ["como", "comes", "come", "comemos", "coméis", "comen"], "Como, comes, come, comemos, coméis, comen."),
      ),
    },
    {
      slug: "gustar",
      title: "Exprimer ses goûts avec gustar",
      summary: "Me gusta, me gustan, me encanta…",
      lesson: `## Une construction particulière
Mot à mot, « me gusta el chocolate » = « le chocolat **me plaît** ». Le verbe s'accorde avec **ce qui plaît**.
- **Me gusta** + nom singulier ou verbe : Me **gusta** el chocolate. Me **gusta** bailar.
- **Me gustan** + nom pluriel : Me **gustan** los perros.

## Les pronoms
(A mí) **me** — (a ti) **te** — (a él/ella) **le** — (a nosotros) **nos** — (a vosotros) **os** — (a ellos) **les**
> ¿**Te** gusta el fútbol? — **Nos** gustan las películas.

## Nuancer
- **No me gusta** : je n'aime pas
- **Me encanta** : j'adore`,
      videos: [search("Le verbe gustar", CH, "verbe gustar espagnol cours")],
      evaluation: quiz(
        qcm("Comment dit-on « J'aime le chocolat » ?", ["Me gusta el chocolate", "Me gustan el chocolate", "Yo gusto el chocolate", "Me gusto chocolate"], 0, "Chocolate est singulier → me gusta."),
        qcm("Me ___ los perros.", ["gustan", "gusta", "gusto", "gustas"], 0, "« Los perros » est pluriel → gustan."),
        vf("Devant un verbe à l'infinitif, on utilise « gusta » : « Me gusta bailar ».", true, "Un infinitif se comporte comme un singulier."),
        court("¿___ gusta el fútbol? (à toi)", ["te"], "Le pronom de « tú » est te : ¿Te gusta el fútbol?"),
        qcm("Que signifie « A él le gusta » ?", ["Il aime", "J'aime", "Nous aimons", "Tu aimes"], 0, "Le pronom le correspond à él / ella."),
        court("___ gustan las películas. (à nous)", ["nos"], "Le pronom de « nosotros » est nos."),
        vf("« Me gustan la música » est correct.", false, "La música est singulier : me gusta la música."),
        qcm("Que signifie « No me gusta » ?", ["Je n'aime pas", "Je n'aime plus", "J'aime beaucoup", "Tu n'aimes pas"], 0, "No se place devant le pronom : no me gusta."),
        qcm("Que signifie « Me encanta » ?", ["J'adore", "Je déteste", "Je préfère", "Je veux"], 0, "Encantar fonctionne comme gustar mais exprime un goût plus fort."),
        ordre("Remets les mots dans l'ordre pour former une phrase.", ["A", "mí", "me", "gusta", "leer"], "« A mí me gusta leer » : j'aime lire (a mí renforce le pronom)."),
      ),
    },
    {
      slug: "preterito",
      title: "Le passé simple (pretérito indefinido)",
      summary: "Raconter une action passée et terminée.",
      lesson: `## Les terminaisons régulières
Pour chaque personne : **-ar** (hablar) / **-er et -ir** (comer, vivir)
- yo : habl**é** / com**í**
- tú : habl**aste** / com**iste**
- él, ella : habl**ó** / com**ió**
- nosotros : habl**amos** / com**imos**
- vosotros : habl**asteis** / com**isteis**
- ellos : habl**aron** / com**ieron** (viv**ieron**)

Attention aux **accents écrits** : habl**é**, com**í**, habl**ó**.

## Quelques irréguliers
- **ir** et **ser** ont la même forme : fui, fuiste, **fue**, fuimos, fuisteis, fueron
- **tener** : **tuve**, tuviste, tuvo…

## Les marqueurs de temps
**ayer** (hier), **anteayer** (avant-hier), el año pasado, en 2010…`,
      videos: [search("Le pretérito indefinido", CH, "pretérito indefinido espagnol cours")],
      evaluation: quiz(
        qcm("Ayer yo ___ (hablar) con Ana.", ["hablé", "hablo", "hablaré", "hablar"], 0, "« Ayer » → passé terminé → pretérito : yo hablé."),
        court("Conjugue « comer » au pretérito avec « yo ».", ["comí", "yo comí"], "Verbes en -er : yo comí (avec un accent sur le i)."),
        qcm("Ellos ___ (vivir) dos años en Perú.", ["vivieron", "viven", "vivirán", "vivir"], 0, "Action passée et délimitée → pretérito : ellos vivieron."),
        vf("« Fui » peut être le passé de « ir » et de « ser ».", true, "Ir et ser ont la même conjugaison au pretérito indefinido."),
        court("Conjugue « ir » au pretérito avec « él ».", ["fue", "el fue"], "Ir : fui, fuiste, fue, fuimos, fuisteis, fueron."),
        qcm("Lequel est un marqueur du pretérito indefinido ?", ["ayer", "mañana", "ahora", "siempre"], 0, "Ayer (hier) situe l'action dans un passé terminé."),
        court("Conjugue « hablar » au pretérito avec « nosotros ».", ["hablamos", "nosotros hablamos"], "Hablamos : même forme qu'au présent pour les verbes en -ar."),
        vf("Au pretérito, « hablé » porte un accent écrit sur le e final.", true, "Sans accent, « hable » est une autre forme (le subjonctif)."),
        qcm("Conjugue « tener » au pretérito avec « yo ».", ["tuve", "tení", "tengo", "tenía"], 0, "Tener est irrégulier : tuve, tuviste, tuvo…"),
        ordre("Range ces mots du plus ancien au plus récent.", ["anteayer", "ayer", "hoy", "mañana"], "Avant-hier, hier, aujourd'hui, demain."),
      ),
    },
  ],
};
