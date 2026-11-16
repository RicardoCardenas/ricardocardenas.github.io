import { test, expect } from '@playwright/test';

test.describe('Navegación e Interacción del Portafolio', () => {
  test('carga la página principal, muestra el perfil y navega al catálogo', async ({ page }) => {
    await page.goto('/');

    // Verifica el título y nombre profesional
    await expect(page).toHaveTitle(/Ricardo Cardenas/i);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Ricardo Cardenas');

    // Navega al catálogo de proyectos
    await page.getByRole('link', { name: /catálogo completo|view.*projects|ver los 8 proyectos/i }).first().click();
    await expect(page).toHaveURL(/\/projects$/);

    // Verifica que el catálogo muestre los proyectos verificados
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/catálogo|catalog/i);
    await expect(page.getByText('Nexo — Agentic GraphRAG')).toBeVisible();

    // Navega al estudio de caso de Nexo
    await page.getByRole('link', { name: /ver caso de estudio|view case study/i }).first().click();
    await expect(page).toHaveURL(/\/projects\/nexo-agentic-graphrag$/);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Nexo');

    // Verifica que Nexo no tenga enlace a código de GitHub y muestre badge de tesis
    await expect(page.getByText(/tesis upc|upc thesis/i).first()).toBeVisible();
    await expect(page.locator('#main-content').getByRole('link', { name: /github/i })).toHaveCount(0);
  });

  test('permite alternar el idioma entre Español e Inglés dinámicamente', async ({ page }) => {
    await page.goto('/');

    const enButton = page.getByRole('button', { name: 'EN' }).first();
    await enButton.click();

    // Comprueba que los textos cambien a inglés
    await expect(page.getByRole('link', { name: /explore projects/i })).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    // Regresa a español
    const esButton = page.getByRole('button', { name: 'ES' }).first();
    await esButton.click();

    await expect(page.getByRole('link', { name: /explorar proyectos/i })).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  });

  test('no presenta desbordamiento horizontal en viewport móvil', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasHorizontalOverflow).toBe(false);
  });
});
