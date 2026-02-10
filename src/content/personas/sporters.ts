import { PersonaPageContent } from "@/components/templates";
import { ROUTES } from "@/lib/constants";

export const sportersContent: PersonaPageContent = {
  // Hero
  title: "Sporters",
  subtitle:
    "Presteer beter met een gladde, verzorgde huid. Laserontharing voor wielrenners, triatleten en sportliefhebbers.",

  // Problem statement
  intro:
    "Als sporter weet je dat elk detail telt. Of je nu een wielrenner bent die aerodynamica optimaliseert, een zwemmer die weerstand vermindert, of gewoon van sport houdt en schone, hygiënische huid belangrijk vindt - permanente ontharing biedt praktische voordelen die verder gaan dan esthetiek.",

  painPoints: [
    {
      title: "Tijdrovend scheren",
      description:
        "Regelmatig scheren kost tijd en geeft irritatie, stoppels en ingegroeide haren.",
      icon: "⏱️",
    },
    {
      title: "Hygiëne & verzorging",
      description:
        "Gladde huid is makkelijker schoon te houden en verzorgen van schaafwonden.",
      icon: "🧼",
    },
    {
      title: "Prestatievoordeel",
      description:
        "Minder weerstand in water, betere tape-adhesie, snellere massage.",
      icon: "🏆",
    },
    {
      title: "Professionele uitstraling",
      description:
        "Een verzorgd lichaam hoort bij een professionele sportmentaliteit.",
      icon: "💪",
    },
  ],

  // Recommended treatments
  recommendedTreatments: [
    {
      title: "Laserontharing",
      description:
        "Permanente ontharing met diode laser. Populaire zones: benen, armen, borst, rug. Veilig voor alle huidtypes.",
      href: ROUTES.LASER,
      tag: "Meest gekozen",
      duration: "15-60 min per zone",
    },
  ],

  // Testimonial
  testimonial: {
    quote:
      "Als triatleet schoor ik mijn hele lichaam - dat kostte uren per week. Nu na de laserontharing bespaar ik die tijd en heb ik geen last meer van irritatie. Absoluut een game-changer voor mijn trainingsroutine.",
    author: "Thomas",
    role: "Triatleet",
    treatment: "Laserontharing benen & borst",
    rating: 5,
  },

  // Schema
  schemaData: {
    name: "Laserontharing voor Sporters",
    description:
      "Permanente laserontharing voor wielrenners, triatleten en sporters. Praktisch, hygiënisch en prestatieverhogend.",
    url: `https://www.instituutleanne.be${ROUTES.SPORTERS}`,
  },
};
