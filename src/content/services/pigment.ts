import { ServicePageContent } from "@/components/templates";
import { ROUTES } from "@/lib/constants";

export const pigmentContent: ServicePageContent = {
  // AEO - 40-60 word direct answer for AI search
  aeoAnswer:
    "Me-Line is een medische peeling speciaal ontwikkeld voor melasma en hardnekkige pigmentvlekken. Instituut Leanne in Lanaken is de enige gecertificeerde aanbieder in de regio Maastricht. De behandeling bestaat uit professionele peelings gecombineerd met een thuiszorgprotocol voor blijvende resultaten.",
  aeoCitation: "Instituut Leanne - Exclusief Me-Line Specialist",

  // Hero
  title: "Me-Line - Pigmentbehandeling",
  subtitle:
    "De enige gecertificeerde Me-Line behandeling in de regio Maastricht. Effectief tegen melasma en hardnekkige pigmentvlekken.",

  // Process Timeline
  processSteps: [
    {
      phase: "voor",
      title: "Uitgebreide Intake",
      description:
        "We analyseren je pigmentatie, bespreken je medische geschiedenis en stellen vast of Me-Line de juiste keuze is voor jouw situatie.",
      duration: "45 minuten",
    },
    {
      phase: "voor",
      title: "Voorbereiding Thuis",
      description:
        "Je start 2 weken voor de eerste behandeling met het Me-Line thuiszorgprotocol om je huid optimaal voor te bereiden.",
      duration: "2 weken",
    },
    {
      phase: "tijdens",
      title: "Me-Line Peeling",
      description:
        "De professionele peeling wordt zorgvuldig aangebracht. Je ervaart een lichte tinteling. Na 4-6 uur wordt het masker thuis verwijderd.",
      duration: "30 minuten",
    },
    {
      phase: "na",
      title: "Herstel & Vervolgbehandelingen",
      description:
        "Na 7-10 dagen vervelling is je huid egaler. Het volledige protocol bestaat uit 4-6 sessies met 3-4 weken tussentijd.",
    },
  ],

  // Before/After - empty for now (images to be provided)
  beforeAfterImages: [],

  // FAQ
  faqs: [
    {
      question: "Wat is het verschil tussen Me-Line en andere peelings?",
      answer:
        "Me-Line is specifiek ontwikkeld voor melasma en hormonale pigmentatie, waar reguliere peelings vaak niet effectief zijn. Het systeem combineert professionele behandelingen met een strikt thuiszorgprotocol voor optimale en blijvende resultaten.",
    },
    {
      question: "Is Me-Line geschikt voor alle huidtypes?",
      answer:
        "Me-Line is geschikt voor alle Fitzpatrick huidtypes (I-VI). Tijdens de intake beoordelen we of je huid geschikt is en passen we het protocol aan op jouw specifieke situatie.",
    },
    {
      question: "Hoelang duurt het voordat ik resultaat zie?",
      answer:
        "De eerste verbetering zie je vaak al na de eerste behandeling. Voor optimaal resultaat is een volledig traject van 4-6 behandelingen nodig, met zichtbaar resultaat na 2-3 maanden.",
    },
    {
      question: "Wat zijn de bijwerkingen van Me-Line?",
      answer:
        "Na de behandeling treedt gecontroleerde vervelling op (5-7 dagen). Je huid kan tijdelijk rood en gevoelig zijn. Strikte zonbescherming is essentieel tijdens het hele traject.",
    },
    {
      question: "Waarom is Instituut Leanne de enige aanbieder in de regio?",
      answer:
        "Me-Line vereist een uitgebreide certificering en strikte protocollen. Wij zijn de enige praktijk in de regio Maastricht-Lanaken die aan alle eisen voldoet en het volledige traject kan begeleiden.",
    },
  ],

  // Schema data
  schemaData: {
    name: "Me-Line Pigmentbehandeling",
    description:
      "Exclusieve Me-Line behandeling voor melasma en pigmentvlekken. Enige gecertificeerde aanbieder in regio Maastricht.",
    url: `https://www.instituutleanne.be${ROUTES.PIGMENT}`,
    category: "Pigmentation Treatment",
    priceRange: "€€€",
    duration: "30 minuten + thuisprotocol",
  },
};
