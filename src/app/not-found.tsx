import Link from "next/link";
import { praxis } from "@/data/praxis";
import { Telefon, Pfeil } from "@/components/icons";

export default function NichtGefunden() {
  return (
    <div className="container-page section">
      <div className="max-w-2xl">
        <p className="label text-petrol">Fehler 404</p>
        <h1 className="display mt-5 text-night">Diese Seite gibt es nicht.</h1>
        <p className="lead mt-6">
          Möglicherweise hat sich die Adresse geändert. Diese Wege führen zum
          Ziel:
        </p>

        <ul className="mt-9 rule-list border-t border-rule">
          {[
            { href: "/", label: "Startseite" },
            { href: "/leistungen", label: "Leistungen" },
            { href: "/rezept-und-ueberweisung", label: "Rezept und Überweisung" },
            { href: "/kontakt", label: "Kontakt und Anfahrt" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="press flex min-h-14 items-center justify-between gap-4 py-4 text-[1.0625rem] font-medium text-night"
              >
                {l.label}
                <Pfeil size={20} className="text-petrol" />
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={praxis.telefonHref}
          className="press mt-10 inline-flex min-h-14 items-center gap-3 rounded-md bg-night px-7 text-[1.0625rem] font-semibold text-white transition-colors hover:bg-night-deep"
        >
          <Telefon size={20} />
          <span className="num">{praxis.telefon}</span>
        </a>
      </div>
    </div>
  );
}
