import type { Metadata } from "next";
import { Quiz } from "@/components/quiz";

export const metadata: Metadata = {
  title: "Ontdek je Skin Code - Persoonlijk Huidadvies",
  description:
    "Beantwoord 3 korte vragen en ontvang je persoonlijke huidadvies met behandelaanbeveling. Gratis Huid Advies Paspoort als PDF.",
  openGraph: {
    title: "Ontdek je Skin Code - Persoonlijk Huidadvies | Instituut Leanne",
    description:
      "Beantwoord 3 korte vragen en ontvang je persoonlijke huidadvies met behandelaanbeveling.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/**
 * Skin Quiz Page
 * The "Skin Code" diagnostic engine for lead generation
 */
export default function SkinQuizPage() {
  return (
    <div className="w-full max-w-2xl">
      <Quiz />
    </div>
  );
}
