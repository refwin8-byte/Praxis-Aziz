import type { Metadata } from "next";
import Link from "next/link";
import { praxis } from "@/data/praxis";
import { terminBuchung } from "@/lib/termin";
import { SeitenKopf } from "@/components/seiten-kopf";
import { EinwilligungSchalter } from "@/components/einwilligung-schalter";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Praxis Dr. med. Adel Aziz, Espelkamp.",
  alternates: { canonical: "/datenschutz" },
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

export default function Datenschutz() {
  return (
    <>
      <SeitenKopf
        titel="Datenschutz"
        einleitung="Diese Website ist bewusst sparsam gebaut: keine Cookies, keine Analyse, keine eingebetteten Dienste."
      />

      <div className="container-page section pt-4">
        <div className="max-w-4xl">
          <Block titel="Verantwortlich">
            <address className="not-italic leading-relaxed text-ink">
              {praxis.name}
              <br />
              {praxis.adresse.strasse}
              <br />
              {praxis.adresse.plz} {praxis.adresse.ort}
            </address>
            <p>
              Telefon {praxis.telefon}, E-Mail {praxis.email}
            </p>
          </Block>

          <Block titel="Was diese Website nicht tut">
            <p>
              Sie verwendet keine Analyse- oder Tracking-Werkzeuge und setzt
              keine Cookies zu Werbe- oder Statistikzwecken. Es sind keine
              Videos und keine Schaltflächen sozialer Netzwerke eingebunden.
            </p>
            <p>
              Die verwendeten Schriften werden vom eigenen Server ausgeliefert.
              Beim Aufruf der Seite entsteht keine Verbindung zu Google.
            </p>
            <p>
              Ein seitenweites Einwilligungsbanner gibt es nicht, weil beim
              normalen Aufruf nichts einwilligungspflichtig ist. Die einzige
              Ausnahme ist die Karte auf der Kontaktseite, und dort wird
              genau an dieser Stelle gefragt.
            </p>
          </Block>

          <section id="einwilligung" className="border-t border-rule py-8">
            <h2 className="text-[1.1875rem] font-semibold text-night">
              Einwilligung verwalten
            </h2>
            <div className="mt-5">
              <EinwilligungSchalter />
            </div>
          </section>

          <Block titel="Karten auf dieser Website">
            <p>
              Die Karte, die Sie auf der Startseite und auf der Kontaktseite
              sehen, ist ein <strong className="font-semibold text-ink">Bild
              auf unserem eigenen Server</strong>. Beim Aufruf der Seite wird
              dafür keine Verbindung zu Dritten aufgebaut und es werden keine
              Daten übertragen. Die Kartendaten stammen von OpenStreetMap und
              wurden einmalig von uns heruntergeladen.
            </p>
            <p>
              Zusätzlich können Sie eine interaktive Karte zum Zoomen laden.
              Diese wird{" "}
              <strong className="font-semibold text-ink">
                erst nach Ihrer ausdrücklichen Zustimmung
              </strong>{" "}
              von Google Maps geladen, einem Dienst der Google Ireland
              Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Stimmen Sie zu, übermittelt Ihr Browser die technisch
              notwendigen Verbindungsdaten an Google, insbesondere Ihre
              IP-Adresse; eine Übertragung in die USA ist dabei möglich.
              Rechtsgrundlage ist Ihre Einwilligung nach Art. 6 Abs. 1
              lit. a DSGVO in Verbindung mit § 25 Abs. 1 TDDDG. Näheres in
              der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-petrol underline underline-offset-2"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
            <p>
              Ihre Entscheidung wird auf Wunsch lokal in Ihrem Browser
              gespeichert, damit die Frage nicht bei jedem Besuch erneut
              erscheint. Sie können die Zustimmung jederzeit widerrufen: Unter
              der Karte finden Sie dafür eine Schaltfläche. Der Widerruf ist
              damit genauso einfach wie die Zustimmung.
            </p>
          </Block>

          <Block titel="Server-Logdateien">
            <p>
              Beim Aufruf der Website übermittelt Ihr Browser technisch
              notwendige Daten, die der Hoster in Logdateien speichert: IP-Adresse,
              Datum und Uhrzeit, aufgerufene Adresse, übertragene Datenmenge,
              Browsertyp und Betriebssystem.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte
              Interesse liegt im sicheren und störungsfreien Betrieb der Website.
              Eine Zusammenführung dieser Daten mit anderen Quellen findet nicht
              statt.
            </p>
            <p className="rounded-sm bg-paper p-4 text-[0.9375rem]">
              Noch zu ergänzen: Name und Anschrift des Hosters sowie die
              Speicherdauer der Logdateien. Beides steht erst fest, wenn der
              Hostingvertrag geschlossen ist.
            </p>
          </Block>

          <Block titel="Rezept- und Überweisungsanfragen">
            <p>
              Wenn Sie das Formular auf dieser Website nutzen, übermitteln wir
              Ihre Angaben über eine verschlüsselte Verbindung an das Postfach
              der Praxis. Auf dieser Website werden sie{" "}
              <strong className="font-semibold text-ink">nicht gespeichert</strong>: Es
              gibt keine Datenbank und keine Kopie.
            </p>
            <p>
              Verarbeitet werden Name, Geburtsdatum, Ihre Angaben zum
              Medikament beziehungsweise zur gewünschten Fachrichtung und, wenn
              Sie sie angeben, Ihre Telefonnummer. Diese Angaben gehören zu den
              Gesundheitsdaten nach Art. 9 DSGVO.
            </p>
            <p>
              Rechtsgrundlage ist Ihre ausdrückliche Einwilligung nach Art. 9
              Abs. 2 lit. a DSGVO, die Sie im Formular erteilen. Sie können sie
              jederzeit widerrufen; rufen Sie uns dazu bitte an. Die weitere
              Aufbewahrung in der Praxis richtet sich nach den ärztlichen
              Dokumentationspflichten.
            </p>
          </Block>

          <Block titel="Kontaktaufnahme">
            <p>
              Wenn Sie uns anrufen oder eine E-Mail schreiben, verarbeiten wir
              Ihre Angaben, um Ihr Anliegen zu bearbeiten. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. b DSGVO, bei medizinischen Angaben zusätzlich
              Art. 9 Abs. 2 lit. h DSGVO.
            </p>
            <p>
              Bitte beachten Sie: Eine unverschlüsselte E-Mail kann auf dem Weg
              mitgelesen werden. Senden Sie uns deshalb keine Befunde und keine
              Angaben zu Ihrer Gesundheit per E-Mail.
            </p>
          </Block>

          {terminBuchung() && (
            <Block titel="Online-Terminbuchung">
              <p>
                Die Schaltfläche „Termin buchen" führt zu{" "}
                {terminBuchung()!.anbieter}, einem externen Anbieter für
                Arzttermine. Erst dort geben Sie Daten ein; diese Website
                überträgt beim Klick keine Daten über Sie an den Anbieter.
              </p>
              <p>
                Für die Verarbeitung beim Anbieter gilt dessen
                Datenschutzerklärung. Termine können Sie jederzeit auch
                telefonisch vereinbaren.
              </p>
            </Block>
          )}

          <Block titel="Ihre Rechte">
            <p>
              Sie haben das Recht auf Auskunft über die zu Ihrer Person
              gespeicherten Daten, auf Berichtigung, auf Löschung, auf
              Einschränkung der Verarbeitung, auf Datenübertragbarkeit sowie
              das Recht, einer Verarbeitung zu widersprechen.
            </p>
            <p>
              Außerdem können Sie sich bei einer Aufsichtsbehörde beschweren.
              Zuständig ist die Landesbeauftragte für Datenschutz und
              Informationsfreiheit Nordrhein-Westfalen.
            </p>
          </Block>

          <Block titel="Hinweis zu diesem Text">
            <p>
              Diese Erklärung ist ein sorgfältig erstellter Entwurf und keine
              Rechtsberatung. Vor dem Livegang sollte sie anwaltlich geprüft und
              um den tatsächlichen Hoster ergänzt werden.
            </p>
            <p>
              Zurück zur{" "}
              <Link href="/" className="font-medium text-petrol underline underline-offset-2">
                Startseite
              </Link>
              .
            </p>
          </Block>
        </div>
      </div>
    </>
  );
}
