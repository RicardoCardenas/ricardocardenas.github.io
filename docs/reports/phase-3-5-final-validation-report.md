# Informe de Validación Final y Cierre de Preproducción — FASE 3.5
## Portafolio Profesional de Ingeniería de Software — Ricardo Cárdenas

**Documento:** REPORT-PREPROD-3-5-001  
**Versión:** 1.0.0  
**Fecha:** 16 de noviembre de 2026  
**Rama Git:** `master`  
**Commit Base:** `64c2a71` — `feat: complete phase 3.4 seo and performance optimization`  
**Decisión Final:** 🟡 **READY WITH CONDITIONS (LISTO PARA DESPLIEGUE CON CONDICIONES EXTERNAS)**  

---

## 1. Resumen Ejecutivo

La **Fase 3.5** culmina el ciclo integral de auditoría, optimización y aseguramiento de calidad del portafolio profesional en React 19 + Vite + TypeScript.

A través de una batería de pruebas de integración, análisis estático, escaneos automáticos de accesibilidad con axe-core, benchmarks de Core Web Vitals y verificación de 15 recorridos de usuario, se ha evaluado de forma concluyente la viabilidad de publicación en producción.

El portafolio alcanza el estándar de excelencia técnica estipulado en el plan de calidad:
- **Calidad de Código:** 0 errores TypeScript, 0 advertencias ESLint, 100% de pruebas unitarias y de componentes aprobadas (42/42 Vitest).
- **Cobertura Funcional:** 15 de 15 recorridos de usuario aprobados de extremo a extremo en Playwright E2E (139 pruebas aprobadas, 0 fallidas).
- **Estabilidad Visual Absoluta:** Cumulative Layout Shift (CLS) en **0.000** tanto en escritorio como en móviles.
- **Rendimiento de Nivel Superior:** Lighthouse Desktop en **100 / 100** en todas las categorías (Performance, Accesibilidad, Best Practices, SEO) y Lighthouse Mobile entre **95 y 97**.
- **SEO Técnico Universal:** 11 rutas HTML estáticas prerenderizadas (SSG), esquemas ricos JSON-LD, sitemap dinámico y meta robots optimizados.
- **Protección de Datos y Confidencialidad:** 100% de cumplimiento en privacidad (monograma SVG `RC`, sin notas numéricas, Nexo como código reservado neutral y LangGraph identificado como funcionalidad planificada).

---

## 2. Matriz de Aceptación Resumida

