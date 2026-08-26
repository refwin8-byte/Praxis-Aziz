"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { lesen, setzen, EVENT } from "@/lib/consent";

/**
 * Einwilligungsbanner.
 *
 * Gestaltungsregeln, die hier bewusst eingehalten werden:
 *
 * - „Ablehnen" ist genauso leicht erreichbar und genauso groß wie
 *   „Akzeptieren". Ein hervorgehobener Zustimmen-Knopf neben einem blassen
 *   Ablehnen-Link ist ein Dark Pattern und macht die Einwilligung unwirksam.
 * - Kein Overlay, das die Seite blockiert. Wer nur die Telefonnummer sucht,
 *   muss sie lesen können, ohne vorher etwas zu entscheiden.
 * - Der Banner erscheint unten und nimmt nur so viel Platz wie nötig.
 * - Kein automatisches Schließen, kein erneutes Erscheinen nach Ablehnung.
 *
 * Der Banner wird erst nach dem Mount gerendert. Die Seite ist statisch
 * vorgerendert; serverseitig ist die gespeicherte Entscheidung nicht bekannt,
 * und ein kurz aufblitzender Banner bei bereits getroffener Wahl wäre ein
 * Fehler.
 */
export function ConsentBanner() {
  const [sichtbar, setSichtbar] = useState(false);
  const [einstellungen, setEinstellungen] = useState(false);
  const [extern, setExtern] = useState(false);
  const ersterKnopf = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (lesen() === null) setSichtbar(true);

    // Auf Widerruf von der Datenschutzseite reagieren.
    const beiAenderung = () => setSichtbar(lesen() === null);
    window.addEventListener(EVENT, beiAenderung);
    return () => window.removeEventListener(EVENT, beiAenderung);
  }, []);

  // Wenn die Einstellungen geöffnet werden, Fokus hineinsetzen.
  useEffect(() => {
    if (einstellungen) ersterKnopf.current?.focus();
  }, [einstellungen]);

  if (!sichtbar) return null;

  const entscheiden = (wert: boolean) => {
    setzen(wert);
    setSichtbar(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-titel"
      aria-describedby="consent-text"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-rule bg-paper shadow-[0_-8px_32px_-12px_rgba(18,38,43,0.18)]"
    >
      <div className="container-page py-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-[62ch]">
            <h2 id="consent-titel" className="text-[1.1875rem] font-semibold text-night">
              Externe Inhalte
            </h2>
            <p id="consent-text" className="mt-2.5 text-[0.9375rem] text-ink-soft">
              Diese Website nutzt keine Cookies für Werbung oder Statistik. Die
              Karte sehen Sie ohnehin, sie liegt als Bild auf unserem Server.
              Nur die <em>interaktive</em> Karte zum Zoomen kommt von Google
              Maps und wird erst nach Ihrer Zustimmung geladen.{" "}
              <Link
                href="/datenschutz"
                className="font-medium text-petrol underline underline-offset-2"
              >
                Datenschutzerklärung
              </Link>
            </p>
          </div>

          {/* Beide Entscheidungen gleich gewichtet: gleiche Größe, gleiche
              Position, kein optischer Vorrang für das Akzeptieren.

              Auf schmalen Geräten stehen sie nebeneinander statt gestapelt.
              Gestapelt beanspruchte der Banner die halbe Bildschirmhöhe, und
              wer nur die Telefonnummer sucht, soll die Seite sehen können. */}
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => entscheiden(false)}
                className="press inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-night/30 px-6 font-semibold text-night transition-colors hover:border-night sm:flex-initial"
              >
                Ablehnen
              </button>
              <button
                type="button"
                onClick={() => entscheiden(true)}
                className="press inline-flex min-h-12 flex-1 items-center justify-center rounded-md border border-night bg-night px-6 font-semibold text-white transition-colors hover:bg-night-deep sm:flex-initial"
              >
                Akzeptieren
              </button>
            </div>
            <button
              type="button"
              onClick={() => setEinstellungen((v) => !v)}
              aria-expanded={einstellungen}
              aria-controls="consent-einstellungen"
              className="inline-flex min-h-12 items-center justify-center px-2 text-[0.9375rem] font-medium text-ink-soft underline underline-offset-4 hover:text-night"
            >
              Einstellungen
            </button>
          </div>
        </div>

        {einstellungen && (
          <div id="consent-einstellungen" className="mt-7 border-t border-rule pt-7">
            <ul className="flex flex-col gap-6">
              <li className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex min-w-[13rem] items-center gap-3">
                  <input
                    type="checkbox"
                    checked
                    disabled
                    readOnly
                    id="kat-notwendig"
                    className="h-5 w-5 accent-night"
                  />
                  <label htmlFor="kat-notwendig" className="font-semibold text-night">
                    Notwendig
                  </label>
                </div>
                <p className="text-[0.9375rem] text-ink-soft">
                  Speichert ausschließlich Ihre Entscheidung auf dieser Seite,
                  damit Sie nicht bei jedem Besuch erneut gefragt werden. Ohne
                  diese Speicherung wäre die Auswahl wirkungslos, deshalb ist
                  sie nicht abwählbar.
                </p>
              </li>

              <li className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex min-w-[13rem] items-center gap-3">
                  <input
                    type="checkbox"
                    id="kat-extern"
                    checked={extern}
                    onChange={(e) => setExtern(e.target.checked)}
                    className="h-5 w-5 accent-night"
                  />
                  <label htmlFor="kat-extern" className="font-semibold text-night">
                    Externe Inhalte
                  </label>
                </div>
                <p className="text-[0.9375rem] text-ink-soft">
                  Die interaktive Karte zum Zoomen und Verschieben wird von
                  Google Maps geladen. Dabei wird Ihre IP-Adresse an Google
                  übertragen, auch in die USA. Ohne Zustimmung sehen Sie
                  stattdessen eine statische Karte von unserem eigenen
                  Server — mit derselben Adresse und derselben Marke.
                </p>
              </li>
            </ul>

            <p className="mt-6 text-[0.9375rem] text-ink-soft">
              Statistik- und Marketingdienste sind auf dieser Website nicht
              eingebunden. Deshalb gibt es dafür auch keine Auswahl.
            </p>

            <button
              ref={ersterKnopf}
              type="button"
              onClick={() => entscheiden(extern)}
              className="press mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-night px-7 font-semibold text-white transition-colors hover:bg-night-deep"
            >
              Auswahl speichern
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
