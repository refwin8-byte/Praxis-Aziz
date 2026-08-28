"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { rezeptAnfordern, ueberweisungAnfordern } from "@/app/actions/anfrage";
import { maxMedikamente, type FormularZustand } from "@/lib/anfrage-schema";
import { Feld, eingabeKlasse, beschriebenVon } from "@/components/feld";
import { praxis } from "@/data/praxis";
import { useSprache } from "@/lib/i18n";
import type { FehlerCode, Woerterbuch } from "@/lib/i18n/woerterbuch";
import { Telefon } from "@/components/icons";

/**
 * Die beiden Anfrageformulare, vollständig übersetzbar.
 *
 * Der Server prüft sprachneutral und gibt FEHLERCODES zurück; erst hier
 * werden sie in der gewählten Sprache angezeigt (wb.fehler). Ein
 * unbekannter Code fällt auf die deutsche Formulierung des Codes zurück,
 * statt ein leeres Feld zu zeigen.
 */
const leer: FormularZustand = { status: "leer" };

function nutzeFehlertext(wb: Woerterbuch) {
  return (code?: string) =>
    code ? (wb.fehler[code as FehlerCode] ?? code) : undefined;
}

/** Für Menschen unsichtbar, für Bots verlockend. Bleibt bewusst deutsch —
 *  das Feld ist aria-hidden und existiert nur für Maschinen. */
