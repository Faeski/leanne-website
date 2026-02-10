import { CONTACT_INFO, ROUTES } from "@/lib/constants";

export interface ContactContent {
  title: string;
  subtitle: string;
  intro: string;
  contactInfo: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
    email: string;
  };
  openingHours: {
    day: string;
    hours: string;
  }[];
  directions: string;
  schemaData: {
    name: string;
    description: string;
    url: string;
  };
}

export const contactContent: ContactContent = {
  title: "Contact",
  subtitle: "We horen graag van je",

  intro:
    "Heb je een vraag, wil je advies of direct een afspraak maken? Neem contact met ons op via onderstaande gegevens of gebruik het contactformulier. We reageren binnen 24 uur op werkdagen.",

  contactInfo: {
    address: CONTACT_INFO.address,
    city: CONTACT_INFO.city,
    postalCode: CONTACT_INFO.postalCode,
    country: CONTACT_INFO.country,
    phone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
  },

  openingHours: [
    { day: "Maandag", hours: CONTACT_INFO.openingHours.monday },
    { day: "Dinsdag", hours: CONTACT_INFO.openingHours.tuesday },
    { day: "Woensdag", hours: CONTACT_INFO.openingHours.wednesday },
    { day: "Donderdag", hours: CONTACT_INFO.openingHours.thursday },
    { day: "Vrijdag", hours: CONTACT_INFO.openingHours.friday },
    { day: "Zaterdag", hours: CONTACT_INFO.openingHours.saturday },
    { day: "Zondag", hours: CONTACT_INFO.openingHours.sunday },
  ],

  directions:
    "Instituut Leanne is gelegen in Lanaken, vlakbij de Nederlandse grens. Gratis parkeren is mogelijk direct voor de deur. Vanuit Maastricht bereik je ons in 10 minuten.",

  schemaData: {
    name: "Contact - Instituut Leanne",
    description:
      "Neem contact op met Instituut Leanne in Lanaken. Telefonisch, per e-mail of boek direct online.",
    url: `https://www.instituutleanne.be${ROUTES.CONTACT}`,
  },
};
