/**
 * Einheitlicher Auftakt aller Unterseiten. Eine Ebene, kein Bild, keine
 * Eyebrow: Der Titel trägt allein, und die Startseite bleibt der einzige Ort
 * mit einem großen Bildauftritt.
 */
export function SeitenKopf({
  titel,
  einleitung,
}: {
  titel: string;
  einleitung?: string;
}) {
  // Bewusst kompakt: Der Titel darf groß sein, aber der erste relevante
  // Inhalt muss am unteren Rand des ersten Viewports schon sichtbar werden.
  return (
    <header className="border-b border-rule">
      <div className="container-page pt-10 pb-9 lg:pt-14 lg:pb-11">
        <h1 className="display max-w-4xl text-night">{titel}</h1>
        {einleitung && <p className="lead mt-5">{einleitung}</p>}
      </div>
    </header>
  );
}
