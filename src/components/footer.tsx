"use client";

import Link from "next/link";
import { praxis, notfall } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";
import { useSprache } from "@/lib/i18n";

/**
 * Footer, übersetzbar. Die Rechtsseiten (Impressum, Datenschutz,
 * Barrierefreiheit) behalten bewusst ihre deutschen Titel — die Seiten
 * dahinter sind deutsch, und ein übersetzter Linktext würde etwas
 * versprechen, das die Zielseite nicht hält.
 */
export function Footer() {
  const { wb } = useSprache();
  const zeiten = gruppierteZeiten();

  // Gruppierte Tage („Mo, Di") in die gewählte Sprache übertragen: Die
  // Gruppen kommen mit deutschen Kürzeln aus der Logik; hier werden sie
  // über den Index zurückübersetzt.
  const de = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const uebertrage = (tage: string) =>
    tage
      .split(", ")
      .map((t) => wb.wochentageKurz[de.indexOf(t)] ?? t)
      .join(", ");

  return (
    <footer className="bg-night-deep text-white">
      <div className="bg-alert">
        <div className="container-page flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">
            {wb.leiste.notfall}: 112 · {wb.leiste.bereitschaft}: 116 117
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={notfall.lebensbedrohlich.href}
              className="press num inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-[1.0625rem] font-semibold text-alert"
            >
              {notfall.lebensbedrohlich.nummer}
            </a>
            <a
              href={notfall.bereitschaft.href}
              className="press num inline-flex min-h-12 items-center justify-center rounded-md border border-white/50 px-6 text-[1.0625rem] font-semibold text-white"
            >
              {notfall.bereitschaft.nummer}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-12 py-16 md:grid-cols-[5fr_4fr_3fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="mark h-10 w-10 text-sage" />
            <p className="font-serif text-[1.375rem]">{praxis.nameKurz}</p>
          </div>
          <p className="mt-2 text-[0.9375rem] text-sage">{wb.start.eyebrow}</p>
          <address className="mt-6 not-italic leading-relaxed text-white/85">
            {praxis.adresse.strasse}
            <br />
            {praxis.adresse.plz} {praxis.adresse.ort}
          </address>
          <a
            href={praxis.telefonHref}
            className="num mt-4 inline-flex min-h-12 items-center text-[1.3125rem] font-semibold underline-offset-4 hover:underline"
          >
            {praxis.telefon}
          </a>
        </div>

        <div>
          <h2 className="label text-sage">{wb.sprechzeiten.titel}</h2>
          <dl className="mt-5 space-y-3">
            {zeiten.map((g) => (
              <div key={g.tage} className="flex gap-5">
                <dt className="w-20 shrink-0 font-semibold">{uebertrage(g.tage)}</dt>
                <dd className="num text-white/85">
                  {g.zeiten.map((z) => (
                    <span key={z.von} className="block">
                      {z.von} – {z.bis}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
            <div className="flex gap-5">
              <dt className="w-20 shrink-0 font-semibold">
                {wb.wochentageKurz[5]}, {wb.wochentageKurz[6]}
              </dt>
              <dd className="text-white/85">{wb.sprechzeiten.geschlossen}</dd>
            </div>
          </dl>
        </div>

        <nav aria-label={wb.nav.patientenservice}>
          <h2 className="label text-sage">{wb.nav.patientenservice}</h2>
          <ul className="mt-5 space-y-1 text-white/85">
            {[
              { href: "/leistungen", label: wb.nav.leistungen },
              { href: "/praxis", label: wb.nav.praxisTeam },
              { href: "/patientenservice", label: wb.nav.patientenservice },
              { href: "/patientenservice/termin", label: wb.leiste.termin },
              { href: "/patientenservice/rezept", label: wb.service.rezeptTitel },
              { href: "/patientenservice/ueberweisung", label: wb.service.ueberweisungTitel },
              { href: "/patientenservice/notfall", label: wb.service.notfallTitel },
              { href: "/kontakt", label: wb.nav.kontaktAnfahrt },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-flex min-h-12 items-center">
                  <span className="ulink">{l.label}</span>
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link href="/impressum" className="inline-flex min-h-12 items-center">
                <span className="ulink">Impressum</span>
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="inline-flex min-h-12 items-center">
                <span className="ulink">Datenschutz</span>
              </Link>
            </li>
            <li>
              <Link href="/barrierefreiheit" className="inline-flex min-h-12 items-center">
                <span className="ulink">Barrierefreiheit</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/12">
        <div className="container-page py-6">
          <p className="text-[0.875rem] text-white/65">
            {praxis.name}, {praxis.adresse.ort}.
          </p>
        </div>
      </div>
    </footer>
  );
}
