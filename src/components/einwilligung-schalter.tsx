"use client";

import { useEffect, useState } from "react";
import { lesen, setzen, zuruecksetzen, EVENT, type Einwilligung } from "@/lib/consent";

/**
 * Dauerhafter Zugang zur eigenen Entscheidung, auf der Datenschutzseite.
 *
 * Art. 7 Abs. 3 DSGVO verlangt, dass der Widerruf so einfach ist wie die
 * Erteilung. Ein Banner, das nach der Zustimmung nie wieder auftaucht,
 * erfüllt das nicht. Deshalb steht die Entscheidung hier jederzeit offen,
 * inklusive Zeitpunkt.
 */
export function EinwilligungSchalter() {
  const [wert, setWert] = useState<Einwilligung | null>(null);
  const [bereit, setBereit] = useState(false);

  useEffect(() => {
    const anwenden = () => setWert(lesen());
    anwenden();
    setBereit(true);
    window.addEventListener(EVENT, anwenden);
    return () => window.removeEventListener(EVENT, anwenden);
  }, []);

  if (!bereit) return null;

  const stand = wert
    ? new Date(wert.stand).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="rounded-md bg-paper p-7">
      <h3 className="text-[1.1875rem] font-semibold text-night">Ihre aktuelle Entscheidung</h3>

      <p className="mt-3 text-ink-soft">
        {wert === null ? (
          "Sie haben noch nicht entschieden. Externe Inhalte werden derzeit nicht geladen."
        ) : wert.extern ? (
          <>
            Externe Inhalte sind <strong className="font-semibold text-ink">erlaubt</strong>. Die
            Karte auf der Kontaktseite wird geladen.
          </>
        ) : (
          <>
            Externe Inhalte sind <strong className="font-semibold text-ink">abgelehnt</strong>. Es
            wird keine Verbindung zu fremden Servern aufgebaut.
          </>
        )}
        {stand && <span className="block text-[0.9375rem]">Entschieden am {stand}.</span>}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setzen(true)}
          disabled={wert?.extern === true}
          className="press inline-flex min-h-12 items-center justify-center rounded-md border border-night bg-night px-6 font-semibold text-white transition-colors hover:bg-night-deep disabled:cursor-not-allowed disabled:opacity-45"
        >
          Externe Inhalte erlauben
        </button>
        <button
          type="button"
          onClick={() => setzen(false)}
          disabled={wert !== null && wert.extern === false}
          className="press inline-flex min-h-12 items-center justify-center rounded-md border border-night/30 px-6 font-semibold text-night transition-colors hover:border-night disabled:cursor-not-allowed disabled:opacity-45"
        >
          Externe Inhalte ablehnen
        </button>
        {wert !== null && (
          <button
            type="button"
            onClick={zuruecksetzen}
            className="inline-flex min-h-12 items-center justify-center px-2 text-[0.9375rem] text-ink-soft underline underline-offset-4 hover:text-night"
          >
            Entscheidung zurücksetzen
          </button>
        )}
      </div>
    </div>
  );
}
