# Plan de Trabajo y Hoja de Ruta (Roadmap)

**Documento:** PLAN-ROADMAP-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Autor:** Senior Software Architect & Lead Project Manager  

---

## 1. Visión Global de Fases del Proyecto

El desarrollo y puesta en producción del portafolio profesional de Ricardo Cardenas está estructurado en 5 fases secuenciales gobernadas por puertas de calidad (*quality gates*):

```text
+-----------------------+     +-----------------------+     +-----------------------+     +-----------------------+     +-----------------------+
|        FASE 0         |     |        FASE 1         |     |        FASE 2         |     |        FASE 3         |     |        FASE 4         |
| Descubrimiento,       | ==> | Inicialización Base,  | ==> | Implementación de     | ==> | Aseguramiento de      | ==> | Despliegue en         |
| Arquitectura y Diseño |     | Scaffolding y Tokens  |     | Vistas y Casos de Est.|     | Calidad, Pruebas y A11y|    | Producción y CI/CD    |
| (ESTADO ACTUAL)       |     | (Requiere Aprobación) |     |                       |     |                       |     |                       |
+-----------------------+     +-----------------------+     +-----------------------+     +-----------------------+     +-----------------------+
```

---

## 2. Detalle de Tareas y Dependencias por Fase

### FASE 0: Descubrimiento, Arquitectura y Diseño (FASE ACTUAL)
- [x] Inspección no destructiva de repositorios locales y contexto profesional de Ricardo Cardenas.
- [x] Auditoría exhaustiva de skills de ingeniería, diseño y Superpowers en Antigravity (`docs/skills-audit.md`).
- [x] Redacción del Documento de Requisitos de Producto, Requisitos Funcionales y Criterios de Aceptación (`docs/requirements/`).
- [x] Evaluación y justificación del stack tecnológico (`docs/architecture/tech-stack.md`).
- [x] Diseño del sistema, C4, diagramas de componentes y registros ADR (`docs/architecture/`).
- [x] Especificación de diseño Minimalista Profesional (B), tokens violeta/neutros y reglas de Emil Kowalski (`docs/design/`).
- [x] Mockups de alta fidelidad y wireframes de las 5 vistas requeridas (`docs/design/mockups/`).
- [x] Modelado de contenido tipado en TypeScript e inventario verificado de 8 proyectos reales (`docs/content/`).
- [x] Estrategia de pruebas, lista de accesibilidad WCAG 2.2 AA y plan de rendimiento SEO (`docs/quality/`).
- [x] Auditoría formal documental de los 20 criterios de Fase 0 (`docs/planning/phase-0-verification.md`).
- **Quality Gate 0:** Presentar reporte al usuario y esperar autorización explícita antes de iniciar la Fase 1.

---

### FASE 1: Inicialización Base, Scaffolding y Sistema de Diseño
- **Objetivo:** Configurar el repositorio, inicializar el proyecto React con Vite y establecer la infraestructura de tokens e internacionalización.
- **Tareas detalladas:**
  1. Inicializar repositorio Git local (`git init`, `.gitignore`).
  2. Inicializar proyecto con Vite (`npm create vite@latest . -- --template react-ts`).
  3. Configurar TypeScript estricto (`tsconfig.json`).
  4. Instalar y configurar Tailwind CSS con las variables CSS semánticas de `docs/design/design-system.md`.
  5. Configurar `index.html` con script bloqueante inline para prevención de FOUT.
  6. Configurar `ThemeProvider` con soporte para Claro, Oscuro y Sistema, y persistencia en `localStorage`.
  7. Configurar `i18next` con diccionarios bilingües base (`es` y `en`) en `src/i18n/`.
  8. Integrar primitivas de UI accesibles de Radix UI / shadcn/ui (`Button`, `Badge`, `Card`, `Sheet`, `DropdownMenu`).
  9. Configurar React Router con enrutamiento híbrido y hook `useHashScroll`.
- **Criterio de salida:** Aplicación base compila limpiamente (`npm run build`), alterna tema e idioma sin parpadeos y ejecuta sin errores en consola.

---

