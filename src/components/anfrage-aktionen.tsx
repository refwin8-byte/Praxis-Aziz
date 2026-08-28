"use client";

import Link from "next/link";
import { praxis } from "@/data/praxis";
import { useSprache } from "@/lib/i18n";
import { Rezept, Telefon, Pfeil, Kalender, Menschen } from "@/components/icons";

/**
 * Der Patientenschnellzugriff auf der Startseite: Termin, Folgerezept,
 * Überweisung — als drei helle Karten auf der Waldgrün-Fläche, wie im
 * freigegebenen Styleframe. Die Zeilenform davor wirkte auf der großen
 * Fläche unübersichtlich: Nummer, Icon, Text und Button lagen zu weit
 * auseinander. Karten bündeln jeden Weg an einem Ort, die Wegfarbe sitzt
 * als obere Kante (Termin = Tiefgrün, Folgerezept = Blattgrün,
 * Überweisung = Espelkamp-Grün — dieselbe Logik wie im Patientenservice).
 *
 * Die Formulare selbst stehen bewusst nicht hier: Wer ein Rezept anfordert,
 * soll vorher lesen, was er bereithalten muss und wie lange es dauert.
 */

export function AnfrageAktionen({ anbieter }: { anbieter: string | null }) {
  const { wb } = useSprache();
  const buchung = anbieter;

  const wege = [
    {
      Icon: Kalender,
      titel: buchung ? wb.nav.terminBuchen : wb.termin.titel,
      text: wb.service.terminText,
      href: "/patientenservice/termin",
      aktion: buchung ? wb.nav.terminBuchen : wb.service.terminAktion,
      kante: "bg-night",
      farbe: "text-night",
    },
    {
      Icon: Rezept,
      titel: wb.rezept.titel,
      text: wb.service.rezeptText,
      href: "/patientenservice/rezept",
      aktion: wb.service.rezeptAktion,
      kante: "bg-sage",
      farbe: "text-petrol",
    },
    {
      Icon: Menschen,
      titel: wb.ueberweisung.titel,
      text: wb.service.ueberweisungText,
      href: "/patientenservice/ueberweisung",
      aktion: wb.service.ueberweisungAktion,
      kante: "bg-petrol",
      farbe: "text-petrol",
    },
  ] as const;

  return (
    <div className="mt-12">
      <ul className="grid gap-6 lg:grid-cols-3 lg:gap-8">
        {wege.map((w, i) => (
          <li key={w.titel} className="h-full">
            <Link
              href={w.href}
              className="press group relative flex h-full flex-col overflow-hidden rounded-md bg-paper p-7 text-ink"
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${w.kante}`} />
              <span className="flex items-start justify-between">
                <w.Icon size={26} className={w.farbe} />
                <span aria-hidden="true" className={`nr-gross num text-[1.5rem] opacity-50 ${w.farbe}`}>
                  0{i + 1}
                </span>
              </span>
              <span className="mt-4 block font-serif text-[1.375rem] leading-snug text-night">
                {w.titel}
              </span>
              <span className="mt-2 block flex-1 text-[0.9375rem] text-ink-soft">{w.text}</span>
              <span className="mt-6 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-night px-5 font-semibold text-white transition-colors group-hover:bg-night-deep">
                {w.aktion}
                <Pfeil size={18} />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Der vierte Weg, bewusst schlichter: das Telefon. */}
      <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl">
          <span className="block text-[1.125rem] font-semibold">
            {wb.start.telefonTitel}
          </span>
          <span className="mt-1 block text-[0.9375rem] text-white/75">
            {wb.start.telefonText}
          </span>
        </p>
        <a
          href={praxis.telefonHref}
          className="press num inline-flex min-h-13 shrink-0 items-center gap-3 rounded-md bg-white px-7 text-[1.0625rem] font-semibold text-night transition-colors hover:bg-salbei"
        >
          <Telefon size={19} />
          {praxis.telefon}
        </a>
      </div>
    </div>
  );
}
