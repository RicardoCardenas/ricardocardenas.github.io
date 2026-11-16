# Requisitos Funcionales — Portafolio Ricardo Cardenas

**Documento:** FR-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  

---

## 1. Mapeo de Requisitos Funcionales por Módulo

### 1.1 Navegación Global y Header (FR-NAV)
- **FR-NAV-01:** La barra de navegación debe ser fija (*sticky* o *floating glass*) y permanecer visible o accesible con scroll sutil.
- **FR-NAV-02:** En la página principal (`/`), los enlaces de navegación (`Sobre mí`, `Tecnologías`, `Proyectos`, `Formación`, `CV`, `Contacto`) deben realizar un scroll suave (*smooth scroll*) hacia el ancla respectiva, actualizando el indicador activo según la posición en pantalla (IntersectionObserver).
- **FR-NAV-03:** En páginas secundarias (`/projects`, `/projects/:slug`), los enlaces deben redirigir a la página principal con el hash correspondiente (ej. `/#skills`), o mantener la jerarquía de rutas mediante breadcrumbs.
- **FR-NAV-04:** Debe incorporar un selector de tema (Claro / Oscuro / Sistema) con menú desplegable o toggle accesible.
- **FR-NAV-05:** Debe incorporar un selector de idioma bilingüe (ES / EN) que alterne instantáneamente el contenido de la interfaz sin recargar la página completa.
- **FR-NAV-06:** En pantallas móviles ($< 768$px), la barra debe colapsar en un menú accesible (sheet o drawer inferior/lateral) con bloqueo de scroll del fondo y foco atrapado (*focus trap*).

### 1.2 Sección Hero / Inicio (FR-HERO)
- **FR-HERO-01:** Mostrar el nombre del profesional (*Ricardo Cardenas Minaya*), título profesional dinámico/bilingüe (*Ingeniería de Software • Backend • Arquitectura • Cloud / Data*), universidad (*Universidad Peruana de Ciencias Aplicadas - UPC*, 8.º ciclo, Décimo Superior) y ubicación (*Lima, Perú*).
- **FR-HERO-02:** Incluir un badge sutil de disponibilidad para prácticas preprofesionales (*Disponible para prácticas preprofesionales* / *Open to internships*).
- **FR-HERO-03:** Botones de acción primaria (CTA): *Explorar proyectos* (scroll a `#featured-projects`), *Descargar CV* (scroll a `#cv` o trigger de modal/popover con opción de los 2 CVs) y botones directos a GitHub y LinkedIn.

### 1.3 Sección Sobre Mí y Formación (FR-ABOUT)
- **FR-ABOUT-01:** Presentar síntesis profesional estructurada, destacando enfoque en arquitectura de software, DDD/CQRS, bases de datos y analítica con IA.
- **FR-ABOUT-02:** Mostrar datos de formación académica verificada: Universidad Peruana de Ciencias Aplicadas (UPC), Mar 2023 - Dic 2027, Décimo Superior.
- **FR-ABOUT-03:** Listar certificaciones oficiales verificadas con emisor y fecha: Microsoft Certified: Azure Fundamentals (AZ-900), TOEFL ITP B2, y cursos especializados (Google Cybersecurity, University of Colorado Boulder Databases for Data Scientists, University of Michigan Python for Everybody, Scrum Fundamentals Certified).

### 1.4 Sección Tecnologías y Habilidades (FR-SKILLS)
- **FR-SKILLS-01:** Organizar el stack técnico por áreas de dominio:
  - *Lenguajes y Frameworks:* Java (Spring Boot), C# (.NET), Python (FastAPI, Flask, Pandas), TypeScript/JavaScript (React, Vue.js, Angular, Flutter).
  - *Arquitectura e Ingeniería:* DDD, CQRS, REST APIs, Microservicios, Docker, OpenAPI/Swagger, SOLID.
  - *Datos y Nube:* PostgreSQL, MySQL, DuckDB, Neo4j, Microsoft Azure, Google Cloud (BigQuery, Dataform), Power BI.
  - *Herramientas e IA:* Git, GitHub Actions, Celery, LangGraph, Ollama, Claude Code, GitHub Copilot.
- **FR-SKILLS-02:** Cada tarjeta o tag debe contar con indicación semántica y estados hover/focus refinados.

