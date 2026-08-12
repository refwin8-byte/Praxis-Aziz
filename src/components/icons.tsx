/**
 * Eigene Icons statt Icon-Bibliothek. Es werden sieben Stück gebraucht;
 * ein Paket dafür wären rund 60 KB für 98 Prozent ungenutzten Code.
 *
 * Einheitliche Regeln: 24er-Raster, 1.6 Strichstärke, runde Enden,
 * `currentColor`. Dadurch sitzen sie optisch auf der Textlinie und erben
 * jede Farbe, auch auf Nachtgrund.
 */

type Props = { size?: number; className?: string };

const base = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false as const,
  className,
});

export function Telefon({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function Uhr({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  );
}

export function Pin({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M12 21s6.5-5.6 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </svg>
  );
}

export function Rezept({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M6 3.5h9l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14.5 3.5V8H19" />
      <path d="M8.5 12.5h7M8.5 16h4.5" />
    </svg>
  );
}

export function Pfeil({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M5 12h13M13 6.5 18.5 12 13 17.5" />
    </svg>
  );
}

/** Patientinnen und Patienten. Zwei Figuren, die zweite angeschnitten — das
 *  liest sich als „viele", ohne dass drei Köpfe das Raster zustellen. */
export function Menschen({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M15.4 20.5v-1.8a3.7 3.7 0 0 0-3.7-3.7H6.2a3.7 3.7 0 0 0-3.7 3.7v1.8" />
      <circle cx="8.95" cy="7.4" r="3.6" />
      <path d="M21.5 20.5v-1.8a3.7 3.7 0 0 0-2.8-3.58" />
      <path d="M15.9 4.02a3.7 3.7 0 0 1 0 7.16" />
    </svg>
  );
}

/** Jahre Erfahrung. Kalender statt Lorbeerkranz oder Pokal: Erfahrung ist
 *  eine Zeitangabe, keine Auszeichnung — und Auszeichnungen dürfen wir für
 *  diese Praxis ohnehin nicht andeuten. */
export function Kalender({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <rect x="3.4" y="5.2" width="17.2" height="15.3" rx="2.2" />
      <path d="M3.4 10.1h17.2" />
      <path d="M8.2 3.3v3.7M15.8 3.3v3.7" />
      <path d="M7.9 14.2h3.4" />
    </svg>
  );
}

/** Medizinische Schwerpunkte. Drei verbundene Knoten: drei Gebiete, eine
 *  Praxis. Bewusst kein Stern — ein Stern würde neben einer Zahl wie eine
 *  Bewertung gelesen, und die gibt es hier nicht. */
export function Schwerpunkte({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <circle cx="12" cy="5.8" r="2.6" />
      <circle cx="6.4" cy="17.2" r="2.6" />
      <circle cx="17.6" cy="17.2" r="2.6" />
      <path d="M10.4 7.9 8 14.7M13.6 7.9 16 14.7M9 17.2h6" />
    </svg>
  );
}

export function Menue({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Schliessen({ size = 24, className }: Props) {
  return (
    <svg {...base(size, className)}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
