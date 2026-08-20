# PRODUCT.md — Praxis Dr. med. Adel Aziz

Produktwahrheit. Was hier steht, ist an der Bestandsseite oder am Impressum
belegt. Alles Unbelegte steht unter „Offen".

## Wer

Hausarztpraxis in Espelkamp, Ostwestfalen-Lippe. Inhaber ist Dr. med. Adel
Aziz, Facharzt für Allgemeinmedizin, Manuelle Medizin und Suchtmedizin. Dazu
kommt Dennis Aziz als angestellter Arzt.

Die Patientenschaft ist überwiegend älter und wohnt im Ort. Espelkamp hat
rund 26.000 Einwohner. Viele Wege laufen über das Telefon, nicht über das Web.

## Was Patienten hier erledigen wollen

In dieser Reihenfolge, nach Häufigkeit geschätzt:

1. **Ist gerade offen, und wann sonst?** Die häufigste Frage an jede
   Praxisseite. Muss ohne Klick beantwortet sein.
2. **Wie erreiche ich die Praxis?** Telefonnummer, groß, tippbar.
3. **Folgerezept besorgen**, ohne dafür in die Praxis zu fahren.
4. **Überweisung besorgen.**
5. **Wo ist die Praxis, wie komme ich hin?**
6. **Wer behandelt mich, und was wird hier gemacht?**

Punkt 1 bis 3 sind die Seite. Der Rest ist Kontext.

## Belegte Inhalte

**Sprechzeiten** (Bestandsseite, wörtlich): Montag, Dienstag, Donnerstag
08:00–12:00 und 15:00–18:00 Uhr. Mittwoch und Freitag 08:00–12:00 Uhr.

**Kontakt** (Impressum): Ostlandstraße 17, 32339 Espelkamp.
Telefon 05772 5511. E-Mail `arztpraxis.dr.aziz@gmail.com` (Startseite).

**Berufsbezeichnung** (Impressum): Facharzt für Allgemeinmedizin, Manuelle
Medizin und Suchtmedizin. Kammer: Ärztekammer Westfalen-Lippe.

**Leistungen** (Bestandsseite):

- Diagnostik: EKG und Langzeit-EKG, Langzeit-Blutdruckmessung, Ultraschall,
  Lungenfunktionsprüfung, Labordiagnostik, HbA1c-Bestimmung
- DMP: Diabetes mellitus, Asthma bronchiale, koronare Herzkrankheit
- Weitere: Hausbesuche, Infusionstherapien, individuelle Gesundheitsleistungen,
  Suchtmedizin, Manuelle Medizin

**Formulare** (Bestandsseite): Rezeptanforderung und Überweisungsanforderung,
beide mit Hinweis auf 24 Stunden Bearbeitungszeit.

## Bewusst nicht übernommen

- **„3,7k+ zufriedene Patienten."** Werbung mit Patientenzahlen ist nach
  § 11 HWG angreifbar und die Zahl ist nicht prüfbar.
- **„43+ Jahre Erfahrung, stationär, chirurgisch sowohl ambulant."**
  Grammatisch defekt, inhaltlich unbelegt.
- **Drei Stockfotos**, zwei davon erkennbar KI-generiert.
- **Das Hero-Bild mit eingebranntem Text.** Text im Bild ist nicht vorlesbar,
  nicht übersetzbar und wird auf kleinen Displays unlesbar.

## Formulare: entschieden

Rezept- und Überweisungsanfragen enthalten Gesundheitsdaten, also besondere
Kategorien nach Art. 9 DSGVO. **Entschieden (August 2026):** Die Website
stellt eigene Formulare unter /patientenservice bereit. Die Angaben gehen
per Server Action und TLS-erzwungenem SMTP an ein **Praxispostfach auf
eigener Domain** (mit AV-Vertrag); auf der Website wird nichts gespeichert.
Ohne konfiguriertes Postfach senden die Formulare nichts und verweisen
sichtbar auf den Telefonweg. Das Gmail-Postfach der Bestandsseite bleibt
reine Kontaktadresse und ist nie Formularempfänger.

## Patientenservice und Terminweg

Die Navigation führt einen eigenen Bereich /patientenservice mit fünf
Unterseiten: Termin, Folgerezept, Überweisung, Hinweise für den
Praxisbesuch, Notfallinformationen. Die Terminbuchung ist ein Adapter über
Umgebungsvariablen (src/lib/termin.ts): Erst wenn die Praxis einen Vertrag
mit einem Anbieter hat, erscheint „Termin buchen" — bis dahin gilt der
Telefonweg. Der Google-Bewertungswert im Vertrauensbereich stammt aus
`googleBewertung` in praxis.ts und muss vor Livegang direkt am
Google-Unternehmensprofil verifiziert werden.

## Offen, muss die Praxis klären

- Vita und Fachrichtung von Dennis Aziz. Ein Porträt liegt vor.
- Nutzungsrechte an den vier echten Fotos der Bestandsseite.
- Widersprüchliche Sprechzeiten zwischen eigener Seite und Verzeichnissen.
- Bearbeitungszeit für Rezepte: Die Bestandsseite verspricht 24 Stunden.
- Urlaubs- und Vertretungszeiten. Fehlen auf der Bestandsseite ganz.
- Barrierefreiheit des Gebäudes, Parkplätze, Anfahrt mit dem Bus.
- Berufshaftpflichtversicherung für das Impressum.
