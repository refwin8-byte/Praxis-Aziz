"use client";

import Image from "next/image";
import Link from "next/link";
import { praxis } from "@/data/praxis";
import { useSprache } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { Telefon } from "@/components/icons";

/** Leistungsseite, vollständig übersetzbar (Server-Wrapper: app/leistungen). */
export function LeistungenInhalt() {
  const { wb } = useSprache();
  const l = wb.leistungenSeite;

  return (
    <>
      <header className="border-b border-rule">
        <div className="container-page grid gap-10 pt-10 pb-10 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-14 lg:pb-14">
          <div>
            <h1 className="display max-w-3xl text-night">{l.titel}</h1>
            <p className="lead mt-5">{l.einleitung}</p>
            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-t border-rule pt-5 text-[0.9375rem] font-semibold text-night">
              {l.fakten.map((f) => (
                <li key={f} className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-petrol" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <figure>
            <div className="relative aspect-16/10 overflow-hidden rounded-lg bg-rule/40">
              <Image
                src="/bilder/diagnostik-detail.webp"
                alt="Stillleben mit EKG-Papier, dunklem Stethoskop und Blutdruckmanschette auf hellem Leinen"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.875rem] text-ink-soft">
              {l.bildunterschrift}
            </figcaption>
          </figure>
        </div>
      </header>

      {/* 1 — Diagnostik auf Leinen, Liste zweispaltig. */}
      <section id="diagnostik" className="container-page py-16 lg:py-24" aria-labelledby="diagnostik-t">
        <Reveal>
          <div className="flex items-end gap-5">
            <span aria-hidden="true" className="nr-gross num text-ocker">01</span>
            <div className="linie mb-2 h-0.5 w-24 bg-night" aria-hidden="true" />
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <h2 id="diagnostik-t" className="h2 text-night">
              {l.diagnostikTitel}
            </h2>
            <p className="text-[1.1875rem] leading-relaxed lg:pt-2">{l.diagnostikText}</p>
          </div>
          <ul className="mt-10 grid gap-x-14 border-t border-rule sm:grid-cols-2">
            {l.diagnostikPunkte.map((p) => (
              <li key={p} className="border-b border-rule py-4 text-[1.0625rem]">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 2 — Chronische Erkrankungen als Waldgrün-Kapitel. */}
      <section id="chronisch" className="bg-wald text-white" aria-labelledby="chronisch-t">
        <div className="container-page py-16 lg:py-24">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
              <div>
                <p className="label text-sage-bright">{l.chronischEyebrow}</p>
                <h2 id="chronisch-t" className="h2 mt-4">
                  {l.chronischTitel}
                </h2>
              </div>
              <div>
                <p className="text-[1.1875rem] leading-relaxed text-white/85">{l.chronischText}</p>
                <ul className="mt-9 rule-list border-t border-white/15">
                  {l.chronischPunkte.map((p) => (
                    <li key={p} className="flex items-center gap-3 border-white/15 py-4 text-[1.0625rem]">
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — Weitere Leistungen auf Papier. */}
      <section id="weitere" className="border-b border-rule bg-paper" aria-labelledby="weitere-t">
        <div className="container-page py-16 lg:py-24">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:gap-16">
              <div>
                <span aria-hidden="true" className="nr-gross num text-petrol/60">03</span>
                <h2 id="weitere-t" className="h2 mt-2 text-night">
                  {l.weitereTitel}
                </h2>
              </div>
              <p className="text-[1.1875rem] leading-relaxed lg:pt-2">{l.weitereText}</p>
            </div>
            <ul className="mt-10 grid gap-x-14 border-t border-rule sm:grid-cols-2">
              {l.weiterePunkte.map((p) => (
                <li key={p} className="border-b border-rule py-4 text-[1.0625rem]">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-page section">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="h2 text-night">{l.frageTitel}</h2>
            <p className="mt-3 max-w-xl text-ink-soft">{l.frageText}</p>
          </div>
          <a
            href={praxis.telefonHref}
            className="press inline-flex min-h-14 shrink-0 items-center gap-3 rounded-md bg-night px-8 text-[1.125rem] font-semibold text-white transition-colors hover:bg-night-deep"
          >
            <Telefon size={20} />
            <span className="num">{praxis.telefon}</span>
          </a>
        </div>

        <p className="mt-10 text-[0.9375rem] text-ink-soft">
          {l.serviceSatzVor}{" "}
          <Link href="/patientenservice" className="font-medium text-petrol underline underline-offset-2">
            {l.serviceSatzLink}
          </Link>
          .
        </p>
      </section>
    </>
  );
}
