"use client";

import Image from "next/image";
import { praxis, notfall } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";
import { Oeffnungsstatus } from "@/components/oeffnungsstatus";
import { Karte } from "@/components/karte";
import { Reveal } from "@/components/reveal";
import { WhatsAppKontakt } from "@/components/whatsapp-kontakt";
import { useSprache } from "@/lib/i18n";
import { Telefon, Pin } from "@/components/icons";

/** Kontakt & Anfahrt, übersetzbar. `whatsappNummer` kommt vom Server. */
export function KontaktInhalt({ whatsappNummer }: { whatsappNummer: string | null }) {
  const { wb } = useSprache();
  const k = wb.kontakt;
  const zeiten = gruppierteZeiten();
  const deTage = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const uebertrage = (tage: string) =>
    tage.split(", ").map((x) => wb.wochentageKurz[deTage.indexOf(x)] ?? x).join(", ");

  return (
    <>
      <header className="border-b border-rule">
        <div className="container-page grid gap-10 pt-10 pb-10 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-14 lg:pb-14">
          <div>
            <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.05] tracking-[-0.02em] text-night">
              {k.titel}
            </h1>

            <div className="mt-7 flex items-center gap-5">
              <Telefon size={26} className="shrink-0 text-petrol" aria-hidden="true" />
              <div>
                <a
                  href={praxis.telefonHref}
                  className="num inline-flex min-h-12 items-center text-[clamp(1.9rem,3.5vw,2.6rem)] font-semibold leading-none text-night underline-offset-8 hover:underline"
                >
                  {praxis.telefon}
                </a>
                <Oeffnungsstatus className="mt-2" />
              </div>
            </div>

            <div className="mt-7 flex items-start gap-5 border-t border-rule pt-6">
              <Pin size={24} className="mt-1 shrink-0 text-petrol" aria-hidden="true" />
              <address className="not-italic text-[1.125rem] leading-relaxed text-night">
                {praxis.name}, {praxis.adresse.strasse}, {praxis.adresse.plz} {praxis.adresse.ort}
              </address>
            </div>
          </div>

          <div>
            <a href="#anfahrt-karte" className="press block" aria-label={k.anfahrt}>
              <Reveal className="reveal-bild">
                <div className="relative aspect-16/10 overflow-hidden rounded-lg border border-rule bg-rule/40">
                  <Image
                    src="/bilder/karte-praxis.webp"
                    alt={k.kartenAlt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </a>
            <p className="mt-3 text-[0.875rem] text-ink-soft">{k.kartenbildSatz}</p>
          </div>
        </div>
      </header>

      <div className="container-page section grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
        <div>
          <div>
            <h2 className="h2 text-night">{wb.sprechzeiten.titel}</h2>
            <dl className="mt-7 rule-list border-t border-rule">
              {zeiten.map((g) => (
                <div key={g.tage} className="flex justify-between gap-6 py-4">
                  <dt className="font-semibold text-night">{uebertrage(g.tage)}</dt>
                  <dd className="num text-right">
                    {g.zeiten.map((z) => (
                      <span key={z.von} className="block">
                        {z.von} – {z.bis}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
              <div className="flex justify-between gap-6 py-4">
                <dt className="font-semibold text-night">
                  {wb.wochentageKurz[5]}, {wb.wochentageKurz[6]}
                </dt>
                <dd className="text-ink-soft">{wb.sprechzeiten.geschlossen}</dd>
              </div>
            </dl>
            <p className="mt-5 text-[0.9375rem] text-ink-soft">{k.sprechzeitenFeiertage}</p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="rounded-md bg-paper p-7">
            <h2 className="text-[1.1875rem] font-semibold text-night">{k.emailTitel}</h2>
            <a
              href={`mailto:${praxis.email}`}
              className="mt-3 inline-flex min-h-12 items-center break-all font-medium text-petrol underline-offset-4 hover:underline"
            >
              {praxis.email}
            </a>
            <p className="mt-2 text-[0.9375rem] text-ink-soft">{k.emailWarnung}</p>
          </div>

          <div className="rounded-md border-2 border-alert p-7">
            <h2 className="text-[1.1875rem] font-semibold text-alert">{k.ausserhalbTitel}</h2>
            <ul className="mt-6 flex flex-col gap-6">
              <li>
                <a
                  href={notfall.lebensbedrohlich.href}
                  className="num inline-flex min-h-12 items-center text-[1.75rem] font-semibold text-alert underline-offset-4 hover:underline"
                >
                  {notfall.lebensbedrohlich.nummer}
                </a>
                <p className="mt-1 font-medium text-night">{wb.notfall.lebensbedrohlich}</p>
                <p className="text-[0.9375rem] text-ink-soft">{wb.notfall.lebensbedrohlichHinweis}</p>
              </li>
              <li>
                <a
                  href={notfall.bereitschaft.href}
                  className="num inline-flex min-h-12 items-center text-[1.75rem] font-semibold text-alert underline-offset-4 hover:underline"
                >
                  {notfall.bereitschaft.nummer}
                </a>
                <p className="mt-1 font-medium text-night">{wb.notfall.bereitschaft}</p>
                <p className="text-[0.9375rem] text-ink-soft">{wb.notfall.bereitschaftHinweis}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <WhatsAppKontakt nummer={whatsappNummer} />

      <div className="border-t border-rule bg-paper/60">
        <div className="container-page section">
          <Karte />
        </div>
      </div>
    </>
  );
}
