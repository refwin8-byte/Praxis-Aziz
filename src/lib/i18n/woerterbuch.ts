/**
 * Übersetzungsstruktur der Website.
 *
 * Deutsch ist die maßgebliche Ausgangsversion — die deutschen Texte hier
 * sind die Quelle der Seiteninhalte. Türkisch, Russisch und Albanisch sind
 * ENTWÜRFE: `geprueft: false` heißt, die Übersetzung muss vor
 * Veröffentlichung muttersprachlich geprüft werden. Der Hinweis dazu wird
 * Besucherinnen sichtbar angezeigt, solange die Prüfung aussteht.
 *
 * Es wird nichts erfunden: Jeder Eintrag ist die Übersetzung eines
 * bestehenden deutschen Textes. Medizinische Aussagen kommen nicht dazu.
 * Impressum, Datenschutzerklärung und Barrierefreiheitserklärung bleiben
 * bewusst deutsch — Rechtstexte werden nicht ungeprüft übersetzt.
 *
 * Formularfehler laufen über CODES (siehe `fehler`): Die Servervalidierung
 * gibt den Code zurück, der Browser zeigt ihn in der gewählten Sprache an.
 */

export type Sprachcode = "de" | "tr" | "ru" | "sq";

/** Fehlercodes der Servervalidierung (src/lib/anfrage-schema.ts). */
export type FehlerCode =
  | "name-fehlt"
  | "name-kurz"
  | "zu-lang"
  | "geburtsdatum-fehlt"
  | "geburtsdatum-format"
  | "geburtsdatum-unmoeglich"
  | "geburtsdatum-zukunft"
  | "geburtsdatum-jahr"
  | "telefon-ungueltig"
  | "einwilligung-fehlt"
  | "medikament-fehlt"
  | "medikament-genauer"
  | "wirkstaerke-fehlt"
  | "medikament-name-fehlt"
  | "fachrichtung-fehlt"
  | "grund-fehlt"
  | "grund-genauer"
  | "pruefen"
  | "versand-nicht-eingerichtet"
  | "versand-fehlgeschlagen";

