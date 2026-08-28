"use client";

import { notfall } from "@/data/praxis";
import { useSprache } from "@/lib/i18n";

/**
 * Schmale Notfall-Leiste über dem Header, auf jeder Seite.
 *
 * Wer in einer Notlage auf einer Praxisseite landet, darf nicht erst zum
 * Footer scrollen müssen. Die Leiste ist bewusst ruhig gehalten — dunkler
 * Grund, keine Alarmfarbe auf ganzer Fläche: Sie informiert, sie schreit
 * nicht. Die Nummern selbst sind Telefonlinks, ein Tippen am Handy genügt.
 *
 * Die Labels folgen der gewählten Sprache — gerade die Notfallwege müssen
 * verständlich sein, wenn Deutsch nicht die erste Sprache ist. Die
 * Nummern bleiben identisch.
 *
 * Auf schmalen Displays tragen kurze Labels, sonst frisst die Leiste
 * zwei Zeilen Bildschirmhöhe, bevor der Praxisname überhaupt kommt.
 */
export function NotfallLeiste() {
  const { wb } = useSprache();

  return (
    <div className="bg-night-deep text-white">
      <p className="container-page flex min-h-11 flex-wrap items-center gap-x-6 gap-y-0 py-1.5 text-[0.875rem]">
        <span className="flex items-center gap-2">
          <span className="text-white/70">
            <span className="sm:hidden">{wb.leiste.notfall.split(" ")[0]}:</span>
            <span className="hidden sm:inline">{wb.leiste.notfall}:</span>
          </span>
          <a href={notfall.lebensbedrohlich.href} className="num inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline">
            {notfall.lebensbedrohlich.nummer}
          </a>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-white/70">
            <span className="sm:hidden">{wb.leiste.bereitschaft.split(" ")[0]}:</span>
            <span className="hidden sm:inline">{wb.leiste.bereitschaft}:</span>
          </span>
          <a href={notfall.bereitschaft.href} className="num inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline">
            {notfall.bereitschaft.nummer}
          </a>
        </span>
      </p>
    </div>
  );
}
