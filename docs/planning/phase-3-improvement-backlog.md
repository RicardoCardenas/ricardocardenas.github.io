# Backlog Priorizado de Mejoras — FASE 3
## Usabilidad, Experiencia de Usuario y Refinamiento de Interfaces

**Documento:** BACKLOG-FASE-3-001  
**Versión:** 1.3.0  
**Fecha:** 16 de noviembre de 2026  
**Origen:** Derivado de la Auditoría Heurística (Fase 3.1), Recorridos de Usuario, Revisión UX/UI (Fase 3.2), Auditoría de Accesibilidad WCAG 2.2 AA (Fase 3.3) y Auditoría de Rendimiento & SEO (Fase 3.4)  
**Estado:** ✅ **FASE 3.4 IMPLEMENTADA Y VERIFICADA (Lighthouse 100/100 Desktop en las 4 categorías, Perf Mobile 95-97, CLS 0.000, TBT <=108ms, SSG 11 rutas estáticas)**  

> [!NOTE]
> **Conciliación de alcance (Fases 3.2, 3.3 y 3.4):**
> - La Fase 3.2 completó las 9 tareas de usabilidad (UX-01 a UX-08 y A11Y-01).
> - La Fase 3.3 resolvió 8 barreras críticas de accesibilidad WCAG 2.2 AA (A11Y-02 a A11Y-09), alcanzando 0 infracciones axe-core.
> - La Fase 3.4 completó las 6 tareas de optimización de rendimiento, Core Web Vitals y SEO Técnico (PERF-01 a PERF-03 y SEO-01 a SEO-03), logrando 100/100 en SEO, 100/100 en Accesibilidad, 100/100 en Rendimiento de escritorio y CLS 0.000.

---

## 1. Criterios de Clasificación y Priorización

El backlog consolida todos los hallazgos técnicos y de diseño obtenidos en la Fase 3.1, categorizados por nivel de impacto y momento oportuno de implementación:

| Prioridad | Nivel de Severidad | Criterio de Ejecución |
| :---: | :---: | :--- |
| **P0 — Crítica** | Severidad 4 | **Bloqueante.** Impide completar un flujo esencial. Requiere corrección inmediata antes de cualquier avance. *(Total detectados: 0)* |
| **P1 — Alta** | Severidad 2 - 3 | **Antes del Despliegue.** Mejora sustancial de usabilidad o accesibilidad obligatoria antes de publicar en producción (Fase 3.2 / 3.3 / 3.5). |
| **P2 — Media** | Severidad 1 - 2 | **Pulido Fino (Fase 3.2 / v1.1).** Refinamiento visual, microinteracciones `emil-design-eng` y ergonomía de interacción. |
| **P3 — Baja** | Severidad 1 | **Deseable / Post-Lanzamiento.** Atajos avanzados y optimizaciones para casos extremos. |

---

## 2. Matriz General de Tareas del Backlog

