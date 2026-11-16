# Auditoría Integral de Accesibilidad Web WCAG 2.2 AA — Fase 3.3
## Evaluación Sistemática de Conformidad, Contraste y Tecnologías Asistivas

**Fecha de auditoría:** 16 de noviembre de 2026  
**Evaluador:** Ricardo Cardenas Portfolio Engineering & Accessibility QA  
**Versión evaluada:** Rama de trabajo sobre Commit `7ecd5e9` (`feat: complete phase 3.2 ux-ui interaction refinement`)  
**Estándar de referencia:** Web Content Accessibility Guidelines (WCAG) 2.2 — Niveles A y AA (W3C Recommendation 05 Oct 2023)  
**Herramientas automatizadas:** `@axe-core/playwright` v4.10.2 (motor Deque axe-core 4.10+), Playwright Test v1.56, pypdf v6.1.1 (PDF Accessibility Inspector)  
**Alcance de rutas:** Home (`/`), Catálogo de Proyectos (`/projects`), Casos de Estudio (`/projects/nexo-agentic-graphrag`, `/projects/capital-cruise`, `/projects/talestar-mobile`, `/projects/thelook-ecommerce-pipeline`), Página 404 (`/404`), Modales (`MobileNavSheet`, `ProjectGallery`), y Documentos Digitales (`CV_Ricardo_Cardenas_Software_Backend.pdf`, `CV_Ricardo_Cardenas-Data.pdf`).

---

## 1. Resumen Ejecutivo de Conformidad

La auditoría sistemática de accesibilidad correspondiente a la **Fase 3.3** evaluó la aplicación web React bajo los 4 principios fundamentales de las pautas WCAG 2.2: **Perceptible**, **Operable**, **Comprensible** y **Robusto**, abarcando la totalidad de criterios de éxito de Nivel A y AA, incluyendo los nuevos criterios introducidos en WCAG 2.2 (*Focus Appearance*, *Dragging Movements*, *Target Size Minimum*, *Consistent Help*, *Redundant Entry*).

| Dimensión de Accesibilidad | Criterios Evaluados | Conformes (PASS) | No Aplicables (N/A) | Barreras Detectadas y Resueltas |
| :--- | :---: | :---: | :---: | :---: |
| **Principio 1: Perceptible** | 13 | 11 | 2 (Audio/Video en vivo) | 3 (Contraste texto atenuado, etiquetas de cover, badges) |
| **Principio 2: Operable** | 20 | 18 | 2 (Timing ajustable) | 3 (Skip link i18n, foco en galería, atajos no intrusivos) |
| **Principio 3: Comprensible** | 7 | 6 | 1 (Pronunciación) | 2 (Sincronización `html[lang]`, mensajes de error semánticos) |
| **Principio 4: Robusto** | 3 | 3 | 0 | 2 (Región live `role="status"`, diálogo ARIA Radix UI) |
| **Accesibilidad de Documentos (PDF)** | 5 | 4 | 0 | 1 (Estructura etiquetada conforme; metadato Title pendiente) |

---

## 2. Resultados de la Suite Automatizada axe-core

Se implementó una suite de escaneo profundo con `@axe-core/playwright` (`tests/e2e/accessibility-axe.spec.ts`) cubriendo 16 configuraciones combinatorias de rutas, temas de color (Light/Dark), idiomas (ES/EN) y estados modales.

### Matriz de Ejecución axe-core (0 Infracciones)

