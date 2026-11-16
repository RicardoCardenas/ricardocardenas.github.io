# Auditoría de Skills del Entorno Antigravity

**Fecha de ejecución:** 15 de noviembre de 2026  
**Auditor:** Senior Software Architect & Lead QA Engineer  
**Objetivo:** Identificar, registrar y verificar las skills realmente disponibles en el entorno de desarrollo para gobernar las fases del portafolio profesional de Ricardo Cardenas.

---

## 1. Inventario y Clasificación de Skills Reales

Se inspeccionaron las rutas del sistema en `C:\Users\Ricardo\.gemini\config\skills`, `C:\Users\Ricardo\.gemini\antigravity-cli\skills` y los plugins de Superpowers en `C:\Users\Ricardo\.gemini\config\plugins\superpowers\skills`.

A continuación se detalla la matriz de compatibilidad, disponibilidad y función para el proyecto:

| Familia | Nombre Real de la Skill | Ruta Absoluta Verificada | Estado | Propósito y Uso en el Proyecto |
|---|---|---|---|---|
| **Superpowers** | `brainstorming` | `C:\Users\Ricardo\.gemini\config\plugins\superpowers\skills\brainstorming\SKILL.md` | **Disponible** | Análisis de requisitos, diseño conceptual y alineación de decisiones antes de cualquier implementación. |
| **Superpowers** | `writing-plans` | `C:\Users\Ricardo\.gemini\config\plugins\superpowers\skills\writing-plans\SKILL.md` | **Disponible** | Elaboración de planes detallados paso a paso con trazabilidad y verificación. |
| **Superpowers** | `executing-plans` | `C:\Users\Ricardo\.gemini\config\plugins\superpowers\skills\executing-plans\SKILL.md` | **Disponible** | Ejecución guiada y secuencial del plan de trabajo en el agente principal. |
| **Superpowers** | `systematic-debugging` | `C:\Users\Ricardo\.gemini\config\plugins\superpowers\skills\systematic-debugging\SKILL.md` | **Disponible** | Diagnóstico estructurado de errores y fallos en suites de prueba sin parches reactivos. |
| **Superpowers** | `test-driven-development`| `C:\Users\Ricardo\.gemini\config\plugins\superpowers\skills\test-driven-development\SKILL.md` | **Disponible** | Desarrollo dirigido por pruebas para utilidades, hooks y componentes críticos. |
| **Superpowers** | `verification-before-completion` | `C:\Users\Ricardo\.gemini\config\plugins\superpowers\skills\verification-before-completion\SKILL.md` | **Disponible** | Validación de criterios de aceptación con evidencia ejecutable antes de dar por cerrada una tarea. |
| **Diseño / Frontend** | `emil-design-eng` | `C:\Users\Ricardo\.gemini\antigravity-cli\skills\emil-design-eng\SKILL.md` | **Disponible** | Dirección de diseño, microinteracciones, curvas de aceleración, pulido visual y prevención de "AI Slop". |
| **Diseño / Frontend** | `web-design-guidelines` | `C:\Users\Ricardo\.gemini\antigravity-cli\skills\web-design-guidelines\SKILL.md` | **Disponible** | Auditoría y cumplimiento de estándares web modernos, accesibilidad y semántica. |
| **Diseño / Frontend** | `frontend-development` | `C:\Users\Ricardo\.gemini\config\skills\frontend-development\SKILL.md` | **Disponible** | Implementación modular de React + TypeScript por capas y arquitectura frontend limpia. |
| **Diseño / Frontend** | `pick-ui-library` | `C:\Users\Ricardo\.gemini\antigravity-cli\skills\pick-ui-library\SKILL.md` | **Disponible** | Selección curada de librerías de UI, iconos, animaciones y componentes primitivos. |
| **Diseño / Frontend** | `break-ui` | `C:\Users\Ricardo\.gemini\antigravity-cli\skills\break-ui\SKILL.md` | **Disponible** | Pruebas de estrés de componentes con datos límite y casos extremos. |
| **Diseño / Frontend** | `mobile-native` | `C:\Users\Ricardo\.gemini\antigravity-cli\skills\mobile-native\SKILL.md` | **Disponible** | Adaptación web para sensación nativa en dispositivos táctiles (100dvh, tap highlight, safe areas). |
| **Diseño / Frontend** | `playwright-cli` | `C:\Users\Ricardo\.gemini\config\skills\playwright-cli\SKILL.md` | **Disponible** | Automatización de navegador para pruebas End-to-End, visual regression y accesibilidad. |
| **Ingeniería** | `software-architecture` | `C:\Users\Ricardo\.gemini\config\skills\software-architecture\SKILL.md` | **Disponible** | Modelado arquitectónico, C4, Bounded Contexts y registros de decisiones arquitectónicas (ADR). |
| **Ingeniería** | `testing-strategy` | `C:\Users\Ricardo\.gemini\config\skills\testing-strategy\SKILL.md` | **Disponible** | Definición de la pirámide de pruebas, matrices de cobertura y criterios de calidad. |
| **Ingeniería** | `deployment-ci-cd` | `C:\Users\Ricardo\.gemini\config\skills\deployment-ci-cd\SKILL.md` | **Disponible** | Configuración de pipelines en GitHub Actions, compilación estática y despliegue a hosting. |

---

## 2. Análisis de Sustituciones y Equivalencias

El prompt maestro planteó posibles búsquedas de skills con nombres genéricos. Se verificó el entorno y se establecieron las siguientes correspondencias exactas:

1. **Skill de estilo de Emil Kowalski:**
   - *Búsqueda:* `emiliowalsky/skills` o similar.
   - *Ruta real identificada:* `C:\Users\Ricardo\.gemini\antigravity-cli\skills\emil-design-eng\SKILL.md` y `pick-ui-library\SKILL.md`.
   - *Resolución:* Utilizada para la definición de tokens, reglas de microinteracciones (`:active scale(0.98)`), tiempos de transición entre 150ms-250ms y prevención de patrones genéricos.
2. **Skill de selección de librerías UI:**
   - *Búsqueda:* `pick-ui-library`.
   - *Ruta real identificada:* `C:\Users\Ricardo\.gemini\antigravity-cli\skills\pick-ui-library\SKILL.md`.
   - *Resolución:* Directamente disponible. Permite justificar las dependencias recomendadas (Radix UI / shadcn/ui, Sonner, Motion, Lucide React).
3. **Skills de Accesibilidad, Rendimiento y SEO:**
   - *Búsqueda:* Skills dedicadas independientes.
   - *Resolución:* Integradas de forma cruzada mediante `web-design-guidelines`, `mobile-native`, `frontend-development` y `testing-strategy`, garantizando cumplimiento con WCAG 2.2 AA, Core Web Vitals y metadatos SEO.

---

## 3. Matriz de Gobernanza y Reglas de Invocación en Fase 0

1. **Sin implementación prematura:** Queda terminantemente prohibido generar archivos `.tsx`, `.jsx`, inicializar `package.json` con dependencias o ejecutar scripts de build durante la Fase 0.
2. **Prioridad en Fase 0:** Se ejecutan las directivas de `superpowers:brainstorming`, `software-architecture`, `emil-design-eng` y `testing-strategy` a nivel conceptual y documental.
3. **Incompatibilidades evitadas:** No se mezclan flujos de backend pesado ni microservicios distribuidos; el portafolio se concibe como una aplicación frontend estática y modular de alto rendimiento.
4. **Trazabilidad:** Cada entregable documental responde a una skill especializada y define criterios verificables para las fases subsecuentes.