export type Woerterbuch = {
  code: Sprachcode;
  eigenname: string;
  /** Emoji-Flagge für die Sprachauswahl — auf Wunsch des Auftraggebers
   *  (der ursprüngliche Brief schloss Flaggen aus; Konflikt benannt am
   *  20.08.2026). Steht immer NEBEN dem Sprachnamen, nie allein. */
  flagge: string;
  geprueft: boolean;

  allgemein: {
    pruefHinweis: string;
    teilweiseUebersetzt: string;
    sprache: string;
    sprachwahlOeffnen: string;
    freiwillig: string;
    symbolbild: string;
  };

  nav: {
    leistungen: string;
    praxisTeam: string;
    patientenservice: string;
    kontaktAnfahrt: string;
    terminBuchen: string;
    menueOeffnen: string;
    menueSchliessen: string;
    zumInhalt: string;
  };

  leiste: {
    notfall: string;
    bereitschaft: string;
    termin: string;
    anrufen: string;
    rezept: string;
  };

  /** Mo … So, Index 0 = Montag. */
  wochentageKurz: [string, string, string, string, string, string, string];

  status: {
    wirdGeprueft: string;
    gebffnetBis: string;
    uhr: string;
    geschlossenWieder: string;
    wieder: string;
    heute: string;
    morgen: string;
    ab: string;
    feiertagHeute: string;
    urlaubHeute: string;
    zurzeitGeschlossen: string;
  };

  start: {
    eyebrow: string;
    headline: string;
    text: string;
    rezeptAnfordern: string;
    statusHinweis: string;
    statusHinweisOnline: string;
    wegeTitel: string;
    wegeText: string;
    telefonTitel: string;
    telefonText: string;
    aerzteTitel: string;
    aerzteText: string;
    mehrPraxis: string;
    praxisseite: string;
    leistungenTitel: string;
    leistungenText: string;
    alleLeistungen: string;
    vertrauenTitel: string;
    vertrauenText: string;
    haltungssatz: string;
    fakten: { t: string; d: string }[];
    impressumSatz: string;
    impressum: string;
    findenTitel: string;
    findenText: string;
    frageTitel: string;
    frageText: string;
    wartebereichAlt: string;
  };

  zahlen: {
    ueber: string;
    patientenLabel: string;
    patientenZusatz: string;
    jahreLabel: string;
    jahreZusatz: string;
    schwerpunkteLabel: string;
    schwerpunkteZusatz: string;
  };

  google: {
    vonFuenf: string;
    ausRezensionen: string;
    stand: string;
    lesen: string;
    neuerTab: string;
  };

  sprechzeiten: {
    titel: string;
    geschlossen: string;
    wochenendKurz: string;
    hinweis: string;
    bisUhr: string;
    adresse: string;
    anfahrtKontakt: string;
    feiertageZu: string;
  };

  termin: {
    titel: string;
    einleitungTelefon: string;
    einleitungOnline: string;
    onlineTitel: string;
    onlineText: string;
    onlineButton: string;
    onlineFallback: string;
    oderTelefonisch: string;
    soErreichen: string;
    text: string;
    hinweisAkut: string;
  };

  anfrage: {
    bevorSieAusfuellen: string;
    nurDauermedikationT: string;
    nurDauermedikationD: string;
    bearbeitungszeitT: string;
    bearbeitungszeitD: string;
    voraussetzungT: string;
    voraussetzungD: string;
    abholungT: string;
    abholungD: string;
    imNotfallT: string;
    imNotfallD: string;
    ihreAnforderung: string;
    datenTitel: string;
    datenText1: string;
    datenText2: string;
    datenText3: string;
    notfallAsideTitel: string;
    notfallAsideText: string;
    keineBeratung: string;
  };

  rezept: {
    titel: string;
    einleitung: string;
    formHinweis: string;
    name: string;
    geburtsdatum: string;
    geburtsdatumHinweis: string;
    telefon: string;
    telefonHinweis: string;
    medikament: string;
    medikamentN: string;
    medikamentName: string;
    medikamentNameHinweis: string;
    wirkstaerke: string;
    wirkstaerkeHinweis: string;
    packungsgroesse: string;
    packungsgroesseHinweis: string;
    weiteresMedikament: string;
    maxHinweis: string;
    erhaltLegende: string;
    erhaltAbholung: string;
    erhaltERezept: string;
    erhaltERezeptHinweis: string;
    einwilligung: string;
    datenschutzerklaerung: string;
    naeheres: string;
    absenden: string;
    wirdGesendet: string;
    bestaetigungTitel: string;
    bestaetigungHinweis: string;
    bestaetigungFolge: string;
  };

  ueberweisung: {
    titel: string;
    einleitung: string;
    formHinweis: string;
    fachrichtung: string;
    fachrichtungHinweis: string;
    grund: string;
    grundHinweis: string;
    facharztpraxis: string;
    facharztpraxisHinweis: string;
    absenden: string;
    bestaetigungTitel: string;
    bestaetigungHinweis: string;
  };

  fehler: Record<FehlerCode, string>;

  kontakt: {
    titel: string;
    telefonischErreichen: string;
    adresseSatz: string;
    kartenbildSatz: string;
    kartenAlt: string;
    sprechzeitenFeiertage: string;
    emailTitel: string;
    emailWarnung: string;
    ausserhalbTitel: string;
    anfahrt: string;
    anfahrtEinleitung: string;
    attribution: string;
    attributionEigen: string;
    interaktivGoogle: string;
    karteLaden: string;
    widerrufen: string;
    routePlanen: string;
  };

  notfall: {
    titel: string;
    einleitung: string;
    lebensbedrohlich: string;
    lebensbedrohlichHinweis: string;
    lebensbedrohlichText: string;
    bereitschaft: string;
    bereitschaftHinweis: string;
    bereitschaftText: string;
    vergiftungen: string;
    waehrendTitel: string;
    waehrendText: string;
    formulareTitel: string;
    formulareText: string;
    keineBeratung: string;
  };

  service: {
    titel: string;
    einleitung: string;
    fuerAllesAndere: string;
    terminTitel: string;
    terminText: string;
    terminAktion: string;
    rezeptTitel: string;
    rezeptText: string;
    rezeptAktion: string;
    ueberweisungTitel: string;
    ueberweisungText: string;
    ueberweisungAktion: string;
    gutZuWissen: string;
    praxisbesuchTitel: string;
    praxisbesuchText: string;
    notfallTitel: string;
    notfallText: string;
    mehrErfahren: string;
  };

  leistungenSeite: {
    titel: string;
    einleitung: string;
    fakten: [string, string, string];
    bildunterschrift: string;
    diagnostikTitel: string;
    diagnostikText: string;
    diagnostikPunkte: string[];
    chronischEyebrow: string;
    chronischTitel: string;
    chronischText: string;
    chronischPunkte: string[];
    weitereTitel: string;
    weitereText: string;
    weiterePunkte: string[];
    frageTitel: string;
    frageText: string;
    serviceSatzVor: string;
    serviceSatzLink: string;
  };

  praxisSeite: {
    titel: string;
    einleitung: string;
    fakten: [string, string, string];
    bildunterschrift: string;
    gespraechTitel: string;
    absatz1: string;
    absatz2: string;
    absatz3: string;
    bandFakten: { t: string; d: string }[];
    aerzteTitel: string;
    rolleInhaber: string;
    rolleAngestellt: string;
    facharztTitel: string;
    dennisText: string;
    kommenTitel: string;
    kommenText: string;
    kontaktCta: string;
  };

  praxisbesuchSeite: {
    titel: string;
    einleitung: string;
    hinweise: { t: string; d: string }[];
    lueckenSatz: string;
    sprechzeitenText: string;
    kontaktSatzVor: string;
    kontaktSatzLink: string;
  };

  whatsapp: {
    ueberschrift: string;
    text: string;
    hinweis: string;
    oeffnen: string;
    lieberAnrufen: string;
    vorschauHinweis: string;
    nachrichtVorbelegt: string;
    bildunterschrift: string;
    bildAlt: string;
  };
};

