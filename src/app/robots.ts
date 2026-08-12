import type { MetadataRoute } from "next";
import { praxis } from "@/data/praxis";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/impressum", "/datenschutz"] }],
    sitemap: `${praxis.url}/sitemap.xml`,
  };
}
