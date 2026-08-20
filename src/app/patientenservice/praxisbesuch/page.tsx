import type { Metadata } from "next";
import Link from "next/link";
import { SeitenKopf } from "@/components/seiten-kopf";
import { praxis } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";

export const metadata: Metadata = {
  title: "Hinweise für den Praxisbesuch",
  description:
    "Was Sie zum Besuch in der Praxis Dr. med. Adel Aziz mitbringen, wann Sie am besten kommen und wie die Anmeldung abläuft.",
  alternates: { canonical: "/patientenservice/praxisbesuch" },
};

/**
 * Nur belegte Hinweise. Parkplätze, Busanbindung und die Barrierefreiheit
 * des Gebäudes sind bei der Praxis angefragt und werden ergänzt, sobald die
 * Angaben vorliegen — geraten wird hier nichts: Ein falscher Hinweis auf
 * einen Aufzug ist für die Betroffene schlimmer als kein Hinweis.
 */
export default function Praxisbesuch() {
  const zeiten = gruppierteZeiten();

  return (
    <>
      <SeitenKopf
        titel="Hinweise für den Praxisbesuch"
        einleitung="Damit Ihr Besuch ohne Umwege abläuft: was Sie mitbringen, wann Sie am besten kommen und wie es an der Anmeldung weitergeht."
      />

      <section className="container-page section">
        <dl className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
          {[
            {
              t: "Versichertenkarte mitbringen",
              d: "Beim ersten Besuch im Quartal wird Ihre elektronische Gesundheitskarte eingelesen. Ohne Karte können wir Leistungen nicht abrechnen — bringen Sie sie bitte zu jedem Besuch mit.",
            },
            {
              t: "Telefonisch anmelden",
              d: "Wir bitten um telefonische Anmeldung vor dem Besuch. So planen wir Zeit für Ihr Anliegen ein und Sie warten kürzer.",
            },
            {
              t: "Akute Beschwerden: früh kommen",
              d: "Bei akuten Beschwerden kommen Sie bitte zu Beginn der Sprechstunde. Dann können wir Sie noch am selben Tag einordnen.",
            },
            {
              t: "Medikamente und Unterlagen",
              d: "Wenn Sie zu einem Gespräch über Ihre Medikamente kommen, hilft eine Liste dessen, was Sie einnehmen — oder bringen Sie die Packungen mit. Vorhandene Befunde anderer Ärzte gehören ebenfalls in die Tasche.",
            },
            {
              t: "Rezepte und Überweisungen vorab",
              d: "Folgerezepte und Überweisungen können Sie online anfordern und nach zwei Werktagen abholen — dafür müssen Sie nicht in die Sprechstunde.",
            },
            {
              t: "Wenn Sie nicht kommen können",
              d: "Sagen Sie vereinbarte Termine bitte telefonisch ab. Der Platz kann dann an jemanden gehen, der akut Hilfe braucht. Für Menschen, die die Praxis nicht erreichen können, gibt es Hausbesuche.",
            },
          ].map((h) => (
            <div key={h.t} className="border-t-2 border-night pt-5">
              <dt className="text-[1.3125rem] font-semibold text-night">{h.t}</dt>
              <dd className="mt-3 text-ink-soft">{h.d}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-14 max-w-[65ch] rounded-sm bg-paper p-5 text-[0.9375rem] text-ink-soft">
          Angaben zu Parkplätzen, zur Busanbindung und zur Barrierefreiheit
          des Gebäudes ergänzen wir, sobald sie von der Praxis bestätigt
          sind. Wenn Sie dazu vorab eine Frage haben, rufen Sie uns an:{" "}
          <a href={praxis.telefonHref} className="num font-semibold text-petrol underline underline-offset-2">
            {praxis.telefon}
          </a>
        </p>
      </section>

      <section className="bg-night text-white">
        <div className="container-page section grid gap-12 lg:grid-cols-[5fr_7fr]">
          <div>
            <h2 className="h2">Sprechzeiten</h2>
            <p className="mt-4 text-white/75">
              An gesetzlichen Feiertagen in Nordrhein-Westfalen ist die
              Praxis geschlossen.
            </p>
          </div>
          <dl className="rule-list border-t border-white/15">
            {zeiten.map((g) => (
              <div key={g.tage} className="flex justify-between gap-4 border-white/15 py-3.5">
                <dt className="font-semibold">{g.tage}</dt>
                <dd className="num text-right text-white/85">
                  {g.zeiten.map((z) => (
                    <span key={z.von} className="block">
                      {z.von} – {z.bis}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
            <div className="flex justify-between gap-4 border-white/15 py-3.5">
              <dt className="font-semibold">Sa, So</dt>
              <dd className="text-white/60">geschlossen</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="container-page section">
        <p className="max-w-2xl text-ink-soft">
          Die Adresse und den Anfahrtsweg finden Sie unter{" "}
          <Link href="/kontakt" className="font-medium text-petrol underline underline-offset-2">
            Kontakt &amp; Anfahrt
          </Link>
          .
        </p>
      </section>
    </>
  );
}
