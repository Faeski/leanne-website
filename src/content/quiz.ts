/**
 * Quiz Content Data
 * All Dutch text content for the "Skin Code" diagnostic quiz
 */

import { ROUTES, CONTACT_INFO } from "@/lib/constants";
import type {
  PrimaryGoal,
  LifestyleFactor,
  LocationOption,
  QuizQuestion,
  TreatmentRecommendation,
  LifestyleTip,
} from "@/lib/quiz/types";

// ============================================================================
// QUESTIONS
// ============================================================================

export const questions: {
  goal: QuizQuestion<PrimaryGoal>;
  lifestyle: QuizQuestion<LifestyleFactor>;
  location: QuizQuestion<LocationOption>;
} = {
  goal: {
    id: "goal",
    title: "Waar wil je aan werken?",
    subtitle: "Kies je belangrijkste huidwens",
    multiSelect: false,
    options: [
      {
        value: "pigment",
        label: "Pigmentvlekken verminderen",
        description: "Egale huid, minder donkere vlekken",
      },
      {
        value: "aging",
        label: "Rimpels & huidveroudering",
        description: "Jongere, strakkere huid",
      },
      {
        value: "laser",
        label: "Definitieve ontharing",
        description: "Nooit meer scheren of harsen",
      },
      {
        value: "firming",
        label: "Huid verstevigen",
        description: "Strakker lichaam, minder cellulite",
      },
    ],
  },
  lifestyle: {
    id: "lifestyle",
    title: "Wat past bij jouw levensstijl?",
    subtitle: "Je mag meerdere opties kiezen",
    multiSelect: true,
    options: [
      {
        value: "stress",
        label: "Veel stress",
        description: "Druk werk of privéleven",
      },
      {
        value: "sun",
        label: "Veel in de zon",
        description: "Regelmatig zonnen of buitenwerk",
      },
      {
        value: "healthy-eating",
        label: "Gezonde voeding belangrijk",
        description: "Let op wat je eet",
      },
      {
        value: "busy",
        label: "Weinig tijd voor mezelf",
        description: "Drukke agenda",
      },
      {
        value: "hormonal",
        label: "Hormonale veranderingen",
        description: "Zwangerschap, menopauze, of anticonceptie",
      },
    ],
  },
  location: {
    id: "location",
    title: "Waar woon je?",
    subtitle: "Voor gepersonaliseerd reisadvies",
    multiSelect: false,
    options: [
      {
        value: "be-limburg",
        label: "België (Limburg)",
        description: "Lokaal, geen reisinfo nodig",
      },
      {
        value: "nl-maastricht",
        label: "Nederland (Maastricht regio)",
        description: "Slechts 10 minuten rijden",
      },
      {
        value: "other",
        label: "Elders",
        description: "Andere regio",
      },
    ],
  },
};

// ============================================================================
// TREATMENT RECOMMENDATIONS
// ============================================================================

export const treatmentRecommendations: Record<
  PrimaryGoal,
  TreatmentRecommendation
> = {
  pigment: {
    treatmentKey: "pigment",
    name: "Me-Line Behandeling",
    description:
      "Me-Line is een professionele depigmentatiemethode die specifiek ontwikkeld is voor hardnekkige pigmentvlekken en melasma. In tegenstelling tot reguliere peelings werkt Me-Line op meerdere niveaus van de huid om melanine-overproductie aan te pakken.",
    whatToExpect:
      "Na een grondige huidanalyse starten we met een intensieve kuurbehandeling van 4-6 sessies. Je ziet al na de eerste weken verbetering. Het volledige resultaat is zichtbaar na 8-12 weken.",
    route: ROUTES.PIGMENT,
  },
  aging: {
    treatmentKey: "aging",
    name: "Environ Vitamin A Step-Up System",
    description:
      "Environ's Step-Up System bouwt geleidelijk vitamine A op in je huid - het krachtigste anti-aging ingrediënt dat wetenschappelijk bewezen is. Dit stimuleert collageen, verfijnt rimpels, en geeft je huid een gezonde glow.",
    whatToExpect:
      "We beginnen met een persoonlijk adviesgesprek en bepalen je startniveau. Elke 4-6 weken bouwen we de concentratie op. Merkbare verbetering zie je na 8-12 weken, optimale resultaten na 6-12 maanden.",
    route: ROUTES.ENVIRON,
  },
  laser: {
    treatmentKey: "laser",
    name: "Diode Laserontharing",
    description:
      "Onze medische diode laser biedt permanente ontharing door haarzakjes gericht te behandelen. In tegenstelling tot IPL is deze technologie effectief op alle huidtypes en haarsoorten, met langdurige resultaten.",
    whatToExpect:
      "Je hebt gemiddeld 6-8 sessies nodig met 4-6 weken tussentijd. Na elke sessie merk je minder haargroei. Na de volledige kuur ben je definitief van ongewenst haar af.",
    route: ROUTES.LASER,
  },
  firming: {
    treatmentKey: "firming",
    name: "iCoone Behandeling",
    description:
      "iCoone combineert Multi Micro Alveolar Stimulation (MMAS) met LED-therapie voor zichtbare versteviging. Deze Italiaanse technologie activeert je natuurlijke collageenproductie en vermindert vetophoping.",
    whatToExpect:
      "Een kuur bestaat uit 8-12 behandelingen, 1-2 keer per week. Je ziet al na de eerste sessies verschil in huidtextuur. Optimale resultaten na 6-8 weken, met onderhoud voor blijvend effect.",
    route: ROUTES.ICOONE,
  },
};

