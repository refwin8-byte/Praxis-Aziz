import Link from "next/link";
import { praxis } from "@/data/praxis";
import { Rezept, Telefon, Pfeil } from "@/components/icons";

/**
 * Die drei Wege auf der Startseite: Rezept, Überweisung, Telefon.
 *
 * Rezept und Überweisung führen auf die Formularseite dieser Website — nicht
 * mehr auf die Formulare der alten Seite. Das Formular selbst steht bewusst
 * nicht hier: Wer ein Rezept anfordert, soll vorher lesen, was er
 * bereithalten muss und wie lange es dauert. Ein Formular mitten auf der
 * Startseite überspringt das.
 */

const wege = [
  {
    Icon: Rezept,
    titel: "Folgerezept anfordern",
    text: "Für Medikamente, die Sie regelmäßig einnehmen. Halten Sie Name, Dosierung und Packungsgröße bereit.",
    href: "/rezept-und-ueberweisung#rezept",
    aktion: "Zum Formular",
  },
  {
    Icon: Rezept,
    titel: "Überweisung anfordern",
    text: "Für den Besuch bei einer Fachärztin oder einem Facharzt. Fachrichtung und Grund genügen.",
    href: "/rezept-und-ueberweisung#ueberweisung",
    aktion: "Zum Formular",
  },
] as const;

export function AnfrageAktionen() {
  return (
    <div className="mt-14">
      <ul className="rule-list border-t border-white/15">
        {wege.map((w) => (
          <li key={w.titel} className="border-white/15">
            <Link
              href={w.href}
              className="press group flex min-h-14 flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-8"
            >
              <w.Icon size={26} className="shrink-0 text-sage" />
              <span className="flex-1">
                <span className="block text-[1.3125rem] font-semibold">{w.titel}</span>
                <span className="mt-1.5 block text-[0.9375rem] text-white/70">{w.text}</span>
              </span>
              <span className="inline-flex min-h-12 shrink-0 items-center gap-2.5 rounded-md border border-white/35 px-6 font-semibold transition-colors group-hover:border-sage group-hover:text-sage">
                {w.aktion}
                <Pfeil size={19} />
              </span>
            </Link>
          </li>
        ))}

        <li className="border-white/15">
          <div className="flex min-h-14 flex-col gap-4 py-7 sm:flex-row sm:items-center sm:gap-8">
            <Telefon size={26} className="shrink-0 text-sage" />
            <span className="flex-1">
              <span className="block text-[1.3125rem] font-semibold">
                Termin, Befund oder Rückfrage
              </span>
              <span className="mt-1.5 block text-[0.9375rem] text-white/70">
                Alles Weitere klären wir am Telefon. Während der Sprechzeiten
                ist die Anmeldung besetzt.
              </span>
            </span>
            <a
              href={praxis.telefonHref}
              className="press num inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-white px-6 font-semibold text-night transition-colors hover:bg-sage"
            >
              {praxis.telefon}
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
