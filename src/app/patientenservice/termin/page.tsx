import type { Metadata } from "next";
import { terminBuchung } from "@/lib/termin";
import { TerminInhalt } from "@/components/termin-inhalt";

export const metadata: Metadata = {
  title: "Termin vereinbaren",
  description:
    "Termin in der Hausarztpraxis Dr. med. Adel Aziz in Espelkamp vereinbaren — telefonisch unter 05772 5511, zu den Sprechzeiten.",
  alternates: { canonical: "/patientenservice/termin" },
};

export default function Termin() {
  const b = terminBuchung();
  return <TerminInhalt buchung={b ? { url: b.url, anbieter: b.anbieter } : null} />;
}
