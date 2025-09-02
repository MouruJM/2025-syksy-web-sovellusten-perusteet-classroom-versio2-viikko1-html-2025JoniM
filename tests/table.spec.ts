
import { test, expect } from '@playwright/test';

test('taulukossa on caption + thead + tbody', async ({ page }) => {
  // Avaa sivu; muuta osoitetta kurssin asetusten mukaan
  await page.goto('/table.html');

  const table = page.locator('table');
  await expect(table).toHaveCount(1);

  await expect(table.locator('caption')).toHaveCount(1);
  await expect(table.locator('thead')).toHaveCount(1);
  await expect(table.locator('tbody')).toHaveCount(1);

  // tbody-rivien määrä > 0
  const rowCount = await table.locator('tbody tr').count();
  expect(rowCount).toBeGreaterThan(0);
});

