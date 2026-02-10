import { PersonaPageContent } from "@/components/templates";
import { ROUTES } from "@/lib/constants";

export const menopauzeContent: PersonaPageContent = {
  // Hero
  title: "Menopauze & Huid",
  subtitle:
    "Ondersteun je huid tijdens de overgang. Gerichte behandelingen voor de unieke uitdagingen van deze levensfase.",

  // Problem statement
  intro:
    "De overgang brengt veranderingen met zich mee waar je huid direct op reageert. Dalende oestrogeen niveaus zorgen voor minder collageen, droogheid en verlies van stevigheid. Dit is geen falen van je huid - het is biologie. En er is veel wat we eraan kunnen doen.",

  painPoints: [
    {
      title: "Verlies van stevigheid",
      description:
        "Minder collageen productie zorgt voor een slappere huid en verdieping van lijntjes.",
      icon: "📉",
    },
    {
      title: "Droogheid & gevoeligheid",
      description:
        "Je huid houdt minder vocht vast en kan gevoeliger reageren op producten.",
      icon: "💧",
    },
    {
      title: "Pigmentveranderingen",
      description:
        "Hormonale schommelingen kunnen leiden tot melasma of ouderdomsvlekken.",
      icon: "🔵",
    },
    {
      title: "Veranderende lichaamsvorm",
      description:
        "Vetverdeling verandert, huid verliest elasticiteit op lichaam en gezicht.",
      icon: "🔄",
    },
  ],

  // Recommended treatments
  recommendedTreatments: [
    {
      title: "Environ - Huidverjonging",
      description:
        "Vitamine A is wetenschappelijk bewezen effectief tegen veroudering. Stimuleert collageen en verbetert huidtextuur.",
      href: ROUTES.ENVIRON,
      tag: "Aanbevolen",
      duration: "60-90 min",
    },
    {
      title: "iCoone - Huidversteviging",
      description:
        "Verstevigt zowel gezicht als lichaam. Stimuleert collageen productie en verbetert huidkwaliteit van binnenuit.",
      href: ROUTES.ICOONE,
      duration: "45-60 min",
    },
    {
      title: "Me-Line - Pigmentbehandeling",
      description:
        "Effectieve behandeling van melasma en hormonale pigmentatie die vaak ontstaat tijdens de overgang.",
      href: ROUTES.PIGMENT,
      duration: "30 min + thuisprotocol",
    },
  ],

  // Testimonial
  testimonial: {
    quote:
      "Ik dacht dat droge, slappe huid gewoon bij mijn leeftijd hoorde. Leanne liet me zien dat dit niet zo hoeft te zijn. De Environ behandelingen hebben mijn huidkwaliteit compleet veranderd. Ik krijg regelmatig complimenten!",
    author: "Petra",
    role: "55 jaar",
    treatment: "Environ Essential Youth Reset",
    rating: 5,
  },

  // Schema
  schemaData: {
    name: "Huidverzorging tijdens Menopauze",
    description:
      "Gerichte huidbehandelingen voor vrouwen in de overgang. Environ en iCoone bij Instituut Leanne.",
    url: `https://www.instituutleanne.be${ROUTES.MENOPAUZE}`,
  },
};