| ID | Prioridad | Severidad | Módulo / Componente | Título de la Tarea | Estado | Fase / Verificación |
| :---: | :---: | :---: | :--- | :--- | :---: | :---: |
| **UX-01** | **P1 (Alta)** | 2 | `ProjectsCatalogPage.tsx` | Sincronización bidireccional de filtros de catálogo con URL Search Params (`?category=...&q=...`) y retorno con estado | ✅ **Completado** | Fase 3.2 (`ProjectsCatalogPage.test.tsx`, E2E test) |
| **UX-02** | **P1 (Alta)** | 2 | `Navbar.tsx` & `useScrollSpy.ts` | Implementación de Scroll Spy en la barra de navegación superior con `IntersectionObserver` | ✅ **Completado** | Fase 3.2 (`useScrollSpy.test.ts`, E2E test) |
| **A11Y-01** | **P1 (Alta)** | 2 | `Button.tsx`, `HeroArchitectureGraphic.tsx`, `Card.tsx` | Respeto riguroso de `prefers-reduced-motion` en microanimaciones y escalados interactivos | ✅ **Completado** | Fase 3.2 (Playwright E2E emulación reducida) |
| **UX-03** | **P2 (Media)** | 1 | `Button.tsx` & Disparadores | Estandarización de microinteracciones físicas táctiles (`active:scale-[0.98]`) según `emil-design-eng` | ✅ **Completado** | Fase 3.2 (Estilos base en `buttonVariants`) |
| **UX-04** | **P2 (Media)** | 1 | `HeroSection.tsx` | Clarificación del CTA de descarga de CV en el Hero ("Descargar CV Software (PDF)") y enlace contextual a Data & AI | ✅ **Completado** | Fase 3.2 (E2E verificado en ES y EN) |
| **UX-05** | **P2 (Media)** | 1 | `FeaturedProjectCard.tsx` & `ProjectsCatalogPage.tsx` | Elevación sutil en hover (`hover:-translate-y-0.5`) con transición de propiedades discretas | ✅ **Completado** | Fase 3.2 (Transiciones CSS discretas) |
| **UX-06** | **P2 (Media)** | 1 | `MobileNavSheet.tsx` | Respuesta táctil visual inmediata al tocar enlaces en dispositivos móviles (`active:bg-surface-muted/80`) | ✅ **Completado** | Fase 3.2 (Verificado en mobile viewports) |
| **UX-07** | **P3 (Baja)** | 1 | `ProjectsCatalogPage.tsx` | Atajo de teclado global (`/`) para enfocar instantáneamente el campo de búsqueda | ✅ **Completado** | Fase 3.2 (`ProjectsCatalogPage.test.tsx`, E2E test) |
| **UX-08** | **P3 (Baja)** | 1 | `HeroSection.tsx` | Optimización de espaciado vertical (`gap-2 sm:gap-2.5`, `text-[11px] sm:text-xs`) para badges en <360px | ✅ **Completado** | Fase 3.2 (Verificado en viewport 320px) |
| **A11Y-02** | **P1 (Alta)** | 2 | `tokens.css`, `SkillsSection.tsx` | Corrección de contrastes cromáticos en texto atenuado (`--text-muted`, `--text-secondary`, badges éxito/alerta) para superar ratio 4.5:1 en Light y Dark | ✅ **Completado** | Fase 3.3 (16 escaneos axe-core, 0 violaciones) |
| **A11Y-03** | **P1 (Alta)** | 2 | `Navbar.tsx` | Corrección de discrepancia *Label in Name* (WCAG 2.5.3) en el enlace de logotipo ("RC Ricardo Cardenas") | ✅ **Completado** | Fase 3.3 (axe-core test & Playwright) |
| **A11Y-04** | **P1 (Alta)** | 2 | `ProjectsCatalogPage.tsx`, `ContactSection.tsx` | Dimensionamiento de objetivos táctiles mínimos de 24×24px (WCAG 2.2 SC 2.5.8) en botón `X` y enlaces | ✅ **Completado** | Fase 3.3 (`accessibility-interaction.spec.ts`) |
| **A11Y-05** | **P1 (Alta)** | 2 | `ProjectsCatalogPage.tsx` | Región en vivo ARIA (`role="status" aria-live="polite" aria-atomic="true"`) para anuncios de resultados de búsqueda | ✅ **Completado** | Fase 3.3 (`accessibility-interaction.spec.ts`) |
| **A11Y-06** | **P1 (Alta)** | 2 | `MobileNavSheet.tsx` | Incorporación de `Dialog.Title` y `Dialog.Description` accesibles en cajón de navegación Radix UI | ✅ **Completado** | Fase 3.3 (axe-core Drawer Scan) |
| **A11Y-07** | **P2 (Media)** | 1 | `AppLayout.tsx` | Localización dinámica del enlace para saltar al contenido principal en español e inglés | ✅ **Completado** | Fase 3.3 (`accessibility-interaction.spec.ts`) |
| **A11Y-08** | **P1 (Alta)** | 2 | `CVSection.tsx`, `ContactSection.tsx` | Eliminación de anidamiento interactivo inválido `<a ...><Button>...</a>` en favor de `buttonVariants` en `<a>` | ✅ **Completado** | Fase 3.3 (W3C HTML5 validator / axe-core) |
| **A11Y-09** | **P2 (Media)** | 1 | `HeroArchitectureGraphic.tsx`, `ProjectCoverGraphic.tsx` | Declaración explícita de `role="img"` y `aria-label` descriptivo en diagramas e ilustraciones | ✅ **Completado** | Fase 3.3 (axe-core Scans) |
| **PERF-01** | **P1 (Alta)** | 2 | `router.tsx`, `AppLayout.tsx` | Code-splitting y lazy loading a nivel de rutas (`React.lazy` + `Suspense`), reduciendo el bundle de entrada de 446 kB a 258 kB (-42%) | ✅ **Completado** | Fase 3.4 (Vite build & Playwright E2E) |
| **PERF-02** | **P1 (Alta)** | 2 | `projects.ts`, `public/images/projects/` | Conversión y compresión de capturas gráficas a WebP (q85), reduciendo el peso de activos en 79.9% (1,463 KB a 294 KB) | ✅ **Completado** | Fase 3.4 (Script Python & Web Vitals) |
| **PERF-03** | **P1 (Alta)** | 2 | `scripts/prerender.js`, `package.json` | Pipeline de Prerenderizado Estático (SSG) de 11 rutas conocidas en tiempo de build para FCP instantáneo y crawlability universal | ✅ **Completado** | Fase 3.4 (Build post-procesado & 11 rutas HTML) |
| **SEO-01** | **P1 (Alta)** | 2 | `src/config/seo.ts`, `SEOHead.tsx` | Gestión centralizada de títulos bilingües, meta descripciones, canonicalización estricta y robots | ✅ **Completado** | Fase 3.4 (`seo-and-performance.spec.ts`) |
| **SEO-02** | **P1 (Alta)** | 2 | `src/config/seo.ts` | Datos estructurados Schema.org JSON-LD (`Person`, `WebSite`, `CollectionPage`, `TechArticle`, `BreadcrumbList`) | ✅ **Completado** | Fase 3.4 (JSON-LD test & Schema validator) |
| **SEO-03** | **P1 (Alta)** | 2 | `public/robots.txt`, `public/sitemap.xml`, `og-image.png` | Creación de directivas de rastreo, sitemap XML de 10 rutas públicas y tarjeta social Open Graph / Twitter Cards | ✅ **Completado** | Fase 3.4 (Lighthouse SEO 100/100) |

