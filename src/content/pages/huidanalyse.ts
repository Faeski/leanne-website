import { FAQItem } from "@/components/content";
import { ROUTES } from "@/lib/constants";

export interface HuidanalyseContent {
  title: string;
  subtitle: string;
  intro: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: FAQItem[];
  schemaData: {
    name: string;
    description: string;
    url: string;
  };
}

export const huidanalyseContent: HuidanalyseContent = {
  title: "Gratis Huidanalyse",
  subtitle: "Jouw persoonlijke huidadvies begint hier. Ontdek wat jouw huid nodig heeft.",

  intro:
    "Elke huid is uniek en verdient een persoonlijke aanpak. Tijdens onze gratis huidanalyse nemen we de tijd om je huid grondig te analyseren en samen het beste plan te bepalen. Geen verplichtingen, wel eerlijk advies.",

  benefits: [
    {
      title: "Professionele Huidbeoordeling",
      description:
        "We analyseren je huid op hydratatie, pigmentatie, lijntjes en textuur met professionele hulpmiddelen.",
      icon: "🔍",
    },
    {
      title: "Persoonlijk Behandelplan",
      description:
        "Je ontvangt een op maat gemaakt plan met behandelingen en producten die passen bij jouw huid en budget.",
      icon: "📋",
    },
    {
      title: "Productsamples",
      description:
        "Ga naar huis met samples om producten uit te proberen voordat je beslist.",
      icon: "🎁",
    },
    {
      title: "Eerlijk Advies",
      description:
        "We zijn eerlijk over wat wel en niet werkt. Soms is minder meer.",
      icon: "💬",
    },
  ],

  process: [
    {
      step: 1,
      title: "Intake Gesprek",
      description:
        "We bespreken je huidgeschiedenis, leefstijl, zorgen en wensen. Wat wil je bereiken?",
    },
    {
      step: 2,
      title: "Huidanalyse",
      description:
        "Met professionele lampen en eventueel een huidscanner analyseren we de conditie van je huid.",
    },
    {
      step: 3,
      title: "Advies & Plan",
      description:
        "Je ontvangt een persoonlijk advies met behandelopties en een thuiszorgroutine op maat.",
    },
    {
      step: 4,
      title: "Samples & Vervolg",
      description:
        "Neem samples mee en plan eventueel een eerste behandeling. Zonder druk of verplichting.",
    },
  ],

  faqs: [
    {
      question: "Hoe lang duurt de gratis huidanalyse?",
      answer:
        "Reken op 30-45 minuten. We nemen de tijd voor een grondige analyse en beantwoorden al je vragen.",
    },
    {
      question: "Moet ik me voorbereiden?",
      answer:
        "Kom het liefst met een schoon gezicht, zonder make-up. Zo kunnen we je huid het beste beoordelen. Vergeten? Geen probleem, we reinigen je huid eerst.",
    },
    {
      question: "Zit ik ergens aan vast?",
      answer:
        "Nee, de huidanalyse is vrijblijvend. Je ontvangt eerlijk advies en beslist zelf of en wanneer je verder wilt.",
    },
    {
      question: "Krijg ik een geschreven advies mee?",
      answer:
        "Ja, je ontvangt een samenvatting van de analyse en het behandelplan per e-mail na je bezoek.",
    },
  ],

  schemaData: {
    name: "Gratis Huidanalyse",
    description:
      "Vrijblijvende huidanalyse bij Instituut Leanne. Professionele huidbeoordeling en persoonlijk behandelplan.",
    url: `https://www.instituutleanne.be${ROUTES.HUIDANALYSE}`,
  },
};
