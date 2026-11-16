# Evaluación y Justificación del Stack Tecnológico

**Documento:** ARCH-STACK-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Autor:** Senior Software Architect & Frontend Performance Engineer  

---

## 1. Resumen Ejecutivo de la Pila Propuesta

Para materializar un portafolio web de alto rendimiento, modular, mantenible y accesible, se ha seleccionado y analizado la siguiente pila tecnológica para su implementación en la Fase 1:

| Capa / Dominio | Tecnología Propuesta | Versión de Referencia | Justificación Técnica y Beneficios |
|---|---|---|---|
| **Librería UI** | **React** | 19.x | Modelo declarativo estándar, Server Components listos si se requiriera, concurrencia y ecosistema maduro. |
| **Lenguaje** | **TypeScript** | 5.7+ | Tipado estático estricto (`strict: true`), interfaces robustas para proyectos y certificaciones, autodocumentación y prevención de errores en compilación. |
| **Bundler & Build Tool** | **Vite** | 6.x | Tiempos de arranque ultrarrápidos con ESM nativo en desarrollo, optimización con Rollup en producción, compresión y code-splitting eficiente. |
| **Enrutamiento** | **React Router** | 6.28+ / 7.x | Soporte completo para navegación híbrida (anclas en página única y deep links `/projects/:slug`), sincronización de historial del navegador y control de rutas 404. |
| **Motor de Estilos** | **Tailwind CSS** | 4.x / 3.4+ | Enfoque utility-first, purga automática de CSS sin uso, variables CSS semánticas para modo claro/oscuro y máxima velocidad de renderizado. |
| **Primitivas UI** | **shadcn/ui / Radix UI** | Radix Primitives | Accesibilidad nativa WCAG/WAI-ARIA garantizada en modales, dropdowns y tooltips, sin estilos forzados; código propio y auditable dentro del proyecto. |
| **Animaciones & Microinteracciones** | **Motion (Framer Motion)** | 11.x / 12.x | Transiciones sutiles declarativas, resortes físicos fluidos, respeto automático a `prefers-reduced-motion` y orquestación de layout. |
| **Iconografía** | **Lucide React** | Última estable | Colección coherente, trazo consistente (2px), liviana, tree-shakeable y con excelente soporte de accesibilidad semántica. |
| **Internacionalización** | **react-i18next + i18next** | 15.x / 24.x | Estándar de la industria para i18n en React; permite detección de idioma del navegador, persistencia en `localStorage` y separación de recursos por namespace. |
| **Pruebas Unitarias y Componentes** | **Vitest + React Testing Library** | Vitest 2.x | Integración nativa con la configuración de Vite, ejecución veloz de pruebas unitarias y validación del DOM desde la perspectiva del usuario. |
| **Pruebas End-to-End & Accesibilidad** | **Playwright** | 1.48+ | Pruebas multinavegador (Chromium, Firefox, WebKit), validación de responsividad móvil, capturas de pantalla de regresión y auditoría axe-core. |

---

## 2. Análisis Detallado de Alternativas y Trade-Offs

### 2.1 React Router vs Frameworks Full-Stack (Next.js / Astro)
- **Alternativas evaluadas:** Next.js (App Router) y Astro.
- **Ventajas de Astro / Next.js:** Mejor SEO inicial mediante Server-Side Rendering (SSR) o Static Site Generation (SSG).
- **Desventajas en este contexto:** Mayor complejidad de despliegue, configuración adicional de servidores o adaptadores edge, y mayor sobrecarga para un portafolio de profesional en formación que se compilará principalmente como sitio estático.
- **Decisión adoptada:** Mantener **React + Vite + React Router** para una arquitectura limpia de Client-Side Rendering (CSR) con posibilidad de prerenderizado estático de rutas mediante plugins de Vite (`vite-plugin-prerender` o `react-snap`) si se requiere indexación profunda de casos de estudio.

### 2.2 Estrategia de Estilos y Tokens: Tailwind CSS con Variables CSS
- **Motivo de selección:** Permite estructurar tokens de diseño semánticos directamente en `:root` y `.dark` (ej. `--background`, `--primary`, `--surface-elevated`).
- **Prevención de AI Slop:** Tailwind permite aplicar las reglas de `emil-design-eng`: bordes de 1px con opacidades sutiles (`border-border/40`), sombras volumétricas suaves y microinteracciones de escala en estado activo (`active:scale-[0.98]`), evitando gradientes hiperbólicos de neón o layouts sobrecargados.

### 2.3 Comparativa de Hosting: Vercel vs GitHub Pages

| Criterio | Vercel (Recomendado) | GitHub Pages |
|---|---|---|
| **Configuración de rutas profundas (SPA Rewrites)** | Automática mediante `vercel.json` (`{"rewrites": [{"source": "/(.*)", "destination": "/index.html"}]}`). | Requiere truco con `404.html` o HashRouter para evitar error 404 al refrescar `/projects/:slug`. |
| **Compilaciones previas y Preview Branches** | Nativas y automáticas por cada Pull Request. | Requiere configurar workflows personalizados de GitHub Actions. |
| **Rendimiento Edge y CDN** | Global Edge Network de Vercel con compresión Brotli y optimización automática. | Fastly CDN estándar de GitHub. |
| **Dominio personalizado y HTTPS** | Aprovisionamiento de SSL automático y gestión de DNS instantánea. | Soporte de dominio personalizado y certificado Let's Encrypt manual. |

**Conclusión:** Se recomienda **Vercel** como entorno principal de despliegue por su manejo nativo de rutas profundas de SPA y vistas previas automáticas, dejando GitHub Pages como alternativa documentada con fallback en `404.html`.
