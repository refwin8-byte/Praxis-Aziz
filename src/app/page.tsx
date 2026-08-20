import Link from "next/link";
import Image from "next/image";
import { praxis, aerzte, leistungen } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";
import { Oeffnungsstatus } from "@/components/oeffnungsstatus";
import { Telefon, Uhr, Pin, Pfeil } from "@/components/icons";
import { AnfrageAktionen } from "@/components/anfrage-aktionen";
import { Reveal } from "@/components/reveal";
import { Zahlen } from "@/components/zahlen";
import { Karte } from "@/components/karte";
import { GoogleBewertung } from "@/components/google-bewertung";
import { terminBuchung } from "@/lib/termin";

export default function Startseite() {
  const zeiten = gruppierteZeiten();
  const buchung = terminBuchung();

  return (
    <>
      {/* 1 — Auftakt. Echtes Foto, klare Aussage, Status und Telefon sofort
          sichtbar. Der eine komponierte Bewegungsmoment der ganzen Seite. */}
      <section className="container-page grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-20 lg:pb-24">
        <div>
          <p className="label enter text-petrol" style={{ "--d": "0ms" } as React.CSSProperties}>
            Hausarztpraxis in Espelkamp
          </p>

          <h1
            className="display enter mt-5 text-night"
            style={{ "--d": "60ms" } as React.CSSProperties}
          >
            Hausärztliche Versorgung für die ganze Familie.
          </h1>

          <p className="lead enter mt-7" style={{ "--d": "120ms" } as React.CSSProperties}>
            Seit vielen Jahren begleiten wir Menschen in Espelkamp und
            Umgebung, vom akuten Infekt bis zur jahrelangen Betreuung bei
            Diabetes oder Herzerkrankung. Mit Zeit für das Gespräch und
            Diagnostik im eigenen Haus.
          </p>

          {/* Primäraktion je nach Ausbaustufe: Gibt es eine Onlinebuchung,
              führt sie an — sonst ist das Telefon der schnellste Weg zum
              Termin und steht vorn. Nie beides gleich laut. */}
          <div
            className="enter mt-9 flex flex-wrap items-center gap-4"
            style={{ "--d": "180ms" } as React.CSSProperties}
          >
            {buchung ? (
              <>
                <Link
                  href="/patientenservice/termin"
                  className="press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-md bg-night px-7 text-[1.125rem] font-semibold text-white transition-colors hover:bg-night-deep"
                >
                  Termin buchen
                  <Pfeil size={19} />
                </Link>
                <Link
                  href="/patientenservice/rezept"
                  className="press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-md border border-night/25 px-7 text-[1.0625rem] font-semibold text-night transition-colors hover:border-night hover:bg-night/5"
                >
                  Rezept anfordern
                </Link>
                <a
                  href={praxis.telefonHref}
                  className="press inline-flex min-h-14 items-center justify-center gap-2.5 px-2 text-[1.0625rem] font-semibold text-night underline-offset-4 hover:underline"
                >
                  <Telefon size={19} />
                  <span className="num">{praxis.telefon}</span>
                </a>
              </>
            ) : (
              <>
                <a
                  href={praxis.telefonHref}
                  className="press inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-night px-7 text-[1.125rem] font-semibold text-white transition-colors hover:bg-night-deep"
                >
                  <Telefon size={20} />
                  <span className="num">{praxis.telefon}</span>
                </a>
                <Link
                  href="/patientenservice/rezept"
                  className="press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-md border border-night/25 px-7 text-[1.0625rem] font-semibold text-night transition-colors hover:border-night hover:bg-night/5"
                >
                  Rezept anfordern
                  <Pfeil size={19} />
                </Link>
              </>
            )}
          </div>

          <div
            className="enter mt-8 border-t border-rule pt-6"
            style={{ "--d": "240ms" } as React.CSSProperties}
          >
            <Oeffnungsstatus className="text-[1.0625rem]" />
            <p className="mt-2 text-[0.9375rem] text-ink-soft">
              {buchung
                ? "Termine buchen Sie online oder telefonisch. Für die Sprechstunde bringen Sie bitte Ihre Versichertenkarte mit."
                : "Termine vereinbaren wir telefonisch. Für die Sprechstunde bringen Sie bitte Ihre Versichertenkarte mit."}
            </p>
          </div>
        </div>

        <div className="bild-auftakt relative aspect-4/5 overflow-hidden rounded-lg bg-rule/40 lg:aspect-3/4">
          <Image
            src="/bilder/praxis-anmeldung.webp"
            alt="Die Anmeldung der Praxis mit hellem Empfangstresen, Kunstdrucken an der Wand und dem Schild Anmeldung"
            fill
            priority
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* 2 — Die drei Aktionen. Auf Nachtgrund, weil sie das Ziel der Seite
          sind. Haarlinien statt drei gleicher Karten. */}
      <section className="bg-night text-white" aria-labelledby="erledigen">
        <div className="container-page section">
          <h2 id="erledigen" className="h2 max-w-2xl">
            Termin, Rezept und Überweisung
          </h2>
          <p className="mt-5 max-w-2xl text-white/75">
            Drei Anliegen, drei Wege. Damit es schnell geht, halten Sie bitte
            bereit, was bei jedem Weg steht.
          </p>

          <AnfrageAktionen />
        </div>
      </section>

      {/* 3 — Wer behandelt. Beide Ärzte mit echtem Porträt, nebeneinander
          und gleich groß: In einer Praxis mit zwei Ärzten entscheidet die
          Darstellung mit, wen Patienten als ansprechbar wahrnehmen. */}
      <section className="container-page section" aria-labelledby="aerzte">
        <div className="max-w-2xl">
          <h2 id="aerzte" className="h2 text-night">
            Wer Sie behandelt
          </h2>
          <p className="lead mt-5">
            Zwei Ärzte, eine Praxis. Wen Sie sehen, hängt vom Termin ab, der
            Verlauf ist beiden bekannt.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:gap-14">
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
              <h3 className="mt-6 border-t border-rule pt-5 font-serif text-[1.5rem] font-normal text-night">
                {a.name}
              </h3>
              <p className="mt-1.5 text-[0.9375rem] font-semibold text-petrol">{a.rolle}</p>
              {a.titel && <p className="mt-2.5 text-ink-soft">{a.titel}</p>}
            </article>
          ))}
        </div>

        <p className="mt-10 text-[0.9375rem] text-ink-soft">
          Mehr über die Praxis und ihre Arbeitsweise auf der{" "}
          <Link href="/praxis" className="font-medium text-petrol underline underline-offset-2">
            Praxisseite
          </Link>
          .
        </p>
      </section>

      {/* 3b — Ein Blick in die Praxis, über die volle Breite. Echtes Foto des
          Wartebereichs, kein Stock. Es steht bewusst ohne Text darüber: An
          dieser Stelle soll die Seite einmal atmen, bevor die Leistungen
          kommen. Das Seitenverhältnis ist flach, damit es auf dem Handy
          nicht den halben Bildschirm frisst. */}
      <Reveal>
        <div className="relative aspect-16/10 w-full overflow-hidden bg-rule/40 sm:aspect-21/9">
          <Image
            src="/bilder/praxis-wartebereich.webp"
            alt="Blick in den Wartebereich der Praxis mit Sitzreihen, Zeitschriftenregal und Fenster zum Grünen"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* 4 — Leistungen in drei Gruppen, wie im Brief gefordert. */}
      <section className="border-y border-rule bg-paper" aria-labelledby="leistungen">
        <div className="container-page section">
          <div className="max-w-2xl">
            <h2 id="leistungen" className="h2 text-night">
              Was wir behandeln
            </h2>
            <p className="lead mt-5">
              Hausärztliche Grundversorgung, dazu zwei Schwerpunkte: Manuelle
              Medizin und Suchtmedizin.
            </p>
          </div>

          <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-3">
            {leistungen.map((g) => (
              <div key={g.id}>
                <h3 className="border-b border-rule pb-4 text-[1.3125rem] text-night">
                  {g.titel}
                </h3>
                <p className="mt-5 text-[0.9375rem] text-ink-soft">{g.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {g.punkte.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/leistungen"
            className="press mt-12 inline-flex min-h-12 items-center gap-2.5 font-semibold text-petrol underline-offset-4 hover:underline"
          >
            Alle Leistungen im Detail
            <Pfeil size={19} />
          </Link>
        </div>
      </section>

      {/* 5 — Vertrauen. Zuerst die Zahlen, dann die Haltung dahinter.
          Bewusst keine Sterne und keine Bewertungen: Es gibt keine
          nachweisbaren, und erfundene wären eine Täuschung. */}
      <section className="container-page section" aria-labelledby="vertrauen">
        <Reveal>
          <div className="max-w-2xl">
            <h2 id="vertrauen" className="h2 text-night">
              Woran Sie sich orientieren können
            </h2>
            <p className="lead mt-5">
              Keine Sterne, keine Bewertungsportale. Nur das, was sich an
              dieser Praxis überprüfen lässt.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-16">
          <Zahlen />
        </Reveal>

        {/* Die eine echte Fremdbewertung: der Google-Gesamtwert mit Link zur
            Quelle. Kein Widget (Datenschutz), keine herausgegriffenen Zitate
            (§ 11 HWG) — nur die überprüfbare Zahl. */}
        <Reveal delay={120} className="mt-12">
          <GoogleBewertung />
        </Reveal>

        {/* Haltungssatz statt Testimonial. Er stammt erkennbar von der
            Praxis selbst und gibt nicht vor, die Stimme eines Patienten
            zu sein. */}
        <Reveal delay={140} className="mt-20">
          <div className="grid gap-12 border-t-2 border-night pt-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
            <p className="font-serif text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.25] text-night">
              Persönliche hausärztliche Begleitung in Espelkamp — für Menschen,
              die wissen möchten, wer sie behandelt.
            </p>

            <ul className="rule-list border-t border-rule">
              {[
                {
                  t: "Ärztekammer Westfalen-Lippe",
                  d: "Berufsbezeichnung und berufsrechtliche Regelungen im Impressum.",
                },
                {
                  t: "Diagnostik im eigenen Haus",
                  d: "EKG, Langzeitmessungen, Ultraschall und Lungenfunktion ohne zweiten Weg.",
                },
                {
                  t: "Hausbesuche",
                  d: "Für alle, die die Praxis nicht selbst erreichen können.",
                },
              ].map((f) => (
                <li key={f.t} className="py-5 first:pt-0">
                  <p className="font-semibold text-night">{f.t}</p>
                  <p className="mt-1.5 text-[0.9375rem] text-ink-soft">{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-10 max-w-2xl text-[0.9375rem] text-ink-soft">
          Angaben zur Berufsbezeichnung und zu den berufsrechtlichen
          Regelungen finden Sie im{" "}
          <Link href="/impressum" className="font-medium text-petrol underline underline-offset-2">
            Impressum
          </Link>
          .
        </p>
      </section>

      {/* 6 — Sprechzeiten und Weg. Zusammen, weil beides dieselbe Frage
          beantwortet: Wann und wo finde ich Sie? */}
      <section className="bg-night text-white" aria-labelledby="finden">
        <div className="container-page section grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <h2 id="finden" className="h2">
              Sprechzeiten und Anfahrt
            </h2>
            <p className="mt-5 text-white/75">
              Wir bitten um telefonische Anmeldung. Bei akuten Beschwerden
              kommen Sie bitte zu Beginn der Sprechstunde.
            </p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="label flex items-center gap-2.5 text-sage">
                <Uhr size={18} />
                Sprechzeiten
              </h3>
              <dl className="mt-6 rule-list border-t border-white/15">
                {zeiten.map((g) => (
                  <div key={g.tage} className="flex justify-between gap-4 border-white/15 py-3.5">
                    <dt className="font-semibold">{g.tage}</dt>
                    <dd className="num text-right text-white/85">
                      {g.zeiten.map((z) => (
                        <span key={z.von} className="block">
                          {z.von} – {z.bis}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
                <div className="flex justify-between gap-4 border-white/15 py-3.5">
                  <dt className="font-semibold">Sa, So</dt>
                  <dd className="text-white/60">geschlossen</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="label flex items-center gap-2.5 text-sage">
                <Pin size={18} />
                Adresse
              </h3>
              <address className="mt-6 not-italic text-[1.0625rem] leading-relaxed">
                {praxis.name}
                <br />
                {praxis.adresse.strasse}
                <br />
                {praxis.adresse.plz} {praxis.adresse.ort}
              </address>
              <Link
                href="/kontakt"
                className="press mt-6 inline-flex min-h-12 items-center gap-2.5 font-semibold text-sage underline-offset-4 hover:underline"
              >
                Anfahrt und Kontakt
                <Pfeil size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6b — Die Karte direkt unter Sprechzeiten und Anfahrt. Ohne eigene
          Überschrift, weil der Abschnitt darüber sie bereits trägt. Auf
          hellem Grund, damit der Kartenausschnitt nicht gegen das Nachtblau
          antreten muss. Lädt weiterhin erst nach Einwilligung. */}
      <div className="border-t border-rule">
        <div className="container-page section">
          <Karte ueberschrift={null} einleitung={null} id="karte-start" />
        </div>
      </div>

      {/* 7 — Letzter Weg für alle, die bis hierher gelesen haben. */}
      <section className="container-page section">
        <div className="flex flex-col items-start gap-8 border-t-2 border-night pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="h2 text-night">Noch eine Frage offen?</h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Rufen Sie uns an. Während der Sprechzeiten ist die Anmeldung
              besetzt.
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
      </section>
    </>
  );
}
