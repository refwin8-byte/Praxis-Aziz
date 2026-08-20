import type { Metadata } from "next";
import { SeitenKopf } from "@/components/seiten-kopf";
import { UeberweisungFormular } from "@/components/anfrage-formulare";
import { BevorSieAusfuellen, DatenHinweis, NotfallAside } from "@/components/anfrage-bausteine";

export const metadata: Metadata = {
  title: "Überweisung anfordern",
  description:
    "Überweisung zu einer Fachärztin oder einem Facharzt online anfordern. Verschlüsselte Übertragung, keine Speicherung auf der Website.",
  alternates: { canonical: "/patientenservice/ueberweisung" },
};

export default function Ueberweisung() {
  return (
    <>
      <SeitenKopf
        titel="Überweisung anfordern"
        einleitung="Für den Besuch bei einer Fachärztin oder einem Facharzt. Fachrichtung und Grund genügen — den Rest klären wir, falls nötig, telefonisch."
      />

      <BevorSieAusfuellen
        punkte={[
          {
            titel: "Bearbeitungszeit",
            text: "Bitte planen Sie zwei Werktage ein. An Wochenenden und Feiertagen bearbeiten wir keine Anfragen.",
          },
          {
            titel: "Voraussetzung",
            text: "Sie sind Patientin oder Patient dieser Praxis und Ihre Versichertenkarte wurde im laufenden Quartal eingelesen.",
          },
          {
            titel: "Abholung",
            text: "Die Überweisung liegt danach an der Anmeldung für Sie bereit. Über andere Wege informieren wir telefonisch.",
          },
          {
            titel: "Im Notfall",
            text: "Wählen Sie 112. Warten Sie dann nicht auf eine Antwort über dieses Formular.",
          },
        ]}
      />

      <div className="container-page section grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <section aria-labelledby="ueberweisung-titel">
          <h2 id="ueberweisung-titel" className="h2 text-night">
            Ihre Anforderung
          </h2>
          <p className="mt-4 max-w-[60ch] text-ink-soft">
            Beschreiben Sie kurz, worum es geht — eine Diagnose müssen Sie
            hier nicht nennen.
          </p>
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
