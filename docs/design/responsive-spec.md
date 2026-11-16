# Especificación de Diseño Responsive y Adaptabilidad Móvil

**Documento:** DESIGN-RESP-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Autor:** Senior UI/UX Designer & Emil Kowalski Mobile Specialist  

---

## 1. Breakpoints Estándar del Sistema

El portafolio utiliza un sistema de puntos de quiebre fluido y adaptativo basado en Tailwind CSS:

| Breakpoint | Ancho Mínimo | Dispositivos Típicos | Comportamiento del Layout |
|---|---|---|---|
| **Mobile (`< sm`)** | $< 640$px | Smartphones en vertical (iPhone, Galaxy, Xiaomi) | 1 columna, navbar en drawer/sheet inferior, tipografía reducida, padding horizontal de 16px (`px-4`). |
| **Tablet (`sm` a `md`)** | $640$px – $767$px | Smartphones grandes en horizontal y phablets | 1-2 columnas en grillas, padding de 24px (`px-6`). |
| **Tablet Pro (`md` a `lg`)**| $768$px – $1023$px | iPads y tablets en vertical | Barra de navegación completa visible, grillas de proyectos a 2 columnas. |
| **Desktop (`lg` a `xl`)**| $1024$px – $1279$px| Laptops estándar y pantallas medianas | Ancho máximo de contenedor `max-w-6xl`, grillas a 2-3 columnas, padding de 32px (`px-8`). |
| **Wide Desktop (`xl`+)** | $\ge 1280$px | Monitores de escritorio y pantallas panorámicas | Ancho máximo centrado `max-w-7xl` con márgenes automáticos generosos. |

---

## 2. Reglas Cruciales de Adaptación Móvil Nativas (`mobile-native`)

Para asegurar que la aplicación web se sienta rápida, estable y con sensación nativa en dispositivos móviles, se aplican estrictamente las siguientes reglas:

### 2.1 Altura Dinámica de Viewport (100dvh)
- **Problema:** En iOS Safari y Chrome Android, `100vh` calcula la altura incluyendo las barras de navegación del navegador, provocando que los botones inferiores queden cortados u ocultos tras la barra de direcciones.
- **Solución implementada:** Uso exclusivo de `min-h-[100dvh]` para contenedores de pantalla completa y `100svh` para secciones iniciales.

### 2.2 Prevención de Zoom Forzado en Inputs iOS
- **Problema:** iOS Safari amplía automáticamente la página cada vez que un usuario toca un campo de entrada cuyo tamaño de fuente es inferior a 16px, rompiendo el encuadre del layout.
- **Solución implementada:** Todo input de texto (como la barra de búsqueda de proyectos) tiene un tamaño de fuente de base de `text-base` (16px) en resoluciones móviles.

### 2.3 Eliminación del Destello Gris en Toque (Tap Highlight)
- **Problema:** Los navegadores basados en WebKit generan un recuadro gris o azul parpadeante al tocar enlaces o botones.
- **Solución implementada:** Declaración en el CSS raíz:
  ```css
  * {
    -webkit-tap-highlight-color: transparent;
  }
  ```

### 2.4 Aislamiento de Estados Hover para Dispositivos Táctiles
- **Problema:** En teléfonos móviles, los estados `:hover` se quedan "pegados" después del toque, mostrando colores o sombras incorrectas.
- **Solución implementada:** Todas las variantes hover de Tailwind CSS se compilan protegidas para punteros finos con capacidad de hover real:
  ```css
  @media (hover: hover) and (pointer: fine) {
    .interactive-card:hover {
      transform: translateY(-2px);
      border-color: var(--accent);
    }
  }
  ```

### 2.5 Áreas de Toque Accesibles (Touch Targets $\ge 48 \times 48$px)
- Todos los elementos interactivos en móvil (botones del drawer, selectores de tema e idioma, iconos de redes) tienen un área interactiva mínima garantizada de $48 \times 48$ píxeles, utilizando paddings transparentes en caso de iconos de menor tamaño visual.

### 2.6 Respeto a Safe Areas (Notch y Home Bar de iOS)
- El menú móvil tipo sheet y la barra fija de navegación incorporan los insets de hardware:
  ```css
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  ```

### 2.7 Optimización de Taps y Gestos
- Aplicación de `touch-action: manipulation` en botones y controles interactivos para eliminar el retraso de 300ms que algunos navegadores móviles introducen para detectar el doble toque de zoom.
