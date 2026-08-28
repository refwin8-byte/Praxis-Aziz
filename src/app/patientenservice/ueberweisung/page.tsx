import type { Metadata } from "next";
import { UeberweisungSeiteInhalt } from "@/components/anfrage-seiten-inhalt";

export const metadata: Metadata = {
  title: "Überweisung anfordern",
  description:
    "Überweisung zu einer Fachärztin oder einem Facharzt online anfordern. Verschlüsselte Übertragung, keine Speicherung auf der Website.",
  alternates: { canonical: "/patientenservice/ueberweisung" },
};

export default function Ueberweisung() {
  return <UeberweisungSeiteInhalt />;
}
