"use client";

import { useEffect, useRef, useState } from "react";
import { praxisZahlen } from "@/data/praxis";
import { Menschen, Kalender, Schwerpunkte } from "@/components/icons";

/**
 * Zählt eine Zahl beim Eintritt ins Bild hoch.
 *
 * Sehr zurückhaltend gehalten: 1100 ms, reines Ease-out, kein Überschwingen,
 * kein Nachfedern. Der Effekt soll auffallen, wenn man hinsieht, und nicht
 * auffallen, wenn man liest.
 *
 * Bei `prefers-reduced-motion` steht der Endwert sofort. Und weil die Zahl
 * bereits im HTML steht, ist sie auch ohne JavaScript vollständig lesbar —
 * das Hochzählen ersetzt keine Information, es verziert sie nur.
 */
function Zahl({ ziel, praefix }: { ziel: number; praefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [wert, setWert] = useState<number | null>(null);

  useEffect(() => {
    const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (ruhig) {
      setWert(ziel);
      return;
    }

    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let schluss = 0;
    let gestartet = false;

    // Rechteckmessung statt IntersectionObserver, aus demselben Grund wie in
    // `reveal.tsx`: Sie liefert überall Zahlen, auch wenn nicht komponiert
    // wird. Eine Zahl, die nie hochzählt, wäre hier zwar unkritisch — der
    // Endwert steht ja im HTML — aber zwei Mechanismen für dieselbe Sache
    // wären unnötiger Ballast.
    const pruefen = () => {
      if (gestartet) return;
      const r = el.getBoundingClientRect();
      // Keine Bedingung auf die Unterkante, siehe `reveal.tsx`: Wer den
      // Abschnitt bereits passiert hat, soll die fertige Zahl sehen und
      // nicht eine, die nie zu zählen beginnt.
      if (r.top > window.innerHeight * 0.85) return;

      gestartet = true;
      abmelden();

      const dauer = 1100;
      const start = performance.now();
      const schritt = (jetzt: number) => {
        const t = Math.min(1, (jetzt - start) / dauer);
        // Ease-out, kubisch: schnell an, ruhig aus. Kein Überschwingen.
        const e = 1 - Math.pow(1 - t, 3);
        setWert(Math.round(ziel * e));
        if (t < 1) raf = requestAnimationFrame(schritt);
      };
      raf = requestAnimationFrame(schritt);

      // Sicherung des Endwerts, unabhängig von requestAnimationFrame.
      // Wird der Frame-Takt angehalten — inaktiver Tab, Energiesparmodus,
      // eingefrorene Darstellung — bliebe sonst ein Zwischenstand stehen.
      // Bei „über 3.700 Patientinnen und Patienten" wäre das keine
      // verpasste Animation, sondern eine falsche Tatsachenangabe.
      schluss = window.setTimeout(() => setWert(ziel), dauer + 250);
    };

    const abmelden = () => {
      window.removeEventListener("scroll", pruefen);
      window.removeEventListener("resize", pruefen);
    };

    window.addEventListener("scroll", pruefen, { passive: true });
    window.addEventListener("resize", pruefen);
    pruefen();
    const erste = requestAnimationFrame(pruefen);

    return () => {
      abmelden();
      cancelAnimationFrame(raf);
      cancelAnimationFrame(erste);
      clearTimeout(schluss);
    };
  }, [ziel]);

  const anzeige = (wert ?? ziel).toLocaleString("de-DE");

  return (
    <span ref={ref} className="num">
      {praefix}
      {anzeige}
    </span>
  );
}

/**
 * Praxisfakten in Zahlen.
 *
 * Zur Formulierung: Die Bestandsseite spricht von „3,7k+ zufriedenen
 * Patienten". Das Wort „zufrieden" ist hier bewusst gestrichen. Eine
 * Zufriedenheitsaussage ist nicht überprüfbar und nach § 11 HWG sowie § 27
 * Berufsordnung angreifbar; die reine Anzahl betreuter Patientinnen und
 * Patienten ist eine Tatsachenangabe. Haftbar ist die Praxis, deshalb steht
 * die Bestätigung dieser drei Zahlen auf der Freigabeliste in README.md.
 */
/**
 * Icon je Zahl. Bewusst eigene Linien-Icons statt Emojis: Emojis werden auf
 * jedem Betriebssystem anders gezeichnet, lassen sich nicht einfärben und
 * fallen aus dem typografischen Bild. Diese hier sitzen im selben 24er-Raster
 * wie alle anderen Icons der Seite und erben die Farbe.
 *
 * Sie sind rein dekorativ — die Aussage steht vollständig im Text daneben.
 * Deshalb `aria-hidden` (steckt schon in der Icon-Basis) und keine
 * Alternativtexte, die nur Vorleseprogramme aufhalten würden.
 */
const icons = {
  patienten: Menschen,
  jahre: Kalender,
  schwerpunkte: Schwerpunkte,
} as const;

export function Zahlen() {
  return (
    <dl className="grid gap-x-12 gap-y-12 sm:grid-cols-3">
      {praxisZahlen.map((z) => {
        const Icon = icons[z.id];
        return (
          <div key={z.label} className="border-t border-night pt-6">
            <Icon size={26} className="text-petrol" />
            <dd className="mt-5 font-serif text-[clamp(2.75rem,5vw,3.75rem)] leading-none text-night">
              <Zahl ziel={z.wert} praefix={z.praefix} />
            </dd>
            <dt className="mt-4 font-semibold text-night">{z.label}</dt>
            <p className="mt-2 text-[0.9375rem] text-ink-soft">{z.zusatz}</p>
          </div>
        );
      })}
    </dl>
  );
}
