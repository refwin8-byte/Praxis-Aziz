import type { Metadata } from "next";
import { SeitenKopf } from "@/components/seiten-kopf";
import { Oeffnungsstatus } from "@/components/oeffnungsstatus";
import { praxis } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";
import { terminBuchung } from "@/lib/termin";
import { Telefon, Pfeil } from "@/components/icons";

export const metadata: Metadata = {
  title: "Termin vereinbaren",
  description:
    "Termin in der Hausarztpraxis Dr. med. Adel Aziz in Espelkamp vereinbaren — telefonisch unter 05772 5511, zu den Sprechzeiten.",
  alternates: { canonical: "/patientenservice/termin" },
};

/**
 * Der Terminweg. Zwei Zustände, gesteuert über die APPOINTMENT_*-Variablen
 * (siehe src/lib/termin.ts):
 *
 * - Anbieter konfiguriert: Onlinebuchung als klar gekennzeichneter externer
 *   Weg, Telefon als gleichwertige Alternative daneben. Kein iframe in
 *   dieser Ausbaustufe — ob ein Embed des konkreten Anbieters
 *   datenschutzrechtlich vertretbar ist, wird erst geprüft, wenn der
 *   Anbieter feststeht (APPOINTMENT_EMBED_ENABLED bleibt bis dahin wirkungslos).
 * - Kein Anbieter: der Telefonweg, ehrlich erklärt. Keine Demo-Buchung,
 *   keine fiktiven freien Termine.
 */
export default function Termin() {
  const buchung = terminBuchung();
  const zeiten = gruppierteZeiten();

  return (
    <>
      <SeitenKopf
        titel="Termin vereinbaren"
        einleitung={
          buchung
            ? `Sie können online über ${buchung.anbieter} buchen oder uns anrufen — beides führt zum selben Terminkalender.`
            : "Termine vereinbaren wir telefonisch. So können wir direkt einschätzen, wie dringend Ihr Anliegen ist, und Ihnen die passende Zeit geben."
        }
      />

      <section className="container-page section grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
        <div>
          {buchung ? (
            <>
              <h2 className="h2 text-night">Online buchen</h2>
              <p className="mt-5 max-w-[60ch]">
                Die Onlinebuchung läuft über{" "}
                <strong className="font-semibold">{buchung.anbieter}</strong>,
                einen externen Anbieter für Arzttermine. Sie verlassen dabei
                diese Website; es gelten die Datenschutzhinweise des
                Anbieters. Nach der Buchung kommen Sie hierher zurück.
              </p>
              <a
                href={buchung.url}
                rel="noopener noreferrer"
                className="press mt-8 inline-flex min-h-14 items-center gap-3 rounded-md bg-night px-8 text-[1.125rem] font-semibold text-white transition-colors hover:bg-night-deep"
              >
                Termin online buchen
                <Pfeil size={20} />
              </a>
              <p className="mt-4 text-[0.9375rem] text-ink-soft">
                Öffnet {buchung.anbieter}. Wenn die Onlinebuchung nicht
                erreichbar ist, rufen Sie uns bitte an.
              </p>

              <h2 className="h2 mt-16 text-night">Oder telefonisch</h2>
            </>
          ) : (
            <h2 className="h2 text-night">So erreichen Sie uns</h2>
          )}

          <p className="mt-5 max-w-[60ch]">
            Rufen Sie uns während der Sprechzeiten an. Halten Sie bitte Ihre
            Versichertenkarte bereit — bei einem ersten Besuch im Quartal
            wird sie eingelesen.
          </p>
          <a
            href={praxis.telefonHref}
            className={`press mt-8 inline-flex min-h-14 items-center gap-3 rounded-md px-8 text-[1.125rem] font-semibold transition-colors ${
              buchung
                ? "border border-night/25 text-night hover:border-night hover:bg-night/5"
                : "bg-night text-white hover:bg-night-deep"
            }`}
          >
            <Telefon size={20} />
            <span className="num">{praxis.telefon}</span>
          </a>
          <div className="mt-6">
            <Oeffnungsstatus />
          </div>
          <p className="mt-6 max-w-[60ch] text-ink-soft">
            Bei akuten Beschwerden kommen Sie bitte zu Beginn der
            Sprechstunde. Außerhalb der Sprechzeiten hilft der ärztliche
            Bereitschaftsdienst unter{" "}
            <a href="tel:116117" className="num font-semibold text-petrol underline underline-offset-2">
              116 117
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="label text-petrol">Sprechzeiten</h2>
          <dl className="mt-6 rule-list border-t border-rule">
            {zeiten.map((g) => (
              <div key={g.tage} className="flex justify-between gap-4 py-3.5">
                <dt className="font-semibold">{g.tage}</dt>
                <dd className="num text-right text-ink-soft">
                  {g.zeiten.map((z) => (
                    <span key={z.von} className="block">
                      {z.von} – {z.bis}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
            <div className="flex justify-between gap-4 py-3.5">
              <dt className="font-semibold">Sa, So</dt>
              <dd className="text-ink-soft">geschlossen</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
