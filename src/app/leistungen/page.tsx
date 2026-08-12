import type { Metadata } from "next";
import Link from "next/link";
import { leistungen, praxis } from "@/data/praxis";
import { SeitenKopf } from "@/components/seiten-kopf";
import { Telefon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Diagnostik, strukturierte Programme für chronische Erkrankungen und weitere hausärztliche Leistungen der Praxis Dr. med. Adel Aziz in Espelkamp.",
  alternates: { canonical: "/leistungen" },
};

export default function Leistungen() {
  return (
    <>
      <SeitenKopf
        titel="Leistungen"
        einleitung="Hausärztliche Grundversorgung mit eigener Diagnostik, dazu die beiden Schwerpunkte Manuelle Medizin und Suchtmedizin."
      />

      <div className="container-page section flex flex-col gap-20 lg:gap-28">
        {leistungen.map((g) => (
          <section key={g.id} id={g.id} className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <div>
              <h2 className="h2 text-night">{g.titel}</h2>
            </div>
            <div>
              <p className="text-[1.1875rem] leading-relaxed">{g.text}</p>
              <ul className="mt-9 rule-list border-t border-rule">
                {g.punkte.map((p) => (
                  <li key={p} className="py-4 text-[1.0625rem]">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      {/* Ehrliche Abgrenzung. Wer hier nichts Passendes findet, soll nicht
          raten müssen, sondern anrufen. */}
      <section className="border-t border-rule bg-paper">
        <div className="container-page section">
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
            Beides geht{" "}
            <Link
              href="/rezept-und-ueberweisung"
              className="font-medium text-petrol underline underline-offset-2"
            >
              schriftlich
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