### 1.5 Sección Proyectos Destacados (FR-FEAT)
- **FR-FEAT-01:** Mostrar una selección de 3 o 4 proyectos de máximo impacto técnico (ej. *Nexo — Agentic GraphRAG*, *Capital Cruise*, *TaleStar Mobile*, *TheLook eCommerce Data Pipeline*).
- **FR-FEAT-02:** Cada tarjeta destacada debe mostrar: título, resumen bilingüe, tags de categorías múltiples, stack principal, badges de verificación (ej. *Architecture C4*, *351 Tests Passing*, *BigQuery ML*) y botón hacia el estudio de caso detallado (`/projects/:slug`).
- **FR-FEAT-03:** Botón secundario para "Ver todos los proyectos" que navega hacia `/projects`.

### 1.6 Catálogo Completo de Proyectos (FR-CAT)
- **FR-CAT-01:** Ruta accesible `/projects` que lista todos los proyectos verificados.
- **FR-CAT-02:** Sistema de filtrado por pestañas/chips:
  - *Todos los proyectos (All)*
  - *Software Engineering & Backend*
  - *Data & AI*
  - *Mobile*
- **FR-CAT-03:** Permitir que un proyecto con perfil híbrido (ej. *Nexo* o *TaleStar*) aparezca en múltiples categorías según sus tags asignados.
- **FR-CAT-04:** Campo de búsqueda rápida por texto que filtre por título, resumen o tecnología.
- **FR-CAT-05:** Estado vacío (*empty state*) elegante cuando ningún proyecto coincida con la búsqueda/filtro, con botón para resetear filtros.

### 1.7 Detalle de Proyecto / Caso de Estudio (FR-DET)
- **FR-DET-01:** Ruta dinámica `/projects/:slug` accesible directamente mediante deep link.
- **FR-DET-02:** Estructura exhaustiva de estudio de caso:
  1. Nombre, categoría(s) y resumen ejecutivo.
  2. Estado actual del proyecto (ej. *Fase 0 Verificada*, *Producción Local*, *MVP Completado*).
  3. Problema de negocio o desafío técnico abordado.
  4. Solución técnica implementada.
  5. Rol, responsabilidades y contribuciones personales concretas.
  6. Pila tecnológica completa con justificación.
  7. Arquitectura del sistema (diagramas C4, flujo de datos, modularidad).
  8. Decisiones técnicas clave y trade-offs evaluados.
  9. Capturas de pantalla o previews técnicos reales (o placeholders estructurados cuando no existan imágenes).
  10. Retos técnicos resueltos y lecciones aprendidas.
  11. Resultados verificables y métricas reales (sin datos inventados).
  12. Botón a repositorio GitHub verificado.
  13. Enlace a demo en vivo (únicamente si existe y está verificado).
  14. Bloque de proyectos relacionados (2 proyectos de categoría afín).
- **FR-DET-03:** Breadcrumbs claros: `Inicio > Proyectos > [Nombre del Proyecto]` para facilitar el retorno.
- **FR-DET-04:** Manejo de rutas inexistentes: si `:slug` no coincide con ningún proyecto, renderizar vista 404 personalizada con enlace de retorno.

### 1.8 Descarga de Currículums (FR-CV)
- **FR-CV-01:** Proveer acceso diferenciado a dos currículums específicos:
  - *CV Software Engineering / Backend:* Enfocado en arquitectura de software, Spring Boot, .NET, DDD, cloud y APIs.
  - *CV Data & AI:* Enfocado en SQL avanzado, BigQuery, pipelines de datos, Power BI, Python analítico y modelos predictivos.
- **FR-CV-02:** Opción de descarga directa en PDF y visualización de fecha de última actualización.
- **FR-CV-03:** Los nombres y rutas físicas de los archivos PDF deben estar verificados en el repositorio o en la carpeta pública del frontend.

### 1.9 Contacto y Footer (FR-CONT)
- **FR-CONT-01:** Enlaces directos y verificados a:
  - Correo electrónico: `mailto:fernandocm1112@gmail.com`
  - Teléfono / WhatsApp profesional: `+51 933206904`
  - Perfil de LinkedIn: `https://www.linkedin.com/in/ricardo-cardenas-minaya-4734a3323`
  - Perfil de GitHub: `https://github.com/RicardoCardenas`
- **FR-CONT-02:** Botón de un solo clic para "Copiar correo electrónico" con feedback visual de confirmación (toast sutil mediante Sonner).
- **FR-CONT-03:** Footer con copyright formal, indicación de stack y enlaces rápidos a políticas de accesibilidad.
