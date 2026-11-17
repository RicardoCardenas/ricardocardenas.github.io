import { test, expect } from '@playwright/test';

interface PerformanceMetrics {
  route: string;
  viewport: 'desktop' | 'mobile';
  ttfb: number;
  fcp: number;
  lcp: number;
  cls: number;
  domContentLoaded: number;
  loadDuration: number;
  totalTransferredBytes: number;
  requestCount: number;
  jsTransferredBytes: number;
  cssTransferredBytes: number;
  imgTransferredBytes: number;
  longTaskCount: number;
  totalBlockingDuration: number;
}

const routesToBenchmark = [
  { name: 'Home', path: '/' },
  { name: 'Catálogo', path: '/projects' },
  { name: 'Nexo', path: '/projects/nexo-agentic-graphrag' },
  { name: 'Capital Cruise', path: '/projects/capital-cruise' },
  { name: 'TaleStar', path: '/projects/talestar-mobile' },
  { name: 'TheLook', path: '/projects/thelook-ecommerce-pipeline' },
];

const results: PerformanceMetrics[] = [];

test.describe('Baseline Performance & Core Web Vitals Benchmark', () => {
  for (const { name, path } of routesToBenchmark) {
    test(`Benchmark: ${name} (${path})`, async ({ page, isMobile }) => {
      // Iniciar observadores de Web Vitals antes de que cargue la página
      await page.addInitScript(() => {
        interface CustomWindow extends Window {
          __webVitals?: {
            lcp: number;
            cls: number;
            longTasks: number;
            totalBlocking: number;
          };
        }
        const win = window as unknown as CustomWindow;
        win.__webVitals = {
          lcp: 0,
          cls: 0,
          longTasks: 0,
          totalBlocking: 0,
        };

        // LCP Observer
        try {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            if (lastEntry) {
              win.__webVitals!.lcp = lastEntry.startTime;
            }
          });
          lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        } catch {
          // Observer no soportado en este entorno
        }

        // CLS Observer
        try {
          const clsObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              interface LayoutShiftEntry extends PerformanceEntry {
                hadRecentInput?: boolean;
                value?: number;
              }
              const shiftEntry = entry as LayoutShiftEntry;
              if (!shiftEntry.hadRecentInput && typeof shiftEntry.value === 'number') {
                win.__webVitals!.cls += shiftEntry.value;
              }
            }
          });
          clsObserver.observe({ type: 'layout-shift', buffered: true });
        } catch {
          // Observer no soportado en este entorno
        }

        // Long Tasks Observer (Proxy de TBT / INP de laboratorio)
        try {
          const longTaskObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              win.__webVitals!.longTasks++;
              // Blocking time es la porción que excede 50ms
              const blockingTime = Math.max(0, entry.duration - 50);
              win.__webVitals!.totalBlocking += blockingTime;
            }
          });
          longTaskObserver.observe({ type: 'longtask', buffered: true });
        } catch {
          // Observer no soportado en este entorno
        }
      });

      const response = await page.goto(path, { waitUntil: 'load' });
      expect(response?.status()).toBe(200);

      // Esperar estabilidad de red para capturar LCP completo
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      const metrics = await page.evaluate(() => {
        const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
        const nav = navEntries[0];
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find((p) => p.name === 'first-contentful-paint');
        const resourceEntries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];

        let totalBytes = 0;
        let jsBytes = 0;
        let cssBytes = 0;
        let imgBytes = 0;

        for (const res of resourceEntries) {
          const size = res.transferSize || res.encodedBodySize || 0;
          totalBytes += size;
          if (res.initiatorType === 'script' || res.name.endsWith('.js')) {
            jsBytes += size;
          } else if (res.initiatorType === 'css' || res.name.endsWith('.css')) {
            cssBytes += size;
          } else if (res.initiatorType === 'img' || res.name.match(/\.(png|jpg|jpeg|webp|svg|ico)$/i)) {
            imgBytes += size;
          }
        }

        interface WindowWithVitals {
          __webVitals?: {
            lcp: number;
            cls: number;
            longTasks: number;
            totalBlocking: number;
          };
        }
        const vitals = (window as unknown as WindowWithVitals).__webVitals;

        return {
          ttfb: nav ? nav.responseStart - nav.requestStart : 0,
          fcp: fcpEntry ? fcpEntry.startTime : 0,
          lcp: vitals?.lcp || 0,
          cls: vitals?.cls || 0,
          domContentLoaded: nav ? nav.domContentLoadedEventEnd - nav.startTime : 0,
          loadDuration: nav ? nav.loadEventEnd - nav.startTime : 0,
          totalTransferredBytes: totalBytes,
          requestCount: resourceEntries.length + 1,
          jsTransferredBytes: jsBytes,
          cssTransferredBytes: cssBytes,
          imgTransferredBytes: imgBytes,
          longTaskCount: vitals?.longTasks || 0,
          totalBlockingDuration: vitals?.totalBlocking || 0,
        };
      });

      const entry: PerformanceMetrics = {
        route: name,
        viewport: isMobile ? 'mobile' : 'desktop',
        ...metrics,
      };

      results.push(entry);
      console.log(`[PERF RESULT] ${JSON.stringify(entry)}`);
    });
  }

  test.afterAll(async () => {
    try {
      const fs = await import('fs');
      const path = await import('path');
      const outDir = path.resolve(process.cwd(), 'docs/audits');
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      fs.writeFileSync(
        path.join(outDir, 'performance-post-optimization.json'),
        JSON.stringify(results, null, 2),
        'utf8'
      );
      console.log('Saved post-optimization metrics to docs/audits/performance-post-optimization.json');
    } catch (e) {
      console.error('Error saving performance benchmark:', e);
    }
  });
});