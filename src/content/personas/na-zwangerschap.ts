import { PersonaPageContent } from "@/components/templates";
import { ROUTES } from "@/lib/constants";

export const naZwangerschapContent: PersonaPageContent = {
  // Hero
  title: "Herstel na je Zwangerschap",
  subtitle:
    "Krijg je lichaam en huid weer in topvorm. Veilige, effectieve behandelingen speciaal voor jonge moeders.",

  // Problem statement
  intro:
    "Je lichaam heeft iets bijzonders gedaan: een nieuw leven gecreëerd. Maar misschien herken je jezelf niet meer helemaal in de spiegel. Slappe buikhuid, striae, of een veranderde huidconditie - het zijn normale gevolgen van zwangerschap. En het is oké om daar iets aan te willen doen.",

  painPoints: [
    {
      title: "Slappe buikhuid",
      description:
        "De huid heeft zich uitgerekt en trekt niet vanzelf terug naar hoe het was.",
      icon: "😔",
    },
    {
      title: "Striae & littekens",
      description:
        "Zwangerschapsstrepen of een keizersnedelitteken die je liever kwijt zou zijn.",
      icon: "📍",
    },
    {
      title: "Vermoeide huid",
      description:
        "Hormonale veranderingen en slaapgebrek laten sporen achter op je gezicht.",
      icon: "😴",
    },
    {
      title: "Weinig tijd voor jezelf",
      description:
        "Als nieuwe moeder is 'me-time' schaars, maar juist nu zo belangrijk.",
      icon: "⏰",
    },
  ],

  // Recommended treatments
  recommendedTreatments: [
    {
      title: "iCoone - Huidversteviging",
      description:
        "Niet-invasieve body contouring die je buikhuid verstevigt en cellulite vermindert. Ontspannend als een massage.",
      href: ROUTES.ICOONE,
      tag: "Meest gekozen",
      duration: "45-60 min",
    },
    {
      title: "Environ - Huidverjonging",
      description:
        "Herstel je gezichtshuid met vitamine A behandelingen. Vermindert pigmentatie en geeft je glow terug.",
      href: ROUTES.ENVIRON,
      duration: "60-90 min",
    },
  ],

  // Testimonial
  testimonial: {
    quote:
      "Na mijn tweede kind had ik het gevoel dat ik mezelf een beetje kwijt was. Leanne hielp me met een haalbaar plan. Na 10 iCoone-behandelingen voelt mijn buik opnieuw steviger.",
    author: "Michelle",
    role: "Moeder van twee",
    treatment: "iCoone behandelingen",
    rating: 5,
  },

  // Schema
  schemaData: {
    name: "Huidbehandeling na Zwangerschap",
    description:
      "Veilige huidverstevigings- en hersteltbehandelingen voor jonge moeders bij Instituut Leanne.",
    url: `https://www.instituutleanne.be${ROUTES.NA_ZWANGERSCHAP}`,
  },
};
