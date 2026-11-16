# Phase 2B Implementation Plan: Complete Projects Catalog & Technical Case Studies

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the full Phase 2B scope: the complete catalog of 8 verified engineering projects (`/projects`) and rich technical case study detail pages (`/projects/:slug`), complete with architecture diagrams, verifiable metrics, real visual assets, implemented vs planned roadmaps, strict academic confidentiality for Nexo, and seamless light/dark and ES/EN i18n support under the Minimalist Professional (B) visual identity.

**Architecture:** Component-driven React 19 + TypeScript architecture with Tailwind CSS v4, utilizing modular presentational components (`ArchitectureDiagram`, `KeyDecisionsCard`, `MetricsBanner`, `ProjectGallery`), declarative type contracts in `src/types/index.ts`, and enriched verified datasets in `src/data/projects.ts`.

**Tech Stack:** React 19, TypeScript 5.8, Vite 8, Tailwind CSS v4, Lucide React, i18next, Vitest, Playwright.

**Spec:** [docs/content/project-inventory.md](file:///C:/Ricardo/Portafolio/docs/content/project-inventory.md), [docs/design/mockups/view-3-projects-catalog.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-3-projects-catalog.md), [docs/design/mockups/view-4-project-detail.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-4-project-detail.md).

## Global Constraints

- Visual style: Minimalist Professional (B) with primary violet identity (`#7C3AED` / `#A78BFA`), subtle zinc surfaces, and zero "AI slop".
- Dual theme support: strict compliance with semantic CSS tokens (`bg-background`, `text-text-primary`, `border-border`, etc.). In dark mode, background must compute to `rgb(9, 9, 11)`.
- Full localization: every user-facing string must support both `es` and `en` without fallback gaps.
- Nexo academic privacy: strict absence of external repository links, explicit "Tesis UPC" badge, private research notice, and clear separation between Phase 0 (Implemented) and Phases 1-4 (Planned).
- 8 verified projects with authentic technical evidence (no fabricated metrics):
  1. `nexo-agentic-graphrag`
  2. `capital-cruise`
  3. `talestar-mobile`
  4. `meditrack-iot-health`
  5. `thelook-ecommerce-pipeline`
  6. `customer-churn-analytics`
  7. `jobsy-backend`
  8. `onecoin-backend`
- Quality Gates: 0 TypeScript errors, 0 ESLint warnings/errors, 100% Vitest passing, and 100% Playwright E2E passing across desktop, tablet, and mobile.
- No automatic git commits outside the authorized Phase 2A closure commit.

## Review Focus

1. **Nexo Academic Privacy:** Ensure no GitHub link is rendered anywhere on `/projects` or `/projects/nexo-agentic-graphrag`.
2. **Category Filtering & Search Combinations:** Ensure search query filtering behaves correctly across all categories, including empty query and clear button.
3. **Detail Page Breadcrumb & Routing:** Ensure navigation from Home -> Catalog -> Detail -> Related Project -> Back to Catalog works smoothly without layout shift.
4. **Dark Mode Readability:** Ensure all cards, badges, architectural diagrams, and code snippets maintain WCAG AAA contrast in dark mode (`#09090b` background).
5. **Mobile Responsiveness:** Ensure no horizontal overflow (0px) at 320px, 375px, 390px, and 768px viewports.

---

### Task 1: Enrich Project Data Model & Specifications
**Files:**
- Modify: `src/types/index.ts`
- Modify: `src/data/projects.ts`
- Test: `tests/unit/projects-data.test.ts`

- [ ] **Step 1.1: Expand type definitions in `src/types/index.ts`**
  Verify that `ProjectCaseStudy` includes: `architectureOverview`, `architectureComponents`, `keyDecisions`, `metricsAndResults`, `challengesAndLearnings`, `galleryImages`, `coverImage`, and `plannedFeatures`.
- [ ] **Step 1.2: Enrich `src/data/projects.ts` for all 8 projects**
  Populate realistic, verified architecture components, key engineering decisions, quantifiable results, and challenges for:
  - Nexo (FastAPI modular monolith, 7 Bounded Contexts, PostgreSQL + pgvector, Neo4j, Celery, Redis, LangGraph, Phase 0 vs Phases 1-4).
  - Capital Cruise (Spring Boot 3, Vue 3, Flyway, French amortization formulas, balloon payments, Docker).
  - TaleStar Mobile (Flutter 3.41, BLoC, GoRouter, ARCore with native OpenGL ES shaders, 351 passing tests).
  - MediTrack (Spring Boot microservices, Angular 20, Edge Python, MQTT Mosquitto, Docker Compose).
  - TheLook eCommerce Pipeline (GCP BigQuery, Dataform, BigQuery ML, Looker Studio, 2.4M events).
  - Customer Churn Analytics (Python, DuckDB, K-Means Scikit-Learn, Power BI DAX).
  - Jobsy Backend (.NET 9, C# 13, EF Core, MySQL, UglyToad.PdfPig, MediatR, xUnit).
  - OneCoin Backend (Node.js 20, Express, MongoDB Mongoose, JWT, Docker, Swagger).
- [ ] **Step 1.3: Update unit tests in `tests/unit/projects-data.test.ts`**
  Add unit assertions verifying:
  - Exactly 8 projects exist.
  - Every project has both `es` and `en` for all localized fields.
  - Nexo has `isAcademicThesis === true` and `links.github === undefined`.
  - Every project has valid related project slugs that actually exist in the inventory.
  - Architecture overview, components, and challenges are non-empty for all projects.
- [ ] **Step 1.4: Run unit tests**
  Execute `npm run test` and verify all tests pass.

---

### Task 2: Refine Projects Catalog (`src/pages/ProjectsCatalogPage.tsx`)
**Files:**
- Modify: `src/pages/ProjectsCatalogPage.tsx`
- Test: `tests/e2e/catalog-and-detail.spec.ts`

- [ ] **Step 2.1: Enhance Catalog Page layout & filter toolbar**
  Implement category chips with badges and counter badges: All (8), Software (6), Data & AI (4), Mobile (1).
- [ ] **Step 2.2: Add reactive search with clear button**
  Add search input with search icon, clear button (`X`), search counter ("Mostrando N de 8 proyectos"), and keyboard shortcut (`Escape` to clear).
- [ ] **Step 2.3: Polish Project Card component**
  Design cards following Emil Kowalski standards:
  - Header: Category badges, status badge, thesis badge (for Nexo).
  - Body: Project title, role, summary, key contribution bullet point.
  - Tech Stack: Compact monospace badges with subtle borders.
  - Actions: Primary "Ver caso de estudio &rarr;" button and GitHub repository link (if public) or "Código privado" indicator for Nexo.
- [ ] **Step 2.4: Empty State handling**
  When no results match, render `EmptyState` with a clear message and a "Restablecer filtros" button.
- [ ] **Step 2.5: Verify responsiveness and theme support**
  Test in browser and ensure cards scale gracefully from 1 column on mobile to 2 columns on desktop.

---

### Task 3: Implement Rich Technical Case Studies (`src/pages/ProjectDetailPage.tsx`)
**Files:**
- Create: `src/components/projects/ArchitectureDiagram.tsx`
- Create: `src/components/projects/KeyDecisionsCard.tsx`
- Create: `src/components/projects/MetricsBanner.tsx`
- Create: `src/components/projects/ProjectGallery.tsx`
- Modify: `src/pages/ProjectDetailPage.tsx`
- Test: `tests/e2e/catalog-and-detail.spec.ts`

- [ ] **Step 3.1: Build `ArchitectureDiagram.tsx`**
  Create a responsive, visual architecture component displaying system diagrams (modular layers, client -> reverse proxy -> API -> databases / pipelines) tailored for each project (especially Nexo, Capital Cruise, TaleStar, MediTrack, and TheLook).
- [ ] **Step 3.2: Build `KeyDecisionsCard.tsx` & `MetricsBanner.tsx`**
  - `KeyDecisionsCard`: Renders technical decisions and trade-offs in structured cards.
  - `MetricsBanner`: Highlights verified engineering figures (2.4M records, 351 tests, 82.8% precision, etc.).
- [ ] **Step 3.3: Build `ProjectGallery.tsx`**
  Renders real screenshots and diagrams copied to `public/images/projects/` (for TaleStar AR, TheLook dashboards/ER, Churn dashboard) with clean captions and responsive framing.
- [ ] **Step 3.4: Integrate all sections into `ProjectDetailPage.tsx`**
  Order sections logically:
  1. Breadcrumbs (Home / Projects / Title).
  2. Hero header: Title, category badges, status, thesis badge, GitHub button or private research indicator.
  3. Academic thesis confidentiality notice (Nexo only).
  4. Metrics banner (if project has quantifiable metrics).
  5. Personal role & confirmed contributions.
  6. Problem statement & Proposed solution (2-column layout).
  7. Architecture overview & interactive visual architecture diagram.
  8. Implemented features vs Planned roadmaps.
  9. Key technical decisions & trade-offs.
  10. Visual gallery / screenshots (if available).
  11. Verified tech stack badges.
  12. Challenges & engineering learnings.
  13. Cross-navigation related case studies.
  14. Return to catalog button.

---

### Task 4: Expand Testing & Quality Verification
**Files:**
- Modify: `tests/unit/projects-data.test.ts`
- Modify: `tests/e2e/catalog-and-detail.spec.ts`

- [ ] **Step 4.1: Expand unit tests**
  Add unit tests for `ArchitectureDiagram`, `KeyDecisionsCard`, and `MetricsBanner`.
- [ ] **Step 4.2: Expand Playwright E2E tests**
  Add tests for:
  - Category filtering (All, Software, Data & AI, Mobile).
  - Search query matching and clearing.
  - Empty state and reset button.
  - Detail page loading for all 8 projects.
  - Strict Nexo privacy assertions (zero github links, thesis badge present).
  - Light and dark theme consistency and computed background colors.
  - Responsive layout assertions at 390px, 768px, and 1440px.
- [ ] **Step 4.3: Run full verification suite**
  Execute `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build`, and `npx playwright test`.

---

### Task 5: Capture Visual Verification Screenshots
**Files:**
- Create: `docs/reports/screenshots/catalog-desktop-light-1440.png`
- Create: `docs/reports/screenshots/catalog-desktop-dark-1440.png`
- Create: `docs/reports/screenshots/catalog-mobile-light-390.png`
- Create: `docs/reports/screenshots/catalog-mobile-dark-390.png`
- Create: `docs/reports/screenshots/nexo-detail-desktop-light-1440.png`
- Create: `docs/reports/screenshots/nexo-detail-desktop-dark-1440.png`
- Create: `docs/reports/screenshots/nexo-detail-mobile-dark-390.png`
- Create: `docs/reports/screenshots/capital-cruise-detail-desktop-dark-1440.png`
- Create: `docs/reports/screenshots/capital-cruise-detail-desktop-light-1440.png`
- Create: `docs/reports/screenshots/talestar-detail-desktop-dark-1440.png`
- Create: `docs/reports/screenshots/talestar-detail-desktop-light-1440.png`

- [ ] **Step 5.1: Configure screenshot automation in Playwright**
  Ensure automated generation of high-resolution full-page screenshots for catalog and detail pages across themes and viewports.
- [ ] **Step 5.2: Execute screenshot suite and verify visual appearance**
  Verify that dark mode screenshots show dark background (`#09090b`) and light mode screenshots show `#ffffff`.

---

### Task 6: Deliver Completion Report
**Files:**
- Create: `docs/reports/phase-2b-completion-report.md`

- [ ] **Step 6.1: Compile Phase 2B Completion Report**
  Document executive summary, scope delivered, architecture & component decisions, visual gallery with links, test results, list of created/modified files, and pending items for Phase 3.
- [ ] **Step 6.2: Final quality review without committing or pushing**
  Confirm workspace is clean and awaiting user authorization.
