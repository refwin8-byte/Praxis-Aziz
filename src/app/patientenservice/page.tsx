import type { Metadata } from "next";
import { terminBuchung } from "@/lib/termin";
import { whatsappNummer } from "@/lib/whatsapp";
import { PatientenserviceInhalt } from "@/components/patientenservice-inhalt";

export const metadata: Metadata = {
  title: "Patientenservice",
  description:
    "Termin, Folgerezept und Überweisung: die drei Wege in die Praxis Dr. med. Adel Aziz in Espelkamp — dazu Hinweise für den Praxisbesuch und Notfallinformationen.",
  alternates: { canonical: "/patientenservice" },
};

/**
 * Server-Wrapper: liest die Env-basierten Konfigurationen (Terminanbieter,
 * WhatsApp-Nummer) und übergibt sie an den übersetzbaren Client-Inhalt.
 * Die Metadaten bleiben deutsch — Deutsch ist die maßgebliche Fassung.
 */
export default function Patientenservice() {
  return (
    <PatientenserviceInhalt
      anbieter={terminBuchung()?.anbieter ?? null}
      whatsappNummer={whatsappNummer()}
    />
  );
}
