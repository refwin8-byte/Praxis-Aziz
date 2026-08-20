# DESIGN.md — Praxis Dr. med. Adel Aziz

Designvertrag. Produktwahrheit steht in PRODUCT.md.

## Modus

**Persuade.** Die Seite muss überzeugen, nicht verwalten: Sie soll in den
ersten drei Sekunden Vertrauen herstellen und dann sofort handlungsfähig
machen. Kein Dashboard, keine Broschüre.

**Dials:** `DESIGN_VARIANCE: 5` · `MOTION_INTENSITY: 2` · `VISUAL_DENSITY: 3`

Bewusst niedrige Motion und niedrige Dichte. Diese Seite wird von Menschen mit
vergrößerter Schrift, Gleitsichtbrille und wackliger Mobilverbindung benutzt.
Eigenständigkeit entsteht hier über Typografie, Farbfläche und Rhythmus, nicht
über Bewegung oder Effektdichte.

## Direction Contract

**THESIS** — *Die Sprechstunde, nicht die Klinik.* Der Kategorie-Default für
Arztpraxen ist hellblau, rund, lächelnd und leer: Stethoskop-Stockfoto,
Verlaufshintergrund, drei gleiche weiße Karten. Diese Seite verweigert das.
Sie ist ruhig, warm und erwachsen, wie ein gut gemachter Praxisbogen aus
Papier: klare Kante, viel Luft, ernsthafte Schrift.

**OWN-WORLD** — Warmes Leinen als Grund, tiefes Petrol-Anthrazit für ganze
Regionen, Salbei als einziger Akzent. Überschriften in einer ruhigen
Serifenschrift, alles Funktionale in einer humanistischen Sans. Trennung über
Haarlinien, nie über Kartenrahmen auf Kartenrahmen. Zahlen tabellarisch.

**STORY** — Ein Mensch mit einer Frage kommt an. Zuerst: Wer ist das, und ist
gerade offen? Dann: Was kann ich hier sofort erledigen? Dann erst: Wer
behandelt mich, was wird gemacht, wie komme ich hin.

**FIRST VIEWPORT** — Echtes Foto der Anmeldung, kein Stock. Darüber der
Praxisname in der Serif auf Display-Größe. Daneben der live berechnete
Öffnungsstatus in Tabellenziffern und die Telefonnummer als große Fläche. Auf
Mobil steht der Status über dem Bild, weil er die häufigste Frage beantwortet.

**FORM** — Editorial und ruhig. Amtliche Klarheit ohne Amtsstubenkälte.

## Marken-DNA: was bleibt

Die Bestandsseite hat genau ein verwertbares Markenelement: das **AZ-Monogramm
im Kreis**, gesetzt in einer hochkontrastigen Serifenschrift. Es bleibt und
wird zum Anker des Systems. Aus seiner Serif-Natur folgt die Entscheidung für
eine Display-Serif — das ist Markenfortschreibung, keine Geschmacksfrage.

Nicht bewahrt wird die Farbwelt der Bestandsseite (Dunkelgrün auf Weiß aus dem
IONOS-Baukasten) und ihre Typografie. Beides war Template-Default, kein
Markenentscheid.

## Farbe: Die grüne Hausarztpraxis (Richtung „Espelkamp Editorial", 8/2026)

Grün ist der lokale Markenanker — die alte Website war grün geprägt, und
Espelkamp ist eine grüne Stadt. Die Grünfamilie wird weiterentwickelt,
nicht abgeschnitten. Eine gesättigte Farbe trägt große Flächen.

| Token | Wert | Rolle |
|---|---|---|
| `--linen` | `#F4F1EA` | Grund. Warmes Off-White, **nie Klinikweiß** |
| `--paper` | `#FCFAF7` | Abgehobene Flächen, Formularblöcke |
| `--night` | `#102F2D` | Tiefgrün-Petrol. Nav, Footer, Primäraktion |
| `--night-deep` | `#0A2220` | Footer-Grund, Hover auf Dunkel |
| `--night-soft` | `#1D5244` | Flächen innerhalb von Dunkel |
| `--wald` | `#174B3A` | Waldgrün. Große Markenflächen, je ein Kapitel pro Seite |
| `--petrol` | `#3F7657` | Espelkamp-Grün. Der lebendige Akzent auf Hell |
| `--sage` | `#82A96E` | Blattgrün. Linien, Icons, Grafik auf Dunkel |
| `--sage-bright` | `#BED3C2` | Helles Blatt für kleinen Text auf `--wald`/`--night-soft` |
| `--salbei` | `#DCE7D8` | Helles Salbei. Ruhige Serviceflächen, Porträtgrund |
| `--ocker` | `#D4B35F` | Warmes Ocker. **Nur** Nummern, Fäden, ein Punkt pro Viewport. Nie Textfarbe |
| `--ink` | `#16211C` | Fließtext |
| `--ink-soft` | `#56615B` | Sekundärtext |
| `--rule` | `#DDD8CC` | Haarlinien |
| `--open` | `#2A6B45` | Zustandsfarbe „jetzt geöffnet" |
| `--alert` | `#A8321F` | Zustandsfarbe. **Nur Notfall** |

