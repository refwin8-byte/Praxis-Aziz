import type { Metadata } from "next";
import Link from "next/link";
import { SeitenKopf } from "@/components/seiten-kopf";
import { praxis } from "@/data/praxis";

export const metadata: Metadata = {
  title: "Barrierefreiheit",
  description:
    "Wie diese Website barrierearm gestaltet ist, welche Grenzen es noch gibt und wohin Sie sich wenden können, wenn etwas nicht bedienbar ist.",
  alternates: { canonical: "/barrierefreiheit" },
};

/**
 * Freiwillige Erklärung zur Barrierefreiheit.
 *
 * Sie beschreibt nur, was tatsächlich gebaut und geprüft ist — eine
 * Erklärung, die mehr verspricht als die Seite hält, wäre selbst eine
 * Barriere. Bekannte Grenzen stehen offen dabei.
 */
export default function Barrierefreiheit() {
  return (
    <>
      <SeitenKopf
        titel="Barrierefreiheit"
        einleitung="Diese Website soll für alle bedienbar sein — auch mit Tastatur, Vorleseprogramm, starker Vergrößerung oder zittriger Hand. Hier steht, was dafür getan ist und wo die Grenzen liegen."
      />

      <section className="container-page section">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
          {[
            {
              t: "Maßstab",
              d: "Ziel ist die Konformität mit den Web Content Accessibility Guidelines (WCAG) 2.2, Stufe AA. Kontraste, Fokuszustände und Überschriftenstruktur sind daran ausgerichtet und im Browser nachgemessen.",
            },
            {
              t: "Bedienung ohne Maus",
              d: "Alle Funktionen sind mit der Tastatur erreichbar. Ein Link am Seitenanfang springt direkt zum Inhalt, der Tastaturfokus ist auf hellem wie dunklem Grund sichtbar. Keine Funktion versteckt sich in einem Hover-Zustand.",
            },
            {
              t: "Schrift und Vergrößerung",
              d: "Die Grundschrift ist mit 17 Pixeln größer als üblich, die Seite bleibt bis mindestens 200 Prozent Browser-Zoom benutzbar. Alle Schaltflächen sind mindestens 48 Pixel groß.",
            },
            {
              t: "Vorleseprogramme",
              d: "Überschriften sind hierarchisch aufgebaut, Bilder haben beschreibende Alternativtexte, Formularfelder echte Beschriftungen. Fehlermeldungen erscheinen als Text und werden vorgelesen.",
            },
            {
              t: "Bewegung",
              d: "Die wenigen Animationen sind kurz und einmalig. Wer im Betriebssystem reduzierte Bewegung eingestellt hat, sieht keine Positionsanimationen — Inhalte sind nie hinter einer Animation versteckt.",
            },
            {
              t: "Verständlichkeit",
              d: "Die Texte verzichten auf Fachsprache, wo es geht, und sagen bei jedem Formular vorab, was gebraucht wird und wie lange es dauert. Telefonnummern sind antippbar.",
            },
          ].map((p) => (
            <div key={p.t} className="border-t-2 border-night pt-5">
              <h2 className="text-[1.3125rem] font-semibold text-night">{p.t}</h2>
              <p className="mt-3 text-ink-soft">{p.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-[65ch]">
          <h2 className="h2 text-night">Bekannte Grenzen</h2>
          <ul className="mt-6 flex flex-col gap-3 text-ink-soft">
            <li>
              Die interaktive Karte auf der Kontaktseite stammt von
              OpenStreetMap und ist mit Vorleseprogrammen nur eingeschränkt
              bedienbar. Adresse und Anfahrt stehen deshalb immer auch als
              Text auf der Seite.
            </li>
            <li>
              Ein vollständiger Test mit allen Vorleseprogrammen und
              Browsern steht noch aus. Gefundene Hürden beheben wir
              fortlaufend.
            </li>
          </ul>
        </div>

        <div className="mt-16 max-w-[65ch] rounded-md border border-rule bg-paper p-7">
          <h2 className="text-[1.3125rem] font-semibold text-night">
            Etwas ist nicht bedienbar?
          </h2>
          <p className="mt-3 text-ink-soft">
            Sagen Sie uns Bescheid — am einfachsten telefonisch. Was am
            Telefon geht, geht immer: Termin, Rezept und Überweisung sind
            nicht an diese Website gebunden.
          </p>
          <a
            href={praxis.telefonHref}
            className="press num mt-6 inline-flex min-h-13 items-center rounded-md bg-night px-6 font-semibold text-white transition-colors hover:bg-night-deep"
          >
            {praxis.telefon}
          </a>
        </div>

        <p className="mt-12 text-[0.9375rem] text-ink-soft">
          Siehe auch:{" "}
          <Link href="/datenschutz" className="font-medium text-petrol underline underline-offset-2">
            Datenschutz
          </Link>{" "}
          und{" "}
          <Link href="/impressum" className="font-medium text-petrol underline underline-offset-2">
            Impressum
          </Link>
          .
        </p>
      </section>
    </>
  );
}
