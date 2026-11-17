import fs from 'fs';
import path from 'path';

console.log('--- Iniciando Validación Automatizada de Preproducción (dist/) ---');

const distDir = 'dist';
let errors = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`  ❌ ERROR: ${message}`);
    errors++;
  } else {
    console.log(`  ✓ ${message}`);
  }
}

// 1. Verificar existencia del directorio dist
assert(fs.existsSync(distDir), 'Directorio dist/ existe');
if (!fs.existsSync(distDir)) {
  process.exit(1);
}

// 2. Verificar las 11 rutas HTML prerenderizadas y su contenido sustantivo
const expectedRoutes = [
  {
    relPath: 'index.html',
    expectedH1: /Ricardo Cardenas/i,
    expectedTitle: /Ricardo Cardenas/i,
    expectedMetaDesc: /Ricardo Cardenas/i,
    expectedJsonLdType: 'Person',
  },
  {
    relPath: path.join('projects', 'index.html'),
    expectedH1: /Catálogo|Projects|Proyectos/i,
    expectedTitle: /Catálogo|Projects|Proyectos/i,
    expectedMetaDesc: /proyectos|projects/i,
    expectedJsonLdType: 'CollectionPage',
  },
  {
    relPath: path.join('projects', 'nexo-agentic-graphrag', 'index.html'),
    expectedH1: /Nexo/i,
    expectedTitle: /Nexo/i,
    expectedMetaDesc: /Nexo/i,
    expectedJsonLdType: 'TechArticle',
  },
  {
    relPath: path.join('projects', 'capital-cruise', 'index.html'),
    expectedH1: /Capital Cruise/i,
    expectedTitle: /Capital Cruise/i,
    expectedMetaDesc: /Capital Cruise/i,
    expectedJsonLdType: 'TechArticle',
  },
  {
    relPath: path.join('projects', 'talestar-mobile', 'index.html'),
    expectedH1: /Talestar/i,
    expectedTitle: /Talestar/i,
    expectedMetaDesc: /Talestar/i,
    expectedJsonLdType: 'TechArticle',
  },
  {
    relPath: path.join('projects', 'meditrack-iot-health', 'index.html'),
    expectedH1: /MediTrack/i,
    expectedTitle: /MediTrack/i,
    expectedMetaDesc: /MediTrack/i,
    expectedJsonLdType: 'TechArticle',
  },
  {
    relPath: path.join('projects', 'thelook-ecommerce-pipeline', 'index.html'),
    expectedH1: /TheLook/i,
    expectedTitle: /TheLook/i,
    expectedMetaDesc: /TheLook/i,
    expectedJsonLdType: 'TechArticle',
  },
  {
    relPath: path.join('projects', 'customer-churn-analytics', 'index.html'),
    expectedH1: /Customer Churn/i,
    expectedTitle: /Customer Churn/i,
    expectedMetaDesc: /Customer Churn/i,
    expectedJsonLdType: 'TechArticle',
  },
  {
    relPath: path.join('projects', 'jobsy-backend', 'index.html'),
    expectedH1: /Jobsy/i,
    expectedTitle: /Jobsy/i,
    expectedMetaDesc: /Jobsy/i,
    expectedJsonLdType: 'TechArticle',
  },
  {
    relPath: path.join('projects', 'onecoin-backend', 'index.html'),
    expectedH1: /OneCoin/i,
    expectedTitle: /OneCoin/i,
    expectedMetaDesc: /OneCoin/i,
    expectedJsonLdType: 'TechArticle',
  },
  {
    relPath: '404.html',
    expectedH1: /404/i,
    expectedTitle: /404/i,
    expectedMetaDesc: /no existe|not exist/i,
    expectedJsonLdType: null,
  },
];

