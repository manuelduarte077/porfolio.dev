import { describe, expect, it } from "vitest";
import { en } from "./en";
import { es } from "./es";

describe("locales", () => {
  it("en and es expose the same translation keys", () => {
    const enKeys = Object.keys(en).sort();
    const esKeys = Object.keys(es).sort();
    expect(esKeys).toEqual(enKeys);
  });
});
