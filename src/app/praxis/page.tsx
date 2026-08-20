import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { praxis, aerzte } from "@/data/praxis";
import { praxisLoop, praxisBand } from "@/data/medien";
import { PraxisVideo } from "@/components/praxis-video";
import { Reveal } from "@/components/reveal";
import { Pfeil } from "@/components/icons";

export const metadata: Metadata = {
  title: "Praxis",
  description:
    "Die Hausarztpraxis Dr. med. Adel Aziz in Espelkamp: Ärzte, Räume und wie wir arbeiten.",
  alternates: { canonical: "/praxis" },
};

/** Das Hero-Foto — als ruhiger Loop, sobald das Asset freigegeben ist,
 *  sonst als Standbild. Beides ist dieselbe echte Aufnahme. */
function HeroBild() {
  const alt =
    "Wartebereich der Praxis mit schwarzen Stühlen, Zeitschriftenregal und Fenster zum Grünen";
  if (praxisLoop) {
    return (
      <PraxisVideo
        asset={praxisLoop}
        alt={alt}
        priority
        className="rounded-lg"
        sizes="(min-width: 1024px) 38vw, 100vw"
      />
    );
  }
  return (
    <div className="relative aspect-4/5 overflow-hidden rounded-lg bg-rule/40">
      <Image
        src="/bilder/praxis-wartebereich.webp"
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 38vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

export default function Praxis() {
  return (
    <>
      {/* Hero, Variante B: Die Überschrift teilt sich den ersten Viewport
          mit dem echten Foto, und das Foto überlappt in den nächsten
          Abschnitt — Bild und Folgeinhalt sind sofort sichtbar. */}
      <header>
        <div className="container-page grid gap-10 pt-10 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-14">
          <div className="pb-4 lg:pb-14">
            <h1 className="display max-w-3xl text-night">Die Praxis</h1>
            <p className="lead mt-5">
              Eine Hausarztpraxis mitten in Espelkamp, in der die meisten
              Untersuchungen im Haus stattfinden.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-t border-rule pt-5 text-[0.9375rem] font-semibold text-night">
              {["Zwei Ärzte", "Drei Schwerpunkte", "Diagnostik im Haus"].map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-petrol" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 lg:-mb-28">
            <Reveal className="reveal-bild">
              <HeroBild />
            </Reveal>
            {/* Redaktionelle Bildunterschrift: knapp, faktisch, keine Werbung. */}
            <p className="mt-3 text-[0.875rem] text-ink-soft">
              Der Wartebereich der Praxis an der Ostlandstraße.
            </p>
          </div>
        </div>
      </header>

      {/* Haltung, nicht Werbung. Die rechte Spalte bleibt oben frei — dort
          hängt das Hero-Foto in die Fläche hinein. */}
      <section className="border-t border-rule bg-paper">
        <div className="container-page grid gap-12 pt-14 pb-16 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-20 lg:pb-24">
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
          <div aria-hidden="true" className="hidden lg:block" />
        </div>
      </section>

      {/* Faktenband auf Petrol: kurzer Rhythmuswechsel zwischen Text und
          Ärzten. Nur Belegtes, keine Superlative. Dahinter liegt der ruhige
          Anmeldungs-Loop als Atmosphäre — stark abgedunkelt, damit die
          Fakten lesbar bleiben und das Video Hintergrund bleibt. Auf Mobil
          und bei reduced motion liegt nur das Standbild dahinter. */}
      <section
        className="relative overflow-hidden bg-night text-white"
        aria-label="Die Praxis in Kürze"
      >
        {praxisBand && (
          <PraxisVideo asset={praxisBand} alt="" fuellend sizes="100vw" />
        )}
        <div aria-hidden="true" className="absolute inset-0 bg-night/85" />
        <div className="container-page relative py-12 lg:py-14">
          <Reveal>
            <div className="linie h-px w-full bg-white/15" aria-hidden="true" />
            <dl className="grid gap-x-12 gap-y-8 pt-8 sm:grid-cols-3">
              {[
                ["Drei Schwerpunkte", "Allgemeinmedizin, Manuelle Medizin und Suchtmedizin."],
                ["Diagnostik im Haus", "EKG, Langzeitmessungen, Ultraschall, Lungenfunktion, Labor."],
                ["Hausbesuche", "Für alle, die die Praxis nicht selbst erreichen können."],
              ].map(([t, d]) => (
                <div key={t}>
                  <dt className="font-semibold text-sage-bright">{t}</dt>
                  <dd className="mt-2 text-[0.9375rem] text-white/75">{d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Ärzte. Für Dennis Aziz existiert kein Foto, deshalb steht er rein
          typografisch. Ein generiertes Gesicht wäre eine Fälschung. */}
      <section className="border-b border-rule" aria-labelledby="aerzte">
        <div className="container-page section">
          <h2 id="aerzte" className="h2 text-night">
            Ärzte
          </h2>

          <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:gap-16">
            {aerzte.map((a, i) => (
              <Reveal key={a.name} delay={i * 80}>
                <article>
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
              </Reveal>
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
