import type { Metadata } from "next";
import { SeitenKopf } from "@/components/seiten-kopf";
import { RezeptFormular } from "@/components/anfrage-formulare";
import { BevorSieAusfuellen, DatenHinweis, NotfallAside } from "@/components/anfrage-bausteine";

export const metadata: Metadata = {
  title: "Folgerezept anfordern",
  description:
    "Folgerezept für Ihre Dauermedikation online anfordern, ohne in die Praxis zu kommen. Verschlüsselte Übertragung, keine Speicherung auf der Website.",
  alternates: { canonical: "/patientenservice/rezept" },
};

export default function Rezept() {
  return (
    <>
      <SeitenKopf
        titel="Folgerezept anfordern"
        einleitung="Nur für Medikamente, die Sie bereits regelmäßig einnehmen. Neue Medikamente oder Änderungen der Dosierung brauchen eine ärztliche Rücksprache — dafür rufen Sie uns bitte an."
      />

      <BevorSieAusfuellen
        punkte={[
          {
            titel: "Nur Dauermedikation",
            text: "Dieses Formular ist für Folgeverordnungen. Über neue Medikamente entscheidet die Ärztin oder der Arzt im Gespräch.",
          },
          {
            titel: "Bearbeitungszeit",
            text: "Bitte planen Sie zwei Werktage ein. An Wochenenden und Feiertagen bearbeiten wir keine Anfragen.",
          },
          {
            titel: "Voraussetzung",
            text: "Sie sind Patientin oder Patient dieser Praxis und Ihre Versichertenkarte wurde im laufenden Quartal eingelesen.",
          },
          {
            titel: "Im Notfall",
            text: "Wählen Sie 112. Warten Sie dann nicht auf eine Antwort über dieses Formular.",
          },
        ]}
      />

      <div className="container-page section grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <section aria-labelledby="rezept-titel">
          <h2 id="rezept-titel" className="h2 text-night">
            Ihre Anforderung
          </h2>
          <p className="mt-4 max-w-[60ch] text-ink-soft">
            Die Angaben stehen auf der Medikamentenpackung. Sie können bis zu
            drei Medikamente in einer Anfrage anfordern.
          </p>
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
