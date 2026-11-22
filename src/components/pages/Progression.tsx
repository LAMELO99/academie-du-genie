"use client";

import { useState } from "react";
import type { SubjectMeta } from "@/lib/types";
import { exportProgress, importProgress, resetProgress, useHydrated, useProgress } from "@/lib/storage";
import { computeBadges, computeXp, LEVELS, levelFor } from "@/lib/levels";
import { bestStreak, currentStreak } from "@/lib/dates";

export function Progression({ subjects }: { subjects: SubjectMeta[] }) {
  const hydrated = useHydrated();
  const progress = useProgress();
  const attempts = hydrated ? progress.attempts : [];
  const days = hydrated ? progress.activityDays : [];
  const xp = computeXp(attempts);
  const level = levelFor(xp);
  const badges = computeBadges(subjects, attempts, days);
  const [msg, setMsg] = useState<string | null>(null);

  const download = () => {
    const blob = new Blob([exportProgress()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "academie-du-genie-progression.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
        Niveaux et badges
      </h1>

      <section className="card space-y-4 p-5">
        <div className="flex items-center gap-4">
          <span className="text-6xl" aria-hidden>
            {level.current.emoji}
          </span>
          <div className="flex-1">
            <p className="muted text-sm">Ton niveau</p>
            <p className="text-2xl font-bold">{level.current.name}</p>
            <div className="mt-2 h-3 overflow-hidden rounded-full surface-2">
              <div className="h-full rounded-full" style={{ width: `${level.progress * 100}%`, background: "var(--accent)" }} />
            </div>
            <p className="muted mt-1 text-sm">
              {xp} XP{level.next ? ` · encore ${level.next.min - xp} XP pour devenir ${level.next.name}` : " · tu as atteint le sommet !"}
            </p>
          </div>
        </div>
        <ol className="grid grid-cols-5 gap-2 text-center text-xs">
          {LEVELS.map((l, i) => (
            <li key={l.name} className={`rounded-xl p-2 ${i <= level.index ? "surface-2" : "opacity-40"}`}>
              <span className="block text-2xl" aria-hidden>
                {l.emoji}
              </span>
              <span className="font-semibold">{l.name}</span>
              <span className="muted block">{l.min} XP</span>
            </li>
          ))}
        </ol>
        <p className="muted text-xs">
          Comment gagner de l&apos;XP : 10 XP par point de ta meilleure note dans chaque chapitre, 5 XP par évaluation passée, et 3 XP par point au défi du jour.
        </p>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Évaluations passées" value={attempts.length} />
        <Stat label="Jours travaillés" value={days.length} />
        <Stat label="Série actuelle" value={`${currentStreak(days)} 🔥`} />
        <Stat label="Meilleure série" value={bestStreak(days)} />
      </section>

      <section>
        <h2 className="mb-3 text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          Badges ({badges.filter((b) => b.earned).length}/{badges.length})
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {badges.map((b) => (
            <li key={b.id} className={`card p-4 ${b.earned ? "" : "opacity-45 grayscale"}`}>
              <span className="text-3xl" aria-hidden>
                {b.emoji}
              </span>
              <p className="mt-1 font-semibold">{b.name}</p>
              <p className="muted text-xs">{b.description}</p>
              <p className="mt-1 text-xs font-semibold">{b.earned ? "✓ Obtenu" : "À débloquer"}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card space-y-3 p-5">
        <h2 className="font-semibold">Mes données</h2>
        <p className="muted text-sm">
          Ta progression est enregistrée uniquement dans ce navigateur. Exporte-la pour la sauvegarder ou la transférer sur un autre appareil.
        </p>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-ghost text-sm" onClick={download}>
            ⬇️ Exporter
          </button>
          <label className="btn btn-ghost cursor-pointer text-sm">
            ⬆️ Importer
            <input
              type="file"
              accept="application/json"
              className="sr-only"
              onChange={async (e) => {
                const f = e.target.files?.[0];
                if (!f) return;
                setMsg(importProgress(await f.text()) ? "Progression importée !" : "Fichier invalide.");
                e.target.value = "";
              }}
            />
          </label>
          <button
            type="button"
            className="btn btn-ghost text-sm text-rose-600"
            onClick={() => {
              if (window.confirm("Effacer toutes tes notes et ta progression ? Cette action est définitive.")) {
                resetProgress();
                setMsg("Progression effacée.");
              }
            }}
          >
            🗑️ Tout effacer
          </button>
        </div>
        {msg && (
          <p className="text-sm" role="status">
            {msg}
          </p>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="card p-4">
      <p className="text-2xl font-bold tabular-nums">{value}</p>
      <p className="muted text-xs">{label}</p>
    </div>
  );
}
