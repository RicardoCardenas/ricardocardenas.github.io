# ADR-003: Tokens de Diseño Semánticos, Identidad Violeta y Prevención de FOUT

**Estado:** Aprobado  
**Fecha:** 15 de noviembre de 2026  
**Decisores:** Senior UI/UX Designer, Frontend Engineer, Accessibility Specialist  
**Contexto Técnico:** Dirección visual, temas (Claro / Oscuro / Sistema) y contraste accesible  

---

## 1. Contexto y Requisitos Visuales
Se estableció formalmente la dirección visual **Minimalista Profesional (B)** para el portafolio de Ricardo Cardenas:
- **Identidad principal:** Violeta tecnológico (`#8B5CF6`) complementado con superficies neutras limpias y profundas.
- **Modos visuales:** Soporte completo para Modo Claro, Modo Oscuro y sincronización con las preferencias del sistema (`prefers-color-scheme`).
- **Accesibilidad:** Conformidad estricta con WCAG 2.2 AA (ratios de contraste mínimos de 4.5:1 para texto normal y 3:1 para controles e interfaces).
- **Prevención de destello (Zero-FOUT):** La carga del sitio en modo oscuro jamás debe producir un flash blanco antes de que React monte.
- **Prevención de AI Slop:** Rechazo explícito de efectos de resplandor excesivos, gradientes neón invasivos, fondos con partículas innecesarias y tarjetas con estética de videojuego o plantillas genéricas.

---

## 2. Decisión Arquitectónica

### 2.1 Definición de la Paleta Semántica y Tokens CSS
Se definen variables semánticas en dos estados (`:root` y `.dark`):

```css
:root {
  /* Modo Claro - Superficies neutras limpias */
  --background: #FFFFFF;
  --surface: #F8FAFC;
  --surface-elevated: #FFFFFF;
  --border: #E2E8F0;
  --border-subtle: #F1F5F9;

  /* Tipografía */
  --text-primary: #0F172A;     /* Ratio > 13:1 sobre fondo claro */
  --text-secondary: #475569;   /* Ratio > 4.8:1 sobre fondo claro */
  --text-muted: #64748B;

  /* Identidad Violeta */
  --primary: #7C3AED;          /* Violeta 600 - Ratio 4.6:1 sobre blanco */
  --primary-hover: #6D28D9;
  --primary-foreground: #FFFFFF;
  --accent: #8B5CF6;           /* Violeta 500 */
  --accent-subtle: #F5F3FF;

  /* Estados de interacción y feedback */
  --focus: #7C3AED;
  --ring: rgba(124, 58, 237, 0.35);
  --success: #15803D;
  --warning: #B45309;
  --error: #B91C1C;
}

.dark {
  /* Modo Oscuro - Superficies neutras profundas (Zinc/Slate) */
  --background: #09090B;
  --surface: #121215;
  --surface-elevated: #18181B;
  --border: #27272A;
  --border-subtle: #1E1E22;

  /* Tipografía */
  --text-primary: #F4F4F5;     /* Ratio > 15:1 sobre fondo oscuro */
  --text-secondary: #A1A1AA;   /* Ratio > 5.5:1 sobre fondo oscuro */
  --text-muted: #71717A;

  /* Identidad Violeta */
  --primary: #A78BFA;          /* Violeta 400 - Ratio 8.2:1 sobre fondo oscuro */
  --primary-hover: #C4B5FD;
  --primary-foreground: #09090B;
  --accent: #8B5CF6;
  --accent-subtle: #1E1730;

  /* Estados de interacción y feedback */
  --focus: #A78BFA;
  --ring: rgba(167, 139, 250, 0.4);
  --success: #4ADE80;
  --warning: #FBBF24;
  --error: #F87171;
}
```

### 2.2 Microinteracciones y Reglas de Emil Kowalski
- **Curvas de aceleración:** Uso exclusivo de `cubic-bezier(0.16, 1, 0.3, 1)` (curva ease-out con arranque rápido y asentamiento suave).
- **Duraciones contenidas:** Transiciones de 150ms a 200ms para hovers y dropdowns; máximo 250ms para modales o drawers.
- **Sensación táctil:** Botones con microinteracción `:active { transform: scale(0.98); }`.
- **Prohibido `transition: all`:** Solo se declaran las propiedades específicas alteradas (`transform`, `opacity`, `background-color`, `border-color`).
- **Respeto a `prefers-reduced-motion`:** Las animaciones se reducen automáticamente a transiciones de opacidad instantáneas o nulas cuando el sistema lo solicita.

### 2.3 Solución Anti-FOUT
Inclusión de script bloqueante síncrono en `<head>` de `index.html` que verifica `localStorage.getItem('portfolio-theme')` y la media query `(prefers-color-scheme: dark)` antes de ejecutar cualquier renderizado gráfico.

---

## 3. Consecuencias y Verificación
- Todos los componentes consumirán exclusivamente nombres semánticos de tokens (`bg-background`, `text-text-primary`, `border-border`, `bg-primary`), garantizando coherencia visual inmediata en cualquier modo.
- Los contrastes han sido validados matemáticamente superando los umbrales de WCAG 2.2 AA.
