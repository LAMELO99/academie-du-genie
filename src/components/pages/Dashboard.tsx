"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import type { SubjectMeta } from "@/lib/types";
import { useHydrated, useProgress } from "@/lib/storage";
import { bestScores, chapterKey, DEFI_SUBJECT, generalAverage, recommendedChapter, subjectAverage } from "@/lib/stats";
import { currentStreak, dayKey } from "@/lib/dates";
import { computeBadges, computeXp, levelFor } from "@/lib/levels";
import { formatNote, mention, noteColor } from "@/lib/appreciation";
import { ScoreRing } from "../ScoreRing";

export function Dashboard({ subjects }: { subjects: SubjectMeta[] }) {
  const hydrated = useHydrated();
  const { attempts, activityDays } = useProgress();
  const best = bestScores(attempts);
  const avg = generalAverage(subjects, best);
  const streak = currentStreak(activityDays);
  const xp = computeXp(attempts);
  const level = levelFor(xp);
  const reco = recommendedChapter(subjects, best);
  const today = dayKey();
  const defiToday = attempts.filter((a) => a.subject === DEFI_SUBJECT && a.key === `defi/${today}`);
  const defiBest = defiToday.length ? Math.max(...defiToday.map((a) => a.score)) : null;
  const earned = computeBadges(subjects, attempts, activityDays).filter((b) => b.earned);
  const m = mention(avg);
  const isNew = hydrated && attempts.length === 0;

  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-3xl font-bold sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          {isNew ? "Bienvenue à l'Académie !" : "Content de te revoir !"}
        </h1>
        <p className="muted mt-1">
          {isNew ? "Choisis une matière, lis la fiche, regarde les vidéos… puis passe l'évaluation." : "Chaque jour un peu, et le génie finit par apparaître."}
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="card flex items-center gap-4 p-5 sm:col-span-1">
          <ScoreRing score={hydrated ? avg : null} size={96} color="var(--accent)" />
          <div>
            <p className="muted text-sm">Moyenne générale</p>
            <p className="text-lg font-semibold">{hydrated && avg !== null ? `${formatNote(avg)} / 20` : "Pas encore de note"}</p>
            {m && <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Mention {m}</p>}
          </div>
        </div>
        <div className="card flex items-center gap-4 p-5">
          <span className="text-5xl" aria-hidden>
            🔥
          </span>
          <div>
            <p className="muted text-sm">Série en cours</p>
            <p className="text-2xl font-bold" data-testid="streak">
              {hydrated ? streak : 0} jour{streak > 1 ? "s" : ""}
            </p>
            <p className="muted text-xs">{activityDays.includes(today) ? "Bravo, tu as travaillé aujourd'hui !" : "Fais une évaluation aujourd'hui pour l'entretenir."}</p>
          </div>
        </div>
        <Link href="/progression" className="card flex items-center gap-4 p-5 transition hover:opacity-90">
          <span className="text-5xl" aria-hidden>
            {level.current.emoji}
          </span>
          <div className="min-w-0 flex-1">
            <p className="muted text-sm">Niveau</p>
            <p className="text-lg font-bold">{level.current.name}</p>
            <div className="mt-1 h-2 overflow-hidden rounded-full surface-2">
              <div className="h-full rounded-full" style={{ width: `${level.progress * 100}%`, background: "var(--accent)" }} />
            </div>
            <p className="muted mt-1 text-xs">
              {xp} XP{level.next ? ` · ${level.next.min - xp} XP avant ${level.next.name}` : " · niveau maximal !"}
            </p>
          </div>
        </Link>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {reco && (
          <Link
            href={`/matieres/${reco.subject.slug}/${reco.chapter.slug}`}
            className="card subject-tint block p-5 transition hover:opacity-90"
            style={{ "--c": reco.subject.color } as CSSProperties}
          >
            <p className="subject-text text-xs font-bold uppercase tracking-wide">Prochain chapitre conseillé</p>
            <p className="mt-1 text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
              {reco.subject.emoji} {reco.chapter.title}
            </p>
            <p className="muted mt-1 text-sm">
              {reco.subject.name} · {hydrated ? reco.reason : "Commence par ici !"}
            </p>
            <span className="btn btn-primary mt-4">Y aller →</span>
          </Link>
        )}
        <Link href="/defi" className="card block p-5 transition hover:opacity-90" style={{ "--c": "#f43f5e" } as CSSProperties}>
          <p className="subject-text text-xs font-bold uppercase tracking-wide">🎯 Défi du jour</p>
          <p className="mt-1 text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            10 questions, toutes matières mélangées
          </p>
          <p className="muted mt-1 text-sm">
            {hydrated && defiBest !== null ? `Déjà relevé aujourd'hui : ${formatNote(defiBest)}/20. Tu peux améliorer ton score !` : "Un nouveau défi chaque jour. Bonus d'XP à la clé !"}
          </p>
          <span className="btn btn-primary mt-4">{defiBest !== null ? "Rejouer" : "Relever le défi"} →</span>
        </Link>
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Mes matières
          </h2>
          <Link href="/bulletin" className="muted text-sm underline underline-offset-2">
            Voir le bulletin
          </Link>
        </div>
        <SubjectGrid subjects={subjects} />
      </section>

      {hydrated && earned.length > 0 && (
        <section className="card p-5">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="font-semibold">Mes badges ({earned.length})</h2>
            <Link href="/progression" className="muted text-sm underline underline-offset-2">
              Tous les badges
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {earned.map((b) => (
              <span key={b.id} className="rounded-full surface-2 px-3 py-1.5 text-sm" title={b.description}>
                {b.emoji} {b.name}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export function SubjectGrid({ subjects }: { subjects: SubjectMeta[] }) {
  const hydrated = useHydrated();
  const { attempts } = useProgress();
  const best = bestScores(attempts);
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {subjects.map((s) => {
        const avg = hydrated ? subjectAverage(s, best) : null;
        const evals = s.chapters.filter((c) => !c.locked && c.evaluation);
        const done = hydrated ? evals.filter((c) => best.has(chapterKey(s.slug, c.slug))).length : 0;
        return (
          <li key={s.slug} style={{ "--c": s.color } as CSSProperties}>
            <Link href={`/matieres/${s.slug}`} className="card subject-tint flex h-full flex-col gap-2 p-4 transition hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-2">
                <span className="text-3xl" aria-hidden>
                  {s.emoji}
                </span>
                <span className="rounded-full px-2 py-0.5 text-[11px] font-bold text-white subject-bg">coef {s.coefficient}</span>
              </div>
              <p className="font-semibold leading-tight">{s.shortName}</p>
              {s.comingSoon ? (
                <p className="muted text-xs">Bientôt disponible</p>
              ) : (
                <>
                  <div className="h-1.5 overflow-hidden rounded-full" style={{ background: "color-mix(in srgb, var(--c) 18%, transparent)" }}>
                    <div className="subject-bg h-full rounded-full" style={{ width: `${evals.length ? (done / evals.length) * 100 : 0}%` }} />
                  </div>
                  <p className="flex justify-between text-xs">
                    <span className="muted">
                      {done}/{evals.length} chapitres
                    </span>
                    <strong className={avg !== null ? noteColor(avg) : "muted"}>{avg !== null ? `${formatNote(avg)}/20` : "–"}</strong>
                  </p>
                </>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
