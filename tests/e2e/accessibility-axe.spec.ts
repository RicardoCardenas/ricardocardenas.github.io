import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

const violationsReportFile = path.resolve('docs/audits/axe-raw-violations.json');
const allViolations: Record<string, unknown> = {};

test.afterAll(() => {
  if (Object.keys(allViolations).length > 0) {
    fs.mkdirSync(path.dirname(violationsReportFile), { recursive: true });
    fs.writeFileSync(violationsReportFile, JSON.stringify(allViolations, null, 2));
  }
});

test.describe('Fase 3.3 — Auditoría Automatizada de Accesibilidad con axe-core', () => {
  const routes = [
    { name: 'Home (ES - Dark)', path: '/', theme: 'dark', lang: 'es' },
    { name: 'Home (ES - Light)', path: '/', theme: 'light', lang: 'es' },
    { name: 'Home (EN - Dark)', path: '/', theme: 'dark', lang: 'en' },
    { name: 'Projects Catalog (ES - Dark)', path: '/projects', theme: 'dark', lang: 'es' },
    { name: 'Projects Catalog (ES - Light)', path: '/projects', theme: 'light', lang: 'es' },
    { name: 'Projects Catalog (EN - Dark)', path: '/projects', theme: 'dark', lang: 'en' },
    { name: 'Projects Catalog Filtered (?category=data-ai)', path: '/projects?category=data-ai', theme: 'dark', lang: 'es' },
    { name: 'Projects Catalog Empty State (?q=nonexistent)', path: '/projects?q=nonexistentqueryxyz', theme: 'dark', lang: 'es' },
    { name: 'Case Study Nexo (ES - Dark)', path: '/projects/nexo-agentic-graphrag', theme: 'dark', lang: 'es' },
    { name: 'Case Study Nexo (EN - Light)', path: '/projects/nexo-agentic-graphrag', theme: 'light', lang: 'en' },
    { name: 'Case Study Capital Cruise (ES - Dark)', path: '/projects/capital-cruise', theme: 'dark', lang: 'es' },
    { name: 'Case Study TaleStar (ES - Dark)', path: '/projects/talestar-mobile', theme: 'dark', lang: 'es' },
    { name: 'Case Study TheLook (ES - Dark)', path: '/projects/thelook-ecommerce-pipeline', theme: 'dark', lang: 'es' },
    { name: 'Not Found Page 404 (ES - Dark)', path: '/ruta-inexistente-404', theme: 'dark', lang: 'es' },
  ];

  for (const route of routes) {
    test(`axe-core audit: ${route.name}`, async ({ page }) => {
      await page.addInitScript(({ theme, lang }) => {
        localStorage.setItem('portfolio-theme', theme);
        localStorage.setItem('i18nextLng', lang);
      }, { theme: route.theme, lang: route.lang });

      await page.goto(route.path);
      await page.waitForLoadState('networkidle');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();

      if (accessibilityScanResults.violations.length > 0) {
        allViolations[route.name] = accessibilityScanResults.violations;
        console.log(`\n[AXE VIOLATION] in ${route.name}:`);
        for (const v of accessibilityScanResults.violations) {
          console.log(`- Rule: ${v.id} | Impact: ${v.impact} | Help: ${v.help}`);
          console.log(`  Nodes: ${v.nodes.map(n => n.target.join(' ')).join(', ')}`);
        }
      }

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }

  test('axe-core audit: Mobile Nav Drawer open', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Open mobile menu
    const menuButton = page.getByRole('button', { name: /abrir menú|open menu|navigation menu/i });
    await menuButton.click();
    await page.waitForTimeout(300);

    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('[role="dialog"]')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    if (accessibilityScanResults.violations.length > 0) {
      allViolations['Mobile Nav Drawer'] = accessibilityScanResults.violations;
      console.log('\n[AXE VIOLATION] in Mobile Nav Drawer:');
      for (const v of accessibilityScanResults.violations) {
        console.log(`- Rule: ${v.id} | Impact: ${v.impact} | Help: ${v.help}`);
        console.log(`  Nodes: ${v.nodes.map(n => n.target.join(' ')).join(', ')}`);
      }
    }

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('axe-core audit: Project Gallery Modal open', async ({ page }) => {
    await page.goto('/projects/talestar-mobile');
    await page.waitForLoadState('networkidle');

    // Click on first gallery thumbnail button
    const galleryThumbnail = page.locator('button[aria-haspopup="dialog"]').first();
    if (await galleryThumbnail.isVisible()) {
      await galleryThumbnail.click();
      await page.waitForTimeout(300);

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
        .analyze();

      if (accessibilityScanResults.violations.length > 0) {
        allViolations['Project Gallery Modal'] = accessibilityScanResults.violations;
        console.log('\n[AXE VIOLATION] in Gallery Modal:');
        for (const v of accessibilityScanResults.violations) {
          console.log(`- Rule: ${v.id} | Impact: ${v.impact} | Help: ${v.help}`);
          console.log(`  Nodes: ${v.nodes.map(n => n.target.join(' ')).join(', ')}`);
        }
      }

      expect(accessibilityScanResults.violations).toEqual([]);
    }
  });
});
