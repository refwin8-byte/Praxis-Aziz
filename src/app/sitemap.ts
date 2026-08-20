import type { MetadataRoute } from "next";
import { praxis } from "@/data/praxis";

export default function sitemap(): MetadataRoute.Sitemap {
  const stand = new Date();

  return [
    { url: praxis.url, lastModified: stand, changeFrequency: "monthly", priority: 1 },
    { url: `${praxis.url}/leistungen`, lastModified: stand, changeFrequency: "yearly", priority: 0.8 },
    { url: `${praxis.url}/praxis`, lastModified: stand, changeFrequency: "yearly", priority: 0.8 },
    {
      url: `${praxis.url}/patientenservice`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${praxis.url}/patientenservice/termin`,
      lastModified: stand,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${praxis.url}/patientenservice/rezept`,
      lastModified: stand,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${praxis.url}/patientenservice/ueberweisung`,
      lastModified: stand,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${praxis.url}/patientenservice/praxisbesuch`,
      lastModified: stand,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${praxis.url}/patientenservice/notfall`,
      lastModified: stand,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    { url: `${praxis.url}/kontakt`, lastModified: stand, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${praxis.url}/barrierefreiheit`,
      lastModified: stand,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
