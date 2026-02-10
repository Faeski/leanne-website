import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates";
import { laserContent } from "@/content";

export const metadata: Metadata = {
  title: "Laserontharing | Instituut Leanne",
  description:
    "Permanente laserontharing met diode laser. Veilig voor alle huidtypes. Gecertificeerd laser specialist in Lanaken, regio Maastricht.",
};

export default function LaserPage() {
  return <ServicePageTemplate content={laserContent} />;
}
