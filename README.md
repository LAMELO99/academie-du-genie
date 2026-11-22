# 🎓 Académie du Génie

Une école en ligne personnelle pour progresser dans toutes les matières : fiches de cours, vidéos YouTube et évaluations notées sur 20, avec un bulletin comme au collège ou au lycée.

**Stack** : Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · aucune base de données (progression enregistrée dans le `localStorage` du navigateur).

## Démarrer

```bash
cd academie-du-genie
npm install
npm run dev        # http://localhost:3000
npm test           # vérifie le contenu, les corrections et les calculs
npm run build      # build de production
```

## Déployer sur Vercel

Le dépôt contient un autre projet à sa racine : dans Vercel, crée un projet et règle **Root Directory = `academie-du-genie`**. Le framework Next.js est détecté automatiquement ; aucune variable d'environnement n'est nécessaire.

## Architecture

```
src/
├── app/                                   # pages (App Router)
│   ├── page.tsx                           # tableau de bord
│   ├── matieres/[matiere]/[chapitre]/     # fiche de cours + vidéos
│   │   └── evaluation/                    # évaluation notée
│   ├── bulletin/  defi/  progression/
├── data/
│   ├── subjects/*.ts                      # UN fichier par matière
│   ├── index.ts                           # registre des matières
│   ├── helpers.ts                         # qcm(), vf(), court(), ordre(), embed(), search()
│   └── verified-videos.ts                 # liste blanche des vidéos intégrées
├── lib/                                   # logique pure (testée)
│   ├── grading.ts  normalize.ts  memory.ts  # correction
│   ├── stats.ts  appreciation.ts          # moyennes, mentions, bulletin
│   ├── levels.ts  daily.ts  dates.ts      # XP, badges, défi du jour, séries
│   └── storage.ts                         # localStorage (try/catch partout)
└── components/                            # interface
tests/                                     # Vitest
```

## Ajouter une matière

1. Crée `src/data/subjects/ma-matiere.ts` sur le modèle d'un fichier existant (`slug`, `coefficient`, `color`, `chapters`…).
2. Ajoute-la au tableau `SUBJECTS` dans `src/data/index.ts`.
3. Ajoute son coefficient dans `tests/evaluations.test.ts` (tableau `COEFS`), puis lance `npm test`.

Les pages, le bulletin, le défi du jour et les badges la prennent en compte automatiquement.

## Les évaluations

| Type | Fonctionnement |
|---|---|
| Quiz (10 questions) | QCM, vrai/faux, réponse courte (casse et accents ignorés, sauf `courtExact`), remise dans l'ordre. 2 points par bonne réponse. |
| Mémoire | 10 éléments tirés au hasard, affichés 30 secondes, puis à réécrire (dans l'ordre ou non selon le chapitre). |
| Créativité | Un défi « Et si… » à rédiger, puis une grille d'auto-évaluation de 10 critères notés 0, 1 ou 2. |

On peut refaire une évaluation autant de fois qu'on veut : la **meilleure note** compte dans les moyennes et tout l'historique est conservé.

## Vidéos

Les vidéos intégrées (`youtube-nocookie.com`) ne viennent que de `verified-videos.ts` : chaque identifiant provient d'un vrai résultat de recherche (Yvan Monka, Nota Bene, Les Bons Profs, Quelle Histoire). Quand l'identifiant exact n'est pas garanti, le chapitre affiche un **lien de recherche YouTube** sur la chaîne visée (Dr Nozman, e-penser, C'est une autre histoire…). Un test fait échouer le build si une vidéo intégrée n'est pas dans la liste blanche.

## Tests

- `tests/evaluations.test.ts` : chaque évaluation a 10 questions bien formées, la bonne réponse donne 20/20, une mauvaise donne 0/20, chaque variante de réponse courte est acceptée.
- `tests/answers.test.ts` : les réponses chiffrées (maths, physique, logique) sont **recalculées** indépendamment et comparées au contenu.
- `tests/stats.test.ts` : moyennes pondérées, mentions, appréciations, séries de jours, niveaux, badges, défi du jour.
