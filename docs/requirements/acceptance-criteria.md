# Criterios de Aceptación — Portafolio Ricardo Cardenas

**Documento:** AC-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Estructura:** Formato estándar Given-When-Then (Gherkin) para verificación automatizada e inspección manual.

---

## 1. Navegación Híbrida y Enrutamiento

### AC-NAV-01: Desplazamiento suave dentro de la Home
- **Given** que el usuario se encuentra en la página principal (`/`).
- **When** hace clic en el enlace "Proyectos" en la barra de navegación.
- **Then** la ventana debe realizar un desplazamiento suave hasta la sección con `id="featured-projects"` sin recargar la página y actualizar la URL a `/#featured-projects`.

### AC-NAV-02: Navegación desde página secundaria hacia ancla en Home
- **Given** que el usuario se encuentra en la ruta `/projects/nexo-agentic-graphrag`.
- **When** hace clic en el enlace "Contacto" en la barra de navegación.
- **Then** el enrutador debe navegar a `/#contact`, cargar la vista Home y posicionar la pantalla en la sección de contacto.

### AC-NAV-03: Manejo de slugs inválidos (404)
- **Given** que un visitante ingresa a una URL inexistente como `/projects/proyecto-inexistente-xyz`.
- **When** el enrutador procesa la solicitud.
- **Then** el sistema debe renderizar la vista `NotFoundPage`, mostrando un mensaje claro en el idioma activo y un botón accesible "Volver a Proyectos" que redirija a `/projects`.

---

## 2. Gestión de Tema Visual (Claro / Oscuro / Sistema)

### AC-THEME-01: Detección inicial sin parpadeo (Zero FOUT)
- **Given** que el sistema operativo o navegador del usuario tiene configurado `prefers-color-scheme: dark`.
- **When** el usuario abre el sitio web por primera vez sin datos en `localStorage`.
- **Then** el sitio debe renderizarse inmediatamente en modo oscuro antes del primer render de React mediante un script inline en el `<head>`, evitando destellos blancos en pantalla.

### AC-THEME-02: Alternancia manual y persistencia
- **Given** que el usuario está visualizando el portafolio en cualquier página.
- **When** selecciona "Modo Claro" en el selector de tema.
- **Then** la clase `.dark` debe ser removida del elemento `<html>`, los tokens de color deben actualizarse a sus valores diurnos, y la clave `portfolio-theme` en `localStorage` debe almacenar `"light"`. Al recargar o navegar a otra ruta, la preferencia debe mantenerse intacta.

---

## 3. Internacionalización (Español / Inglés)

### AC-I18N-01: Detección y fallback
- **Given** que un visitante ingresa por primera vez con navegador en idioma inglés (`navigator.language = "en-US"`).
- **When** la aplicación inicializa.
- **Then** los textos de navegación, títulos y resúmenes deben mostrarse en inglés por defecto. Si el navegador está configurado en un idioma distinto a inglés o español, debe activar el fallback oficial en español (`es`).

### AC-I18N-02: Cambio dinámico de idioma
- **Given** que el usuario se encuentra en la página de detalle de un proyecto (`/projects/capital-cruise`).
- **When** hace clic en el selector de idioma y elige "EN".
- **Then** el contenido del caso de estudio (problema, solución, arquitectura, contribuciones) debe actualizarse inmediatamente a su versión en inglés sin alterar la posición del scroll ni reiniciar la aplicación.

---

## 4. Catálogo y Filtros de Proyectos

### AC-CAT-01: Filtrado reactivo por categoría
- **Given** que el usuario está en `/projects` viendo el catálogo completo de proyectos.
- **When** hace clic en la pestaña "Data & AI".
- **Then** la grilla debe mostrar exclusivamente los proyectos que contengan la etiqueta `"data-ai"`, manteniendo visible el conteo de elementos resultantes.

### AC-CAT-02: Búsqueda textual combinada
- **Given** que el filtro "Software Engineering" está activo.
- **When** el usuario escribe "Spring Boot" en el campo de búsqueda.
- **Then** solo deben mostrarse aquellos proyectos de ingeniería de software cuya lista de tecnologías o descripción incluya "Spring Boot".

### AC-CAT-03: Estado vacío resiliente
- **Given** que el usuario ingresa un término de búsqueda sin coincidencias como "QuantumComputing999".
- **When** se actualiza el estado de la lista.
- **Then** la interfaz debe mostrar un componente `EmptyState` accesible con el texto "No se encontraron proyectos para esta búsqueda" y un botón "Limpiar filtros" que restablezca el catálogo.

---

## 5. Descarga de Currículums

### AC-CV-01: Selección y descarga de CV especializado
- **Given** que el usuario hace clic en el botón principal "Descargar CV".
- **When** se despliega el menú contextual o modal de opciones.
- **Then** debe visualizar claramente las dos opciones:
  1. *CV Software Engineering / Backend* (archivo PDF enfocado en arquitectura y servicios).
  2. *CV Data & AI* (archivo PDF enfocado en analítica, SQL y pipelines).
- **And** al seleccionar cualquiera de ellos, debe iniciarse la descarga directa del archivo PDF correspondiente con el nombre de archivo estandarizado.

---

## 6. Rendimiento y Accesibilidad

### AC-ACC-01: Navegación integral por teclado
- **Given** un usuario que navega exclusivamente con la tecla `Tab`.
- **When** recorre los enlaces de la navbar, tarjetas de proyectos, botones y selectores.
- **Then** cada elemento interactivo debe mostrar un anillo de foco visible (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`) con un ratio de contraste $\ge 3:1$ contra el fondo, y el orden de tabulación debe seguir el flujo lógico del DOM.

### AC-PERF-01: Carga optimizada de imágenes
- **Given** las capturas y diagramas en las páginas de proyectos.
- **When** el navegador carga la página.
- **Then** las imágenes fuera del viewport inicial deben tener atributo `loading="lazy"`, decodificación asíncrona (`decoding="async"`), dimensiones explícitas (`width` y `height` para evitar CLS) y texto alternativo descriptivo (`alt`).
