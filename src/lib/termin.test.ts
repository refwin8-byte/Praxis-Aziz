import { afterEach, describe, expect, it } from "vitest";
import { terminBuchung } from "./termin";

const env = process.env;

function setze(werte: Record<string, string | undefined>) {
  for (const [k, v] of Object.entries(werte)) {
    if (v === undefined) delete env[k];
    else env[k] = v;
  }
}

afterEach(() =>
  setze({
    APPOINTMENT_PROVIDER_URL: undefined,
    APPOINTMENT_PROVIDER_NAME: undefined,
    APPOINTMENT_EMBED_ENABLED: undefined,
  }),
);

describe("terminBuchung", () => {
  it("ohne Konfiguration gibt es keine Onlinebuchung", () => {
    expect(terminBuchung()).toBeNull();
  });

  it("URL ohne Anbieternamen reicht nicht — der Name steht sichtbar am Link", () => {
    setze({ APPOINTMENT_PROVIDER_URL: "https://www.doctolib.de/praxis-x" });
    expect(terminBuchung()).toBeNull();
  });

  it("nur https-Adressen werden akzeptiert", () => {
    setze({
      APPOINTMENT_PROVIDER_URL: "http://unsicher.example",
      APPOINTMENT_PROVIDER_NAME: "Anbieter",
    });
    expect(terminBuchung()).toBeNull();
  });

  it("vollständige Konfiguration ergibt den Buchungsweg, Embed standardmäßig aus", () => {
    setze({
      APPOINTMENT_PROVIDER_URL: "https://www.doctolib.de/praxis-x",
      APPOINTMENT_PROVIDER_NAME: "Doctolib",
    });
    expect(terminBuchung()).toEqual({
      url: "https://www.doctolib.de/praxis-x",
      anbieter: "Doctolib",
      embed: false,
    });
  });

  it("Embed nur bei ausdrücklichem \"true\"", () => {
    setze({
      APPOINTMENT_PROVIDER_URL: "https://www.doctolib.de/praxis-x",
      APPOINTMENT_PROVIDER_NAME: "Doctolib",
      APPOINTMENT_EMBED_ENABLED: "1",
    });
    expect(terminBuchung()?.embed).toBe(false);
    setze({ APPOINTMENT_EMBED_ENABLED: "true" });
    expect(terminBuchung()?.embed).toBe(true);
  });
});
