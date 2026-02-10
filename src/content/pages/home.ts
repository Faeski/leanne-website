import { TreatmentCardData } from "@/components/content";
import { ROUTES } from "@/lib/constants";

export interface USPItem {
  icon: "premium" | "metime" | "certified";
  title: string;
  description: string;
}

export interface HomePageContent {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaHref: string;
  };
  intro: {
    title: string;
    body: string;
  };
  pillars: {
    title: string;
    treatments: TreatmentCardData[];
  };
  quiz: {
    title: string;
    description: string;
    cta: string;
    ctaHref: string;
  };
  usps: {
    items: USPItem[];
  };
  intake: {
    title: string;
    description: string;
    cta: string;
    ctaHref: string;
  };
}

export const homeContent: HomePageContent = {
  hero: {
    title: "Jouw Huid, Onze Expertise",
    subtitle:
      "Professionele huidverbetering en lichaamsbehandelingen in een oase van rust. Ontdek de kracht van wetenschappelijk onderbouwde huidzorg.",
    cta: "Boek je gratis huidanalyse",
    ctaHref: ROUTES.HUIDANALYSE,
  },

  intro: {
    title: "Welkom bij Instituut Leanne",
    body: "Bij Instituut Leanne geloven we dat mooie huid begint bij gezonde huid. Als gecertificeerd specialist in Environ, Me-Line en iCoone bieden we behandelingen die écht resultaat leveren. Geen snelle oplossingen, maar een doordachte aanpak op maat van jouw huid en lichaam.",
  },

  pillars: {
    title: "Onze Behandelingen",
    treatments: [
      {
        title: "Huidverbetering",
        description:
          "Anti-aging en pigmentbehandeling met Environ en Me-Line voor zichtbare huidverjonging.",
        href: ROUTES.HUIDVERBETERING,
        tag: "Gezicht",
      },
      {
        title: "Lichaam & Contour",
        description:
          "Huidversteviging en lichaamscontouring met de geavanceerde iCoone technologie.",
        href: ROUTES.LICHAAM,
        tag: "Lichaam",
      },
      {
        title: "Laserontharing",
        description:
          "Permanente ontharing met diode laser. Veilig en effectief voor alle huidtypes.",
        href: ROUTES.LASER,
        tag: "Ontharing",
      },
      {
        title: "Gratis Huidanalyse",
        description:
          "Start met een persoonlijke huidanalyse en ontvang een behandelplan op maat.",
        href: ROUTES.HUIDANALYSE,
        tag: "Gratis",
      },
    ],
  },

  quiz: {
    title: "Ontdek jouw Skin Code",
    description:
      "Beantwoord een paar vragen en ontdek welke behandeling het beste bij jouw huid en doelen past.",
    cta: "Start de quiz",
    ctaHref: ROUTES.QUIZ,
  },

  usps: {
    items: [
      {
        icon: "premium",
        title: "Premium Comfort",
        description:
          "Verwarmde behandelstoelen, zachte dekens en een ontspannen sfeer. Bij ons sta jij centraal.",
      },
      {
        icon: "metime",
        title: "Me-Time Focus",
        description:
          "Geen telefoons, geen haast. Puur tijd voor jezelf in een rustige, professionele omgeving.",
      },
      {
        icon: "certified",
        title: "Gecertificeerde Expertise",
        description:
          "Erkende specialisaties in Environ, Me-Line en iCoone. Continue bijscholing voor de beste resultaten.",
      },
    ],
  },

  intake: {
    title: "Begin met een Gratis Huidanalyse",
    description:
      "Boek een vrijblijvende intake en ontvang persoonlijk advies, een professionele huidbeoordeling en een behandelplan volledig op maat.",
    cta: "Boek je gratis huidanalyse",
    ctaHref: ROUTES.HUIDANALYSE,
  },
};
