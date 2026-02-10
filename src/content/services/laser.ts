import { ServicePageContent } from "@/components/templates";
import { ROUTES } from "@/lib/constants";

export const laserContent: ServicePageContent = {
  // AEO - 40-60 word direct answer for AI search
  aeoAnswer:
    "Laserontharing bij Instituut Leanne maakt gebruik van diode laser technologie voor permanente ontharing. Veilig en effectief voor alle huidtypes. Sharon is gecertificeerd laser specialist met jarenlange ervaring. Na 6-8 behandelingen ben je blijvend van ongewenste haargroei verlost.",
  aeoCitation: "Sharon - Gecertificeerd Laser Specialist",

  // Hero
  title: "Laserontharing",
  subtitle:
    "Permanente ontharing met diode laser. Veilig voor alle huidtypes, effectief en comfortabel.",

  // Process Timeline
  processSteps: [
    {
      phase: "voor",
      title: "Gratis Consult & Patch Test",
      description:
        "We bespreken je verwachtingen, checken contraindicaties en voeren een patch test uit om de juiste instellingen te bepalen voor jouw huid- en haartype.",
      duration: "20 minuten",
    },
    {
      phase: "voor",
      title: "Voorbereiding",
      description:
        "24-48 uur voor de behandeling scheer je het te behandelen gebied. Geen zonnebank of zelfbruiner gebruiken in de 2 weken vooraf.",
    },
    {
      phase: "tijdens",
      title: "Laserbehandeling",
      description:
        "De diode laser richt zich op de melanine in de haarfollikel. Je voelt korte pulsen, vergelijkbaar met een elastiekje. Koeling maakt het comfortabel.",
      duration: "15-60 min (afhankelijk van zone)",
    },
    {
      phase: "na",
      title: "Nazorg & Vervolgafspraken",
      description:
        "Lichte roodheid verdwijnt binnen enkele uren. Na 4-6 weken volgt de volgende sessie. Gemiddeld zijn 6-8 behandelingen nodig.",
    },
  ],

  // Before/After - empty for now (images to be provided)
  beforeAfterImages: [],

  // FAQ
  faqs: [
    {
      question: "Is laserontharing echt permanent?",
      answer:
        "Na een volledige behandelreeks van 6-8 sessies ervaren de meeste cliënten 80-90% permanente haarreductie. Slapende haarzakjes kunnen later actief worden, waarvoor eventueel een onderhoudsbehandeling nodig is.",
    },
    {
      question: "Doet laserontharing pijn?",
      answer:
        "De meeste mensen beschrijven het als een lichte prik of het gevoel van een elastiekje. Onze diode laser heeft ingebouwde koeling die het comfort verhoogt. Gevoelige zones zoals bikinilijn kunnen iets intenser voelen.",
    },
    {
      question: "Is laserontharing geschikt voor mijn huidtype?",
      answer:
        "Onze diode laser is veilig voor alle huidtypes (Fitzpatrick I-VI). We passen de instellingen aan op jouw specifieke huid- en haarcombinatie voor optimale resultaten.",
    },
    {
      question: "Hoeveel kost laserontharing?",
      answer:
        "Prijzen variëren per zone: kleine zones (bovenlip, oksels) vanaf €35, middelgrote zones (bikinilijn) vanaf €65, grote zones (benen, rug) vanaf €150. Vraag naar onze voordeelpakketten.",
    },
    {
      question: "Kan ik in de zomer laserontharing doen?",
      answer:
        "Ja, mits je de behandelde zone goed beschermt tegen zon. We adviseren SPF50 en geen zonnebank. Bij een verse zonnebrand wachten we met de behandeling.",
    },
    {
      question: "Hoe lang moet ik wachten tussen behandelingen?",
      answer:
        "De haargroeicyclus bepaalt het interval: gezicht elke 4 weken, lichaam elke 6-8 weken. Dit zorgt ervoor dat we steeds nieuwe haren in de actieve groeifase behandelen.",
    },
  ],

  // Schema data
  schemaData: {
    name: "Laserontharing",
    description:
      "Permanente laserontharing met diode laser technologie. Veilig voor alle huidtypes. Gecertificeerd laser specialist.",
    url: `https://www.instituutleanne.be${ROUTES.LASER}`,
    category: "Laser Hair Removal",
    priceRange: "€-€€",
    duration: "15-60 minuten",
  },
};
