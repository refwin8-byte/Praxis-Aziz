import type { Metadata } from "next";
import { PraxisInhalt } from "@/components/praxis-inhalt";

export const metadata: Metadata = {
  title: "Praxis",
  description:
    "Die Hausarztpraxis Dr. med. Adel Aziz in Espelkamp: Ärzte, Räume und wie wir arbeiten.",
  alternates: { canonical: "/praxis" },
};

export default function Praxis() {
  return <PraxisInhalt />;
}
