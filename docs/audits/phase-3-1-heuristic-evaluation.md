# Auditoría Heurística de Usabilidad — Fase 3.1
## Evaluación de las 10 Heurísticas de Jakob Nielsen

**Fecha de evaluación:** 16 de noviembre de 2026  
**Evaluador:** Antigravity Engineering & UX/UI Review Team (Evaluación Experta)  
**Versión evaluada:** Commit `783df68` (`feat: complete phase 2 frontend integration and quality gate`)  
**Tipo de evaluación:** Inspección Heurística Experta (no constituye prueba con usuarios finales reales)  
**Estándar de referencia:** 10 Heurísticas de Usabilidad de Nielsen & Molich (1990/1994), WCAG 2.2 Nivel AA y Emil Kowalski Design Engineering  

---

## 1. Metodología y Escala de Severidad

La inspección se aplicó sistemáticamente sobre las rutas y componentes clave de la aplicación React:
- **Rutas inspeccionadas:** Home (`/`), Catálogo de Proyectos (`/projects`), Casos de Estudio de Detalle (`/projects/:slug`), y Página 404 (`/*`).
- **Componentes analizados:** Navbar, Menú Móvil (`MobileNavSheet`), Hero, Sobre Mí, Stack Tecnológico (`SkillsSection`), Proyectos Destacados, Ficha de Formación Universitaria, Tarjetas de Certificación (`CertificationCard`), Ficha de Descarga de CV (`CVSection`), Formulario/Canales de Contacto (`ContactSection`), Toggles de Tema e Idioma, Galería de Imágenes Accesible (`ProjectGallery`), y Diagramas de Arquitectura SVG.

### Escala de Severidad de Hallazgos (0 a 4)
| Nivel | Clasificación | Definición Operacional |
| :---: | :--- | :--- |
| **0** | **No es un problema** | El elemento cumple con las mejores prácticas de usabilidad o es una observación neutral. |
| **1** | **Cosmético** | Detalle visual o microinteracción menor. No dificulta la tarea; se sugiere corregir si hay tiempo disponible. |
| **2** | **Menor** | Fricción leve de usabilidad. El usuario puede completar la tarea sin pérdida de datos ni bloqueo significativo. |
| **3** | **Mayor** | Fricción considerable. Dificulta completar una tarea importante o desorienta temporalmente. Corrección obligatoria antes de producción. |
| **4** | **Catástrofe / Bloqueante** | Impide por completo completar una tarea crítica o provoca pérdida irrecuperable de contexto. Corrección inmediata. |

---

## 2. Matriz Consolidada de Inspección Heurística

