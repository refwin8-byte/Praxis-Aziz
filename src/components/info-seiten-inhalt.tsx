"use client";

import Link from "next/link";
import { SeitenKopf } from "@/components/seiten-kopf";
import { Oeffnungsstatus } from "@/components/oeffnungsstatus";
import { notfall, praxis } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";
import { useSprache } from "@/lib/i18n";
import { Telefon } from "@/components/icons";

/** Praxisbesuch- und Notfallseite, übersetzbar. */

export function PraxisbesuchInhalt() {
  const { wb } = useSprache();
  const p = wb.praxisbesuchSeite;
  const zeiten = gruppierteZeiten();
  const deTage = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const uebertrage = (tage: string) =>
    tage.split(", ").map((x) => wb.wochentageKurz[deTage.indexOf(x)] ?? x).join(", ");

  return (
    <>
      <SeitenKopf titel={p.titel} einleitung={p.einleitung} />

      <section className="container-page section">
        <dl className="grid gap-x-16 gap-y-10 lg:grid-cols-2">
          {p.hinweise.map((h) => (
            <div key={h.t} className="border-t-2 border-night pt-5">
              <dt className="text-[1.3125rem] font-semibold text-night">{h.t}</dt>
              <dd className="mt-3 text-ink-soft">{h.d}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-14 max-w-[65ch] rounded-sm bg-paper p-5 text-[0.9375rem] text-ink-soft">
          {p.lueckenSatz}{" "}
          <a href={praxis.telefonHref} className="num font-semibold text-petrol underline underline-offset-2">
            {praxis.telefon}
          </a>
        </p>
      </section>

      <section className="bg-night text-white">
        <div className="container-page section grid gap-12 lg:grid-cols-[5fr_7fr]">
          <div>
            <h2 className="h2">{wb.sprechzeiten.titel}</h2>
            <p className="mt-4 text-white/75">{p.sprechzeitenText}</p>
          </div>
          <dl className="rule-list border-t border-white/15">
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
      </section>

      <section className="container-page section">
        <p className="max-w-2xl text-ink-soft">
          {p.kontaktSatzVor}{" "}
          <Link href="/kontakt" className="font-medium text-petrol underline underline-offset-2">
            {p.kontaktSatzLink}
          </Link>
          .
        </p>
      </section>
    </>
  );
}

export function NotfallInhalt() {
  const { wb } = useSprache();
  const n = wb.notfall;

  return (
    <>
      <SeitenKopf titel={n.titel} einleitung={n.einleitung} />

      <section className="container-page section" aria-label={n.titel}>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-md border-2 border-alert bg-paper p-8">
            <a
              href={notfall.lebensbedrohlich.href}
              className="num inline-flex min-h-14 items-center text-[3rem] font-semibold leading-none text-alert underline-offset-8 hover:underline"
            >
              {notfall.lebensbedrohlich.nummer}
            </a>
            <h2 className="mt-3 text-[1.3125rem] font-semibold text-night">{n.lebensbedrohlich}</h2>
            <p className="mt-3 text-ink-soft">
              {n.lebensbedrohlichHinweis}. {n.lebensbedrohlichText}
            </p>
          </div>

          <div className="rounded-md border border-rule bg-paper p-8">
            <a
              href={notfall.bereitschaft.href}
              className="num inline-flex min-h-14 items-center text-[3rem] font-semibold leading-none text-night underline-offset-8 hover:underline"
            >
              {notfall.bereitschaft.nummer}
            </a>
            <h2 className="mt-3 text-[1.3125rem] font-semibold text-night">{n.bereitschaft}</h2>
            <p className="mt-3 text-ink-soft">
              {n.bereitschaftHinweis} — {n.bereitschaftText}
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-[65ch] text-ink-soft">{n.vergiftungen}</p>
      </section>

      <section className="border-t border-rule bg-paper">
        <div className="container-page section grid gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <h2 className="h2 text-night">{n.waehrendTitel}</h2>
            <p className="mt-5 max-w-[60ch]">{n.waehrendText}</p>
            <a
              href={praxis.telefonHref}
              className="press mt-8 inline-flex min-h-14 items-center gap-3 rounded-md bg-night px-8 text-[1.125rem] font-semibold text-white transition-colors hover:bg-night-deep"
            >
              <Telefon size={20} />
              <span className="num">{praxis.telefon}</span>
            </a>
            <div className="mt-6">
              <Oeffnungsstatus />
            </div>
          </div>

          <div className="h-fit rounded-md border border-rule bg-linen p-7">
            <h2 className="text-[1.3125rem] font-semibold text-night">{n.formulareTitel}</h2>
            <p className="mt-3 text-ink-soft">{n.formulareText}</p>
            <p className="mt-5 border-t border-rule pt-4 text-[0.875rem] text-ink-soft">
              {n.keineBeratung}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
