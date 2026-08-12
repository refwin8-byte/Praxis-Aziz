import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { praxis, aerzte } from "@/data/praxis";
import { SeitenKopf } from "@/components/seiten-kopf";
import { Pfeil } from "@/components/icons";

export const metadata: Metadata = {
  title: "Praxis",
  description:
    "Die Hausarztpraxis Dr. med. Adel Aziz in Espelkamp: Ärzte, Räume und wie wir arbeiten.",
  alternates: { canonical: "/praxis" },
};

export default function Praxis() {
  return (
    <>
      <SeitenKopf
        titel="Die Praxis"
        einleitung="Eine Hausarztpraxis mitten in Espelkamp, in der die meisten Untersuchungen im Haus stattfinden."
      />

      {/* Haltung, nicht Werbung. Formuliert aus dem, was die Bestandsseite
          über die Arbeitsweise sagt, ohne neue Versprechen. */}
      <section className="container-page section grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <h2 className="h2 text-night">Zeit für das Gespräch</h2>
          <div className="mt-7 flex max-w-[65ch] flex-col gap-5 text-[1.0625rem]">
            <p>
              Eine gute hausärztliche Betreuung beginnt damit, dass jemand
              zuhört und den Verlauf kennt. Viele unserer Patientinnen und
              Patienten kommen seit Jahren zu uns, manche mit der ganzen
              Familie.
            </p>
            <p>
              Wir führen die wichtigsten Untersuchungen selbst durch: EKG und
              Langzeitmessungen, Ultraschall, Lungenfunktion und Labor. Das
              spart Ihnen Wege und verkürzt die Zeit bis zum Befund.
            </p>
            <p>
              Für Menschen, die die Praxis nicht selbst erreichen können,
              machen wir Hausbesuche. Sprechen Sie uns bitte telefonisch
              darauf an.
            </p>
          </div>
        </div>

        <div className="relative aspect-4/5 overflow-hidden rounded-lg bg-rule/40">
          <Image
            src="/bilder/praxis-wartebereich.webp"
            alt="Wartebereich der Praxis mit schwarzen Stühlen, Zeitschriftenregal und Fenster zum Grünen"
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Ärzte. Für Dennis Aziz existiert kein Foto, deshalb steht er rein
          typografisch. Ein generiertes Gesicht wäre eine Fälschung. */}
      <section className="border-y border-rule bg-paper" aria-labelledby="aerzte">
        <div className="container-page section">
          <h2 id="aerzte" className="h2 text-night">
            Ärzte
          </h2>

          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:gap-16">
            {aerzte.map((a) => (
              <article key={a.name}>
                <div className="relative aspect-4/5 overflow-hidden rounded-lg bg-rule/40">
                  <Image
                    src={a.bild}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 640px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-7 border-t border-rule pt-6 font-serif text-[1.75rem] font-normal text-night">
                  {a.name}
                </h3>
                <p className="mt-2 font-semibold text-petrol">{a.rolle}</p>
                {a.titel ? (
                  <p className="mt-3 text-ink-soft">{a.titel}</p>
                ) : (
                  <p className="mt-3 text-ink-soft">
                    Angestellter Arzt der Praxis. Angaben zu Fachrichtung und
                    Werdegang ergänzen wir, sobald sie vorliegen.
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page section">
        <div className="flex flex-col items-start gap-8 border-t-2 border-night pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="h2 text-night">Sie möchten zu uns kommen?</h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Adresse, Sprechzeiten und Anfahrt finden Sie auf der
              Kontaktseite.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="press inline-flex min-h-14 shrink-0 items-center gap-2.5 rounded-md bg-night px-8 text-[1.0625rem] font-semibold text-white transition-colors hover:bg-night-deep"
          >
            Kontakt und Anfahrt
            <Pfeil size={19} />
          </Link>
        </div>
      </section>
    </>
  );
}
