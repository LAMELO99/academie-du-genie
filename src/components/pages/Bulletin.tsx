"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import type { SubjectMeta } from "@/lib/types";
import { useHydrated, useProgress } from "@/lib/storage";
import { bestScores, generalAverage, progressionSeries, strengthsAndWeaknesses, subjectReports } from "@/lib/stats";
import { appreciation, formatNote, mention, noteColor } from "@/lib/appreciation";
import { ProgressChart } from "../ProgressChart";

export function Bulletin({ subjects }: { subjects: SubjectMeta[] }) {
  const hydrated = useHydrated();
  const { attempts } = useProgress();
  const data = hydrated ? attempts : [];
  const best = bestScores(data);
  const reports = subjectReports(subjects, best);
  const avg = generalAverage(subjects, best);
  const m = mention(avg);
  const { strengths, weaknesses } = strengthsAndWeaknesses(reports);
  const series = progressionSeries(subjects, data);
  const today = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Bulletin de notes
          </h1>
          <p className="muted mt-1 text-sm">Académie du Génie · {hydrated ? `édité le ${today}` : ""}</p>
        </div>
        <button type="button" onClick={() => window.print()} className="btn btn-ghost text-sm print:hidden">
          🖨️ Imprimer
        </button>
      </header>

      <section className="card grid gap-4 p-5 sm:grid-cols-3">
        <div>
          <p className="muted text-sm">Moyenne générale</p>
          <p className={`text-4xl font-bold tabular-nums ${avg !== null ? noteColor(avg) : "muted"}`} data-testid="moyenne-generale">
            {avg !== null ? formatNote(avg) : "–"}
            <span className="muted text-lg font-medium"> / 20</span>
          </p>
          <p className="muted text-xs">pondérée par les coefficients</p>
        </div>
        <div>
          <p className="muted text-sm">Mention</p>
          <p className="text-2xl font-bold">{m ? `🏅 ${m}` : avg !== null ? "Aucune" : "–"}</p>
          <p className="muted text-xs">Très bien ≥ 16 · Bien ≥ 14 · Assez bien ≥ 12</p>
        </div>
        <div>
          <p className="muted text-sm">Appréciation générale</p>
          <p className="font-semibold">{avg !== null ? appreciation(avg) : "Passe tes premières évaluations !"}</p>
        </div>
      </section>

      <section className="card overflow-hidden">
        <div className="hidden grid-cols-[1fr_4rem_6rem_6rem_2fr] gap-3 border-b border-app px-5 py-3 text-xs font-semibold uppercase tracking-wide sm:grid">
          <span className="muted">Matière</span>
          <span className="muted text-center">Coef</span>
          <span className="muted text-center">Moyenne</span>
          <span className="muted text-center">Chapitres</span>
          <span className="muted">Appréciation</span>
        </div>
        <ul>
          {reports.map((r) => (
            <li
              key={r.subject.slug}
              className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 border-b border-app px-5 py-3 last:border-0 sm:grid-cols-[1fr_4rem_6rem_6rem_2fr] sm:items-center"
              style={{ "--c": r.subject.color } as CSSProperties}
            >
              <Link href={`/matieres/${r.subject.slug}`} className="flex items-center gap-2 font-semibold">
                <span className="subject-bg h-3 w-3 shrink-0 rounded-full" aria-hidden />
                {r.subject.name}
              </Link>
              <span className="muted text-right text-sm sm:text-center">
                <span className="sm:hidden">coef </span>
                {r.subject.coefficient}
              </span>
              <span className={`text-lg font-bold tabular-nums sm:text-center ${r.average !== null ? noteColor(r.average) : "muted"}`}>
                {r.subject.comingSoon ? "—" : r.average !== null ? formatNote(r.average) : "–"}
              </span>
              <span className="muted text-right text-sm sm:text-center">
                {r.subject.comingSoon ? "bientôt" : `${r.evaluated}/${r.total}`}
              </span>
              <span className="muted col-span-2 text-sm sm:col-span-1">
                {r.subject.comingSoon ? "Matière en préparation." : r.average !== null ? appreciation(r.average) : "Non évalué."}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card p-5">
          <h2 className="mb-2 font-semibold">💪 Points forts</h2>
          {strengths.length ? (
            <ul className="space-y-1 text-sm">
              {strengths.map((r) => (
                <li key={r.subject.slug}>
                  {r.subject.emoji} {r.subject.name} — <strong className={noteColor(r.average)}>{formatNote(r.average)}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted text-sm">Atteins 14/20 de moyenne dans une matière pour qu&apos;elle apparaisse ici.</p>
          )}
        </div>
        <div className="card p-5">
          <h2 className="mb-2 font-semibold">🎯 Matières à travailler</h2>
          {weaknesses.length ? (
            <ul className="space-y-1 text-sm">
              {weaknesses.map((r) => (
                <li key={r.subject.slug}>
                  <Link href={`/matieres/${r.subject.slug}`} className="underline-offset-2 hover:underline">
                    {r.subject.emoji} {r.subject.name}
                  </Link>{" "}
                  — <strong className={noteColor(r.average)}>{formatNote(r.average)}</strong>
                </li>
              ))}
            </ul>
          ) : (
            <p className="muted text-sm">Rien à signaler pour l&apos;instant. Continue comme ça !</p>
          )}
        </div>
      </section>

      <section className="card p-5">
        <h2 className="font-semibold">📈 Évolution de ta moyenne générale</h2>
        <p className="muted mb-3 text-xs">Recalculée après chaque évaluation (meilleure note de chaque chapitre). La ligne pointillée marque 10/20.</p>
        <ProgressChart points={series} />
      </section>
    </div>
  );
}
