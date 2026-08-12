import nodemailer from "nodemailer";

/**
 * Versand der Anfragen an die Praxis.
 *
 * Regeln, die hier bewusst gelten:
 *
 * - **Nichts wird gespeichert.** Es gibt keine Datenbank, keine Logdatei mit
 *   Inhalten und keine Kopie an Dritte. Die Angaben gehen durch den Prozess
 *   hindurch ins Postfach der Praxis und sind danach hier verschwunden.
 * - **TLS ist Pflicht.** `requireTLS` erzwingt eine verschlüsselte
 *   Verbindung. Kommt sie nicht zustande, schlägt der Versand fehl, statt
 *   Gesundheitsdaten im Klartext über das Netz zu schicken.
 * - **Kein Fallback auf einen fremden Dienst.** Fehlt die Konfiguration,
 *   wird nicht gesendet und die Oberfläche verweist aufs Telefon.
 *
 * Vor dem Livegang braucht die Praxis ein Postfach auf eigener Domain und
 * einen Auftragsverarbeitungsvertrag mit dem Anbieter. Eine Gmail-Adresse
 * ohne AV-Vertrag ist für Patientendaten nicht zulässig.
 */

export type Versandergebnis = { ok: true } | { ok: false; grund: "nicht-konfiguriert" | "fehler" };

function transport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    requireTLS: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendeAnfrage(betreff: string, inhalt: string): Promise<Versandergebnis> {
  const t = transport();
  const empfaenger = process.env.ANFRAGE_EMPFAENGER;

  if (!t || !empfaenger) {
    // Kein stiller Fehlschlag: Die Oberfläche muss das erfahren und den
    // Telefonweg anbieten, sonst wartet jemand auf ein Rezept, das nie kommt.
    console.warn("[anfrage] SMTP oder Empfänger nicht konfiguriert, es wurde nichts gesendet.");
    return { ok: false, grund: "nicht-konfiguriert" };
  }

  try {
    await t.sendMail({
      from: `"Praxis-Website" <${process.env.SMTP_USER}>`,
      to: empfaenger,
      subject: betreff,
      text: inhalt,
      // Kein HTML: Der Inhalt ist reiner Text, und ein Textteil allein
      // schließt jede Nachlademöglichkeit im Postfach aus.
    });
    return { ok: true };
  } catch (e) {
    // Bewusst ohne Inhalt der Anfrage im Log — dort dürfen keine
    // Gesundheitsdaten landen.
    console.error("[anfrage] Versand fehlgeschlagen:", e instanceof Error ? e.message : e);
    return { ok: false, grund: "fehler" };
  }
}
