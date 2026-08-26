/**
 * Einzige Quelle für Praxisdaten. Jede Angabe hier ist an der Bestandsseite
 * oder am Impressum belegt. Nichts wird geraten: Was unbelegt ist, fehlt
 * bewusst und steht in PRODUCT.md unter „Offen".
 */

export const praxis = {
  name: "Praxis Dr. med. Adel Aziz",
  nameKurz: "Dr. med. Adel Aziz",
  fachgebiet: "Hausarztpraxis für die ganze Familie",
  url: "https://praxis-dr-aziz.de",

  telefon: "05772 5511",
  telefonHref: "tel:+4957725511",
  // TODO vor Veröffentlichung: durch das Praxispostfach auf eigener Domain
  // ersetzen, sobald es eingerichtet ist. Diese Adresse ist die einzige
  // Stelle — Kontaktseite und strukturierte Daten lesen von hier. Sie ist
  // NIE Empfänger der Formulare (der kommt aus ANFRAGE_EMPFAENGER).
  email: "arztpraxis.dr.aziz@gmail.com",

  adresse: {
    strasse: "Ostlandstraße 17",
    plz: "32339",
    ort: "Espelkamp",
    region: "Nordrhein-Westfalen",
    land: "DE",
  },
} as const;

/**
 * Die Ärzte.
 *
 * Beide Porträts sind vom Auftraggeber gelieferte Aufnahmen, nicht die
 * Bilder der Bestandsseite. Sie stammen aus derselben Reihe: gleicher warmer
 * Hintergrund, gleiche Lichtführung. Die Zuschnitte sind aufeinander
 * abgestimmt — 4:5, beide zentriert, vergleichbarer Maßstab.
 *
 * Die Originale liegen in `quellen/`, außerhalb von `public/`.
 *
 * Eine Vita liegt für Dennis Aziz nicht vor. Der Titel bleibt deshalb leer,
 * statt eine Fachrichtung zu erfinden.
 */
export const aerzte = [
  {
    name: "Dr. med. Adel Aziz",
    rolle: "Praxisinhaber",
    titel: "Facharzt für Allgemeinmedizin, Manuelle Medizin und Suchtmedizin",
    bild: "/bilder/adel-aziz-portraet.webp",
    alt: "Dr. med. Adel Aziz, Inhaber der Praxis, im Arztkittel vor hellem Hintergrund",
  },
  {
    name: "Dennis Aziz",
    rolle: "Angestellter Arzt",
    titel: null,
    bild: "/bilder/dennis-aziz-portraet-v2.webp",
    alt: "Dennis Aziz, angestellter Arzt der Praxis, im Arztkittel vor hellem Hintergrund",
  },
] as const;

/**
 * Leistungen in drei Gruppen, wie im Brief gefordert. Jeder Eintrag steht so
 * oder sinngemäß auf der Bestandsseite. Keine Ergänzungen: Eine Leistung, die
 * hier steht und die Praxis nicht anbietet, produziert enttäuschte Anrufe.
 */
export const leistungen = [
  {
    id: "diagnostik",
    titel: "Diagnostik",
    text: "Untersuchungen, die wir in der Praxis selbst durchführen. Sie brauchen dafür keinen zweiten Termin in einer anderen Stadt.",
    punkte: [
      "EKG und Langzeit-EKG",
      "Langzeit-Blutdruckmessung",
      "Ultraschalluntersuchung",
      "Lungenfunktionsprüfung",
      "Labordiagnostik und Blutentnahme",
      "HbA1c-Bestimmung",
    ],
  },
  {
    id: "chronisch",
    titel: "Chronische Erkrankungen",
    text: "Strukturierte Behandlungsprogramme, kurz DMP. Feste Kontrolltermine, abgestimmte Medikation und ein Ansprechpartner, der Ihren Verlauf kennt.",
    punkte: ["Diabetes mellitus", "Asthma bronchiale", "Koronare Herzkrankheit"],
  },
  {
    id: "weitere",
    titel: "Weitere Leistungen",
    text: "Was darüber hinaus zur hausärztlichen Versorgung gehört, einschließlich der beiden Schwerpunkte der Praxis.",
    punkte: [
      "Hausbesuche",
      "Manuelle Medizin",
      "Suchtmedizinische Betreuung",
      "Infusionstherapien",
      "Individuelle Gesundheitsleistungen",
    ],
  },
] as const;

