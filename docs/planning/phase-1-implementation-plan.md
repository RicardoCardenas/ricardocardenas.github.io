# Plan de Implementación — FASE 1: Base Técnica del Portafolio React

> **Para agentes ejecutores:** HABILIDAD REQUERIDA: Usar `superpowers:executing-plans` para implementar este plan secuencialmente tarea por tarea en el agente principal. Cada paso utiliza la sintaxis de casillas de verificación (`- [ ]`) para seguimiento estricto.

**Meta:** Construir una base frontend funcional, modular, accesible y tipada con React 19, TypeScript, Vite, Tailwind CSS, React Router, ThemeProvider anti-FOUT, i18n bilingüe y suites de prueba (Vitest, RTL, Playwright).

**Arquitectura:** SPA modular en capas (`app`, `layout`, `components/ui`, `pages`, `data`, `hooks`, `types`, `i18n`, `styles`), sin backend propio, alimentada por modelos inmutables tipados y tokens de diseño semánticos en variables CSS.

**Stack Técnico:** React 19, TypeScript 5.7+, Vite 6+, Tailwind CSS v4, React Router 6/7, Radix UI primitives, Lucide React, react-i18next, Vitest, React Testing Library, Playwright.

**Especificación base:** [docs/architecture/tech-stack.md](file:///C:/Ricardo/Portafolio/docs/architecture/tech-stack.md), [docs/architecture/system-design.md](file:///C:/Ricardo/Portafolio/docs/architecture/system-design.md), [docs/design/design-system.md](file:///C:/Ricardo/Portafolio/docs/design/design-system.md) y [docs/content/project-inventory.md](file:///C:/Ricardo/Portafolio/docs/content/project-inventory.md).

---

## Restricciones Globales

- Estilo: **Minimalista Profesional (B)**.
- Identidad visual: **Violeta tecnológico** (`#7C3AED` / `#A78BFA` / `#8B5CF6`) sobre superficies neutras limpias y oscuras.
- Cero "AI Slop": Sin gradientes neón excesivos, sin partículas galácticas, sin efectos de videojuego.
- Microinteracciones de Emil Kowalski: `:active scale(0.98)`, curvas `cubic-bezier(0.16, 1, 0.3, 1)`, no usar `transition: all`.
- Soporte estricto para `prefers-reduced-motion` y prevención de destello en carga (Zero-FOUT).
- Proyecto Nexo: Tratar como caso de estudio académico de tesis, **código privado, sin link a repositorio externo**.
- No implementar backend propio, no modificar repositorios externos, no realizar commits ni pushes automáticos.

---

## Tareas de Implementación

### Tarea 1: Inicialización del Repositorio Git y Scaffolding Base con Vite + React 19 + TypeScript
- [x] Inicializar Git localmente (`git init`) con `.gitignore` exhaustivo (ignorar `node_modules`, `dist`, `.env*`, etc.).
- [x] Crear el `package.json` base y la configuración estricta de `tsconfig.json` y `vite.config.ts`.
- [x] Instalar dependencias esenciales de React, TypeScript y Vite.
- [x] Validar arranque básico y compilación (`npm run build`).

### Tarea 2: Configuración de Tailwind CSS con Tokens Semánticos
- [x] Instalar y configurar Tailwind CSS.
- [x] Definir tokens semánticos CSS (`:root` y `.dark`) en `src/styles/tokens.css` y `src/styles/globals.css` (Background, Surface, Border, Text Primary, Text Secondary, Primary, Accent, Focus, etc.) según `docs/design/design-system.md`.
- [x] Crear utilidad pura `src/utils/cn.ts` para fusión de clases con `clsx` y `tailwind-merge`.

### Tarea 3: Script Anti-FOUT y Proveedor de Temas (`ThemeProvider`)
- [x] Inyectar script inline bloqueante síncrono en `<head>` de `index.html` para detectar `localStorage` y `prefers-color-scheme`.
- [x] Implementar `src/types/theme.ts` y hook `src/hooks/useTheme.ts`.
- [x] Implementar `src/context/ThemeContext.tsx` con soporte para `'light'`, `'dark'` y `'system'`.
- [x] Implementar componente accesible `ThemeToggle.tsx` con soporte para teclado y microinteracción táctil.

### Tarea 4: Configuración de Internacionalización Bilingüe (ES / EN)
- [x] Instalar y configurar `i18next`, `react-i18next` y `i18next-browser-languagedetector`.
- [x] Crear diccionarios de traducción en `src/i18n/locales/es/` y `src/i18n/locales/en/` para namespaces `common`, `nav` y `projects`.
- [x] Implementar hook y componente accesible `LanguageToggle.tsx` con toggle pastilla y cambio dinámico del atributo `<html lang="...">`.

### Tarea 5: Primitivas de UI Reutilizables de Alta Gama (Emil Kowalski Standards)
- [x] Implementar `Button.tsx` con variantes (`primary`, `secondary`, `outline`, `ghost`), estado `:active scale(0.98)` y focus visible accesible.
- [x] Implementar `Badge.tsx` para etiquetas de tecnologías y categorías múltiples.
- [x] Implementar `Card.tsx` con bordes sutiles de 1px (`border-border/60`), superficies elevadas y hover contenido ($\le 2$px).
- [x] Implementar `EmptyState.tsx` para estados sin resultados con botón de reseteo.

### Tarea 6: Enrutamiento Híbrido con React Router y Layout Base
- [x] Configurar React Router con las rutas requeridas:
  - `/`: `HomePage` (estructura base con anclas).
  - `/projects`: `ProjectsCatalogPage` (catálogo con filtros).
  - `/projects/:slug`: `ProjectDetailPage` (estudio de caso con arquitectura).
  - `*`: `NotFoundPage` (página 404 con enlace de retorno).
- [x] Implementar hook `useHashScroll.ts` para desplazamiento suave entre anclas y rutas.
- [x] Implementar `AppLayout.tsx`, `Navbar.tsx` (glassmorphism con blur, links, ThemeToggle, LanguageToggle), `MobileNavSheet.tsx` (drawer accesible con focus trap y safe areas) y `Footer.tsx`.

### Tarea 7: Modelo de Contenido Tipado y Carga de Proyectos Verificados
- [x] Crear interfaces en `src/types/index.ts` conforme a `docs/content/content-model.md`.
- [x] Crear base inmutable de datos en `src/data/projects.ts` con los 8 proyectos verificados:
  - Nexo (con `isAcademicThesis: true`, `isPrivateCode: true`, sin `github` link).
  - Capital Cruise, TaleStar Mobile, MediTrack, Churn Analytics, TheLook eCommerce, Jobsy Backend, OneCoin Backend.
- [x] Crear `src/data/profile.ts` con información verificada de Ricardo Cardenas (UPC, Décimo Superior, contactos).

### Tarea 8: Configuración de Pruebas Unitarias y de Componentes (Vitest + RTL)
- [x] Configurar `vitest.config.ts` y entorno de pruebas (`jsdom`, `@testing-library/react`, `@testing-library/jest-dom`).
- [x] Implementar pruebas unitarias para utilidades (`cn.ts`), filtrado de proyectos multi-categoría y resolución de temas e idiomas.
- [x] Implementar pruebas de componentes para `ThemeToggle`, `LanguageToggle` y `ProjectCard`.
- [x] Ejecutar y validar que todas las pruebas pasen (`vitest run`).

### Tarea 9: Configuración de Playwright para Pruebas E2E y Responsividad
- [x] Instalar y configurar `playwright.config.ts`.
- [x] Crear prueba E2E base que verifique carga sin errores en consola, navegación entre `/`, `/projects` y `/projects/:slug`, alternancia de tema e inspección en vista móvil.

### Tarea 10: Auditoría Final de Verificación de Fase 1
- [x] Ejecutar comprobación de tipos (`npm run typecheck` / `npx tsc --noEmit`).
- [x] Ejecutar lint (`npm run lint`).
- [x] Ejecutar suite de pruebas unitarias (`npm run test`).
- [x] Ejecutar compilación de producción (`npm run build`).
- [x] Validar arranque del servidor y respuesta en navegador.
- [x] Documentar resultados, dependencias instaladas y evidencias en el informe final.
