import { test, expect } from "@chromatic-com/playwright";

test("Homepage", async ({ page }) => {
  await page.goto("https://mealexpress.com/");
  await expect(page).toHaveTitle(/Meal/i);
});