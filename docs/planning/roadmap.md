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

### FASE 2: Implementación de Vistas, Secciones y Casos de Estudio
- **Objetivo:** Construir la interfaz de usuario completa y poblar los datos inmutables verificados.
- **Tareas detalladas:**
  1. Implementar `AppLayout`, `Navbar` fija con blur y `Footer` con enlaces a LinkedIn y GitHub.
  2. Desarrollar `MobileNavSheet` con drawer accesible y áreas táctiles de 48px.
  3. Implementar secciones de la Home (`HeroSection`, `AboutSection`, `SkillsSection`, `EducationSection`, `CVSection`, `ContactSection`).
  4. Construir `FeaturedProjectsSection` con las tarjetas interactivas de los 4 proyectos principales.
  5. Desarrollar la vista de catálogo `/projects` con filtros multi-categoría reactivos, búsqueda debounced y `EmptyState`.
  6. Desarrollar la vista dinámica `/projects/:slug` con formato completo de caso de estudio (problema, solución, arquitectura, contribuciones, código).
  7. Incorporar módulo de descarga de currículums con las dos opciones (`CV Software Engineering` y `CV Data & AI`).
  8. Desarrollar vista 404 personalizada (`NotFoundPage`).
- **Criterio de salida:** Todas las rutas operativas, diseño idéntico a las especificaciones y navegación bilingüe fluida.

---

### FASE 3: Aseguramiento de Calidad, Pruebas Automatizadas y Auditorías
- **Objetivo:** Validar rigurosamente el software contra los criterios de aceptación y estándares WCAG.
- **Tareas detalladas:**
  1. Configurar Vitest y React Testing Library.
  2. Implementar pruebas unitarias de utilidades, filtrado de proyectos y modelos de datos.
  3. Implementar pruebas de componentes (`Navbar`, `ProjectCard`, `ThemeToggle`, `LanguageToggle`).
  4. Configurar suite E2E con Playwright para flujos críticos en desktop y emulación móvil (iPhone).
  5. Ejecutar auditoría automatizada con `@axe-core/playwright` para validar conformidad WCAG 2.2 AA.
  6. Ejecutar pruebas de estrés de interfaz (`break-ui`) con cadenas largas y zooms de pantalla al 200%.
  7. Auditar Core Web Vitals en Lighthouse (Performance $\ge 90$, Accessibility $\ge 95$, SEO $\ge 95$).
- **Criterio de salida:** 100% de pruebas unitarias y E2E aprobadas con evidencia ejecutable registrada.

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
