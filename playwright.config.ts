import { defineConfig, devices } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

// Comprobación de seguridad: verificar que dist/ exista antes de iniciar Vite preview
const distPath = path.resolve(process.cwd(), 'dist');
if (process.env.CI && !fs.existsSync(distPath)) {
  throw new Error(
    '[Playwright Config] Error crítico: El directorio "dist" no existe. Debe ejecutarse "npm run build" antes de Playwright.'
  );
}

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [
        ['list'],
        ['html', { open: 'never', outputFolder: 'playwright-report' }],
      ]
    : 'list',
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 7'] },
    },
  ],
  webServer: {
    command: 'npm run preview -- --port 4173',
    port: 4173,
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
});
