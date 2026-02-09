import { NavItem } from "@/types";

export const ROUTES = {
  HOME: "/",

  // Service pages
  HUIDVERBETERING: "/huidverbetering",
  ENVIRON: "/huidverbetering/environ",
  PIGMENT: "/huidverbetering/pigment",
  LICHAAM: "/lichaam",
  ICOONE: "/lichaam/icoone",
  LASER: "/laserontharing",

  // Persona pages
  VOOR_WIE: "/voor-wie",
  NA_ZWANGERSCHAP: "/voor-wie/na-zwangerschap",
  MENOPAUZE: "/voor-wie/menopauze",
  SPORTERS: "/voor-wie/sporters",
  GEZOND_OUDER_WORDEN: "/voor-wie/gezond-ouder-worden",

  // Other pages
  HUIDANALYSE: "/huidanalyse",
  OVER_ONS: "/over-ons",
  CONTACT: "/contact",
  BOEKEN: "/boeken",
  QUIZ: "/skin-quiz",

  // Legal
  PRIVACY: "/privacy",
  VOORWAARDEN: "/algemene-voorwaarden",
} as const;

export const EXTERNAL_URLS = {
  WEBSHOP: "https://webshop-url.com", // To be configured
  GOOGLE_MAPS: "https://maps.google.com/?q=Instituut+Leanne+Lanaken", // To be configured
  INSTAGRAM: "https://instagram.com/instituutleanne", // To be configured
  FACEBOOK: "https://facebook.com/instituutleanne", // To be configured
} as const;

export const NAVIGATION: { main: NavItem[]; legal: NavItem[] } = {
  main: [
    {
      label: "Huidverbetering",
      href: ROUTES.HUIDVERBETERING,
      children: [
        { label: "Environ - Anti-Aging", href: ROUTES.ENVIRON },
        { label: "Me-Line - Pigment", href: ROUTES.PIGMENT },
      ],
    },
    {
      label: "Lichaam & Contour",
      href: ROUTES.LICHAAM,
      children: [{ label: "iCoone", href: ROUTES.ICOONE }],
    },
    { label: "Laserontharing", href: ROUTES.LASER },
    {
      label: "Voor Wie?",
      href: ROUTES.VOOR_WIE,
      children: [
        { label: "Na Zwangerschap", href: ROUTES.NA_ZWANGERSCHAP },
        { label: "Menopauze & Huid", href: ROUTES.MENOPAUZE },
        { label: "Sporters", href: ROUTES.SPORTERS },
        { label: "Gezond Ouder Worden", href: ROUTES.GEZOND_OUDER_WORDEN },
      ],
    },
    { label: "Huidanalyse", href: ROUTES.HUIDANALYSE },
    { label: "Over Ons", href: ROUTES.OVER_ONS },
    { label: "Contact", href: ROUTES.CONTACT },
  ],
  legal: [
    { label: "Privacy", href: ROUTES.PRIVACY },
    { label: "Algemene Voorwaarden", href: ROUTES.VOORWAARDEN },
  ],
} as const;

export const CONTACT_INFO = {
  name: "Instituut Leanne",
  address: "Adres komt hier",
  city: "Lanaken",
  postalCode: "3620",
  country: "België",
  phone: "+32 XXX XX XX XX",
  email: "info@instituutleanne.be",
  openingHours: {
    monday: "Gesloten",
    tuesday: "09:00 - 18:00",
    wednesday: "09:00 - 18:00",
    thursday: "09:00 - 20:00",
    friday: "09:00 - 18:00",
    saturday: "09:00 - 16:00",
    sunday: "Gesloten",
  },
} as const;