---

## 3. Especificación Técnica de Tareas Prioritarias

---

### [UX-01] Sincronización de Filtros y Búsqueda del Catálogo con la URL
- **Prioridad:** **P1 (Alta — Antes del Despliegue)**
- **Severidad:** 2 (Menor en usabilidad, pero impacto notable en navegación repetitiva).
- **Origen:** Hallazgo H3-01 (Auditoría Heurística) & Recorrido 3 (User Journeys).
- **Archivos a modificar:** `src/pages/ProjectsCatalogPage.tsx`.
- **Descripción técnica:**
  Reemplazar el estado local `useState` de categoría y búsqueda por el hook `useSearchParams` de React Router.
  - Al cambiar la categoría, actualizar la URL: `/projects?category=data-ai`.
  - Al escribir en el buscador, reflejar el query param con un ligero debounce: `/projects?category=data-ai&q=bigquery`.
  - Al cargar la página, inicializar los filtros desde la URL si existen parámetros válidos.
- **Criterio de Aceptación:**
  1. Si un usuario filtra por `Data & AI`, abre el detalle de un proyecto y presiona el botón "Atrás" del navegador o "Volver al catálogo", la página de catálogo conserva activa la categoría `Data & AI`.
  2. Si un usuario comparte el enlace `/projects?category=software-engineering`, la página se abre mostrando directamente los 4 proyectos de software.

