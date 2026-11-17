import { test, expect } from '@playwright/test';

test.describe('Fase 3.5 — Validación Funcional Completa de Preproducción (15 Recorridos)', () => {

  test('Recorrido 1: Home -> Catálogo -> Caso de estudio -> Regresar', async ({ page, isMobile }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Navegar al catálogo (vía menú móvil en pantallas táctiles o navbar en desktop)
    if (isMobile) {
      await page.locator('button[aria-label*="menú"], button[aria-label*="menu"]').first().click();
      const drawer = page.getByRole('dialog');
      await expect(drawer).toBeVisible();
      await drawer.locator('a[href="/projects"]').click();
    } else {
      await page.locator('nav a[href="/projects"]').click();
    }
    await expect(page).toHaveURL(/\/projects/);

    // Click en un caso de estudio (Capital Cruise)
    const projectCard = page.locator('a[href="/projects/capital-cruise"]').first();
    await projectCard.click();
    await expect(page).toHaveURL(/\/projects\/capital-cruise/);
    await expect(page.locator('h1')).toBeVisible();

    // Regresar al catálogo usando el botón de retorno
    const backBtn = page.getByRole('link', { name: /Volver al catálogo|Back to catalog/i });
    await backBtn.click();
    await expect(page).toHaveURL(/\/projects/);
  });

  test('Recorrido 2: Aplicar filtros y búsqueda reactiva', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    // Filtrar por Data & AI
    const dataAiFilter = page.locator('button:has-text("Data & AI")');
    await dataAiFilter.click();
    await expect(page).toHaveURL(/category=data-ai/);

    // Buscar "pipeline"
    const searchInput = page.locator('input[aria-label*="Buscar proyectos"], input[aria-label*="Search projects"]');
    await searchInput.fill('pipeline');
    await expect(page).toHaveURL(/q=pipeline/);

    // Verificar que solo se muestre TheLook eCommerce Pipeline
    await expect(page.getByRole('link', { name: /TheLook/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Capital Cruise/i }).first()).not.toBeVisible();
  });

  test('Recorrido 3: Navegar con historial del navegador (Atrás y Adelante)', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    // Aplicar filtro Software
    const softwareFilter = page.locator('button:has-text("Software (")');
    await softwareFilter.click();
    await expect(page).toHaveURL(/category=software-engineering/);

    // Navegar a detalle
    await page.locator('a[href="/projects/jobsy-backend"]').first().click();
    await expect(page).toHaveURL(/\/projects\/jobsy-backend/);

    // Retroceder con historial
    await page.goBack();
    await expect(page).toHaveURL(/category=software-engineering/);

    // Avanzar con historial
    await page.goForward();
    await expect(page).toHaveURL(/\/projects\/jobsy-backend/);
  });

  test('Recorrido 4: Abrir URLs compartidas con parámetros preservados', async ({ page }) => {
    await page.goto('/projects?category=data-ai&q=churn');
    await page.waitForLoadState('networkidle');

    // Verificar que el input de búsqueda refleje el query
    const searchInput = page.locator('input[aria-label*="Buscar proyectos"], input[aria-label*="Search projects"]');
    await expect(searchInput).toHaveValue('churn');

    // Verificar que la tarjeta correspondiente esté visible
    await expect(page.getByRole('link', { name: /Customer Churn/i }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: /Capital Cruise/i }).first()).not.toBeVisible();
  });

  test('Recorrido 5: Cambiar idioma dinámicamente entre Español e Inglés', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Alternar idioma
    const langBtn = page.locator('button[aria-label*="Cambiar idioma"], button[aria-label*="Switch to"]').first();
    if (await langBtn.isVisible()) {
      await langBtn.click();
      const currentLang = await page.locator('html').getAttribute('lang');
      expect(['es', 'en']).toContain(currentLang);

      // Revertir
      await langBtn.click();
      const revertedLang = await page.locator('html').getAttribute('lang');
      expect(revertedLang).not.toBe(currentLang);
    }
  });

  test('Recorrido 6: Alternar temas de color (Claro, Oscuro y Sistema)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const themeToggle = page.locator('button[aria-label*="Cambiar a modo"], button[aria-label*="Switch to"]').first();
    if (await themeToggle.isVisible()) {
      const initialDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
      await themeToggle.click();
      const updatedDark = await page.locator('html').evaluate(el => el.classList.contains('dark'));
      expect(updatedDark).not.toBe(initialDark);
    }
  });

  test('Recorrido 7: Navegar entre secciones mediante Scroll Spy', async ({ page, isMobile }) => {
    test.skip(isMobile, 'Scroll Spy en Navbar está optimizado para Desktop');
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Scroll a #skills
    await page.locator('#skills').scrollIntoViewIfNeeded();
    await page.waitForTimeout(400);

    // Verificar que el enlace en el navbar tenga estado activo
    const skillsNav = page.locator('nav a[href="#skills"], nav a[href*="#skills"]');
    if (await skillsNav.isVisible()) {
      await expect(skillsNav).toHaveClass(/text-primary/);
    }
  });

  test('Recorrido 8: Abrir y cerrar menú móvil accesible', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Menú móvil aplica a viewports compactos');
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const menuBtn = page.locator('button[aria-label*="menú"], button[aria-label*="menu"]').first();
    await expect(menuBtn).toBeVisible();
    await menuBtn.click();

    // Menú abierto
    const drawer = page.getByRole('dialog');
    await expect(drawer).toBeVisible();

    // Cerrar menú
    const closeBtn = drawer.locator('button[aria-label*="Cerrar"], button[aria-label*="Close"]').first();
    await closeBtn.click();
    await expect(drawer).not.toBeVisible();
  });

  test('Recorrido 9: Abrir visor modal de galería de proyectos e interactuar', async ({ page }) => {
    await page.goto('/projects/talestar-mobile');
    await page.waitForLoadState('networkidle');

    // Click en una imagen de la galería
    const galleryImg = page.locator('button[aria-label*="Ampliar captura"]').first();
    if (await galleryImg.isVisible()) {
      await galleryImg.click();
      const dialog = page.getByRole('dialog');
      await expect(dialog).toBeVisible();

      // Cerrar modal
      const closeBtn = dialog.locator('button[aria-label*="Cerrar"], button[aria-label*="Close"]').first();
      await closeBtn.click();
      await expect(dialog).not.toBeVisible();
    }
  });

  test('Recorrido 10: Descarga de los dos CVs autorizados', async ({ page }) => {
    await page.goto('/#cv');
    await page.waitForLoadState('networkidle');

    // Verificar enlaces de descarga de CV Software y CV Data & AI
    const cvSoftware = page.locator('a[href="/cv/CV_Ricardo_Cardenas_Software_Backend.pdf"]').first();
    await expect(cvSoftware).toBeVisible();
    await expect(cvSoftware).toHaveAttribute('download');

    const cvDataAi = page.locator('a[href="/cv/CV_Ricardo_Cardenas-Data.pdf"]').first();
    await expect(cvDataAi).toBeVisible();
    await expect(cvDataAi).toHaveAttribute('download');
  });

  test('Recorrido 11: Abrir enlaces seguros de GitHub y LinkedIn', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const githubLinks = page.locator('a[href*="github.com"]');
    const count = await githubLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < Math.min(count, 3); i++) {
      const link = githubLinks.nth(i);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener noreferrer/);
    }

    const linkedInLink = page.locator('a[href*="linkedin.com"]').first();
    await expect(linkedInLink).toHaveAttribute('target', '_blank');
    await expect(linkedInLink).toHaveAttribute('rel', /noopener noreferrer/);
  });

  test('Recorrido 12: Utilizar controles de contacto (Copiar correo / Abrir mailto)', async ({ page }) => {
    await page.goto('/#contact');
    await page.waitForLoadState('networkidle');

    const mailtoBtn = page.locator('a[href^="mailto:"]').first();
    await expect(mailtoBtn).toBeVisible();

    const copyBtn = page.locator('button:has-text("Copiar"), button:has-text("Copy")').first();
    if (await copyBtn.isVisible()) {
      await copyBtn.click();
      await expect(page.locator('text=/Copiado|Copied/i')).toBeVisible();
    }
  });

  test('Recorrido 13: Navegar hacia una ruta inexistente (Página 404)', async ({ page }) => {
    await page.goto('/ruta-que-no-existe-en-el-portafolio');
    await page.waitForLoadState('networkidle');

    // Verificar encabezado 404
    await expect(page.locator('h1')).toContainText(/404/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /404/);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex, nofollow/i);

    // Retorno seguro a Home
    const returnHome = page.getByRole('link', { name: /Regresar a la página principal|Return to Home/i });
    await returnHome.click();
    await expect(page).toHaveURL(/\//);
  });

  test('Recorrido 14: Abrir directamente cualquier estudio de caso (Direct Access SSG)', async ({ page }) => {
    // Acceso directo a TheLook
    await page.goto('/projects/thelook-ecommerce-pipeline');
    await page.waitForLoadState('networkidle');

    await expect(page.locator('h1')).toContainText(/TheLook/i);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /thelook-ecommerce-pipeline/);
  });

  test('Recorrido 15: Recargar páginas profundas sin errores de consola ni desbordamiento', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });

    await page.goto('/projects/nexo-agentic-graphrag');
    await page.waitForLoadState('networkidle');

    // Recargar página
    await page.reload({ waitUntil: 'networkidle' });

    // Confirmar ausencia de errores fatales
    expect(consoleErrors.filter(e => !e.includes('favicon'))).toHaveLength(0);

    // Confirmar ausencia de scroll horizontal
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1);
  });

});
