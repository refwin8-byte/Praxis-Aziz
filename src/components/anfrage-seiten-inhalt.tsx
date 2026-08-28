"use client";

import { SeitenKopf } from "@/components/seiten-kopf";
import { RezeptFormular, UeberweisungFormular } from "@/components/anfrage-formulare";
import { BevorSieAusfuellen, DatenHinweis, NotfallAside } from "@/components/anfrage-bausteine";
import { useSprache } from "@/lib/i18n";

/**
 * Rezept- und Überweisungsseite, übersetzbar. Gleiche Dramaturgie:
 * Erwartungen zuerst, dann das Formular, dann der Notfallweg.
 */

export function RezeptSeiteInhalt() {
  const { wb } = useSprache();
  const a = wb.anfrage;
  return (
    <>
      <SeitenKopf titel={wb.rezept.titel} einleitung={wb.rezept.einleitung} />

      <BevorSieAusfuellen
        punkte={[
          { titel: a.nurDauermedikationT, text: a.nurDauermedikationD },
          { titel: a.bearbeitungszeitT, text: a.bearbeitungszeitD },
          { titel: a.voraussetzungT, text: a.voraussetzungD },
          { titel: a.imNotfallT, text: a.imNotfallD },
        ]}
      />

      <div className="container-page section grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <section aria-labelledby="rezept-titel">
          <h2 id="rezept-titel" className="h2 text-night">
            {a.ihreAnforderung}
          </h2>
          <p className="mt-4 max-w-[60ch] text-ink-soft">{wb.rezept.formHinweis}</p>
          <div className="mt-9">
            <RezeptFormular />
          </div>
        </section>

        <NotfallAside />
      </div>

      <section className="border-t border-rule bg-paper">
        <div className="container-page section">
          <DatenHinweis />
        </div>
      </section>
    </>
  );
}

export function UeberweisungSeiteInhalt() {
  const { wb } = useSprache();
  const a = wb.anfrage;
  return (
    <>
      <SeitenKopf titel={wb.ueberweisung.titel} einleitung={wb.ueberweisung.einleitung} />

      <BevorSieAusfuellen
        punkte={[
          { titel: a.bearbeitungszeitT, text: a.bearbeitungszeitD },
          { titel: a.voraussetzungT, text: a.voraussetzungD },
          { titel: a.abholungT, text: a.abholungD },
          { titel: a.imNotfallT, text: a.imNotfallD },
        ]}
      />

      <div className="container-page section grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <section aria-labelledby="ueberweisung-titel">
          <h2 id="ueberweisung-titel" className="h2 text-night">
            {a.ihreAnforderung}
          </h2>
          <p className="mt-4 max-w-[60ch] text-ink-soft">{wb.ueberweisung.formHinweis}</p>
          <div className="mt-9">
            <UeberweisungFormular />
          </div>
        </section>

        <NotfallAside />
      </div>

      <section className="border-t border-rule bg-paper">
        <div className="container-page section">
          <DatenHinweis />
        </div>
      </section>
    </>
  );
}
