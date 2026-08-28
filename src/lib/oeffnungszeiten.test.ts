import { describe, expect, it, vi } from "vitest";

/**
 * Der Urlaubsbestand wird gemockt, damit die Tests nicht davon abhängen,
 * was gerade in praxis.ts eingetragen ist. oeffnungszeiten.ts importiert
 * aus dem Datenmodul nur `urlaube`.
 */
vi.mock("@/data/praxis", () => ({
  urlaube: [{ von: "2026-07-20", bis: "2026-07-31", grund: "Sommerurlaub" }],
}));

const { status, gruppierteZeiten, schemaZeiten } = await import("./oeffnungszeiten");

// Fixe Referenztage 2026: 17.8. ist ein Montag.
const mo = (h: number, m = 0) => new Date(2026, 7, 17, h, m);

describe("status", () => {
  it("Montag 09:00 → geöffnet bis 12:00", () => {
    expect(status(mo(9))).toEqual({ offen: true, bis: "12:00" });
  });

  it("Montag 12:00 → geschlossen, wieder heute ab 15:00 (Grenze exklusiv)", () => {
    const s = status(mo(12));
    expect(s.offen).toBe(false);
    if (!s.offen) expect(s.naechster).toMatchObject({ abstandTage: 0, von: "15:00" });
  });

  it("Montag 18:30 → wieder morgen ab 08:00", () => {
    const s = status(mo(18, 30));
    expect(s.offen).toBe(false);
    if (!s.offen) expect(s.naechster).toMatchObject({ abstandTage: 1, von: "08:00" });
  });

  it("Mittwoch 14:00 → nachmittags zu, wieder morgen", () => {
    const s = status(new Date(2026, 7, 19, 14));
    expect(s.offen).toBe(false);
    if (!s.offen) expect(s.naechster).toMatchObject({ abstandTage: 1, von: "08:00" });
  });

  it("Samstag → wieder Montag", () => {
    const s = status(new Date(2026, 7, 22, 10));
    expect(s.offen).toBe(false);
    if (!s.offen) expect(s.naechster?.tagIndex).toBe(0);
  });

  it("Feiertag (1. Mai 2026, ein Freitag) → zu, mit Grund", () => {
    const s = status(new Date(2026, 4, 1, 9));
    expect(s.offen).toBe(false);
    if (!s.offen) {
      expect(s.heute).toBe("feiertag");
      // Nächster Öffnungstag ist Montag, der 4. Mai.
      expect(s.naechster?.von).toBe("08:00");
    }
  });

  it("Pfingstmontag 2026 (25.5.) → zu, obwohl Montag Sprechzeit hätte", () => {
    const s = status(new Date(2026, 4, 25, 9));
    expect(s.offen).toBe(false);
    if (!s.offen) expect(s.heute).toBe("feiertag");
  });

  it("Urlaub → zu, nächster Termin nach Urlaubsende mit Datum", () => {
    const s = status(new Date(2026, 6, 22, 9)); // Mittwoch im Sommerurlaub
    expect(s.offen).toBe(false);
    if (!s.offen) {
      expect(s.heute).toBe("urlaub");
      // Wieder offen am Montag, 3. August — mehr als eine Woche entfernt,
      // deshalb steht das Datum dabei.
      expect(s.naechster).toMatchObject({
        tagIndex: 0,
        datum: { tag: 3, monat: 8 },
        von: "08:00",
      });
    }
  });

  it("Urlaubsgrenzen zählen einschließlich", () => {
    expect(status(new Date(2026, 6, 20, 9)).offen).toBe(false); // erster Tag
    expect(status(new Date(2026, 6, 31, 9)).offen).toBe(false); // letzter Tag
    expect(status(new Date(2026, 7, 3, 9)).offen).toBe(true); // Montag danach
  });
});

describe("gruppierteZeiten", () => {
  it("fasst gleiche Tage zusammen", () => {
    const tage = gruppierteZeiten().map((g) => g.tage);
    expect(tage).toEqual(["Mo, Di", "Mi", "Do", "Fr"]);
  });
});

describe("schemaZeiten", () => {
  it("liefert acht Zeitfenster für schema.org", () => {
    expect(schemaZeiten()).toHaveLength(8);
  });
});
