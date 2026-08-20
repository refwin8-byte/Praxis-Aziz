import { googleBewertung } from "@/data/praxis";
import { Stern } from "@/components/icons";

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
  if (!googleBewertung) return null;
  const b = googleBewertung;

  return (
    <div className="flex flex-col gap-4 rounded-md border border-rule bg-paper p-7 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-5">
        <Stern size={34} className="shrink-0 text-petrol" aria-hidden="true" />
        <p>
          <span className="num block text-[1.75rem] font-semibold leading-tight text-night">
            {b.wert.toLocaleString("de-DE", { minimumFractionDigits: 1 })} von 5
          </span>
          <span className="text-[0.9375rem] text-ink-soft">
            aus <span className="num">{b.anzahl}</span> Google-Rezensionen, Stand {b.stand}
          </span>
        </p>
      </div>
      <a
        href={b.url}
        rel="noopener noreferrer"
        target="_blank"
        className="press inline-flex min-h-13 shrink-0 items-center justify-center gap-2.5 rounded-md border border-night/25 px-6 font-semibold text-night transition-colors hover:border-night hover:bg-night/5"
      >
        Bewertungen auf Google lesen
        <span className="sr-only">(öffnet Google in einem neuen Tab)</span>
      </a>
    </div>
  );
}