function Honigtopf({ praefix }: { praefix: string }) {
  const id = `${praefix}-webseite`;
  return (
    <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
      <label htmlFor={id}>Dieses Feld bitte leer lassen</label>
      <input id={id} name="webseite" type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

function Einwilligung({ praefix, fehler }: { praefix: string; fehler?: string }) {
  const { wb } = useSprache();
  const id = `${praefix}-einwilligung`;
  return (
    <div className="flex flex-col gap-2 rounded-sm bg-linen p-5">
      <div className="flex gap-3">
        <input
          id={id}
          name="einwilligung"
          type="checkbox"
          value="ja"
          required
          className="mt-1 h-5 w-5 shrink-0 accent-night"
          aria-describedby={fehler ? `${id}-fehler` : undefined}
          aria-invalid={fehler ? true : undefined}
        />
        <label htmlFor={id} className="text-[0.9375rem] leading-relaxed text-ink">
          {wb.rezept.einwilligung} {wb.rezept.naeheres}{" "}
          <Link
            href="/datenschutz"
            className="font-medium text-petrol underline underline-offset-2"
          >
            {wb.rezept.datenschutzerklaerung}
          </Link>
          .
        </label>
      </div>
      {fehler && (
        <p id={`${id}-fehler`} className="font-medium text-alert" role="alert">
          {fehler}
        </p>
      )}
    </div>
  );
}

function Absenden({ laeuft, text }: { laeuft: boolean; text: string }) {
  const { wb } = useSprache();
  return (
    <button
      type="submit"
      disabled={laeuft}
      className="press inline-flex min-h-14 items-center justify-center rounded-md bg-night px-8 text-[1.0625rem] font-semibold text-white transition-colors hover:bg-night-deep disabled:cursor-not-allowed disabled:opacity-70"
    >
      {laeuft ? wb.rezept.wirdGesendet : text}
    </button>
  );
}

/** Bestätigung. Sie bestätigt den EINGANG, nie das Ergebnis. */
function Gesendet({ titel, hinweis }: { titel: string; hinweis: string }) {
  const { wb } = useSprache();
  return (
    <div className="rounded-md border-2 border-open bg-paper p-8" role="status">
      <h3 className="text-[1.375rem] text-night">{titel}</h3>
      <p className="mt-3 font-medium text-night">{hinweis}</p>
      <p className="mt-3 text-ink-soft">{wb.rezept.bestaetigungFolge}</p>
      <a
        href={praxis.telefonHref}
        className="press num mt-6 inline-flex min-h-13 items-center gap-3 rounded-md bg-night px-6 font-semibold text-white"
      >
        <Telefon size={19} />
        {praxis.telefon}
      </a>
    </div>
  );
}

function Fehlermeldung({ zustand }: { zustand: FormularZustand }) {
  const { wb } = useSprache();
  const t = nutzeFehlertext(wb);
  if (zustand.status !== "fehler" || !zustand.meldung) return null;
  return (
    <p
      className="rounded-sm border-2 border-alert bg-alert/8 px-4 py-3 font-medium text-alert"
      role="alert"
    >
      {t(zustand.meldung)}
    </p>
  );
}

/** Gemeinsame Felder beider Formulare. */
function Person({ p, f }: { p: string; f: Record<string, string> }) {
  const { wb } = useSprache();
  const t = nutzeFehlertext(wb);
  return (
    <>
      <Feld id={`${p}-name`} label={wb.rezept.name} pflicht fehler={t(f.name)}>
        <input
          id={`${p}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          className={eingabeKlasse}
          aria-invalid={f.name ? true : undefined}
          aria-describedby={beschriebenVon(`${p}-name`, false, t(f.name))}
        />
      </Feld>

      <Feld
        id={`${p}-geburtsdatum`}
        label={wb.rezept.geburtsdatum}
        hinweis={wb.rezept.geburtsdatumHinweis}
        pflicht
        fehler={t(f.geburtsdatum)}
      >
        <input
          id={`${p}-geburtsdatum`}
          name="geburtsdatum"
          type="text"
          inputMode="numeric"
          autoComplete="bday"
          required
          className={eingabeKlasse}
          aria-invalid={f.geburtsdatum ? true : undefined}
          aria-describedby={beschriebenVon(`${p}-geburtsdatum`, true, t(f.geburtsdatum))}
        />
      </Feld>
    </>
  );
}

function Rueckruf({ p, f }: { p: string; f: Record<string, string> }) {
  const { wb } = useSprache();
  const t = nutzeFehlertext(wb);
  return (
    <Feld
      id={`${p}-telefon`}
      label={wb.rezept.telefon}
      hinweis={wb.rezept.telefonHinweis}
      freiwilligText={wb.allgemein.freiwillig}
      fehler={t(f.telefon)}
    >
      <input
        id={`${p}-telefon`}
        name="telefon"
        type="tel"
        autoComplete="tel"
        className={eingabeKlasse}
        aria-invalid={f.telefon ? true : undefined}
        aria-describedby={beschriebenVon(`${p}-telefon`, true, t(f.telefon))}
      />
    </Feld>
  );
}

/** Eine Medikamenten-Zeile: Name, Wirkstärke/Dosierung, Packungsgröße. */
function MedikamentZeile({ nr, f }: { nr: number; f: Record<string, string> }) {
  const { wb } = useSprache();
  const t = nutzeFehlertext(wb);
  const p = `medikament-${nr}`;
  return (
    <fieldset className="flex flex-col gap-5 rounded-sm border border-ink-soft/40 bg-paper/60 p-5">
      <legend className="px-1 font-semibold text-night">
        {nr === 1 ? wb.rezept.medikament : wb.rezept.medikamentN.replace("{n}", String(nr))}
        {nr > 1 && (
          <span className="font-normal text-ink-soft"> {wb.allgemein.freiwillig}</span>
        )}
      </legend>

      <Feld
        id={`${p}-name`}
        label={wb.rezept.medikamentName}
        hinweis={wb.rezept.medikamentNameHinweis}
        pflicht={nr === 1}
        freiwilligText={wb.allgemein.freiwillig}
        fehler={t(f[`${p}-name`])}
      >
        <input
          id={`${p}-name`}
          name={`${p}-name`}
          type="text"
          required={nr === 1}
          className={eingabeKlasse}
          aria-invalid={f[`${p}-name`] ? true : undefined}
          aria-describedby={beschriebenVon(`${p}-name`, true, t(f[`${p}-name`]))}
        />
      </Feld>

      <Feld
        id={`${p}-staerke`}
        label={wb.rezept.wirkstaerke}
        hinweis={wb.rezept.wirkstaerkeHinweis}
        pflicht={nr === 1}
        freiwilligText={wb.allgemein.freiwillig}
        fehler={t(f[`${p}-staerke`])}
      >
        <input
          id={`${p}-staerke`}
          name={`${p}-staerke`}
          type="text"
          required={nr === 1}
          className={eingabeKlasse}
          aria-invalid={f[`${p}-staerke`] ? true : undefined}
          aria-describedby={beschriebenVon(`${p}-staerke`, true, t(f[`${p}-staerke`]))}
        />
      </Feld>

      <Feld
        id={`${p}-packung`}
        label={wb.rezept.packungsgroesse}
        hinweis={wb.rezept.packungsgroesseHinweis}
        freiwilligText={wb.allgemein.freiwillig}
        fehler={t(f[`${p}-packung`])}
      >
        <input
          id={`${p}-packung`}
          name={`${p}-packung`}
          type="text"
          className={eingabeKlasse}
          aria-invalid={f[`${p}-packung`] ? true : undefined}
          aria-describedby={beschriebenVon(`${p}-packung`, true, t(f[`${p}-packung`]))}
        />
      </Feld>
    </fieldset>
  );
}

export function RezeptFormular() {
  const { wb } = useSprache();
  const t = nutzeFehlertext(wb);
  const [zustand, aktion, laeuft] = useActionState(rezeptAnfordern, leer);
  const f = zustand.status === "fehler" ? zustand.fehler : {};

  // Weitere Zeilen erscheinen erst auf Wunsch. Hat eine ausgeblendete Zeile
  // einen Prüffehler, wird sie trotzdem gezeigt.
  const [zeilen, setZeilen] = useState(1);
  const sichtbar = Math.max(
    zeilen,
    ...Array.from({ length: maxMedikamente }, (_, i) =>
      Object.keys(f).some((k) => k.startsWith(`medikament-${i + 1}-`)) ? i + 1 : 1,
    ),
  );

  if (zustand.status === "gesendet")
    return (
      <Gesendet titel={wb.rezept.bestaetigungTitel} hinweis={wb.rezept.bestaetigungHinweis} />
    );

  return (
    <form action={aktion} className="flex flex-col gap-7" noValidate>
      <Honigtopf praefix="rz" />
      <Fehlermeldung zustand={zustand} />

      <Person p="rz" f={f} />

      {Array.from({ length: sichtbar }, (_, i) => (
        <MedikamentZeile key={i + 1} nr={i + 1} f={f} />
      ))}

      {sichtbar < maxMedikamente && (
        <button
          type="button"
          onClick={() => setZeilen(sichtbar + 1)}
          className="press inline-flex min-h-13 items-center justify-center self-start rounded-md border border-night/25 px-6 font-semibold text-night transition-colors hover:border-night hover:bg-night/5"
        >
          {wb.rezept.weiteresMedikament}
        </button>
      )}
      <p className="-mt-3 text-[0.9375rem] text-ink-soft">{wb.rezept.maxHinweis}</p>

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 font-medium text-ink">{wb.rezept.erhaltLegende}</legend>
        <label className="flex min-h-13 items-center gap-3 rounded-sm border border-ink-soft/55 bg-paper px-4">
          <input
            type="radio"
            name="abholung"
            value="Abholung in der Praxis"
            defaultChecked
            className="h-5 w-5 accent-night"
          />
          <span>{wb.rezept.erhaltAbholung}</span>
        </label>
        <label className="flex min-h-13 items-start gap-3 rounded-sm border border-ink-soft/55 bg-paper px-4 py-3">
          <input
            type="radio"
            name="abholung"
            value="E-Rezept"
            className="mt-1 h-5 w-5 shrink-0 accent-night"
          />
          <span>
            {wb.rezept.erhaltERezept}
            <span className="block text-[0.9375rem] text-ink-soft">
              {wb.rezept.erhaltERezeptHinweis}
            </span>
          </span>
        </label>
      </fieldset>

      <Rueckruf p="rz" f={f} />
      <Einwilligung praefix="rz" fehler={t(f.einwilligung)} />
      <Absenden laeuft={laeuft} text={wb.rezept.absenden} />
    </form>
  );
}

export function UeberweisungFormular() {
  const { wb } = useSprache();
  const t = nutzeFehlertext(wb);
  const [zustand, aktion, laeuft] = useActionState(ueberweisungAnfordern, leer);
  if (zustand.status === "gesendet")
    return (
      <Gesendet
        titel={wb.ueberweisung.bestaetigungTitel}
        hinweis={wb.ueberweisung.bestaetigungHinweis}
      />
    );

  const f = zustand.status === "fehler" ? zustand.fehler : {};

  return (
    <form action={aktion} className="flex flex-col gap-7" noValidate>
      <Honigtopf praefix="ue" />
      <Fehlermeldung zustand={zustand} />

      <Person p="ue" f={f} />

      <Feld
        id="ue-fachrichtung"
        label={wb.ueberweisung.fachrichtung}
        hinweis={wb.ueberweisung.fachrichtungHinweis}
        pflicht
        fehler={t(f.fachrichtung)}
      >
        <input
          id="ue-fachrichtung"
          name="fachrichtung"
          type="text"
          required
          className={eingabeKlasse}
          aria-invalid={f.fachrichtung ? true : undefined}
          aria-describedby={beschriebenVon("ue-fachrichtung", true, t(f.fachrichtung))}
        />
      </Feld>

      <Feld
        id="ue-grund"
        label={wb.ueberweisung.grund}
        hinweis={wb.ueberweisung.grundHinweis}
        pflicht
        fehler={t(f.grund)}
      >
        <textarea
          id="ue-grund"
          name="grund"
          rows={5}
          required
          className={eingabeKlasse}
          aria-invalid={f.grund ? true : undefined}
          aria-describedby={beschriebenVon("ue-grund", true, t(f.grund))}
        />
      </Feld>

      <Feld
        id="ue-facharztpraxis"
        label={wb.ueberweisung.facharztpraxis}
        hinweis={wb.ueberweisung.facharztpraxisHinweis}
        freiwilligText={wb.allgemein.freiwillig}
        fehler={t(f.facharztpraxis)}
      >
        <input
          id="ue-facharztpraxis"
          name="facharztpraxis"
          type="text"
          className={eingabeKlasse}
          aria-invalid={f.facharztpraxis ? true : undefined}
          aria-describedby={beschriebenVon("ue-facharztpraxis", true, t(f.facharztpraxis))}
        />
      </Feld>

      <Rueckruf p="ue" f={f} />
      <Einwilligung praefix="ue" fehler={t(f.einwilligung)} />
      <Absenden laeuft={laeuft} text={wb.ueberweisung.absenden} />
    </form>
  );
}