---

### [UX-02] Scroll Spy en Navbar Desktop
- **Prioridad:** **P1 (Alta — Antes del Despliegue)**
- **Severidad:** 2 (Visibilidad del estado del sistema).
- **Origen:** Hallazgo H1-01 (Auditoría Heurística).
- **Archivos a modificar:** `src/components/layout/Navbar.tsx`, creación de hook `src/hooks/useScrollSpy.ts`.
- **Descripción técnica:**
  Crear un hook reutilizable basado en la API nativa del navegador `IntersectionObserver` que detecte la sección visible en el centro del viewport (`threshold: 0.3` o `rootMargin: '-20% 0px -70% 0px'`).
  - Aplicar las clases semánticas `text-primary font-semibold border-b-2 border-primary` al enlace de navegación correspondiente a la sección activa.
- **Criterio de Aceptación:**
  1. Al hacer scroll por la Home, el enlace superior correspondiente a la sección actualmente leída (`Sobre mí`, `Tecnologías`, `Proyectos`, `Formación`, `Currículum`, `Contacto`) se resalta visualmente en color primario con una transición suave.

---

### [A11Y-01] Soporte para `prefers-reduced-motion` en Todos los Gráficos y Microinteracciones
- **Prioridad:** **P1 (Alta — Accesibilidad WCAG 2.2 AA)**
- **Severidad:** 2 (Accesibilidad sensorial para usuarios con trastornos vestibulares).
- **Origen:** Auditoría UX/UI Complementaria (Sección 3).
- **Archivos a modificar:** `src/components/ui/HeroArchitectureGraphic.tsx`, `src/components/projects/ProjectCoverGraphic.tsx`, `src/components/ui/Badge.tsx`.
- **Descripción técnica:**
  Asegurar que todas las clases que aplican transformaciones o animaciones continuas (ej. el pulso verde del badge de disponibilidad o el escalado hover de diagramas) cuenten con las clases `motion-reduce:animate-none` y `motion-reduce:transform-none`.
- **Criterio de Aceptación:**
  1. Con la preferencia de sistema `prefers-reduced-motion: reduce` activada en el navegador o sistema operativo, ninguna animación o transformación se reproduce de forma continua.

---

### [UX-03] Estandarización de Respuesta Táctil Física (`active:scale-[0.98]`)
- **Prioridad:** **P2 (Media — Pulido Fino)**
- **Severidad:** 1 (Cosmético / Física de la interfaz).
- **Origen:** Directriz `emil-design-eng` ("Buttons must feel responsive to press").
- **Archivos a modificar:** `src/components/ui/Button.tsx`, enlaces tipo botón.
- **Descripción técnica:**
  Incorporar en los estilos base de `buttonVariants` la clase `active:scale-[0.98] transition-transform duration-100 ease-out select-none`.
- **Criterio de Aceptación:**
  1. Al presionar cualquier botón con el ratón o el dedo en una pantalla táctil, el elemento se comprime ligeramente y regresa a su tamaño natural al soltarlo, ofreciendo retroalimentación mecánica perceptible.

---

### [UX-04] Clarificación del CTA de Descarga de CV en el Hero
- **Prioridad:** **P2 (Media — Claridad de Contenido)**
- **Severidad:** 1 (Claridad de expectativas).
- **Origen:** Hallazgo H6-01 (Auditoría Heurística) & Recorrido 1 (User Journeys).
- **Archivos a modificar:** `src/components/sections/HeroSection.tsx`.
- **Descripción técnica:**
  Ajustar la redacción del botón secundario del Hero para explicitar la especialidad o guiar al usuario que busque la versión analítica:
  - ES: `"Descargar CV Software (PDF)"` con texto auxiliar o tooltip hacia Data & AI.
  - EN: `"Download Software CV (PDF)"`.