for (const { relPath, expectedH1, expectedTitle, expectedMetaDesc, expectedJsonLdType } of expectedRoutes) {
  const fullPath = path.join(distDir, relPath);
  const exists = fs.existsSync(fullPath);
  assert(exists, `Ruta HTML prerenderizada existe: ${relPath}`);
  if (exists) {
    const size = fs.statSync(fullPath).size;
    assert(size > 1000, `Tamaño adecuado en ${relPath} (${(size / 1024).toFixed(1)} KB)`);

    const html = fs.readFileSync(fullPath, 'utf8');

    // Validación de integridad estructural HTML
    assert(html.includes('<!DOCTYPE html>'), `Estructura DOCTYPE válida en ${relPath}`);
    assert(html.includes('<div id="root">'), `Contenedor #root presente en ${relPath}`);
    assert(!/<div id="root">\s*<\/div>/.test(html), `Contenido sustantivo prerenderizado dentro de #root (no vacío) en ${relPath}`);

    // Validación de título
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    assert(Boolean(titleMatch && expectedTitle.test(titleMatch[1])), `Tag <title> sustantivo alineado en ${relPath}`);

    // Validación de encabezado h1
    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    assert(Boolean(h1Match && expectedH1.test(h1Match[1])), `Encabezado <h1> sustantivo alineado en ${relPath}`);

    // Validación de meta description
    const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i);
    assert(Boolean(descMatch && descMatch[1].trim().length >= 30), `Meta description presente y sustantiva en ${relPath} (${descMatch ? descMatch[1].length : 0} caracteres)`);

    // Validación de canonical link
    const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i);
    assert(Boolean(canonicalMatch), `Tag canonical presente en ${relPath}`);

    // Validación de structured data JSON-LD (cuando aplique)
    if (expectedJsonLdType) {
      assert(html.includes('"@type"') && html.includes(expectedJsonLdType), `JSON-LD Schema.org de tipo ${expectedJsonLdType} presente en ${relPath}`);
    }

    // Validación de referencias a assets CSS y JS en disco
    const assetMatches = [...html.matchAll(/(?:href|src)="(\/assets\/[^"]+)"/g)].map(m => m[1]);
    for (const assetRef of assetMatches) {
      const diskAsset = path.join(distDir, assetRef.replace(/^\//, ''));
      assert(fs.existsSync(diskAsset), `Asset referenciado existe en dist/: ${assetRef}`);
    }
  }
}

// 3. Verificar archivos planos para soporte de cleanUrls en servidores estáticos
const flatRoutes = [
  path.join('projects.html'),
  path.join('projects', 'nexo-agentic-graphrag.html'),
  path.join('projects', 'capital-cruise.html'),
  path.join('projects', 'talestar-mobile.html'),
  path.join('projects', 'meditrack-iot-health.html'),
  path.join('projects', 'thelook-ecommerce-pipeline.html'),
  path.join('projects', 'customer-churn-analytics.html'),
  path.join('projects', 'jobsy-backend.html'),
  path.join('projects', 'onecoin-backend.html'),
];

for (const relPath of flatRoutes) {
  const fullPath = path.join(distDir, relPath);
  assert(fs.existsSync(fullPath), `Archivo plano de ruta existe: ${relPath}`);
}

// 4. Verificar .nojekyll en dist/
assert(fs.existsSync(path.join(distDir, '.nojekyll')), 'Archivo .nojekyll presente en la raíz de dist/');

// 5. Verificar ambos CVs PDF oficiales
const cv1 = path.join(distDir, 'cv', 'CV_Ricardo_Cardenas_Software_Backend.pdf');
const cv2 = path.join(distDir, 'cv', 'CV_Ricardo_Cardenas-Data.pdf');
assert(fs.existsSync(cv1), 'CV Software Backend presente en dist/cv/');
assert(fs.existsSync(cv2), 'CV Data & AI presente en dist/cv/');
if (fs.existsSync(cv1)) {
  const s1 = fs.statSync(cv1).size;
  assert(s1 > 20000, `CV Software Backend íntegro (${(s1 / 1024).toFixed(1)} KB)`);
}
if (fs.existsSync(cv2)) {
  const s2 = fs.statSync(cv2).size;
  assert(s2 > 20000, `CV Data & AI íntegro (${(s2 / 1024).toFixed(1)} KB)`);
}

// 6. Verificar robots.txt y sitemap.xml
const robotsPath = path.join(distDir, 'robots.txt');
const sitemapPath = path.join(distDir, 'sitemap.xml');
assert(fs.existsSync(robotsPath), 'robots.txt presente en dist/');
assert(fs.existsSync(sitemapPath), 'sitemap.xml presente en dist/');

if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  assert(sitemapContent.includes('<urlset'), 'sitemap.xml contiene estructura XML urlset válida');
  assert(!sitemapContent.includes('/404'), 'sitemap.xml NO contiene la ruta de error 404');
  
  // Contar rutas públicas en sitemap (deben ser exactamente 10)
  const locMatches = sitemapContent.match(/<loc>/g) || [];
  assert(locMatches.length === 10, `sitemap.xml contiene exactamente 10 rutas públicas (detectadas: ${locMatches.length})`);
}

