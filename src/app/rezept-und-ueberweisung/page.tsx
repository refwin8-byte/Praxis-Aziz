import type { Metadata } from "next";
import { SeitenKopf } from "@/components/seiten-kopf";
import { RezeptFormular, UeberweisungFormular } from "@/components/anfrage-formulare";
import { notfall, praxis } from "@/data/praxis";
import { Telefon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Rezept und Überweisung anfordern",
  description:
    "Folgerezept und Überweisung online anfordern, ohne in die Praxis zu kommen. Verschlüsselte Übertragung, keine Speicherung, mit Hinweisen zu Bearbeitungszeit und Notfallwegen.",
  alternates: { canonical: "/rezept-und-ueberweisung" },
};

export default function RezeptUndUeberweisung() {
  return (
    <>
      <SeitenKopf
        titel="Rezept und Überweisung"
        einleitung="Beides können Sie hier anfordern, ohne in die Praxis zu kommen. Was Sie dafür brauchen und wie lange es dauert, steht direkt darunter."
      />

      {/* Erwartungen zuerst, Formular danach. Wer weiß, wie lange es dauert,
          ruft nicht nach zwei Stunden verunsichert an. */}
      <section className="bg-night text-white" aria-labelledby="ablauf">
        <div className="container-page py-14 lg:py-16">
          <h2 id="ablauf" className="label text-sage-bright">
            Bevor Sie ausfüllen
          </h2>
          <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold">Bearbeitungszeit</p>
              <p className="mt-2 text-[0.9375rem] text-white/75">
                Bitte planen Sie zwei Werktage ein. An Wochenenden und
                Feiertagen bearbeiten wir keine Anfragen.
              </p>
            </div>
            <div>
              <p className="font-semibold">Voraussetzung</p>
              <p className="mt-2 text-[0.9375rem] text-white/75">
                Sie sind Patientin oder Patient dieser Praxis und Ihre
                Versichertenkarte wurde im laufenden Quartal eingelesen.
              </p>
            </div>
            <div>
              <p className="font-semibold">Übertragung</p>
              <p className="mt-2 text-[0.9375rem] text-white/75">
                Ihre Angaben werden verschlüsselt an die Praxis übermittelt und
                auf dieser Website nicht gespeichert.
              </p>
            </div>
            <div>
              <p className="font-semibold">Im Notfall</p>
              <p className="mt-2 text-[0.9375rem] text-white/75">
                Wählen Sie 112. Warten Sie dann nicht auf eine Antwort über
                dieses Formular.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page section grid gap-14 lg:grid-cols-2 lg:gap-16">
        <section id="rezept" aria-labelledby="rezept-titel" className="scroll-mt-28">
          <h2 id="rezept-titel" className="h2 text-night">
            Folgerezept
          </h2>
          <p className="mt-4 text-ink-soft">
            Für Medikamente, die Sie regelmäßig einnehmen.
          </p>
          <div className="mt-9">
            <RezeptFormular />
          </div>
        </section>

        <section id="ueberweisung" aria-labelledby="ueberweisung-titel" className="scroll-mt-28">
          <h2 id="ueberweisung-titel" className="h2 text-night">
            Überweisung
          </h2>
          <p className="mt-4 text-ink-soft">
            Für den Besuch bei einer Fachärztin oder einem Facharzt.
          </p>
          <div className="mt-9">
            <UeberweisungFormular />
          </div>
        </section>
      </div>

      <section className="border-t border-rule bg-paper">
        <div className="container-page section grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <h2 className="h2 text-night">Was mit Ihren Angaben geschieht</h2>
            <div className="mt-7 flex max-w-[65ch] flex-col gap-5 text-[1.0625rem]">
              <p>
                Ihre Angaben werden über eine verschlüsselte Verbindung direkt
                an das Postfach der Praxis übermittelt. Auf dieser Website
                werden sie nicht gespeichert: Es gibt keine Datenbank und keine
                Kopie.
              </p>
              <p>
                Rechtsgrundlage ist Ihre ausdrückliche Einwilligung nach
                Art. 9 Abs. 2 lit. a DSGVO. Sie können sie jederzeit
                widerrufen, indem Sie uns anrufen.
              </p>
              <p className="text-ink-soft">
                Bitte schicken Sie uns Gesundheitsangaben nicht aus Ihrem
                eigenen E-Mail-Programm. Dieser Weg ist unverschlüsselt. Das
                Formular hier ist es nicht.
              </p>
            </div>

            <a
              href={praxis.telefonHref}
              className="press mt-9 inline-flex min-h-13 items-center gap-3 rounded-md border border-night/25 px-6 font-semibold text-night transition-colors hover:border-night"
            >
              <Telefon size={19} />
              <span className="num">{praxis.telefon}</span>
            </a>
          </div>

          {/* Notfallhinweis als eigener, farblich abgesetzter Block: Er ist
              der wichtigste Satz dieser Seite. */}
          <aside className="h-fit rounded-md border-2 border-alert p-7" aria-labelledby="notfall">
            <h2 id="notfall" className="text-[1.3125rem] font-semibold text-alert">
              Im Notfall nicht warten
            </h2>
            <p className="mt-4 text-ink-soft">
              Eine Anfrage über dieses Formular wird zu den Sprechzeiten
              bearbeitet, nicht sofort. Wenn es dringend ist, nutzen Sie bitte
              diese Wege.
            </p>

            <ul className="mt-7 flex flex-col gap-6">
              {[notfall.lebensbedrohlich, notfall.bereitschaft].map((n) => (
                <li key={n.nummer}>
                  <a
                    href={n.href}
                    className="num inline-flex min-h-12 items-center text-[1.75rem] font-semibold text-alert underline-offset-4 hover:underline"
                  >
                    {n.nummer}
                  </a>
                  <p className="mt-1 font-medium text-night">{n.label}</p>
                  <p className="text-[0.9375rem] text-ink-soft">{n.hinweis}</p>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-rule pt-5 text-[0.875rem] text-ink-soft">
              Diese Website gibt keine medizinische Beratung. Die Hinweise
              ersetzen kein ärztliches Gespräch.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
