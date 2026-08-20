import type { Metadata } from "next";
import { SeitenKopf } from "@/components/seiten-kopf";
import { notfall, praxis } from "@/data/praxis";
import { Oeffnungsstatus } from "@/components/oeffnungsstatus";
import { Telefon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Notfallinformationen",
  description:
    "Wann Sie 112 wählen, wann der ärztliche Bereitschaftsdienst 116 117 hilft und was außerhalb der Sprechzeiten der Praxis Dr. med. Adel Aziz gilt.",
  alternates: { canonical: "/patientenservice/notfall" },
};

/**
 * Die Seite beantwortet genau eine Frage: Wen rufe ich jetzt an? Deshalb
 * stehen die beiden Nummern zuoberst und riesig, mit einer klaren
 * Abgrenzung — und die Praxisnummer erst danach. Keine medizinische
 * Beratung, keine Symptomlisten mit Diagnosecharakter.
 */
export default function Notfall() {
  return (
    <>
      <SeitenKopf
        titel="Im Notfall"
        einleitung="Zwei Nummern reichen: 112, wenn Lebensgefahr besteht. 116 117, wenn es nicht bis zur nächsten Sprechstunde warten kann."
      />

      <section className="container-page section" aria-label="Notfallnummern">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-md border-2 border-alert bg-paper p-8">
            <a
              href={notfall.lebensbedrohlich.href}
              className="num inline-flex min-h-14 items-center text-[3rem] font-semibold leading-none text-alert underline-offset-8 hover:underline"
            >
              {notfall.lebensbedrohlich.nummer}
            </a>
            <h2 className="mt-3 text-[1.3125rem] font-semibold text-night">
              {notfall.lebensbedrohlich.label}
            </h2>
            <p className="mt-3 text-ink-soft">
              {notfall.lebensbedrohlich.hinweis}. Zum Beispiel bei Anzeichen
              von Herzinfarkt oder Schlaganfall, schwerer Atemnot, starken
              Blutungen oder Bewusstlosigkeit. Zögern Sie nicht — der
              Rettungsdienst ist genau dafür da.
            </p>
          </div>

          <div className="rounded-md border border-rule bg-paper p-8">
            <a
              href={notfall.bereitschaft.href}
              className="num inline-flex min-h-14 items-center text-[3rem] font-semibold leading-none text-night underline-offset-8 hover:underline"
            >
              {notfall.bereitschaft.nummer}
            </a>
            <h2 className="mt-3 text-[1.3125rem] font-semibold text-night">
              {notfall.bereitschaft.label}
            </h2>
            <p className="mt-3 text-ink-soft">
              {notfall.bereitschaft.hinweis} — abends, nachts, am Wochenende
              und an Feiertagen. Die 116 117 vermittelt auch die
              Notfallpraxen in der Umgebung. Der Anruf ist kostenfrei.
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-[65ch] text-ink-soft">
          Vergiftungen: Die Giftnotrufzentrale für Nordrhein-Westfalen
          erreichen Sie über die 112, in weniger dringenden Fällen hilft die
          116 117 weiter.
        </p>
      </section>

      <section className="border-t border-rule bg-paper">
        <div className="container-page section grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <h2 className="h2 text-night">Während der Sprechzeiten</h2>
            <p className="mt-5 max-w-[60ch]">
              Bei akuten Beschwerden, die kein Notfall sind, rufen Sie uns an
              oder kommen Sie zu Beginn der Sprechstunde — dann können wir
              Sie noch am selben Tag einordnen.
            </p>
            <a
              href={praxis.telefonHref}
              className="press mt-8 inline-flex min-h-14 items-center gap-3 rounded-md bg-night px-8 text-[1.125rem] font-semibold text-white transition-colors hover:bg-night-deep"
            >
              <Telefon size={20} />
              <span className="num">{praxis.telefon}</span>
            </a>
            <div className="mt-6">
              <Oeffnungsstatus />
            </div>
          </div>

          <div className="h-fit rounded-md border border-rule bg-linen p-7">
            <h2 className="text-[1.3125rem] font-semibold text-night">
              Bitte nicht über die Formulare
            </h2>
            <p className="mt-3 text-ink-soft">
              Rezept- und Überweisungsanfragen über diese Website werden zu
              den Sprechzeiten bearbeitet, nicht sofort. Für alles Dringende
              gilt: anrufen — 112, 116 117 oder die Praxis.
            </p>
            <p className="mt-5 border-t border-rule pt-4 text-[0.875rem] text-ink-soft">
              Diese Seite gibt keine medizinische Beratung und ersetzt kein
              ärztliches Gespräch.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