Gemessene Kontraste: Weiß auf `--night` 14,6:1 · Weiß auf `--wald` 8,9:1 ·
`--petrol` auf `--linen` 4,76:1 (trägt Text) · `--sage-bright` auf `--wald`
6,4:1 · `--sage` auf `--night` 5,4:1, auf `--wald` nur 3,7:1 (dort nur
große Schrift oder Grafik) · `--ink` auf `--salbei` 12,4:1.

Farbregeln: maximal drei Farbstimmungen pro Viewport. Zwischen kräftigen
Grün-Höhepunkten bleiben bewusst ruhige Leinenflächen. Der Naturbezug
entsteht über Farbe, Licht (`.grade`-Foto-Grade auf Raumaufnahmen, nie auf
Porträts) und Form — keine Blätter-Icons, keine Pflanzenmuster.
`--open` und `--alert` sind Zustandsfarben, keine Markenfarben.

## Aziz-Signatur

Vier grafische Elemente, höchstens ein bis zwei pro Seite — Markensystem,
nicht Dekoration (Klassen in globals.css):

- `.nr-gross` — übergroße redaktionelle Abschnittsnummern (Ocker auf Hell,
  helles Blatt auf Dunkel), immer `aria-hidden`.
- `.az-kreis` — der Kreis aus dem AZ-Monogramm als ruhige Bildebene.
- `.az-letter` — angeschnittene AZ-Letter als Hintergrundtypografie,
  Opazität ≤ 0,14.
- `.faden` — der Ockerfaden, ein kurzes Markensignal (Hero, Übergänge).

Wegfarben im Patientenservice: Termin = Tiefgrün, Folgerezept = Blattgrün,
Überweisung = Espelkamp-Grün — zurückhaltend als obere Kante, Icon- und
Nummernfarbe, nie als volle Kartenfläche.

**Fokusring:** zwei Ringe, weil die Seite helle und tiefdunkle Flächen mischt.
Petrol außen, Papier innen. Auf jedem Untergrund ist einer sichtbar.

## Schrift

**Newsreader** für Display und Überschriften. Ruhig, editorial, mit genug
Kontrast, um den Serif-Charakter des Logos aufzunehmen, ohne in
Baukasten-Playfair zu kippen. Nur Gewicht 400 und 500, `opsz` aktiv.

**Source Sans 3** für Interface, Fließtext, Formulare, Zahlen. Humanistisch,
große x-Höhe, offene Punzen. Das ist eine Legibilitätsentscheidung für eine
ältere Zielgruppe, keine ästhetische.

Beide self-hosted über `next/font/google`. Zur Laufzeit geht kein Request an
Google, das ist eine DSGVO-Anforderung, keine Optimierung.

| Rolle | Größe |
|---|---|
| Display | `clamp(2.6rem, 6.2vw, 4.75rem)` · Serif 400 · tracking -0.02em |
| H2 | `clamp(1.9rem, 3.4vw, 2.7rem)` · Serif 400 |
| H3 | `1.3125rem` · Sans 600 |
| Body | `1.0625rem` / 1.68 · Sans 400 |
| Body groß | `1.1875rem` / 1.6 — Einstiegsabsätze |
| Label | `0.8125rem` · 600 · tracking 0.09em · uppercase |
| Zahl | `tabular-nums`, immer |

Basis 17px statt 16px. Die Zielgruppe ist älter.

## Icons

Zehn eigene Inline-SVGs, kein Icon-Paket. Einheitliche Regeln: 24er-Raster,
Strichstärke 1.6, runde Enden, `currentColor`, `aria-hidden`.

**Keine Emojis.** Sie werden auf jedem Betriebssystem anders gezeichnet,
lassen sich nicht einfärben, springen aus der Grundlinie und tragen einen
informellen Ton, der für eine Arztpraxis nicht passt. Eigene Linien-Icons
fügen sich dagegen in die Typografie ein und erben jede Farbe, auch auf
Nachtgrund.

Bei den Vertrauenszahlen steht je ein Icon über der Zahl, 26 px in Petrol.
Zwei Motive sind bewusst gewählt und nicht das Naheliegende:

