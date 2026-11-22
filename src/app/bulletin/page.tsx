import type { Metadata } from "next";
import { SUBJECT_META } from "@/data";
import { Bulletin } from "@/components/pages/Bulletin";

export const metadata: Metadata = { title: "Bulletin" };

export default function BulletinPage() {
  return <Bulletin subjects={SUBJECT_META} />;
}
