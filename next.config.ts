import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    // Die Bestandsseite hat diese Pfade. Sie sind bei Google indexiert und
    // stehen auf gedruckten Unterlagen, deshalb dauerhaft umleiten.
    return [
      { source: "/ueber-uns", destination: "/praxis", permanent: true },
      { source: "/datenschutzerklaerung", destination: "/datenschutz", permanent: true },
      { source: "/startseite", destination: "/", permanent: true },
      // Die frühere gemeinsame Formularseite ist in den Patientenservice
      // aufgegangen. Der Pfad war bereits deployt und darf nicht brechen.
      { source: "/rezept-und-ueberweisung", destination: "/patientenservice", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};

export default nextConfig;
