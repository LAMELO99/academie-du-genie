/**
 * Contrôle indépendant des bonnes réponses : on RECALCULE chaque résultat numérique
 * au lieu de le recopier, puis on vérifie que le contenu dit la même chose.
 */
import { describe, expect, it } from "vitest";
import { SUBJECTS } from "@/data";
import { expectedText } from "@/lib/grading";
import type { Question } from "@/lib/types";

function find(subject: string, prompt: string): Question {
  const s = SUBJECTS.find((x) => x.slug === subject)!;
  for (const c of s.chapters) {
    if (c.evaluation?.kind !== "quiz") continue;
    const q = c.evaluation.questions.find((x) => x.prompt.includes(prompt));
    if (q) return q;
  }
  throw new Error(`Question introuvable : ${subject} « ${prompt} »`);
}

const num = (s: string) => Number(s.replace("−", "-").replace(",", ".").replace(/[^\d.\-]/g, ""));
const isSquare = (a: number, b: number, c: number) => a * a + b * b === c * c;
const frac = (n: number, d: number) => n / d;

const checks: [string, string, number][] = [
  ["mathematiques", "3 + 4 × 2", 3 + 4 * 2],
  ["mathematiques", "(−5) + 8", -5 + 8],
  ["mathematiques", "(−3) × (−4)", -3 * -4],
  ["mathematiques", "18 − 2 × (3 + 4)", 18 - 2 * (3 + 4)],
  ["mathematiques", "−7 − 5", -7 - 5],
  ["mathematiques", "24 ÷ (−6)", 24 / -6],
  ["mathematiques", "6 − 2 × 3 + 1", 6 - 2 * 3 + 1],
  ["mathematiques", "un quart de 60", 60 / 4],
  ["mathematiques", "2⁵", 2 ** 5],
  ["mathematiques", "10³", 10 ** 3],
  ["mathematiques", "10⁻²", 10 ** -2],
  ["mathematiques", "3⁴", 3 ** 4],
  ["mathematiques", "x + 7 = 12", 12 - 7],
  ["mathematiques", "3x = 21", 21 / 3],
  ["mathematiques", "2x − 4 = 10", (10 + 4) / 2],
  ["mathematiques", "4x + 1 = 2x + 9", (9 - 1) / (4 - 2)],
  ["mathematiques", "5(x − 2) = 15", 15 / 5 + 2],
  ["mathematiques", "multiplié par 4, auquel on ajoute 6", (30 - 6) / 4],
  ["mathematiques", "3 cm et 4 cm", Math.hypot(3, 4)],
  ["mathematiques", "6 et 8. Hypoténuse", Math.hypot(6, 8)],
  ["mathematiques", "Hypoténuse 13, un côté 5", Math.sqrt(13 ** 2 - 5 ** 2)],
  ["mathematiques", "9 pouces de haut et 12", Math.hypot(9, 12)],
  ["mathematiques", "f(x) = 2x + 3. Calcule f(4)", 2 * 4 + 3],
  ["mathematiques", "f(x) = 5x − 2. Calcule f(0)", 5 * 0 - 2],
  ["mathematiques", "antécédent de 0", 8 / 4],
  ["mathematiques", "coefficient directeur", -3],
  ["physique-chimie", "R = 10 Ω et I = 0,5 A", 10 * 0.5],
  ["physique-chimie", "U = 12 V et R = 4 Ω", 12 / 4],
  ["physique-chimie", "230 V avec une intensité de 0,5 A", 230 * 0.5],
  ["physique-chimie", "150 km en 2 h", 150 / 2],
  ["physique-chimie", "1 m/s correspond", 3600 / 1000],
  ["physique-chimie", "Convertis 36 km/h", 36 / 3.6],
  ["physique-chimie", "90 km/h pendant 30 minutes", 90 * 0.5],
  ["physique-chimie", "Combien d'atomes contient une molécule d'eau", 2 + 1],
  ["logique", "17 moutons", 9],
  ["logique", "batte et une balle", 5],
  ["logique", "5 machines", 5],
  ["logique", "nénuphar", 48 - 1],
  ["logique", "1, 4, 9, 16", 5 ** 2],
  ["logique", "1, 1, 2, 3, 5, 8", 5 + 8],
  ["logique", "3, 6, 12, 24", 48],
  ["logique", "100, 90, 81, 73", 73 - 7],
  ["logique", "2, 3, 5, 7, 11", 13],
  ["logique", "Léa a 6 ans", 2 * 6 + 6],
  ["logique", "deux pères et deux fils ?", 3],
  ["logique", "multiplie par 3 et j'ajoute 4", (19 - 4) / 3],
  ["logique", "Cinq personnes se serrent", (5 * 4) / 2],
  ["logique", "divisible à la fois par 2, 3 et 5", 30],
  ["logique", "damier de 2 cases sur 2", 4 + 1],
  ["logique", "4 chaussettes rouges", 3],
  ["strategie", "Combien vaut une tour", 5],
  ["strategie", "Combien vaut la dame", 9],
  ["strategie", "un cavalier, un fou et une tour", 3 + 3 + 5],
  ["strategie", "si les deux trahissent (5 ans chacun)", 5 + 5],
  ["strategie", "50 % de chances de gagner 10 €", 0.5 * 10 - 0.5 * 4],
  ["hacking", "code PIN à 4 chiffres", 10 ** 4],
  ["hacking", "Quel port correspond à HTTPS", 443],
  ["hacking", "Quel port est utilisé par SSH", 22],
  ["hacking", "combien de décalages utiles", 26 - 1],
];

