
import { test, expect } from '@playwright/test';

const paths = ['/', '/table.html', '/form.html', '/image.html'];

for (const path of paths) {
  test(`semanttinen runko ja yksi h1 – ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('header')).toHaveCount(1);
    await expect(page.locator('main')).toHaveCount(1);
    await expect(page.locator('footer')).toHaveCount(1);
    await expect(page.locator('h1')).toHaveCount(1);
  });

  test(`kieli ja merkistö – ${path}`, async ({ page }) => {
    await page.goto(path);
    const lang = await page.evaluate(() => document.documentElement.lang);
    expect(lang.toLowerCase()).toBeTruthy();
    const hasUtf8 = await page.evaluate(() => !!document.querySelector('meta[charset="UTF-8" i]'));
    expect(hasUtf8).toBeTruthy();
  });
}
