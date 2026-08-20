/**
 * Terminbuchung als austauschbare Integration.
 *
 * Die Praxis hat noch keinen Onlinebuchungs-Vertrag. Deshalb ist die Buchung
 * ein Adapter über Umgebungsvariablen — der Anbieter (etwa Doctolib) lässt
 * sich anschließen, ohne eine Zeile Code zu ändern:
 *
 *   APPOINTMENT_PROVIDER_URL    Offizieller Buchungslink der Praxis beim
 *                               Anbieter. Ohne diesen Wert existiert auf der
 *                               ganzen Website kein „Termin buchen"-Button —
 *                               eine Buchung, die nicht buchen kann, wäre
 *                               schlimmer als keine.
 *   APPOINTMENT_PROVIDER_NAME   Name des Anbieters, sichtbar an jedem
 *                               Buchungslink. Ein unbemerkter Wechsel zu
 *                               einem Drittanbieter wäre nicht zumutbar.
 *   APPOINTMENT_EMBED_ENABLED   "true" erlaubt ein Embed des Anbieters auf
 *                               /patientenservice/termin — erst nach
 *                               Einwilligung, analog zur Karte. Standard ist
 *                               der reine Link: kein Drittanbieter-Code auf
 *                               der Seite, keine Einwilligungsfrage.
 *
 * Die Werte werden zur Buildzeit gelesen (alle Routen sind statisch). Nach
 * einer Änderung an .env oder den Vercel-Umgebungsvariablen ist also ein
 * neuer Build nötig — für einen Anbieterwechsel ist das richtig so: Er soll
 * ein bewusster Deploy sein, kein Laufzeitzustand.
 *
 * Es gibt bewusst keine eigene Terminverwaltung und keine Speicherung: Der
 * Anbieter übernimmt den vollständigen Prozess auf seiner Seite, diese
 * Website speichert nichts. Fällt der Anbieter aus oder fehlt er, gilt der
 * Telefonweg — der steht auf jeder Seite daneben.
 */

export type TerminBuchung = {
  url: string;
  anbieter: string;
  embed: boolean;
} | null;

export function terminBuchung(): TerminBuchung {
  const url = process.env.APPOINTMENT_PROVIDER_URL;
  const anbieter = process.env.APPOINTMENT_PROVIDER_NAME;

  // Nur mit vollständiger, plausibler Konfiguration. Ein Buchungslink ohne
  // Anbieternamen wäre ein unbeschrifteter Wechsel zu einem Dritten.
  if (!url || !anbieter || !url.startsWith("https://")) return null;

  return {
    url,
    anbieter,
    embed: process.env.APPOINTMENT_EMBED_ENABLED === "true",
  };
}