- **Jahre Erfahrung** bekommt einen *Kalender*, keinen Lorbeerkranz und
  keinen Pokal. Erfahrung ist eine Zeitangabe, keine Auszeichnung — und
  Auszeichnungen dürfen für diese Praxis ohnehin nicht angedeutet werden.
- **Schwerpunkte** bekommen *drei verbundene Knoten*, keinen Stern. Ein
  Stern neben einer Zahl wird als Bewertung gelesen, und Bewertungen gibt es
  auf dieser Seite nicht.

## Layout

- Asymmetrische Raster: `7fr 5fr` oder `5fr 7fr`. Nie 50/50.
- **Haarlinien statt Kartenrahmen.** Karten nur für Formular- und
  Notfallblöcke.
- Kein Box-in-Box. Eine Umrandungsebene pro Sektion.
- Sektionsrhythmus `clamp(4.5rem, 9vw, 8.5rem)`. Über einer Überschrift mehr
  Raum als darunter.
- Radien: `--r-sm 6px` Badges · `--r-md 10px` Buttons · `--r-lg 16px` Bilder.
- Touch-Ziele mindestens 48 px, nicht 44. Ältere Finger, kleinere Zielgenauigkeit.

## Motion

`MOTION_INTENSITY: 2`. Nur was Bedeutung trägt.

**Drei Bewegungen, mehr nicht.** Jede hat eine Begründung, und keine wiederholt
sich über die ganze Seite:

1. **Bildauftakt im Hero.** Das Foto schiebt sich per `clip-path` von unten
   frei und beruhigt sich aus einer leichten Überzeichnung heraus.
   1200 ms, 260 ms verzögert, damit es dem Text den Vortritt lässt.
   `clip-path` und `transform` laufen im Compositor, es gibt kein Layout.
2. **Scroll-Reveal**, sparsam auf drei Blöcken im Vertrauensbereich.
   Opazität plus 14 px Weg, 620 ms, gestaffelt um 80 ms.
3. **Zählende Zahlen**, 1100 ms, kubisches Ease-out, kein Überschwingen.

**Zwei Sicherungen, weil unsichtbarer Inhalt der schlechteste Ausgang einer
Animation ist:**

- Der versteckte Ausgangszustand der Reveals gilt nur bei `data-motion="an"`
  am `<html>`. Das Attribut setzt ein Inline-Skript im `<head>` vor dem ersten
  Paint. Ohne JavaScript, bei einem Skriptfehler oder bei
  `prefers-reduced-motion` bleibt schlicht alles sichtbar.
- Der Endwert der Zahlen wird zusätzlich per Timeout gesetzt, unabhängig vom
  Frame-Takt. Steht `requestAnimationFrame` still — inaktiver Tab,
  Energiesparmodus —, bliebe sonst ein Zwischenstand stehen. Bei „über 3.700
  Patientinnen und Patienten" wäre das keine verpasste Animation, sondern eine
  falsche Tatsachenangabe.

Die Sichtbarkeitsprüfung nutzt `getBoundingClientRect` und nicht
`IntersectionObserver`: Der Observer meldet in nicht komponierenden
Umgebungen keine Überschneidung, der Inhalt bliebe dann dauerhaft verborgen.
Ausgelöst wird, sobald die Oberkante die Schwelle unterschreitet — ohne
Bedingung auf die Unterkante, sonst bliebe ein bereits nach oben
durchgelaufener Block für immer unsichtbar.

- Scroll-Reveal: Opazität plus `translateY(10px)`, 460 ms,
  `cubic-bezier(0.16, 1, 0.3, 1)`, einmalig. Begründung: Hierarchie beim Eintritt.
- Buttons: `scale(0.985)` auf `:active`, 120 ms. Begründung: Zustandsfeedback.
- Hover nur in `@media (hover: hover) and (pointer: fine)`.
- `prefers-reduced-motion`: alles, was Position ändert, wird abgeschaltet.
  Farbwechsel bleiben, sie helfen beim Verstehen.
- Kein Parallax, kein Scroll-Hijack, keine Dauer-Animation, kein Video-Hero.

## Bild

Nur echte Aufnahmen dieser Praxis. Verfügbar sind drei, aus der Bestandsseite
gerettet und aufbereitet:

| Datei | Motiv | Einsatz |
|---|---|---|
| `praxis-anmeldung.webp` | Empfangstresen | Hero |
| `praxis-wartebereich.webp` | Wartebereich | Praxisseite |
| `adel-aziz-portraet.webp` | Dr. Adel Aziz, Oberkörper | Ärzte-Sektionen |
| `dennis-aziz-portraet-v2.webp` | Dennis Aziz, Oberkörper | Ärzte-Sektionen |
| `logo-az.png` | AZ-Monogramm, Alphamaske | Header, Footer |

