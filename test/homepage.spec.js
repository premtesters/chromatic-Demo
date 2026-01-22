import { test, expect } from "@chromatic-com/playwright";

test("Homepage", async ({ page }) => {
  await page.goto("https://www.google.com/");
  //await expect(page).toHaveTitle(/Mal/i);
});