"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { de, type Sprachcode, type Woerterbuch } from "./woerterbuch";
import { tr } from "./tr";
import { ru } from "./ru";
import { sq } from "./sq";

/**
 * Sprachzustand der Website.
 *
 * Deutsch ist die maßgebliche Ausgangsversion und der Startzustand — auch
 * beim Server-Rendering, damit die statischen Seiten unverändert deutsch
 * ausgeliefert werden. Die Auswahl der Besucherin liegt in localStorage
 * und bleibt damit beim Seitenwechsel und beim nächsten Besuch erhalten.
 *
 * `document.documentElement.lang` wird mitgeführt, damit Vorleseprogramme
 * die Aussprache wechseln.
 */

export const WOERTERBUECHER: Record<Sprachcode, Woerterbuch> = { de, tr, ru, sq };
export const SPRACHEN = Object.values(WOERTERBUECHER);

const SCHLUESSEL = "aziz-sprache";

const Kontext = createContext<{
  wb: Woerterbuch;
  sprache: Sprachcode;
  setzeSprache: (code: Sprachcode) => void;
}>({ wb: de, sprache: "de", setzeSprache: () => {} });

export function SprachProvider({ children }: { children: React.ReactNode }) {
  const [sprache, setSprache] = useState<Sprachcode>("de");

  useEffect(() => {
    try {
      const gespeichert = localStorage.getItem(SCHLUESSEL);
      if (gespeichert && gespeichert in WOERTERBUECHER) {
        setSprache(gespeichert as Sprachcode);
      }
    } catch {
      // Privates Fenster ohne Speicher: Deutsch bleibt.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = sprache;
  }, [sprache]);

  const setzeSprache = (code: Sprachcode) => {
    setSprache(code);
    try {
      localStorage.setItem(SCHLUESSEL, code);
    } catch {
      // Ohne Speicher gilt die Wahl nur für diese Seite.
    }
  };

  return (
    <Kontext.Provider value={{ wb: WOERTERBUECHER[sprache], sprache, setzeSprache }}>
      {children}
    </Kontext.Provider>
  );
}

export function useSprache() {
  return useContext(Kontext);
}
