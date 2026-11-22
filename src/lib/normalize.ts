/** Normalise une réponse libre : minuscules, sans accents, sans ponctuation superflue. */
export function normalize(input: string, keepAccents = false): string {
  const base = input.normalize("NFC").toLowerCase();
  return (keepAccents ? base : base.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/[−–—]/g, "-")
    .replace(/(\d),(\d)/g, "$1.$2")
    .replace(keepAccents ? /[^\p{L}0-9.'/\-+=²%^√ ]/gu : /[^a-z0-9.'/\-+=²%^√ ]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^(?:(?:le|la|les|un|une|des|the|an|el|los|las) |l')/, "")
    .trim();
}

export function matchesShort(given: string, accept: string[], keepAccents = false): boolean {
  const g = normalize(given, keepAccents);
  if (!g) return false;
  return accept.some((a) => {
    const n = normalize(a, keepAccents);
    if (n === g || n.replace(/ /g, "") === g.replace(/ /g, "")) return true;
    const gn = Number(g.replace(/ /g, ""));
    const an = Number(n.replace(/ /g, ""));
    return n !== "" && Number.isFinite(gn) && Number.isFinite(an) && Math.abs(gn - an) < 1e-9;
  });
}