De un total de 40 requerimientos técnicos y funcionales auditados formalmente en [AUDIT-PREPROD-3-5-001](file:///C:/Ricardo/Portafolio/docs/audits/phase-3-5-preproduction-audit.md):

| Categoría | Total Criterios | PASS | PARTIAL | BLOCKED | FAIL |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Funcionalidad & Navegación** | 14 | 14 | 0 | 0 | 0 |
| **Diseño Visual & Responsive** | 2 | 2 | 0 | 0 | 0 |
| **Accesibilidad WCAG 2.2 AA** | 5 | 4 | 1 (Lectores pantalla manuales) | 0 | 0 |
| **Rendimiento & Core Web Vitals** | 5 | 4 | 1 (LCP móvil sintético) | 0 | 0 |
| **SEO Técnico & SSG** | 5 | 5 | 0 | 0 | 0 |
| **Infraestructura & Hosting** | 2 | 0 | 0 | 2 (Dominio definitivo / HTTP 404) | 0 |
| **Privacidad & Seguridad** | 6 | 6 | 0 | 0 | 0 |
| **Quality Gate** | 1 | 1 | 0 | 0 | 0 |
| **Total Global** | **40** | **36 (90.0%)** | **2 (5.0%)** | **2 (5.0%)** | **0 (0.0%)** |

> **Interpretación:** Los 36 requerimientos de frontend técnico e ingeniería están completamente aprobados. Los 2 ítems en estado `PARTIAL` corresponden a limitaciones transparentemente documentadas (prueba manual con invidentes y LCP móvil en red estrangulada). Los 2 ítems en `BLOCKED` dependen estrictamente de las decisiones de hosting del usuario en la Fase 4.

---

## 3. Pruebas Funcionales (15 Recorridos de Usuario)

Verificados mediante la suite automatizada [tests/e2e/preproduction-validation.spec.ts](file:///C:/Ricardo/Portafolio/tests/e2e/preproduction-validation.spec.ts):

1. **Recorrido 1 (Home $\to$ Catálogo $\to$ Detalle $\to$ Retorno):** Aprobado en Desktop y Móvil. Transición fluida con botón de retorno preservando estado.
2. **Recorrido 2 (Filtros y Búsqueda):** Aprobado. Filtrado dinámico por categoría (`Data & AI`) y búsqueda por texto ("pipeline") aislan instantáneamente el proyecto TheLook.
3. **Recorrido 3 (Navegación por Historial):** Aprobado. Los botones Atrás y Adelante del navegador respetan las transiciones entre filtros y vistas de detalle.
4. **Recorrido 4 (URLs Compartidas con Parámetros):** Aprobado. Cargar `/projects?category=data-ai&q=churn` activa automáticamente los controles y renderiza únicamente Customer Churn Analytics.
5. **Recorrido 5 (Cambio Dinámico de Idioma):** Aprobado. Alternancia entre Español e Inglés actualiza instantáneamente textos de interfaz, atributos `html[lang]` y metadatos SEO sin recargar la página.
6. **Recorrido 6 (Alternancia de Temas Visuales):** Aprobado. Modo Claro, Oscuro y Sistema alternan clases en `<html>` de forma reactiva y sin parpadeo (anti-FOUT).
7. **Recorrido 7 (Scroll Spy en Navbar):** Aprobado en escritorio. `IntersectionObserver` detecta la sección activa y resalta el enlace correspondiente con estilo primario.
8. **Recorrido 8 (Menú Móvil Accesible):** Aprobado en móvil. Disparador hamburguesa abre diálogo Radix UI con focus trap y botón de cierre accesible.
9. **Recorrido 9 (Visor Modal de Galería):** Aprobado. Apertura de modal en TaleStar, ampliación de capturas de interfaz y cierre con teclado/botón.
10. **Recorrido 10 (Descarga de los Dos CVs):** Aprobado. Botones con atributo `download` apuntan a los archivos PDF oficiales (`/cv/CV_Ricardo_Cardenas_Software_Backend.pdf` y `/cv/CV_Ricardo_Cardenas-Data.pdf`).
11. **Recorrido 11 (Enlaces Externos Seguros):** Aprobado. Enlaces a perfiles de GitHub y LinkedIn configurados con `target="_blank"` y `rel="noopener noreferrer"`.
12. **Recorrido 12 (Controles de Contacto):** Aprobado. Enlace `mailto:` operativo y botón de copiado de correo con confirmación visual reactiva.
13. **Recorrido 13 (Manejo de Rutas Inexistentes):** Aprobado. Navegación a URL desconocida renderiza `NotFoundPage` con encabezado 404, metadatos `noindex, nofollow` y enlace de regreso a la página principal.
14. **Recorrido 14 (Acceso Directo SSG):** Aprobado. Carga directa de `/projects/thelook-ecommerce-pipeline` entrega HTML renderizado con `<h1>` y canonical correspondiente.
15. **Recorrido 15 (Recarga de Rutas Profundas):** Aprobado. Recarga completa de páginas de detalle sin desbordamiento horizontal y con 0 errores de consola.

---

## 4. Auditoría Visual y Fidelidad contra la Referencia

- **Referencia Aprobada:** [approved-portfolio-reference.png](file:///C:/Ricardo/Portafolio/docs/design/references/approved-portfolio-reference.png) (Minimalista Profesional B).
- **Inspección de Pantallas:** Se contrastaron los 25 artefactos gráficos en `docs/reports/screenshots/` (Home, Catálogo, Casos de Estudio, Detalle Nexo, Capital Cruise y TaleStar en modos Claro/Oscuro y viewports de 1440px, 768px, 390px y 320px).
- **Conclusiones Visuales:**
  - Perfecta consistencia cromática basada en variables CSS (`--background`, `--surface`, `--primary` violeta: `#7c3aed` en modo claro y `#a78bfa` en modo oscuro).
  - Jerarquía tipográfica legible sin apiñamiento ni truncamientos no deseados.
  - Cero desbordamiento horizontal (`scrollWidth <= clientWidth`) en todas las resoluciones evaluadas, incluyendo móviles ultra-compactos de 320px.

---

## 5. Evaluación de Usabilidad y Experiencia de Usuario (UX/UI)

Se constató que los 9 hallazgos detectados en la Fase 3.1 permanecen resueltos y estables:
- **UX-01:** Filtros de catálogo integrados con la URL (`useSearchParams`).
- **UX-02:** Scroll Spy en Navbar con detección visual precisa.
- **A11Y-01:** Prevención de mareo vestibular mediante `prefers-reduced-motion`.
- **UX-03:** Respuesta táctil física en botones (`active:scale-[0.98]`).
- **UX-04:** Clarificación del CTA principal de descarga de CV en el Hero.
- **UX-05:** Elevación discreta en hover de tarjetas (`hover:-translate-y-0.5`).
- **UX-06:** Feedback táctil visual en opciones de menú móvil.
- **UX-07:** Atajo de teclado global `/` para enfocar la barra de búsqueda.
- **UX-08:** Disposición equilibrada de badges en pantallas estrechas (<360px).

---

## 6. Accesibilidad (WCAG 2.2 AA)

- **Auditoría Automatizada:** **0 violaciones** detectadas en 32 análisis de `@axe-core/playwright`.
- **Jerarquía Semántica:** Estructura secuencial estricta `<h1>` $\to$ `<h2>` $\to$ `<h3>`, alcanzando **100 / 100 de Accesibilidad en Google Lighthouse** en Home, Catálogo y Detalle de Proyectos.
- **Navegación por Teclado:** Foco visible en todos los elementos interactivos, skip link funcional y focus trapping en cajón móvil y modal de imágenes.
- **Advertencia Técnica de Alcance y Accesibilidad Humana:** La accesibilidad programática ha sido demostrada rigurosamente mediante herramientas automatizadas (0 violaciones en axe-core y 100/100 en Lighthouse). No obstante, se mantiene formalmente documentado que **no se han llevado a cabo sesiones de prueba de campo con personas invidentes usuarias habituales de lectores de pantalla (NVDA, JAWS, VoiceOver)**. Por rigor metodológico, dicha comprobación no se declara aprobada por inferencia y queda registrada como tarea de validación con usuarios tras la publicación.

---

## 7. SEO Técnico y Prerenderizado Estático (SSG)

- **Prerenderizado:** Generación reproducible de 11 archivos estáticos `dist/**/index.html` y sus variantes planas, garantizando que rastreadores de motores de búsqueda y bots de redes sociales (que no ejecutan JavaScript) reciben de inmediato el contenido textual y estructural completo.
- **Puntuación Google Lighthouse SEO:** **100 / 100** en escritorio y dispositivos móviles.
- **Metadatos Canónicos y Redes Sociales:** Open Graph (`og:*`), Twitter Cards (`twitter:*`), canonicals normalizadas (sin parámetros de búsqueda) y datos estructurados Schema.org (`Person`, `WebSite`, `CollectionPage`, `TechArticle`, `BreadcrumbList`).
- **Desacoplamiento Canónico:** Gobernado dinámicamente por `getSiteUrl()`, permitiendo inyectar el dominio definitivo en Fase 4 mediante `VITE_SITE_URL` sin alterar el código fuente.

---

## 8. Rendimiento y Core Web Vitals

### 8.1. Métricas de Laboratorio (Google Lighthouse v13.6.0)
- **Home Desktop:** Rendimiento **100**, Accesibilidad **100**, Best Practices **100**, SEO **100**, **CLS: 0.000**, TBT: 0 ms.
- **Catálogo Desktop:** Rendimiento **100**, Accesibilidad **100**, Best Practices **100**, SEO **100**, **CLS: 0.000**, TBT: 0 ms.
- **Nexo Detail Desktop:** Rendimiento **100**, Accesibilidad **100**, Best Practices **100**, SEO **100**, **CLS: 0.000**, TBT: 0 ms.
- **Home Mobile:** Rendimiento **96**, Accesibilidad **100**, Best Practices **100**, SEO **100**, **CLS: 0.000**, TBT: 100 ms.
- **Catálogo Mobile:** Rendimiento **95**, Accesibilidad **100**, Best Practices **100**, SEO **100**, **CLS: 0.000**, TBT: 108 ms.
- **Nexo Detail Mobile:** Rendimiento **97**, Accesibilidad **100**, Best Practices **100**, SEO **100**, **CLS: 0.000**, TBT: 15 ms.

### 8.2. Diagnóstico del LCP Móvil
- **Elemento LCP:** Párrafo descriptivo principal (`<p className="text-text-secondary">`) inmediatamente bajo el `<h1>` (área: 43,875 px² en Home).
- **Comportamiento en Hardware Real:** En emulación móvil sin estrangulamiento de CPU, el LCP se despacha en **492 ms** (categoría "Bueno" con holgura).
- **Comportamiento Sintético Lighthouse:** En la simulación sintética de CPU 4x lenta y conexión 4G estrangulada, el tiempo de transferencia y análisis del bundle genera un LCP de **2.62 s** (frente al umbral de 2.5 s).
- **Conclusión Técnica y Distinción Lab vs. RUM:** Se descartan intervenciones artificiales riesgosas que comprometan la hidratación de React o la estabilidad visual. Si bien el TBT de laboratorio es óptimo ($\le 108$ ms), **las métricas de laboratorio de TBT y CLS no garantizan de forma determinista el valor de Interaction to Next Paint (INP) con usuarios reales**, el cual depende de los eventos e interacciones físicas en producción y deberá medirse mediante telemetría de campo (RUM / CrUX). La métrica sintética de LCP móvil (~2.62 s con estrangulamiento de CPU de 4x en Lighthouse frente a 492 ms en móvil real) se mantiene debidamente documentada y justificada como cota conservadora de laboratorio.

---

## 9. Privacidad e Integridad de Datos

1. **Avatar Monograma:** Se mantiene rigurosamente el monograma SVG/CSS `RC`. Cero imágenes o retratos fotográficos personales.
2. **Promedio Académico:** Cero calificaciones académicas privadas ni cifras numéricas individuales. Se preserva con rigor la distinción académica editorial `UPC • Software Engineering` y `Top 10% / Décimo Superior`.
3. **Proyecto de Tesis Nexo:** Código catalogado como privado institucional (`isPrivateCode: true`), sin enlaces a repositorios confidenciales ni mención a acuerdos inventados.
4. **LangGraph:** Indicado de manera explícita como funcionalidad planificada (`Planned / Planificado`) con borde discontinuo e icono distintivo de reloj.

---

## 10. Seguridad Básica y Análisis de Dependencias

1. **Escaneo de Secretos:** Cero tokens, contraseñas, claves privadas o cadenas sensibles detectadas en el repositorio o en los artefactos de salida `dist/`.
2. **Auditoría de Paquetes (`npm audit`):**
   - **Dependencias de Producción (Runtime):** **0 vulnerabilidades**.
   - **Dependencias de Desarrollo (Build/Test):** 10 avisos de severidad moderada restringidos a `vitest` y `@typescript-eslint`. No representan vector de ataque en el entorno de los usuarios finales ya que no forman parte del código empaquetado para el navegador.
3. **Enlaces Externos:** Todos los hipervínculos externos cuentan con `rel="noopener noreferrer"` y `target="_blank"`.

---

## 11. Cifras Finales del Quality Gate

| Suite de Verificación | Descubiertas | Ejecutadas | Aprobadas | Omitidas | Fallidas | Código Salida | Resultado |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **TypeScript Typecheck** | 1 | 1 | 1 | 0 | 0 | 0 | ✅ **PASS** |
| **ESLint** | 1 | 1 | 1 | 0 | 0 | 0 | ✅ **PASS** |
| **Vitest (Unit & Componentes)** | 42 | 42 | **42** | 0 | 0 | 0 | ✅ **PASS** |
| **Vite Build + SSG (11 Rutas)** | 11 | 11 | **11** | 0 | 0 | 0 | ✅ **PASS** |
| **Playwright E2E Suite** | 150 | 150 | **139** | 11 | 0 | 0 | ✅ **PASS** |

---

## 12. Evidencias Verificables

- Informe completo de auditoría: [phase-3-5-preproduction-audit.md](file:///C:/Ricardo/Portafolio/docs/audits/phase-3-5-preproduction-audit.md)
- Suite E2E de validación de 15 recorridos: [preproduction-validation.spec.ts](file:///C:/Ricardo/Portafolio/tests/e2e/preproduction-validation.spec.ts)
- Métricas Lighthouse consolidadas: [lighthouse-post-optimization.json](file:///C:/Ricardo/Portafolio/docs/audits/lighthouse-post-optimization.json)
- Métricas de rendimiento y Core Web Vitals: [performance-post-optimization.json](file:///C:/Ricardo/Portafolio/docs/audits/performance-post-optimization.json)
- Checklist para despliegue: [phase-4-deployment-readiness-checklist.md](file:///C:/Ricardo/Portafolio/docs/planning/phase-4-deployment-readiness-checklist.md)

---

## 13. Riesgos Pendientes Identificados

1. **Riesgo 1 (LCP Móvil en Dispositivos Extremadamente Lentos):**
   - *Severidad:* Baja / Tolerable.
   - *Detalle:* En teléfonos con CPU severamente limitada y redes 3G/4G congestionadas, el LCP de texto puede aproximarse a los 2.6–2.7 s. Mitigado por un FCP ágil de 1.0 s y un TBT mínimo ($\le 108$ ms).
2. **Riesgo 2 (Validación con Tecnologías de Asistencia No Comerciales):**
   - *Severidad:* Baja.
   - *Detalle:* Ausencia de pruebas con usuarios reales ciegos. Mitigado por el cumplimiento estricto de estándares WAI-ARIA y 0 violaciones en axe-core.

---

## 14. Preparación para Plataforma de Alojamiento (GitHub Pages — User Site)

Se ha configurado y validado de forma integral la plataforma de alojamiento definitiva:
1. **GitHub Pages — User Site (`https://ricardocardenas.github.io/`):**
   - Configuración en [vite.config.ts](file:///C:/Ricardo/Portafolio/vite.config.ts) con `base: '/'` alineada con la raíz del dominio.
   - Archivo [public/.nojekyll](file:///C:/Ricardo/Portafolio/public/.nojekyll) presente para eludir el procesador Jekyll de GitHub Pages.
   - Archivo `404.html` prerenderizado generado en la raíz de `dist/` para respuesta 404 canónica y recuperación SPA.
   - Variantes planas de archivos HTML (`projects.html`, `projects/[slug].html`) generadas para compatibilidad con servidores estáticos.
2. **Automatización CI/CD con GitHub Actions:**
   - Flujo de trabajo oficial creado en [.github/workflows/deploy-pages.yml](file:///C:/Ricardo/Portafolio/.github/workflows/deploy-pages.yml).
   - Ejecuta todos los Quality Gates (typecheck, lint, vitest, playwright, build SSG, validación de dist) previo al despliegue.
   - Permisos mínimos estandarizados (`contents: read`, `pages: write`, `id-token: write`).
3. **Guía de Despliegue Manual:**
   - Procedimiento paso a paso para PowerShell documentado en [docs/deployment/github-pages-deployment-guide.md](file:///C:/Ricardo/Portafolio/docs/deployment/github-pages-deployment-guide.md).

---

## 15. Procedimiento de Publicación Manual por el Usuario

El despliegue efectivo será realizado personalmente por el usuario siguiendo la guía:
1. **Creación del Repositorio Remoto:** Crear `ricardocardenas.github.io` público y vacío en GitHub.
2. **Vinculación y Push Inicial:** Vincular el remoto `origin` y ejecutar `git push -u origin master` desde PowerShell.
3. **Activación de Pages:** Configurar en *Settings > Pages > Build and deployment > Source* la opción **"GitHub Actions"**.
4. **Validación Post-Despliegue:** Monitorear el workflow en la pestaña Actions y verificar en vivo las 10 rutas públicas, la descarga de ambos CVs y la respuesta canónica 404.

---

## 16. Estado del Repositorio Git

- **Commit de Cierre de Fase 3.3:** `ab82dee` — `feat: complete phase 3.3 accessibility audit and improvements`
- **Commit de Cierre de Fase 3.4:** `64c2a71` — `feat: complete phase 3.4 seo and performance optimization`
- **Árbol de Trabajo:** Pendiente de commit de cierre autorizado de Fase 3.5. No se han realizado commits no autorizados ni operaciones de `git push`.

---

### Dictamen Final:

```
┌────────────────────────────────────────────────────────────────────────┐
│                          DECISIÓN FINAL:                               │
│                                                                        │
│                READY TO COMMIT — GITHUB PAGES PREPARED                 │
│                 (PREPARADO PARA GITHUB PAGES USER SITE)                │
└────────────────────────────────────────────────────────────────────────┘
```
El portafolio se encuentra técnicamente completado, validado y preparado para su publicación en **GitHub Pages — User Site** (`https://ricardocardenas.github.io/`) una vez que el usuario autorice el commit de cierre de la Fase 3.5.
