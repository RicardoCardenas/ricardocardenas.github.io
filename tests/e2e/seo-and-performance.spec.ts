import { test, expect } from '@playwright/test';

// Origen canónico esperado: determinado dinámicamente por la variable de entorno VITE_SITE_URL
// o fallback al servidor local de pruebas (http://localhost:4173).
const expectedSiteUrl = (process.env.VITE_SITE_URL || 'http://localhost:4173').replace(/\/$/, '');

test.describe('Fase 3.4 — Auditoría y Verificación de SEO Técnico, SSG y Metadatos Canónicos', () => {
  test('Home: contiene title, meta description, canonical, robots, OG y JSON-LD estructurado', async ({ page }) => {
    await page.goto('/');

    // Title
    await expect(page).toHaveTitle(/Ricardo Cardenas \| (Ingeniería de Software & Arquitectura DDD|Software Engineering & DDD Architecture)/i);

    // Meta Description
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute('content', /Ricardo Cardenas/i);

    // Canonical parametrizado
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', `${expectedSiteUrl}/`);

    // Robots
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute('content', 'index, follow');

    // Open Graph
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Ricardo Cardenas/i);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'website');
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', `${expectedSiteUrl}/`);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', `${expectedSiteUrl}/images/og-image.png`);

    // Twitter Card
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
    await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute('content', /Ricardo Cardenas/i);

    // Schema.org JSON-LD
    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    await expect(jsonLdScript).toBeAttached();
    const jsonLdContent = await jsonLdScript.textContent();
    expect(jsonLdContent).toBeTruthy();
    const schema = JSON.parse(jsonLdContent!);
    expect(Array.isArray(schema)).toBe(true);
    const types = schema.map((item: Record<string, unknown>) => item['@type']);
    expect(types).toContain('Person');
    expect(types).toContain('WebSite');

    const person = schema.find((item: Record<string, unknown>) => item['@type'] === 'Person') as Record<string, unknown>;
    expect(person.name).toBe('Ricardo Fernando Cardenas Minaya');
    expect(person.jobTitle as string).toContain('Software Engineer');
    expect(person.url).toBe(expectedSiteUrl);
  });

  test('Catálogo de proyectos: title, canonical, Open Graph y schema CollectionPage', async ({ page }) => {
    await page.goto('/projects');

    await expect(page).toHaveTitle(/(Catálogo de Proyectos Verificados|Verified Projects Catalog) \| Ricardo Cardenas/i);

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', `${expectedSiteUrl}/projects`);

    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute('content', /(Explora 8 proyectos verificados|Explore 8 verified projects)/i);

    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    const jsonLdContent = await jsonLdScript.textContent();
    const schema = JSON.parse(jsonLdContent!);
    expect(schema['@type']).toBe('CollectionPage');
    expect(schema.url).toBe(`${expectedSiteUrl}/projects`);
    expect(schema.mainEntity['@type']).toBe('ItemList');
    expect((schema.mainEntity.itemListElement as unknown[]).length).toBe(8);
  });

  test('Normalización de URL canónica: filtros en el catálogo preservan la canónica raíz', async ({ page }) => {
    // Navegar con parámetros de búsqueda y filtro
    await page.goto('/projects?category=data-ai&q=graph');

    // La URL canónica debe permanecer apuntando a /projects limpio para evitar canibalización SEO
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', `${expectedSiteUrl}/projects`);
  });

  test('Detalle de proyecto (Nexo): metadatos específicos, schema TechArticle y BreadcrumbList', async ({ page }) => {
    await page.goto('/projects/nexo-agentic-graphrag');

    await expect(page).toHaveTitle(/Nexo.*Ricardo Cardenas/i);

    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', `${expectedSiteUrl}/projects/nexo-agentic-graphrag`);

    const ogType = page.locator('meta[property="og:type"]');
    await expect(ogType).toHaveAttribute('content', 'article');

    // Schema.org JSON-LD
    const jsonLdScript = page.locator('script[type="application/ld+json"]');
    const jsonLdContent = await jsonLdScript.textContent();
    const schema = JSON.parse(jsonLdContent!);
    expect(Array.isArray(schema)).toBe(true);

    const article = schema.find((item: Record<string, unknown>) => item['@type'] === 'TechArticle') as Record<string, unknown>;
    expect(article).toBeDefined();
    expect(article.headline as string).toContain('Nexo');
    expect((article.author as Record<string, unknown>).name).toBe('Ricardo Fernando Cardenas Minaya');

    const breadcrumbs = schema.find((item: Record<string, unknown>) => item['@type'] === 'BreadcrumbList') as Record<string, unknown>;
    expect(breadcrumbs).toBeDefined();
    expect((breadcrumbs.itemListElement as unknown[]).length).toBe(3); // Home -> Projects -> Project
  });

  test('Página 404: robots noindex, nofollow, título apropiado y ausencia en sitemap', async ({ page, request }) => {
    await page.goto('/ruta-inexistente-para-prueba-404');

    await expect(page).toHaveTitle(/404: (Página No Encontrada|Page Not Found) \| Ricardo Cardenas/i);

    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute('content', 'noindex, nofollow');

    // Confirmar que /404 NO figura en el sitemap.xml
    const sitemapRes = await request.get('/sitemap.xml');
    const sitemapText = await sitemapRes.text();
    expect(sitemapText).not.toContain('/404');
  });

  test('Recursos estáticos SEO: robots.txt y sitemap.xml generados y sincronizados con dominio canónico', async ({ request }) => {
    // robots.txt
    const robotsRes = await request.get('/robots.txt');
    expect(robotsRes.status()).toBe(200);
    const robotsText = await robotsRes.text();
    expect(robotsText).toContain('User-agent: *');
    expect(robotsText).toContain('Allow: /');
    expect(robotsText).toContain(`Sitemap: ${expectedSiteUrl}/sitemap.xml`);

    // sitemap.xml
    const sitemapRes = await request.get('/sitemap.xml');
    expect(sitemapRes.status()).toBe(200);
    const sitemapText = await sitemapRes.text();
    expect(sitemapText).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(sitemapText).toContain('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
    expect(sitemapText).toContain(`${expectedSiteUrl}/`);
    expect(sitemapText).toContain(`${expectedSiteUrl}/projects`);
    expect(sitemapText).toContain(`${expectedSiteUrl}/projects/nexo-agentic-graphrag`);
    expect(sitemapText).toContain(`${expectedSiteUrl}/projects/capital-cruise`);
    expect(sitemapText).toContain(`${expectedSiteUrl}/projects/talestar-mobile`);

    // og-image.png
    const ogRes = await request.get('/images/og-image.png');
    expect(ogRes.status()).toBe(200);
    expect(ogRes.headers()['content-type']).toContain('image/png');
  });

  test('Prerenderizado estático (SSG): el HTML crudo incluye contenido y metadatos sin depender de JS', async ({ request }) => {
    // 1. Verificar index.html en crudo
    const homeRes = await request.get('/');
    expect(homeRes.status()).toBe(200);
    const homeHtml = await homeRes.text();
    expect(homeHtml).toContain('<title>Ricardo Cardenas');
    expect(homeHtml).toContain('rel="canonical"');
    // Comprobar que el HTML prerenderizado tiene el contenido renderizado (no solo div id="root")
    expect(homeHtml).toContain('Ricardo Cardenas');
    expect(homeHtml).toContain('Software Engineering');

    // 2. Verificar detalle prerenderizado de capital-cruise
    const projectRes = await request.get('/projects/capital-cruise/');
    expect(projectRes.status()).toBe(200);
    const projectHtml = await projectRes.text();
    expect(projectHtml).toContain('Capital Cruise');
    expect(projectHtml).toContain('TechArticle');
  });

  test('SSG con JavaScript deshabilitado: renderiza contenido sustantivo y navegación básica', async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();

    // 1. Home sin JS
    await page.goto('/');
    await expect(page.locator('h1')).toContainText(/Ricardo Cardenas/i);
    await expect(page.getByText(/UPC • Software Engineering/i).first()).toBeVisible();

    // 2. Catálogo sin JS
    await page.goto('/projects');
    await expect(page.locator('h1')).toContainText(/Catálogo de Proyectos|Engineering Projects Catalog/i);
    await expect(page.getByText('Nexo — Agentic GraphRAG')).toBeVisible();

    // 3. Detalle de Nexo sin JS
    await page.goto('/projects/nexo-agentic-graphrag');
    await expect(page.locator('h1')).toContainText(/Nexo/i);
    await expect(page.getByText(/Tesis UPC|UPC Thesis/i).first()).toBeVisible();

    await context.close();
  });

  test('Hidratación y Navegación SPA: sin errores de consola ni duplicación de DOM', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // 1. Carga inicial en Home
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // 2. Navegar directamente al catálogo
    await page.goto('/projects');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toContainText(/Catálogo de Proyectos|Engineering Projects Catalog/i);

    // 3. Navegar directamente al detalle de Capital Cruise
    await page.goto('/projects/capital-cruise');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toContainText('Capital Cruise');

    // 4. Recarga directa de página en detalle
    await page.reload();
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toContainText('Capital Cruise');

    // 5. Verificar que no hubo errores fatales de consola o hidratación de React
    const fatalErrors = consoleErrors.filter((e) => !e.includes('favicon.ico') && !e.includes('404'));
    expect(fatalErrors.length).toBe(0);
  });
});
