"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { praxis } from "@/data/praxis";
import { lesen, setzen, EVENT } from "@/lib/consent";
import { useSprache } from "@/lib/i18n";
import { Pfeil } from "@/components/icons";

/**
 * Karte in zwei Stufen.
 *
 * **Stufe 1, ohne Einwilligung:** eine statische Karte, die auf dem eigenen
 * Server liegt. Sie ist sofort sichtbar, und dabei geht kein einziger Request
 * an einen fremden Server. Die Kartenkacheln wurden einmalig von
 * OpenStreetMap geladen und liegen als ein einzelnes Bild in `public/bilder`.
 * Für die häufigste Frage — wo ist die Praxis? — reicht das vollständig.
 *
 * **Stufe 2, nach Einwilligung:** die interaktive Google-Maps-Karte zum
 * Zoomen und Verschieben (Wunsch des Auftraggebers, August 2026 — die
 * OSM-Einbettung wirkte fremd und funktionsarm; die alte Praxis-Website
 * nutzte ebenfalls Google Maps hinter einer Zustimmung). Erst hier wird
 * eine Verbindung zu Google aufgebaut, und erst hier fließt die
 * IP-Adresse der Besucherin dorthin — inklusive US-Transfer, deshalb
 * bleibt die Einwilligung zwingend und die Datenschutzerklärung nennt
 * Google ausdrücklich.
 *
 * Warum nicht einfach die interaktive Karte sofort laden: Das Einbetten
 * fremder Inhalte überträgt personenbezogene Daten ohne Rechtsgrundlage. Für
 * eine Arztpraxis ist das der abmahnungsanfälligste Punkt einer Website. Die
 * statische Karte umgeht das Problem, statt es zu verwalten — sie sieht aus
 * wie eine Karte, weil sie eine ist, und kostet rechtlich nichts.
 *
 * Die Attribution nach ODbL steht unter dem Bild. Sie ist Pflicht, auch bei
 * selbst gehosteten Kacheln.
 */

// Aus der Adresse geokodiert (Photon/OpenStreetMap), nicht geraten.
const LAT = 52.377731;
const LON = 8.620361;
const BBOX = [LON - 0.005, LAT - 0.0025, LON + 0.005, LAT + 0.0025]
  .map((n) => n.toFixed(6))
  .join(",");

// Ziel als Name + Adresse, NICHT als Koordinate: Google schnappt nackte
// Koordinaten auf den nächstgelegenen Karteneintrag — das war hier die
// Zahnarztpraxis in der Ostlandstraße 19 nebenan. Mit Name und Hausnummer
// landen Karte und Route eindeutig bei Dr. Aziz.
const ZIEL = encodeURIComponent(
  `${praxis.name}, ${praxis.adresse.strasse}, ${praxis.adresse.plz} ${praxis.adresse.ort}`,
);

// Offizielles schlüsselloses Google-Maps-Embed; lädt erst nach Einwilligung.
const EMBED = `https://www.google.com/maps?q=${ZIEL}&z=16&hl=de&output=embed`;
// Route öffnet extern in Google Maps — dafür braucht es keine Einwilligung,
// weil nichts eingebettet wird; der Klick ist die bewusste Handlung.
const ROUTE = `https://www.google.com/maps/dir/?api=1&destination=${ZIEL}`;

export function Karte({
  ueberschrift,
  einleitung,
  id = "anfahrt-karte",
}: {
  /** `null` blendet die Überschrift aus — für Stellen, an denen der
   *  umgebende Abschnitt bereits eine trägt. */
  ueberschrift?: string | null;
  einleitung?: string | null;
  id?: string;
} = {}) {
  const { wb } = useSprache();
  const titel = ueberschrift === null ? null : (ueberschrift ?? wb.kontakt.anfahrt);
  const intro = einleitung === null ? null : (einleitung ?? wb.kontakt.anfahrtEinleitung);
  const [extern, setExtern] = useState(false);
  const [bereit, setBereit] = useState(false);

  useEffect(() => {
    const anwenden = () => setExtern(lesen()?.extern === true);
    anwenden();
    setBereit(true);
    window.addEventListener(EVENT, anwenden);
    return () => window.removeEventListener(EVENT, anwenden);
  }, []);

  return (
    <section
      aria-labelledby={titel ? id : undefined}
      aria-label={titel ? undefined : wb.kontakt.anfahrt}
    >
      {titel && (
        <h2 id={id} className="h2 text-night">
          {titel}
        </h2>
      )}
      {intro && <p className="lead mt-5">{intro}</p>}

      <div
        className={`overflow-hidden rounded-lg border border-rule ${titel || intro ? "mt-9" : ""}`}
      >
        {extern ? (
          <iframe
            src={EMBED}
            title={`Google-Maps-Karte mit dem Standort der Praxis, ${praxis.adresse.strasse}, ${praxis.adresse.plz} ${praxis.adresse.ort}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="block h-[24rem] w-full border-0 sm:h-[30rem]"
          />
        ) : (
          <div className="relative aspect-16/10 w-full sm:aspect-2/1">
            <Image
              src="/bilder/karte-praxis.webp"
              alt={wb.kontakt.kartenAlt}
              fill
              sizes="(min-width: 1024px) 76vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col gap-x-8 gap-y-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.8125rem] text-ink-soft">
          {extern ? (
            <>{wb.kontakt.interaktivGoogle}</>
          ) : (
            <>
              {wb.kontakt.attribution}{" "}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                OpenStreetMap-Mitwirkende
              </a>
              {wb.kontakt.attributionEigen}
            </>
          )}
        </p>

        {bereit && !extern && (
          <button
            type="button"
            onClick={() => setzen(true)}
            className="inline-flex min-h-12 shrink-0 items-center text-[0.9375rem] font-medium text-petrol underline underline-offset-4"
          >
            {wb.kontakt.karteLaden}
          </button>
        )}

        {extern && (
          <Link
            href="/datenschutz#einwilligung"
            className="inline-flex min-h-12 shrink-0 items-center text-[0.9375rem] text-ink-soft underline underline-offset-4 hover:text-night"
          >
            {wb.kontakt.widerrufen}
          </Link>
        )}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        {/* Route funktioniert ohne Einwilligung: Der Link öffnet extern,
            es wird nichts in diese Seite eingebettet. */}
        <a
          href={ROUTE}
          target="_blank"
          rel="noopener noreferrer"
          className="press inline-flex min-h-13 items-center justify-center gap-2.5 rounded-md bg-night px-7 font-semibold text-white transition-colors hover:bg-night-deep"
        >
          {wb.kontakt.routePlanen}
          <Pfeil size={19} />
        </a>

        <address className="not-italic leading-relaxed text-ink-soft">
          {praxis.adresse.strasse}, {praxis.adresse.plz} {praxis.adresse.ort}
        </address>
      </div>
    </section>
  );
}