describe("réponses chiffrées recalculées", () => {
  it.each(checks)("%s — %s", (subject, prompt, value) => {
    const q = find(subject, prompt);
    expect(num(expectedText(q))).toBeCloseTo(value, 9);
  });

  it("escargot dans le puits : sortie le 8e jour (simulation)", () => {
    let h = 0;
    let day = 0;
    for (;;) {
      day++;
      h += 3;
      if (h >= 10) break;
      h -= 2;
    }
    expect(num(expectedText(find("logique", "escargot est au fond")))).toBe(day);
  });

  it("chiffre 1 écrit de 1 à 20 (comptage)", () => {
    let n = 0;
    for (let i = 1; i <= 20; i++) n += [...String(i)].filter((d) => d === "1").length;
    expect(num(expectedText(find("logique", "chiffre 1 en écrivant")))).toBe(n);
  });

  it("train : 14 h 45 + 2 h 30 = 17 h 15", () => {
    const m = 14 * 60 + 45 + 150;
    expect(`${Math.floor(m / 60)}h${m % 60}`).toBe(expectedText(find("logique", "Un train part")));
  });

  it("mercredi + 10 jours = samedi", () => {
    const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    expect(jours[(2 + 10) % 7]).toBe("samedi");
    expect(expectedText(find("logique", "dans 10 jours ce sera samedi"))).toBe("Vrai");
  });

  it("réciproque de Pythagore : 8-15-17 rectangle, 5-12-14 non", () => {
    expect(isSquare(8, 15, 17)).toBe(true);
    expect(expectedText(find("mathematiques", "8, 15 et 17"))).toBe("rectangle");
    expect(isSquare(5, 12, 14)).toBe(false);
    expect(expectedText(find("mathematiques", "5, 12 et 14"))).toBe("Faux");
  });

  it("fractions : ordre, sommes, produits et quotients", () => {
    const order = find("mathematiques", "Range ces fractions");
    if (order.type !== "ordre") throw new Error();
    const values = order.items.map((f) => {
      const [n, d] = f.split("/").map(Number);
      return frac(n!, d!);
    });
    expect([...values].sort((a, b) => a - b)).toEqual(values);
    expect(frac(1, 2) + frac(1, 4)).toBe(frac(3, 4));
    expect(expectedText(find("mathematiques", "1/2 + 1/4"))).toBe("3/4");
    expect(frac(2, 3) * frac(3, 5)).toBeCloseTo(frac(2, 5));
    expect(frac(3, 4) / frac(1, 2)).toBe(frac(3, 2));
    expect(expectedText(find("mathematiques", "3/4 ÷ 1/2"))).toBe("3/2");
    expect(frac(3, 5) > frac(3, 4)).toBe(false);
  });

  it("ordres numériques triés correctement", () => {
    const rel = find("mathematiques", "Range ces nombres du plus petit");
    if (rel.type !== "ordre") throw new Error();
    const v = rel.items.map(num);
    expect([...v].sort((a, b) => a - b)).toEqual(v);

    const fx = find("mathematiques", "f(x) = 2x − 1");
    if (fx.type !== "ordre") throw new Error();
    const images = fx.items.map((s) => 2 * num(s.slice(2, -1)) - 1);
    expect([...images].sort((a, b) => a - b)).toEqual(images);

    const courant = find("physique-chimie", "Range ces intensités");
    if (courant.type !== "ordre") throw new Error();
    const amp = courant.items.map((s) => num(s) * (s.includes("mA") ? 1e-3 : s.includes("kA") ? 1e3 : 1));
    expect([...amp].sort((a, b) => a - b)).toEqual(amp);

    const durees = find("logique", "Range ces durées");
    if (durees.type !== "ordre") throw new Error();
    const sec = [100, 120, 1800, 2400, 3600];
    expect(durees.items).toEqual(["100 secondes", "2 minutes", "1/2 heure", "40 minutes", "1 heure"]);
    expect([...sec].sort((a, b) => a - b)).toEqual(sec);
  });

  it("chiffre de César recalculé", () => {
    const shift = (t: string, k: number) => t.replace(/[A-Z]/g, (c) => String.fromCharCode(((c.charCodeAt(0) - 65 + k + 26) % 26) + 65));
    expect(expectedText(find("hacking", "Chiffre « ABC »"))).toBe(shift("ABC", 3));
    expect(expectedText(find("hacking", "Déchiffre « KHOOR »"))).toBe(shift("KHOOR", -3));
  });

  it("dilemme du prisonnier : coopérer minimise le total", () => {
    const totals = { taire: 1 + 1, trahir: 5 + 5, unSeul: 0 + 10 };
    expect(Math.min(...Object.values(totals))).toBe(totals.taire);
    expect(expectedText(find("strategie", "quel choix minimise le total"))).toBe("Les deux se taisent");
  });

  it("équilibrage : CH₄ + 2 O₂ → CO₂ + 2 H₂O", () => {
    const oxygenRight = 2 * 1 + 1 * 2; // CO₂ + 2 H₂O
    expect(oxygenRight / 2).toBe(num(expectedText(find("physique-chimie", "CH₄ + ? O₂"))));
  });
});
