"use client";

import { notfall, praxis } from "@/data/praxis";
import { useSprache } from "@/lib/i18n";
import { Telefon } from "@/components/icons";

/**
 * Gemeinsame Bausteine der Serviceseiten für Rezept und Überweisung.
 *
 * Beide Seiten folgen derselben Dramaturgie: Erst die Erwartungen (wie
 * lange, was brauche ich, was passiert mit den Daten), dann das Formular,
 * dann der Notfallweg. Wer weiß, was ihn erwartet, ruft nicht nach zwei
 * Stunden verunsichert an — und wer es eilig hat, sieht sofort, dass dieses
 * Formular der falsche Weg ist.
 */

export function BevorSieAusfuellen({ punkte }: { punkte: { titel: string; text: string }[] }) {
  const { wb } = useSprache();
  return (
    <section className="bg-night text-white" aria-labelledby="ablauf">
      <div className="container-page py-14 lg:py-16">
        <h2 id="ablauf" className="label text-sage-bright">
          {wb.anfrage.bevorSieAusfuellen}
        </h2>
        <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {punkte.map((p) => (
            <div key={p.titel}>
              <p className="font-semibold">{p.titel}</p>
              <p className="mt-2 text-[0.9375rem] text-white/75">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Was mit den Angaben geschieht, plus Telefonweg. */
export function DatenHinweis() {
  const { wb } = useSprache();
  return (
    <div>
      <h2 className="h2 text-night">{wb.anfrage.datenTitel}</h2>
      <div className="mt-7 flex max-w-[65ch] flex-col gap-5 text-[1.0625rem]">
        <p>{wb.anfrage.datenText1}</p>
        <p>{wb.anfrage.datenText2}</p>
        <p className="text-ink-soft">{wb.anfrage.datenText3}</p>
      </div>

      <a
        href={praxis.telefonHref}
        className="press mt-9 inline-flex min-h-13 items-center gap-3 rounded-md border border-night/25 px-6 font-semibold text-night transition-colors hover:border-night"
      >
        <Telefon size={19} />
        <span className="num">{praxis.telefon}</span>
      </a>
    </div>
  );
}

/** Notfallhinweis als eigener, farblich abgesetzter Block: Er ist der
 *  wichtigste Inhalt jeder Formularseite. */
export function NotfallAside() {
  const { wb } = useSprache();
  return (
    <aside className="h-fit rounded-md border-2 border-alert p-7" aria-labelledby="notfall">
      <h2 id="notfall" className="text-[1.3125rem] font-semibold text-alert">
        {wb.anfrage.notfallAsideTitel}
      </h2>
      <p className="mt-4 text-ink-soft">{wb.anfrage.notfallAsideText}</p>

      <ul className="mt-7 flex flex-col gap-6">
        {[notfall.lebensbedrohlich, notfall.bereitschaft].map((n) => (
          <li key={n.nummer}>
            <a
              href={n.href}
              className="num inline-flex min-h-12 items-center text-[1.75rem] font-semibold text-alert underline-offset-4 hover:underline"
            >
              {n.nummer}
            </a>
            <p className="mt-1 font-medium text-night">
              {n.nummer === "112" ? wb.notfall.lebensbedrohlich : wb.notfall.bereitschaft}
            </p>
            <p className="text-[0.9375rem] text-ink-soft">
              {n.nummer === "112" ? wb.notfall.lebensbedrohlichHinweis : wb.notfall.bereitschaftHinweis}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-7 border-t border-rule pt-5 text-[0.875rem] text-ink-soft">
        {wb.anfrage.keineBeratung}
      </p>
    </aside>
  );
}
