import { SUBJECT_META } from "@/data";
import { Dashboard } from "@/components/pages/Dashboard";

export default function HomePage() {
  return <Dashboard subjects={SUBJECT_META} />;
}
