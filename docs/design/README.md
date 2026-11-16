# Sistema de Diseño y Wireframes — Portafolio Ricardo Cardenas

**Documento:** DESIGN-INDEX-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Autor:** Senior UI/UX Designer & Frontend Design Engineer  

---

## 1. Dirección Estética Aprobada

Siguiendo las decisiones formales aprobadas por el usuario, el portafolio adopta el estilo:
- **Estilo:** **Minimalista Profesional (B)**.
- **Identidad cromática:** Violeta tecnológico (`#8B5CF6`) complementado con superficies neutras limpias (modo claro) y neutras profundas de pizarra/zinc (modo oscuro).
- **Tema inicial:** Detección automática según `prefers-color-scheme` con alternancia manual y persistencia sin destellos.
- **Navegación:** Híbrida (One-Page Anchors para la Home y páginas independientes para catálogo y estudios de caso).
- **Internacionalización:** Soporte bilingüe completo (Español / Inglés).
- **Animaciones:** Sutiles, funcionales, táctiles y con respeto total a `prefers-reduced-motion` (basadas en la filosofía de Emil Kowalski).
- **Rechazo al "AI Slop":** Sin gradientes de neón chirriantes, sin mallas futuristas exageradas, sin efectos 3D innecesarios que ralenticen la CPU ni layouts recargados de plantillas genéricas.

---

## 2. Índice de Entregables de Diseño

1. [design-system.md](file:///C:/Ricardo/Portafolio/docs/design/design-system.md): Tokens de color, escalas tipográficas, sistema de espaciado, radios de curvatura, sombras y contrastes WCAG 2.2 AA.
2. [navigation-map.md](file:///C:/Ricardo/Portafolio/docs/design/navigation-map.md): Mapa de navegación híbrida, flujos de usuario y comportamiento entre rutas y anclas.
3. [responsive-spec.md](file:///C:/Ricardo/Portafolio/docs/design/responsive-spec.md): Especificación de breakpoints (Mobile, Tablet, Desktop, Wide) y reglas táctiles nativas (`mobile-native`).
4. **Mockups de Alta Fidelidad y Wireframes Estructurales:**
   - [view-1-home-desktop.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-1-home-desktop.md): Especificación detallada y wireframe de la vista Home en Desktop.
   - [view-2-home-mobile.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-2-home-mobile.md): Especificación detallada y wireframe de la vista Home en Mobile.
   - [view-3-projects-catalog.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-3-projects-catalog.md): Catálogo completo con filtros de categorías múltiples y búsqueda reactiva.
   - [view-4-project-detail.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-4-project-detail.md): Caso de estudio de ingeniería con arquitectura, stack y métricas.
   - [view-5-theme-and-language.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-5-theme-and-language.md): Comportamiento de selectores de tema (Claro/Oscuro/Sistema) e idioma (ES/EN).

---

## 3. Nota sobre Generación Gráfica
En estricto cumplimiento de las restricciones de la Fase 0, los wireframes y maquetas se presentan como **especificaciones estructurales de alta fidelidad, mapas de geometría de layout, árboles ASCII y matrices de tokens visuales** en formato Markdown. No se han implementado componentes funcionales en código React ni se han creado dependencias prematuras.
