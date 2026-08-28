"use client";

import Image from "next/image";
import { useSprache } from "@/lib/i18n";
import { waLink } from "@/lib/whatsapp";
import { praxis } from "@/data/praxis";
import { Telefon } from "@/components/icons";

/**
 * WhatsApp-Glyphe (Font Awesome Free 6, CC BY 4.0, unverändert) — das
 * offizielle Symbol, klein und im offiziellen Grün auf dem Bild, damit
 * der Kanal sofort erkennbar ist. Die Sektion selbst bleibt in der
 * Praxis-Farbwelt; kein flächiges WhatsApp-Grün.
 */
function WhatsAppGlyphe({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 448 512" width={size} height={size} aria-hidden="true" focusable={false} fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

/**
 * WhatsApp-Kontaktsektion — als Vorschau, bis die Praxisnummer feststeht.
 *
 * Ohne konfigurierte Nummer (`nummer === null`) trägt die Sektion einen
 * sichtbaren Vorschau-Vermerk, und der WhatsApp-Knopf ist bewusst kein
 * Link: Nichts wird an eine erfundene Nummer gesendet. Mit Nummer öffnet
 * er einen einfachen wa.me-Link mit der vorbelegten Rückrufbitte — ohne
 * Skripte, ohne Widget, ohne medizinische Angaben.
 */
export function WhatsAppKontakt({ nummer }: { nummer: string | null }) {
  const { wb } = useSprache();
  const w = wb.whatsapp;

  return (
    <section className="border-t border-rule bg-paper" aria-labelledby="whatsapp-titel">
      <div className="container-page grid gap-10 py-16 lg:grid-cols-[6fr_6fr] lg:items-center lg:gap-16 lg:py-24">
        <div>
          <h2 id="whatsapp-titel" className="h2 scroll-mt-28 text-night">
            {w.ueberschrift}
          </h2>
          <p className="mt-5 max-w-[58ch] text-[1.0625rem]">{w.text}</p>

          {/* Der Rahmen-Hinweis ist der wichtigste Text der Sektion und
              steht deshalb vor den Knöpfen, nicht im Kleingedruckten. */}
          <div className="mt-7 max-w-[60ch] rounded-md border-l-4 border-petrol bg-salbei/60 p-5">
            <p className="text-[0.9375rem] leading-relaxed text-ink">{w.hinweis}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {nummer ? (
              <a
                href={waLink(nummer, w.nachrichtVorbelegt)}
                target="_blank"
                rel="noopener noreferrer"
                className="press inline-flex min-h-13 items-center gap-3 rounded-md bg-petrol px-7 text-[1.0625rem] font-semibold text-white transition-colors hover:bg-wald"
              >
                <WhatsAppGlyphe />
                {w.oeffnen}
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex min-h-13 cursor-not-allowed items-center gap-3 rounded-md bg-petrol/45 px-7 text-[1.0625rem] font-semibold text-white"
              >
                <WhatsAppGlyphe />
                {w.oeffnen}
              </span>
            )}
            <a
              href={praxis.telefonHref}
              className="press inline-flex min-h-13 items-center gap-2.5 rounded-md border border-night/30 px-7 text-[1.0625rem] font-semibold text-night transition-colors hover:border-night hover:bg-night/5"
            >
              <Telefon size={19} />
              {w.lieberAnrufen}
            </a>
          </div>

          {!nummer && (
            <p className="mt-4 max-w-[58ch] text-[0.9375rem] font-medium text-petrol">
              {w.vorschauHinweis}
            </p>
          )}
        </div>

        <figure>
          <div className="relative overflow-hidden rounded-lg bg-rule/40">
            <Image
              src="/bilder/whatsapp-vorschau.webp"
              alt={w.bildAlt}
              width={1800}
              height={1004}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="h-auto w-full"
            />
            <span
              aria-hidden="true"
              className="absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-12px_rgba(16,47,45,0.6)]"
            >
              <WhatsAppGlyphe size={26} />
            </span>
          </div>
          <figcaption className="mt-3 text-[0.875rem] text-ink-soft">
            {w.bildunterschrift}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
