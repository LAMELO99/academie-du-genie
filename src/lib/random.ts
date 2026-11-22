/** Générateur pseudo-aléatoire déterministe (mulberry32). */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function shuffle<T>(arr: readonly T[], rand: () => number = Math.random): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j] as T, out[i] as T];
  }
  return out;
}

/** Mélange en garantissant (si possible) un ordre différent de l'original. */
export function shuffleDifferent<T>(arr: readonly T[], rand: () => number = Math.random): T[] {
  if (arr.length < 2) return [...arr];
  for (let k = 0; k < 10; k++) {
    const s = shuffle(arr, rand);
    if (s.some((v, i) => v !== arr[i])) return s;
  }
  return [...arr].reverse();
}
