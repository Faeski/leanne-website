import { PersonaPageContent } from "@/components/templates";
import { ROUTES } from "@/lib/constants";

export const gezondOuderWordenContent: PersonaPageContent = {
  // Hero
  title: "Gezond Ouder Worden",
  subtitle:
    "Verouder mooi met een gezonde, stralende huid. Wetenschappelijk onderbouwde aanpak voor duurzame resultaten.",

  // Problem statement
  intro:
    "Ouder worden is onvermijdelijk - maar hoe je huid veroudert, daar heb je wel invloed op. Het gaat niet om het uitwissen van lijntjes of het nastreven van een onrealistisch ideaal. Het gaat om gezonde huid die straalt, ongeacht je leeftijd. Met de juiste verzorging en behandelingen ondersteun je de natuurlijke processen van je huid.",

  painPoints: [
    {
      title: "Verlies van elasticiteit",
      description:
        "Collageen en elastine productie neemt af, waardoor de huid minder stevig aanvoelt.",
      icon: "📊",
    },
    {
      title: "Doffe, matte huid",
      description:
        "Celvernieuwing vertraagt, waardoor je huid minder glow heeft dan vroeger.",
      icon: "✨",
    },
    {
      title: "Fijne lijntjes & rimpels",
      description:
        "Expressie- en zonschade worden zichtbaarder naarmate de huid dunner wordt.",
      icon: "〰️",
    },
    {
      title: "Onregelmatige textuur",
      description:
        "Grotere poriën, droge plekjes en ongelijke huidtoon zijn veelvoorkomend.",
      icon: "🔍",
    },
  ],

  // Recommended treatments
  recommendedTreatments: [
    {
      title: "Environ - Huidverjonging",
      description:
        "Het bewezen Step-Up System met vitamine A stimuleert celvernieuwing en collageen. Gouden standaard in anti-aging.",
      href: ROUTES.ENVIRON,
      tag: "Wetenschappelijk bewezen",
      duration: "60-90 min",
    },
    {
      title: "iCoone - Huidversteviging",
      description:
        "Verstevigt zowel gezichts- als lichaamshuid. Stimuleert de natuurlijke collageen productie voor een liftend effect.",
      href: ROUTES.ICOONE,
      duration: "45-60 min",
    },
  ],

  // Testimonial
  testimonial: {
    quote:
      "Ik ben 62 en voelde me niet meer fijn in mijn huid. Geen botox of fillers voor mij - ik wilde een natuurlijke aanpak. Environ heeft mijn huidkwaliteit zo verbeterd dat vrienden vragen wat mijn geheim is. Gewoon goede verzorging!",
    author: "Ingrid",
    role: "62 jaar",
    treatment: "Environ behandelingen",
    rating: 5,
  },

  // Schema
  schemaData: {
    name: "Anti-Aging Huidbehandeling",
    description:
      "Wetenschappelijk onderbouwde anti-aging behandelingen voor gezonde huidveroudering. Environ specialist bij Instituut Leanne.",
    url: `https://www.instituutleanne.be${ROUTES.GEZOND_OUDER_WORDEN}`,
  },
};
