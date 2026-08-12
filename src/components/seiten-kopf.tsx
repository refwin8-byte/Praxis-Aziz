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
  return (
    <header className="border-b border-rule">
      <div className="container-page pt-14 pb-12 lg:pt-20 lg:pb-16">
        <h1 className="display max-w-4xl text-night">{titel}</h1>
        {einleitung && <p className="lead mt-6">{einleitung}</p>}
      </div>
    </header>
  );
}
