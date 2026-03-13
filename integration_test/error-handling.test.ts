import { describe, test, expect } from "bun:test";
import { extractBrandAssets } from "../src";

describe("error handling", () => {
  test("invalid URL throws", async () => {
    await expect(
      extractBrandAssets("https://this-domain-does-not-exist-xyz123.com")
    ).rejects.toThrow();
  }, 30000);

  test("404 URL throws", async () => {
    await expect(
      extractBrandAssets("https://github.com/this-page-does-not-exist-404-test")
    ).rejects.toThrow();
  }, 30000);

  test("minimal HTML page returns null or minimal result", async () => {
    // example.com has very little useful content
    const result = await extractBrandAssets("https://example.com");

    // Should return a valid shape even for minimal sites
    if (result !== null) {
      expect(result).toHaveProperty("brand_name");
      expect(result).toHaveProperty("logos");
      expect(result).toHaveProperty("colors");
      expect(result).toHaveProperty("backdrop_images");
    }
  }, 30000);
});