| ID | Heurística de Nielsen | Componente / Ruta | Severidad | Estado | Resumen del Hallazgo |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **H1-01** | H1: Visibilidad del estado | Navbar (`/`) | **2** | Oportunidad | Ausencia de indicador activo (Scroll Spy) según la sección visible en viewport. |
| **H1-02** | H1: Visibilidad del estado | Catálogo (`/projects`) | **0** | Cumplido | Conteo dinámico y reactivo ("Mostrando X de 8 proyectos") al filtrar o buscar. |
| **H1-03** | H1: Visibilidad del estado | Contacto (`/`) | **0** | Cumplido | Feedback táctil y visual inmediato ("¡Copiado!") con duración controlada de 2000ms. |
| **H2-01** | H2: Relación sistema-mundo real | Casos de estudio (`/projects/:slug`) | **0** | Cumplido | Lenguaje técnico autoritativo de ingeniería (DDD, CQRS, RLS) sin jerga confusa. |
| **H3-01** | H3: Control y libertad | Catálogo (`/projects`) | **2** | Fricción | El estado de búsqueda y categoría no se sincroniza con URL query params (`?cat=...`). |
| **H3-02** | H3: Control y libertad | Galería Modal (`ProjectGallery.tsx`) | **0** | Cumplido | Cierre universal por `Escape`, clic en backdrop o botón `X`; retorno de foco accesible. |
| **H4-01** | H4: Consistencia y estándares | Botones interactivos (`Button.tsx`) | **1** | Cosmético | Algunos botones carecen de respuesta física al presionar (`active:scale-[0.98]`). |
| **H4-02** | H4: Consistencia y estándares | Todo el sistema | **0** | Cumplido | Coherencia estricta en paleta violeta (`#7C3AED`), fondos `#09090B` y tipografía Inter. |
| **H5-01** | H5: Prevención de errores | Input de Búsqueda (`/projects`) | **0** | Cumplido | Búsqueda tolerante a mayúsculas/minúsculas y caracteres especiales sin romper el render. |
| **H5-02** | H5: Prevención de errores | Página 404 (`NotFoundPage.tsx`) | **0** | Cumplido | Recuperación inmediata ante rutas erróneas con CTAs hacia Inicio y Catálogo. |
| **H6-01** | H6: Reconocimiento vs recuerdo | Hero & CV (`HeroSection.tsx`) | **1** | Cosmético | El botón del Hero descarga el CV de Backend sin indicar explícitamente que hay 2 versiones. |
| **H6-02** | H6: Reconocimiento vs recuerdo | Detalle (`ProjectDetailPage.tsx`) | **0** | Cumplido | Breadcrumbs semánticos completos (`Inicio / Catálogo / Nombre del Proyecto`). |
| **H7-01** | H7: Flexibilidad y eficiencia | Catálogo (`/projects`) | **1** | Cosmético | Ausencia de atajo de teclado global (ej. `/` o `Cmd+K`) para enfocar la búsqueda. |
| **H7-02** | H7: Flexibilidad y eficiencia | Galería (`ProjectGallery.tsx`) | **0** | Cumplido | Navegación bidireccional por teclado con flechas izquierda/derecha. |
| **H8-01** | H8: Diseño estético y minimalista | Hero e interfaz general | **0** | Cumplido | Composición editorial de dos columnas, espaciados generosos y cero decoraciones vacías. |
| **H8-02** | H8: Diseño estético y minimalista | Badges en móvil (`<360px`) | **1** | Cosmético | En pantallas muy angostas, algunos grupos de badges se apilan con interlineado ajustado. |
| **H9-01** | H9: Diagnóstico y recuperación | Búsqueda sin resultados (`/projects`) | **0** | Cumplido | `EmptyState` semántico con texto descriptivo y botón de acción para resetear filtros. |
| **H10-01** | H10: Ayuda y documentación | Ficha de Tesis Nexo (`/projects/nexo`) | **0** | Cumplido | Banner informativo visible sobre código privado y estado de la investigación académica. |
| **H10-02** | H10: Ayuda y documentación | Certificaciones (`CertificationCard.tsx`) | **0** | Cumplido | IDs de credencial visibles con enlaces directos de verificación oficial externa. |

---

## 3. Análisis Detallado de Hallazgos por Heurística

### Hallazgo H1-01: Ausencia de Scroll Spy en el Navbar Desktop
- **Heurística afectada:** H1 — Visibilidad del estado del sistema.
- **Componente y ruta:** `src/components/layout/Navbar.tsx` (Ruta `/`).
- **Problema observado:** Cuando el usuario se desplaza verticalmente por la página de inicio, los enlaces del menú superior (`Sobre mí`, `Tecnologías`, `Proyectos`, `Formación`, `Currículum`, `Contacto`) mantienen su estado neutro idéntico. No se resalta cuál es la sección activa actualmente en el viewport.
- **Evidencia reproducible:** Al hacer scroll desde la parte superior hasta `#education`, el enlace de navegación correspondiente no cambia de color ni muestra borde inferior activo.
- **Impacto para el usuario:** El usuario pierde orientación visual sobre en qué punto de la navegación estructural se encuentra, obligándolo a recordar o mirar el contenido circundante.
- **Severidad experta:** **2 (Menor)**.
- **Solución propuesta:** Implementar un hook `useScrollSpy` que observe los encabezados de sección con `IntersectionObserver` y aplique clases `text-primary font-semibold border-b-2 border-primary` al enlace activo.
- **Prioridad:** Media (Refinamiento Fase 3.2).
- **Criterio de aceptación:** Al posicionarse en cualquier sección de la Home, el enlace correspondiente en la barra de navegación debe iluminarse en color primario con transición de 150ms.

