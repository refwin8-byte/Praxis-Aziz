/**
 * Einwilligungsverwaltung.
 *
 * Diese Website kennt genau zwei Kategorien:
 *
 *   notwendig — Dinge, die ohne Einwilligung erlaubt sind, weil die Seite
 *               ohne sie nicht funktioniert. Dazu zählt auch das Speichern
 *               dieser Entscheidung selbst (§ 25 Abs. 2 Nr. 2 TDDDG).
 *   extern    — Inhalte von fremden Servern. Derzeit ausschließlich die
 *               Karte auf der Kontaktseite.
 *
 * Es gibt bewusst KEINE Kategorie für Statistik oder Marketing. Solche
 * Dienste sind nicht eingebunden, und eine Kategorie anzubieten, hinter der
 * nichts steht, wäre eine Vortäuschung.
 *
 * Gespeichert wird in localStorage, nicht in einem Cookie: Es muss nichts
 * zum Server übertragen werden, die Entscheidung wird rein im Browser
 * ausgewertet. Ein Cookie würde bei jedem Request mitreisen, ohne Nutzen.
 */

export type Einwilligung = {
  extern: boolean;
  /** ISO-Zeitpunkt der Entscheidung, damit ein Widerruf nachvollziehbar bleibt. */
  stand: string;
  version: number;
};

const SCHLUESSEL = "praxis-aziz-einwilligung";
const VERSION = 1;
export const EVENT = "einwilligung-geaendert";

export function lesen(): Einwilligung | null {
  if (typeof window === "undefined") return null;
  try {
    const roh = localStorage.getItem(SCHLUESSEL);
    if (!roh) return null;
    const wert = JSON.parse(roh) as Einwilligung;
    // Bei einer Änderung der Kategorien muss neu gefragt werden.
    if (wert.version !== VERSION) return null;
    return wert;
  } catch {
    return null;
  }
}

export function setzen(extern: boolean) {
  const wert: Einwilligung = { extern, stand: new Date().toISOString(), version: VERSION };
  try {
    localStorage.setItem(SCHLUESSEL, JSON.stringify(wert));
  } catch {
    // Privater Modus. Dann gilt die Entscheidung nur für diese Sitzung.
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: wert }));
}

/** Widerruf. Muss genauso einfach sein wie die Erteilung. */
export function zuruecksetzen() {
  try {
    localStorage.removeItem(SCHLUESSEL);
  } catch {
    /* nicht kritisch */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: null }));
}