### FASE 2: Implementación de Vistas, Secciones, Catálogo y Rediseño Visual (Fase 2C)
- **Objetivo:** Construir la interfaz de usuario completa, poblar los datos inmutables verificados y alinear el diseño con el mockup editorial aprobado Minimalista Profesional (B).
- **Sub-fases ejecutadas:**
  - [x] **Fase 2A:** Implementación de Home funcional, certificaciones y contacto (`feat: complete phase 2a homepage visual implementation` - `cdf1bb2`).
  - [x] **Fase 2B:** Catálogo de proyectos (`/projects`) y páginas de detalle (`/projects/:slug`) con evidencia verificada (`feat: complete phase 2b projects catalog and case studies` - `ed9ef47`).
  - [x] **Fase 2C.1:** Auditoría de fidelidad visual contra mockup de referencia aprobado y plan de rediseño.
  - [x] **Fase 2C.2:** Rediseño visual de la Home con layout editorial de dos columnas, monograma RC, gráfico conceptual y métricas honestas (`feat: complete phase 2c2 homepage visual redesign` - `a6d1124`).
  - [x] **Fase 2C.3:** Refinamiento visual del catálogo y casos de estudio, `ProjectCoverGraphic` con capturas reales y topología abstracta de Nexo, lightbox modal accesible (`feat: complete phase 2c3 projects visual refinement` - `bb7793a`).
  - [x] **Fase 2C.4:** Integración transversal, auditoría de contenido/CVs, i18n, accesibilidad de teclado y Quality Gate final (En verificación).
- **Criterio de salida:** Todas las vistas operativas, consistencia estética transversal, cero regresiones y 100% de quality gates aprobados.

---

### FASE 3: Auditoría Integral de UX/UI, Usabilidad, Accesibilidad y Optimización
- **Objetivo:** Ejecutar una auditoría exhaustiva de ingeniería de interfaces, experiencia de usuario, usabilidad real, accesibilidad WCAG 2.2 AA y optimización de rendimiento/SEO antes del despliegue en producción.
- **Plan detallado:** [docs/planning/phase-3-audit-and-optimization-plan.md](file:///C:/Ricardo/Portafolio/docs/planning/phase-3-audit-and-optimization-plan.md).
- **Bloques obligatorios:**
  1. **3.1. Evaluación Heurística:** Aplicación rigurosa de las 10 heurísticas de usabilidad de Jakob Nielsen en todas las rutas y componentes interactivos; documentación de severidad (0-4), evidencias y propuestas de solución.
  2. **3.2. Auditoría UX/UI & Anti-AI-Slop:** Evaluación de arquitectura de información, jerarquía tipográfica, consistencia con el Design System (Minimalista Profesional B), affordances, microinteracciones discretas (`emil-design-eng`), feedback de estados, reducción de carga cognitiva, usabilidad móvil y detección/eliminación de patrones genéricos o innecesarios.
  3. **3.3. Accesibilidad WCAG 2.2 AA:** Pruebas automatizadas con `@axe-core/playwright` y revisión manual rigurosa de navegación por teclado, focus trap en modales, restauración de foco, contraste de color, soporte para lectores de pantalla, zoom al 200%, reflow sin pérdida de información y `prefers-reduced-motion`.
  4. **3.4. SEO Técnico y Rendimiento:** Auditoría de Core Web Vitals (LCP, INP, CLS) con Lighthouse, compresión y formatos modernos de imágenes/activos, metadatos dinámicos por proyecto, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt` y estrategia de prerenderizado para SPA.
  5. **3.5. Refinamiento, Backlog y Validación:** Corrección priorizada de hallazgos según impacto/esfuerzo, suite de pruebas de regresión automatizadas, capturas antes/después y definición de protocolo de pruebas de usabilidad guiadas con participantes (sin afirmar validación con usuarios a menos que hayan sido ejecutadas efectivamente).
- **Criterio de salida:** Informes completos generados, backlog de severidad 3 y 4 subsanado al 100%, puntuaciones Lighthouse $\ge 95$ en Accesibilidad y SEO, $\ge 90$ en Performance, y conformidad verificada WCAG 2.2 AA.

---

### FASE 4: Despliegue en Producción, CDN y Entrega Final
- **Objetivo:** Publicar el portafolio en una infraestructura de alta disponibilidad y configurar integración continua.
- **Tareas detalladas:**
  1. Configurar archivo `vercel.json` con reglas de reescritura SPA y directivas de caché inmutable para assets.
  2. Configurar workflow de GitHub Actions (`.github/workflows/ci-cd.yml`) para validación automática en cada push.
  3. Desplegar en Vercel (o GitHub Pages según elección del usuario).
  4. Verificar funcionamiento de rutas profundas (`/projects/:slug`) directamente en el navegador del usuario.
  5. Vincular dominio personalizado si el usuario lo dispone.
  6. Entrega formal del manual de mantenimiento y actualización de proyectos.
