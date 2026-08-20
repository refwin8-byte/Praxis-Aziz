/**
 * Prüfung der Anfrageformulare.
 *
 * Bewusst ohne Validierungsbibliothek: Es sind zwei Formulare mit zusammen
 * neun Feldern. Bei Gesundheitsdaten will ich jede Regel im Klartext lesen
 * können, statt sie über eine Abstraktionsebene zu verteilen.
 *
 * Die Prüfung läuft auf dem Server. Die Browserprüfung ist Komfort, sie
 * ersetzt nichts: Ein abgeschaltetes JavaScript oder ein manipuliertes
 * Formular darf nicht dazu führen, dass unvollständige Daten in der Praxis
 * landen.
 */

export type Fehler = Record<string, string>;

export type FormularZustand =
  | { status: "leer" }
  | { status: "fehler"; fehler: Fehler; meldung?: string }
  | { status: "gesendet" };

const text = (v: FormDataEntryValue | null) => (typeof v === "string" ? v.trim() : "");

/** Grenzt die Länge ein. Schützt das Postfach und begrenzt den Schaden,
 *  falls jemand das Formular als Ablage missbrauchen will. */
const zuLang = (s: string, max: number) => s.length > max;

/**
 * Geburtsdatum. Akzeptiert wird, was Menschen tatsächlich eintippen:
 * 03.04.1951, 3.4.1951, 03/04/1951, 1951-04-03.
 *
 * Kein `type="date"`: Das Datumsfeld mancher Browser ist mit Tastatur und
 * Vorleseprogramm mühsam, und bei einer älteren Zielgruppe scheitern
 * Kalender-Popups reihenweise. Ein Textfeld mit klarem Beispiel ist hier
 * verlässlicher.
 */
function pruefeGeburtsdatum(roh: string): string | null {
  if (!roh) return "Bitte geben Sie Ihr Geburtsdatum an, zum Beispiel 03.04.1951.";

  const m =
    roh.match(/^(\d{1,2})[.\/-](\d{1,2})[.\/-](\d{4})$/) ??
    roh.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (!m) return "Bitte schreiben Sie das Datum als Tag.Monat.Jahr, zum Beispiel 03.04.1951.";

  const [tag, monat, jahr] = m[0].includes("-") && m[1].length === 4
    ? [Number(m[3]), Number(m[2]), Number(m[1])]
    : [Number(m[1]), Number(m[2]), Number(m[3])];

  const d = new Date(jahr, monat - 1, tag);
  const gueltig =
    d.getFullYear() === jahr && d.getMonth() === monat - 1 && d.getDate() === tag;
  if (!gueltig) return "Dieses Datum gibt es nicht. Bitte prüfen Sie Ihre Eingabe.";

  const heute = new Date();
  if (d > heute) return "Das Geburtsdatum kann nicht in der Zukunft liegen.";
  if (jahr < heute.getFullYear() - 120) return "Bitte prüfen Sie das Jahr.";

  return null;
}

function pruefeGemeinsam(fd: FormData, fehler: Fehler) {
  const name = text(fd.get("name"));
  if (!name) fehler.name = "Bitte geben Sie Ihren Vor- und Nachnamen an.";
  else if (name.length < 3) fehler.name = "Bitte geben Sie Vor- und Nachnamen an.";
  else if (zuLang(name, 120)) fehler.name = "Bitte kürzen Sie die Eingabe.";

  const geburt = pruefeGeburtsdatum(text(fd.get("geburtsdatum")));
  if (geburt) fehler.geburtsdatum = geburt;

  const telefon = text(fd.get("telefon"));
  if (telefon && zuLang(telefon, 40)) fehler.telefon = "Bitte kürzen Sie die Eingabe.";
  if (telefon && !/^[\d\s+()/.-]{5,}$/.test(telefon))
    fehler.telefon = "Bitte geben Sie eine Telefonnummer ohne Buchstaben an.";

  // Die Einwilligung ist die Rechtsgrundlage nach Art. 9 Abs. 2 lit. a DSGVO.
  // Ohne sie darf nichts verarbeitet werden, deshalb ist sie hart geprüft.
  if (text(fd.get("einwilligung")) !== "ja")
    fehler.einwilligung = "Ohne Ihre Einwilligung dürfen wir die Anfrage nicht bearbeiten.";
}

