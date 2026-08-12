/**
 * Sprechzeiten und der daraus berechnete Öffnungsstatus.
 *
 * Quelle: Bestandsseite, wörtlich übernommen. Montag, Dienstag, Donnerstag
 * 08:00–12:00 und 15:00–18:00 Uhr. Mittwoch und Freitag 08:00–12:00 Uhr.
 *
 * Wichtig: Verzeichnisse wie arzt-auskunft.de nennen abweichende Zeiten. Bis
 * die Praxis das bestätigt, gilt die eigene Website als Quelle. Falsche
 * Sprechzeiten schicken Menschen vor eine verschlossene Tür.
 */

export type Zeitraum = { von: string; bis: string };

/** Index 0 = Montag ... 6 = Sonntag. */
export const sprechzeiten: Zeitraum[][] = [
  [{ von: "08:00", bis: "12:00" }, { von: "15:00", bis: "18:00" }], // Mo
  [{ von: "08:00", bis: "12:00" }, { von: "15:00", bis: "18:00" }], // Di
  [{ von: "08:00", bis: "12:00" }], // Mi
  [{ von: "08:00", bis: "12:00" }, { von: "15:00", bis: "18:00" }], // Do
  [{ von: "08:00", bis: "12:00" }], // Fr
  [], // Sa
  [], // So
];

export const tagKurz = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
export const tagLang = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag",
];

/** Fasst gleiche aufeinanderfolgende Tage zusammen: „Mo, Di, Do" statt drei Zeilen. */
export function gruppierteZeiten() {
  const gruppen: { tage: string; zeiten: Zeitraum[] }[] = [];

  for (let i = 0; i < 5; i++) {
    const key = JSON.stringify(sprechzeiten[i]);
    const letzte = gruppen[gruppen.length - 1];
    if (letzte && JSON.stringify(letzte.zeiten) === key) {
      letzte.tage += `, ${tagKurz[i]}`;
    } else {
      gruppen.push({ tage: tagKurz[i], zeiten: [...sprechzeiten[i]] });
    }
  }
  return gruppen;
}

const alsMinuten = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

export type Status =
  | { offen: true; bis: string }
  | { offen: false; naechster: { tag: string; von: string } | null };

/**
 * Berechnet den Status zu einem Zeitpunkt.
 *
 * Bewusst ohne Zeitzonen-Bibliothek: Der Wert wird im Browser der Patientin
 * berechnet, und wer vor der Tür steht, hat die lokale Uhrzeit des Geräts.
 * Feiertage kennt diese Funktion nicht — deshalb steht neben dem Status
 * immer die Telefonnummer und nie eine Zusage.
 */
export function status(jetzt: Date = new Date()): Status {
  const tag = (jetzt.getDay() + 6) % 7; // Mo = 0
  const min = jetzt.getHours() * 60 + jetzt.getMinutes();

  for (const z of sprechzeiten[tag]) {
    if (min >= alsMinuten(z.von) && min < alsMinuten(z.bis)) {
      return { offen: true, bis: z.bis };
    }
  }

  // Nächste Öffnung suchen, heute zuerst, dann bis zu sieben Tage weiter.
  for (let d = 0; d < 8; d++) {
    const i = (tag + d) % 7;
    for (const z of sprechzeiten[i]) {
      if (d === 0 && min >= alsMinuten(z.von)) continue;
      return {
        offen: false,
        naechster: { tag: d === 0 ? "heute" : d === 1 ? "morgen" : tagLang[i], von: z.von },
      };
    }
  }
  return { offen: false, naechster: null };
}

/** Sprechzeiten für schema.org, damit Google sie ausspielen kann. */
export function schemaZeiten() {
  const tage = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const out: { "@type": string; dayOfWeek: string; opens: string; closes: string }[] = [];
  sprechzeiten.slice(0, 5).forEach((zeiten, i) => {
    zeiten.forEach((z) => {
      out.push({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: tage[i],
        opens: z.von,
        closes: z.bis,
      });
    });
  });
  return out;
}
