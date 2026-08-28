"use client";

import { useEffect, useState } from "react";
import { status, type Status } from "@/lib/oeffnungszeiten";
import { useSprache } from "@/lib/i18n";

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
  const { wb } = useSprache();
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
        <span className="text-ink-soft">{wb.status.wirdGeprueft}</span>
      </p>
    );
  }

  // Beschriftung des nächsten Öffnungstermins in der gewählten Sprache.
  const naechsterText = (n: NonNullable<Extract<Status, { offen: false }>["naechster"]>) => {
    if (n.abstandTage === 0) return wb.status.heute;
    if (n.abstandTage === 1) return wb.status.morgen;
    const tag = wb.wochentageKurz[n.tagIndex];
    return n.datum ? `${tag}, ${n.datum.tag}.${n.datum.monat}.` : tag;
  };

  return (
    <p className={`flex min-h-7 items-center gap-2.5 ${className}`} role="status">
      <span
        className={`h-2.5 w-2.5 shrink-0 rounded-full ${s.offen ? "bg-open" : "bg-ink-soft"}`}
      />
      {s.offen ? (
        <span>
          <strong className="font-semibold text-open">{wb.status.gebffnetBis}</strong>
          <span className="text-ink-soft">
            {" "}
            {wb.sprechzeiten.bisUhr === "–" ? "–" : wb.sprechzeiten.bisUhr}{" "}
            <span className="num">{s.bis}</span>
            {wb.status.uhr && ` ${wb.status.uhr}`}
          </span>
        </span>
      ) : (
        <span className="text-ink-soft">
          {s.heute === "feiertag" && `${wb.status.feiertagHeute} `}
          {s.heute === "urlaub" && `${wb.status.urlaubHeute} `}
          {s.naechster ? (
            <>
              {s.heute ? wb.status.wieder : wb.status.geschlossenWieder}{" "}
              {naechsterText(s.naechster)} {wb.status.ab}{" "}
              <span className="num">{s.naechster.von}</span>
              {wb.status.uhr && ` ${wb.status.uhr}`}
            </>
          ) : (
            wb.status.zurzeitGeschlossen
          )}
        </span>
      )}
    </p>
  );
}
