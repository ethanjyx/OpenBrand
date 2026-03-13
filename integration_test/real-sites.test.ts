import { describe, test, expect } from "bun:test";
import { extractBrandAssets } from "../src";

describe("real site extraction", () => {
  test("github.com — extracts brand name, logos, and colors", async () => {
    const result = await extractBrandAssets("https://github.com");

    expect(result).not.toBeNull();
    expect(result!.brand_name).toBeString();
    expect(result!.brand_name.length).toBeGreaterThan(0);
    expect(result!.logos.length).toBeGreaterThanOrEqual(1);

    for (const logo of result!.logos) {
      expect(logo.url).toBeString();
      expect(logo.url.length).toBeGreaterThan(0);
    }

    for (const color of result!.colors) {
      expect(color.hex).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  }, 30000);

  test("stripe.com — extracts logos, colors, and backdrop images", async () => {
    const result = await extractBrandAssets("https://stripe.com");

    expect(result).not.toBeNull();
    expect(result!.brand_name).toBeString();
    expect(result!.brand_name.length).toBeGreaterThan(0);
    expect(result!.logos.length).toBeGreaterThanOrEqual(1);

    for (const logo of result!.logos) {
      expect(logo.url).toBeString();
      expect(logo.url.length).toBeGreaterThan(0);
    }

    for (const color of result!.colors) {
      expect(color.hex).toMatch(/^#[0-9a-fA-F]{6}$/);
    }

    for (const backdrop of result!.backdrop_images) {
      expect(backdrop.url).toBeString();
      expect(backdrop.url.length).toBeGreaterThan(0);
    }
  }, 30000);

  test("example.com — minimal site still returns valid result", async () => {
    const result = await extractBrandAssets("https://example.com");

    expect(result).not.toBeNull();
    expect(result!.brand_name).toBeString();
    expect(Array.isArray(result!.logos)).toBe(true);
    expect(Array.isArray(result!.colors)).toBe(true);
    expect(Array.isArray(result!.backdrop_images)).toBe(true);
  }, 30000);
});
