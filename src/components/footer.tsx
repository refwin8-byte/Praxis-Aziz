import Link from "next/link";
import { praxis, notfall } from "@/data/praxis";
import { gruppierteZeiten } from "@/lib/oeffnungszeiten";

export function Footer() {
  const zeiten = gruppierteZeiten();

  return (
    <footer className="bg-night-deep text-white">
      {/* Notfallband. Steht über allem anderen und in der Zustandsfarbe:
          Wer hier landet, hat keine Zeit zu suchen. Die Nummern sind
          Telefonlinks, damit ein Tippen am Handy genügt. */}
      <div className="bg-alert">
        <div className="container-page flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium">
            In medizinischen Notfällen wählen Sie 112.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={notfall.lebensbedrohlich.href}
              className="press num inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 text-[1.0625rem] font-semibold text-alert"
            >
              {notfall.lebensbedrohlich.nummer}
            </a>
            <a
              href={notfall.bereitschaft.href}
              className="press num inline-flex min-h-12 items-center justify-center rounded-md border border-white/50 px-6 text-[1.0625rem] font-semibold text-white"
            >
              {notfall.bereitschaft.nummer}
            </a>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-12 py-16 md:grid-cols-[5fr_4fr_3fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="mark h-10 w-10 text-sage" />
            <p className="font-serif text-[1.375rem]">{praxis.nameKurz}</p>
          </div>
          <p className="mt-2 text-[0.9375rem] text-sage">{praxis.fachgebiet}</p>
          <address className="mt-6 not-italic leading-relaxed text-white/85">
            {praxis.adresse.strasse}
            <br />
            {praxis.adresse.plz} {praxis.adresse.ort}
          </address>
          <a
            href={praxis.telefonHref}
            className="num mt-4 inline-flex min-h-12 items-center text-[1.3125rem] font-semibold underline-offset-4 hover:underline"
          >
            {praxis.telefon}
          </a>
        </div>

        <div>
          <h2 className="label text-sage">Sprechzeiten</h2>
          <dl className="mt-5 space-y-3">
            {zeiten.map((g) => (
              <div key={g.tage} className="flex gap-5">
                <dt className="w-20 shrink-0 font-semibold">{g.tage}</dt>
                <dd className="num text-white/85">
                  {g.zeiten.map((z) => (
                    <span key={z.von} className="block">
                      {z.von} bis {z.bis} Uhr
                    </span>
                  ))}
                </dd>
              </div>
            ))}
            <div className="flex gap-5">
              <dt className="w-20 shrink-0 font-semibold">Sa, So</dt>
              <dd className="text-white/85">geschlossen</dd>
            </div>
          </dl>
        </div>

        <nav aria-label="Rechtliches und weitere Seiten">
          <h2 className="label text-sage">Seiten</h2>
          <ul className="mt-5 space-y-1 text-white/85">
            {[
              { href: "/leistungen", label: "Leistungen" },
              { href: "/praxis", label: "Praxis" },
              { href: "/rezept-und-ueberweisung", label: "Rezept & Überweisung" },
              { href: "/kontakt", label: "Kontakt" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex min-h-12 items-center underline-offset-4 hover:underline"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/impressum"
                className="inline-flex min-h-12 items-center underline-offset-4 hover:underline"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="inline-flex min-h-12 items-center underline-offset-4 hover:underline"
              >
                Datenschutz
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/12">
        <div className="container-page py-6">
          <p className="text-[0.875rem] text-white/65">
            {praxis.name}, {praxis.adresse.ort}. Diese Website setzt keine
            Cookies zu Werbe- oder Analysezwecken. Die Karte auf der
            Kontaktseite wird erst geladen, wenn Sie zustimmen.
          </p>
        </div>
      </div>
    </footer>
  );
}
