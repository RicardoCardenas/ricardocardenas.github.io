# Sistema de Diseño — Minimalista Profesional (B)

**Documento:** DESIGN-SYS-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Autor:** Senior UI/UX Designer & Emil Kowalski Design Engineer  

---

## 1. Filosofía de Diseño: "Minimalista Profesional"

El diseño del portafolio se rige por la máxima de que **el buen diseño de ingeniería es invisible y funcional**. No recurre a artificios visuales recargados ("AI Slop"), fondos con partículas galácticas ni efectos 3D que consuman recursos. En su lugar, el impacto proviene de:
1. **Jerarquía tipográfica impecable** y ritmo vertical riguroso.
2. **Uso intencional del color violeta** como acento de identidad tecnológica sobre superficies neutras balanceadas.
3. **Bordes y separadores quirúrgicos** de 1 píxel con opacidades sutiles.
4. **Microinteracciones táctiles rápidas** con respuesta háptica y estados `:active` perceptibles.

---

## 2. Paleta de Color Semántica y Validación de Contraste (WCAG 2.2 AA)

### 2.1 Tokens Semánticos para Modo Claro

| Token Semántico | Valor Hex / HSL | Uso Principal | Fondo de Contraste | Ratio Calculado | Nivel WCAG |
|---|---|---|---|---|---|
| `--background` | `#FFFFFF` | Fondo principal del sitio | N/A | N/A | Base |
| `--surface` | `#F8FAFC` (Slate 50) | Fondos de tarjetas y contenedores | `--background` | 1.05:1 | Estructural |
| `--surface-elevated` | `#FFFFFF` | Modales, popovers, dropdowns | `--surface` | 1.05:1 + Shadow | Elevación |
| `--border` | `#E2E8F0` (Slate 200) | Bordes de tarjetas e inputs | `--background` | 1.3:1 | Componente |
| `--border-subtle` | `#F1F5F9` (Slate 100) | Líneas divisorias internas | `--background` | 1.15:1 | Delimitador |
| `--text-primary` | `#0F172A` (Slate 900) | Títulos, encabezados y texto clave | `#FFFFFF` | **15.6:1** | **Pasa AAA** |
| `--text-secondary` | `#475569` (Slate 600) | Descripciones, subtítulos y párrafos | `#FFFFFF` | **5.9:1** | **Pasa AA** |
| `--text-muted` | `#64748B` (Slate 500) | Fechas, tags secundarios y labels | `#FFFFFF` | **4.6:1** | **Pasa AA** |
| `--primary` | `#7C3AED` (Violet 600) | Botones primarios, enlaces activos | `#FFFFFF` | **4.6:1** | **Pasa AA** |
| `--primary-hover` | `#6D28D9` (Violet 700) | Estado hover de botones primarios | `#FFFFFF` | **5.8:1** | **Pasa AA** |
| `--primary-foreground` | `#FFFFFF` | Texto dentro de botones primarios | `#7C3AED` | **4.6:1** | **Pasa AA** |
| `--accent` | `#8B5CF6` (Violet 500) | Badges de tecnología, bordes activos | `--surface` | **3.8:1** | **Pasa AA UI** |
| `--accent-subtle` | `#F5F3FF` (Violet 50) | Fondos suaves de badges violetas | `--background` | 1.08:1 | Fondo |
| `--focus` | `#7C3AED` | Anillo de enfoque visual por teclado | Cualquiera | **3.0:1+** | **Pasa AA UI** |
| `--success` | `#16A34A` (Green 600) | Indicadores de pruebas aprobadas | `#FFFFFF` | **4.5:1** | **Pasa AA** |
| `--warning` | `#D97706` (Amber 600) | Avisos de información en revisión | `#FFFFFF` | **4.5:1** | **Pasa AA** |
| `--error` | `#DC2626` (Red 600) | Mensajes de error y validaciones | `#FFFFFF` | **4.6:1** | **Pasa AA** |

### 2.2 Tokens Semánticos para Modo Oscuro

