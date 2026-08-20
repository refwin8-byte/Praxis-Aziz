/**
 * Motion-Assets der Website.
 *
 * Maximal drei kurze, lautlose Loops, alle aus echten Praxisfotos erzeugt
 * (Image-to-Video) und lokal unter /public/video gehostet — beim Seitenaufruf
 * geht kein Request an Higgsfield oder einen anderen Drittanbieter.
 *
 * Solange ein Eintrag `null` ist, zeigt die jeweilige Stelle das statische
 * Posterbild bzw. ihren gestalteten Fallback. Die Website ist also nie von
 * den Videos abhängig. Der vollständige Asset-Plan (Prompts, Formate,
 * Zielgrößen) liegt beim Auftraggeber; generiert wird erst nach Freigabe.
 *
 * Regeln aus dem Brief, die die Video-Komponente durchsetzt:
 * - Laden erst nahe am Viewport, nie beim Seitenaufruf
 * - Mobil und bei Save-Data nur das Poster
 * - Bei prefers-reduced-motion kein Autoplay
 * - dekorativ: aria-hidden, keine Controls, stumm, Loop
 * - feste Abmessungen gegen Layout Shift
 * - Ziel je Loop unter 2 MB (WebM + MP4, Poster als AVIF/WebP)
 */

export type MotionAsset = {
  webm: string;
  mp4: string;
  /** Statisches Fallback- und Erstbild. Immer ein echtes Foto. */
  poster: string;
  breite: number;
  hoehe: number;
};

/**
 * Startseite, Hero rechts.
 *
 * Erzeugt per Image-to-Video (Seedance 2.0) aus dem echten Foto
 * praxis-anmeldung.webp — mit demselben Foto als Start- UND Endbild.
 * Dadurch schließt die Schleife nativ: 8 s ruhiges Ein- und Ausatmen der
 * Kamera in durchgehenden 24 fps, ohne nachträgliches Strecken oder
 * Interpolieren (die Ursache des Ruckelns der ersten beiden Fassungen).
 * Der 4:5-Ausschnitt entspricht der Komposition des Originalfotos; die
 * vom Modell erfundenen 16:9-Ränder sind weggeschnitten. Für v4 ist die
 * native Schleife zusätzlich auf 2,2-fache Länge gedehnt und sauber auf
 * 30 fps interpoliert — bei dieser winzigen Bewegung artefaktfrei. Ein
 * voller Atemzug dauert jetzt 17,5 s. Poster = erstes Frame. Versionszahl
 * im Namen wegen des Bild-Caches: Beim Austausch immer umbenennen.
 */
export const heroLoop: MotionAsset | null = {
  webm: "/video/hero-loop-v4.webm",
  mp4: "/video/hero-loop-v4.mp4",
  poster: "/video/hero-loop-v4-poster.webp",
  breite: 864,
  hoehe: 1080,
};

/**
 * Praxis & Team, Hintergrund des Faktenbands. Derselbe Loop als breiter
 * Ausschnitt (aus dem 16:9-Master, 21:9-nah beschnitten), liegt hinter
 * einer deckenden Petrol-Fläche — Atmosphäre, kein Blickfang. Gleiche
 * Laufzeit und Glättung wie der Hero-Loop.
 */
export const praxisBand: MotionAsset | null = {
  webm: "/video/praxis-band.webm",
  mp4: "/video/praxis-band.mp4",
  poster: "/video/praxis-band-poster.webp",
  breite: 1440,
  hoehe: 612,
};

/** Praxis & Team, Hero-Foto. Quelle: praxis-wartebereich.webp, 6 s, 4:5. */
export const praxisLoop: MotionAsset | null = null;

/** Leistungen, Split-Hero rechts. Diagnostik-Stillleben, 7 s, 16:9. */
export const leistungenLoop: MotionAsset | null = null;