// ============================================================================
// GOAL DESCRIPTIONS (for PDF header)
// ============================================================================

export const goalDescriptions: Record<PrimaryGoal, string> = {
  pigment:
    "Je wilt af van storende pigmentvlekken en droomt van een egale, stralende huid.",
  aging:
    "Je wilt de tijd terugdraaien en je huid zijn jeugdige uitstraling teruggeven.",
  laser:
    "Je bent klaar met scheren, harsen en epileren - je wilt definitief van ongewenst haar af.",
  firming:
    "Je wilt een strakkere, stevigere huid en contouren die je zelfvertrouwen een boost geven.",
};

// ============================================================================
// LIFESTYLE TIPS
// ============================================================================

export const lifestyleTips: Record<LifestyleFactor, LifestyleTip> = {
  stress: {
    factor: "stress",
    tip: "Stress heeft directe impact op je huid. Een behandeling bij ons is ook een moment van rust - gun jezelf die me-time.",
  },
  sun: {
    factor: "sun",
    tip: "Zonbescherming is cruciaal! Gebruik dagelijks SPF 30+ en plan behandelingen bij voorkeur in de herfst of winter voor optimaal resultaat.",
  },
  "healthy-eating": {
    factor: "healthy-eating",
    tip: "Mooi zo! Goede voeding ondersteunt je huid van binnenuit. Vraag ons naar Environ's supplementen die je behandeling versterken.",
  },
  busy: {
    factor: "busy",
    tip: "We begrijpen drukke agenda's. Onze behandelingen zijn ontworpen om efficiënt te zijn - maximaal resultaat in minimale tijd.",
  },
  hormonal: {
    factor: "hormonal",
    tip: "Hormonale veranderingen beïnvloeden je huid significant. We houden hier rekening mee in je persoonlijke behandelplan.",
  },
};

// ============================================================================
// EMAIL CAPTURE SCREEN
// ============================================================================

export const emailCaptureContent = {
  title: "Bijna klaar!",
  subtitle: "Waar mogen we je persoonlijke huidadvies naartoe sturen?",
  emailPlaceholder: "jouw@email.nl",
  firstNamePlaceholder: "Voornaam (optioneel)",
  consentText:
    "Ik ga akkoord met het ontvangen van mijn huidadvies en gerelateerde informatie per email.",
  privacyNote: "We respecteren je privacy.",
  privacyLinkText: "Lees ons privacybeleid",
  submitButton: "Ontvang mijn advies",
};

// ============================================================================
// RESULTS SCREEN
// ============================================================================

export const resultsContent = {
  title: "Jouw Persoonlijke Huidadvies",
  downloadButtonText: "Download je Huid Advies Paspoort",
  downloadingText: "PDF wordt aangemaakt...",
  ctaTitle: "Klaar voor de volgende stap?",
  ctaText: "Boek je gratis huidanalyse en bespreek je persoonlijke plan.",
  ctaButtonText: "Boek gratis huidanalyse",
};

// ============================================================================
// PDF CONTENT
// ============================================================================

export const pdfContent = {
  header: {
    brandName: "INSTITUUT LEANNE",
    title: "Jouw Persoonlijke Huid Advies",
    datePrefix: "Datum:",
    forPrefix: "Voor:",
    defaultName: "je",
  },
  sections: {
    goalTitle: "JOUW HOOFDDOEL",
    recommendationTitle: "ONZE AANBEVELING",
    expectationTitle: "Wat kun je verwachten?",
    tipsTitle: "AANVULLENDE TIPS",
    tipsSubtitle: "Gebaseerd op jouw levensstijl:",
    ctaTitle: "VOLGENDE STAP",
    ctaText: "Boek je gratis huidanalyse en bespreek je persoonlijke plan.",
    travelTitle: "REISINFO VANUIT MAASTRICHT",
    travelText:
      "Instituut Leanne ligt op slechts 10 minuten van Maastricht centrum. Via de A2 richting Luik, afslag Lanaken. Gratis parkeren voor de deur.",
    aboutTitle: "Over Instituut Leanne",
    aboutText:
      "Al meer dan 15 jaar zijn we gespecialiseerd in resultaatgerichte huidbehandelingen. Met wetenschappelijk onderbouwde methodes en persoonlijke aandacht helpen we je naar je mooiste huid.",
  },
  footer: {
    address: `${CONTACT_INFO.name} | ${CONTACT_INFO.address}, ${CONTACT_INFO.postalCode} ${CONTACT_INFO.city}`,
    phone: CONTACT_INFO.phone,
    website: "www.instituutleanne.be",
  },
};

