import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ConsentBanner } from "@/components/consent-banner";
import { NotfallLeiste } from "@/components/notfall-leiste";
import { MobileAktionsleiste } from "@/components/mobile-aktionsleiste";
import { SprachProvider } from "@/lib/i18n";
import { SprachBanner } from "@/components/sprach-banner";
import { praxis } from "@/data/praxis";
import { schemaZeiten } from "@/lib/oeffnungszeiten";
import { terminBuchung } from "@/lib/termin";
import "./globals.css";

/**
 * Zwei Familien, klar getrennte Aufgaben. Newsreader trägt die Überschriften
 * und nimmt den Serif-Charakter des AZ-Logos auf. Source Sans 3 trägt alles
 * Funktionale, weil es für Lesbarkeit auf Bildschirmen gezeichnet ist — das
 * ist bei einer überwiegend älteren Patientenschaft die wichtigere Eigenschaft.
 *
 * next/font lädt beide zur Buildzeit herunter und liefert sie von der eigenen
 * Domain. Zur Laufzeit geht kein Request an Google. Das ist eine
 * DSGVO-Anforderung, keine Optimierung.
 */
const newsreader = Newsreader({
  // Nur `latin`: Deutsche Umlaute und ß sind darin enthalten. `latin-ext`
  // brächte osteuropäische Zeichen, die auf dieser Seite nicht vorkommen,
  // und verdoppelt die Zahl der Schriftdateien.
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-newsreader",
  display: "swap",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(praxis.url),
  title: {
    default: "Hausarzt in Espelkamp | Praxis Dr. med. Adel Aziz",
    template: "%s | Praxis Dr. med. Adel Aziz",
  },
  description:
    "Hausärztliche Versorgung für die ganze Familie in Espelkamp. Allgemeinmedizin, Manuelle Medizin und Suchtmedizin. Sprechzeiten, Kontakt, Rezept und Überweisung.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: praxis.name,
    url: praxis.url,
    title: "Hausarzt in Espelkamp | Praxis Dr. med. Adel Aziz",
    description:
      "Allgemeinmedizin, Manuelle Medizin und Suchtmedizin. Ostlandstraße 17, 32339 Espelkamp.",
  },
  robots: { index: true, follow: true },
};

/**
 * schema.org/Physician mit Adresse und Sprechzeiten. Das ist die Grundlage
 * dafür, dass Google die Praxis mit Öffnungszeiten in der lokalen Suche
 * ausspielt — für eine Hausarztpraxis der wichtigste Kanal überhaupt.
 */
function StrukturierteDaten() {
  const daten = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: praxis.name,
    url: praxis.url,
    telephone: praxis.telefonHref.replace("tel:", ""),
    medicalSpecialty: ["PrimaryCare", "PhysicalMedicine"],
    address: {
      "@type": "PostalAddress",
      streetAddress: praxis.adresse.strasse,
      postalCode: praxis.adresse.plz,
      addressLocality: praxis.adresse.ort,
      addressRegion: praxis.adresse.region,
      addressCountry: praxis.adresse.land,
    },
    openingHoursSpecification: schemaZeiten(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(daten) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // suppressHydrationWarning gilt genau eine Ebene tief und deckt hier die
  // Attribute des <html>-Elements ab. Nötig, weil das Skript im <head>
  // `data-motion` setzt, bevor React hydriert — ein absichtlicher Unterschied
  // zum Server-HTML, den React sonst als Fehler meldet und laut eigener
  // Meldung nicht korrigiert.
  return (
    <html
      lang="de"
      className={`${newsreader.variable} ${source.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Läuft vor dem ersten Paint und schaltet den versteckten
            Ausgangszustand der Scroll-Reveals frei. Ohne dieses Attribut
            bleibt jeder Inhalt sichtbar — kein JavaScript, kein Skriptfehler
            und kein ausbleibender IntersectionObserver kann etwas verbergen. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.dataset.motion='an'}}catch(e){}",
          }}
        />
      </head>
      {/* Auf schmalen Geräten hält die Polsterung unten den Platz frei, den
          die feste Aktionsleiste einnimmt — sonst verdeckte sie das Ende des
          Footers und die letzten Zeilen jeder Seite. */}
      <body className="min-h-dvh pb-20 lg:pb-0">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-night focus:px-5 focus:py-3 focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <SprachProvider>
          <NotfallLeiste />
          <Navbar terminAktiv={terminBuchung() !== null} />
          <SprachBanner />
          {/* tabIndex -1: Ohne das verschiebt der Skip-Link nur den Scroll,
              der Tastaturfokus bliebe im Header und der nächste Tab liefe
              zurück in die Navigation. */}
          <main id="inhalt" tabIndex={-1} className="focus:outline-none">
            {children}
          </main>
          <Footer />
          <MobileAktionsleiste terminAktiv={terminBuchung() !== null} />
        </SprachProvider>
        <ConsentBanner />
        <StrukturierteDaten />
      </body>
    </html>
  );
}
