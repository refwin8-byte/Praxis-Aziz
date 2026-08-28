import type { Metadata } from "next";
import { NotfallInhalt } from "@/components/info-seiten-inhalt";

export const metadata: Metadata = {
  title: "Notfallinformationen",
  description:
    "Wann Sie 112 wählen, wann der ärztliche Bereitschaftsdienst 116 117 hilft und was außerhalb der Sprechzeiten der Praxis Dr. med. Adel Aziz gilt.",
  alternates: { canonical: "/patientenservice/notfall" },
};

export default function Notfall() {
  return <NotfallInhalt />;
}
