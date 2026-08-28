import type { Metadata } from "next";
import { whatsappNummer } from "@/lib/whatsapp";
import { KontaktInhalt } from "@/components/kontakt-inhalt";

export const metadata: Metadata = {
  title: "Kontakt und Anfahrt",
  description:
    "Praxis Dr. med. Adel Aziz, Ostlandstraße 17, 32339 Espelkamp. Telefon 05772 5511. Sprechzeiten und Anfahrt.",
  alternates: { canonical: "/kontakt" },
};

export default function Kontakt() {
  return <KontaktInhalt whatsappNummer={whatsappNummer()} />;
}
