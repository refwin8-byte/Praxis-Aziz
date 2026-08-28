import type { Metadata } from "next";
import { PraxisbesuchInhalt } from "@/components/info-seiten-inhalt";

export const metadata: Metadata = {
  title: "Hinweise für den Praxisbesuch",
  description:
    "Was Sie zum Besuch in der Praxis Dr. med. Adel Aziz mitbringen, wann Sie am besten kommen und wie die Anmeldung abläuft.",
  alternates: { canonical: "/patientenservice/praxisbesuch" },
};

export default function Praxisbesuch() {
  return <PraxisbesuchInhalt />;
}
