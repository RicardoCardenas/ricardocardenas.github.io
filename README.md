# Ricardo Cárdenas — Professional Engineering Portfolio

[![Deploy to GitHub Pages](https://github.com/RicardoCardenas/ricardocardenas.github.io/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/RicardoCardenas/ricardocardenas.github.io/actions/workflows/deploy-pages.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646cff.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38b2ac.svg)](https://tailwindcss.com/)
[![WCAG 2.2 AA](https://img.shields.io/badge/WCAG-2.2_AA-green.svg)](https://www.w3.org/WAI/standards-guidelines/wcag/)

Professional portfolio of **Ricardo Fernando Cárdenas Minaya**, Software Engineering student at Universidad Peruana de Ciencias Aplicadas (UPC, Top 10% / Décimo Superior). Focused on **Software Engineering**, **Robust Backend Systems**, and **Data & Applied AI**.

Live Site: **[https://ricardocardenas.github.io/](https://ricardocardenas.github.io/)**

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core:** [React 19](https://react.dev/) with [TypeScript 5.7](https://www.typescriptlang.org/) and [Vite 6](https://vitejs.dev/).
- **Routing & State:** [React Router v7](https://reactrouter.com/) (declarative routing with deep linking, stateful search params, and clean URLs).
- **Styling & Design System:** [Tailwind CSS v4](https://tailwindcss.com/) paired with CSS custom property design tokens (`--background`, `--surface`, `--primary: #7c3aed / #a78bfa`, `--text-*`).
- **Accessible UI Primitives:** [Radix UI](https://www.radix-ui.com/) (`Dialog`, `DropdownMenu`, `Tabs`, `Tooltip`) ensuring strict WAI-ARIA conformance and programmatic keyboard navigation.
- **Internationalization:** [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/) supporting real-time toggling between English and Spanish.
- **Static Site Generation (SSG):** Headless Playwright script prerendering 11 static HTML documents at build time for instant crawlers, SEO, and social media scrapers without client-side JavaScript execution dependencies.
- **Automated Testing & QA:**
  - [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/) for component and unit testing.
  - [Playwright](https://playwright.dev/) for End-to-End journey verification across desktop, tablet, and mobile viewports.
  - [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright) for automated WCAG 2.2 AA accessibility regression testing.
  - [Google Lighthouse](https://github.com/GoogleChrome/lighthouse) for Core Web Vitals, Best Practices, and SEO validation.

---

## 🚀 Key Engineering Highlights

1. **Prerendered SSG Architecture:** 11 public and error routes (`/`, `/projects`, 8 project case studies, `/404`) are prerendered as static HTML files during `npm run build`, alongside clean flat URLs for optimal web server resolution.
2. **Deterministic SEO & Metadata:** Centralized canonical generation via `getSiteUrl()`, automated dynamic generation of `sitemap.xml` (10 canonical public URLs) and `robots.txt`, and complete Schema.org JSON-LD structured data.
3. **Strict Accessibility (WCAG 2.2 AA):**
   - 0 automated violations across 32 axe-core test scans.
   - 100/100 Accessibility score in Google Lighthouse.
   - Complete keyboard support (`Tab`, `Shift+Tab`, `Esc`, focus trapping in modals/drawers, skip-to-content link).
   - High contrast compliance ($\ge 4.5:1$ text, $\ge 3:1$ graphics) in light and dark themes.
   - Respects `prefers-reduced-motion`.
4. **Dual Specialized Curricula:** Instant, direct download of official PDF resumes:
   - *Software Engineering & Backend:* `CV_Ricardo_Cardenas_Software_Backend.pdf`
   - *Data & Applied AI:* `CV_Ricardo_Cardenas-Data.pdf`
5. **Privacy Safeguards:** Cero private photos, zero numeric grade mentions (respecting institutional distinction `UPC • Software Engineering`), zero leaked secrets/keys, and strict thesis project confidentiality boundaries.

---

## 💻 Getting Started & Local Development

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/RicardoCardenas/ricardocardenas.github.io.git
cd ricardocardenas.github.io

# Install dependencies
npm ci
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & SSG Prerendering
```bash
npm run build
```
This runs TypeScript checking, compiles the client bundle via Vite, and initiates the automated headless SSG prerender script generating `dist/` with all 11 static routes, flat files, sitemap, and robots.txt.

### Local Preview
```bash
npm run preview
```
Serves the production build locally at [http://localhost:4173](http://localhost:4173).

---

## 🧪 Testing & Quality Gates

The project enforces an uncompromising Quality Gate:

```bash
# 1. Typecheck (TypeScript)
npm run typecheck

# 2. Linter (ESLint)
npm run lint

# 3. Unit & Component Tests (Vitest)
npm run test

# 4. End-to-End Tests & 15 User Journeys (Playwright)
npx playwright test --reporter=list --workers=2

# 5. Distribution Integrity & Privacy Audit (Preproduction validation)
npm run validate:dist
```

---

## 📦 Deployment to GitHub Pages (User Site)

The portfolio is deployed to **GitHub Pages — User Site** (`https://<username>.github.io/`):

- **Repository:** `ricardocardenas.github.io`
- **Branch:** `master`
- **Domain Root:** `/` (configured via `base: '/'` in `vite.config.ts`)
- **Bypass Jekyll:** `public/.nojekyll` copied into `dist/`
- **CI/CD Pipeline:** Fully automated via [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) using official GitHub Actions (`actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, `actions/deploy-pages@v4`).
- **Step-by-step Setup Guide:** See [docs/deployment/github-pages-deployment-guide.md](docs/deployment/github-pages-deployment-guide.md) for complete instructions.

---

## 📚 Project Documentation

- [Design System & Tokens](docs/design/design-system.md)
- [Accessibility Audit (WCAG 2.2 AA)](docs/audits/phase-3-3-wcag-22-aa-audit.md)
- [SEO & Core Web Vitals Report](docs/reports/phase-3-4-seo-performance-report.md)
- [Preproduction Comprehensive Audit](docs/audits/phase-3-5-preproduction-audit.md)
- [Final Preproduction Validation Report](docs/reports/phase-3-5-final-validation-report.md)
- [GitHub Pages Deployment Guide](docs/deployment/github-pages-deployment-guide.md)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details (or private portfolio portfolio code rights where applicable).
