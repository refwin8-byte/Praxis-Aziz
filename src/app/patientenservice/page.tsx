import type { Metadata } from "next";
import Link from "next/link";
import { SeitenKopf } from "@/components/seiten-kopf";
import { praxis } from "@/data/praxis";
import { terminBuchung } from "@/lib/termin";
import { Kalender, Rezept, Pfeil, Telefon, Uhr, Menschen } from "@/components/icons";

export const metadata: Metadata = {
  title: "Patientenservice",
  description:
    "Termin, Folgerezept und Überweisung: die drei Wege in die Praxis Dr. med. Adel Aziz in Espelkamp — dazu Hinweise für den Praxisbesuch und Notfallinformationen.",
  alternates: { canonical: "/patientenservice" },
};

/**
 * Die Übersicht trennt die drei Anliegen bewusst in drei eigene Wege: Wer
 * ein Folgerezept braucht, soll nicht erst verstehen müssen, was eine
 * Überweisung ist. Jede Karte sagt in einem Satz, wofür sie da ist und was
 * man bereithalten muss.
 */
export default function Patientenservice() {
  const buchung = terminBuchung();

  const wege = [
    {
      Icon: Kalender,
      titel: "Termin",
      href: "/patientenservice/termin",
      text: buchung
        ? `Online über ${buchung.anbieter} oder telefonisch. Halten Sie Ihre Versichertenkarte bereit.`
        : "Termine vereinbaren wir telefonisch. Halten Sie Ihre Versichertenkarte bereit.",
      aktion: buchung ? "Termin buchen" : "Zum Terminweg",
    },
    {
      Icon: Rezept,
      titel: "Folgerezept",
      href: "/patientenservice/rezept",
      text: "Für Medikamente, die Sie schon regelmäßig einnehmen. Halten Sie Name, Wirkstärke und Packungsgröße bereit.",
      aktion: "Rezept anfordern",
    },
    {
      Icon: Menschen,
      titel: "Überweisung",
      href: "/patientenservice/ueberweisung",
      text: "Für den Besuch bei einer Fachärztin oder einem Facharzt. Fachrichtung und Grund genügen.",
      aktion: "Überweisung anfordern",
    },
  ] as const;

  return (
    <>
      <SeitenKopf
        titel="Patientenservice"
        einleitung="Drei Anliegen, drei klare Wege. Und für alles andere: das Telefon — während der Sprechzeiten ist die Anmeldung besetzt."
      />

      <section className="container-page section" aria-label="Die drei Wege">
        <div className="grid gap-8 lg:grid-cols-3">
          {wege.map((w) => (
            <article
              key={w.titel}
              className="flex flex-col rounded-md border border-rule bg-paper p-8"
            >
              <w.Icon size={28} className="text-petrol" />
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
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-ink-soft">
          Befunde, Rückfragen und alles Weitere klären wir am Telefon:{" "}
          <a href={praxis.telefonHref} className="num font-semibold text-petrol underline underline-offset-2">
            {praxis.telefon}
          </a>
        </p>
      </section>

      <section className="border-t border-rule bg-paper" aria-labelledby="weitere">
        <div className="container-page section">
          <h2 id="weitere" className="h2 text-night">
            Gut zu wissen
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <Link
              href="/patientenservice/praxisbesuch"
              className="press group flex flex-col gap-3 border-t-2 border-night pt-6"
            >
              <span className="flex items-center gap-3 text-[1.3125rem] font-semibold text-night">
                <Uhr size={22} className="text-petrol" />
                Hinweise für den Praxisbesuch
              </span>
              <span className="text-ink-soft">
                Was Sie mitbringen, wann Sie am besten kommen und wie die
                Anmeldung abläuft.
              </span>
              <span className="inline-flex items-center gap-2 font-semibold text-petrol underline-offset-4 group-hover:underline">
                Mehr erfahren
                <Pfeil size={18} />
              </span>
            </Link>

            <Link
              href="/patientenservice/notfall"
              className="press group flex flex-col gap-3 border-t-2 border-alert pt-6"
            >
              <span className="flex items-center gap-3 text-[1.3125rem] font-semibold text-night">
                <Telefon size={22} className="text-alert" />
                Notfallinformationen
              </span>
              <span className="text-ink-soft">
                Wann Sie 112 wählen, wann 116 117 — und was außerhalb der
                Sprechzeiten gilt.
              </span>
              <span className="inline-flex items-center gap-2 font-semibold text-petrol underline-offset-4 group-hover:underline">
                Mehr erfahren
                <Pfeil size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
