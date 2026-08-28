import { terminBuchung } from "@/lib/termin";
import { StartseiteInhalt } from "@/components/startseite-inhalt";

/**
 * Server-Wrapper der Startseite: liest die Termin-Konfiguration (Env) und
 * übergibt sie an den übersetzbaren Client-Inhalt. Metadaten kommen aus
 * dem Layout und bleiben deutsch — Deutsch ist die maßgebliche Fassung.
 */
export default function Startseite() {
  return <StartseiteInhalt anbieter={terminBuchung()?.anbieter ?? null} />;
}
