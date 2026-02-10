import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { pigmentContent } from "@/content";

export const metadata: Metadata = {
  title: "Me-Line Pigmentbehandeling | Instituut Leanne",
  description:
    "Exclusieve Me-Line behandeling voor melasma en pigmentvlekken. Enige gecertificeerde aanbieder in regio Maastricht. Instituut Leanne Lanaken.",
};

export default function PigmentPage() {
  return <ServicePageTemplate content={pigmentContent} />;
}
