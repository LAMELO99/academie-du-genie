/** Appréciation façon bulletin scolaire. */
export function appreciation(note: number): string {
  if (note >= 18) return "Excellent travail, félicitations !";
  if (note >= 16) return "Très bon travail, continue ainsi.";
  if (note >= 14) return "Bon travail, de solides acquis.";
  if (note >= 12) return "Assez bien, des progrès sont possibles.";
  if (note >= 10) return "Passable : peut mieux faire.";
  if (note >= 8) return "Peut mieux faire, revois le cours.";
  if (note >= 5) return "Insuffisant : il faut reprendre les bases.";
  return "Très insuffisant : relis la fiche et regarde les vidéos.";
}

export function mention(moyenne: number | null): string | null {
  if (moyenne === null) return null;
  if (moyenne >= 16) return "Très bien";
  if (moyenne >= 14) return "Bien";
  if (moyenne >= 12) return "Assez bien";
  return null;
}

export function noteColor(note: number): string {
  if (note >= 16) return "text-emerald-600 dark:text-emerald-400";
  if (note >= 12) return "text-sky-600 dark:text-sky-400";
  if (note >= 10) return "text-amber-600 dark:text-amber-400";
  return "text-rose-600 dark:text-rose-400";
}

export function formatNote(n: number | null): string {
  if (n === null || Number.isNaN(n)) return "–";
  return n.toFixed(n % 1 === 0 ? 0 : 1).replace(".", ",");
}
