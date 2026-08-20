# Praxis Dr. med. Adel Aziz — Relaunch

Neubau der Website unter praxis-dr-aziz.de. Ersetzt einen IONOS-Baukasten
(WordPress mit `go-x`-Blöcken).

- **Produktwahrheit:** [PRODUCT.md](./PRODUCT.md)
- **Designvertrag:** [DESIGN.md](./DESIGN.md)

## Stack

Next.js 16 (App Router) · React 19 · Tailwind v4 · TypeScript.

Drei Laufzeitabhängigkeiten, mehr nicht: `next`, `react`, `react-dom`. Keine
Icon-Bibliothek (zehn eigene Inline-SVGs), keine Animationsbibliothek (CSS
plus zwei kleine Hooks), keine Formularbibliothek (kein Formular), keine
Consent-Bibliothek (rund 150 Zeilen eigener Code). Alle Versionen gepinnt.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
npm test           # Vitest: Öffnungszeiten, NRW-Feiertage, Formularprüfung, Termin-Adapter
```

## Gemessene Werte

Alles im Browser über die `transferSize` der Performance-API bei kaltem Cache
gemessen, also real übertragene Bytes. `next start`, localhost, gzip. Vercel
liefert brotli aus, real liegt es also etwas darunter.

| | Bestandsseite | Neu |
|---|---|---|
| Startseite, alle Bilder geladen | rund 10.700 KB | **341 KB** |
| Bilder gesamt im Projekt | 7 Dateien, rund 10 MB | 5 Dateien, **219 KB** |
| Schriftdateien | 8 Familien | **2 Dateien, 85 KB** |
| Cookies | Consent-Banner, Google Maps, US-Transfer | Banner mit **echten** Kategorien, Karte per OSM |
| H1 pro Seite | 0 im Hero, 2 auf Formularen | genau 1 |
| Kontrast | ungeprüft | WCAG AA, im Browser nachgemessen |
| Touch-Ziele | teils unter 24 px | mindestens 44 px |
| Strukturierte Daten | keine | `Physician` mit Adresse und Sprechzeiten |

DOMContentLoaded 89 ms, Load 219 ms. Alle 12 Routen sind statisch
vorgerendert; es gibt keine Server-Laufzeit.

## Woher die Bilder kommen

Von den sieben Bildern der Bestandsseite sind zwei übernommen, dazu das Logo:

| Datei | Herkunft |
|---|---|
| `praxis-anmeldung.webp` | linke Hälfte einer Collage, getrennt bei x=796 |
| `praxis-wartebereich.webp` | rechte Hälfte derselben Collage |
| `logo-az.png` | AZ-Monogramm, als Alphamaske aufbereitet |

**Beide Arztporträts sind vom Auftraggeber gelieferte Aufnahmen**, nicht die
Bilder der Bestandsseite. Sie stammen aus derselben Reihe: warmer
Hintergrund, gleiche Lichtführung. Die Zuschnitte sind aufeinander abgestimmt
(4:5, zentriert, vergleichbarer Maßstab). Die Originale liegen in `quellen/`,
außerhalb von `public/`, damit sie nicht öffentlich ausgeliefert werden.

**Vier Bilder der Bestandsseite wurden aussortiert:** ein Stockfoto mit
eingebranntem Text (nicht vorlesbar, nicht übersetzbar), zwei
Stethoskop-Stockfotos, davon eines erkennbar KI-generiert, und die alte
Ganzkörperaufnahme, die durch das neue Porträt ersetzt ist.

Beim Ersetzen eines Bildes immer den Dateinamen ändern. Gleicher Name lässt
den Image-Cache die alte Fassung weiterliefern.

Das Logo liegt als Alphamaske vor und wird per CSS `mask` eingefärbt: eine
Datei mit 4,9 KB für hellen und dunklen Grund.

## Karte: statisch, ohne Einwilligung sichtbar

Die Karte ist **sofort sichtbar und kostet trotzdem keine Einwilligung**. Sie
liegt als Bild auf dem eigenen Server: Die Kartenkacheln wurden einmalig von
OpenStreetMap geladen und zu `public/bilder/karte-praxis.webp` zusammengesetzt,
mit einer Marke auf der Ostlandstraße. Beim Aufruf der Seite geht dadurch
**kein einziger Request an einen fremden Server**.

Das ist der Punkt, an dem die meisten Praxisseiten Geld verlieren: Ein
eingebettetes Google Maps überträgt die IP jeder Besucherin ungefragt an
einen US-Anbieter. Das statische Bild umgeht das Problem, statt es zu
verwalten — es sieht aus wie eine Karte, weil es eine ist.

Wer zoomen und verschieben möchte, kann darunter die **interaktive Karte
laden**; erst dann wird OpenStreetMap kontaktiert. „Route planen" funktioniert
immer, weil der Link extern öffnet statt einzubetten.

Attribution nach ODbL steht unter der Karte. Sie ist auch bei selbst
gehosteten Kacheln Pflicht.

## Online-Anforderung für Rezept und Überweisung

Zwei Formulare auf `/rezept-und-ueberweisung`. Sie sind bewusst schlicht
gebaut und halten sich an drei Regeln:

1. **Nichts wird gespeichert.** Keine Datenbank, keine Datei, kein Log mit
   Inhalten. Die Angaben gehen durch die Server Action hindurch ins Postfach
   der Praxis und existieren danach nirgends mehr.
2. **TLS ist erzwungen.** `requireTLS` in `src/lib/mailer.ts`. Kommt keine
   verschlüsselte Verbindung zustande, schlägt der Versand fehl, statt
   Gesundheitsdaten im Klartext zu verschicken.
3. **Kein stiller Fehlschlag.** Ist SMTP nicht eingerichtet oder der Versand
   fehlgeschlagen, sagt das Formular es und nennt die Telefonnummer. Eine
   Anfrage, die niemand bekommt, ist schlimmer als gar keine Anfrage.

Geprüft wird **serverseitig** (`src/lib/anfrage-schema.ts`), unabhängig von
JavaScript im Browser. Das Geburtsdatum akzeptiert die Schreibweisen, die
Menschen tatsächlich tippen (03.04.1951, 3.4.1951, 1951-04-03) und weist
unmögliche Daten wie den 31.02. sowie Daten in der Zukunft zurück. Statt
Captcha ein Honigtopf-Feld — Captchas sind für genau die Zielgruppe eine
Hürde, die diese Praxis bedient.

### Vor dem Livegang nötig

Die Formulare funktionieren erst, wenn `.env.local` gefüllt ist (Vorlage in
`.env.example`). Dafür braucht die Praxis:

- ein **Postfach auf eigener Domain**, nicht bei einem Freemail-Anbieter,
- einen **Auftragsverarbeitungsvertrag** mit diesem Anbieter,
- SMTP über Port 587 mit STARTTLS oder 465 mit TLS.

Die derzeit hinterlegte Gmail-Adresse reicht dafür nicht: Für Patientendaten
ist ein Freemail-Konto ohne AV-Vertrag nicht zulässig.

## Patientenservice und Terminbuchung

Der Bereich `/patientenservice` bündelt fünf Unterseiten: Termin,
Folgerezept, Überweisung, Hinweise für den Praxisbesuch und
Notfallinformationen. Die alte Route `/rezept-und-ueberweisung` leitet
dauerhaft dorthin um.

Die Terminbuchung ist ein Anbieter-Adapter (`src/lib/termin.ts`), gesteuert
über `APPOINTMENT_PROVIDER_URL` und `APPOINTMENT_PROVIDER_NAME`: Ohne
vollständige Konfiguration existiert auf der ganzen Website kein „Termin
buchen"-Button, es gilt der Telefonweg. Der Anbieter steht sichtbar an
jedem Buchungslink, es gibt keine eigene Terminverwaltung und keine
Speicherung.

## Vor dem Launch zwingend erledigen

0. **Die drei Zahlen schriftlich bestätigen lassen.** Auf der Startseite
   stehen „über 3.700 Patientinnen und Patienten", „über 43 Jahre ärztliche
   Erfahrung" und „3 medizinische Schwerpunkte". Alle drei stammen von der
   Bestandsseite, sind aber unterschiedlich sicher:

   - *3 Schwerpunkte* ist aus dem Impressum belegbar und unproblematisch.
   - *43 Jahre* ist eine Tatsachenbehauptung der Praxis. Zulässig, wenn sie
     stimmt, von uns nicht überprüfbar.
   - *3.700 Patienten* ist der heikelste Punkt. Die Bestandsseite schreibt
     „3,7k+ **zufriedene** Patienten". Das Wort „zufrieden" wurde bewusst
     gestrichen: Eine Zufriedenheitsaussage ist unüberprüfbar und nach
     § 11 HWG sowie § 27 Berufsordnung angreifbar. Die reine Anzahl ist eine
     Tatsachenangabe und damit deutlich besser vertretbar.

   Haftbar ist die Praxis. Ohne schriftliche Bestätigung sollten die Zahlen
   nicht online gehen; sie stehen alle in `praxisZahlen` in
   `src/data/praxis.ts` und lassen sich dort in einem Zug entfernen.

1. **Postfach und AV-Vertrag für die Formulare.** Entschieden ist: Die
   Praxis bekommt ein Postfach auf eigener Domain als Formularempfänger.
   Einzurichten bleiben das Postfach selbst, der
   Auftragsverarbeitungsvertrag mit dem E-Mail-Anbieter und die
   SMTP-Zugangsdaten in `.env.local` bzw. den Vercel-Umgebungsvariablen.
   Bis dahin sendet die Website nichts und verweist aufs Telefon. Details
   oben unter „Online-Anforderung".
2. **Impressum ergänzen.** Berufshaftpflichtversicherung mit Versicherer und
   räumlichem Geltungsbereich ist Pflichtangabe und steht derzeit als offener
   Punkt.
3. **Impressum und Datenschutz anwaltlich prüfen lassen.** Beide sind
   sorgfältige Entwürfe, keine Rechtsberatung. Die Datenschutzerklärung muss
   zusätzlich den tatsächlichen Hoster und die Speicherdauer der Logdateien
   benennen.
4. **Sprechzeiten bestätigen lassen.** Übernommen sind die Angaben der
   eigenen Website. Verzeichnisse nennen abweichende Zeiten. Falsche
   Sprechzeiten schicken Menschen vor eine verschlossene Tür.
5. **Bearbeitungszeit bestätigen.** Die Bestandsseite verspricht 24 Stunden,
   die neue Seite nennt zwei Werktage, weil ein 24-Stunden-Versprechen über
   Wochenenden nicht haltbar ist. Die Praxis muss der Abweichung zustimmen.
6. **Nutzungsrechte an den Fotos klären.** Sie zeigen die echte Praxis, das
   Urheberrecht liegt aber beim Fotografen.
7. **E-Mail-Adresse prüfen.** Als Kontaktadresse steht noch
   `arztpraxis.dr.aziz@gmail.com` von der Bestandsseite auf der Website.
   Sobald das Postfach auf eigener Domain existiert (Punkt 1), sollte es
   auch die Kontaktadresse ersetzen. Formularempfänger ist Gmail in keinem
   Fall — der kommt ausschließlich aus `ANFRAGE_EMPFAENGER`.
8. **Google-Bewertung verifizieren.** Der Wert in `googleBewertung`
   (`src/data/praxis.ts`) stammt aus einem Branchenverzeichnis aus zweiter
   Hand. Vor Livegang direkt am Google-Unternehmensprofil ablesen,
   eintragen und danach regelmäßig aktualisieren — oder auf `null` setzen,
   dann verschwindet der Block.

## Beim Kunden anfragen

Blockiert den Launch nicht, aber die Seite bleibt sonst hinter ihren
Möglichkeiten.

- **Fachrichtung und Vita von Dennis Aziz.** Belegt ist bisher nur
  „angestellter Arzt". Sein Porträt steht auf der Seite, der fachliche
  Hintergrund fehlt noch.
- **Weitere Praxisfotos**, vor allem Gebäude von außen und Behandlungsraum.
- **Urlaubs- und Vertretungszeiten.** Fehlen auf der Bestandsseite ganz und
  sind für Patienten hoch relevant.
- **Barrierefreiheit des Gebäudes, Parkplätze, Anfahrt mit dem Bus.**
- **Sprachen.** Nach Verzeichnissen spricht die Praxis Arabisch und Englisch.
  Ob eine Übersetzung gewünscht ist, entscheidet die Praxis. Eine
  Sprachfassung ohne jemanden, der am Telefon antworten kann, wäre schlechter
  als keine.

## Was bewusst nicht übernommen wurde

- **„3,7k+ zufriedene Patienten."** Werbung mit Patientenzahlen ist nach
  § 11 HWG angreifbar und die Zahl nicht prüfbar.
- **„43+ Jahre Erfahrung, stationär, chirurgisch sowohl ambulant."**
  Grammatisch defekt und unbelegt.
- **Ein „Termin buchen"-Button.** Die Praxis hat keine Onlinebuchung.
- **Das eingebettete Google Maps.** Ersetzt durch eine OpenStreetMap-Karte,
  die erst nach Einwilligung lädt. Vor der Zustimmung wird kein iframe
  erzeugt und keine Verbindung aufgebaut. Kein Transfer in die USA, keine
  Werbe-Cookies. Der Platzhalter zeigt die Adresse, und der Button „Route
  planen" funktioniert auch ohne Zustimmung, weil er extern öffnet statt
  einzubetten.

## Einwilligung

Der Banner kennt genau zwei Kategorien, und beide existieren wirklich:
**notwendig** (speichert nur die Entscheidung selbst) und **externe Inhalte**
(die Karte). Es gibt bewusst keine Kategorie für Statistik oder Marketing —
solche Dienste sind nicht eingebunden, und eine leere Kategorie anzubieten
wäre eine Vortäuschung.

„Akzeptieren" und „Ablehnen" sind gleich groß, gleich gestaltet und stehen
nebeneinander. Ein hervorgehobener Zustimmen-Knopf neben einem blassen
Ablehnen-Link ist ein Dark Pattern und macht die Einwilligung unwirksam. Der
Banner blockiert die Seite nicht: Wer nur die Telefonnummer sucht, kommt an
sie heran.

Die Karte steht an zwei Stellen: auf der Kontaktseite und auf der Startseite
unter „Sprechzeiten und Anfahrt". Beide teilen sich denselben
Einwilligungsstand, es wird also nur einmal gefragt. Auf der Startseite läuft
sie ohne eigene Überschrift, weil der Abschnitt darüber schon eine trägt.

Widerruf jederzeit über `/datenschutz#einwilligung`, dort steht auch der
Zeitpunkt der Entscheidung. Gespeichert wird in `localStorage`, nicht in
einem Cookie — die Auswertung passiert im Browser, ein Cookie würde bei jedem
Request ohne Nutzen mitreisen.

## Hosting

Geplant ist Vercel. Zu beachten:

- Vercel ist ein US-Anbieter. Für eine Arztpraxis gehört das offen in die
  Datenschutzerklärung, mit Auftragsverarbeitungsvertrag und
  Standardvertragsklauseln.
- Die Seite ist vollständig statisch. Es läuft kein Server-Code, es werden
  keine Formulardaten entgegengenommen. Das hält die datenschutzrechtliche
  Angriffsfläche klein.
