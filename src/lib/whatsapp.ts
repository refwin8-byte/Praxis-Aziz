/**
 * WhatsApp-Business-Kontakt der Praxis — als Vorschau vorbereitet.
 *
 * Die Nummer kommt ausschließlich aus WHATSAPP_BUSINESS_NUMBER
 * (internationales Format ohne Sonderzeichen, z. B. 4915712345678).
 * Ohne konfigurierte Nummer zeigt die Sektion eine klar gekennzeichnete
 * Vorschau und der Button sendet NICHTS an eine erfundene Nummer —
 * er verweist stattdessen auf das Telefon.
 *
 * Später öffnet der Button einen einfachen wa.me-Link. Es gibt kein
 * WhatsApp-Skript, kein Widget und kein Tracking auf der Seite; die
 * einzige vorbelegte Nachricht ist eine Rückrufbitte ohne jede
 * medizinische Angabe.
 */

export function whatsappNummer(): string | null {
  const roh = process.env.WHATSAPP_BUSINESS_NUMBER;
  if (!roh) return null;
  const nummer = roh.replace(/[^\d]/g, "");
  // Plausibilität statt Vertrauen: eine offensichtlich unvollständige
  // Nummer erzeugt keinen Link.
  return nummer.length >= 10 ? nummer : null;
}

export function waLink(nummer: string, nachricht: string): string {
  return `https://wa.me/${nummer}?text=${encodeURIComponent(nachricht)}`;
}
