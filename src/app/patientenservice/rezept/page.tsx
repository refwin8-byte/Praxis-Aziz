import type { Metadata } from "next";
import { RezeptSeiteInhalt } from "@/components/anfrage-seiten-inhalt";

export const metadata: Metadata = {
  title: "Folgerezept anfordern",
  description:
    "Folgerezept für Ihre Dauermedikation online anfordern, ohne in die Praxis zu kommen. Verschlüsselte Übertragung, keine Speicherung auf der Website.",
  alternates: { canonical: "/patientenservice/rezept" },
};

export default function Rezept() {
  return <RezeptSeiteInhalt />;
}