// ============================================================================
// EMAIL TEMPLATES CONTENT
// ============================================================================

export const emailContent = {
  // Email 1: PDF Delivery (immediate)
  pdfDelivery: {
    subject: "Jouw Persoonlijke Huid Advies Paspoort",
    greeting: (firstName: string | null) =>
      firstName ? `Hoi ${firstName},` : "Hoi,",
    intro:
      "Bedankt voor het invullen van onze huidanalyse! Bijgevoegd vind je jouw persoonlijke Huid Advies Paspoort met onze aanbevelingen op basis van jouw antwoorden.",
    ctaText: "Wil je je advies bespreken met een van onze experts?",
    ctaButton: "Boek je gratis huidanalyse",
    closing: "Hartelijke groet,",
    signature: "Team Instituut Leanne",
  },
  // Email 2: Value Email (Day 3)
  valueEmail: {
    subjectPrefix: "3 tips voor ",
    subjectGoals: {
      pigment: "een egale huid",
      aging: "jongere huid",
      laser: "gladde huid",
      firming: "een strak lichaam",
    } as Record<PrimaryGoal, string>,
    greeting: (firstName: string | null) =>
      firstName ? `Hoi ${firstName},` : "Hoi,",
    intro:
      "Een paar dagen geleden downloadde je jouw Huid Advies Paspoort. Hier zijn 3 tips die je vandaag al kunt toepassen:",
    tipIntro: "Tip {number}:",
    tips: {
      pigment: [
        "Gebruik dagelijks een SPF 50+ zonnebrandcrème, ook bij bewolkt weer - UV-straling verergert pigmentatie.",
        "Vermijd parfum en bepaalde medicijnen die je huid lichter maken voor zonblootstelling.",
        "Wees geduldig: pigmentvlekken verminderen kost tijd, maar de resultaten zijn blijvend.",
      ],
      aging: [
        "Slaap is je beste anti-aging remedie. Probeer 7-8 uur per nacht te slapen.",
        "Drink voldoende water - gehydrateerde huid oogt voller en jonger.",
        "Begin met een lage dosis vitamine A en bouw langzaam op voor de beste resultaten.",
      ],
      laser: [
        "Scheer (niet harsen!) het behandelgebied 1-2 dagen voor je afspraak.",
        "Vermijd zon en zelfbruiner minimaal 2 weken voor en na de behandeling.",
        "Consequentie is key: houd je aan het behandelschema voor optimale resultaten.",
      ],
      firming: [
        "Drink minimaal 2 liter water per dag om de behandeling te ondersteunen.",
        "Lichte beweging na de behandeling helpt bij de lymfedrainage.",
        "Combineer behandelingen met een gezond dieet voor snellere resultaten.",
      ],
    } as Record<PrimaryGoal, string[]>,
    closing: "Vragen? Reply op deze email of boek een gratis huidanalyse.",
    signature: "Team Instituut Leanne",
  },
  // Email 3: Soft CTA (Day 7)
  ctaEmail: {
    subject: "Klaar voor de volgende stap?",
    greeting: (firstName: string | null) =>
      firstName ? `Hoi ${firstName},` : "Hoi,",
    intro:
      "We hopen dat je tips uit onze eerdere emails hebt kunnen gebruiken. Veel van onze klanten vinden het fijn om hun persoonlijke situatie te bespreken met een expert.",
    offerTitle: "Daarom bieden we een gratis huidanalyse aan.",
    benefits: [
      "Professionele huidscan",
      "Persoonlijk adviesboekje om mee naar huis te nemen",
      "Productsamples om uit te proberen",
      "Geen verplichting",
    ],
    ctaButton: "Boek je gratis huidanalyse",
    closing: "Tot snel?",
    signature: "Team Instituut Leanne",
    ps: `P.S. Liever eerst even bellen? Dat kan ook: ${CONTACT_INFO.phone}`,
  },
  // Footer (all emails)
  footer: {
    address: `${CONTACT_INFO.name} | ${CONTACT_INFO.city}, België`,
    unsubscribeText: "Uitschrijven",
  },
};

// ============================================================================
// QUIZ START SCREEN
// ============================================================================

export const startScreenContent = {
  title: "Ontdek je Skin Code",
  subtitle:
    "Beantwoord 3 korte vragen en ontvang je persoonlijke huidadvies met behandelaanbeveling.",
  startButton: "Start de quiz",
  duration: "Duurt slechts 1 minuut",
};

// ============================================================================
// PROGRESS INDICATOR
// ============================================================================

export const progressContent = {
  stepLabel: "Vraag",
  ofLabel: "van",
};
