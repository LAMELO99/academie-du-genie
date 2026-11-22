"use client";

import { useState } from "react";
import { formatNote } from "@/lib/appreciation";

interface Point {
  date: string;
  value: number;
}

const W = 640;
const H = 240;
const PAD = { l: 34, r: 14, t: 14, b: 28 };

function fmt(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  } catch {
    return iso.slice(0, 10);
  }
}

/**
 * Évolution de la moyenne générale (une seule série) :
 * ligne de 2px, repères de 8px, grille discrète, info-bulle au survol / au toucher, vue tableau.
 */
export function ProgressChart({ points }: { points: Point[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const [showTable, setShowTable] = useState(false);

  if (points.length === 0) {
    return <p className="muted text-sm">Passe une première évaluation pour voir ta courbe de progression.</p>;
  }

  const iw = W - PAD.l - PAD.r;
  const ih = H - PAD.t - PAD.b;
  const x = (i: number) => PAD.l + (points.length === 1 ? iw / 2 : (i / (points.length - 1)) * iw);
  const y = (v: number) => PAD.t + ih - (v / 20) * ih;
  const path = points.map((p, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(p.value).toFixed(1)}`).join(" ");
  const showMarkers = points.length <= 30;
  const h = hover !== null ? points[hover] : null;
  const labelIdx = points.length <= 6 ? points.map((_, i) => i) : [0, Math.floor((points.length - 1) / 2), points.length - 1];

  const onMove = (clientX: number, rect: DOMRect) => {
    const px = ((clientX - rect.left) / rect.width) * W;
    let best = 0;
    let bestD = Infinity;
    points.forEach((_, i) => {
      const d = Math.abs(x(i) - px);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    setHover(best);
  };

  return (
    <div>
      <div className="relative">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full touch-pan-y select-none"
          role="img"
          aria-label={`Évolution de la moyenne générale : de ${formatNote(points[0]!.value)} à ${formatNote(points[points.length - 1]!.value)} sur 20, en ${points.length} évaluations.`}
          onMouseMove={(e) => onMove(e.clientX, e.currentTarget.getBoundingClientRect())}
          onMouseLeave={() => setHover(null)}
          onTouchStart={(e) => e.touches[0] && onMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
          onTouchMove={(e) => e.touches[0] && onMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
        >
          {[0, 5, 10, 15, 20].map((v) => (
            <g key={v}>
              <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke="var(--border)" strokeWidth={1} strokeDasharray={v === 10 ? "4 4" : undefined} />
              <text x={PAD.l - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="var(--muted)">
                {v}
              </text>
            </g>
          ))}
          {labelIdx.map((i) => (
            <text key={i} x={x(i)} y={H - 8} textAnchor={i === 0 && points.length > 1 ? "start" : i === points.length - 1 && points.length > 1 ? "end" : "middle"} fontSize="11" fill="var(--muted)">
              {fmt(points[i]!.date)}
            </text>
          ))}
          {h && hover !== null && <line x1={x(hover)} x2={x(hover)} y1={PAD.t} y2={PAD.t + ih} stroke="var(--muted)" strokeWidth={1} opacity={0.5} />}
          <path d={path} fill="none" stroke="var(--accent)" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
          {points.map((p, i) =>
            showMarkers || i === hover || i === points.length - 1 ? (
              <circle key={i} cx={x(i)} cy={y(p.value)} r={i === hover ? 6 : 4} fill="var(--accent)" stroke="var(--surface)" strokeWidth={2} />
            ) : null,
          )}
          <text x={x(points.length - 1)} y={y(points[points.length - 1]!.value) - 10} textAnchor={points.length > 1 ? "end" : "middle"} fontSize="12" fontWeight="600" fill="var(--text)">
            {formatNote(points[points.length - 1]!.value)}
          </text>
        </svg>
        {h && hover !== null && (
          <div
            className="pointer-events-none absolute top-0 rounded-lg border border-app px-3 py-2 text-xs shadow-lg"
            style={{
              background: "var(--surface)",
              left: `${(x(hover) / W) * 100}%`,
              transform: `translateX(${x(hover) > W / 2 ? "calc(-100% - 10px)" : "10px"})`,
            }}
          >
            <p className="muted">{fmt(h.date)} · évaluation n° {hover + 1}</p>
            <p className="font-semibold">Moyenne générale : {formatNote(h.value)} / 20</p>
          </div>
        )}
      </div>
      <button type="button" className="muted mt-2 text-xs underline underline-offset-2" onClick={() => setShowTable((v) => !v)} aria-expanded={showTable}>
        {showTable ? "Masquer le tableau" : "Afficher les données en tableau"}
      </button>
      {showTable && (
        <table className="mt-2 w-full text-sm">
          <thead>
            <tr className="muted text-left">
              <th className="py-1 font-medium">N°</th>
              <th className="py-1 font-medium">Date</th>
              <th className="py-1 text-right font-medium">Moyenne générale</th>
            </tr>
          </thead>
          <tbody>
            {points.map((p, i) => (
              <tr key={i} className="border-t border-app">
                <td className="py-1">{i + 1}</td>
                <td className="py-1">{fmt(p.date)}</td>
                <td className="py-1 text-right tabular-nums">{formatNote(p.value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
