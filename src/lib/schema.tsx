import { CONTACT_INFO } from "./constants";

/**
 * Schema.org JSON-LD generators for SEO
 * These create structured data that helps search engines understand page content
 */

// Base organization data used across schemas (without @type to avoid duplication)
const ORGANIZATION_BASE = {
  name: CONTACT_INFO.name,
  address: {
    "@type": "PostalAddress" as const,
    streetAddress: CONTACT_INFO.address,
    addressLocality: CONTACT_INFO.city,
    postalCode: CONTACT_INFO.postalCode,
    addressCountry: CONTACT_INFO.country,
  },
  telephone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
};

/**
 * MedicalBusiness schema for the organization
 * Used on About page and as organization reference
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://www.instituutleanne.be/#organization",
    ...ORGANIZATION_BASE,
    url: "https://www.instituutleanne.be",
    image: "https://www.instituutleanne.be/images/og-image.jpg",
    priceRange: "€€",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "00:00", closes: "00:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "20:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "00:00", closes: "00:00" },
    ],
    sameAs: [
      "https://www.instagram.com/instituutleanne",
      "https://www.facebook.com/instituutleanne",
    ],
  };
}

/**
 * Service schema for treatment pages
 */
export interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
  image?: string;
  priceRange?: string;
  duration?: string;
  category?: string;
}

export function generateServiceSchema(service: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.instituutleanne.be/#organization",
      name: CONTACT_INFO.name,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 50.8778,
        longitude: 5.6564,
      },
      geoRadius: "30000",
    },
    serviceType: service.category || "Beauty Treatment",
    ...(service.priceRange && { priceRange: service.priceRange }),
    ...(service.duration && {
      providerMobility: "static",
      termsOfService: `Behandelduur: ${service.duration}`,
    }),
  };
}

/**
 * FAQPage schema - typically embedded in FAQAccordion component
 * This is a helper for generating outside the component if needed
 */
export interface FAQSchemaItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(items: FAQSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * LocalBusiness schema for geo-targeted pages
 */
export interface LocalBusinessSchemaInput {
  areaServed: string;
  serviceTypes: string[];
}

export function generateLocalBusinessSchema(input: LocalBusinessSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    ...ORGANIZATION_BASE,
    url: "https://www.instituutleanne.be",
    areaServed: {
      "@type": "City",
      name: input.areaServed,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Behandelingen",
      itemListElement: input.serviceTypes.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
        position: index + 1,
      })),
    },
  };
}

/**
 * BreadcrumbList schema for navigation
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * WebPage schema for general pages
 */
export interface WebPageSchemaInput {
  name: string;
  description: string;
  url: string;
}

export function generateWebPageSchema(page: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.instituutleanne.be/#website",
      name: CONTACT_INFO.name,
      url: "https://www.instituutleanne.be",
    },
    provider: {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.instituutleanne.be/#organization",
    },
  };
}

/**
 * Helper component to inject JSON-LD into page head
 * Usage: <SchemaScript schema={generateServiceSchema({...})} />
 */
export function SchemaScript({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