- **Criterio de Aceptación:**
  1. El reclutador comprende inequívocamente qué documento está descargando antes de hacer clic.

---

### [UX-05] Elevación Sutil y Transición Controlada en Tarjetas de Proyecto
- **Prioridad:** **P2 (Media — Pulido Fino)**
- **Severidad:** 1 (Microinteracciones de Emil Kowalski).
- **Origen:** Tabla de Refinamiento de Emil Kowalski (Sección 3).
- **Archivos a modificar:** `src/components/ui/Card.tsx`, `src/pages/ProjectsCatalogPage.tsx`.
- **Descripción técnica:**
  Reemplazar `transition-all duration-200` por propiedades discretas:
  `transition-[border-color,box-shadow,transform] duration-200 ease-out hover:border-primary/40 hover:-translate-y-0.5`.
- **Criterio de Aceptación:**
  1. Al pasar el cursor sobre las tarjetas del catálogo o proyectos destacados, la tarjeta se eleva 2 píxeles de manera fluida y su sombra se intensifica sutilmente.

---

### [UX-06] Respuesta Táctil en Enlaces del Menú Móvil
- **Prioridad:** **P2 (Media — Usabilidad Móvil)**
- **Severidad:** 1 (Feedback táctil).
- **Origen:** Auditoría de Ergonomía Móvil (Sección 4).
- **Archivos a modificar:** `src/components/layout/MobileNavSheet.tsx`.
- **Descripción técnica:**
  Añadir el estado `active:bg-surface-muted active:scale-[0.99] transition-[background-color,transform] duration-75` en los enlaces del menú móvil para confirmar la selección antes del cierre del panel.
- **Criterio de Aceptación:**
  1. Al pulsar con el pulgar sobre una opción del menú móvil, el fondo se oscurece instantáneamente bajo el dedo.

---

### [UX-07] Atajo de Teclado Rápido (`/`) para Búsqueda en Catálogo
- **Prioridad:** **P3 (Baja — Conveniencia)**
- **Severidad:** 1 (Atajos avanzados).
- **Origen:** Hallazgo H7-01 (Auditoría Heurística).
- **Archivos a modificar:** `src/pages/ProjectsCatalogPage.tsx`.
- **Descripción técnica:**
  Escuchar el evento `keydown` global en la página de catálogo; si la tecla es `/` y el foco no está en otro input, prevenir el comportamiento por defecto y enfocar el input de búsqueda.
- **Criterio de Aceptación:**
  1. Presionar `/` en `/projects` posiciona el cursor en el campo de búsqueda inmediatamente.

---

### [UX-08] Optimización de Badges en Viewports Ultra-Angostos (<360px)
- **Prioridad:** **P3 (Baja — Casos Extremos)**
- **Severidad:** 1 (Estética en pantallas pequeñas).
- **Origen:** Hallazgo H8-02 (Auditoría Heurística).
- **Archivos a modificar:** `src/components/sections/HeroSection.tsx`.
- **Descripción técnica:**
  Ajustar las clases contenedoras de los badges superiores a `flex flex-wrap items-center gap-2 sm:gap-2.5` con `text-[11px]` en pantallas pequeñas para permitir un salto de línea limpio sin saturación.
- **Criterio de Aceptación:**
  1. En pantallas de 320px de ancho, los badges se presentan equilibrados con márgenes legibles.

---

## 4. Estado de Implementación y Trazabilidad