---

### Hallazgo H3-01: Estado de Búsqueda y Filtros de Catálogo No Sincronizados con URL
- **Heurística afectada:** H3 — Control y libertad del usuario & H7 — Flexibilidad y eficiencia.
- **Componente y ruta:** `src/pages/ProjectsCatalogPage.tsx` (Ruta `/projects`).
- **Problema observado:** El filtro de categoría activa (`activeCategory`) y el término de búsqueda (`searchQuery`) residen exclusivamente en memoria (`useState`). Si un usuario aplica un filtro (ej. `Data & AI`), hace clic en un proyecto para ver sus detalles y luego presiona el botón "Atrás" del navegador o "Volver al catálogo", la página se reinicia con la categoría "Todos" y el input vacío.
- **Evidencia reproducible:** 
  1. En `/projects`, seleccionar la categoría `Data & AI`.
  2. Hacer clic en "TheLook eCommerce Analytics".
  3. En la página de detalle, hacer clic en "Volver al catálogo".
  4. La categoría activa vuelve a ser "Todos" (`all`).
- **Impacto para el usuario:** Frustración al explorar múltiples proyectos de una misma categoría; el usuario debe volver a filtrar manualmente en cada iteración.
- **Severidad experta:** **2 (Menor)**.
- **Solución propuesta:** Migrar el estado de filtro a `useSearchParams` de React Router (`/projects?category=data-ai&q=bigquery`), de modo que el historial del navegador preserve y comparta el estado de la búsqueda.
- **Prioridad:** Alta (Antes del despliegue en Fase 3.2 / Fase 3.5).
- **Criterio de aceptación:** Al volver de una página de detalle hacia el catálogo, los filtros previamente seleccionados deben permanecer activos automáticamente.

---

### Hallazgo H4-01: Microinteracción de Presión Incompleta en Ciertos Controles
- **Heurística afectada:** H4 — Consistencia y estándares & Directrices `emil-design-eng`.
- **Componente y ruta:** `src/components/ui/Button.tsx`, enlaces de ancla en `HeroSection.tsx`.
- **Problema observado:** Si bien la mayoría de los botones poseen estados `:hover` y `:focus-visible`, algunos botones de variante `outline` y enlaces que simulan botones no incluyen la clase `active:scale-[0.98]` recomendada por el sistema de diseño para proporcionar respuesta háptica/visual táctil.
- **Evidencia reproducible:** Inspección de clases en `Button.tsx` y botones de descarga de CV en móvil.
- **Impacto para el usuario:** En dispositivos táctiles y con ratón, el clic puede sentirse estático ("rígido") o carente de respuesta física perceptible.
- **Severidad experta:** **1 (Cosmético)**.
- **Solución propuesta:** Estandarizar la clase `active:scale-[0.98] transition-transform duration-100` en la variante base de `Button.tsx` y en los disparadores de modales.
- **Prioridad:** Media (Refinamiento Fase 3.2).
- **Criterio de aceptación:** Todo control cliqueable debe reducir su escala ligeramente al presionar y volver a su tamaño normal al soltar.

---

### Hallazgo H6-01: Claridad de Especialidad en el Botón de Descarga de CV del Hero
- **Heurística afectada:** H6 — Reconocimiento antes que recuerdo.
- **Componente y ruta:** `src/components/sections/HeroSection.tsx` (Línea 76-85).
- **Problema observado:** En la cabecera principal, el botón secundario tiene como etiqueta `"Descargar CV (PDF)"` y descarga directamente `CV_Ricardo_Cardenas_Software_Backend.pdf`. Un reclutador que busque talento en Ciencia de Datos o Analítica podría asumir que sólo existe ese CV y no percatarse de que en la sección `#cv` existe una versión especializada en Data & AI.
- **Evidencia reproducible:** Lectura del CTA del Hero en `/`.
- **Impacto para el usuario:** Posible pérdida de visibilidad del perfil de Data & AI para reclutadores que no realizan scroll completo hacia `#cv`.
- **Severidad experta:** **1 (Cosmético / Claridad)**.
- **Solución propuesta:** Ajustar el texto del botón en el Hero a `"Descargar CV Backend (PDF)"` o agregar un indicador sutil `(Versión Backend / Ver Data & AI abajo)` que reconozca la dualidad del perfil.
- **Prioridad:** Media.
- **Criterio de aceptación:** El reclutador comprende inmediatamente qué versión descarga o cómo acceder a la versión analítica.