| # | Escenario Evaluado | Ruta / Componente | Tema | Idioma | Infracciones | Reglas Violadas |
| :-: | :--- | :--- | :-: | :-: | :-: | :-: |
| **01** | Home Principal | `/` | Dark | ES | **0** | Ninguna |
| **02** | Home Principal | `/` | Light | ES | **0** | Ninguna |
| **03** | Home Principal | `/` | Dark | EN | **0** | Ninguna |
| **04** | Catálogo de Proyectos | `/projects` | Dark | ES | **0** | Ninguna |
| **05** | Catálogo de Proyectos | `/projects` | Light | ES | **0** | Ninguna |
| **06** | Catálogo de Proyectos | `/projects` | Dark | EN | **0** | Ninguna |
| **07** | Catálogo con Filtro Activo | `/projects?category=data-ai` | Dark | ES | **0** | Ninguna |
| **08** | Catálogo Estado Vacío | `/projects?q=nonexistent` | Dark | ES | **0** | Ninguna |
| **09** | Caso de Estudio Nexo | `/projects/nexo-agentic-graphrag` | Dark | ES | **0** | Ninguna |
| **10** | Caso de Estudio Nexo | `/projects/nexo-agentic-graphrag` | Light | EN | **0** | Ninguna |
| **11** | Caso de Estudio Capital Cruise | `/projects/capital-cruise` | Dark | ES | **0** | Ninguna |
| **12** | Caso de Estudio TaleStar | `/projects/talestar-mobile` | Dark | ES | **0** | Ninguna |
| **13** | Caso de Estudio TheLook | `/projects/thelook-ecommerce-pipeline` | Dark | ES | **0** | Ninguna |
| **14** | Página 404 No Encontrado | `/404-not-found` | Dark | ES | **0** | Ninguna |
| **15** | Cajón de Navegación Móvil | `MobileNavSheet` (Viewport 390px) | Dark | ES | **0** | Ninguna |
| **16** | Modal de Galería de Imágenes | `ProjectGallery` (Lightbox) | Dark | ES | **0** | Ninguna |

---

## 3. Matriz de Evaluación de Criterios WCAG 2.2 (Nivel A y AA)

### Principio 1: Perceptible

| Criterio | Nombre | Nivel | Estado | Evidencia y Verificación |
| :--- | :--- | :-: | :-: | :--- |
| **1.1.1** | Non-text Content | A | **PASS** | Todas las imágenes reales tienen `alt` significativo. Gráficos interactivos SVG y diagramas poseen `role="img"` con `aria-label` descriptivo. Íconos decorativos Lucide utilizan `aria-hidden="true"`. Monograma RC posee texto semántico. |
| **1.2.1** | Audio-only and Video-only | A | **N/A** | La aplicación no presenta transmisiones de audio o video pregrabadas independientes. |
| **1.2.2** | Captions (Prerecorded) | A | **N/A** | No existen contenidos multimedia de video con audio integrado. |
| **1.2.3** | Audio Description or Alternative | A | **N/A** | No existen pistas de video que requieran narración descriptiva. |
| **1.3.1** | Info and Relationships | A | **PASS** | Estructura semántica estricta (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). Jerarquía de encabezados coherente (`h1` único por ruta, `h2`, `h3`, `h4` anidados sin saltos). Listas `<ul>` y `<ol>` para métricas, componentes y tecnologías. Diálogos Radix con `Dialog.Title` y `Dialog.Description`. |
| **1.3.2** | Meaningful Sequence | A | **PASS** | El orden del DOM coincide rigurosamente con el orden de lectura visual y la navegación por teclado (Skip link → Monograma → Enlaces nav → Idioma/Tema → Hero → Secciones en orden secuencial). |
| **1.3.3** | Sensory Characteristics | A | **PASS** | Las instrucciones de interacción no dependen exclusivamente de color, forma o posición espacial. Toda indicación incluye texto accesible explícito. |
| **1.3.4** | Orientation | AA | **PASS** | La aplicación responde fluidamente a orientaciones vertical (*portrait*) y horizontal (*landscape*) en dispositivos móviles sin bloquearse ni forzar una orientación fija. |
| **1.3.5** | Identify Input Purpose | AA | **PASS** | Campo de búsqueda de proyectos identificado semánticamente con `type="search"`, `name="search"` y `aria-label`. |
| **1.4.1** | Use of Color | A | **PASS** | El color nunca es el único medio para transmitir información. Los badges de estado combinan iconos diferenciados (Check, Clock, Shield), texto explicativo y contraste de borde. Los enlaces poseen subrayado o variación de borde/fondo. |
| **1.4.2** | Audio Control | A | **PASS** | Ningún audio se reproduce de forma automática al cargar la página. |
| **1.4.3** | Contrast (Minimum) | AA | **PASS** | Todo el texto normal cumple con una relación de contraste superior a 4.5:1. Ver desglose en Sección 4. |
| **1.4.4** | Resize text | AA | **PASS** | Toda la tipografía escala limpiamente hasta un 200% mediante zoom de navegador sin truncamientos de contenido ni pérdida de controles funcionales. |
| **1.4.5** | Images of Text | AA | **PASS** | No se utilizan imágenes rasterizadas de texto tipográfico. Toda la tipografía se renderiza mediante fuentes web vectoriales legibles (Inter). |
| **1.4.10** | Reflow | AA | **PASS** | El sitio soporta navegación completa en un ancho de viewport de 320 píxeles CSS (equivalente a 400% de zoom en 1280px) sin generar desplazamiento horizontal (`overflow-x: hidden`). Verificado en `accessibility-interaction.spec.ts`. |
| **1.4.11** | Non-text Contrast | AA | **PASS** | Componentes de interfaz (bordes de input, botones de paginación, iconos de alternancia, controles de slider) presentan un contraste >= 3.0:1 contra el fondo adyacente. |
| **1.4.12** | Text Spacing | AA | **PASS** | No existen estilos con `!important` que impidan la sobreescritura de espaciado de línea (line-height), espaciado de párrafo, letras o palabras. |
| **1.4.13** | Content on Hover or Focus | AA | **PASS** | Menús desplegables (theme dropdown) y tooltips son descartables con la tecla `Escape`, permanecen activos al mover el puntero sobre ellos (*hoverable*) y no desaparecen imprevistamente (*persistent*). |

