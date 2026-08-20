/**
 * Sprechzeiten und der daraus berechnete Öffnungsstatus.
 *
 * Quelle: Bestandsseite, wörtlich übernommen. Montag, Dienstag, Donnerstag
 * 08:00–12:00 und 15:00–18:00 Uhr. Mittwoch und Freitag 08:00–12:00 Uhr.
 *
 * Wichtig: Verzeichnisse wie arzt-auskunft.de nennen abweichende Zeiten. Bis
 * die Praxis das bestätigt, gilt die eigene Website als Quelle. Falsche
 * Sprechzeiten schicken Menschen vor eine verschlossene Tür.
 *
 * Der Status berücksichtigt gesetzliche Feiertage in NRW (berechnet, keine
 * Pflege nötig) und eingetragene Urlaubszeiten aus praxis.ts. Was er nicht
 * kennen kann — kurzfristige Schließungen, Fortbildungen —, fängt die
 * Formulierung ab: Neben dem Status steht immer die Telefonnummer, und der
 * Text macht keine Zusage.
 */

import { istFeiertagNRW } from "@/lib/feiertage";
import { urlaube } from "@/data/praxis";

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

/** „YYYY-MM-DD" als lokales Datum. `new Date("YYYY-MM-DD")` wäre UTC und
 *  verschöbe den Tag je nach Zeitzone — bei Urlaubsgrenzen ein echter Fehler. */
const alsLokalesDatum = (iso: string) => {
  const [j, m, t] = iso.split("-").map(Number);
  return new Date(j, m - 1, t);
};

/** Liegt der Tag in einem eingetragenen Urlaub? Grenzen einschließlich. */
export function istUrlaub(datum: Date): { grund?: string } | null {
  const tag = new Date(datum.getFullYear(), datum.getMonth(), datum.getDate());
  for (const u of urlaube) {
    if (tag >= alsLokalesDatum(u.von) && tag <= alsLokalesDatum(u.bis)) {
      return { grund: u.grund };
    }
  }
  return null;
}

export type Status =
  | { offen: true; bis: string }
  | {
      offen: false;
      /** Warum heute zu ist, wenn es nicht schlicht außerhalb der Zeiten liegt. */
      heute?: "feiertag" | "urlaub";
      naechster: { tag: string; von: string } | null;
    };

/** Hat die Praxis an diesem Tag nach Plan geöffnet? */
function tagGeschlossen(datum: Date): "feiertag" | "urlaub" | null {
  if (istFeiertagNRW(datum)) return "feiertag";
  if (istUrlaub(datum)) return "urlaub";
  return null;
}

/**
 * Berechnet den Status zu einem Zeitpunkt.
 *
 * Bewusst ohne Zeitzonen-Bibliothek: Der Wert wird im Browser der Patientin
 * berechnet, und wer vor der Tür steht, hat die lokale Uhrzeit des Geräts.
 */
export function status(jetzt: Date = new Date()): Status {
  const tag = (jetzt.getDay() + 6) % 7; // Mo = 0
  const min = jetzt.getHours() * 60 + jetzt.getMinutes();
  const heuteZu = tagGeschlossen(jetzt);

  if (!heuteZu) {
    for (const z of sprechzeiten[tag]) {
      if (min >= alsMinuten(z.von) && min < alsMinuten(z.bis)) {
        return { offen: true, bis: z.bis };
      }
    }
  }

  // Nächste Öffnung suchen: heute zuerst, dann bis zu 60 Tage weiter —
  // genug, um auch über einen Praxisurlaub hinwegzusehen.
  for (let d = 0; d < 60; d++) {
    const datum = new Date(jetzt.getFullYear(), jetzt.getMonth(), jetzt.getDate() + d);
    if (tagGeschlossen(datum)) continue;
    for (const z of sprechzeiten[(tag + d) % 7]) {
      if (d === 0 && min >= alsMinuten(z.von)) continue;
      // Ab einer Woche Abstand reicht der Wochentag nicht mehr — „Montag"
      // hieße sonst irgendein Montag. Dann steht das Datum dabei.
      const name =
        d === 0
          ? "heute"
          : d === 1
            ? "morgen"
            : d < 7
              ? tagLang[(tag + d) % 7]
              : `${tagLang[(tag + d) % 7]}, ${datum.getDate()}.${datum.getMonth() + 1}.`;
      return {
        offen: false,
        heute: heuteZu ?? undefined,
        naechster: { tag: name, von: z.von },
      };
    }
  }
  return { offen: false, heute: heuteZu ?? undefined, naechster: null };
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
