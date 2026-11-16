# Lista de Verificación de Accesibilidad (WCAG 2.2 AA)

**Documento:** QA-A11Y-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Auditor:** Accessibility & SEO Specialist  

---

## 1. Criterios de Conformidad WCAG 2.2 Nivel AA

Esta lista de verificación auditable regirá la evaluación técnica de todos los componentes de la interfaz de usuario:

### 1.1 Perceptibilidad (Principio 1)
- [ ] **1.1.1 Contenido no textual (Nivel A):** Toda imagen (`<img>`) cuenta con atributo `alt` descriptivo del contenido técnico. Los iconos decorativos de Lucide React utilizan `aria-hidden="true"`.
- [ ] **1.3.1 Información y relaciones (Nivel A):** Se utiliza HTML5 semántico estricto (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). Los encabezados (`<h1>` a `<h3>`) siguen una jerarquía estrictamente descendente sin saltos de nivel.
- [ ] **1.3.2 Secuencia significativa (Nivel A):** El orden de lectura visual coincide con el orden de los elementos en el árbol DOM.
- [ ] **1.4.3 Contraste mínimo (Nivel AA):** El texto normal presenta un ratio de contraste $\ge 4.5:1$ contra su fondo. El texto grande ($\ge 18$pt o $\ge 14$pt en negrita) presenta un ratio $\ge 3:1$. (Validado en `docs/design/design-system.md`).
- [ ] **1.4.10 Redistribución / Reflow (Nivel AA):** El contenido se ajusta a un ancho de 320 píxeles de CSS sin provocar desplazamiento horizontal de pantalla ni pérdida de información.
- [ ] **1.4.11 Contraste de elementos no textuales (Nivel AA):** Los bordes de tarjetas interactivas, botones e indicadores de foco tienen un ratio $\ge 3:1$ contra los colores adyacentes.
- [ ] **1.4.12 Espaciado de texto (Nivel AA):** La interfaz soporta alteraciones del usuario en altura de línea, espaciado entre párrafos y tracking de letras sin romperse.

### 1.2 Operabilidad (Principio 2)
- [ ] **2.1.1 Teclado (Nivel A):** Toda la funcionalidad (navegación por anclas, apertura de modales, cambio de tema/idioma, filtros de proyectos) es operable exclusivamente mediante teclado.
- [ ] **2.1.2 Sin trampas de teclado (Nivel A):** Al interactuar con el drawer móvil o modales de Radix, el foco no queda atrapado inadvertidamente y puede cerrarse con `Escape`.
- [ ] **2.4.1 Omitir bloques / Skip to Content (Nivel A):** Se incluye un enlace oculto al inicio del documento ("Saltar al contenido principal") visible solo al presionar `Tab`, permitiendo a los usuarios de lectores de pantalla saltar la barra de navegación.
- [ ] **2.4.3 Orden del foco (Nivel A):** El foco de tabulación recorre de forma lógica el contenido de izquierda a derecha y de arriba abajo.
- [ ] **2.4.7 Foco visible (Nivel AA):** Todo control interactivo enfocado muestra un contorno visible violeta con separación clara (`outline: 2px solid var(--focus); outline-offset: 2px`).
- [ ] **2.5.5 Tamaño del objetivo táctil (Nivel AAA / Mejor Práctica):** Los botones táctiles en dispositivos móviles tienen un área mínima de $48 \times 48$ píxeles.

### 1.3 Comprensibilidad (Principio 3)
- [ ] **3.1.1 Idioma de la página (Nivel A):** El elemento `<html>` actualiza dinámicamente su atributo `lang="es"` o `lang="en"` según el idioma activo seleccionado.
- [ ] **3.2.1 Al recibir el foco (Nivel A):** Ningún elemento interactivo produce un cambio de contexto (navegación o apertura de ventanas) meramente al recibir el foco.

### 1.4 Robustez (Principio 4)
- [ ] **4.1.2 Nombre, función y valor (Nivel A):** Todos los botones iconográficos (como el botón para copiar correo o el botón de menú móvil) poseen una etiqueta accesible mediante `aria-label` o texto para lectores de pantalla (`sr-only`).
- [ ] **4.1.3 Mensajes de estado (Nivel AA):** El aviso de "Correo copiado en el portapapeles" notifica a los lectores de pantalla a través de una región accesible (`role="status"` o `aria-live="polite"`).

### 1.5 Adaptación Sensorial y Movimiento
- [ ] **Animaciones reducidas:** Cumplimiento total con `@media (prefers-reduced-motion: reduce)`, desactivando desplazamientos físicos de tarjetas o efectos de escala.
