
import { test, expect } from '@playwright/test';

test('kuva: alt-teksti on olemassa', async ({ page }) => {
  await page.goto('/image.html');
  const img = page.locator('main img');
  await expect(img).toHaveCount(1);
  const alt = await img.getAttribute('alt');
  expect(alt).toBeDefined();
  expect(alt?.trim()).not.toEqual('');
});
