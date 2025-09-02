
import { test, expect } from '@playwright/test';

test('lomake: label-for sidonta, tyypit, method/action ja submit', async ({ page }) => {
  await page.goto('/form.html');
  const form = page.locator('main form');
  await expect(form).toHaveCount(1);

  // Vähintään yksi label-for sidonta toimii
  const emailControl = page.getByLabel(/sähköposti/i);
  await expect(emailControl).toBeVisible();

  // method & action
  await expect(form).toHaveAttribute('method', /post|get/i);
  const action = await form.getAttribute('action');
  expect(action).toBeTruthy();

  // submit-painike
  await expect(form.getByRole('button')).toBeVisible();
});