if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf8');
  assert(robotsContent.includes('Allow: /'), 'robots.txt permite indexación general (Allow: /)');
  assert(robotsContent.includes('Sitemap:'), 'robots.txt enlaza al sitemap XML');
}

// 7. Validación de entorno de publicación vs local
const isCI = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true';
const siteUrl = process.env.VITE_SITE_URL;

if (isCI) {
  assert(Boolean(siteUrl), 'En entorno CI / GitHub Actions, VITE_SITE_URL debe estar obligatoriamente definida');
  if (siteUrl) {
    assert(!siteUrl.includes('localhost'), `VITE_SITE_URL de producción no debe contener localhost (actual: ${siteUrl})`);
    assert(siteUrl.startsWith('https://'), `VITE_SITE_URL de producción debe utilizar protocolo HTTPS (actual: ${siteUrl})`);
    
    // Verificar que dist/sitemap.xml y dist/robots.txt usen el siteUrl configurado y no localhost
    if (fs.existsSync(sitemapPath)) {
      const sm = fs.readFileSync(sitemapPath, 'utf8');
      assert(!sm.includes('http://localhost'), 'sitemap.xml de publicación no contiene referencias a localhost');
      assert(sm.includes(siteUrl), `sitemap.xml de publicación contiene el dominio configurado (${siteUrl})`);
    }
    if (fs.existsSync(robotsPath)) {
      const rb = fs.readFileSync(robotsPath, 'utf8');
      assert(!rb.includes('http://localhost'), 'robots.txt de publicación no contiene referencias a localhost');
      assert(rb.includes(siteUrl), `robots.txt de publicación contiene el dominio configurado (${siteUrl})`);
    }

    // Verificar que index.html contenga canonicals alineados con el dominio configurado
    const indexPath = path.join(distDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      const indexHtml = fs.readFileSync(indexPath, 'utf8');
      assert(!indexHtml.includes('http://localhost:4173/'), 'index.html de publicación no contiene referencias canónicas a localhost:4173');
      assert(indexHtml.includes(siteUrl), `index.html de publicación contiene metadatos con el dominio configurado (${siteUrl})`);
    }
  }
}

// 8. Escaneo de Privacidad y Secretos en dist/
const forbiddenTerms = ['api_key', 'private_key', 'BEGIN RSA'];

// Mecanismo de prevención de filtraciones mediante configuración privada no versionada
if (process.env.PRIVATE_ACADEMIC_BLOCKLIST) {
  const customBlocked = process.env.PRIVATE_ACADEMIC_BLOCKLIST.split(',').map((s) => s.trim()).filter(Boolean);
  forbiddenTerms.push(...customBlocked);
}

// Patrón contextualizado de prevención de filtraciones académicas:
// Detecta combinaciones contextuales como "promedio ponderado: 17.x", "gpa = x.x", "nota final: 17",
// evitando falsos positivos sobre métricas técnicas, porcentajes, latencias o estadísticas financieras legítimas.
const contextualGradeRegex = /(?:promedio\s*(?:ponderado|acumulado|académico)?|gpa|nota\s*(?:ponderada|final)?)\s*[:=]\s*\d{1,2}(?:[.,]\d{1,2})?/i;

let foundSecret = false;
function scanFiles(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanFiles(full);
    } else if (/\.(html|js|json|txt|xml)$/.test(entry.name)) {
      const c = fs.readFileSync(full, 'utf8');
      for (const term of forbiddenTerms) {
        if (c.includes(term)) {
          console.error(`  ❌ TÉRMINO NO PERMITIDO DETECTADO en ${full}: ${term}`);
          foundSecret = true;
          errors++;
        }
      }
      if (contextualGradeRegex.test(c)) {
        console.error(`  ❌ PATRÓN CONTEXTUALIZADO DE CALIFICACIÓN PRIVADA DETECTADO en ${full}`);
        foundSecret = true;
        errors++;
      }
    }
  }
}
scanFiles(distDir);
assert(!foundSecret, 'Escaneo de privacidad en dist/: 0 secretos o datos prohibidos detectados');

console.log('-------------------------------------------------------------------');
if (errors > 0) {
  console.error(`❌ Validación de dist/ FALLIDA con ${errors} error(es).`);
  process.exit(1);
} else {
  console.log('✅ Validación de dist/ APROBADA satisfactoriamente.');
}
