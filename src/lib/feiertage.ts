/**
 * Gesetzliche Feiertage in Nordrhein-Westfalen.
 *
 * Vollständig berechenbar, keine Pflege nötig: Die beweglichen Feiertage
 * hängen alle am Osterdatum (Gauß-Formel). NRW hat gegenüber den
 * bundeseinheitlichen Feiertagen zusätzlich Fronleichnam und Allerheiligen.
 *
 * Der Öffnungsstatus behandelt Feiertage wie Sonntage. Heiligabend und
 * Silvester sind KEINE gesetzlichen Feiertage — ob die Praxis dann öffnet,
 * muss sie selbst sagen; solche Tage gehören in `urlaube` in praxis.ts.
 */

/** Ostersonntag nach der Gauß-Formel (gültig 1900–2099). */
export function ostersonntag(jahr: number): Date {
  const a = jahr % 19;
  const b = jahr % 4;
  const c = jahr % 7;
  const k = Math.floor(jahr / 100);
  const p = Math.floor((13 + 8 * k) / 25);
  const q = Math.floor(k / 4);
  const m = (15 - p + k - q) % 30;
  const n = (4 + k - q) % 7;
  const d = (19 * a + m) % 30;
  const e = (2 * b + 4 * c + 6 * d + n) % 7;
  let tag = 22 + d + e; // Tag im März
  // Zwei Ausnahmen der Formel.
  if (tag === 57) tag = 50;
  if (d === 28 && e === 6 && a > 10) tag = 49;
  return new Date(jahr, 2, 1 + tag - 1);
}

const plusTage = (d: Date, tage: number) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate() + tage);

/** Alle gesetzlichen Feiertage NRW eines Jahres, als lokale Datumswerte. */
export function feiertageNRW(jahr: number): Date[] {
  const ostern = ostersonntag(jahr);
  return [
    new Date(jahr, 0, 1), // Neujahr
    plusTage(ostern, -2), // Karfreitag
    plusTage(ostern, 1), // Ostermontag
    new Date(jahr, 4, 1), // Tag der Arbeit
    plusTage(ostern, 39), // Christi Himmelfahrt
    plusTage(ostern, 50), // Pfingstmontag
    plusTage(ostern, 60), // Fronleichnam (NRW)
    new Date(jahr, 9, 3), // Tag der Deutschen Einheit
    new Date(jahr, 10, 1), // Allerheiligen (NRW)
    new Date(jahr, 11, 25), // 1. Weihnachtstag
    new Date(jahr, 11, 26), // 2. Weihnachtstag
  ];
}

const gleicherTag = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export function istFeiertagNRW(datum: Date): boolean {
  return feiertageNRW(datum.getFullYear()).some((f) => gleicherTag(f, datum));
}
