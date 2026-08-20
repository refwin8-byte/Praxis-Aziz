"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MotionAsset } from "@/data/medien";

/**
 * Dekorativer, lautloser Video-Loop mit striktem Poster-First-Verhalten.
 *
 * Das Poster (ein echtes Foto) ist immer da und trägt den LCP; das Video
 * legt sich erst darüber, wenn es wirklich spielt. Dadurch gibt es keinen
 * Layout Shift und keinen Moment, in dem die Fläche leer ist.
 *
 * Das Video wird überhaupt nur angefasst, wenn alle Bedingungen stimmen:
 * - kein prefers-reduced-motion (dann bleibt das Standbild)
 * - kein Save-Data (Datensparmodus bekommt nur das Poster)
 * - Viewport mindestens 768 px (Mobil lädt nie Videodaten)
 * - der Container ist in Viewport-Nähe (IntersectionObserver, 300 px
 *   Vorlauf; fehlt der Observer, wird schlicht nicht geladen — das
 *   Standbild ist der definierte Ausgang, nie ein Ladeloch)
 *
 * Läuft das Video aus dem Bild, pausiert es. Es ist rein dekorativ:
 * aria-hidden, keine Controls, stumm, Endlosschleife.
 */
export function PraxisVideo({
  asset,
  alt,
  priority = false,
  className = "",
  sizes = "100vw",
}: {
  asset: MotionAsset;
  /** Beschreibt das Posterfoto — das Video selbst ist aria-hidden. */
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [erlaubt, setErlaubt] = useState(false);
  const [spielt, setSpielt] = useState(false);

  useEffect(() => {
    const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const schmal = window.matchMedia("(max-width: 767px)").matches;
    type MitVerbindung = Navigator & { connection?: { saveData?: boolean } };
    const sparsam = (navigator as MitVerbindung).connection?.saveData === true;
    if (ruhig || schmal || sparsam) return;
    setErlaubt(true);
  }, []);

  useEffect(() => {
    if (!erlaubt) return;
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (eintraege) => {
        for (const e of eintraege) {
          if (e.isIntersecting) {
            // preload="none": Erst dieser Aufruf lädt Daten.
            video.play().then(() => setSpielt(true)).catch(() => {
              // Autoplay verweigert (Browser-Richtlinie): Standbild bleibt.
            });
          } else {
            video.pause();
          }
        }
      },
      { rootMargin: "300px 0px" },
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, [erlaubt]);

  return (
    <div
      ref={wrapRef}
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: `${asset.breite} / ${asset.hoehe}` }}
    >
      <Image
        src={asset.poster}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {erlaubt && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            spielt ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={asset.webm} type="video/webm" />
          <source src={asset.mp4} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
