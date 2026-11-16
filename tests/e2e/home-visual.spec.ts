import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const screenshotsDir = path.resolve('docs/reports/screenshots');

test.beforeAll(() => {
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
});

test.describe('Revisión Visual y Verificación de Tema de la Home', () => {
  // 1. Desktop 1440px - Modo Claro
  test('captura Home Desktop en Modo Claro (1440px)', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Mobile Chrome', 'Desktop screenshot handled by Desktop Chrome project');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'light' });

    // Configurar preferencia persistida oficial antes de que cargue la app y el script anti-FOUT
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'light');
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#hero')).toBeVisible();

    // 1. Verificar que html NO tenga la clase dark
    const hasDarkClass = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(hasDarkClass).toBe(false);

    // 2. Verificar que el color computado del fondo sea blanco (#ffffff)
    const bodyBg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundColor
    );
    expect(bodyBg).toBe('rgb(255, 255, 255)');

    // 3. Validar ausencia de desbordamiento horizontal
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);

    // 4. Captura viewport inicial (Hero)
    await page.screenshot({
      path: path.join(screenshotsDir, 'hero-desktop-light-1440.png'),
      fullPage: false,
    });

    // 5. Captura completa
    await page.screenshot({
      path: path.join(screenshotsDir, 'home-desktop-light-1440.png'),
      fullPage: true,
    });
  });

  // 2. Desktop 1440px - Modo Oscuro
  test('captura Home Desktop en Modo Oscuro (1440px)', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Mobile Chrome', 'Desktop screenshot handled by Desktop Chrome project');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'dark' });

    // Configurar preferencia persistida en dark antes del script anti-FOUT
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'dark');
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#hero')).toBeVisible();

    // 1. Verificar que html SÍ tenga la clase dark
    const hasDarkClass = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(hasDarkClass).toBe(true);

    // 2. Verificar que el color computado del fondo sea neutro profundo (#09090b -> rgb(9, 9, 11))
    const bodyBg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundColor
    );
    expect(bodyBg).toBe('rgb(9, 9, 11)');
    expect(bodyBg).not.toBe('rgb(255, 255, 255)');

    // 3. Validar ausencia de desbordamiento horizontal
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);

    // 4. Captura viewport inicial (Hero)
    await page.screenshot({
      path: path.join(screenshotsDir, 'hero-desktop-dark-1440.png'),
      fullPage: false,
    });

    // 5. Captura completa
    await page.screenshot({
      path: path.join(screenshotsDir, 'home-desktop-dark-1440.png'),
      fullPage: true,
    });
  });

  // 3. Tablet 768px - Modo Claro
  test('captura Home Tablet en Modo Claro (768px)', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Mobile Chrome', 'Tablet screenshot handled by Desktop Chrome project');
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.emulateMedia({ colorScheme: 'light' });

    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'light');
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#hero')).toBeVisible();

    const bodyBg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundColor
    );
    expect(bodyBg).toBe('rgb(255, 255, 255)');

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
  test('captura Home Móvil en Modo Claro (390px)', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Desktop Chrome', 'Mobile screenshot handled by Mobile Chrome project');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ colorScheme: 'light' });

    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'light');
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#hero')).toBeVisible();

    const bodyBg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundColor
    );
    expect(bodyBg).toBe('rgb(255, 255, 255)');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);

    // Captura primer viewport móvil
    await page.screenshot({
      path: path.join(screenshotsDir, 'hero-mobile-light-390.png'),
      fullPage: false,
    });

    // Captura completa móvil
    await page.screenshot({
      path: path.join(screenshotsDir, 'home-mobile-light-390.png'),
      fullPage: true,
    });
  });

  // 5. Mobile 390px - Modo Oscuro
  test('captura Home Móvil en Modo Oscuro (390px)', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Desktop Chrome', 'Mobile screenshot handled by Mobile Chrome project');
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ colorScheme: 'dark' });

    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'dark');
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('#hero')).toBeVisible();

    const hasDarkClass = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );
    expect(hasDarkClass).toBe(true);

    const bodyBg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundColor
    );
    expect(bodyBg).toBe('rgb(9, 9, 11)');
    expect(bodyBg).not.toBe('rgb(255, 255, 255)');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);

    // Captura primer viewport móvil
    await page.screenshot({
      path: path.join(screenshotsDir, 'hero-mobile-dark-390.png'),
      fullPage: false,
    });

    // Captura completa móvil
    await page.screenshot({
      path: path.join(screenshotsDir, 'home-mobile-dark-390.png'),
      fullPage: true,
    });
  });

  // 6. Mobile 320px - Verificación de no desbordamiento en pantalla ultra-compacta
  test('verifica ausencia de overflow en móvil ultra-compacto (320px)', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 600 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(overflow).toBe(false);
  });

  // 7. Projects Catalog Desktop 1440px - Modo Claro
  test('captura Catálogo Desktop en Modo Claro (1440px)', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Mobile Chrome', 'Desktop catalog screenshot handled by Desktop Chrome project');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'light' });

    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'light');
    });

    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    const bodyBg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundColor
    );
    expect(bodyBg).toBe('rgb(255, 255, 255)');

    await page.screenshot({
      path: path.join(screenshotsDir, 'catalog-desktop-light-1440.png'),
      fullPage: true,
    });
  });

  // 8. Projects Catalog Desktop 1440px - Modo Oscuro
  test('captura Catálogo Desktop en Modo Oscuro (1440px)', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Mobile Chrome', 'Desktop catalog screenshot handled by Desktop Chrome project');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'dark' });

    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'dark');
    });

    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    const bodyBg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundColor
    );
    expect(bodyBg).toBe('rgb(9, 9, 11)');

    await page.screenshot({
      path: path.join(screenshotsDir, 'catalog-desktop-dark-1440.png'),
      fullPage: true,
    });
  });

  // 9. Project Detail (Nexo) Desktop 1440px - Modo Oscuro
  test('captura Detalle Nexo Desktop en Modo Oscuro (1440px)', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Mobile Chrome', 'Desktop detail screenshot handled by Desktop Chrome project');
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'dark' });

    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'dark');
    });

    await page.goto('/projects/nexo-agentic-graphrag');
    await page.waitForLoadState('networkidle');

    const bodyBg = await page.evaluate(
      () => window.getComputedStyle(document.body).backgroundColor
    );
    expect(bodyBg).toBe('rgb(9, 9, 11)');

    await page.screenshot({
      path: path.join(screenshotsDir, 'nexo-detail-desktop-dark-1440.png'),
      fullPage: true,
    });
  });
});
