"use client";

import Image from "next/image";
import Link from "next/link";
import { aerzte } from "@/data/praxis";
import { praxisLoop, praxisBand } from "@/data/medien";
import { PraxisVideo } from "@/components/praxis-video";
import { Reveal } from "@/components/reveal";
import { useSprache } from "@/lib/i18n";
import { Pfeil } from "@/components/icons";

/** Praxis & Team, vollständig übersetzbar (Server-Wrapper: app/praxis). */
export function PraxisInhalt() {
  const { wb } = useSprache();
  const p = wb.praxisSeite;
  const wartebereichAlt = wb.start.wartebereichAlt;

  return (
    <>
      {/* Hero: Überschrift teilt sich den Viewport mit dem überlappenden Foto. */}
      <header>
        <div className="container-page grid gap-10 pt-10 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-14">
          <div className="pb-4 lg:pb-14">
            <h1 className="display max-w-3xl text-night">{p.titel}</h1>
            <p className="lead mt-5">{p.einleitung}</p>
            <div className="faden mt-8" aria-hidden="true" />
            <ul className="mt-5 flex flex-wrap gap-x-7 gap-y-2 text-[0.9375rem] font-semibold text-night">
              {p.fakten.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-petrol" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 lg:-mb-28">
            <Reveal className="reveal-bild">
              {praxisLoop ? (
                <PraxisVideo
                  asset={praxisLoop}
                  alt={wartebereichAlt}
                  priority
                  className="grade rounded-lg"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                />
              ) : (
                <div className="grade relative aspect-4/5 overflow-hidden rounded-lg bg-rule/40">
                  <Image
                    src="/bilder/praxis-wartebereich.webp"
                    alt={wartebereichAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </Reveal>
            <p className="mt-3 text-[0.875rem] text-ink-soft">{p.bildunterschrift}</p>
          </div>
        </div>
      </header>

      <section className="border-t border-rule bg-paper">
        <div className="container-page grid gap-12 pt-14 pb-16 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-20 lg:pb-24">
          <div>
            <h2 className="h2 text-night">{p.gespraechTitel}</h2>
            <div className="mt-7 flex max-w-[65ch] flex-col gap-5 text-[1.0625rem]">
              <p>{p.absatz1}</p>
              <p>{p.absatz2}</p>
              <p>{p.absatz3}</p>
            </div>
          </div>
          <div aria-hidden="true" className="hidden lg:block" />
        </div>
      </section>

      {/* Faktenband mit ruhigem Video dahinter. */}
      <section className="relative overflow-hidden bg-night text-white" aria-label={p.titel}>
        {praxisBand && <PraxisVideo asset={praxisBand} alt="" fuellend sizes="100vw" />}
        <div aria-hidden="true" className="absolute inset-0 bg-night/92" />
        <div className="container-page relative py-12 lg:py-14">
          <Reveal>
            <div className="linie h-px w-full bg-white/15" aria-hidden="true" />
            <dl className="grid gap-x-12 gap-y-8 pt-8 sm:grid-cols-3">
              {p.bandFakten.map((f) => (
                <div key={f.t}>
                  <dt className="font-semibold text-sage-bright">{f.t}</dt>
                  <dd className="mt-2 text-[0.9375rem] text-white/75">{f.d}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Ärzte auf warmem Salbeigrund. */}
      <section className="bg-salbei" aria-labelledby="aerzte">
        <div className="container-page section">
          <h2 id="aerzte" className="h2 text-night">
            {p.aerzteTitel}
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
                  <p className="mt-2 font-semibold text-petrol">
                    {a.rolle === "Praxisinhaber" ? p.rolleInhaber : p.rolleAngestellt}
                  </p>
                  {a.titel ? (
                    <p className="mt-3 text-ink-soft">{p.facharztTitel}</p>
                  ) : (
                    <p className="mt-3 text-ink-soft">{p.dennisText}</p>
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
            <h2 className="h2 text-night">{p.kommenTitel}</h2>
            <p className="mt-3 max-w-xl text-ink-soft">{p.kommenText}</p>
          </div>
          <Link
            href="/kontakt"
            className="press inline-flex min-h-14 shrink-0 items-center gap-2.5 rounded-md bg-night px-8 text-[1.0625rem] font-semibold text-white transition-colors hover:bg-night-deep"
          >
            {p.kontaktCta}
            <Pfeil size={19} />
          </Link>
        </div>
      </section>
    </>
  );
}