/**
 * Praxisfakten in Zahlen.
 *
 * Alle drei stehen auf der Bestandsseite. Sie sind aber nicht gleich sicher,
 * und das ist wichtig:
 *
 *   3 Schwerpunkte — aus dem Impressum belegbar, unproblematisch.
 *   43 Jahre       — Tatsachenbehauptung der Praxis. Zulässig, wenn sie
 *                    stimmt. Von uns nicht überprüfbar.
 *   3700 Patienten — Die Bestandsseite schreibt „3,7k+ zufriedene
 *                    Patienten". Das Wort „zufrieden" ist hier gestrichen:
 *                    Eine Zufriedenheitsaussage ist unüberprüfbar und nach
 *                    § 11 HWG sowie § 27 Berufsordnung angreifbar. Die reine
 *                    Anzahl ist eine Tatsachenangabe.
 *
 * Alle drei müssen vor dem Livegang von der Praxis schriftlich bestätigt
 * werden. Sie haftet für die Angaben, nicht wir. Siehe README.md.
 */
export type PraxisZahl = {
  /** Steuert, welches Icon gezeigt wird. Die Zuordnung liegt in der
   *  Komponente, damit diese Datei frei von React bleibt. */
  id: "patienten" | "jahre" | "schwerpunkte";
  wert: number;
  /** Optionales „über “ vor der Zahl. Fehlt, wo der Wert exakt ist. */
  praefix?: string;
  label: string;
  zusatz: string;
};

export const praxisZahlen: PraxisZahl[] = [
  {
    id: "patienten",
    wert: 3700,
    praefix: "über ",
    label: "Patientinnen und Patienten",
    zusatz: "hausärztlich betreut, viele davon seit Jahren und mit der ganzen Familie.",
  },
  {
    id: "jahre",
    wert: 43,
    praefix: "über ",
    label: "Jahre ärztliche Erfahrung",
    zusatz: "aus stationärer, chirurgischer und ambulanter Tätigkeit.",
  },
  {
    id: "schwerpunkte",
    wert: 3,
    label: "Medizinische Schwerpunkte",
    zusatz: "Allgemeinmedizin, Manuelle Medizin und Suchtmedizin, in einer Praxis.",
  },
];

/**
 * Urlaubs- und Sonderschließzeiten.
 *
 * Der Öffnungsstatus behandelt diese Tage wie Sonntage, Grenzen
 * einschließlich. Gesetzliche NRW-Feiertage werden automatisch berechnet und
 * gehören NICHT hierher — hierher gehören Praxisurlaub, Fortbildungstage,
 * Heiligabend und Silvester, sobald die Praxis sie nennt.
 *
 * Format: ISO-Datum „YYYY-MM-DD". Der Grund erscheint im Status („wegen
 * Urlaub geschlossen"), wenn er gesetzt ist.
 */
export const urlaube: { von: string; bis: string; grund?: string }[] = [
  // Beispiel: { von: "2026-12-24", bis: "2026-12-31", grund: "Weihnachtsurlaub" },
];

/**
 * Google-Bewertung der Praxis, als Zahl mit Quellenlink — bewusst KEIN
 * eingebettetes Google-Widget: Ein Widget würde bei jedem Seitenaufruf Daten
 * an Google übertragen und bräuchte eine Einwilligung. Der reine Link kostet
 * nichts und führt zu denselben Bewertungen.
 *
 * Verifiziert am 20.08.2026 direkt an Googles eigener Karten-Infokarte
 * des Praxiseintrags: 4,2 aus 65 Rezensionen. Regelmäßig aktualisieren —
 * eine veraltete Zahl ist angreifbar. Steht `null` hier, verschwindet
 * der Block von der Seite.
 */
export const googleBewertung: {
  wert: number;
  anzahl: number;
  stand: string;
  url: string;
} | null = {
  wert: 4.2,
  anzahl: 65,
  stand: "August 2026",
  url: "https://www.google.com/maps/search/?api=1&query=Praxis+Dr.+med.+Adel+Aziz+Ostlandstra%C3%9Fe+17+32339+Espelkamp",
};

/**
 * Notfallnummern. Sicherheitsrelevant: Diese Angaben dürfen gestalterischer
 * Zurückhaltung nie zum Opfer fallen und stehen im Footer jeder Seite.
 */
export const notfall = {
  lebensbedrohlich: {
    label: "Lebensbedrohlicher Notfall",
    nummer: "112",
    href: "tel:112",
    hinweis: "Rettungsdienst und Notarzt, rund um die Uhr",
  },
  bereitschaft: {
    label: "Ärztlicher Bereitschaftsdienst",
    nummer: "116 117",
    href: "tel:116117",
    hinweis: "Außerhalb der Sprechzeiten, wenn es nicht bis zum nächsten Werktag warten kann",
  },
} as const;

/**
 * Die Formulare für Rezept und Überweisung laufen seit dem
 * Patientenservice-Ausbau über die eigenen Seiten unter /patientenservice
 * und senden über die Server Action an das Praxispostfach (siehe
 * src/lib/mailer.ts). Entschieden ist: Die Praxis erhält dafür ein Postfach
 * auf eigener Domain mit Auftragsverarbeitungsvertrag. Bis die Zugangsdaten
 * in .env.local liegen, senden die Formulare nichts und verweisen sichtbar
 * auf den Telefonweg — es gibt keinen stillen Fehlschlag.
 */
