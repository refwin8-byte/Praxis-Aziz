"use client";

import { useEffect, useState } from "react";
import { status, type Status } from "@/lib/oeffnungszeiten";

/**
 * Live berechneter Öffnungsstatus.
 *
 * Bewusst erst nach dem Mount: Die Seite ist statisch vorgerendert, ein
 * serverseitig gerendertes „jetzt geöffnet" wäre der Stand des letzten Builds
 * und damit falsch. Bis der Wert steht, hält ein Platzhalter exakt dieselbe
 * Höhe, damit nichts springt.
 *
 * Die Berechnung kennt NRW-Feiertage und eingetragene Urlaubszeiten. Was sie
 * nicht kennen kann — kurzfristige Schließungen —, fängt der Kontext ab:
 * Daneben steht immer die Telefonnummer, und der Text macht keine Zusage.
 */
export function Oeffnungsstatus({ className = "" }: { className?: string }) {
  const [s, setS] = useState<Status | null>(null);

  useEffect(() => {
    setS(status());
    // Minütlich nachziehen, damit der Status nicht über den Ladenschluss
    // hinaus „geöffnet" behauptet, wenn der Tab lange offen liegt.
    const t = setInterval(() => setS(status()), 60_000);
    return () => clearInterval(t);
  }, []);

  if (!s) {
    return (
      <p className={`flex min-h-7 items-center gap-2.5 ${className}`} aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-rule" />
        <span className="text-ink-soft">Sprechzeiten werden geprüft</span>
      </p>
    );
  }

  return (
    <p className={`flex min-h-7 items-center gap-2.5 ${className}`} role="status">
      <span
        className={`h-2.5 w-2.5 shrink-0 rounded-full ${s.offen ? "bg-open" : "bg-ink-soft"}`}
      />
      {s.offen ? (
        <span>
          <strong className="font-semibold text-open">Jetzt geöffnet</strong>
          <span className="text-ink-soft">
            {" "}
            bis <span className="num">{s.bis}</span> Uhr
          </span>
        </span>
      ) : (
        <span className="text-ink-soft">
          {s.heute === "feiertag" && "Heute Feiertag. "}
          {s.heute === "urlaub" && "Die Praxis ist derzeit geschlossen. "}
          {s.naechster ? (
            <>
              {s.heute ? "Wieder" : "Geschlossen, wieder"} {s.naechster.tag} ab{" "}
              <span className="num">{s.naechster.von}</span> Uhr
            </>
          ) : (
            "Zurzeit geschlossen"
          )}
        </span>
      )}
    </p>
  );
}
