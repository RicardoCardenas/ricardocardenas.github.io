# Plan de Implementación — FASE 2: Vistas, Secciones y Casos de Estudio

> **Para agentes ejecutores:** HABILIDAD REQUERIDA: Usar `superpowers:executing-plans` para implementar este plan tarea por tarea en el agente principal tras recibir la aprobación explícita del usuario. Cada paso utiliza la sintaxis de casillas de verificación (`- [ ]`) para seguimiento estricto.

**Meta:** Implementar la interfaz de usuario completa y definitiva del portafolio profesional de Ricardo Fernando Cardenas Minaya: Home con todas sus secciones semánticas, Catálogo de proyectos con filtros multi-categoría reactivos, Páginas de detalle técnico en profundidad (Casos de Estudio), módulo de descarga bimodal de CVs, certificaciones verificadas y soporte bilingüe integral (ES/EN).

**Arquitectura:** SPA basada en React 19, TypeScript estricto, React Router 7 y Tailwind CSS v4, consumiendo modelos de datos inmutables tipados, tokens semánticos en variables CSS (`:root` y `.dark`), microinteracciones Emil Kowalski (`:active scale(0.98)`, `cubic-bezier(0.16,1,0.3,1)`), navegación suave por anclas internas con `useHashScroll` y componentes accesibles basados en Radix UI.

**Tech Stack:** React 19, TypeScript 5.7+, Vite 6, Tailwind CSS v4, React Router 7, Radix UI (Dialog, DropdownMenu, Tabs, Tooltip), Lucide React, react-i18next, Vitest, React Testing Library, Playwright.

