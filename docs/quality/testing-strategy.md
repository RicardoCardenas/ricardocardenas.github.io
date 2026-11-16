# Estrategia de Calidad y Aseguramiento de Pruebas (QA Strategy)

**Documento:** QA-STRAT-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Autor:** QA Automation Engineer & Lead Software Architect  

---

## 1. Alcance y Principios de la Estrategia

Este documento establece la arquitectura y pirámide de pruebas que se implementará a partir de la Fase 1. En estricto apego a las políticas de ejecución:
- **No se afirma que se han ejecutado pruebas sobre una aplicación aún no desarrollada.**
- Se definen los casos de prueba formales, los marcos de automatización, los umbrales de aceptación y los comandos verificables para su posterior ejecución.

---

## 2. Pirámide de Pruebas Frontend

```text
                  / \
                 /   \
                / E2E \         Playwright (Navegación completa, cambio de tema/idioma, deep links)
               /-------\
              /  Integ. \       React Router + Testing Library (Filtros de catálogo, sincronización de anclas)
             /-----------\
            / Componentes \     React Testing Library (Navbar, ProjectCard, ThemeToggle, EmptyState)
           /---------------\
          /   Unitarias     \   Vitest (Utilidades puras, debounce, modelos, resolución i18n)
         /-------------------\
```

---

## 3. Matriz de Casos de Prueba por Nivel

### 3.1 Nivel 1: Pruebas Unitarias (`Vitest`)
- **UT-01: Filtrado de Proyectos por Categoría:**
  - *Función a probar:* `filterProjects(projects: ProjectCaseStudy[], category: ProjectCategory)`
  - *Caso:* Verificar que al seleccionar `'data-ai'`, se retornen solo aquellos proyectos que incluyan `'data-ai'` en su array `categories`, admitiendo proyectos multi-categoría como *Nexo*.
- **UT-02: Búsqueda Textual con Normalización:**
  - *Función:* `searchProjects(projects: ProjectCaseStudy[], query: string)`
  - *Caso:* Verificar que la búsqueda sea insensible a mayúsculas y acentos (ej. buscar `"spring"` debe coincidir con `"Spring Boot"`).
- **UT-03: Detección y Fallback de Idioma:**
  - *Función:* `resolveLanguage(navLang: string, storedLang: string | null)`
  - *Caso:* Verificar que si `storedLang` es nulo y `navLang` es `"fr-FR"`, se active el fallback a `"es"`.
- **UT-04: Utilidad de Fusión de Clases CSS:**
  - *Función:* `cn(...inputs: ClassValue[])`
  - *Caso:* Verificar resolución correcta de colisiones de Tailwind (`p-4` vs `p-2` -> `p-2`).

### 3.2 Nivel 2: Pruebas de Componentes (`React Testing Library`)
- **CT-01: Renderizado de `ProjectCard`:**
  - Verificar que renderice título, resumen en el idioma activo, badges de categoría y botón con enlace hacia el slug correspondiente.
- **CT-02: Interacción en `ThemeToggle`:**
  - Simular clic en la opción "Modo Oscuro" y verificar que se llame a la función `setTheme('dark')` y que el atributo `aria-checked` se actualice.
- **CT-03: `LanguageToggle`:**
  - Simular clic en "EN" y verificar que el texto de la interfaz cambie al diccionario en inglés sin desmontar el componente.
- **CT-04: `EmptyState`:**
  - Renderizar con lista vacía de proyectos; comprobar presencia del texto de advertencia y botón de reinicio accesible.

### 3.3 Nivel 3: Pruebas de Integración y Enrutamiento
- **IT-01: Navegación de Catálogo a Detalle:**
  - Desde `/projects`, simular clic en una tarjeta y verificar que React Router cambie la URL a `/projects/:slug` y cargue la vista `ProjectDetailPage`.
- **IT-02: Manejo de Ruta Inválida:**
  - Navegar a `/projects/ruta-falsa`; verificar que se renderice `NotFoundPage` con código de estado lógico y enlace a `/projects`.
- **IT-03: Descarga de CVs Especializados:**
  - Verificar que los botones de descarga de CV enlacen a las rutas físicas reales de los PDFs con atributo `download`.

### 3.4 Nivel 4: Pruebas End-to-End (`Playwright`)
- **E2E-01: Flujo Completo de Usuario en Desktop:**
  - Iniciar en `/`, verificar renderizado de Hero, desplazarse por anclas (#skills, #featured-projects), navegar a `/projects`, aplicar filtro `Data & AI`, verificar 3 resultados, abrir *TheLook eCommerce*, verificar diagramas y regresar con breadcrumb.
- **E2E-02: Flujo Móvil en Viewport de iPhone 14 (390x844):**
  - Cargar `/`, verificar ausencia de scroll horizontal (`document.documentElement.scrollWidth === window.innerWidth`), abrir `MobileNavSheet`, cambiar tema a oscuro, verificar clase `.dark` en `<html>`, cerrar sheet y navegar.
- **E2E-03: Auditoría Automatizada de Accesibilidad (`axe-core`):**
  - Ejecutar `@axe-core/playwright` sobre las 4 vistas principales y confirmar 0 violaciones de nivel "critical" o "serious".

---

## 4. Control de Calidad Visual y Resistencia a Edge Cases (`break-ui`)

Siguiendo los principios de la skill `break-ui`, durante la Fase 2 de pruebas se validará la robustez visual frente a:
- Títulos de proyectos muy largos o en inglés técnico.
- Ausencia de imágenes o caídas de red de assets (placeholders elegantes).
- Zoom tipográfico del 200% en navegador sin desbordamiento de tarjetas.
- Navegación con teclado exclusivo (`Tab` y `Shift+Tab`) con confirmación visual de anillo de foco violeta.
