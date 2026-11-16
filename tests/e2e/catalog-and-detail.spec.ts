import { test, expect } from '@playwright/test';

test.describe('Catálogo y Detalle de Proyectos', () => {
  test('filtra proyectos por categoría y búsqueda reactiva', async ({ page }) => {
    await page.goto('/projects');

    // 1. Verifica título de la página
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/catálogo|catalog/i);

    // 2. Filtra por categoría "Data & AI"
    const dataButton = page.getByRole('button', { name: /data & ai/i });
    await dataButton.click();

    // TheLook debe ser visible
    await expect(page.getByRole('heading', { name: /thelook/i })).toBeVisible();

    // Restablece filtro a "Todos" para buscar libremente
    const allButton = page.getByRole('button', { name: /^(todos|all) \(\d+\)/i });
    await allButton.click();

    // 3. Filtra por búsqueda de texto
    const searchInput = page.getByRole('textbox', { name: /buscar proyectos|search projects/i });
    await searchInput.fill('Capital Cruise');

    // Capital Cruise debe ser visible
    await expect(page.getByRole('heading', { name: /capital cruise/i })).toBeVisible();

    // 4. Limpia la búsqueda con botón X
    const clearButton = page.getByRole('button', { name: /limpiar búsqueda/i });
    if (await clearButton.isVisible()) {
      await clearButton.click();
      await expect(searchInput).toHaveValue('');
    }
  });

  test('muestra el caso de estudio de Nexo respetando la privacidad académica', async ({ page }) => {
    await page.goto('/projects/nexo-agentic-graphrag');

    // 1. Verifica título
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Nexo — Agentic GraphRAG');

    // 2. Verifica badge de Tesis UPC
    await expect(page.getByText(/tesis upc|upc thesis/i).first()).toBeVisible();

    // 3. Verifica aviso de reserva de investigación
    await expect(page.getByText(/reserva de investigación|research reservation/i).first()).toBeVisible();

    // 4. Verifica ausencia de enlace a GitHub dentro del caso de estudio
    await expect(page.locator('#main-content').getByRole('link', { name: /github/i })).not.toBeVisible();

    // 5. Verifica navegación por breadcrumbs de retorno al catálogo
    const catalogBreadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' }).getByRole('link', { name: /catálogo|catalog/i });
    await catalogBreadcrumb.click();
    await expect(page).toHaveURL(/\/projects$/);
  });

  test('permite navegar al detalle de Capital Cruise con enlace a GitHub', async ({ page }) => {
    await page.goto('/projects/capital-cruise');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Capital Cruise');
    const githubLink = page.getByRole('link', { name: /github/i }).first();
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', /github\.com\/RicardoCardenas\/Capital-Cruise/);
  });
});
