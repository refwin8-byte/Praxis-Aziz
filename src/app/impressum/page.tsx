import type { Metadata } from "next";
import { praxis } from "@/data/praxis";
import { SeitenKopf } from "@/components/seiten-kopf";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Anbieterkennzeichnung der Praxis Dr. med. Adel Aziz, Espelkamp.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: true },
};

function Block({ titel, children }: { titel: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-rule py-8">
      <h2 className="text-[1.1875rem] font-semibold text-night">{titel}</h2>
      <div className="mt-4 flex max-w-[70ch] flex-col gap-3 text-ink-soft">{children}</div>
    </section>
  );
}

export default function Impressum() {
  return (
    <>
      <SeitenKopf titel="Impressum" einleitung="Angaben gemäß § 5 Digitale-Dienste-Gesetz." />

      <div className="container-page section pt-4">
        <div className="max-w-4xl">
          <Block titel="Anbieter">
            <address className="not-italic leading-relaxed text-ink">
              {praxis.name}
              <br />
              {praxis.adresse.strasse}
              <br />
              {praxis.adresse.plz} {praxis.adresse.ort}
            </address>
            <p>Vertreten durch Dr. med. Adel Aziz</p>
          </Block>

          <Block titel="Kontakt">
            <p>
              Telefon:{" "}
              <a
                href={praxis.telefonHref}
                className="num font-medium text-petrol underline underline-offset-2"
              >
                {praxis.telefon}
              </a>
            </p>
            <p>
              E-Mail:{" "}
              <a
                href={`mailto:${praxis.email}`}
                className="font-medium text-petrol underline underline-offset-2"
              >
                {praxis.email}
              </a>
            </p>
          </Block>

          <Block titel="Berufsbezeichnung und berufsrechtliche Regelungen">
            <p>
              <strong className="font-semibold text-ink">Berufsbezeichnung:</strong> Facharzt für
              Allgemeinmedizin, Manuelle Medizin und Suchtmedizin. Verliehen in der Bundesrepublik
              Deutschland.
            </p>
            <p>
              <strong className="font-semibold text-ink">Zuständige Kammer:</strong> Ärztekammer
              Westfalen-Lippe
            </p>
            <p>
              <strong className="font-semibold text-ink">Berufsrechtliche Regelungen:</strong>{" "}
              Berufsordnung der Ärztekammer Westfalen-Lippe sowie das Heilberufsgesetz
              Nordrhein-Westfalen. Beide sind über die Website der Ärztekammer Westfalen-Lippe
              einsehbar.
            </p>
          </Block>

          {/* Pflichtangabe nach § 2 DL-InfoV. Steht bewusst als offener Punkt
              und nicht als erfundene Angabe. Vor dem Livegang ergänzen. */}
          <Block titel="Berufshaftpflichtversicherung">
            <p>
              Angaben zum Versicherer und zum räumlichen Geltungsbereich der Versicherung werden
              ergänzt.
            </p>
          </Block>

          <Block titel="Streitbeilegung">
            <p>
              Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            <p>
              Für Beschwerden über eine ärztliche Behandlung ist die Gutachterkommission für
              ärztliche Behandlungsfehler bei der Ärztekammer Westfalen-Lippe zuständig.
            </p>
          </Block>

          <Block titel="Haftung für Inhalte">
            <p>
              Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für Richtigkeit,
              Vollständigkeit und Aktualität können wir keine Gewähr übernehmen.
            </p>
            <p>
              Die Informationen auf dieser Website ersetzen keine ärztliche Beratung, Diagnose oder
              Behandlung.
            </p>
          </Block>
        </div>
      </div>
    </>
  );
}
