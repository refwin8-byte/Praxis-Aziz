import Link from "next/link";
import { praxis } from "@/data/praxis";
import { terminBuchung } from "@/lib/termin";
import { Telefon, Rezept, Kalender } from "@/components/icons";

/**
 * Permanenter Aktionsbereich am unteren Rand, nur auf schmalen Geräten.
 *
 * Drei Wege, daumen-erreichbar: Termin, Anrufen, Rezept. Nichts davon
 * versteckt sich in einem Menü oder einem Hover-Zustand.
 *
 * „Termin" führt auf die Terminseite — dort steht je nach Konfiguration die
 * Onlinebuchung oder der Telefonweg mit Erklärung. Der direkte Buchungslink
 * wäre einen Tipp kürzer, aber ein unkommentierter Absprung zu einem
 * Drittanbieter aus einer Leiste heraus ist Patienten nicht zumutbar.
 *
 * Der Platz, den die Leiste verdeckt, wird im Layout über eine
 * Body-Polsterung freigehalten (pb-mobile-leiste), einschließlich der
 * Home-Indicator-Zone von iOS (safe-area-inset).
 */
export function MobileAktionsleiste() {
  // Ob online gebucht werden kann, ändert nur die Beschriftung — der Weg
  // über die Terminseite ist derselbe.
  const buchung = terminBuchung();

  return (
    <nav
      aria-label="Schnellzugriff"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <div className="grid grid-cols-3">
        <Link
          href="/patientenservice/termin"
          className="press flex min-h-16 flex-col items-center justify-center gap-1 text-[0.8125rem] font-semibold text-night"
        >
          <Kalender size={22} className="text-petrol" />
          {buchung ? "Termin buchen" : "Termin"}
        </Link>
        <a
          href={praxis.telefonHref}
          className="press flex min-h-16 flex-col items-center justify-center gap-1 border-x border-rule text-[0.8125rem] font-semibold text-night"
        >
          <Telefon size={22} className="text-petrol" />
          Anrufen
        </a>
        <Link
          href="/patientenservice/rezept"
          className="press flex min-h-16 flex-col items-center justify-center gap-1 text-[0.8125rem] font-semibold text-night"
        >
          <Rezept size={22} className="text-petrol" />
          Rezept
        </Link>
      </div>
    </nav>
  );
}
