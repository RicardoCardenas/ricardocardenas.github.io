import { chromium } from '@playwright/test';
import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

const routes = [
  { path: '/', outDir: 'dist', fileName: 'index.html' },
  { path: '/projects', outDir: 'dist/projects', fileName: 'index.html' },
  { path: '/projects/nexo-agentic-graphrag', outDir: 'dist/projects/nexo-agentic-graphrag', fileName: 'index.html' },
  { path: '/projects/capital-cruise', outDir: 'dist/projects/capital-cruise', fileName: 'index.html' },
  { path: '/projects/talestar-mobile', outDir: 'dist/projects/talestar-mobile', fileName: 'index.html' },
  { path: '/projects/meditrack-iot-health', outDir: 'dist/projects/meditrack-iot-health', fileName: 'index.html' },
  { path: '/projects/thelook-ecommerce-pipeline', outDir: 'dist/projects/thelook-ecommerce-pipeline', fileName: 'index.html' },
  { path: '/projects/customer-churn-analytics', outDir: 'dist/projects/customer-churn-analytics', fileName: 'index.html' },
  { path: '/projects/jobsy-backend', outDir: 'dist/projects/jobsy-backend', fileName: 'index.html' },
  { path: '/projects/onecoin-backend', outDir: 'dist/projects/onecoin-backend', fileName: 'index.html' },
  { path: '/404', outDir: 'dist', fileName: '404.html' },
];

async function prerender() {
  console.log('--- Iniciando Prerenderizado Estático de Rutas Conocidas (SSG) ---');

  // 1. Iniciar servidor Vite preview temporal en puerto 4173
  const preview = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    stdio: 'ignore',
    shell: true,
  });

  // Esperar a que el servidor responda
  await new Promise((resolve) => {
    const check = () => {
      http.get('http://localhost:4173/', (res) => {
        if (res.statusCode === 200) {
          resolve(true);
        } else {
          setTimeout(check, 250);
        }
      }).on('error', () => {
        setTimeout(check, 250);
      });
    };
    check();
  });

  console.log('Servidor preview listo. Lanzando navegador headless...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  for (const { path: routePath, outDir, fileName } of routes) {
    const targetUrl = `http://localhost:4173${routePath}`;
    console.log(`Prerenderizando ruta: ${routePath} -> ${path.join(outDir, fileName)}...`);

    await page.goto(targetUrl, { waitUntil: 'networkidle' });
    // Breve pausa para asegurar que SEOHead y componentes reactivos terminen el ciclo de vida
    await page.waitForTimeout(300);

    const fullHtml = await page.content();

    // Asegurar directorio de destino
    fs.mkdirSync(outDir, { recursive: true });
    const targetFile = path.join(outDir, fileName);
    fs.writeFileSync(targetFile, fullHtml, 'utf8');

    // Generar también el archivo .html directo (ej: dist/projects.html, dist/projects/slug.html)
    // para servidores estáticos que resuelven rutas limpias sin trailing slash
    if (routePath !== '/' && routePath !== '/404') {
      const cleanPath = routePath.replace(/^\//, '');
      const flatFile = path.join('dist', `${cleanPath}.html`);
      fs.mkdirSync(path.dirname(flatFile), { recursive: true });
      fs.writeFileSync(flatFile, fullHtml, 'utf8');
    }

    const sizeKb = (fs.statSync(targetFile).size / 1024).toFixed(1);
    console.log(`  ✓ Generado: ${targetFile} (${sizeKb} KB)`);
  }

  await browser.close();
  preview.kill();

  // 2. Generar sitemap.xml y robots.txt dinámicamente según la configuración de dominio
  const siteUrl = (process.env.VITE_SITE_URL || 'http://localhost:4173').trim().replace(/\/$/, '');
  if (!process.env.VITE_SITE_URL) {
    console.log(`[SEO CONFIG] VITE_SITE_URL no está definida. Utilizando URL local de pruebas: ${siteUrl}`);
    console.log(`[SEO CONFIG] Para despliegue a producción en Fase 4, definir VITE_SITE_URL=https://<dominio-aprobado>`);
  } else {
    console.log(`[SEO CONFIG] Dominio configurado para producción: ${siteUrl}`);
  }

  const publicRoutes = routes.filter((r) => r.path !== '/404');
  const today = new Date().toISOString().split('T')[0];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${publicRoutes
  .map(
    (r) => `  <url>
    <loc>${siteUrl}${r.path === '/' ? '/' : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.path === '/projects' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.path === '/' ? '1.0' : r.path === '/projects' ? '0.9' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  const robotsTxt = `# Robots.txt — Portafolio Profesional Ricardo Cardenas
User-agent: *
Allow: /

# Sitemap XML canónico
Sitemap: ${siteUrl}/sitemap.xml
`;

  // Escribir en dist/ y en public/
  fs.writeFileSync(path.join('dist', 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join('dist', 'robots.txt'), robotsTxt, 'utf8');
  fs.writeFileSync(path.join('public', 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join('public', 'robots.txt'), robotsTxt, 'utf8');
  console.log(`  ✓ Sitemap y robots.txt generados para origen: ${siteUrl}`);

  console.log('--- Prerenderizado completado con éxito: 11 rutas estáticas generadas ---');
}

prerender().catch((err) => {
  console.error('Error durante el prerenderizado:', err);
  process.exit(1);
});