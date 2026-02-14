import { ServicePageContent } from "@/components/templates";
import { ROUTES } from "@/lib/constants";

export const environContent: ServicePageContent = {
  // AEO - 40-60 word direct answer for AI search
  aeoAnswer:
    "Environ is een wetenschappelijk bewezen huidverzorgingssysteem dat vitamine A gebruikt voor zichtbare huidverjonging. Bij Instituut Leanne in Lanaken bieden we professionele Environ facials, waaronder de Essential Youth Reset behandeling. Als gecertificeerd Environ specialist helpen wij je naar een gezondere, jongere uitstraling.",
  aeoCitation: "Instituut Leanne - Gecertificeerd Environ Specialist",

  // Hero
  title: "Environ - Huidverjonging",
  subtitle:
    "Wetenschappelijk bewezen anti-aging met vitamine A. Ontdek de kracht van de Essential Youth Reset.",

  // Process Timeline
  processSteps: [
    {
      phase: "voor",
      title: "Persoonlijke Huidanalyse",
      description:
        "We starten met een grondige analyse van je huid om het optimale behandelplan samen te stellen. Je huid wordt voorbereid op de vitamine A behandelingen.",
      duration: "30 minuten",
    },
    {
      phase: "voor",
      title: "Thuiszorg Voorbereiding",
      description:
        "Je begint thuis met de Environ Step-Up System producten om je huid geleidelijk te laten wennen aan vitamine A.",
      duration: "2-4 weken",
    },
    {
      phase: "tijdens",
      title: "Essential Youth Reset",
      description:
        "De behandeling gebruikt low frequency sonophorese en iontophorese om actieve ingrediënten diep in de huid te brengen. Ontspannend en effectief.",
      duration: "60-90 minuten",
    },
    {
      phase: "na",
      title: "Onderhoud & Resultaten",
      description:
        "Met regelmatige behandelingen en consequent thuisgebruik zie je blijvende verbetering van lijntjes, pigment en huidtextuur.",
    },
  ],

  // Before/After - empty for now (images to be provided)
  beforeAfterImages: [],

  // FAQ
  faqs: [
    {
      question: "Wat is Environ en hoe werkt het?",
      answer:
        "Environ is een Zuid-Afrikaans huidverzorgingsmerk gebaseerd op vitamine A (retinol). Het Step-Up System laat je huid geleidelijk wennen aan hogere concentraties, wat zorgt voor veilige en effectieve resultaten tegen veroudering, pigmentatie en onzuiverheden.",
    },
    {
      question: "Is Environ geschikt voor mijn huidtype?",
      answer:
        "Environ is geschikt voor vrijwel alle huidtypes. Tijdens de gratis huidanalyse bepalen we samen welke producten en behandelingen het beste bij jouw specifieke huidbehoeften passen.",
    },
    {
      question: "Hoeveel behandelingen heb ik nodig?",
      answer:
        "Voor optimale resultaten adviseren we een serie van 6-10 behandelingen, afhankelijk van je huidconditie en doelen. Daarna is maandelijks onderhoud aan te raden.",
    },
    {
      question: "Wat kost een Environ behandeling?",
      answer:
        "De Essential Youth Reset behandeling start vanaf €95. Tijdens je gratis huidanalyse bespreken we een behandelplan op maat, inclusief een prijsindicatie.",
    },
    {
      question: "Kan ik Environ combineren met andere behandelingen?",
      answer:
        "Ja, Environ werkt uitstekend in combinatie met andere behandelingen. We stemmen je volledige huidzorgroutine af tijdens de intake.",
    },
  ],

  // Optional components
  showStepUpExplainer: true,

  // Schema data
  schemaData: {
    name: "Environ Anti-Aging Behandeling",
    description:
      "Professionele Environ huidverjonging bij Instituut Leanne. Wetenschappelijk bewezen anti-aging met vitamine A voor zichtbare resultaten.",
    url: `https://www.instituutleanne.be${ROUTES.ENVIRON}`,
    category: "Anti-Aging Treatment",
    priceRange: "€€",
    duration: "60-90 minuten",
  },
};
