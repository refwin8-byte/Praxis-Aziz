import { notfall } from "@/data/praxis";

/**
 * Schmale Notfall-Leiste über dem Header, auf jeder Seite.
 *
 * Wer in einer Notlage auf einer Praxisseite landet, darf nicht erst zum
 * Footer scrollen müssen. Die Leiste ist bewusst ruhig gehalten — dunkler
 * Grund, keine Alarmfarbe auf ganzer Fläche: Sie informiert, sie schreit
 * nicht. Die Nummern selbst sind Telefonlinks, ein Tippen am Handy genügt.
 *
 * Nicht sticky: Oben klebt schon der Header, und zwei klebende Leisten
 * fräßen auf kleinen Displays zu viel Höhe. Die Nummern stehen zusätzlich im
 * Footer und auf /patientenservice/notfall.
 */
export function NotfallLeiste() {
  return (
    <div className="bg-night-deep text-white">
      <p className="container-page flex min-h-11 flex-wrap items-center gap-x-6 gap-y-0 py-1.5 text-[0.875rem]">
        <span className="flex items-center gap-2">
          <span className="text-white/70">{notfall.lebensbedrohlich.label}:</span>
          <a href={notfall.lebensbedrohlich.href} className="num inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline">
            {notfall.lebensbedrohlich.nummer}
          </a>
        </span>
        <span className="flex items-center gap-2">
          <span className="text-white/70">{notfall.bereitschaft.label}:</span>
          <a href={notfall.bereitschaft.href} className="num inline-flex min-h-11 items-center font-semibold underline-offset-4 hover:underline">
            {notfall.bereitschaft.nummer}
          </a>
        </span>
      </p>
    </div>
  );
}
