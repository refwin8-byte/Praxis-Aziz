"use client";

import { useSprache } from "@/lib/i18n";

/**
 * Solange eine noch nicht muttersprachlich geprüfte Sprache aktiv ist,
 * steht dieser Hinweis sichtbar unter dem Header — in der gewählten
 * Sprache selbst. Er verschwindet erst, wenn die Übersetzung im
 * Wörterbuch als geprüft markiert wird. Ehrlichkeit vor Eindruck:
 * Niemand soll einer ungeprüften medizinnahen Übersetzung vertrauen.
 */
export function SprachBanner() {
  const { wb } = useSprache();
  if (wb.code === "de") return null;

  return (
    <div className="border-b border-rule bg-salbei" role="note">
      <p className="container-page py-3 text-[0.9375rem] text-ink">
        {!wb.geprueft && <strong className="font-semibold">{wb.allgemein.pruefHinweis}</strong>}{" "}
        {wb.allgemein.teilweiseUebersetzt}
      </p>
    </div>
  );
}
