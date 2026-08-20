import Link from "next/link";
import { praxis } from "@/data/praxis";
import { terminBuchung } from "@/lib/termin";
import { Rezept, Telefon, Pfeil, Kalender, Menschen } from "@/components/icons";

/**
 * Der Patientenschnellzugriff auf der Startseite: Termin, Folgerezept,
 * Überweisung — die drei Anliegen, getrennt und in je einem Satz erklärt,
 * einschließlich dessen, was man bereithalten muss.
 *
 * Die Formulare selbst stehen bewusst nicht hier: Wer ein Rezept anfordert,
 * soll vorher lesen, was er bereithalten muss und wie lange es dauert. Ein
 * Formular mitten auf der Startseite überspringt das.
 */

export function AnfrageAktionen() {
  const buchung = terminBuchung();

  const wege = [
    {
      Icon: Kalender,
      titel: buchung ? "Termin buchen" : "Termin vereinbaren",
      text: buchung
        ? `Online über ${buchung.anbieter} oder telefonisch. Halten Sie Ihre Versichertenkarte bereit.`
        : "Telefonisch, damit wir die Dringlichkeit direkt einschätzen können. Halten Sie Ihre Versichertenkarte bereit.",
      href: "/patientenservice/termin",
      aktion: buchung ? "Termin buchen" : "Zum Terminweg",
    },
    {
      Icon: Rezept,
      titel: "Folgerezept anfordern",
      text: "Für Medikamente, die Sie regelmäßig einnehmen. Halten Sie Name, Wirkstärke und Packungsgröße bereit.",
      href: "/patientenservice/rezept",
      aktion: "Zum Formular",
    },
    {
      Icon: Menschen,
      titel: "Überweisung anfordern",
      text: "Für den Besuch bei einer Fachärztin oder einem Facharzt. Fachrichtung und Grund genügen.",
      href: "/patientenservice/ueberweisung",
      aktion: "Zum Formular",
    },
  ] as const;

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
                Befund, Rückfrage oder etwas anderes
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
