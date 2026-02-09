import { MetadataRoute } from "next";
import { ROUTES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://instituutleanne.be";

  // All routes with their priority and change frequency
  const routes = [
    { path: ROUTES.HOME, priority: 1.0, changeFrequency: "weekly" as const },
    {
      path: ROUTES.HUIDVERBETERING,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    { path: ROUTES.ENVIRON, priority: 0.9, changeFrequency: "weekly" as const },
    { path: ROUTES.PIGMENT, priority: 0.9, changeFrequency: "weekly" as const },
    { path: ROUTES.LICHAAM, priority: 0.9, changeFrequency: "weekly" as const },
    { path: ROUTES.ICOONE, priority: 0.9, changeFrequency: "weekly" as const },
    { path: ROUTES.LASER, priority: 0.9, changeFrequency: "weekly" as const },
    {
      path: ROUTES.VOOR_WIE,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: ROUTES.NA_ZWANGERSCHAP,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: ROUTES.MENOPAUZE,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: ROUTES.SPORTERS,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: ROUTES.GEZOND_OUDER_WORDEN,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      path: ROUTES.HUIDANALYSE,
      priority: 0.9,
      changeFrequency: "weekly" as const,
    },
    {
      path: ROUTES.OVER_ONS,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: ROUTES.CONTACT,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    { path: ROUTES.BOEKEN, priority: 0.9, changeFrequency: "daily" as const },
    {
      path: ROUTES.PRIVACY,
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: ROUTES.VOORWAARDEN,
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
