
import { test, expect } from '@playwright/test';

const pages = ['/', '/table.html', '/form.html', '/image.html'];

for (const path of pages) {
  test(`navigaatio näkyy ja linkit olemassa – ${path}`, async ({ page }) => {
    await page.goto(path);
    const nav = page.getByRole('navigation', { name: /päävalikko/i });
    await expect(nav).toBeVisible();

    // Linkkien nimet ja reitit pitää löytyä
    await expect(page.getByRole('link', { name: /etusivu/i })).toHaveAttribute('href', /index\.html$/);
    await expect(page.getByRole('link', { name: /taulukko/i })).toHaveAttribute('href', /table\.html$/);
    await expect(page.getByRole('link', { name: /lomake/i })).toHaveAttribute('href', /form\.html$/);
    await expect(page.getByRole('link', { name: /kuva/i })).toHaveAttribute('href', /image\.html$/);
  });
}
