# ADR-001: Adopción de Modelo de Navegación Híbrida (One-Page Anchors + Deep Links)

**Estado:** Aprobado  
**Fecha:** 15 de noviembre de 2026  
**Decisores:** Senior Software Architect, UI/UX Lead, Frontend Engineer  
**Contexto Técnico:** Portafolio profesional de ingeniería de software  

---

## 1. Contexto y Planteamiento del Problema
Los portafolios profesionales convencionales suelen dividirse en dos arquetipos:
1. **Single-Page Application (One-Page Scroll puro):** Todo el contenido reside en una sola página con scroll vertical infinito. Aunque brinda una experiencia rápida para un escaneo superficial de 15 segundos, colapsa cuando se desea documentar casos de estudio técnicos profundos con diagramas C4, métricas de rendimiento y lecciones aprendidas, resultando en páginas sobrecargadas y enlaces no compartibles.
2. **Multi-Page Application tradicional:** Cada sección (Sobre mí, Habilidades, Proyectos, Contacto) reside en una URL separada. Esto fragmenta la experiencia de un reclutador que solo desea desplazarse y evaluar rápidamente el perfil general.

Se requiere un modelo que combine la inmediatez de una landing page con la profundidad técnica de un sitio con páginas de detalle indexables y compartibles.

---

## 2. Decisión Arquitectónica
Adoptar un **modelo de navegación híbrida** compuesto por:
1. **Página Principal (`/`):** Estructurada como una landing page integral con scroll continuo y anclas internas (`#hero`, `#about`, `#skills`, `#featured-projects`, `#education`, `#cv`, `#contact`). Los enlaces en la barra de navegación ejecutan un desplazamiento suave (*smooth scroll*).
2. **Catálogo Completo (`/projects`):** Página independiente que ofrece capacidades avanzadas de búsqueda y filtrado multi-categoría.
3. **Páginas de Detalle de Proyectos (`/projects/:slug`):** Rutas individuales dedicadas para cada caso de estudio, permitiendo enviar enlaces directos a reclutadores o empleadores para proyectos específicos.
4. **Sincronización Transversal de Anclas:** Mecanismo en el enrutador (`useHashScroll`) que permite que un clic en `#skills` desde una página de detalle navegue primero a `/` y luego desplace el viewport automáticamente a la sección correspondiente.

---

## 3. Consecuencias y Trade-offs

### Beneficios
- **Experiencia de usuario óptima:** Reclutadores pueden evaluar el perfil en 20 segundos en la Home o profundizar en un proyecto específico.
- **Deep Linking y SEO:** Cada proyecto cuenta con su propia URL permanente (`canonical`), facilitando su distribución en currículums y LinkedIn.
- **Rendimiento desacoplado:** Las páginas de detalle cargan sus diagramas pesados bajo demanda mediante code-splitting (`React.lazy`).

### Mitigaciones y Costos
- **Gestión de estado del enrutador:** Requiere coordinar la navegación entre rutas (`react-router-dom`) y el desplazamiento del DOM (`scrollIntoView`), gestionado limpiamente a través de un custom hook.
- **Compatibilidad con servidores estáticos:** Requiere configurar reescrituras de URL (SPA fallback) para evitar errores 404 al refrescar `/projects/:slug`.
