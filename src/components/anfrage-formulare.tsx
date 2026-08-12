"use client";

import { useActionState } from "react";
import Link from "next/link";
import { rezeptAnfordern, ueberweisungAnfordern } from "@/app/actions/anfrage";
import type { FormularZustand } from "@/lib/anfrage-schema";
import { Feld, eingabeKlasse, beschriebenVon } from "@/components/feld";
import { praxis } from "@/data/praxis";
import { Telefon } from "@/components/icons";

const leer: FormularZustand = { status: "leer" };

/** Für Menschen unsichtbar, für Bots verlockend. Die id wird pro Formular
 *  vergeben, weil beide Formulare auf derselben Seite stehen und doppelte
 *  ids die Label-Verknüpfung zerstören würden. */
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
          Ich bin damit einverstanden, dass die Praxis meine Angaben zur
          Bearbeitung dieser Anfrage verarbeitet. Mir ist bekannt, dass ich
          diese Einwilligung jederzeit widerrufen kann. Näheres in der{" "}
          <Link
            href="/datenschutz"
            className="font-medium text-petrol underline underline-offset-2"
          >
            Datenschutzerklärung
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
  return (
    <button
      type="submit"
      disabled={laeuft}
      className="press inline-flex min-h-14 items-center justify-center rounded-md bg-night px-8 text-[1.0625rem] font-semibold text-white transition-colors hover:bg-night-deep disabled:cursor-not-allowed disabled:opacity-70"
    >
      {laeuft ? "Wird gesendet …" : text}
    </button>
  );
}

/** Bestätigung. Nennt die Bearbeitungszeit noch einmal, damit niemand nach
 *  zwei Stunden verunsichert anruft, und den Notfallweg. */
