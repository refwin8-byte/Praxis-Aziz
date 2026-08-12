"use server";

import {
  pruefeRezept,
  pruefeUeberweisung,
  istBot,
  type FormularZustand,
} from "@/lib/anfrage-schema";
import { sendeAnfrage } from "@/lib/mailer";

/**
 * Server Actions für die beiden Anfrageformulare.
 *
 * Die Angaben werden geprüft, zu einer Textnachricht zusammengesetzt und an
 * die Praxis geschickt. Danach existieren sie hier nicht mehr: keine
 * Datenbank, keine Datei, keine Rückgabe der Eingaben an den Browser.
 */

const feld = (fd: FormData, name: string) => {
  const v = fd.get(name);
  return typeof v === "string" ? v.trim() : "";
};

/** Zeilenumbrüche in der Betreffzeile wären eine Header-Injection. */
const einzeilig = (s: string) => s.replace(/[\r\n]+/g, " ").slice(0, 120);

function fusszeile(fd: FormData) {
  const telefon = feld(fd, "telefon");
  return [
    "",
    "---",
    `Eingegangen: ${new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" })}`,
    telefon ? `Rückruf gewünscht unter: ${telefon}` : "Keine Telefonnummer angegeben.",
    "Die Absenderin oder der Absender hat der Verarbeitung ausdrücklich zugestimmt.",
    "Gesendet über das Formular auf der Praxis-Website. Es wurde nichts gespeichert.",
  ].join("\n");
}

export async function rezeptAnfordern(
  _zustand: FormularZustand,
  fd: FormData,
): Promise<FormularZustand> {
  if (istBot(fd)) return { status: "gesendet" }; // stillschweigend verwerfen

  const fehler = pruefeRezept(fd);
  if (Object.keys(fehler).length > 0) {
    return { status: "fehler", fehler, meldung: "Bitte prüfen Sie die markierten Angaben." };
  }

  const name = feld(fd, "name");
  const inhalt = [
    "Rezeptanforderung über die Website",
    "",
    `Name: ${name}`,
    `Geburtsdatum: ${feld(fd, "geburtsdatum")}`,
    "",
    "Medikament, Dosierung, Packungsgröße:",
    feld(fd, "medikament"),
    "",
    `Abholung: ${feld(fd, "abholung") || "keine Angabe"}`,
    fusszeile(fd),
  ].join("\n");

  const ergebnis = await sendeAnfrage(`Rezeptanforderung: ${einzeilig(name)}`, inhalt);

  if (!ergebnis.ok) {
    return {
      status: "fehler",
      fehler: {},
      meldung:
        ergebnis.grund === "nicht-konfiguriert"
          ? "Der Versand ist derzeit nicht eingerichtet. Bitte rufen Sie uns an, damit Ihr Rezept nicht liegen bleibt."
          : "Die Anfrage konnte nicht übermittelt werden. Bitte rufen Sie uns an, damit Ihr Rezept nicht liegen bleibt.",
    };
  }

  return { status: "gesendet" };
}

export async function ueberweisungAnfordern(
  _zustand: FormularZustand,
  fd: FormData,
): Promise<FormularZustand> {
  if (istBot(fd)) return { status: "gesendet" };

  const fehler = pruefeUeberweisung(fd);
  if (Object.keys(fehler).length > 0) {
    return { status: "fehler", fehler, meldung: "Bitte prüfen Sie die markierten Angaben." };
  }

  const name = feld(fd, "name");
  const inhalt = [
    "Überweisungsanforderung über die Website",
    "",
    `Name: ${name}`,
    `Geburtsdatum: ${feld(fd, "geburtsdatum")}`,
    "",
    `Fachrichtung: ${feld(fd, "fachrichtung")}`,
    "",
    "Grund oder geplante Untersuchung:",
    feld(fd, "grund"),
    fusszeile(fd),
  ].join("\n");

  const ergebnis = await sendeAnfrage(`Überweisung: ${einzeilig(name)}`, inhalt);

  if (!ergebnis.ok) {
    return {
      status: "fehler",
      fehler: {},
      meldung:
        ergebnis.grund === "nicht-konfiguriert"
          ? "Der Versand ist derzeit nicht eingerichtet. Bitte rufen Sie uns an, damit Ihre Überweisung nicht liegen bleibt."
          : "Die Anfrage konnte nicht übermittelt werden. Bitte rufen Sie uns an, damit Ihre Überweisung nicht liegen bleibt.",
    };
  }

  return { status: "gesendet" };
}
