"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-Reveal, einmalig.
 *
 * Bewusst sparsam eingesetzt: nicht auf jeder Sektion, sondern nur dort, wo
 * ein Block als Einheit auftreten soll. Eine identische Einblendung über die
 * ganze Seite ist kein Gestaltungsmittel mehr, sondern ein Tic.
 *
 * Warum Rechteckmessung statt IntersectionObserver: Der Observer meldet in
 * manchen Umgebungen keine Überschneidung, wenn die Seite nicht komponiert
 * wird — etwa in Test- und Vorschaufenstern. Der Inhalt bliebe dann dauerhaft
 * unsichtbar, und das ist der schlechteste denkbare Ausgang einer Animation.
 * `getBoundingClientRect` liefert dagegen immer Zahlen. Die Kosten sind
 * vernachlässigbar: ein passiver Scroll-Listener für wenige Blöcke, der sich
 * nach dem Einblenden selbst abmeldet.
 *
 * Zweite Absicherung liegt im CSS: Der versteckte Ausgangszustand gilt nur
 * bei `data-motion="an"` am <html>, gesetzt von einem Inline-Skript. Ohne
 * JavaScript bleibt alles sichtbar.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [sichtbar, setSichtbar] = useState(false);

  useEffect(() => {
    const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (ruhig) {
      setSichtbar(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    let fertig = false;

    const pruefen = () => {
      if (fertig) return;
      const r = el.getBoundingClientRect();
      // Auslösen, sobald die Oberkante die Schwelle unterschritten hat.
      //
      // Bewusst OHNE zusätzliche Bedingung auf die Unterkante: Ein Block, der
      // bereits nach oben aus dem Bild gelaufen ist, muss ebenfalls als
      // gesehen gelten. Sonst bliebe er nach einem Ankersprung oder schnellem
      // Scrollen für immer unsichtbar.
      const schwelle = window.innerHeight * 0.88;
      if (r.top < schwelle) {
        fertig = true;
        setSichtbar(true);
        abmelden();
      }
    };

    const abmelden = () => {
      window.removeEventListener("scroll", pruefen);
      window.removeEventListener("resize", pruefen);
    };

    window.addEventListener("scroll", pruefen, { passive: true });
    window.addEventListener("resize", pruefen);

    // Sofort prüfen, für Blöcke die beim Laden schon im Bild stehen. Der
    // Effekt läuft nach dem Layout, die Maße stimmen also bereits.
    pruefen();
    // Zusätzlich im nächsten Frame, falls sich das Layout durch Schriften
    // oder Bilder noch verschiebt. Nicht als einziger Weg: Steht der
    // Frame-Takt still, bliebe die Erstprüfung sonst aus.
    const raf = requestAnimationFrame(pruefen);

    return () => {
      abmelden();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-sichtbar={sichtbar ? "ja" : "nein"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
