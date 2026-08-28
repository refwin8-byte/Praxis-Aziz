"use client";

import Link from "next/link";
import { praxis } from "@/data/praxis";
import { useSprache } from "@/lib/i18n";
import { Telefon, Rezept, Kalender } from "@/components/icons";

/**
 * Permanenter Aktionsbereich am unteren Rand, nur auf schmalen Geräten.
 *
 * Drei Wege, daumen-erreichbar: Termin, Anrufen, Rezept. Nichts davon
 * versteckt sich in einem Menü oder einem Hover-Zustand. Die
 * Beschriftungen folgen der gewählten Sprache.
 *
 * `terminAktiv` kommt aus dem Layout (Server): Nur mit konfiguriertem
 * Buchungsanbieter heißt der erste Weg „Termin buchen".
 *
 * Der Platz, den die Leiste verdeckt, wird im Layout über eine
 * Body-Polsterung freigehalten, einschließlich der Home-Indicator-Zone
 * von iOS (safe-area-inset).
 */
export function MobileAktionsleiste({ terminAktiv }: { terminAktiv: boolean }) {
  const { wb } = useSprache();

  return (
    <nav
      aria-label={wb.nav.patientenservice}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <div className="grid grid-cols-3">
        <Link
          href="/patientenservice/termin"
          className="press flex min-h-16 flex-col items-center justify-center gap-1 text-[0.8125rem] font-semibold text-night"
        >
          <Kalender size={22} className="text-petrol" />
          {terminAktiv ? wb.nav.terminBuchen : wb.leiste.termin}
        </Link>
        <a
          href={praxis.telefonHref}
          className="press flex min-h-16 flex-col items-center justify-center gap-1 border-x border-rule text-[0.8125rem] font-semibold text-night"
        >
          <Telefon size={22} className="text-petrol" />
          {wb.leiste.anrufen}
        </a>
        <Link
          href="/patientenservice/rezept"
          className="press flex min-h-16 flex-col items-center justify-center gap-1 text-[0.8125rem] font-semibold text-night"
        >
          <Rezept size={22} className="text-petrol" />
          {wb.leiste.rezept}
        </Link>
      </div>
    </nav>
  );
}
