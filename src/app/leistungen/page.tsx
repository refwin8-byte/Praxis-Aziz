import type { Metadata } from "next";
import Link from "next/link";
import { leistungen, praxis } from "@/data/praxis";
import { leistungenLoop } from "@/data/medien";
import { PraxisVideo } from "@/components/praxis-video";
import { Reveal } from "@/components/reveal";
import { Telefon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Diagnostik, strukturierte Programme für chronische Erkrankungen und weitere hausärztliche Leistungen der Praxis Dr. med. Adel Aziz in Espelkamp.",
  alternates: { canonical: "/leistungen" },
};

/**
 * Split-Hero: Text links, rechts der diagnostische Anker. Solange das
 * geplante Diagnostik-Loop (siehe src/data/medien.ts) nicht freigegeben
 * ist, trägt eine Petrol-Fläche mit den vier Kernuntersuchungen dieselbe
 * Stelle — die Seite hängt nie von einem Video ab.
 */
function DiagnostikAnker() {
  if (leistungenLoop) {
    return (
      <PraxisVideo
        asset={leistungenLoop}
        alt="Diagnostik-Detail aus der Praxis: EKG-Papier, Stethoskop und Blutdruckmanschette"
        className="rounded-lg"
        sizes="(min-width: 1024px) 42vw, 100vw"
      />
    );
  }
  return (
    <div className="flex h-full flex-col justify-between rounded-lg bg-night p-8 text-white lg:p-10">
      <p className="label text-sage-bright">Diagnostik im Haus</p>
      <ul className="rule-list mt-6 border-t border-white/15">
        {[
          ["EKG", "auch als Langzeit-EKG über 24 Stunden"],
          ["Ultraschall", "im hausärztlichen Rahmen"],
          ["Lungenfunktion", "bei Atemwegsbeschwerden und Asthma"],
          ["Labor", "Blutentnahme und HbA1c in der Praxis"],
        ].map(([t, d]) => (
          <li key={t} className="flex items-baseline justify-between gap-6 border-white/15 py-3.5">
            <span className="font-semibold">{t}</span>
            <span className="text-right text-[0.9375rem] text-white/70">{d}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[0.9375rem] text-sage-bright">
        Ohne zweiten Termin in einer anderen Stadt.
      </p>
    </div>
  );
}

export default function Leistungen() {
  const diagnostik = leistungen.find((g) => g.id === "diagnostik")!;
  const chronisch = leistungen.find((g) => g.id === "chronisch")!;
  const weitere = leistungen.find((g) => g.id === "weitere")!;

  return (
    <>
      {/* Hero, Variante A: asymmetrischer Split. Der nächste Inhalt beginnt
          noch im ersten Viewport. */}
      <header className="border-b border-rule">
        <div className="container-page grid gap-10 pt-10 pb-10 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-14 lg:pb-14">
          <div>
            <h1 className="display max-w-3xl text-night">Leistungen</h1>
            <p className="lead mt-5">
              Hausärztliche Grundversorgung mit eigener Diagnostik, dazu die
              beiden Schwerpunkte Manuelle Medizin und Suchtmedizin.
            </p>
            {/* Kurze Faktenzeile statt weiterer Absätze. */}
            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-t border-rule pt-5 text-[0.9375rem] font-semibold text-night">
              {["Diagnostik im Haus", "DMP-Programme", "Hausbesuche"].map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-petrol" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <DiagnostikAnker />
        </div>
      </header>

      {/* 1 — Diagnostik auf Leinen. */}
      <section id="diagnostik" className="container-page section" aria-labelledby="diagnostik-t">
        <Reveal>
          <div className="linie h-0.5 w-24 bg-night" aria-hidden="true" />
          <div className="mt-8 grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <h2 id="diagnostik-t" className="h2 text-night">
              {diagnostik.titel}
            </h2>
            <div>
              <p className="text-[1.1875rem] leading-relaxed">{diagnostik.text}</p>
              <ul className="mt-9 rule-list border-t border-rule">
                {diagnostik.punkte.map((p) => (
                  <li key={p} className="py-4 text-[1.0625rem]">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2 — Chronische Erkrankungen als Petrol-Fläche: der Rhythmuswechsel
          der Seite. Salbei trägt die Akzente auf Dunkel. */}
      <section id="chronisch" className="bg-night text-white" aria-labelledby="chronisch-t">
        <div className="container-page section">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
              <div>
                <p className="label text-sage-bright">Langfristige Begleitung</p>
                <h2 id="chronisch-t" className="h2 mt-4">
                  {chronisch.titel}
                </h2>
              </div>
              <div>
                <p className="text-[1.1875rem] leading-relaxed text-white/85">{chronisch.text}</p>
                <ul className="mt-9 rule-list border-t border-white/15">
                  {chronisch.punkte.map((p) => (
                    <li key={p} className="flex items-center gap-3 border-white/15 py-4 text-[1.0625rem]">
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Weitere Leistungen auf Papier. */}
      <section id="weitere" className="border-b border-rule bg-paper" aria-labelledby="weitere-t">
        <div className="container-page section">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
              <h2 id="weitere-t" className="h2 text-night">
                {weitere.titel}
              </h2>
              <div>
                <p className="text-[1.1875rem] leading-relaxed">{weitere.text}</p>
                <ul className="mt-9 rule-list border-t border-rule">
                  {weitere.punkte.map((p) => (
                    <li key={p} className="py-4 text-[1.0625rem]">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ehrliche Abgrenzung. Wer hier nichts Passendes findet, soll nicht
          raten müssen, sondern anrufen. */}
      <section className="container-page section">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="h2 text-night">Ihre Frage ist nicht dabei?</h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Diese Liste nennt die häufigsten Leistungen, nicht alle. Ob wir
              Ihnen weiterhelfen können, klären wir am besten im Gespräch.
            </p>
          </div>
          <a
            href={praxis.telefonHref}
            className="press inline-flex min-h-14 shrink-0 items-center gap-3 rounded-md bg-night px-8 text-[1.125rem] font-semibold text-white transition-colors hover:bg-night-deep"
          >
            <Telefon size={20} />
            <span className="num">{praxis.telefon}</span>
          </a>
        </div>

        <p className="mt-10 text-[0.9375rem] text-ink-soft">
          Rezept oder Überweisung brauchen Sie nicht telefonisch anzufragen.
          Beides geht über den{" "}
          <Link
            href="/patientenservice"
            className="font-medium text-petrol underline underline-offset-2"
          >
            Patientenservice
          </Link>
          .
        </p>
      </section>
    </>
  );
}
