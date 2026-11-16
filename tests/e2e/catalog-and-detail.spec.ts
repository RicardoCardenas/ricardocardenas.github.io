import { test, expect } from '@playwright/test';

test.describe('Fase 2B: Catálogo de Proyectos & Estudios de Caso', () => {
  test('filtra proyectos por categoría y conteo reactivo', async ({ page }) => {
    await page.goto('/projects');

    // 1. Título principal
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/catálogo|catalog/i);

    // 2. Todos los 8 proyectos visibles inicialmente
    await expect(page.getByRole('link', { name: /nexo/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /capital cruise/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /talestar/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /meditrack/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /thelook/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /customer churn/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /jobsy/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /onecoin/i }).first()).toBeVisible();

    // 3. Filtro Data & AI (TheLook, Churn, Nexo, Jobsy)
    const dataButton = page.getByRole('button', { name: /data & ai/i });
    await dataButton.click();
    await expect(page.getByRole('link', { name: /thelook/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /customer churn/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /capital cruise/i }).first()).not.toBeVisible();

    // 4. Filtro Mobile (Solo TaleStar)
    const mobileButton = page.getByRole('button', { name: /mobile/i });
    await mobileButton.click();
    await expect(page.getByRole('link', { name: /talestar/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /thelook/i }).first()).not.toBeVisible();

    // 5. Restablece filtro a Todos
    const allButton = page.getByRole('button', { name: /^(todos|all)/i });
    await allButton.click();
    await expect(page.getByRole('link', { name: /capital cruise/i }).first()).toBeVisible();
  });

  test('búsqueda reactiva, botón de limpiar y estado vacío', async ({ page }) => {
    await page.goto('/projects');

    const searchInput = page.getByRole('textbox', { name: /buscar proyectos|search projects/i });
    await searchInput.fill('Spring Boot');

    // Debe mostrar proyectos con Spring Boot (Capital Cruise y MediTrack)
    await expect(page.getByRole('link', { name: /capital cruise/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /meditrack/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /thelook/i }).first()).not.toBeVisible();

    // Limpia con botón X
    const clearButton = page.getByRole('button', { name: /limpiar búsqueda|clear search/i });
    await expect(clearButton).toBeVisible();
    await clearButton.click();
    await expect(searchInput).toHaveValue('');
    await expect(page.getByRole('link', { name: /thelook/i }).first()).toBeVisible();

    // Prueba estado vacío ante término inexistente
    await searchInput.fill('tecnologia_completamente_inexistente_xyz');
    await expect(page.getByText(/no (se encontraron proyectos|matching projects)/i)).toBeVisible();

    // Botón de restablecer filtros en EmptyState
    const resetFiltersButton = page.getByRole('button', { name: /limpiar filtros|clear filters/i });
    await resetFiltersButton.click();
    await expect(searchInput).toHaveValue('');
    await expect(page.getByRole('link', { name: /capital cruise/i }).first()).toBeVisible();
  });

  test('caso de estudio Nexo: respeta estrictamente la privacidad académica', async ({ page }) => {
    await page.goto('/projects/nexo-agentic-graphrag');

    // 1. Título y badges
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Nexo — Agentic GraphRAG');
    await expect(page.getByText(/tesis upc|upc thesis/i).first()).toBeVisible();

    // 2. Banner de propiedad intelectual y reserva
    await expect(page.getByText(/reserva de investigación|research reservation/i).first()).toBeVisible();

    // 3. Ausencia estricta de enlace a GitHub dentro del caso de estudio
    await expect(page.locator('#main-content').getByRole('link', { name: /github/i })).not.toBeVisible();

    // 4. Indicador de código privado
    await expect(page.getByText(/código fuente privado|private codebase/i).first()).toBeVisible();

    // 5. Presencia de arquitectura, métricas y decisiones técnicas
    await expect(page.getByText(/FastAPI Modular Monolith/i).first()).toBeVisible();
    await expect(page.getByText(/PostgreSQL 16/i).first()).toBeVisible();
    await expect(page.getByText(/Neo4j 5 Community/i).first()).toBeVisible();
    await expect(page.getByText(/Bounded Contexts DDD/i).first()).toBeVisible();
    await expect(page.getByText(/ADR-01/i).first()).toBeVisible();

    // 6. Diferenciación visual estricta: LangGraph está marcado como PLANIFICADO, no implementado
    await expect(page.getByText('LangGraph Orchestrator').first()).toBeVisible();
    await expect(page.locator('span', { hasText: /^(planificado|planned)$/i }).first()).toBeVisible();

    // 7. Diferenciación explícita: Implementado vs Planificado
    await expect(page.getByRole('heading', { name: /funcionalidades implementadas|implemented features/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /fases \/ tareas planificadas|planned roadmaps/i })).toBeVisible();
  });

  test('caso de estudio Capital Cruise: renderiza motor financiero y enlace GitHub', async ({ page }) => {
    await page.goto('/projects/capital-cruise');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('Capital Cruise');
    const githubLink = page.locator('#main-content').getByRole('link', { name: /github/i }).first();
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', /github\.com\/RicardoCardenas\/Capital-Cruise/);

    // Métricas verificadas y arquitectura
    await expect(page.getByText('PEN / USD')).toBeVisible();
    await expect(page.getByText(/Método Francés|French Method/i).first()).toBeVisible();
    await expect(page.getByText('BigDecimal', { exact: true })).toBeVisible();
    await expect(page.getByText('Flyway').first()).toBeVisible();
    await expect(page.getByText(/Spring Boot 3.5 Core Engine/i)).toBeVisible();
    await expect(page.getByText(/PostgreSQL \+ Flyway/i)).toBeVisible();
    await expect(page.getByText(/ADR-01/i)).toBeVisible();
  });

  test('caso de estudio TaleStar Mobile: renderiza métricas y galería visual', async ({ page }) => {
    await page.goto('/projects/talestar-mobile');

    await expect(page.getByRole('heading', { level: 1 })).toContainText('TaleStar Mobile');
    await expect(page.getByText('351', { exact: true })).toBeVisible();
    await expect(page.getByText(/tests automatizados|automated tests/i).first()).toBeVisible();

    // Galería visual con imágenes de ARCore
    const galleryImage = page.locator('img[src*="talestar-ar.png"]').first();
    await expect(galleryImage).toBeVisible();

    // Arquitectura y decisiones
    await expect(page.getByText(/ARCore Native Bridge/i).first()).toBeVisible();
    await expect(page.getByText(/GoRouter 14.8 & PopScope/i)).toBeVisible();
  });

  test('verificación de ausencia de overflow horizontal en catálogo y detalle', async ({ page }) => {
    const viewports = [
      { width: 320, height: 600 },
      { width: 390, height: 844 },
      { width: 768, height: 1024 },
      { width: 1440, height: 900 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);

      // Catálogo
      await page.goto('/projects');
      const catalogOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(catalogOverflow).toBe(0);

      // Detalle Nexo
      await page.goto('/projects/nexo-agentic-graphrag');
      const nexoOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth
      );
      expect(nexoOverflow).toBe(0);
    }
  });

  test('generación automatizada de capturas visuales de alta resolución de Fase 2B', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name === 'Mobile Chrome', 'High-res captures are generated by Desktop Chrome project');
    // 1. Catálogo Desktop Claro
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'light');
    });
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');
    const catalogLightBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
    expect(catalogLightBg).toBe('rgb(255, 255, 255)');
    await page.screenshot({
      path: 'docs/reports/screenshots/catalog-desktop-light-1440.png',
      fullPage: true,
    });

    // 2. Catálogo Desktop Oscuro
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'dark');
    });
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');
    const catalogDarkBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
    expect(catalogDarkBg).toBe('rgb(9, 9, 11)');
    await page.screenshot({
      path: 'docs/reports/screenshots/catalog-desktop-dark-1440.png',
      fullPage: true,
    });

    // 3. Catálogo Móvil Claro y Oscuro (390px)
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'light');
    });
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: 'docs/reports/screenshots/catalog-mobile-light-390.png',
      fullPage: true,
    });

    await page.emulateMedia({ colorScheme: 'dark' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'dark');
    });
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: 'docs/reports/screenshots/catalog-mobile-dark-390.png',
      fullPage: true,
    });

    // 4. Detalle Nexo Desktop Claro & Oscuro (1440px)
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'light');
    });
    await page.goto('/projects/nexo-agentic-graphrag');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: 'docs/reports/screenshots/nexo-detail-desktop-light-1440.png',
      fullPage: true,
    });

    await page.emulateMedia({ colorScheme: 'dark' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'dark');
    });
    await page.goto('/projects/nexo-agentic-graphrag');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: 'docs/reports/screenshots/nexo-detail-desktop-dark-1440.png',
      fullPage: true,
    });

    // 5. Detalle Nexo Móvil Oscuro (390px)
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({
      path: 'docs/reports/screenshots/nexo-detail-mobile-dark-390.png',
      fullPage: true,
    });

    // 6. Detalle Capital Cruise Desktop Claro & Oscuro (1440px)
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'light');
    });
    await page.goto('/projects/capital-cruise');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: 'docs/reports/screenshots/capital-cruise-detail-desktop-light-1440.png',
      fullPage: true,
    });

    await page.emulateMedia({ colorScheme: 'dark' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'dark');
    });
    await page.goto('/projects/capital-cruise');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: 'docs/reports/screenshots/capital-cruise-detail-desktop-dark-1440.png',
      fullPage: true,
    });

    // 7. Detalle TaleStar Mobile Desktop Claro & Oscuro (1440px)
    await page.emulateMedia({ colorScheme: 'light' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'light');
    });
    await page.goto('/projects/talestar-mobile');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: 'docs/reports/screenshots/talestar-detail-desktop-light-1440.png',
      fullPage: true,
    });

    await page.emulateMedia({ colorScheme: 'dark' });
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-theme', 'dark');
    });
    await page.goto('/projects/talestar-mobile');
    await page.waitForLoadState('networkidle');
    await page.screenshot({
      path: 'docs/reports/screenshots/talestar-detail-desktop-dark-1440.png',
      fullPage: true,
    });
  });
});