**Especificación base:** [docs/planning/roadmap.md](file:///C:/Ricardo/Portafolio/docs/planning/roadmap.md), [docs/design/design-system.md](file:///C:/Ricardo/Portafolio/docs/design/design-system.md), [docs/design/mockups/view-1-home-desktop.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-1-home-desktop.md), [docs/design/mockups/view-2-home-mobile.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-2-home-mobile.md), [docs/design/mockups/view-3-projects-catalog.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-3-projects-catalog.md), [docs/design/mockups/view-4-project-detail.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-4-project-detail.md) y [docs/content/project-inventory.md](file:///C:/Ricardo/Portafolio/docs/content/project-inventory.md).

---

## Restricciones Globales

- **Estilo Visual:** Minimalista Profesional (B) con acento violeta (`#7C3AED` / `#A78BFA` / `#8B5CF6`) y superficies neutras limpias en zinc/slate.
- **Cero AI Slop:** Sin gradientes neón excesivos, sin fondos de videojuego, sin animaciones holográficas ni efectos de partículas que degraden la seriedad profesional.
- **Rigor de Contenido:** Prohibido inventar métricas, cargos, empresas o proyectos. Usar exclusivamente la información confirmada en los CVs oficiales y en la auditoría de repositorios.
- **Confidencialidad de Tesis Nexo:** Nexo se presenta como caso de estudio académico en desarrollo. No enlazar a repositorios externos de código, ni publicar secretos o esquemas internos sensibles.
- **Accesibilidad y Movilidad:** Conformidad WCAG 2.2 AA (contraste $\ge 4.5:1$, navegación por teclado, focus visible, áreas táctiles $\ge 44 \times 44$px y respeto a `prefers-reduced-motion`).
- **Control de Cambios:** No iniciar la implementación antes de la aprobación explícita del usuario. No realizar `git push` sin autorización.

---

## Tareas de Implementación de Fase 2

### Tarea 1: Modelo Tipado de Certificaciones y Dataset Verificado
- [ ] Definir interface `Certification` y categorías en `src/types/index.ts` conforme a `docs/content/content-model.md`.
- [ ] Crear dataset inmutable en `src/data/certifications.ts` con las credenciales verificadas de Ricardo:
  - *Microsoft Certified: Azure Fundamentals (AZ-900)* (Microsoft, Sep 2026).
  - *TOEFL ITP Nivel B2* (ETS, Jun 2024).
  - *Databases for Data Scientists* (University of Colorado Boulder / Coursera, Jul 2026).
  - *Python for Everybody Specialization* (University of Michigan / Coursera, Jul 2026).
  - *Google Cybersecurity Certificate* (Google / Coursera, Jul 2025).
  - *Scrum Fundamentals Certified (SFC)* (SCRUMstudy, May 2024).
- [ ] Crear prueba unitaria en `tests/unit/certifications-data.test.ts` que valide estructura, fechas y URLs de verificación.
- [ ] Ejecutar prueba y verificar pase (`npm run test`).

### Tarea 2: Primitivas Especializadas y Componentes de Sección
- [ ] Crear componente `src/components/ui/Avatar.tsx` con monograma tipográfico accesible `RC` en gradiente sutil violeta/zinc y soporte para imagen real.
- [ ] Crear componente `src/components/ui/SectionHeader.tsx` para estandarizar títulos H2 con badge de categoría y subtítulo descriptivo.
- [ ] Crear componente `src/components/ui/CertificationCard.tsx` con icono del emisor, badge oficial/curso y botón accesible de credencial.
- [ ] Crear componente `src/components/ui/SkillCategoryCard.tsx` con diseño limpio de badges agrupados por dominio.
- [ ] Crear pruebas de renderizado en `tests/components/` para los nuevos componentes.
- [ ] Ejecutar pruebas y verificar pase (`npm run test`).

### Tarea 3: Sección Hero y Presentación Profesional
- [ ] Crear componente modular `src/components/sections/HeroSection.tsx`:
  - Badge de disponibilidad interactivo (`● Disponible para prácticas preprofesionales` / `Open to internships`).
  - Nombre completo con jerarquía H1 y título profesional multi-disciplinario (Software, Backend, DDD, Cloud & Data).
  - Resumen de perfil destacando UPC, 8.º ciclo y pertenencia al **Décimo Superior**.
  - Botones de acción principales: CTA primario con scroll suave a `#featured-projects`, CTA secundario con scroll a `#cv` y enlaces rápidos de contacto (GitHub, LinkedIn, Email).
- [ ] Integrar microinteracciones táctiles `:active scale(0.98)` y transiciones suaves respetando `prefers-reduced-motion`.
- [ ] Validar visualización en desktop ($\ge 1024$px) y móvil ($375$px).

### Tarea 4: Sección Sobre Mí y Formación Académica UPC
- [ ] Crear componente `src/components/sections/AboutSection.tsx` con layout bimodal:
  - *Columna 1: Enfoque de Ingeniería:* Principios DDD, separación de Bounded Contexts, persistencia relacional/grafo/vectorial, calidad mediante pruebas y mantenibilidad.
  - *Columna 2: Trayectoria Académica UPC:* Universidad Peruana de Ciencias Aplicadas, Ingeniería de Software, periodo Mar 2023 - Dic 2027, distinción Décimo Superior e idiomas (Español Nativo, Inglés Avanzado B2).
- [ ] Crear componente `src/components/sections/EducationSection.tsx` para alojar la línea de formación universitaria y la cuadrícula de certificaciones verificadas.
- [ ] Validar navegación fluida por ancla `#about` y `#education`.

### Tarea 5: Sección de Tecnologías y Dominios de Especialidad
- [ ] Crear componente `src/components/sections/SkillsSection.tsx` agrupado en 4 dominios técnicos:
  1. *Backend & Lenguajes:* Java 21 LTS (Spring Boot 3), C# (.NET 9), Python (FastAPI), TypeScript, Flutter/Dart.
  2. *Arquitectura & Cloud:* Domain-Driven Design (DDD), CQRS, Microservicios, Docker Compose, Microsoft Azure, CI/CD GitHub Actions.
  3. *Bases de Datos & Analytics:* PostgreSQL + pgvector, Neo4j, DuckDB, Google Cloud BigQuery, Power BI con DAX.
  4. *IA Aplicada & Herramientas:* LangGraph (diseño/tesis), Celery, Redis, Modelos Locales (Ollama), Pytest, Vitest.
- [ ] Incorporar badges semánticos con tipografía monoespaciada para cada herramienta.
- [ ] Validar navegación fluida por ancla `#skills`.

### Tarea 6: Sección de Proyectos Destacados en la Home
- [ ] Crear componente `src/components/sections/FeaturedProjectsSection.tsx` que presente los 4 proyectos principales:
  1. **Nexo — Agentic GraphRAG** (Tesis UPC, Software Engineering & Data/AI).
  2. **Capital Cruise** (Spring Boot 3, PostgreSQL, Flyway, Vue 3).
  3. **TaleStar Mobile** (Flutter BLoC, ARCore, Clean Architecture).
  4. **TheLook eCommerce Pipeline** (GCP BigQuery, BigQuery ML, Dataform).
- [ ] Refactorizar tarjeta `ProjectCard.tsx` para mostrar badges de categoría, badges de stack tecnológico, botón "Ver estudio de caso" y enlace a GitHub (desactivado con etiqueta informativa para Nexo).
- [ ] Agregar botón centrado de acceso al catálogo completo: *"Ver catálogo completo (8 proyectos) &rarr;"*.
- [ ] Validar navegación fluida por ancla `#featured-projects`.

### Tarea 7: Catálogo Completo de Proyectos con Filtros y Búsqueda
- [ ] Optimizar `src/pages/ProjectsCatalogPage.tsx`:
  - Barra de búsqueda reactiva con debouncing (300ms) sobre título, descripción y stack.
  - Chips de filtro por categoría (`Todos`, `Software Engineering`, `Data & AI`, `Mobile`) con recuento dinámico de proyectos.
  - Estado `EmptyState` cuando no haya coincidencias con botón para restablecer filtros.
  - Grid responsivo de tarjetas completas para los 8 proyectos verificados.
- [ ] Validar estados de carga y transiciones entre filtros sin pérdida de foco.

### Tarea 8: Página de Estudio de Caso Técnico en Profundidad
- [ ] Enriquecer `src/pages/ProjectDetailPage.tsx`:
  - Breadcrumbs accesibles (`Inicio` / `Proyectos` / `Nombre del Proyecto`).
  - Cabecera con título, tags de categorías, estado de madurez técnica y badge de tesis/privacidad.
  - Ficha de rol y contribuciones personales confirmadas.
  - Desglose estructurado: 1. Problema de negocio, 2. Solución implementada.
  - Sección transparente: Funcionalidades Implementadas vs Funcionalidades Planificadas (fases futuras).
  - Pila tecnológica completa con etiquetas monoespaciadas.
  - Sección de proyectos relacionados para navegación cruzada.
  - Comportamiento estricto para Nexo: ocultamiento del botón de código fuente externo y renderizado de nota explicativa de tesis UPC.

### Tarea 9: Módulo de Descarga de CV y Sección de Contacto
- [ ] Crear componente `src/components/sections/CVSection.tsx` con dos tarjetas de descarga:
  - *CV Software Engineering & Backend:* Enlace directo a `/cv/CV_Ricardo_Cardenas_Minaya-Software.pdf` con botón de descarga explícito.
  - *CV Data Engineering & Analytics:* Enlace directo a `/cv/CV_Ricardo_Cardenas-Data.pdf` con botón de descarga explícito.
- [ ] Crear componente `src/components/sections/ContactSection.tsx`:
  - Enlace directo a correo (`mailto:fernandocm1112@gmail.com`) con botón accesible para copiar email al portapapeles.
  - Enlaces a perfiles profesionales verificados: LinkedIn y GitHub.
  - Indicador de ubicación geográfica (Lima, Perú) y disponibilidad horaria.

### Tarea 10: Diccionarios de Internacionalización Completos (ES/EN)
- [ ] Crear/actualizar archivos de localización en `src/i18n/locales/`:
  - `es/home.json` y `en/home.json` (textos completos del Hero, About, Skills, Education, Contact).
  - `es/projects.json` y `en/projects.json` (títulos, descripciones y etiquetas técnicas).
  - `es/certifications.json` y `en/certifications.json`.
- [ ] Validar que el 100% de los textos en pantalla se sincronicen reactivamente con el toggle de idioma.

### Tarea 11: Auditoría Final de Fase 2 y Verificación Multi-dispositivo
- [ ] Ejecutar comprobación de tipos estricta (`npm run typecheck`).
- [ ] Ejecutar linter (`npm run lint`).
- [ ] Ejecutar suite de pruebas unitarias (`npm run test`).
- [ ] Ejecutar compilación de producción (`npm run build`).
- [ ] Ejecutar suite E2E en Playwright (`npx playwright test`) validando navegación en Desktop y Mobile Chrome.
- [ ] Documentar resultados en el informe de cierre de Fase 2.