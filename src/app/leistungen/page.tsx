import type { Metadata } from "next";
import { LeistungenInhalt } from "@/components/leistungen-inhalt";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Diagnostik, strukturierte Programme für chronische Erkrankungen und weitere hausärztliche Leistungen der Praxis Dr. med. Adel Aziz in Espelkamp.",
  alternates: { canonical: "/leistungen" },
};

export default function Leistungen() {
  return <LeistungenInhalt />;
}
