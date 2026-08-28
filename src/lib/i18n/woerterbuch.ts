/**
 * Übersetzungsstruktur der Website.
 *
 * Deutsch ist die maßgebliche Ausgangsversion — die deutschen Texte hier
 * sind wortgleich mit den Seiteninhalten. Türkisch, Russisch und Albanisch
 * sind ENTWÜRFE: `geprueft: false` heißt, die Übersetzung muss vor
 * Veröffentlichung muttersprachlich geprüft werden. Der Hinweis dazu wird
 * Besucherinnen sichtbar angezeigt, solange die Prüfung aussteht.
 *
 * Es wird nichts erfunden: Jeder Eintrag ist die Übersetzung eines
 * bestehenden deutschen Textes. Medizinische Aussagen kommen nicht dazu.
 */

export type Sprachcode = "de" | "tr" | "ru" | "sq";

export type Woerterbuch = {
  code: Sprachcode;
  /** Name der Sprache in der Sprache selbst — so steht er in der Auswahl. */
  eigenname: string;
  /** false = muttersprachliche Prüfung steht aus; ein sichtbarer Hinweis
   *  erscheint, solange die Sprache aktiv ist. */
  geprueft: boolean;

  allgemein: {
    pruefHinweis: string;
    teilweiseUebersetzt: string;
    sprache: string;
    sprachwahlOeffnen: string;
  };

  nav: {
    leistungen: string;
    praxisTeam: string;
    patientenservice: string;
    kontaktAnfahrt: string;
    terminBuchen: string;
    menueOeffnen: string;
    menueSchliessen: string;
  };

  leiste: {
    notfall: string;
    bereitschaft: string;
    termin: string;
    anrufen: string;
    rezept: string;
  };

  start: {
    eyebrow: string;
    headline: string;
    text: string;
    rezeptAnfordern: string;
    terminBuchen: string;
    statusHinweis: string;
  };

  sprechzeiten: {
    titel: string;
    geschlossen: string;
    wochenendKurz: string;
    hinweis: string;
  };

  termin: {
    titel: string;
    einleitungTelefon: string;
    soErreichen: string;
    text: string;
    hinweisAkut: string;
  };

  rezept: {
    titel: string;
    einleitung: string;
    nurDauermedikation: string;
    name: string;
    geburtsdatum: string;
    telefon: string;
    medikamentName: string;
    wirkstaerke: string;
    packungsgroesse: string;
    weiteresMedikament: string;
    einwilligung: string;
    absenden: string;
    bestaetigungTitel: string;
    bestaetigungHinweis: string;
    fehlerAllgemein: string;
  };

  ueberweisung: {
    titel: string;
    einleitung: string;
    fachrichtung: string;
    grund: string;
    facharztpraxis: string;
    absenden: string;
    bestaetigungTitel: string;
    bestaetigungHinweis: string;
  };

  kontakt: {
    titel: string;
    telefonischErreichen: string;
    adresse: string;
    routePlanen: string;
    karteLaden: string;
    anfahrt: string;
  };

  notfall: {
    titel: string;
    einleitung: string;
    lebensbedrohlich: string;
    lebensbedrohlichHinweis: string;
    bereitschaft: string;
    bereitschaftHinweis: string;
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

  whatsapp: {
    ueberschrift: string;
    text: string;
    hinweis: string;
    oeffnen: string;
    lieberAnrufen: string;
    vorschauHinweis: string;
    nachrichtVorbelegt: string;
    bildunterschrift: string;
  };
};

export const de: Woerterbuch = {
  code: "de",
  eigenname: "Deutsch",
  geprueft: true,

  allgemein: {
    pruefHinweis:
      "Diese Übersetzung ist ein Entwurf und muss vor Veröffentlichung muttersprachlich geprüft werden.",
    teilweiseUebersetzt:
      "Noch nicht übersetzte Inhalte erscheinen vorerst auf Deutsch.",
    sprache: "Sprache",
    sprachwahlOeffnen: "Sprache wählen",
  },

  nav: {
    leistungen: "Leistungen",
    praxisTeam: "Praxis & Team",
    patientenservice: "Patientenservice",
    kontaktAnfahrt: "Kontakt & Anfahrt",
    terminBuchen: "Termin buchen",
    menueOeffnen: "Menü öffnen",
    menueSchliessen: "Menü schließen",
  },

  leiste: {
    notfall: "Lebensbedrohlicher Notfall",
    bereitschaft: "Ärztlicher Bereitschaftsdienst",
    termin: "Termin",
    anrufen: "Anrufen",
    rezept: "Rezept",
  },

  start: {
    eyebrow: "Hausarztpraxis in Espelkamp",
    headline: "Hausärztliche Versorgung für die ganze Familie.",
    text: "Seit vielen Jahren begleiten wir Menschen in Espelkamp und Umgebung, vom akuten Infekt bis zur jahrelangen Betreuung bei Diabetes oder Herzerkrankung. Mit Zeit für das Gespräch und Diagnostik im eigenen Haus.",
    rezeptAnfordern: "Rezept anfordern",
    terminBuchen: "Termin buchen",
    statusHinweis:
      "Termine vereinbaren wir telefonisch. Für die Sprechstunde bringen Sie bitte Ihre Versichertenkarte mit.",
  },

  sprechzeiten: {
    titel: "Sprechzeiten",
    geschlossen: "geschlossen",
    wochenendKurz: "Sa, So",
    hinweis:
      "Wir bitten um telefonische Anmeldung. Bei akuten Beschwerden kommen Sie bitte zu Beginn der Sprechstunde.",
  },

  termin: {
    titel: "Termin vereinbaren",
    einleitungTelefon:
      "Termine vereinbaren wir telefonisch. So können wir direkt einschätzen, wie dringend Ihr Anliegen ist, und Ihnen die passende Zeit geben.",
    soErreichen: "So erreichen Sie uns",
    text: "Rufen Sie uns während der Sprechzeiten an. Halten Sie bitte Ihre Versichertenkarte bereit — bei einem ersten Besuch im Quartal wird sie eingelesen.",
    hinweisAkut:
      "Bei akuten Beschwerden kommen Sie bitte zu Beginn der Sprechstunde. Außerhalb der Sprechzeiten hilft der ärztliche Bereitschaftsdienst unter 116 117.",
  },

  rezept: {
    titel: "Folgerezept anfordern",
    einleitung:
      "Nur für Medikamente, die Sie bereits regelmäßig einnehmen. Neue Medikamente oder Änderungen der Dosierung brauchen eine ärztliche Rücksprache — dafür rufen Sie uns bitte an.",
    nurDauermedikation: "Nur Dauermedikation",
    name: "Vor- und Nachname",
    geburtsdatum: "Geburtsdatum",
    telefon: "Telefonnummer für Rückfragen",
    medikamentName: "Name des Medikaments",
    wirkstaerke: "Wirkstärke oder Dosierung",
    packungsgroesse: "Packungsgröße",
    weiteresMedikament: "Weiteres Medikament hinzufügen",
    einwilligung:
      "Ich bin damit einverstanden, dass die Praxis meine Angaben zur Bearbeitung dieser Anfrage verarbeitet.",
    absenden: "Rezept anfordern",
    bestaetigungTitel: "Ihre Rezeptanforderung ist eingegangen",
    bestaetigungHinweis:
      "Ihre Anfrage wird von der Praxis geprüft. Dies ist noch keine Bestätigung der Verordnung.",
    fehlerAllgemein: "Bitte prüfen Sie die markierten Felder.",
  },

  ueberweisung: {
    titel: "Überweisung anfordern",
    einleitung:
      "Für den Besuch bei einer Fachärztin oder einem Facharzt. Fachrichtung und Grund genügen — den Rest klären wir, falls nötig, telefonisch.",
    fachrichtung: "Fachrichtung",
    grund: "Grund für die Überweisung",
    facharztpraxis: "Behandelnde Facharztpraxis",
    absenden: "Überweisung anfordern",
    bestaetigungTitel: "Ihre Überweisungsanforderung ist eingegangen",
    bestaetigungHinweis:
      "Die Praxis prüft Ihre Anfrage. Medizinisch notwendige Rückfragen können telefonisch erfolgen.",
  },

  kontakt: {
    titel: "Kontakt und Anfahrt",
    telefonischErreichen:
      "Termine, Befunde und alle Fragen, die kein Formular abbildet.",
    adresse: "Adresse",
    routePlanen: "Route planen",
    karteLaden: "Google-Maps-Karte laden",
    anfahrt: "Anfahrt",
  },

  notfall: {
    titel: "Im Notfall",
    einleitung:
      "Zwei Nummern reichen: 112, wenn Lebensgefahr besteht. 116 117, wenn es nicht bis zur nächsten Sprechstunde warten kann.",
    lebensbedrohlich: "Lebensbedrohlicher Notfall",
    lebensbedrohlichHinweis: "Rettungsdienst und Notarzt, rund um die Uhr",
    bereitschaft: "Ärztlicher Bereitschaftsdienst",
    bereitschaftHinweis:
      "Außerhalb der Sprechzeiten, wenn es nicht bis zum nächsten Werktag warten kann",
    keineBeratung:
      "Diese Website gibt keine medizinische Beratung. Die Hinweise ersetzen kein ärztliches Gespräch.",
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
    bildunterschrift: "Kurze Nachricht, klarer Rahmen: WhatsApp nur für Organisatorisches. (Symbolbild)",
  },
};
