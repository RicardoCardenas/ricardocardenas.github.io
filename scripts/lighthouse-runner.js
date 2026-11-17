import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';

// Ejecutar Lighthouse programáticamente
async function runAudit() {
  const lighthouse = (await import('lighthouse')).default;
  const chromeLauncher = await import('chrome-launcher');

  console.log('1. Iniciando servidor Vite preview en puerto 4173...');
  const preview = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    stdio: 'pipe',
    shell: true,
  });

  // Esperar a que el servidor responda
  await new Promise((resolve) => {
    const check = () => {
      http.get('http://localhost:4173/', (res) => {
        if (res.statusCode === 200) {
          resolve(true);
        } else {
          setTimeout(check, 300);
        }
      }).on('error', () => {
        setTimeout(check, 300);
      });
    };
    check();
  });

  console.log('Servidor preview listo en http://localhost:4173/');

  // Iniciar Chrome headless
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu'],
  });

  const routes = [
    { name: 'Home', url: 'http://localhost:4173/' },
    { name: 'Catálogo', url: 'http://localhost:4173/projects' },
    { name: 'Nexo', url: 'http://localhost:4173/projects/nexo-agentic-graphrag' },
  ];

  const results = {};

  for (const { name, url } of routes) {
    console.log(`Ejecutando Lighthouse para: ${name} (${url})...`);

    // Auditoría Desktop
    const desktopRunner = await lighthouse(url, {
      port: chrome.port,
      output: 'json',
      logLevel: 'error',
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        width: 1350,
        height: 940,
        deviceScaleFactor: 1,
        disabled: false,
      },
      throttling: {
        rttMs: 40,
        throughputKbps: 10240,
        cpuSlowdownMultiplier: 1,
      },
    });

    const dReport = desktopRunner.lhr;

    // Auditoría Mobile
    const mobileRunner = await lighthouse(url, {
      port: chrome.port,
      output: 'json',
      logLevel: 'error',
      formFactor: 'mobile',
      screenEmulation: {
        mobile: true,
        width: 390,
        height: 844,
        deviceScaleFactor: 2,
        disabled: false,
      },
    });

    const mReport = mobileRunner.lhr;

    const extractMetrics = (lhr) => ({
      scores: {
        performance: Math.round((lhr.categories.performance?.score || 0) * 100),
        accessibility: Math.round((lhr.categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((lhr.categories['best-practices']?.score || 0) * 100),
        seo: Math.round((lhr.categories.seo?.score || 0) * 100),
      },
      metrics: {
        fcp: lhr.audits['first-contentful-paint']?.numericValue || 0,
        lcp: lhr.audits['largest-contentful-paint']?.numericValue || 0,
        cls: lhr.audits['cumulative-layout-shift']?.numericValue || 0,
        tbt: lhr.audits['total-blocking-time']?.numericValue || 0,
        speedIndex: lhr.audits['speed-index']?.numericValue || 0,
      },
    });

    results[name] = {
      desktop: extractMetrics(dReport),
      mobile: extractMetrics(mReport),
    };
  }

  await chrome.kill();
  preview.kill();

  const outFile = process.argv[2] || 'docs/audits/lighthouse-post-optimization.json';
  const outPath = path.resolve(outFile);
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log(`Lighthouse reporte guardado en: ${outPath}`);
  console.log(JSON.stringify(results, null, 2));
}

runAudit().catch((err) => {
  console.error('Error ejecutando Lighthouse:', err);
  process.exit(1);
});