---

### Hallazgo H7-01: Atajo de Teclado Rápido para Búsqueda en Catálogo
- **Heurística afectada:** H7 — Flexibilidad y eficiencia de uso.
- **Componente y ruta:** `src/pages/ProjectsCatalogPage.tsx`.
- **Problema observado:** En el catálogo de proyectos no existe un atajo de teclado para enfocar el campo de búsqueda inmediatamente (convención común de escritorio: tecla `/` o `Ctrl+K`).
- **Evidencia reproducible:** En `/projects`, presionar `/` no enfoca el input de búsqueda.
- **Impacto para el usuario:** Usuarios avanzados y evaluadores técnicos deben utilizar el ratón o múltiples pulsaciones de `Tab` para alcanzar el input de búsqueda.
- **Severidad experta:** **1 (Cosmético / Conveniencia)**.
- **Solución propuesta:** Agregar un listener para la tecla `/` que enfoque el input y muestre una pequeña tecla física en el extremo derecho del input (`Kbd` con `/`).
- **Prioridad:** Baja (Mejora deseable post-MVP).
- **Criterio de aceptación:** Presionar `/` en `/projects` (cuando ningún otro input tiene el foco) transfiere el foco al input de búsqueda.

---

### Hallazgo H8-02: Apilamiento Compacto de Badges en Pantallas Ultra-Angostas (<360px)
- **Heurística afectada:** H8 — Diseño estético y minimalista & Ergonomía móvil.
- **Componente y ruta:** `src/components/sections/HeroSection.tsx`, `src/pages/ProjectDetailPage.tsx`.
- **Problema observado:** En dispositivos con pantallas de 320px de ancho (ej. iPhone SE primera generación o ventanas muy reducidas), la combinación del badge de disponibilidad (`Disponible para prácticas...`) y el badge universitario (`UPC • Ingeniería de Software • Décimo Superior`) se divide en 3 líneas con un espaciado vertical estrecho (`gap-2.5`).
- **Evidencia reproducible:** Emulación en Playwright con viewport `{ width: 320, height: 600 }`.
- **Impacto para el usuario:** No produce desbordamiento horizontal (verificado 0 overflow), pero genera una densidad visual alta en el tercio superior de la pantalla.
- **Severidad experta:** **1 (Cosmético)**.
- **Solución propuesta:** En viewports `< 380px`, acortar la redacción del badge o utilizar flexbox con `gap-y-2` específico para mejorar la holgura visual.
- **Prioridad:** Baja (Refinamiento móvil Fase 3.2).
- **Criterio de aceptación:** Espaciado vertical armonioso sin colisión visual entre insignias en 320px.

---

## 4. Conclusión de la Evaluación Heurística

La aplicación React demuestra una solidez técnica y de diseño sobresaliente:
- **Cero problemas bloqueantes o catastróficos (Severidad 3 o 4: 0 hallazgos).**
- **2 problemas menores de usabilidad (Severidad 2):** Ausencia de Scroll Spy en Navbar y persistencia de filtros en la URL del catálogo.
- **4 detalles cosméticos / de refinamiento (Severidad 1):** Microinteracciones táctiles `:active`, atajos de teclado, precisión en el CTA del CV del Hero y holgura en viewports ultra-compactos.

Todos los hallazgos han sido documentados con evidencia reproducible y están listos para ser priorizados en el backlog de la Fase 3.