In `public/` liegt nichts Unbenutztes. Unverarbeitete Originale gehören nicht
dorthin, weil alles unter `public/` öffentlich abrufbar ist; sie liegen in
`quellen/`.

Die beiden Porträts sind aufeinander abgestimmt: gleicher Bildausschnitt
(4:5), vergleichbarer Maßstab, beide zentriert. Das ist bei einer
Paardarstellung kein Detail — ungleiche Größen lesen sich als Rangordnung.

**Beim Austausch von Bildern immer den Dateinamen ändern.** Gleicher Name
lässt den Image-Cache die alte Fassung weiterliefern. Daher das `-v2` an
`dennis-aziz-portraet`.

Beide Ärzte werden **gleich groß und nebeneinander** gezeigt. In einer Praxis
mit zwei Ärzten entscheidet die Darstellung mit, wen Patienten als ansprechbar
wahrnehmen; eine Hierarchie im Layout wäre eine Aussage, die niemand
getroffen hat.

Beide stammen aus derselben Aufnahmereihe mit warmem Hintergrund, im Browser
gemessen rgb(245,241,238) und rgb(252,244,239). Der Restunterschied von
sieben Helligkeitsstufen bleibt unangetastet: Angleichen würde echte Fotos in
Richtung Katalogware schieben.

Das Logo liegt als Alphamaske vor und wird per CSS `mask` eingefärbt. Dadurch
funktioniert es auf Leinen und auf Nachtgrund mit einer einzigen Datei.

Für keinen der Ärzte wird ein generiertes oder gekauftes Gesicht verwendet.
Läge für einen von beiden kein Foto vor, stünde er rein typografisch.

Zwei präzise Ausnahmen vom Nur-echte-Fotos-Grundsatz, beide entschieden:

- **Der Hero-Loop der Startseite** (`/video/hero-loop.*`) ist per
  Image-to-Video aus dem echten Anmeldungsfoto erzeugt. Verwendet sind nur
  die ersten zwei Sekunden der Generierung, in denen die Kamera dem Foto
  treu bleibt, als nahtlose Vor-und-zurück-Schleife; die vom Modell
  erfundenen Bildränder sind weggeschnitten. Räume und Gegenstände sind die
  der echten Praxis.
- **Das Diagnostik-Stillleben** (`diagnostik-detail.webp`, Leistungsseite)
  ist generiert und zeigt ausschließlich unbeschriftete Gegenstände — kein
  Raum, keine Menschen, keine lesbaren Daten. Es steht mit dem Vermerk
  „Symbolbild" unter dem Bild. Generierte Räume oder Personen bleiben tabu.

Keine Karte von Google. Die Karte auf der Kontaktseite kommt von
OpenStreetMap und läuft über eine **Zwei-Klick-Lösung**: Vor der Zustimmung
existiert kein iframe, kein Vorabruf, kein Preconnect — es fließt kein Byte
zu einem fremden Server. Der Platzhalter ist kein Graufeld, sondern trägt
die Adresse; wer nur die Anschrift braucht, muss gar nicht zustimmen.

Daraus folgt eine Systementscheidung: **kein seitenweites Einwilligungsbanner.**
Die Einwilligung steht dort, wo sie anfällt, und betrifft nur diese eine
Sektion. Ein Banner über der ganzen Seite würde für alle anderen Seiten
Zustimmung einholen, für die es nichts einzuwilligen gibt.

## Verbote

- Kein Hellblau, kein Verlaufshintergrund, kein Blob, kein Glow.
- Keine Stockfotos. Keine generierten Gesichter.
- Keine erfundenen Zahlen und keine erfundenen Bewertungen. (§ 11 HWG)
  Die eine Ausnahme vom Sterne-Verbot: der Google-Gesamtwert im
  Vertrauensbereich — eine echte, verlinkte, überprüfbare Fremdbewertung
  mit sichtbarem Stand. Kein Widget, keine herausgegriffenen Zitate.
- Kein „Termin buchen"-Button ohne echte Onlinebuchung. Der Button
  existiert nur, wenn `APPOINTMENT_PROVIDER_URL` konfiguriert ist
  (src/lib/termin.ts); sonst ist das Telefon die Primäraktion.
- Kein `transition: all`.
- Keine Eyebrow über jeder Sektion. Höchstens eine pro drei Sektionen.
- Keine eigene Verarbeitung von Gesundheitsdaten.
