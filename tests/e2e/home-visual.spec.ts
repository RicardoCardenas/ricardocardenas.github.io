import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const screenshotsDir = path.resolve('docs/reports/screenshots');

test.beforeAll(() => {
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
});

test.describe('Revisión Visual de la Home', () => {
  // 1. Desktop 1440px - Modo Claro
  test('captura Home Desktop en Modo Claro (1440px)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    // Asegurar tema claro
    await page.evaluate(() => {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ricardo-portfolio-theme', 'light');
    });
    await page.reload();

    // Validar sin desbordamiento horizontal
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);

    // Captura completa
    await page.screenshot({
      path: path.join(screenshotsDir, 'home-desktop-light-1440.png'),
      fullPage: true,
    });
  });

  // 2. Desktop 1440px - Modo Oscuro
  test('captura Home Desktop en Modo Oscuro (1440px)', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    // Activar tema oscuro
    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ricardo-portfolio-theme', 'dark');
    });
    await page.reload();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);

    await page.screenshot({
      path: path.join(screenshotsDir, 'home-desktop-dark-1440.png'),
      fullPage: true,
    });
  });

  // 3. Tablet 768px - Modo Claro
  test('captura Home Tablet en Modo Claro (768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    await page.evaluate(() => {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ricardo-portfolio-theme', 'light');
    });
    await page.reload();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);

    await page.screenshot({
      path: path.join(screenshotsDir, 'home-tablet-light-768.png'),
      fullPage: true,
    });
  });

  // 4. Mobile 390px - Modo Claro
  test('captura Home Móvil en Modo Claro (390px)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await page.evaluate(() => {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ricardo-portfolio-theme', 'light');
    });
    await page.reload();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);

    await page.screenshot({
      path: path.join(screenshotsDir, 'home-mobile-light-390.png'),
      fullPage: true,
    });
  });

  // 5. Mobile 390px - Modo Oscuro
  test('captura Home Móvil en Modo Oscuro (390px)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await page.evaluate(() => {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ricardo-portfolio-theme', 'dark');
    });
    await page.reload();

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);

    await page.screenshot({
      path: path.join(screenshotsDir, 'home-mobile-dark-390.png'),
      fullPage: true,
    });
  });
});
