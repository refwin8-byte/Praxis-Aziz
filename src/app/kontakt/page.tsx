import type { Metadata } from "next";
import { praxis, notfall } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";
import { SeitenKopf } from "@/components/seiten-kopf";
import { Oeffnungsstatus } from "@/components/oeffnungsstatus";
import { Karte } from "@/components/karte";
import { Telefon, Pin, Pfeil } from "@/components/icons";

export const metadata: Metadata = {
  title: "Kontakt und Anfahrt",
  description:
    "Praxis Dr. med. Adel Aziz, Ostlandstraße 17, 32339 Espelkamp. Telefon 05772 5511. Sprechzeiten und Anfahrt.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  const zeiten = gruppierteZeiten();

  return (
    <>
      <SeitenKopf
        titel="Kontakt und Anfahrt"
        einleitung="Termine vereinbaren wir telefonisch. Während der Sprechzeiten ist die Anmeldung besetzt."
      />

      <div className="container-page section grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-20">
        <div>
          <dl className="rule-list border-t border-rule">
            <div className="flex gap-6 py-7">
              <dt className="mt-1 shrink-0">
                <Telefon size={24} className="text-petrol" />
                <span className="sr-only">Telefon</span>
              </dt>
              <dd>
                <a
                  href={praxis.telefonHref}
                  className="num inline-flex min-h-12 items-center text-[1.75rem] font-semibold text-night underline-offset-4 hover:underline"
                >
                  {praxis.telefon}
                </a>
                <p className="mt-1 text-ink-soft">
                  Termine, Befunde und alle Fragen, die kein Formular abbildet.
                </p>
                <Oeffnungsstatus className="mt-4" />
              </dd>
            </div>

            <div className="flex gap-6 py-7">
              <dt className="mt-1 shrink-0">
                <Pin size={24} className="text-petrol" />
                <span className="sr-only">Adresse</span>
              </dt>
              <dd>
                <address className="not-italic text-[1.1875rem] leading-relaxed text-night">
                  {praxis.name}
                  <br />
                  {praxis.adresse.strasse}
                  <br />
                  {praxis.adresse.plz} {praxis.adresse.ort}
                </address>
                <a
                  href="#anfahrt-karte"
                  className="press mt-4 inline-flex min-h-12 items-center gap-2.5 font-semibold text-petrol underline-offset-4 hover:underline"
                >
                  Zur Karte
                  <Pfeil size={19} />
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-12">
            <h2 className="h2 text-night">Sprechzeiten</h2>
            <dl className="mt-7 rule-list border-t border-rule">
              {zeiten.map((g) => (
                <div key={g.tage} className="flex justify-between gap-6 py-4">
                  <dt className="font-semibold text-night">{g.tage}</dt>
                  <dd className="num text-right">
                    {g.zeiten.map((z) => (
                      <span key={z.von} className="block">
                        {z.von} bis {z.bis} Uhr
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
              <div className="flex justify-between gap-6 py-4">
                <dt className="font-semibold text-night">Sa, So</dt>
                <dd className="text-ink-soft">geschlossen</dd>
              </div>
            </dl>
            <p className="mt-5 text-[0.9375rem] text-ink-soft">
              An Feiertagen bleibt die Praxis geschlossen. Urlaubszeiten und
              die jeweilige Vertretung geben wir in der Praxis bekannt.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {/* E-Mail bewusst mit Warnung statt als bequemer Button:
              Gesundheitsdaten gehören nicht in eine unverschlüsselte Mail. */}
          <div className="rounded-md bg-paper p-7">
            <h2 className="text-[1.1875rem] font-semibold text-night">E-Mail</h2>
            <a
              href={`mailto:${praxis.email}`}
              className="mt-3 inline-flex min-h-12 items-center break-all font-medium text-petrol underline-offset-4 hover:underline"
            >
              {praxis.email}
            </a>
            <p className="mt-2 text-[0.9375rem] text-ink-soft">
              Bitte senden Sie uns keine Befunde und keine Angaben zu Ihrer
              Gesundheit per E-Mail. Dieser Weg ist nicht verschlüsselt. Für
              medizinische Anliegen rufen Sie bitte an.
            </p>
          </div>

          <div className="rounded-md border-2 border-alert p-7">
            <h2 className="text-[1.1875rem] font-semibold text-alert">
              Außerhalb der Sprechzeiten
            </h2>
            <ul className="mt-6 flex flex-col gap-6">
              <li>
                <a
                  href={notfall.lebensbedrohlich.href}
                  className="num inline-flex min-h-12 items-center text-[1.75rem] font-semibold text-alert underline-offset-4 hover:underline"
                >
                  {notfall.lebensbedrohlich.nummer}
                </a>
                <p className="mt-1 font-medium text-night">{notfall.lebensbedrohlich.label}</p>
                <p className="text-[0.9375rem] text-ink-soft">
                  {notfall.lebensbedrohlich.hinweis}
                </p>
              </li>
              <li>
                <a
                  href={notfall.bereitschaft.href}
                  className="num inline-flex min-h-12 items-center text-[1.75rem] font-semibold text-alert underline-offset-4 hover:underline"
                >
                  {notfall.bereitschaft.nummer}
                </a>
                <p className="mt-1 font-medium text-night">{notfall.bereitschaft.label}</p>
                <p className="text-[0.9375rem] text-ink-soft">{notfall.bereitschaft.hinweis}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-rule bg-paper/60">
        <div className="container-page section">
          <Karte />
        </div>
      </div>
    </>
  );
}
