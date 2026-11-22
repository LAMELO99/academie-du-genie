import type { Metadata } from "next";
import { SUBJECTS } from "@/data";
import { dailyChallenge } from "@/lib/daily";
import { DailyChallenge } from "@/components/pages/DailyChallenge";

export const metadata: Metadata = { title: "Défi du jour" };

// Le défi change chaque jour (heure de Paris) : la page est calculée à la demande.
export const dynamic = "force-dynamic";

function parisDate(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

export default function DefiPage() {
  const date = parisDate();
  const items = dailyChallenge(SUBJECTS, date).map((i) => ({
    question: i.question,
    chapterSlug: i.chapterSlug,
    chapterTitle: i.chapterTitle,
    subject: { slug: i.subject.slug, shortName: i.subject.shortName, color: i.subject.color, emoji: i.subject.emoji },
  }));
  return <DailyChallenge date={date} items={items} />;
}
