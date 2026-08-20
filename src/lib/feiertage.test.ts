import { describe, expect, it } from "vitest";
import { ostersonntag, feiertageNRW, istFeiertagNRW } from "./feiertage";

/** Ostertermine aus dem Kalender, nicht aus der eigenen Formel. */
const bekannteOstern: [number, number, number][] = [
  [2024, 3, 31],
  [2025, 4, 20],
  [2026, 4, 5],
  [2027, 3, 28],
  [2030, 4, 21],
];

describe("ostersonntag", () => {
  it.each(bekannteOstern)("Ostern %i fällt auf den %i.%i.", (jahr, monat, tag) => {
    const o = ostersonntag(jahr);
    expect([o.getMonth() + 1, o.getDate()]).toEqual([monat, tag]);
  });
});

describe("feiertageNRW", () => {
  it("kennt elf Feiertage", () => {
    expect(feiertageNRW(2026)).toHaveLength(11);
  });

  it("2026: bewegliche Feiertage stimmen mit dem Kalender überein", () => {
    const alsText = feiertageNRW(2026).map(
      (d) => `${d.getDate()}.${d.getMonth() + 1}.`,
    );
    expect(alsText).toContain("3.4."); // Karfreitag
    expect(alsText).toContain("6.4."); // Ostermontag
    expect(alsText).toContain("14.5."); // Christi Himmelfahrt
    expect(alsText).toContain("25.5."); // Pfingstmontag
    expect(alsText).toContain("4.6."); // Fronleichnam
  });

  it("erkennt NRW-spezifische Feiertage", () => {
    expect(istFeiertagNRW(new Date(2026, 10, 1))).toBe(true); // Allerheiligen
    expect(istFeiertagNRW(new Date(2026, 0, 6))).toBe(false); // Hl. Drei Könige: kein NRW-Feiertag
  });

  it("Heiligabend und Silvester sind keine gesetzlichen Feiertage", () => {
    expect(istFeiertagNRW(new Date(2026, 11, 24))).toBe(false);
    expect(istFeiertagNRW(new Date(2026, 11, 31))).toBe(false);
  });
});
