"use client";

import { Oeffnungsstatus } from "@/components/oeffnungsstatus";
import { praxis } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";
import { useSprache } from "@/lib/i18n";
import { Telefon, Pfeil } from "@/components/icons";

/** Terminseite, übersetzbar. `buchung` kommt aus dem Server-Wrapper. */
export function TerminInhalt({ buchung }: { buchung: { url: string; anbieter: string } | null }) {
  const { wb } = useSprache();
  const t = wb.termin;
  const zeiten = gruppierteZeiten();
  const deTage = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const uebertrage = (tage: string) =>
    tage.split(", ").map((x) => wb.wochentageKurz[deTage.indexOf(x)] ?? x).join(", ");
  const mit = (s: string) => s.replace("{anbieter}", buchung?.anbieter ?? "");

  return (
    <>
      <header className="border-b border-rule">
        <div className="container-page pt-10 pb-9 lg:pt-14 lg:pb-11">
          <h1 className="display max-w-4xl text-night">{t.titel}</h1>
          <p className="lead mt-5">{buchung ? mit(t.einleitungOnline) : t.einleitungTelefon}</p>
        </div>
      </header>

      <section className="container-page section grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
        <div>
          {buchung ? (
            <>
              <h2 className="h2 text-night">{t.onlineTitel}</h2>
              <p className="mt-5 max-w-[60ch]">{mit(t.onlineText)}</p>
              <a
                href={buchung.url}
                rel="noopener noreferrer"
                className="press mt-8 inline-flex min-h-14 items-center gap-3 rounded-md bg-night px-8 text-[1.125rem] font-semibold text-white transition-colors hover:bg-night-deep"
              >
                {t.onlineButton}
                <Pfeil size={20} />
              </a>
              <p className="mt-4 text-[0.9375rem] text-ink-soft">{mit(t.onlineFallback)}</p>

              <h2 className="h2 mt-16 text-night">{t.oderTelefonisch}</h2>
            </>
          ) : (
            <h2 className="h2 text-night">{t.soErreichen}</h2>
          )}

          <p className="mt-5 max-w-[60ch]">{t.text}</p>
          <a
            href={praxis.telefonHref}
            className={`press mt-8 inline-flex min-h-14 items-center gap-3 rounded-md px-8 text-[1.125rem] font-semibold transition-colors ${
              buchung
                ? "border border-night/25 text-night hover:border-night hover:bg-night/5"
                : "bg-night text-white hover:bg-night-deep"
            }`}
          >
            <Telefon size={20} />
            <span className="num">{praxis.telefon}</span>
          </a>
          <div className="mt-6">
            <Oeffnungsstatus />
          </div>
          <p className="mt-6 max-w-[60ch] text-ink-soft">
            {t.hinweisAkut}{" "}
            <a href="tel:116117" className="num font-semibold text-petrol underline underline-offset-2">
              116 117
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="label text-petrol">{wb.sprechzeiten.titel}</h2>
          <dl className="mt-6 rule-list border-t border-rule">
            {zeiten.map((g) => (
              <div key={g.tage} className="flex justify-between gap-4 py-3.5">
                <dt className="font-semibold">{uebertrage(g.tage)}</dt>
                <dd className="num text-right text-ink-soft">
                  {g.zeiten.map((z) => (
                    <span key={z.von} className="block">
                      {z.von} – {z.bis}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
            <div className="flex justify-between gap-4 py-3.5">
              <dt className="font-semibold">
                {wb.wochentageKurz[5]}, {wb.wochentageKurz[6]}
              </dt>
              <dd className="text-ink-soft">{wb.sprechzeiten.geschlossen}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