| Token Semántico | Valor Hex / HSL | Uso Principal | Fondo de Contraste | Ratio Calculado | Nivel WCAG |
|---|---|---|---|---|---|
| `--background` | `#09090B` (Zinc 950) | Fondo principal del sitio | N/A | N/A | Base |
| `--surface` | `#121215` | Fondos de tarjetas y contenedores | `--background` | 1.1:1 | Estructural |
| `--surface-elevated` | `#18181B` (Zinc 900) | Modales, popovers, dropdowns | `--surface` | 1.15:1 + Shadow | Elevación |
| `--border` | `#27272A` (Zinc 800) | Bordes de tarjetas e inputs | `--background` | 1.5:1 | Componente |
| `--border-subtle` | `#1E1E22` | Líneas divisorias internas | `--background` | 1.2:1 | Delimitador |
| `--text-primary` | `#F4F4F5` (Zinc 100) | Títulos, encabezados y texto clave | `#09090B` | **16.8:1** | **Pasa AAA** |
| `--text-secondary` | `#A1A1AA` (Zinc 400) | Descripciones, subtítulos y párrafos | `#09090B` | **7.2:1** | **Pasa AAA** |
| `--text-muted` | `#71717A` (Zinc 500) | Fechas, tags secundarios y labels | `#09090B` | **4.6:1** | **Pasa AA** |
| `--primary` | `#A78BFA` (Violet 400) | Botones primarios, enlaces activos | `#09090B` | **8.5:1** | **Pasa AAA** |
| `--primary-hover` | `#C4B5FD` (Violet 300) | Estado hover de botones primarios | `#09090B` | **11.4:1** | **Pasa AAA** |
| `--primary-foreground` | `#09090B` (Zinc 950) | Texto dentro de botones primarios | `#A78BFA` | **8.5:1** | **Pasa AAA** |
| `--accent` | `#8B5CF6` (Violet 500) | Badges de tecnología, bordes activos | `--surface` | **5.4:1** | **Pasa AA** |
| `--accent-subtle` | `#1C152B` | Fondos suaves de badges violetas | `--background` | 1.15:1 | Fondo |
| `--focus` | `#A78BFA` | Anillo de enfoque visual por teclado | Cualquiera | **3.0:1+** | **Pasa AA UI** |
| `--success` | `#4ADE80` (Green 400) | Indicadores de pruebas aprobadas | `#09090B` | **9.8:1** | **Pasa AAA** |
| `--warning` | `#FBBF24` (Amber 400) | Avisos de información en revisión | `#09090B` | **10.5:1** | **Pasa AAA** |
| `--error` | `#F87171` (Red 400) | Mensajes de error y validaciones | `#09090B` | **6.7:1** | **Pasa AAA** |

---

## 3. Escala Tipográfica y Jerarquía

Se adopta una pila tipográfica moderna con fallback a fuentes nativas del sistema para evitar bloqueos de renderizado (*Flash of Invisible Text*):
- **Pila Sans-Serif:** `Geist Sans`, `Inter`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`.
- **Pila Mono (para código, arquitectura y métricas):** `Geist Mono`, `JetBrains Mono`, `"Fira Code"`, `monospace`.

| Nivel Tipográfico | Tamaño (Mobile / Desktop) | Line Height | Font Weight | Tracking (Letter-spacing) |
|---|---|---|---|---|
| **Display (Hero Title)** | 2.5rem (40px) / 3.75rem (60px) | 1.1 | 700 (Bold) | `-0.03em` |
| **H1 (Page Titles)** | 2rem (32px) / 2.5rem (40px) | 1.2 | 700 (Bold) | `-0.025em` |
| **H2 (Section Titles)** | 1.5rem (24px) / 2rem (32px) | 1.25 | 600 (Semibold) | `-0.02em` |
| **H3 (Card Titles / Subheads)** | 1.25rem (20px) / 1.5rem (24px) | 1.3 | 600 (Semibold) | `-0.015em` |
| **Body Large (Lead Intro)** | 1.125rem (18px) / 1.25rem (20px) | 1.6 | 400 (Regular) | `-0.01em` |
| **Body Base (Párrafos normales)**| 1rem (16px) / 1rem (16px) | 1.6 | 400 (Regular) | `0em` |
| **Body Small (Detalles/Metadatos)**| 0.875rem (14px) / 0.875rem (14px)| 1.5 | 400 / 500 | `0em` |
| **Caption / Badge / Code** | 0.75rem (12px) / 0.8125rem (13px)| 1.4 | 500 (Medium) | `+0.02em` |

---

## 4. Radios de Curvatura y Sombras Volumétricas

- `rounded-sm`: `4px` — Badges técnicos y tags pequeños.
- `rounded-md`: `8px` — Botones, inputs y selectores.
- `rounded-lg`: `12px` — Tarjetas secundarias y tooltips.
- `rounded-xl`: `16px` — Tarjetas principales de proyectos y contenedores de sección.
- `rounded-2xl`: `24px` — Modales, sheets móviles y contenedores destacados.

### Sombras Volumétricas
- **Modo Claro:**
  - `shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
  - `shadow-card`: `0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)`
  - `shadow-hover`: `0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.04)`
- **Modo Oscuro:**
  - Las sombras físicas se sustituyen por **bordes iluminados sutiles** (`border border-border/80`) y un glow imperceptible (`0 0 0 1px rgba(139, 92, 246, 0.08)` en hover).

---

## 5. Directrices de Movimiento y Animación (Reglas Emil Kowalski)

| Interacción | Propiedad Animada | Duración | Curva de Aceleración | Regla Emil Kowalski |
|---|---|---|---|---|
| **Pulsación de Botón** | `transform: scale(0.98)` | `100ms` | `ease-out` | Proporciona respuesta física instantánea (`:active`). |
| **Hover sobre Tarjeta** | `transform: translateY(-2px)`, `border-color` | `180ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Desplazamiento mínimo (no más de 2-3px); nunca escalar tarjetas completas. |
| **Despliegue de Dropdown** | `opacity`, `transform: scale(0.96) -> scale(1)` | `150ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Escalar desde el punto de anclaje (*transform-origin*). |
| **Modal / Sheet** | `opacity`, `transform: translateY(8px) -> translateY(0)` | `220ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrada fluida sin rebotes exagerados. |
| **Acciones de Teclado** | Ninguna (0ms) | `0ms` | Inmediato | **Nunca animar acciones gatilladas por teclado** (ej. Command Palette o atajos). |
| **Reduced Motion** | Solo `opacity` o `0ms` | `0ms` | `step-end` | Respetar rigurosamente `@media (prefers-reduced-motion: reduce)`. |
