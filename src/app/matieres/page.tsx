import type { Metadata } from "next";
import { SUBJECT_META } from "@/data";
import { SubjectGrid } from "@/components/pages/Dashboard";

export const metadata: Metadata = { title: "Matières" };

export default function SubjectsPage() {
  const total = SUBJECT_META.reduce((n, s) => n + s.chapters.length, 0);
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
          Les matières
        </h1>
        <p className="muted mt-1">
          {SUBJECT_META.length} matières, {total} chapitres. Chaque chapitre : une fiche de cours, des vidéos et une évaluation sur 20.
        </p>
      </div>
      <SubjectGrid subjects={SUBJECT_META} />
    </div>
  );
}
