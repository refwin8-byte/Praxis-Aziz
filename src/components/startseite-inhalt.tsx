"use client";

import Link from "next/link";
import Image from "next/image";
import { praxis, aerzte } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";
import { Oeffnungsstatus } from "@/components/oeffnungsstatus";
import { Telefon, Uhr, Pin, Pfeil } from "@/components/icons";
import { AnfrageAktionen } from "@/components/anfrage-aktionen";
import { Reveal } from "@/components/reveal";
import { Zahlen } from "@/components/zahlen";
import { Karte } from "@/components/karte";
import { GoogleBewertung } from "@/components/google-bewertung";
import { PraxisVideo } from "@/components/praxis-video";
import { heroLoop } from "@/data/medien";
import { useSprache } from "@/lib/i18n";

/**
 * Startseite, vollständig übersetzbar. Der Server-Wrapper (app/page.tsx)
 * liefert `anbieter` aus der Termin-Konfiguration; alles Sichtbare kommt
 * aus dem Wörterbuch der gewählten Sprache. Die Ärztedaten (Namen, Fotos)
 * bleiben in praxis.ts — Namen werden nicht übersetzt, Rollen und
 * Facharztbezeichnung schon.
 */
export function StartseiteInhalt({ anbieter }: { anbieter: string | null }) {
  const { wb } = useSprache();
  const zeiten = gruppierteZeiten();
  const deTage = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const uebertrage = (tage: string) =>
    tage.split(", ").map((t) => wb.wochentageKurz[deTage.indexOf(t)] ?? t).join(", ");

  return (
    <>
      {/* 1 — Auftakt. */}
      <section className="container-page grid items-center gap-12 pt-12 pb-16 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-20 lg:pb-24">
        <div>
          <p className="label enter text-petrol" style={{ "--d": "0ms" } as React.CSSProperties}>
            {wb.start.eyebrow}
          </p>

          <h1 className="display enter mt-5 text-night" style={{ "--d": "60ms" } as React.CSSProperties}>
            {wb.start.headline}
          </h1>

          <p className="lead enter mt-7" style={{ "--d": "120ms" } as React.CSSProperties}>
            {wb.start.text}
          </p>

          <div
            className="enter mt-9 flex flex-wrap items-center gap-4"
            style={{ "--d": "180ms" } as React.CSSProperties}
          >
            {anbieter ? (
              <>
                <Link
                  href="/patientenservice/termin"
                  className="press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-md bg-night px-7 text-[1.125rem] font-semibold text-white transition-colors hover:bg-night-deep"
                >
                  {wb.nav.terminBuchen}
                  <Pfeil size={19} />
                </Link>
                <Link
                  href="/patientenservice/rezept"
                  className="press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-md border border-night/25 px-7 text-[1.0625rem] font-semibold text-night transition-colors hover:border-night hover:bg-night/5"
                >
                  {wb.start.rezeptAnfordern}
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
                  {wb.start.rezeptAnfordern}
                  <Pfeil size={19} />
                </Link>
              </>
            )}
          </div>

          <div className="enter faden mt-8" style={{ "--d": "220ms" } as React.CSSProperties} aria-hidden="true" />
          <div className="enter mt-5" style={{ "--d": "240ms" } as React.CSSProperties}>
            <Oeffnungsstatus className="text-[1.0625rem]" />
            <p className="mt-2 text-[0.9375rem] text-ink-soft">
              {anbieter ? wb.start.statusHinweisOnline : wb.start.statusHinweis}
            </p>
          </div>
        </div>

        <div className="relative lg:-mb-20">
          <div
            aria-hidden="true"
            className="az-kreis absolute -top-10 -right-14 hidden h-56 w-56 opacity-60 lg:block"
          />
          <div className="bild-auftakt grade relative z-10 aspect-4/5 overflow-hidden rounded-lg bg-rule/40 shadow-[0_18px_44px_-28px_rgba(16,47,45,0.55)] lg:aspect-3/4">
            {heroLoop ? (
              <PraxisVideo
                asset={heroLoop}
                alt="Die Anmeldung der Praxis mit hellem Empfangstresen, Kunstdrucken an der Wand und dem Schild Anmeldung"
                priority
                className="h-full w-full"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
            ) : (
              <Image
                src="/bilder/praxis-anmeldung.webp"
                alt="Die Anmeldung der Praxis mit hellem Empfangstresen, Kunstdrucken an der Wand und dem Schild Anmeldung"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* 2 — Die drei Aktionen als Waldgrün-Kapitel. */}
      <section className="bg-wald text-white" aria-labelledby="erledigen">
        <div className="container-page section relative">
          <div aria-hidden="true" className="absolute left-[clamp(1.25rem,5vw,3.5rem)] top-0 h-10 w-0.5 bg-ocker" />
          <h2 id="erledigen" className="h2 max-w-2xl pt-4">
            {wb.start.wegeTitel}
          </h2>
          <p className="mt-5 max-w-2xl text-white/80">{wb.start.wegeText}</p>

          <AnfrageAktionen anbieter={anbieter} />
        </div>
      </section>

      {/* 3 — Wer behandelt. */}
      <section className="container-page section" aria-labelledby="aerzte">
        <div className="max-w-2xl">
          <h2 id="aerzte" className="h2 text-night">
            {wb.start.aerzteTitel}
          </h2>
          <p className="lead mt-5">{wb.start.aerzteText}</p>
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
              <p className="mt-1.5 text-[0.9375rem] font-semibold text-petrol">
                {a.rolle === "Praxisinhaber" ? wb.praxisSeite.rolleInhaber : wb.praxisSeite.rolleAngestellt}
              </p>
              {a.titel && <p className="mt-2.5 text-ink-soft">{wb.praxisSeite.facharztTitel}</p>}
            </article>
          ))}
        </div>

        <p className="mt-10 text-[0.9375rem] text-ink-soft">
          {wb.start.mehrPraxis}{" "}
          <Link href="/praxis" className="font-medium text-petrol underline underline-offset-2">
            {wb.start.praxisseite}
          </Link>
          .
        </p>
      </section>

      {/* 3b — Ein Blick in die Praxis. */}
      <Reveal>
        <div className="grade relative aspect-16/10 w-full overflow-hidden bg-rule/40 sm:aspect-21/9">
          <Image
            src="/bilder/praxis-wartebereich.webp"
            alt={wb.start.wartebereichAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Reveal>

      {/* 4 — Leistungen in drei Gruppen. */}
      <section className="border-y border-rule bg-paper" aria-labelledby="leistungen">
        <div className="container-page section">
          <div className="max-w-2xl">
            <h2 id="leistungen" className="h2 text-night">
              {wb.start.leistungenTitel}
            </h2>
            <p className="lead mt-5">{wb.start.leistungenText}</p>
          </div>

          <div className="mt-14 grid gap-x-14 gap-y-12 md:grid-cols-3">
            {[
              {
                titel: wb.leistungenSeite.diagnostikTitel,
                text: wb.leistungenSeite.diagnostikText,
                punkte: wb.leistungenSeite.diagnostikPunkte,
              },
              {
                titel: wb.leistungenSeite.chronischTitel,
                text: wb.leistungenSeite.chronischText,
                punkte: wb.leistungenSeite.chronischPunkte,
              },
              {
                titel: wb.leistungenSeite.weitereTitel,
                text: wb.leistungenSeite.weitereText,
                punkte: wb.leistungenSeite.weiterePunkte,
              },
            ].map((g) => (
              <div key={g.titel}>
                <h3 className="border-b border-rule pb-4 text-[1.3125rem] text-night">{g.titel}</h3>
                <p className="mt-5 text-[0.9375rem] text-ink-soft">{g.text}</p>
                <ul className="mt-5 space-y-2.5">
                  {g.punkte.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol" />
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
            {wb.start.alleLeistungen}
            <Pfeil size={19} />
          </Link>
        </div>
      </section>

      {/* 5 — Vertrauen. */}
      <section className="container-page section" aria-labelledby="vertrauen">
        <Reveal>
          <div className="max-w-2xl">
            <h2 id="vertrauen" className="h2 text-night">
              {wb.start.vertrauenTitel}
            </h2>
            <p className="lead mt-5">{wb.start.vertrauenText}</p>
          </div>
        </Reveal>

        <Reveal delay={80} className="mt-16">
          <Zahlen />
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <GoogleBewertung />
        </Reveal>

        <Reveal delay={140} className="mt-20">
          <div className="grid gap-12 border-t-2 border-night pt-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
            <p className="font-serif text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.25] text-night">
              {wb.start.haltungssatz}
            </p>

            <ul className="rule-list border-t border-rule">
              {wb.start.fakten.map((f) => (
                <li key={f.t} className="py-5 first:pt-0">
                  <p className="font-semibold text-night">{f.t}</p>
                  <p className="mt-1.5 text-[0.9375rem] text-ink-soft">{f.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="mt-10 max-w-2xl text-[0.9375rem] text-ink-soft">
          {wb.start.impressumSatz}{" "}
          <Link href="/impressum" className="font-medium text-petrol underline underline-offset-2">
            {wb.start.impressum}
          </Link>
          .
        </p>
      </section>

      {/* 6 — Sprechzeiten und Weg, vor dem grünen Espelkamp. */}
      <section className="relative overflow-hidden bg-night text-white" aria-labelledby="finden">
        <Image
          src="/bilder/gruen-espelkamp.webp"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-night/85" />
        <div className="container-page section relative grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div>
            <h2 id="finden" className="h2">
              {wb.start.findenTitel}
            </h2>
            <p className="mt-5 text-white/75">{wb.start.findenText}</p>
          </div>

          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="label flex items-center gap-2.5 text-sage">
                <Uhr size={18} />
                {wb.sprechzeiten.titel}
              </h3>
              <dl className="mt-6 rule-list border-t border-white/15">
                {zeiten.map((g) => (
                  <div key={g.tage} className="flex justify-between gap-4 border-white/15 py-3.5">
                    <dt className="font-semibold">{uebertrage(g.tage)}</dt>
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
                  <dt className="font-semibold">
                    {wb.wochentageKurz[5]}, {wb.wochentageKurz[6]}
                  </dt>
                  <dd className="text-white/60">{wb.sprechzeiten.geschlossen}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="label flex items-center gap-2.5 text-sage">
                <Pin size={18} />
                {wb.sprechzeiten.adresse}
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
                {wb.sprechzeiten.anfahrtKontakt}
                <Pfeil size={19} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6b — Die Karte. */}
      <div className="border-t border-rule">
        <div className="container-page section">
          <Karte ueberschrift={null} einleitung={null} id="karte-start" />
        </div>
      </div>

      {/* 7 — Letzter Weg. */}
      <section className="container-page section">
        <div className="flex flex-col items-start gap-8 border-t-2 border-night pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="h2 text-night">{wb.start.frageTitel}</h2>
            <p className="mt-3 max-w-xl text-ink-soft">{wb.start.frageText}</p>
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
