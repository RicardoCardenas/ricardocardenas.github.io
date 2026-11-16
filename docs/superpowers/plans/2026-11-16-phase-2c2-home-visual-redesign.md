# Phase 2C.2 Implementation Plan: Home Visual Redesign based on Approved Mockup

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the visual redesign of the Home page (`/`) based on the approved mockup in `docs/design/references/approved-portfolio-reference.png`, establishing a two-column editorial Hero with an abstract technical architecture graphic, a refined RC monogram, a craftsmanship-focused About section, authentic visual previews in Featured Project cards, and responsive polish according to `emil-design-eng`, while strictly upholding personal and academic privacy.

**Architecture:** Component-driven React 19 + TypeScript architecture with Tailwind CSS v4, enhancing presentational components in `src/components/sections/` and `src/components/ui/` with semantic CSS tokens, explicit transitions, and accessible interactions.

**Tech Stack:** React 19, TypeScript 5.8, Tailwind CSS v4, Lucide React, i18next, Vitest, Playwright.

**Spec:** [docs/design/references/approved-portfolio-reference.png](file:///C:/Ricardo/Portafolio/docs/design/references/approved-portfolio-reference.png), [docs/design/visual-fidelity-audit.md](file:///C:/Ricardo/Portafolio/docs/design/visual-fidelity-audit.md), [docs/design/visual-assets-inventory.md](file:///C:/Ricardo/Portafolio/docs/design/visual-assets-inventory.md), [docs/planning/phase-2c-implementation-plan.md](file:///C:/Ricardo/Portafolio/docs/planning/phase-2c-implementation-plan.md).

## Global Constraints

- **Visual Style:** Minimalist Professional (B) with primary violet palette (`#7C3AED` / `#8B5CF6` / `#A78BFA`), Zinc neutral surfaces (`#FFFFFF` in light, `#09090B` / `#0B0B12` in dark), and zero "AI slop".
- **Strict Personal Privacy:** NO personal photos (no `Ricardo.png`, no `Yo.png`, no AI-generated portraits). Retain and elevate the geometric "RC" monogram.
- **Strict Academic Privacy:** NO numeric GPA, NO private grade records, NO transcripts, NO private university certificates. Retain strictly: Software Engineering, UPC, 8th semester, and official distinction **Décimo Superior / Top 10%**.
- **Nexo Academic Privacy:** Research thesis reservation badge, 100% private codebase, 0 repository links, and abstract authorized topology without confidential business data.
- **Authentic Project Assets:** Real visual assets only:
  - Capital Cruise: `/images/projects/capital-cruise-db.png`
  - TaleStar Mobile: `/images/projects/talestar-ar.png`
  - TheLook eCommerce Pipeline: `/images/projects/thelook-dashboard.png`
  - Nexo: Abstract authorized network/graph topology graphic.
- **Dual Theme & i18n:** Full light/dark mode compatibility and complete ES/EN localization across all strings.
- **Quality Gates:** 0 TypeScript errors, 0 ESLint errors/warnings, 31/31 Vitest passing, 38/38 Playwright tests passing, 0px horizontal overflow across all viewports.
- **No Git commits or pushes automatically.**

## Review Focus

1. **Two-Column Hero Responsiveness:** Verify desktop renders 60/40 two-column layout; tablet and mobile (<1024px) stack smoothly with zero horizontal overflow.
2. **Abstract Architecture Graphic:** Verify it renders cleanly in both Light and Dark mode without jarring contrast or illegible nodes.
3. **Featured Projects Card Order & Assets:** Verify cards render in order: 1. Capital Cruise, 2. Nexo, 3. TaleStar Mobile, 4. TheLook eCommerce, with correct images and badges.
4. **Privacy Assertions:** Verify no personal photos and no GPA/grades are exposed in the DOM or markup.
5. **Interactive Polish:** Verify `:active:scale-[0.98]` on buttons and cards, smooth 180ms ease-out transitions, and full keyboard accessibility.

---

### Task 1: Update Project Data with Cover Images and Priority Order
**Files:**
- Modify: `src/data/projects.ts`
- Test: `tests/unit/projects-data.test.ts`

- [ ] **Step 1.1: Configure cover images and priority order in `src/data/projects.ts`**
  - Set `coverImage: '/images/projects/capital-cruise-db.png'` for Capital Cruise.
  - Set `coverImage: '/images/projects/talestar-ar.png'` for TaleStar Mobile.
  - Set `coverImage: '/images/projects/thelook-dashboard.png'` for TheLook eCommerce Pipeline.
  - Set `coverImage: '/images/projects/nexo-topology.svg'` (or inline SVG generator) for Nexo.
  - Verify `featured` is true for Capital Cruise, Nexo, TaleStar Mobile, and TheLook.
- [ ] **Step 1.2: Run unit tests**
  `npm run test tests/unit/projects-data.test.ts`

---

### Task 2: Create Hero Abstract Architecture Graphic Component
**Files:**
- Create: `src/components/ui/HeroArchitectureGraphic.tsx`
- Test: `tests/components/SpecializedComponents.test.tsx`

- [ ] **Step 2.1: Build `HeroArchitectureGraphic.tsx`**
  - Design a non-personal, craft-level interactive technical component modeling modern software architecture.
  - Display layered system components:
    - Top bar: Simulated terminal/window header with 3 window dots and title (e.g. `system-architecture.tsx`).
    - Core services grid: Modular Monolith API, Polyglot Database Cluster (PostgreSQL + Neo4j Graph), Background Task Queue (Redis/Celery).
    - Status indicators: Active service pulses (`animate-pulse`), low-latency telemetry tags (`< 45ms`, `99.9% Uptime`, `ACID / Vector`).
    - Clean border and subtle glow (`border-primary/20 bg-surface/80 dark:bg-surface-elevated/70 backdrop-blur-sm`).
    - Adapts seamlessly to Light mode (crisp slate/violet tones) and Dark mode (deep zinc with violet accents).
- [ ] **Step 2.2: Add unit test in `tests/components/SpecializedComponents.test.tsx`**
  - Verify `HeroArchitectureGraphic` renders without errors.

---

### Task 3: Redesign `HeroSection.tsx` into Two-Column Editorial Layout
**Files:**
- Modify: `src/components/sections/HeroSection.tsx`
- Modify: `src/components/ui/Avatar.tsx` (refine geometric squircle monogram)
- Test: `tests/e2e/home-visual.spec.ts`

- [ ] **Step 3.1: Refine `Avatar.tsx` Monogram RC**
  - Ensure squircle shape with subtle violet gradient (`from-primary/20 via-primary/5 to-surface-elevated`), crisp 1px border (`border-primary/30`), and refined Inter/Geist typography.
- [ ] **Step 3.2: Rebuild `HeroSection.tsx`**
  - Two-column layout in desktop (`lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center`).
  - Left column (7 cols / ~60%):
    - Top pill badge: `Software Engineering • Data & AI`.
    - Headline: `Ricardo Cardenas` in display weight, plus full name `Ricardo Fernando Cardenas Minaya` in accessible subtitle.
    - Title: `Ingeniero de Software (en formación)` / `Software Engineer (Student)`.
    - Bio: Focused on modular architectures, microservices, polyglot persistence, and verifiable AI.
    - Availability badge with live pulsing green indicator.
    - Action buttons: `Ver proyectos →` (primary violet) and `Descargar CV v` (outline with download icon).
    - Social links row: GitHub, LinkedIn, Email.
  - Right column (5 cols / ~40%):
    - Renders `<HeroArchitectureGraphic />`.
  - Bottom Stats Banner (Horizontal Strip spanning the full container width):
    - 4 metric pills with icons:
      1. `+8 Proyectos / Projects`
      2. `3 Áreas de enfoque / Focus Areas`
      3. `+12 Tecnologías / Technologies`
      4. `UPC • Décimo Superior` (Top 10%)
- [ ] **Step 3.3: Mobile adaptation**
  - Stacks vertically cleanly on viewports < 1024px.
  - The stats banner wraps into a responsive 2x2 grid on mobile.

---

### Task 4: Redesign `AboutSection.tsx` with Craftsmanship Focus
**Files:**
- Modify: `src/components/sections/AboutSection.tsx`
- Test: `tests/components/SpecializedComponents.test.tsx`

- [ ] **Step 4.1: Reorganize `AboutSection.tsx`**
  - Structure into two balanced columns:
    - Left column: Craftsmanship visual card representing software engineering principles (clean architecture layers, terminal inspection, domain boundaries).
    - Right column:
      - Editorial presentation and approach.
      - 4 structured cards matching the mockup:
        1. `Formación`: `Universidad Peruana de Ciencias Aplicadas (UPC)` with `Décimo Superior / Top 10%`.
        2. `Enfoque`: `Backend • Datos • IA • Cloud`.
        3. `Disponibilidad`: `Prácticas preprofesionales`.
        4. `Idiomas`: `Español (Nativo) • Inglés (Avanzado B2)`.
  - Strictly omit numeric GPA or private grade records.

---

### Task 5: Redesign `FeaturedProjectCard.tsx` and `FeaturedProjectsSection.tsx`
**Files:**
- Modify: `src/components/ui/FeaturedProjectCard.tsx`
- Modify: `src/components/sections/FeaturedProjectsSection.tsx`
- Test: `tests/components/SpecializedComponents.test.tsx`

- [ ] **Step 5.1: Enhance `FeaturedProjectCard.tsx`**
  - Add top visual preview banner (`aspect-[16/10] overflow-hidden rounded-t-xl relative bg-surface-muted/60`):
    - Real screenshots for Capital Cruise, TaleStar Mobile, and TheLook.
    - Abstract authorized topology banner for Nexo with thesis badge.
    - Micro-zoom hover effect: `group-hover:scale-[1.03] transition-transform duration-300 ease-out`.
  - Structured card content: Category badge, Title, concise summary, primary tech pills (`slice(0, 4)`), real status label, and action footer.
  - Action footer: `Ver caso de estudio →` (direct link) and `GitHub` link or `Código Privado` indicator.
  - Add active state: `active:scale-[0.98]`.
- [ ] **Step 5.2: Configure `FeaturedProjectsSection.tsx`**
  - Ensure exact priority order:
    1. Capital Cruise
    2. Nexo
    3. TaleStar Mobile
    4. TheLook eCommerce Pipeline
  - Category filter pills at top matching mockup (`Todos`, `Software Engineering`, `Data & AI`, `Mobile`).

---

### Task 6: Minor Refinements in Remaining Home Sections
**Files:**
- Modify: `src/components/sections/SkillsSection.tsx`
- Modify: `src/components/sections/EducationSection.tsx`
- Modify: `src/components/sections/CVSection.tsx`
- Modify: `src/components/sections/ContactSection.tsx`

- [ ] **Step 6.1: SkillsSection & EducationSection**
  - Subtle card surface contrast and hover elevation.
  - Ensure UPC highlights Décimo Superior / Top 10% and AZ-900.
- [ ] **Step 6.2: CVSection**
  - Connect download buttons to `/cv/CV_Ricardo_Cardenas_Software_Backend.pdf`.
- [ ] **Step 6.3: ContactSection**
  - Refine action cards for Email, LinkedIn, GitHub with active tactile feedback.

---

### Task 7: Full Quality Gate & Visual Capture Verification
**Files:**
- Modify: `tests/e2e/home-visual.spec.ts`
- Modify: `tests/e2e/navigation.spec.ts`
- Create: `docs/reports/phase-2c2-completion-report.md`

- [ ] **Step 7.1: Run typecheck and lint**
  - `npm run typecheck`
  - `npm run lint`
- [ ] **Step 7.2: Run unit and component tests**
  - `npm run test`
- [ ] **Step 7.3: Run production build**
  - `npm run build`
- [ ] **Step 7.4: Run full Playwright test suite**
  - `npx playwright test`
  - Regenerate screenshots:
    - `hero-desktop-light-1440.png`
    - `hero-desktop-dark-1440.png`
    - `home-desktop-light-1440.png`
    - `home-desktop-dark-1440.png`
    - `home-tablet-light-768.png`
    - `hero-mobile-light-390.png`
    - `hero-mobile-dark-390.png`
    - `home-mobile-light-390.png`
    - `home-mobile-dark-390.png`
- [ ] **Step 7.5: Visual inspection against `approved-portfolio-reference.png`**
  - Inspect generated screenshots and document comparisons.
- [ ] **Step 7.6: Compile completion report**
  - Write `docs/reports/phase-2c2-completion-report.md`.
