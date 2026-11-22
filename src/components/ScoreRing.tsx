import { formatNote } from "@/lib/appreciation";

/** Anneau de score sur 20. */
export function ScoreRing({ score, size = 132, color }: { score: number | null; size?: number; color?: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const ratio = score === null ? 0 : Math.max(0, Math.min(1, score / 20));
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={score === null ? "Pas encore de note" : `${formatNote(score)} sur 20`}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="var(--surface-2)" strokeWidth="9" />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke={color ?? "var(--c, var(--accent))"}
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray={`${c * ratio} ${c}`}
        transform="rotate(-90 50 50)"
        style={{ transition: "stroke-dasharray 0.8s ease" }}
      />
      <text x="50" y="49" textAnchor="middle" fontSize="22" fontWeight="700" fill="var(--text)">
        {formatNote(score)}
      </text>
      <text x="50" y="65" textAnchor="middle" fontSize="10" fill="var(--muted)">
        / 20
      </text>
    </svg>
  );
}
