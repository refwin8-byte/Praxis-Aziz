import type { Metadata } from "next";
import Image from "next/image";
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
    <figure>
      <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-rule/40">
        <Image
          src="/bilder/diagnostik-detail.webp"
          alt="Stillleben mit EKG-Papier, dunklem Stethoskop und Blutdruckmanschette auf hellem Leinen"
          fill
          priority
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-[0.875rem] text-ink-soft">
        EKG, Blutdruck, Abhören — die Grundlagen finden hier im Haus statt.
        (Symbolbild)
      </figcaption>
    </figure>
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

      {/* 1 — Diagnostik auf Leinen. Überschrift und Einleitung als Zeile,
          die Liste darunter zweispaltig über die volle Breite — keine leere
          linke Spalte auf großen Displays. */}
      <section id="diagnostik" className="container-page py-16 lg:py-24" aria-labelledby="diagnostik-t">
        <Reveal>
          <div className="flex items-end gap-5">
            <span aria-hidden="true" className="nr-gross num text-ocker">01</span>
            <div className="linie mb-2 h-0.5 w-24 bg-night" aria-hidden="true" />
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <h2 id="diagnostik-t" className="h2 text-night">
              {diagnostik.titel}
            </h2>
            <p className="text-[1.1875rem] leading-relaxed lg:pt-2">{diagnostik.text}</p>
          </div>
          <ul className="mt-10 grid gap-x-14 border-t border-rule sm:grid-cols-2">
            {diagnostik.punkte.map((p) => (
              <li key={p} className="border-b border-rule py-4 text-[1.0625rem]">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 2 — Chronische Erkrankungen als Petrol-Fläche: der Rhythmuswechsel
          der Seite. Salbei trägt die Akzente auf Dunkel. */}
      <section id="chronisch" className="bg-wald text-white" aria-labelledby="chronisch-t">
        <div className="container-page py-16 lg:py-24">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
              <div>
                <span aria-hidden="true" className="nr-gross num text-sage-bright/70">02</span>
                <p className="label mt-4 text-sage-bright">Langfristige Begleitung</p>
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

      {/* 3 — Weitere Leistungen auf Papier, gleiche Struktur wie Diagnostik. */}
      <section id="weitere" className="border-b border-rule bg-paper" aria-labelledby="weitere-t">
        <div className="container-page py-16 lg:py-24">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:gap-16">
              <div>
                <span aria-hidden="true" className="nr-gross num text-petrol/60">03</span>
                <h2 id="weitere-t" className="h2 mt-2 text-night">
                  {weitere.titel}
                </h2>
              </div>
              <p className="text-[1.1875rem] leading-relaxed lg:pt-2">{weitere.text}</p>
            </div>
            <ul className="mt-10 grid gap-x-14 border-t border-rule sm:grid-cols-2">
              {weitere.punkte.map((p) => (
                <li key={p} className="border-b border-rule py-4 text-[1.0625rem]">
                  {p}
                </li>
              ))}
            </ul>
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
