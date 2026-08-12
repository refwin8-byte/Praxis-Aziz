/**
 * Ein Formularfeld mit Beschriftung, Hinweis und Fehlermeldung.
 *
 * Regeln, die hier eingehalten werden:
 *
 * - Die Beschriftung ist ein echtes `<label>` mit `htmlFor`. Kein
 *   Platzhaltertext als Ersatz: Platzhalter verschwinden beim Tippen, und
 *   genau dann braucht man sie.
 * - Hinweis und Fehler hängen über `aria-describedby` am Feld, werden also
 *   vorgelesen.
 * - Die Fehlermeldung sagt, was zu tun ist, nicht nur was falsch war.
 * - Pflichtfelder sind im Text als solche benannt, nicht nur mit einem
 *   Sternchen, das ohne Legende nichts bedeutet.
 */

export const eingabeKlasse =
  "w-full min-h-13 rounded-sm border border-ink-soft/55 bg-paper px-4 py-3 text-[1.0625rem] text-ink " +
  "transition-colors placeholder:text-ink-soft/70 hover:border-ink-soft " +
  "aria-[invalid=true]:border-alert aria-[invalid=true]:border-2";

export function beschriebenVon(id: string, hinweis?: boolean, fehler?: string) {
  const teile = [hinweis ? `${id}-hinweis` : null, fehler ? `${id}-fehler` : null].filter(Boolean);
  return teile.length ? teile.join(" ") : undefined;
}

export function Feld({
  id,
  label,
  hinweis,
  pflicht,
  fehler,
  children,
}: {
  id: string;
  label: string;
  hinweis?: string;
  pflicht?: boolean;
  fehler?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-medium text-ink">
        {label}
        {!pflicht && <span className="font-normal text-ink-soft"> (freiwillig)</span>}
      </label>

      {hinweis && (
        <p id={`${id}-hinweis`} className="text-[0.9375rem] text-ink-soft">
          {hinweis}
        </p>
      )}

      {children}

      {fehler && (
        <p id={`${id}-fehler`} className="font-medium text-alert" role="alert">
          {fehler}
        </p>
      )}
    </div>
  );
}
