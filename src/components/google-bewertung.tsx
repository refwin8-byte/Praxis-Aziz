"use client";

import { googleBewertung } from "@/data/praxis";
import { useSprache } from "@/lib/i18n";

/**
 * Das Google-„G" in den Originalfarben — unverändert, wie es die
 * Google-Markenrichtlinien für den Hinweis „Bewertungen auf Google"
 * vorsehen. Kein eigenes Icon-Design, keine Umfärbung.
 */
function GoogleG({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/**
 * Die Google-Bewertung der Praxis — als Zahl mit Quellenlink, nicht als
 * eingebettetes Widget.
 *
 * Warum kein Widget: Ein eingebettetes Google-Element überträgt bei jedem
 * Seitenaufruf Daten der Besucher an Google und bräuchte eine Einwilligung.
 * Der reine Link kostet nichts, und die Bewertungen sind dort vollständig
 * und ungefiltert einsehbar — das ist ehrlicher als jede kuratierte Auswahl.
 *
 * Warum keine einzelnen Zitate: Herausgegriffene Patientenstimmen sind nach
 * § 11 HWG heikel, sobald die Auswahl ein besseres Bild zeichnet als der
 * Durchschnitt. Der Gesamtwert mit Link tut das nicht — er ist überprüfbar.
 *
 * Der Stand ist bewusst sichtbar: Eine Bewertung ohne Datum sieht nach
 * Echtzeit aus und wäre irgendwann falsch.
 */
export function GoogleBewertung() {
  const { wb } = useSprache();
  if (!googleBewertung) return null;
  const b = googleBewertung;

  return (
    <div className="flex flex-col gap-4 rounded-md border border-rule bg-paper p-7 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-5">
        <GoogleG size={32} />
        <p>
          <span className="num block text-[1.75rem] font-semibold leading-tight text-night">
            {b.wert.toLocaleString("de-DE", { minimumFractionDigits: 1 })} {wb.google.vonFuenf}
          </span>
          <span className="text-[0.9375rem] text-ink-soft">
            {wb.google.ausRezensionen.replace("{n}", String(b.anzahl))} · {wb.google.stand} {b.stand}
          </span>
        </p>
      </div>
      <a
        href={b.url}
        rel="noopener noreferrer"
        target="_blank"
        className="press inline-flex min-h-13 shrink-0 items-center justify-center gap-2.5 rounded-md border border-night/25 px-6 font-semibold text-night transition-colors hover:border-night hover:bg-night/5"
      >
        {wb.google.lesen}
        <span className="sr-only">{wb.google.neuerTab}</span>
      </a>
    </div>
  );
}
