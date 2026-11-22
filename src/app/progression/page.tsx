import type { Metadata } from "next";
import { SUBJECT_META } from "@/data";
import { Progression } from "@/components/pages/Progression";

export const metadata: Metadata = { title: "Niveaux et badges" };

export default function ProgressionPage() {
  return <Progression subjects={SUBJECT_META} />;
}