export const de: Woerterbuch = {
  code: "de",
  eigenname: "Deutsch",
  flagge: "\u{1F1E9}\u{1F1EA}",
  geprueft: true,

  allgemein: {
    pruefHinweis:
      "Diese Übersetzung ist ein Entwurf und muss vor Veröffentlichung muttersprachlich geprüft werden.",
    teilweiseUebersetzt:
      "Impressum, Datenschutz und Barrierefreiheitserklärung bleiben auf Deutsch.",
    sprache: "Sprache",
    sprachwahlOeffnen: "Sprache wählen",
    freiwillig: "(freiwillig)",
    symbolbild: "(Symbolbild)",
  },

  nav: {
    leistungen: "Leistungen",
    praxisTeam: "Praxis & Team",
    patientenservice: "Patientenservice",
    kontaktAnfahrt: "Kontakt & Anfahrt",
    terminBuchen: "Termin buchen",
    menueOeffnen: "Menü öffnen",
    menueSchliessen: "Menü schließen",
    zumInhalt: "Zum Inhalt springen",
  },

  leiste: {
    notfall: "Lebensbedrohlicher Notfall",
    bereitschaft: "Ärztlicher Bereitschaftsdienst",
    termin: "Termin",
    anrufen: "Anrufen",
    rezept: "Rezept",
  },

  wochentageKurz: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],

  status: {
    wirdGeprueft: "Sprechzeiten werden geprüft",
    gebffnetBis: "Jetzt geöffnet",
    uhr: "Uhr",
    geschlossenWieder: "Geschlossen, wieder",
    wieder: "Wieder",
    heute: "heute",
    morgen: "morgen",
    ab: "ab",
    feiertagHeute: "Heute Feiertag.",
    urlaubHeute: "Die Praxis ist derzeit geschlossen.",
    zurzeitGeschlossen: "Zurzeit geschlossen",
  },

  start: {
    eyebrow: "Hausarztpraxis in Espelkamp",
    headline: "Hausärztliche Versorgung für die ganze Familie.",
    text: "Seit vielen Jahren begleiten wir Menschen in Espelkamp und Umgebung, vom akuten Infekt bis zur jahrelangen Betreuung bei Diabetes oder Herzerkrankung. Mit Zeit für das Gespräch und Diagnostik im eigenen Haus.",
    rezeptAnfordern: "Rezept anfordern",
    statusHinweis:
      "Termine vereinbaren wir telefonisch. Für die Sprechstunde bringen Sie bitte Ihre Versichertenkarte mit.",
    statusHinweisOnline:
      "Termine buchen Sie online oder telefonisch. Für die Sprechstunde bringen Sie bitte Ihre Versichertenkarte mit.",
    wegeTitel: "Termin, Rezept und Überweisung",
    wegeText:
      "Drei Anliegen, drei Wege. Damit es schnell geht, halten Sie bitte bereit, was bei jedem Weg steht.",
    telefonTitel: "Befund, Rückfrage oder etwas anderes?",
    telefonText:
      "Alles Weitere klären wir am Telefon. Während der Sprechzeiten ist die Anmeldung besetzt.",
    aerzteTitel: "Wer Sie behandelt",
    aerzteText:
      "Zwei Ärzte, eine Praxis. Wen Sie sehen, hängt vom Termin ab, der Verlauf ist beiden bekannt.",
    mehrPraxis: "Mehr über die Praxis und ihre Arbeitsweise auf der",
    praxisseite: "Praxisseite",
    leistungenTitel: "Was wir behandeln",
    leistungenText:
      "Hausärztliche Grundversorgung, dazu zwei Schwerpunkte: Manuelle Medizin und Suchtmedizin.",
    alleLeistungen: "Alle Leistungen im Detail",
    vertrauenTitel: "Woran Sie sich orientieren können",
    vertrauenText:
      "Keine Sterne, keine Bewertungsportale. Nur das, was sich an dieser Praxis überprüfen lässt.",
    haltungssatz:
      "Persönliche hausärztliche Begleitung in Espelkamp — für Menschen, die wissen möchten, wer sie behandelt.",
    fakten: [
      {
        t: "Ärztekammer Westfalen-Lippe",
        d: "Berufsbezeichnung und berufsrechtliche Regelungen im Impressum.",
      },
      {
        t: "Diagnostik im eigenen Haus",
        d: "EKG, Langzeitmessungen, Ultraschall und Lungenfunktion ohne zweiten Weg.",
      },
      {
        t: "Hausbesuche",
        d: "Für alle, die die Praxis nicht selbst erreichen können.",
      },
    ],
    impressumSatz:
      "Angaben zur Berufsbezeichnung und zu den berufsrechtlichen Regelungen finden Sie im",
    impressum: "Impressum",
    findenTitel: "Sprechzeiten und Anfahrt",
    findenText:
      "Wir bitten um telefonische Anmeldung. Bei akuten Beschwerden kommen Sie bitte zu Beginn der Sprechstunde.",
    frageTitel: "Noch eine Frage offen?",
    frageText:
      "Rufen Sie uns an. Während der Sprechzeiten ist die Anmeldung besetzt.",
    wartebereichAlt:
      "Blick in den Wartebereich der Praxis mit Sitzreihen, Zeitschriftenregal und Fenster zum Grünen",
  },

  zahlen: {
    ueber: "über ",
    patientenLabel: "Patientinnen und Patienten",
    patientenZusatz:
      "hausärztlich betreut, viele davon seit Jahren und mit der ganzen Familie.",
    jahreLabel: "Jahre ärztliche Erfahrung",
    jahreZusatz: "aus stationärer, chirurgischer und ambulanter Tätigkeit.",
    schwerpunkteLabel: "Medizinische Schwerpunkte",
    schwerpunkteZusatz:
      "Allgemeinmedizin, Manuelle Medizin und Suchtmedizin, in einer Praxis.",
  },

  google: {
    vonFuenf: "von 5",
    ausRezensionen: "aus {n} Google-Rezensionen",
    stand: "Stand",
    lesen: "Bewertungen auf Google lesen",
    neuerTab: "(öffnet Google in einem neuen Tab)",
  },

  sprechzeiten: {
    titel: "Sprechzeiten",
    geschlossen: "geschlossen",
    wochenendKurz: "Sa, So",
    hinweis:
      "Wir bitten um telefonische Anmeldung. Bei akuten Beschwerden kommen Sie bitte zu Beginn der Sprechstunde.",
    bisUhr: "bis",
    adresse: "Adresse",
    anfahrtKontakt: "Anfahrt und Kontakt",
    feiertageZu:
      "An gesetzlichen Feiertagen in Nordrhein-Westfalen ist die Praxis geschlossen.",
  },

  termin: {
    titel: "Termin vereinbaren",
    einleitungTelefon:
      "Termine vereinbaren wir telefonisch. So können wir direkt einschätzen, wie dringend Ihr Anliegen ist, und Ihnen die passende Zeit geben.",
    einleitungOnline:
      "Sie können online über {anbieter} buchen oder uns anrufen — beides führt zum selben Terminkalender.",
    onlineTitel: "Online buchen",
    onlineText:
      "Die Onlinebuchung läuft über {anbieter}, einen externen Anbieter für Arzttermine. Sie verlassen dabei diese Website; es gelten die Datenschutzhinweise des Anbieters. Nach der Buchung kommen Sie hierher zurück.",
    onlineButton: "Termin online buchen",
    onlineFallback:
      "Öffnet {anbieter}. Wenn die Onlinebuchung nicht erreichbar ist, rufen Sie uns bitte an.",
    oderTelefonisch: "Oder telefonisch",
    soErreichen: "So erreichen Sie uns",
    text: "Rufen Sie uns während der Sprechzeiten an. Halten Sie bitte Ihre Versichertenkarte bereit — bei einem ersten Besuch im Quartal wird sie eingelesen.",
    hinweisAkut:
      "Bei akuten Beschwerden kommen Sie bitte zu Beginn der Sprechstunde. Außerhalb der Sprechzeiten hilft der ärztliche Bereitschaftsdienst unter",
  },

  anfrage: {
    bevorSieAusfuellen: "Bevor Sie ausfüllen",
    nurDauermedikationT: "Nur Dauermedikation",
    nurDauermedikationD:
      "Dieses Formular ist für Folgeverordnungen. Über neue Medikamente entscheidet die Ärztin oder der Arzt im Gespräch.",
    bearbeitungszeitT: "Bearbeitungszeit",
    bearbeitungszeitD:
      "Bitte planen Sie zwei Werktage ein. An Wochenenden und Feiertagen bearbeiten wir keine Anfragen.",
    voraussetzungT: "Voraussetzung",
    voraussetzungD:
      "Sie sind Patientin oder Patient dieser Praxis und Ihre Versichertenkarte wurde im laufenden Quartal eingelesen.",
    abholungT: "Abholung",
    abholungD:
      "Die Überweisung liegt danach an der Anmeldung für Sie bereit. Über andere Wege informieren wir telefonisch.",
    imNotfallT: "Im Notfall",
    imNotfallD:
      "Wählen Sie 112. Warten Sie dann nicht auf eine Antwort über dieses Formular.",
    ihreAnforderung: "Ihre Anforderung",
    datenTitel: "Was mit Ihren Angaben geschieht",
    datenText1:
      "Ihre Angaben werden über eine verschlüsselte Verbindung direkt an das Postfach der Praxis übermittelt. Auf dieser Website werden sie nicht gespeichert: Es gibt keine Datenbank und keine Kopie.",
    datenText2:
      "Rechtsgrundlage ist Ihre ausdrückliche Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO. Sie können sie jederzeit widerrufen, indem Sie uns anrufen.",
    datenText3:
      "Bitte schicken Sie uns Gesundheitsangaben nicht aus Ihrem eigenen E-Mail-Programm. Dieser Weg ist unverschlüsselt. Das Formular hier ist es nicht.",
    notfallAsideTitel: "Im Notfall nicht warten",
    notfallAsideText:
      "Eine Anfrage über dieses Formular wird zu den Sprechzeiten bearbeitet, nicht sofort. Wenn es dringend ist, nutzen Sie bitte diese Wege.",
    keineBeratung:
      "Diese Website gibt keine medizinische Beratung. Die Hinweise ersetzen kein ärztliches Gespräch.",
  },

  rezept: {
    titel: "Folgerezept anfordern",
    einleitung:
      "Nur für Medikamente, die Sie bereits regelmäßig einnehmen. Neue Medikamente oder Änderungen der Dosierung brauchen eine ärztliche Rücksprache — dafür rufen Sie uns bitte an.",
    formHinweis:
      "Die Angaben stehen auf der Medikamentenpackung. Sie können bis zu drei Medikamente in einer Anfrage anfordern.",
    name: "Vor- und Nachname",
    geburtsdatum: "Geburtsdatum",
    geburtsdatumHinweis: "Zum Beispiel 03.04.1951",
    telefon: "Telefonnummer für Rückfragen",
    telefonHinweis: "Beschleunigt die Bearbeitung, falls etwas unklar ist.",
    medikament: "Medikament",
    medikamentN: "Medikament {n}",
    medikamentName: "Name des Medikaments",
    medikamentNameHinweis: "So, wie er auf der Packung steht.",
    wirkstaerke: "Wirkstärke oder Dosierung",
    wirkstaerkeHinweis: "Zum Beispiel 50 mg oder 1-0-1.",
    packungsgroesse: "Packungsgröße",
    packungsgroesseHinweis: "Steht auf der Packung, zum Beispiel N2 oder 100 Stück.",
    weiteresMedikament: "Weiteres Medikament hinzufügen",
    maxHinweis:
      "Bis zu drei Medikamente je Anfrage. Brauchen Sie mehr, rufen Sie uns bitte an — das geht schneller.",
    erhaltLegende: "Wie möchten Sie das Rezept erhalten?",
    erhaltAbholung: "Abholung in der Praxis",
    erhaltERezept: "E-Rezept",
    erhaltERezeptHinweis:
      "Wenn es medizinisch und organisatorisch möglich ist. Ihre Versichertenkarte muss im laufenden Quartal eingelesen sein.",
    einwilligung:
      "Ich bin damit einverstanden, dass die Praxis meine Angaben zur Bearbeitung dieser Anfrage verarbeitet. Mir ist bekannt, dass ich diese Einwilligung jederzeit widerrufen kann.",
    datenschutzerklaerung: "Datenschutzerklärung",
    naeheres: "Näheres in der",
    absenden: "Rezept anfordern",
    wirdGesendet: "Wird gesendet …",
    bestaetigungTitel: "Ihre Rezeptanforderung ist eingegangen",
    bestaetigungHinweis:
      "Ihre Anfrage wird von der Praxis geprüft. Dies ist noch keine Bestätigung der Verordnung.",
    bestaetigungFolge:
      "Wir melden uns, sobald die Anfrage bearbeitet ist. Bitte planen Sie zwei Werktage ein. Ist es dringend, rufen Sie uns bitte an.",
  },

  ueberweisung: {
    titel: "Überweisung anfordern",
    einleitung:
      "Für den Besuch bei einer Fachärztin oder einem Facharzt. Fachrichtung und Grund genügen — den Rest klären wir, falls nötig, telefonisch.",
    formHinweis:
      "Beschreiben Sie kurz, worum es geht — eine Diagnose müssen Sie hier nicht nennen.",
    fachrichtung: "Fachrichtung",
    fachrichtungHinweis: "Zum Beispiel Orthopädie, Augenheilkunde oder Kardiologie.",
    grund: "Grund für die Überweisung",
    grundHinweis:
      "Beschreiben Sie kurz Ihre Beschwerden oder nennen Sie die geplante Untersuchung.",
    facharztpraxis: "Behandelnde Facharztpraxis",
    facharztpraxisHinweis:
      "Falls Sie schon wissen, wohin Sie möchten — Name oder Ort der Praxis genügt.",
    absenden: "Überweisung anfordern",
    bestaetigungTitel: "Ihre Überweisungsanforderung ist eingegangen",
    bestaetigungHinweis:
      "Die Praxis prüft Ihre Anfrage. Medizinisch notwendige Rückfragen können telefonisch erfolgen.",
  },

  fehler: {
    "name-fehlt": "Bitte geben Sie Ihren Vor- und Nachnamen an.",
    "name-kurz": "Bitte geben Sie Vor- und Nachnamen an.",
    "zu-lang": "Bitte kürzen Sie die Eingabe.",
    "geburtsdatum-fehlt": "Bitte geben Sie Ihr Geburtsdatum an, zum Beispiel 03.04.1951.",
    "geburtsdatum-format":
      "Bitte schreiben Sie das Datum als Tag.Monat.Jahr, zum Beispiel 03.04.1951.",
    "geburtsdatum-unmoeglich": "Dieses Datum gibt es nicht. Bitte prüfen Sie Ihre Eingabe.",
    "geburtsdatum-zukunft": "Das Geburtsdatum kann nicht in der Zukunft liegen.",
    "geburtsdatum-jahr": "Bitte prüfen Sie das Jahr.",
    "telefon-ungueltig": "Bitte geben Sie eine Telefonnummer ohne Buchstaben an.",
    "einwilligung-fehlt": "Ohne Ihre Einwilligung dürfen wir die Anfrage nicht bearbeiten.",
    "medikament-fehlt": "Bitte nennen Sie das Medikament, so wie es auf der Packung steht.",
    "medikament-genauer": "Bitte machen Sie eine genauere Angabe.",
    "wirkstaerke-fehlt":
      "Bitte geben Sie Wirkstärke oder Dosierung an, zum Beispiel 50 mg, 1-0-1.",
    "medikament-name-fehlt": "Bitte nennen Sie auch hier den Namen des Medikaments.",
    "fachrichtung-fehlt": "Bitte nennen Sie die Fachrichtung, zum Beispiel Orthopädie.",
    "grund-fehlt": "Bitte beschreiben Sie kurz den Grund.",
    "grund-genauer": "Bitte machen Sie eine genauere Angabe.",
    pruefen: "Bitte prüfen Sie die markierten Angaben.",
    "versand-nicht-eingerichtet":
      "Der Versand ist derzeit nicht eingerichtet. Bitte rufen Sie uns an, damit Ihre Anfrage nicht liegen bleibt.",
    "versand-fehlgeschlagen":
      "Die Anfrage konnte nicht übermittelt werden. Bitte rufen Sie uns an, damit Ihre Anfrage nicht liegen bleibt.",
  },

  kontakt: {
    titel: "Kontakt und Anfahrt",
    telefonischErreichen:
      "Termine, Befunde und alle Fragen, die kein Formular abbildet.",
    adresseSatz: "Adresse",
    kartenbildSatz:
      "Kartenbild vom eigenen Server — die interaktive Karte finden Sie weiter unten.",
    kartenAlt:
      "Kartenausschnitt von Espelkamp mit Markierung der Praxis in der Ostlandstraße 17",
    sprechzeitenFeiertage:
      "An Feiertagen bleibt die Praxis geschlossen. Urlaubszeiten und die jeweilige Vertretung geben wir in der Praxis bekannt.",
    emailTitel: "E-Mail",
    emailWarnung:
      "Bitte senden Sie uns keine Befunde und keine Angaben zu Ihrer Gesundheit per E-Mail. Dieser Weg ist nicht verschlüsselt. Für medizinische Anliegen rufen Sie bitte an.",
    ausserhalbTitel: "Außerhalb der Sprechzeiten",
    anfahrt: "Anfahrt",
    anfahrtEinleitung:
      "Die Praxis liegt in der Ostlandstraße, wenige Gehminuten vom Zentrum Espelkamps.",
    attribution: "Kartendaten:",
    attributionEigen: ", als Bild von unserem eigenen Server geladen",
    interaktivGoogle: "Interaktive Karte: Google Maps",
    karteLaden: "Google-Maps-Karte laden",
    widerrufen: "Einwilligung widerrufen",
    routePlanen: "Route planen",
  },

  notfall: {
    titel: "Im Notfall",
    einleitung:
      "Zwei Nummern reichen: 112, wenn Lebensgefahr besteht. 116 117, wenn es nicht bis zur nächsten Sprechstunde warten kann.",
    lebensbedrohlich: "Lebensbedrohlicher Notfall",
    lebensbedrohlichHinweis: "Rettungsdienst und Notarzt, rund um die Uhr",
    lebensbedrohlichText:
      "Zum Beispiel bei Anzeichen von Herzinfarkt oder Schlaganfall, schwerer Atemnot, starken Blutungen oder Bewusstlosigkeit. Zögern Sie nicht — der Rettungsdienst ist genau dafür da.",
    bereitschaft: "Ärztlicher Bereitschaftsdienst",
    bereitschaftHinweis:
      "Außerhalb der Sprechzeiten, wenn es nicht bis zum nächsten Werktag warten kann",
    bereitschaftText:
      "Abends, nachts, am Wochenende und an Feiertagen. Die 116 117 vermittelt auch die Notfallpraxen in der Umgebung. Der Anruf ist kostenfrei.",
    vergiftungen:
      "Vergiftungen: Die Giftnotrufzentrale für Nordrhein-Westfalen erreichen Sie über die 112, in weniger dringenden Fällen hilft die 116 117 weiter.",
    waehrendTitel: "Während der Sprechzeiten",
    waehrendText:
      "Bei akuten Beschwerden, die kein Notfall sind, rufen Sie uns an oder kommen Sie zu Beginn der Sprechstunde — dann können wir Sie noch am selben Tag einordnen.",
    formulareTitel: "Bitte nicht über die Formulare",
    formulareText:
      "Rezept- und Überweisungsanfragen über diese Website werden zu den Sprechzeiten bearbeitet, nicht sofort. Für alles Dringende gilt: anrufen — 112, 116 117 oder die Praxis.",
    keineBeratung:
      "Diese Seite gibt keine medizinische Beratung und ersetzt kein ärztliches Gespräch.",
  },

  service: {
    titel: "Patientenservice",
    einleitung: "Drei Anliegen, drei klare Wege. Für alles andere:",
    fuerAllesAndere:
      "Befunde, Rückfragen und alles Weitere klären wir am Telefon. Während der Sprechzeiten ist die Anmeldung besetzt.",
    terminTitel: "Termin",
    terminText:
      "Termine vereinbaren wir telefonisch. Halten Sie Ihre Versichertenkarte bereit.",
    terminAktion: "Zum Terminweg",
    rezeptTitel: "Folgerezept",
    rezeptText:
      "Für Medikamente, die Sie schon regelmäßig einnehmen. Halten Sie Name, Wirkstärke und Packungsgröße bereit.",
    rezeptAktion: "Rezept anfordern",
    ueberweisungTitel: "Überweisung",
    ueberweisungText:
      "Für den Besuch bei einer Fachärztin oder einem Facharzt. Fachrichtung und Grund genügen.",
    ueberweisungAktion: "Überweisung anfordern",
    gutZuWissen: "Gut zu wissen",
    praxisbesuchTitel: "Hinweise für den Praxisbesuch",
    praxisbesuchText:
      "Was Sie mitbringen, wann Sie am besten kommen und wie die Anmeldung abläuft.",
    notfallTitel: "Notfallinformationen",
    notfallText:
      "Wann Sie 112 wählen, wann 116 117 — und was außerhalb der Sprechzeiten gilt.",
    mehrErfahren: "Mehr erfahren",
  },

  leistungenSeite: {
    titel: "Leistungen",
    einleitung:
      "Hausärztliche Grundversorgung mit eigener Diagnostik, dazu die beiden Schwerpunkte Manuelle Medizin und Suchtmedizin.",
    fakten: ["Diagnostik im Haus", "DMP-Programme", "Hausbesuche"],
    bildunterschrift:
      "EKG, Blutdruck, Abhören — die Grundlagen finden hier im Haus statt. (Symbolbild)",
    diagnostikTitel: "Diagnostik",
    diagnostikText:
      "Untersuchungen, die wir in der Praxis selbst durchführen. Sie brauchen dafür keinen zweiten Termin in einer anderen Stadt.",
    diagnostikPunkte: [
      "EKG und Langzeit-EKG",
      "Langzeit-Blutdruckmessung",
      "Ultraschalluntersuchung",
      "Lungenfunktionsprüfung",
      "Labordiagnostik und Blutentnahme",
      "HbA1c-Bestimmung",
    ],
    chronischEyebrow: "Langfristige Begleitung",
    chronischTitel: "Chronische Erkrankungen",
    chronischText:
      "Strukturierte Behandlungsprogramme, kurz DMP. Feste Kontrolltermine, abgestimmte Medikation und ein Ansprechpartner, der Ihren Verlauf kennt.",
    chronischPunkte: ["Diabetes mellitus", "Asthma bronchiale", "Koronare Herzkrankheit"],
    weitereTitel: "Weitere Leistungen",
    weitereText:
      "Was darüber hinaus zur hausärztlichen Versorgung gehört, einschließlich der beiden Schwerpunkte der Praxis.",
    weiterePunkte: [
      "Hausbesuche",
      "Manuelle Medizin",
      "Suchtmedizinische Betreuung",
      "Infusionstherapien",
      "Individuelle Gesundheitsleistungen",
    ],
    frageTitel: "Ihre Frage ist nicht dabei?",
    frageText:
      "Diese Liste nennt die häufigsten Leistungen, nicht alle. Ob wir Ihnen weiterhelfen können, klären wir am besten im Gespräch.",
    serviceSatzVor:
      "Rezept oder Überweisung brauchen Sie nicht telefonisch anzufragen. Beides geht über den",
    serviceSatzLink: "Patientenservice",
  },

  praxisSeite: {
    titel: "Die Praxis",
    einleitung:
      "Eine Hausarztpraxis mitten in Espelkamp, in der die meisten Untersuchungen im Haus stattfinden.",
    fakten: ["Zwei Ärzte", "Drei Schwerpunkte", "Diagnostik im Haus"],
    bildunterschrift: "Der Wartebereich der Praxis an der Ostlandstraße.",
    gespraechTitel: "Zeit für das Gespräch",
    absatz1:
      "Eine gute hausärztliche Betreuung beginnt damit, dass jemand zuhört und den Verlauf kennt. Viele unserer Patientinnen und Patienten kommen seit Jahren zu uns, manche mit der ganzen Familie.",
    absatz2:
      "Wir führen die wichtigsten Untersuchungen selbst durch: EKG und Langzeitmessungen, Ultraschall, Lungenfunktion und Labor. Das spart Ihnen Wege und verkürzt die Zeit bis zum Befund.",
    absatz3:
      "Für Menschen, die die Praxis nicht selbst erreichen können, machen wir Hausbesuche. Sprechen Sie uns bitte telefonisch darauf an.",
    bandFakten: [
      { t: "Drei Schwerpunkte", d: "Allgemeinmedizin, Manuelle Medizin und Suchtmedizin." },
      {
        t: "Diagnostik im Haus",
        d: "EKG, Langzeitmessungen, Ultraschall, Lungenfunktion, Labor.",
      },
      { t: "Hausbesuche", d: "Für alle, die die Praxis nicht selbst erreichen können." },
    ],
    aerzteTitel: "Ärzte",
    rolleInhaber: "Praxisinhaber",
    rolleAngestellt: "Angestellter Arzt",
    facharztTitel: "Facharzt für Allgemeinmedizin, Manuelle Medizin und Suchtmedizin",
    dennisText:
      "Angestellter Arzt der Praxis. Angaben zu Fachrichtung und Werdegang ergänzen wir, sobald sie vorliegen.",
    kommenTitel: "Sie möchten zu uns kommen?",
    kommenText: "Adresse, Sprechzeiten und Anfahrt finden Sie auf der Kontaktseite.",
    kontaktCta: "Kontakt und Anfahrt",
  },

  praxisbesuchSeite: {
    titel: "Hinweise für den Praxisbesuch",
    einleitung:
      "Damit Ihr Besuch ohne Umwege abläuft: was Sie mitbringen, wann Sie am besten kommen und wie es an der Anmeldung weitergeht.",
    hinweise: [
      {
        t: "Versichertenkarte mitbringen",
        d: "Beim ersten Besuch im Quartal wird Ihre elektronische Gesundheitskarte eingelesen. Ohne Karte können wir Leistungen nicht abrechnen — bringen Sie sie bitte zu jedem Besuch mit.",
      },
      {
        t: "Telefonisch anmelden",
        d: "Wir bitten um telefonische Anmeldung vor dem Besuch. So planen wir Zeit für Ihr Anliegen ein und Sie warten kürzer.",
      },
      {
        t: "Akute Beschwerden: früh kommen",
        d: "Bei akuten Beschwerden kommen Sie bitte zu Beginn der Sprechstunde. Dann können wir Sie noch am selben Tag einordnen.",
      },
      {
        t: "Medikamente und Unterlagen",
        d: "Wenn Sie zu einem Gespräch über Ihre Medikamente kommen, hilft eine Liste dessen, was Sie einnehmen — oder bringen Sie die Packungen mit. Vorhandene Befunde anderer Ärzte gehören ebenfalls in die Tasche.",
      },
      {
        t: "Rezepte und Überweisungen vorab",
        d: "Folgerezepte und Überweisungen können Sie online anfordern und nach zwei Werktagen abholen — dafür müssen Sie nicht in die Sprechstunde.",
      },
      {
        t: "Wenn Sie nicht kommen können",
        d: "Sagen Sie vereinbarte Termine bitte telefonisch ab. Der Platz kann dann an jemanden gehen, der akut Hilfe braucht. Für Menschen, die die Praxis nicht erreichen können, gibt es Hausbesuche.",
      },
    ],
    lueckenSatz:
      "Angaben zu Parkplätzen, zur Busanbindung und zur Barrierefreiheit des Gebäudes ergänzen wir, sobald sie von der Praxis bestätigt sind. Wenn Sie dazu vorab eine Frage haben, rufen Sie uns an:",
    sprechzeitenText:
      "An gesetzlichen Feiertagen in Nordrhein-Westfalen ist die Praxis geschlossen.",
    kontaktSatzVor: "Die Adresse und den Anfahrtsweg finden Sie unter",
    kontaktSatzLink: "Kontakt & Anfahrt",
  },

  whatsapp: {
    ueberschrift: "Einfach an die Praxis schreiben",
    text: "Für Terminwünsche, Rückrufbitten und organisatorische Fragen können Sie uns künftig auch über WhatsApp erreichen.",
    hinweis:
      "WhatsApp ist ausschließlich für organisatorische Anfragen vorgesehen. Bitte senden Sie keine Befunde, Diagnosen, Gesundheitsdaten, Medikamentenfotos oder Notfallnachrichten. In Notfällen: 112. Ärztlicher Bereitschaftsdienst: 116 117.",
    oeffnen: "WhatsApp öffnen",
    lieberAnrufen: "Lieber anrufen",
    vorschauHinweis:
      "Vorschau — die WhatsApp-Nummer der Praxis wird derzeit eingerichtet. Bis dahin erreichen Sie uns telefonisch.",
    nachrichtVorbelegt: "Guten Tag, ich bitte um einen Rückruf.",
    bildunterschrift:
      "Kurze Nachricht, klarer Rahmen: WhatsApp nur für Organisatorisches. (Symbolbild)",
    bildAlt:
      "Smartphone mit angedeuteten Chat-Sprechblasen auf einem hellen Empfangstresen, dahinter eine Pflanze vor grüner Wand",
  },
};
