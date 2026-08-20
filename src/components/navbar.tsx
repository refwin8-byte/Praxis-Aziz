"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { praxis } from "@/data/praxis";
import { Telefon, Menue, Schliessen } from "@/components/icons";

const links = [
  { href: "/leistungen", label: "Leistungen" },
  { href: "/praxis", label: "Praxis & Team" },
  { href: "/patientenservice", label: "Patientenservice" },
  { href: "/kontakt", label: "Kontakt & Anfahrt" },
];

/**
 * `terminAktiv` kommt aus dem Layout (Server): Nur wenn ein
 * Buchungsanbieter konfiguriert ist, gibt es den „Termin buchen"-Button.
 * Ohne Anbieter bleibt das Telefon die Primäraktion — ein Buchungsknopf,
 * hinter dem keine Buchung liegt, wäre schlimmer als keiner.
 */
export function Navbar({ terminAktiv }: { terminAktiv: boolean }) {
  const [offen, setOffen] = useState(false);
  const pfad = usePathname();

  // Menü schließen, wenn die Route wechselt. Ohne das bleibt das Overlay
  // auf der Zielseite stehen.
  useEffect(() => setOffen(false), [pfad]);

  // Scroll sperren, solange das Menü offen ist.
  useEffect(() => {
    if (!offen) return;
    const vorher = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = vorher;
    };
  }, [offen]);

  // Escape schließt.
  useEffect(() => {
    if (!offen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOffen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [offen]);

  /**
   * Klick auf einen Link, der auf die Seite zeigt, auf der man schon ist.
   *
   * Ohne das passiert nichts: Der Router erkennt dieselbe Route und
   * navigiert nicht, die Seite bleibt an Ort und Stelle stehen. Wer weit
   * unten steht und aufs Logo tippt, erwartet aber, wieder oben zu landen.
   *
   * `smooth` nur, wenn keine Bewegungsreduktion gewünscht ist.
   */
  const nachObenWennSchonDa = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const ziel = e.currentTarget.getAttribute("href");
    if (ziel !== pfad) return;
    e.preventDefault();
    setOffen(false);
    const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: ruhig ? "auto" : "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-linen/94 backdrop-blur-sm">
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href="/"
          onClick={nachObenWennSchonDa}
          className="press flex min-h-12 items-center gap-3"
          aria-label={`${praxis.name}, zur Startseite`}
        >
          <span className="mark h-9 w-9 shrink-0 text-night" />
          {/* Auf schmalen Geräten nur der Name, und der ohne Umbruch: Sonst
              läuft die Zeile zweizeilig und drückt den Header auf 90 px,
              wodurch Telefon- und Menütaste ins Gedränge geraten. */}
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="whitespace-nowrap font-serif text-[1.0625rem] text-night sm:text-[1.125rem]">
              Dr. med. Adel Aziz
            </span>
            <span className="hidden text-[0.8125rem] text-ink-soft sm:block">
              Hausarztpraxis Espelkamp
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {links.map((l) => {
            // Unterseiten zählen mit: Auf /patientenservice/rezept ist
            // „Patientenservice" der aktive Bereich.
            const aktiv = pfad === l.href || pfad.startsWith(`${l.href}/`);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={nachObenWennSchonDa}
                aria-current={aktiv ? "page" : undefined}
                className={`inline-flex min-h-12 items-center px-1 text-[0.9375rem] transition-colors hover:text-petrol ${
                  aktiv ? "font-semibold text-petrol" : "text-ink"
                }`}
              >
                <span className="ulink">{l.label}</span>
              </Link>
            );
          })}
          {terminAktiv ? (
            <>
              <a
                href={praxis.telefonHref}
                className="inline-flex min-h-12 items-center gap-2 px-1 text-[0.9375rem] font-semibold text-ink transition-colors hover:text-petrol"
              >
                <Telefon size={17} />
                <span className="num">{praxis.telefon}</span>
              </a>
              <Link
                href="/patientenservice/termin"
                className="press inline-flex min-h-12 items-center rounded-md bg-night px-5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-night-deep"
              >
                Termin buchen
              </Link>
            </>
          ) : (
            <a
              href={praxis.telefonHref}
              className="press inline-flex min-h-12 items-center gap-2.5 rounded-md bg-night px-5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-night-deep"
            >
              <Telefon size={18} />
              <span className="num">{praxis.telefon}</span>
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={praxis.telefonHref}
            className="press inline-flex h-12 w-12 items-center justify-center rounded-md bg-night text-white"
            aria-label={`Praxis anrufen, ${praxis.telefon}`}
          >
            <Telefon size={21} />
          </a>
          <button
            type="button"
            onClick={() => setOffen((v) => !v)}
            className="press inline-flex h-12 w-12 items-center justify-center rounded-md border border-rule text-night"
            aria-expanded={offen}
            aria-controls="hauptmenue"
            aria-label={offen ? "Menü schließen" : "Menü öffnen"}
          >
            {offen ? <Schliessen size={22} /> : <Menue size={22} />}
          </button>
        </div>
      </div>

      {offen && (
        <nav id="hauptmenue" className="border-t border-rule bg-linen lg:hidden" aria-label="Hauptnavigation">
          <ul className="container-page rule-list py-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={nachObenWennSchonDa}
                  aria-current={pfad === l.href || pfad.startsWith(`${l.href}/`) ? "page" : undefined}
                  className="block py-4 text-[1.0625rem] font-medium text-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {terminAktiv && (
              <li>
                <Link
                  href="/patientenservice/termin"
                  onClick={nachObenWennSchonDa}
                  className="block py-4 text-[1.0625rem] font-semibold text-petrol"
                >
                  Termin buchen
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
