"use client";

import Link from "next/link";
import { praxis } from "@/data/praxis";
import { useSprache } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { WhatsAppKontakt } from "@/components/whatsapp-kontakt";
import { Kalender, Rezept, Pfeil, Telefon, Uhr, Menschen } from "@/components/icons";

/**
 * Inhalt der Patientenservice-Übersicht — als Client-Komponente, damit
 * die Texte der Sprachauswahl folgen. Diese Seite ist der übersetzte
 * Vorzeigefall: Navigation, Leisten und dieser Bereich wechseln komplett,
 * die übrigen Seiten folgen nach der muttersprachlichen Prüfung (der
 * Banner unter dem Header sagt das ehrlich dazu).
 *
 * `anbieter` und `whatsappNummer` kommen aus dem Server-Wrapper, weil
 * beide aus Umgebungsvariablen gelesen werden.
 */
export function PatientenserviceInhalt({
  anbieter,
  whatsappNummer,
}: {
  anbieter: string | null;
  whatsappNummer: string | null;
}) {
  const { wb } = useSprache();
  const s = wb.service;

  const wege = [
    {
      Icon: Kalender,
      titel: s.terminTitel,
      href: "/patientenservice/termin",
      text: s.terminText,
      aktion: anbieter ? wb.nav.terminBuchen : s.terminAktion,
      kante: "bg-night",
      farbe: "text-night",
    },
    {
      Icon: Rezept,
      titel: s.rezeptTitel,
      href: "/patientenservice/rezept",
      text: s.rezeptText,
      aktion: s.rezeptAktion,
      kante: "bg-sage",
      farbe: "text-petrol",
    },
    {
      Icon: Menschen,
      titel: s.ueberweisungTitel,
      href: "/patientenservice/ueberweisung",
      text: s.ueberweisungText,
      aktion: s.ueberweisungAktion,
      kante: "bg-petrol",
      farbe: "text-petrol",
    },
  ] as const;

  return (
    <>
      <header className="border-b border-rule">
        <div className="container-page flex flex-col gap-5 pt-10 pb-8 lg:flex-row lg:items-end lg:justify-between lg:pt-12 lg:pb-9">
          <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.4rem)] leading-[1.05] tracking-[-0.02em] text-night">
            {s.titel}
          </h1>
          <p className="max-w-md text-[1.0625rem] text-ink-soft lg:pb-1.5 lg:text-right">
            {s.einleitung}{" "}
            <a href={praxis.telefonHref} className="num font-semibold text-petrol underline underline-offset-2">
              {praxis.telefon}
            </a>
          </p>
        </div>
      </header>

      <section className="container-page pt-10 pb-16 lg:pt-12 lg:pb-24" aria-label={s.titel}>
        <div className="grid gap-8 lg:grid-cols-3">
          {wege.map((w, i) => (
            <Reveal key={w.href} delay={i * 80} className="h-full">
              <article className="relative flex h-full flex-col overflow-hidden rounded-md border border-rule bg-paper p-8">
                <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${w.kante}`} />
                <div className="flex items-start justify-between">
                  <w.Icon size={28} className={w.farbe} />
                  <span aria-hidden="true" className={`nr-gross num text-[1.6rem] opacity-60 ${w.farbe}`}>
                    0{i + 1}
                  </span>
                </div>
                <h2 className="mt-5 font-serif text-[1.625rem] font-normal text-night">{w.titel}</h2>
                <p className="mt-3 flex-1 text-ink-soft">{w.text}</p>
                <Link
                  href={w.href}
                  className="press mt-7 inline-flex min-h-13 items-center justify-center gap-2.5 rounded-md bg-night px-6 font-semibold text-white transition-colors hover:bg-night-deep"
                >
                  {w.aktion}
                  <Pfeil size={19} />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-ink-soft">{s.fuerAllesAndere}</p>
      </section>

      <WhatsAppKontakt nummer={whatsappNummer} />

      <section className="border-t border-rule bg-paper" aria-labelledby="weitere">
        <div className="container-page section">
          <h2 id="weitere" className="h2 text-night">
            {s.gutZuWissen}
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <Link
              href="/patientenservice/praxisbesuch"
              className="press group flex flex-col gap-3 border-t-2 border-night pt-6"
            >
              <span className="flex items-center gap-3 text-[1.3125rem] font-semibold text-night">
                <Uhr size={22} className="text-petrol" />
                {s.praxisbesuchTitel}
              </span>
              <span className="text-ink-soft">{s.praxisbesuchText}</span>
              <span className="inline-flex items-center gap-2 font-semibold text-petrol underline-offset-4 group-hover:underline">
                {s.mehrErfahren}
                <Pfeil size={18} />
              </span>
            </Link>

            <Link
              href="/patientenservice/notfall"
              className="press group flex flex-col gap-3 border-t-2 border-alert pt-6"
            >
              <span className="flex items-center gap-3 text-[1.3125rem] font-semibold text-night">
                <Telefon size={22} className="text-alert" />
                {s.notfallTitel}
              </span>
              <span className="text-ink-soft">{s.notfallText}</span>
              <span className="inline-flex items-center gap-2 font-semibold text-petrol underline-offset-4 group-hover:underline">
                {s.mehrErfahren}
                <Pfeil size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
