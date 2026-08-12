import type { MetadataRoute } from "next";
import { praxis } from "@/data/praxis";

export default function sitemap(): MetadataRoute.Sitemap {
  const stand = new Date();

  return [
    { url: praxis.url, lastModified: stand, changeFrequency: "monthly", priority: 1 },
    { url: `${praxis.url}/leistungen`, lastModified: stand, changeFrequency: "yearly", priority: 0.8 },
    { url: `${praxis.url}/praxis`, lastModified: stand, changeFrequency: "yearly", priority: 0.8 },
    {
      url: `${praxis.url}/rezept-und-ueberweisung`,
      lastModified: stand,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    { url: `${praxis.url}/kontakt`, lastModified: stand, changeFrequency: "monthly", priority: 0.9 },
  ];
}