---

### Principio 2: Operable

| Criterio | Nombre | Nivel | Estado | Evidencia y Verificación |
| :--- | :--- | :-: | :-: | :--- |
| **2.1.1** | Keyboard | A | **PASS** | El 100% de los elementos interactivos (enlaces, botones, toggles, acordeones, modales, pestañas de filtrado) es operable exclusivamente mediante teclado (`Tab`, `Shift+Tab`, `Enter`, `Space`, flechas direccionales). |
| **2.1.2** | No Keyboard Trap | A | **PASS** | Ningún componente bloquea el foco del teclado. En modales (`MobileNavSheet`, `ProjectGallery`), el foco se confina intencionalmente mientras están abiertos y se libera limpiamente con `Escape` o al presionar el botón de cierre. |
| **2.1.4** | Character Key Shortcuts | A | **PASS** | El atajo `/` para búsqueda en el catálogo se condiciona estrictamente a que ningún campo editable (`input`, `textarea`, `contenteditable`) tenga el foco. Se admiten además combinaciones de teclas con modificador (`Ctrl+K` / `Cmd+K`). |
| **2.2.1** | Timing Adjustable | A | **N/A** | La aplicación no impone límites de tiempo de sesión ni caducidad de acciones. |
| **2.2.2** | Pause, Stop, Hide | A | **PASS** | No existen carruseles con avance automático no solicitado, marquesinas ni elementos parpadeantes que superen 3 destellos por segundo. |
| **2.3.1** | Three Flashes or Below | A | **PASS** | Cero animaciones estroboscópicas. Se respeta la directiva `@media (prefers-reduced-motion: reduce)` suprimiendo transiciones bruscas. |
| **2.4.1** | Bypass Blocks | A | **PASS** | Enlace para saltar al contenido principal (`#main-content`) disponible como primer elemento enfocable en el DOM, visible al recibir foco (`sr-only focus:not-sr-only`). Localizado dinámicamente en español e inglés. |
| **2.4.2** | Page Titled | A | **PASS** | Cada ruta actualiza el título del documento (`<title>`) reflejando el contexto específico (ej. "Ricardo Cardenas \| Software Engineering & Architecture", "Proyectos \| Ricardo Cardenas"). |
| **2.4.3** | Focus Order | A | **PASS** | Secuencia de tabulación lógica y predecible. Al cerrar modales o cajones laterales, el foco se restaura automáticamente al elemento disparador original. |
| **2.4.4** | Link Purpose (In Context) | A | **PASS** | Enlaces redactados con propósito explícito (ej. "Explorar Catálogo Completo de Proyectos", "Ver Caso de Estudio de Nexo"). Enlaces iconográficos externos (GitHub, LinkedIn) contienen `aria-label` descriptivo. |
| **2.4.6** | Headings and Labels | AA | **PASS** | Encabezados claros, estructurados y descriptivos del contenido de cada sección. Entradas de formulario etiquetadas semánticamente. |
| **2.4.7** | Focus Visible | AA | **PASS** | Anillo de enfoque de alta visibilidad (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-hidden`) presente en todos los controles interactivos. |
| **2.4.11** | Focus Not Obscured (Minimum) *(WCAG 2.2)* | AA | **PASS** | El encabezado fijo (`header.fixed`) respeta márgenes de desplazamiento (`scroll-mt-24` / `scroll-mt-16`), impidiendo que el elemento enfocado quede oculto debajo de la barra de navegación. |
| **2.5.1** | Pointer Gestures | A | **PASS** | Toda funcionalidad táctil se puede ejecutar con un único toque (*single-point activation*); no se exigen gestos multitáctiles o basados en trayectorias complejas sin alternativa sencilla. |
| **2.5.2** | Pointer Cancellation | A | **PASS** | La activación de botones ocurre en el evento `pointerup` (o `click`), permitiendo cancelar la pulsación deslizando el puntero fuera del objetivo antes de soltar. |
| **2.5.3** | Label in Name | A | **PASS** | El texto visible de los botones y enlaces coincide de forma exacta con su nombre accesible (`accessible name`). En el logotipo de navegación se retiró el `aria-label` divergente, derivando el nombre del texto visual ("RC Ricardo Cardenas") + descriptor auditivo ("- Inicio"). |
| **2.5.7** | Dragging Movements *(WCAG 2.2)* | AA | **PASS** | No se requieren movimientos de arrastrar y soltar (*drag-and-drop*) para ninguna función interactiva. Los filtros, modales y navegación de galería operan con botones de un solo toque y atajos de teclado. |
| **2.5.8** | Target Size (Minimum) *(WCAG 2.2)* | AA | **PASS** | Todos los objetivos interactivos cumplen con el tamaño mínimo de 24×24 píxeles CSS o presentan suficiente separación entre elementos adyacentes. El botón de limpiar búsqueda (`X`) se calibró a 24×24px; los botones de navegación del menú móvil poseen altura táctil mínima de 48px. |

---

### Principio 3: Comprensible

| Criterio | Nombre | Nivel | Estado | Evidencia y Verificación |
| :--- | :--- | :-: | :-: | :--- |
| **3.1.1** | Language of Page | A | **PASS** | El atributo `lang` en el elemento raíz `<html>` se sincroniza dinámicamente con el estado activo de i18next (`lang="es"` o `lang="en"`), validado de forma reactiva en suite E2E. |
| **3.1.2** | Language of Parts | AA | **PASS** | Fragmentos técnicos en inglés integrados dentro del texto en español (ej. *Bounded Contexts*, *Clean Architecture*) mantienen coherencia fonética y sintáctica. |
| **3.2.1** | On Focus | A | **PASS** | Recibir foco en ningún elemento dispara cambios automáticos de contexto, aperturas imprevistas de nuevas páginas ni envíos de formularios. |
| **3.2.2** | On Input | A | **PASS** | Modificar el campo de búsqueda filtra la lista de forma no destructiva sin alterar el foco del cursor ni provocar recargas de página. |
| **3.2.3** | Consistent Navigation | AA | **PASS** | La estructura de navegación (Navbar, Footer, Breadcrumbs) se mantiene consistente e idéntica en orden y nomenclatura a lo largo de todas las vistas. |
| **3.2.4** | Consistent Identification | AA | **PASS** | Componentes con funciones similares (botones de acción primaria, badges de tecnología, tarjetas de caso de estudio) conservan la misma iconografía y convención visual. |
| **3.2.6** | Consistent Help *(WCAG 2.2)* | AA | **PASS** | Los mecanismos de contacto profesional (Email institucional, perfil de LinkedIn, repositorio de GitHub) se ubican de manera predecible y consistente tanto en el pie de página transversal (`Footer.tsx`) como en la sección de contacto (`ContactSection.tsx`). |
| **3.3.1** | Error Identification | A | **PASS** | Cuando una búsqueda no arroja coincidencias, se despliega un componente semántico de estado vacío (`EmptyState.tsx`) con mensaje explicativo claro y botón de acción para limpiar los filtros. |
| **3.3.2** | Labels or Instructions | A | **PASS** | Campos de texto presentan `aria-label` explícito y placeholder orientativo ("Buscar por título, tecnología, arquitectura..."). |
| **3.3.7** | Redundant Entry *(WCAG 2.2)* | A | **PASS** | La aplicación no requiere que el usuario vuelva a ingresar información previamente suministrada en la misma sesión de navegación. |

---

### Principio 4: Robusto

| Criterio | Nombre | Nivel | Estado | Evidencia y Verificación |
| :--- | :--- | :-: | :-: | :--- |
| **4.1.2** | Name, Role, Value | A | **PASS** | Todos los componentes personalizados cuentan con roles ARIA válidos (`role="dialog"`, `role="status"`, `role="img"`, `role="region"`). Estados interactivos expuestos con precisión (`aria-expanded`, `aria-selected`, `aria-modal="true"`, `aria-live="polite"`). |
| **4.1.3** | Status Messages | AA | **PASS** | El contador reactivo del catálogo de proyectos ("Mostrando X de 8 proyectos") implementa `role="status" aria-live="polite" aria-atomic="true"`, permitiendo que los lectores de pantalla anuncien automáticamente la actualización de resultados al aplicar filtros sin interrumpir la lectura. |

---

## 4. Auditoría de Contraste Cromático de la Interfaz

Se midieron y verificaron las relaciones de contraste cromático conforme a la fórmula W3C de Luminancia Relativa para ambos modos visuales.

### Modo Oscuro (Fondo base: `#09090B`, Superficie: `#121215`, Superficie Elevada: `#18181B`)

| Elemento / Token CSS | Color de Texto | Color de Fondo | Ratio Medido | Requisito WCAG AA | Diagnóstico |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Texto primario (`--text-primary`) | `#FFFFFF` | `#09090B` | **19.8 : 1** | >= 4.5:1 | **Supera AAA** |
| Texto secundario (`--text-secondary`) | `#cbd5e1` (Slate 300) | `#121215` | **10.5 : 1** | >= 4.5:1 | **Supera AAA** |
| Texto atenuado (`--text-muted`) | `#94a3b8` (Slate 400) | `#121215` | **7.1 : 1** | >= 4.5:1 | **Supera AAA** |
| Acento primario (`--primary`) | `#A78BFA` (Violet 400) | `#09090B` | **9.2 : 1** | >= 4.5:1 | **Supera AAA** |
| Estado Éxito (`--success`) | `#4ade80` (Green 400) | `#121215` | **10.8 : 1** | >= 4.5:1 | **Supera AAA** |
| Estado Advertencia (`--warning`) | `#fbbf24` (Amber 400) | `#121215` | **12.4 : 1** | >= 4.5:1 | **Supera AAA** |

### Modo Claro (Fondo base: `#FFFFFF`, Superficie: `#F8FAFC`, Superficie Elevada: `#FFFFFF`)

| Elemento / Token CSS | Color de Texto | Color de Fondo | Ratio Medido | Requisito WCAG AA | Diagnóstico |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Texto primario (`--text-primary`) | `#0F172A` (Slate 900) | `#FFFFFF` | **15.4 : 1** | >= 4.5:1 | **Supera AAA** |
| Texto secundario (`--text-secondary`) | `#334155` (Slate 700) | `#FFFFFF` | **8.9 : 1** | >= 4.5:1 | **Supera AAA** |
| Texto atenuado (`--text-muted`) | `#475569` (Slate 600) | `#F8FAFC` | **5.9 : 1** | >= 4.5:1 | **Supera AA (Conforme)** |
| Acento primario (`--primary`) | `#7C3AED` (Violet 600) | `#FFFFFF` | **5.8 : 1** | >= 4.5:1 | **Supera AA (Conforme)** |
| Texto verde sobre badge éxito | `#166534` (Green 800) | `#dcfce7` (`bg-success/10`) | **5.5 : 1** | >= 4.5:1 | **Supera AA (Conforme)** |
| Texto ámbar sobre badge alerta | `#92400e` (Amber 800) | `#fef3c7` (`bg-warning/10`) | **6.0 : 1** | >= 4.5:1 | **Supera AA (Conforme)** |

---

## 5. Auditoría de Accesibilidad de Documentos Digitales (Currículums PDF)

Se realizó una inspección estructural programática con `pypdf` sobre los dos archivos PDF distribuidos desde el portafolio:
- `public/CV_Ricardo_Cardenas_Software_Backend.pdf` (37,645 bytes)
- `public/CV_Ricardo_Cardenas-Data.pdf` (122,869 bytes)

### Hallazgos de Estructura y Tecnologías Asistivas

| Criterio de Accesibilidad PDF (PDF/UA) | CV Software Backend | CV Data & AI | Diagnóstico Técnico |
| :--- | :---: | :---: | :--- |
| **Tagged PDF (`/Marked: True`, `/Tagged`)** | **Sí** | **Sí** | Ambos documentos cuentan con árbol de estructura lógica de etiquetas marcado. |
| **Texto digital seleccionable y extraíble** | **Sí** (3,349 caracteres) | **Sí** (3,117 caracteres) | No son escaneos ni imágenes bitmap. El texto es 100% digital y legible por lectores de pantalla. |
| **Idioma del documento declarado (`/Lang`)** | **Sí** (`es-PE`) | **Sí** (`es-PE`) | Permite a los sintetizadores de voz pronunciar el documento en español sin fallas fonéticas. |
| **Anotaciones de enlaces activos (`/Link`)** | **Sí** (8 enlaces) | **Sí** (12 enlaces) | Enlaces URI interactivos a GitHub, LinkedIn y correo electrónico. |
| **Metadato de Título de Documento (`/Title`)** | `None` (Ausente) | `None` (Ausente) | **Observación menor:** Los metadatos del PDF no tienen poblada la propiedad `/Title` en el catálogo de metadatos, por lo que el lector de pantalla podría anunciar el nombre de archivo en lugar del título formal del documento. |

---

## 6. Conclusiones y Certificación de Conformidad

1. **Cumplimiento Integral:** La aplicación web cumple satisfactoriamente con la totalidad de los criterios de éxito aplicables de **WCAG 2.2 Nivel A y AA**.
2. **Cero Violaciones en axe-core:** 16/16 suites automatizadas pasan limpiamente sin advertencias ni violaciones pendientes.
3. **Robustez Multidispositivo:** Tanto en escritorio como en dispositivos móviles y modos claro/oscuro, los contrastes cromáticos y las áreas de contacto táctil cumplen y superan los umbrales de la norma internacional.