/** Bis zu drei Medikamente pro Anfrage. Wer mehr braucht, ruft besser an —
 *  das steht so auch am Formular. */
export const maxMedikamente = 3;

export type Medikament = { name: string; staerke: string; packung: string };

/** Liest die Medikamenten-Zeilen aus. Leere Zeilen fallen weg. */
export function leseMedikamente(fd: FormData): Medikament[] {
  const zeilen: Medikament[] = [];
  for (let i = 1; i <= maxMedikamente; i++) {
    const name = text(fd.get(`medikament-${i}-name`));
    const staerke = text(fd.get(`medikament-${i}-staerke`));
    const packung = text(fd.get(`medikament-${i}-packung`));
    if (name || staerke || packung) zeilen.push({ name, staerke, packung });
  }
  return zeilen;
}

export function pruefeRezept(fd: FormData): Fehler {
  const fehler: Fehler = {};
  pruefeGemeinsam(fd, fehler);

  const erste = text(fd.get("medikament-1-name"));
  if (!erste) {
    fehler["medikament-1-name"] = "Bitte nennen Sie das Medikament, so wie es auf der Packung steht.";
  } else if (erste.length < 3) {
    fehler["medikament-1-name"] = "Bitte machen Sie eine genauere Angabe.";
  }
  if (!text(fd.get("medikament-1-staerke"))) {
    fehler["medikament-1-staerke"] =
      "Bitte geben Sie Wirkstärke oder Dosierung an, zum Beispiel 50 mg, 1-0-1.";
  }

  // Angefangene weitere Zeilen brauchen mindestens den Namen. Eine Zeile,
  // in der nur „N2" steht, kann die Praxis niemandem zuordnen.
  for (let i = 2; i <= maxMedikamente; i++) {
    const name = text(fd.get(`medikament-${i}-name`));
    const rest =
      text(fd.get(`medikament-${i}-staerke`)) || text(fd.get(`medikament-${i}-packung`));
    if (!name && rest) {
      fehler[`medikament-${i}-name`] = "Bitte nennen Sie auch hier den Namen des Medikaments.";
    }
  }

  // Längengrenzen über alle Zeilen.
  for (let i = 1; i <= maxMedikamente; i++) {
    for (const teil of ["name", "staerke", "packung"]) {
      if (zuLang(text(fd.get(`medikament-${i}-${teil}`)), 200)) {
        fehler[`medikament-${i}-${teil}`] = "Bitte kürzen Sie die Eingabe.";
      }
    }
  }

  return fehler;
}

export function pruefeUeberweisung(fd: FormData): Fehler {
  const fehler: Fehler = {};
  pruefeGemeinsam(fd, fehler);

  const fach = text(fd.get("fachrichtung"));
  if (!fach) fehler.fachrichtung = "Bitte nennen Sie die Fachrichtung, zum Beispiel Orthopädie.";
  else if (zuLang(fach, 120)) fehler.fachrichtung = "Bitte kürzen Sie die Eingabe.";

  const grund = text(fd.get("grund"));
  if (!grund) fehler.grund = "Bitte beschreiben Sie kurz den Grund.";
  else if (grund.length < 4) fehler.grund = "Bitte machen Sie eine genauere Angabe.";
  else if (zuLang(grund, 1500)) fehler.grund = "Bitte kürzen Sie die Eingabe.";

  // Freiwillig: die Facharztpraxis, falls schon bekannt.
  if (zuLang(text(fd.get("facharztpraxis")), 200)) {
    fehler.facharztpraxis = "Bitte kürzen Sie die Eingabe.";
  }

  return fehler;
}

/** Für Bots verlockend, für Menschen unsichtbar. Kein Captcha, weil Captchas
 *  für genau die Zielgruppe eine Hürde sind, die diese Praxis bedient. */
export function istBot(fd: FormData) {
  return text(fd.get("webseite")) !== "";
}
