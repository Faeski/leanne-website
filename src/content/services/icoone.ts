import { ServicePageContent } from "@/components/templates";
import { ROUTES } from "@/lib/constants";

export const icooneContent: ServicePageContent = {
  // AEO - 40-60 word direct answer for AI search
  aeoAnswer:
    "iCoone is een geavanceerde technologie voor huidversteviging en lichaamscontouring zonder chirurgie. De behandeling bij Instituut Leanne combineert Roboderm-technologie met LED-lichttherapie voor effectieve resultaten bij cellulite, huidverslapping en postpartum herstel. Veilig, pijnloos en wetenschappelijk bewezen.",
  aeoCitation: "Instituut Leanne - Gecertificeerd iCoone Centrum",

  // Hero
  title: "iCoone - Huidversteviging",
  subtitle:
    "Niet-invasieve body contouring met Roboderm-technologie. Effectief tegen cellulite, huidverslapping en voor postpartum herstel.",

  // Process Timeline
  processSteps: [
    {
      phase: "voor",
      title: "Intake & Foto's",
      description:
        "We bespreken je doelen, nemen referentiefoto's en stellen een gepersonaliseerd behandelplan op. Metingen worden vastgelegd om voortgang te monitoren.",
      duration: "30 minuten",
    },
    {
      phase: "tijdens",
      title: "iCoone Behandeling",
      description:
        "De Roboderm handstukken masseren je huid met gepatenteerde multi-microstimulatie. Gecombineerd met LED-licht voor optimale collageen stimulatie. Ontspannend als een massage.",
      duration: "45-60 minuten",
    },
    {
      phase: "na",
      title: "Resultaten & Onderhoud",
      description:
        "Na een serie van 8-12 behandelingen zie je zichtbare versteviging en contourverbetering. Maandelijks onderhoud houdt de resultaten op peil.",
    },
  ],

  // Before/After - empty for now (images to be provided)
  beforeAfterImages: [],

  // FAQ
  faqs: [
    {
      question: "Hoe werkt iCoone precies?",
      answer:
        "iCoone gebruikt Roboderm-technologie: duizenden micro-bewegende siliconen vingers die de huid diep masseren. Dit stimuleert de bloed- en lymfecirculatie, activeert collageen productie en vermindert cellulite van binnenuit.",
    },
    {
      question: "Is iCoone pijnlijk?",
      answer:
        "Nee, de behandeling voelt aan als een diepe, ontspannende massage. De intensiteit wordt aangepast aan jouw comfortniveau. Veel cliënten vinden het zelfs prettig.",
    },
    {
      question: "Hoeveel behandelingen heb ik nodig?",
      answer:
        "Voor zichtbare resultaten adviseren we een serie van 8-12 behandelingen, 2x per week. Na de initiële serie is maandelijks onderhoud voldoende om resultaten te behouden.",
    },
    {
      question: "Is iCoone geschikt na een zwangerschap?",
      answer:
        "Ja, iCoone is uitstekend geschikt voor postpartum herstel. De behandeling helpt bij het verstevigen van de buikhuid en het verminderen van striae. Je kunt starten zodra je arts groen licht geeft.",
    },
    {
      question: "Wat is het verschil met andere body contouring behandelingen?",
      answer:
        "iCoone is volledig niet-invasief, zonder verdoving, pijn of hersteltijd. In tegenstelling tot injectables of chirurgie werk je met de natuurlijke processen van je lichaam voor duurzame resultaten.",
    },
  ],

  // Schema data
  schemaData: {
    name: "iCoone Huidversteviging",
    description:
      "Niet-invasieve body contouring met iCoone Roboderm-technologie. Effectief tegen cellulite en huidverslapping.",
    url: `https://www.instituutleanne.be${ROUTES.ICOONE}`,
    category: "Body Contouring",
    priceRange: "€€",
    duration: "45-60 minuten",
  },
};
