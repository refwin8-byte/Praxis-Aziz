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
 * praxis-anmeldung.webp. Aus der Generierung sind nur die ersten zwei
 * Sekunden verwendet — dort ist die Kamera dem Ausgangsfoto noch treu —
 * und als Vor-und-zurück-Schleife geschnitten (5,6 s, nahtlos). Der
 * 4:5-Ausschnitt entspricht der Komposition des Originalfotos; die vom
 * Modell erfundenen 16:9-Ränder sind weggeschnitten. Poster = erstes Frame.
 */
export const heroLoop: MotionAsset | null = {
  webm: "/video/hero-loop.webm",
  mp4: "/video/hero-loop.mp4",
  poster: "/video/hero-loop-poster.webp",
  breite: 864,
  hoehe: 1080,
};

/** Praxis & Team, Hero-Foto. Quelle: praxis-wartebereich.webp, 6 s, 4:5. */
export const praxisLoop: MotionAsset | null = null;

/** Leistungen, Split-Hero rechts. Diagnostik-Stillleben, 7 s, 16:9. */
export const leistungenLoop: MotionAsset | null = null;