```mermaid
flowchart TD
    subgraph FASE_3_2["Fase 3.2: Refinamiento UX/UI e Interacciones (COMPLETADO)"]
        UX01["UX-01 a UX-08 + A11Y-01: Usabilidad, Ergonomía & Reduced Motion ✅"]
    end

    subgraph FASE_3_3["Fase 3.3: Auditoría y Refinamiento WCAG 2.2 AA (COMPLETADO)"]
        A11Y_AUDIT["A11Y-02 a A11Y-09: Contraste, Focus, Teclado, Label-in-Name & axe-core ✅"]
    end

    subgraph FASE_3_4["Fase 3.4: Rendimiento, Core Web Vitals & SEO Técnico (COMPLETADO)"]
        PERF_AUDIT["PERF-01 a 03 & SEO-01 a 03: Code-splitting, WebP, SSG 11 rutas, SEO 100/100, CLS 0.000 ✅"]
    end

    subgraph FASE_3_5["Fase 3.5: Validación Integral de Preproducción (EN EJECUCIÓN)"]
        PREPROD["Validación consolidada, Quality Gate integral, LCP móvil & preparación para despliegue"]
    end

    FASE_3_2 --> FASE_3_3
    FASE_3_3 --> FASE_3_4
    FASE_3_4 --> FASE_3_5
```

---

## 5. Registro de Pendientes Técnicos y Requisitos para Despliegue (Fase 3.5 y Fase 4)

Los siguientes aspectos quedan formalmente documentados como pendientes y requisitos de publicación:

### 5.1. LCP en Dispositivos Móviles (Pendiente de Optimización en Fase 3.5)
- **Valores Registrados en Auditoría de Fase 3.4 (Lighthouse Mobile):**
  - Home: **2.621 s**
  - Catálogo: **2.754 s**
  - Nexo: **2.601 s**
- **Umbral Orientativo de Google ("Bueno"):** $\le 2.500$ ms.
- **Estado:** Se reconoce con rigor técnico que, si bien el TBT móvil cayó en más del 92% ($\le 108$ ms) y el CLS es perfecto (0.000), el LCP móvil se ubica ligeramente por encima del umbral de buena experiencia ($\approx 2.6 - 2.7$ s) bajo simulación de CPU estrangulada y red 4G lenta.
- **Acción en Fase 3.5:** Repetir mediciones bajo condiciones controladas e investigar pequeñas mejoras justificadas (ej. carga prioritaria de fuentes, priorización de recursos críticos) sin comprometer la estabilidad ni añadir complejidad innecesaria.

### 5.2. Dominio Canónico de Producción (Requisito de Publicación en Fase 4)
- **Estado Actual:** El dominio definitivo aún **no ha sido confirmado** por el usuario. La aplicación opera con una arquitectura totalmente desacoplada mediante `getSiteUrl()`, utilizando `http://localhost:4173` como origen local predeterminado de pruebas.
- **Requisitos Obligatorios para Publicación:**
  1. El usuario confirmará el dominio HTTPS aprobado.
  2. Inyectar `VITE_SITE_URL=https://<dominio-aprobado>` en el entorno de build de la plataforma de hosting.
  3. Ejecutar `npm run build` para generar dinámicamente `sitemap.xml`, `robots.txt`, etiquetas canonicals y metadatos JSON-LD.
  4. Verificar que ningún activo de producción haga referencia a `localhost`.
  5. **Restricción:** No seleccionar, inferir ni adquirir dominios de manera automatizada.

### 5.3. Códigos de Estado HTTP y Comportamiento de Hosting (Requisito de Hosting en Fase 4)
- **Estado Actual:** En servidor local `vite preview`, el fallback SPA emite HTTP 200 mientras React Router renderiza la vista 404 con `<meta name="robots" content="noindex, nofollow">` (evitando indexación). Se generó el archivo estático `dist/404.html`.
- **Requisitos Obligatorios para Hosting en Producción:**
  1. Rutas existentes deben responder con código **HTTP 200 OK**.
  2. Rutas no existentes deben responder con código real **HTTP 404 Not Found** sirviendo `404.html` (evitando soft 404).
  3. Página 404 debe preservar la directiva `noindex, nofollow` y estar excluida del sitemap.
- **Estado de Aceptación:** Este criterio queda clasificado como **PENDIENTE DE CONFIGURACIÓN DE HOSTING (Fase 4)**. No se marcará como PASS de producción hasta ser comprobado en el servidor final.

