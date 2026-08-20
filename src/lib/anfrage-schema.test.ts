import { describe, expect, it } from "vitest";
import {
  pruefeRezept,
  pruefeUeberweisung,
  leseMedikamente,
  istBot,
} from "./anfrage-schema";

/** Baut ein gültiges Rezept-FormData, das Tests dann gezielt kaputt machen. */
function rezeptDaten(aenderungen: Record<string, string> = {}) {
  const fd = new FormData();
  fd.set("name", "Erika Musterfrau");
  fd.set("geburtsdatum", "03.04.1951");
  fd.set("medikament-1-name", "Metformin");
  fd.set("medikament-1-staerke", "850 mg, 1-0-1");
  fd.set("medikament-1-packung", "N3");
  fd.set("einwilligung", "ja");
  for (const [k, v] of Object.entries(aenderungen)) fd.set(k, v);
  return fd;
}

function ueberweisungDaten(aenderungen: Record<string, string> = {}) {
  const fd = new FormData();
  fd.set("name", "Erika Musterfrau");
  fd.set("geburtsdatum", "3.4.1951");
  fd.set("fachrichtung", "Orthopädie");
  fd.set("grund", "Anhaltende Knieschmerzen");
  fd.set("einwilligung", "ja");
  for (const [k, v] of Object.entries(aenderungen)) fd.set(k, v);
  return fd;
}

describe("pruefeRezept", () => {
  it("akzeptiert eine vollständige Anfrage", () => {
    expect(pruefeRezept(rezeptDaten())).toEqual({});
  });

  it("verlangt Name, Geburtsdatum, Medikament, Wirkstärke und Einwilligung", () => {
    const fehler = pruefeRezept(new FormData());
    expect(Object.keys(fehler)).toEqual(
      expect.arrayContaining([
        "name",
        "geburtsdatum",
        "medikament-1-name",
        "medikament-1-staerke",
        "einwilligung",
      ]),
    );
  });

  it("akzeptiert gängige Datumsschreibweisen", () => {
    for (const d of ["03.04.1951", "3.4.1951", "03/04/1951", "1951-04-03"]) {
      expect(pruefeRezept(rezeptDaten({ geburtsdatum: d }))).toEqual({});
    }
  });

  it("weist unmögliche und zukünftige Daten zurück", () => {
    for (const d of ["31.02.1980", "01.01.2099", "irgendwann"]) {
      expect(pruefeRezept(rezeptDaten({ geburtsdatum: d }))).toHaveProperty("geburtsdatum");
    }
  });

  it("angefangene weitere Medikamentenzeile ohne Namen ist ein Fehler", () => {
    const fehler = pruefeRezept(rezeptDaten({ "medikament-2-staerke": "N2" }));
    expect(fehler).toHaveProperty("medikament-2-name");
  });

  it("die Packungsgröße bleibt freiwillig", () => {
    expect(pruefeRezept(rezeptDaten({ "medikament-1-packung": "" }))).toEqual({});
  });

  it("Telefonnummern mit Buchstaben werden zurückgewiesen", () => {
    expect(pruefeRezept(rezeptDaten({ telefon: "ruf mich an" }))).toHaveProperty("telefon");
    expect(pruefeRezept(rezeptDaten({ telefon: "05772 5511" }))).toEqual({});
  });

  it("ohne Einwilligung geht nichts", () => {
    expect(pruefeRezept(rezeptDaten({ einwilligung: "" }))).toHaveProperty("einwilligung");
  });
});

describe("leseMedikamente", () => {
  it("liest mehrere Zeilen und überspringt leere", () => {
    const fd = rezeptDaten({
      "medikament-3-name": "Ramipril",
      "medikament-3-staerke": "5 mg",
    });
    const m = leseMedikamente(fd);
    expect(m).toHaveLength(2);
    expect(m[1].name).toBe("Ramipril");
  });
});

describe("pruefeUeberweisung", () => {
  it("akzeptiert eine vollständige Anfrage", () => {
    expect(pruefeUeberweisung(ueberweisungDaten())).toEqual({});
  });

  it("verlangt Fachrichtung und Grund", () => {
    const fehler = pruefeUeberweisung(new FormData());
    expect(Object.keys(fehler)).toEqual(
      expect.arrayContaining(["fachrichtung", "grund"]),
    );
  });

  it("die Facharztpraxis ist freiwillig, aber längenbegrenzt", () => {
    expect(
      pruefeUeberweisung(ueberweisungDaten({ facharztpraxis: "Praxis Dr. Beispiel, Lübbecke" })),
    ).toEqual({});
    expect(
      pruefeUeberweisung(ueberweisungDaten({ facharztpraxis: "x".repeat(201) })),
    ).toHaveProperty("facharztpraxis");
  });
});

describe("istBot", () => {
  it("gefülltes Honigtopf-Feld entlarvt Bots", () => {
    const fd = rezeptDaten({ webseite: "https://spam.example" });
    expect(istBot(fd)).toBe(true);
    expect(istBot(rezeptDaten())).toBe(false);
  });
});
