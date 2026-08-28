"use client";

import { useEffect, useRef, useState } from "react";
import { SPRACHEN, useSprache } from "@/lib/i18n";

/** Globus, im Stil der bestehenden Inline-Icons (24er-Raster, 1.6). */
function Globus({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      aria-hidden="true"
      focusable={false}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.6 2.3 3.9 5.1 3.9 8.5s-1.3 6.2-3.9 8.5c-2.6-2.3-3.9-5.1-3.9-8.5s1.3-6.2 3.9-8.5Z" />
    </svg>
  );
}

/**
 * Sprachauswahl: ein Knopf mit Globus, darunter eine einfache Liste der
 * vier Sprachen in ihrer eigenen Schreibweise. Bewusst keine Flaggen —
 * Sprachen sind keine Länder, und Flaggen sind für genau diese Sprachen
 * (Türkisch, Russisch, Albanisch) politisch aufgeladen.
 *
 * Große Ziele (min. 48 px), Tastatur: Enter/Leertaste öffnet, Escape
 * schließt, die Einträge sind normale Buttons in der Tab-Reihenfolge.
 */
export function SprachWahl({ dunkel = false }: { dunkel?: boolean }) {
  const { wb, sprache, setzeSprache } = useSprache();
  const [offen, setOffen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!offen) return;
    const zu = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOffen(false);
    };
    const taste = (e: KeyboardEvent) => e.key === "Escape" && setOffen(false);
    document.addEventListener("mousedown", zu);
    document.addEventListener("keydown", taste);
    return () => {
      document.removeEventListener("mousedown", zu);
      document.removeEventListener("keydown", taste);
    };
  }, [offen]);

  return (
    <div ref={wrap} className="relative">
      <button
        type="button"
        onClick={() => setOffen((v) => !v)}
        aria-expanded={offen}
        aria-haspopup="listbox"
        aria-label={`${wb.allgemein.sprachwahlOeffnen} — ${wb.eigenname}`}
        className={`press inline-flex min-h-12 items-center gap-2 rounded-md border px-3.5 text-[0.9375rem] font-semibold transition-colors ${
          dunkel
            ? "border-white/30 text-white hover:border-white"
            : "border-rule text-night hover:border-night"
        }`}
      >
        <Globus />
        <span className="uppercase">{sprache}</span>
      </button>

      {offen && (
        <ul
          role="listbox"
          aria-label={wb.allgemein.sprache}
          className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-md border border-rule bg-paper py-1 shadow-[0_18px_44px_-24px_rgba(16,47,45,0.5)]"
        >
          {SPRACHEN.map((s) => (
            <li key={s.code}>
              <button
                type="button"
                role="option"
                aria-selected={s.code === sprache}
                onClick={() => {
                  setzeSprache(s.code);
                  setOffen(false);
                }}
                className={`flex min-h-13 w-full items-center justify-between px-4 text-left text-[1.0625rem] transition-colors hover:bg-salbei ${
                  s.code === sprache ? "font-semibold text-night" : "text-ink"
                }`}
              >
                {s.eigenname}
                {s.code === sprache && (
                  <span aria-hidden="true" className="text-petrol">
                    ✓
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