function Gesendet({ titel }: { titel: string }) {
  return (
    <div className="rounded-md border-2 border-open bg-paper p-8" role="status">
      <h3 className="text-[1.375rem] text-night">{titel}</h3>
      <p className="mt-3 text-ink-soft">
        Wir melden uns, sobald die Anfrage bearbeitet ist. Bitte planen Sie
        zwei Werktage ein. Ist es dringend, rufen Sie uns bitte an.
      </p>
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
  if (zustand.status !== "fehler" || !zustand.meldung) return null;
  return (
    <p
      className="rounded-sm border-2 border-alert bg-alert/8 px-4 py-3 font-medium text-alert"
      role="alert"
    >
      {zustand.meldung}
    </p>
  );
}

/** Gemeinsame Felder beider Formulare. */
function Person({ p, f }: { p: string; f: Record<string, string> }) {
  return (
    <>
      <Feld id={`${p}-name`} label="Vor- und Nachname" pflicht fehler={f.name}>
        <input
          id={`${p}-name`}
          name="name"
          type="text"
          autoComplete="name"
          required
          className={eingabeKlasse}
          aria-invalid={f.name ? true : undefined}
          aria-describedby={beschriebenVon(`${p}-name`, false, f.name)}
        />
      </Feld>

      <Feld
        id={`${p}-geburtsdatum`}
        label="Geburtsdatum"
        hinweis="Zum Beispiel 03.04.1951"
        pflicht
        fehler={f.geburtsdatum}
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
          aria-describedby={beschriebenVon(`${p}-geburtsdatum`, true, f.geburtsdatum)}
        />
      </Feld>
    </>
  );
}

function Rueckruf({ p, f }: { p: string; f: Record<string, string> }) {
  return (
    <Feld
      id={`${p}-telefon`}
      label="Telefonnummer für Rückfragen"
      hinweis="Beschleunigt die Bearbeitung, falls etwas unklar ist."
      fehler={f.telefon}
    >
      <input
        id={`${p}-telefon`}
        name="telefon"
        type="tel"
        autoComplete="tel"
        className={eingabeKlasse}
        aria-invalid={f.telefon ? true : undefined}
        aria-describedby={beschriebenVon(`${p}-telefon`, true, f.telefon)}
      />
    </Feld>
  );
}

export function RezeptFormular() {
  const [zustand, aktion, laeuft] = useActionState(rezeptAnfordern, leer);
  if (zustand.status === "gesendet")
    return <Gesendet titel="Ihre Rezeptanforderung ist eingegangen" />;

  const f = zustand.status === "fehler" ? zustand.fehler : {};

  return (
    <form action={aktion} className="flex flex-col gap-7" noValidate>
      <Honigtopf praefix="rz" />
      <Fehlermeldung zustand={zustand} />

      <Person p="rz" f={f} />

      <Feld
        id="rz-medikament"
        label="Medikament, Dosierung und Packungsgröße"
        hinweis="Bitte alles angeben, was auf der Packung steht. Bei mehreren Medikamenten je eine Zeile."
        pflicht
        fehler={f.medikament}
      >
        <textarea
          id="rz-medikament"
          name="medikament"
          rows={5}
          required
          className={eingabeKlasse}
          aria-invalid={f.medikament ? true : undefined}
          aria-describedby={beschriebenVon("rz-medikament", true, f.medikament)}
        />
      </Feld>

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 font-medium text-ink">Wie möchten Sie das Rezept erhalten?</legend>
        <label className="flex min-h-13 items-center gap-3 rounded-sm border border-ink-soft/55 bg-paper px-4">
          <input
            type="radio"
            name="abholung"
            value="Abholung in der Praxis"
            defaultChecked
            className="h-5 w-5 accent-night"
          />
          <span>Abholung in der Praxis</span>
        </label>
        <label className="flex min-h-13 items-center gap-3 rounded-sm border border-ink-soft/55 bg-paper px-4">
          <input type="radio" name="abholung" value="E-Rezept" className="h-5 w-5 accent-night" />
          <span>E-Rezept</span>
        </label>
      </fieldset>

      <Rueckruf p="rz" f={f} />
      <Einwilligung praefix="rz" fehler={f.einwilligung} />
      <Absenden laeuft={laeuft} text="Rezept anfordern" />
    </form>
  );
}

export function UeberweisungFormular() {
  const [zustand, aktion, laeuft] = useActionState(ueberweisungAnfordern, leer);
  if (zustand.status === "gesendet")
    return <Gesendet titel="Ihre Überweisungsanforderung ist eingegangen" />;

  const f = zustand.status === "fehler" ? zustand.fehler : {};

  return (
    <form action={aktion} className="flex flex-col gap-7" noValidate>
      <Honigtopf praefix="ue" />
      <Fehlermeldung zustand={zustand} />

      <Person p="ue" f={f} />

      <Feld
        id="ue-fachrichtung"
        label="Fachrichtung"
        hinweis="Zum Beispiel Orthopädie, Augenheilkunde oder Kardiologie."
        pflicht
        fehler={f.fachrichtung}
      >
        <input
          id="ue-fachrichtung"
          name="fachrichtung"
          type="text"
          required
          className={eingabeKlasse}
          aria-invalid={f.fachrichtung ? true : undefined}
          aria-describedby={beschriebenVon("ue-fachrichtung", true, f.fachrichtung)}
        />
      </Feld>

      <Feld
        id="ue-grund"
        label="Grund für die Überweisung"
        hinweis="Beschreiben Sie kurz Ihre Beschwerden oder nennen Sie die geplante Untersuchung."
        pflicht
        fehler={f.grund}
      >
        <textarea
          id="ue-grund"
          name="grund"
          rows={5}
          required
          className={eingabeKlasse}
          aria-invalid={f.grund ? true : undefined}
          aria-describedby={beschriebenVon("ue-grund", true, f.grund)}
        />
      </Feld>

      <Rueckruf p="ue" f={f} />
      <Einwilligung praefix="ue" fehler={f.einwilligung} />
      <Absenden laeuft={laeuft} text="Überweisung anfordern" />
    </form>
  );
}
