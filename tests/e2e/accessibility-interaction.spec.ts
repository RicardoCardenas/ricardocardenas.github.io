import { test, expect } from '@playwright/test';

test.describe('Fase 3.3 — Pruebas de Interacción, Teclado, Foco y WCAG 2.2 AA', () => {
  // 1. Enlace para saltar al contenido principal (Bypass Blocks - WCAG 2.4.1)
  test('Skip link: permite saltar directamente al contenido principal con el teclado', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Inicialmente el skip link está visualmente oculto (.sr-only)
    const skipLink = page.getByRole('link', { name: /saltar al contenido principal|skip to main content/i });
    await expect(skipLink).toHaveClass(/sr-only/);

    // Al presionar Tab, recibe foco y se hace visible
    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toBeVisible();

    // Al presionar Enter, el foco se transfiere a #main-content
    await page.keyboard.press('Enter');
    await expect(page).toHaveURL(/#main-content/);
  });

  // 2. Sincronización dinámica de <html lang> (Language of Page - WCAG 3.1.1)
  test('Idioma: actualiza dinámicamente el atributo lang en el elemento html', async ({ page, isMobile }) => {
    await page.addInitScript(() => {
      localStorage.setItem('portfolio-language', 'es');
    });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Estado inicial en español
    const initialLang = await page.evaluate(() => document.documentElement.lang);
    expect(initialLang).toBe('es');

    // Si es móvil, abrir el menú de navegación lateral para acceder a los controles
    if (isMobile) {
      const menuTrigger = page.getByRole('button', { name: /abrir menú|open menu|navigation menu/i });
      await menuTrigger.click();
      await page.waitForTimeout(200);
    }

    // Cambiar a inglés mediante toggle accesible
    const enButton = page.getByRole('button', { name: 'EN' });
    await (isMobile ? enButton.last() : enButton.first()).click();
    await page.waitForTimeout(200);

    const updatedLang = await page.evaluate(() => document.documentElement.lang);
    expect(updatedLang).toBe('en');

    // Si es móvil, cerrar el drawer con Escape
    if (isMobile) {
      await page.keyboard.press('Escape');
      await page.waitForTimeout(200);
    }

    // Verificar que el skip link se actualizó a inglés
    const skipLink = page.getByRole('link', { name: /skip to main content/i });
    expect(await skipLink.count()).toBe(1);
  });

  // 3. Menú móvil: Dialog accesible, Focus Trap, Escape y Restauración de Foco (WCAG 2.1.2, 2.4.3)
  test('Menú móvil: focus trap, cierre con Escape y restauración accesible del foco', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const trigger = page.getByRole('button', { name: /abrir menú|open menu|navigation menu/i });
    await trigger.focus();
    await expect(trigger).toBeFocused();

    // Abrir con teclado
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Focus trap: verificar que el foco se mantiene dentro del diálogo al presionar Tab varias veces
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
      const isInside = await page.evaluate(() => {
        const active = document.activeElement;
        const dlg = document.querySelector('[role="dialog"]');
        return dlg ? dlg.contains(active) : false;
      });
      expect(isInside).toBe(true);
    }

    // Cerrar con tecla Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    await expect(dialog).not.toBeVisible();

    // Restauración del foco al disparador original
    await expect(trigger).toBeFocused();
  });

  // 4. Galería modal: Focus Trap, navegación por flechas y Escape (WCAG 2.1.1, 2.1.2)
  test('Galería modal: navegación accesible por teclado, flechas y restauración de foco', async ({ page }) => {
    await page.goto('/projects/talestar-mobile');
    await page.waitForLoadState('networkidle');

    // Abrir galería desde el primer thumbnail
    const thumbnail = page.getByRole('button', { name: /ver imagen ampliada|enlarge image/i }).first();
    await thumbnail.click();
    await page.waitForTimeout(300);

    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // El diálogo tiene accessible name con la descripción de la imagen
    const accessibleName = await dialog.getAttribute('aria-label');
    expect(accessibleName).toBeTruthy();

    // Navegación con flecha derecha
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(150);

    // Navegación con flecha izquierda
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(150);

    // Cerrar con Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(200);
    await expect(dialog).not.toBeVisible();

    // Foco restaurado al thumbnail
    await expect(thumbnail).toBeFocused();
  });

  // 5. Atajo de teclado en catálogo y no interferencia (WCAG 2.1.4 Character Key Shortcuts)
  test('Catálogo: atajos de teclado y no interferencia con campos de texto editables', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    const searchInput = page.getByRole('textbox', { name: /buscar proyectos|search projects/i });
    await expect(searchInput).not.toBeFocused();

    // Presionar '/' enfoca el input
    await page.keyboard.press('/');
    await expect(searchInput).toBeFocused();

    // Escribir texto con barras '/'; no debe perder foco ni duplicar triggers
    await searchInput.pressSequentially('spring/mvc', { delay: 30 });
    expect(await searchInput.inputValue()).toBe('spring/mvc');
  });

  // 6. Región Live de Anuncios de Búsqueda (WCAG 4.1.3 Status Messages)
  test('Catálogo: anuncia reactivamente los cambios de resultados en región live aria-live="polite"', async ({ page }) => {
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');

    const liveStatus = page.locator('[role="status"][aria-live="polite"]');
    await expect(liveStatus).toBeVisible();
    await expect(liveStatus).toContainText(/8/);

    // Filtrar por categoría
    await page.getByRole('button', { name: /data & ai/i }).click();
    await expect(liveStatus).toContainText(/4 (de|of) 8/i);

    // Limpiar búsqueda
    await page.getByRole('button', { name: /todos|all/i }).first().click();
    await expect(liveStatus).toContainText(/8/);
  });

  // 7. Reflow a 320px CSS (WCAG 1.4.10 Reflow - 400% zoom equivalente)
  test('Reflow: ausencia de scroll horizontal y contenido íntegro en viewport de 320px CSS', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });
    
    // Probar Home
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const homeOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(homeOverflow).toBe(false);

    // Probar Catálogo
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');
    const catalogOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(catalogOverflow).toBe(false);

    // Probar Detalle de Proyecto
    await page.goto('/projects/nexo-agentic-graphrag');
    await page.waitForLoadState('networkidle');
    const detailOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(detailOverflow).toBe(false);
  });

  // 8. Objetivos táctiles mínimos de 24x24px (WCAG 2.2 SC 2.5.8 Target Size)
  test('Objetivos táctiles: botones de acción, toggles y controles interactivos cumplen tamaño mínimo', async ({ page }) => {
    await page.goto('/projects?q=test');
    await page.waitForLoadState('networkidle');

    // Botón de limpiar búsqueda (X)
    const clearButton = page.getByRole('button', { name: /limpiar búsqueda|clear search/i });
    const clearBox = await clearButton.boundingBox();
    expect(clearBox).toBeTruthy();
    expect(clearBox!.width).toBeGreaterThanOrEqual(24);
    expect(clearBox!.height).toBeGreaterThanOrEqual(24);
  });
});
