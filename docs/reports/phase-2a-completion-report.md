# Informe de Cierre Definitivo — FASE 2A: Refinamiento Visual, Corrección de Capturas y Aprobación

**Fecha de finalización:** 16 de noviembre de 2026  
**Proyecto:** Portafolio Profesional de Ricardo Fernando Cardenas Minaya  
**Estado:** 🎨 READY FOR VISUAL APPROVAL  
**Autor:** Antigravity Engineering Team  

---

## 1. Resumen Ejecutivo de la Iteración

En respuesta a la auditoría visual y técnica de la Fase 2A, se han completado con éxito las siguientes actividades:
1. **Diagnóstico y solución de la anomalía de capturas en modo oscuro:** Se aisló la causa raíz técnica por la cual las capturas dark se generaban con apariencia clara. Se implementó una sincronización robusta en Playwright mediante `page.emulateMedia({ colorScheme: 'dark' })`, inyección síncrona en `addInitScript` con la clave oficial `'portfolio-theme'`, y aserciones automatizadas sobre el valor computado de `background-color` (`rgb(9, 9, 11)` vs `rgb(255, 255, 255)`).
2. **Refinamiento de la jerarquía visual del Hero:** Jerarquía tipográfica calibrada con el nombre completo oficial (*Ricardo Fernando Cardenas Minaya*), especialización clara (*Software Engineer & Solutions Architect en formación*), badges discretos de disponibilidad y distinción académica (UPC • 8.º ciclo • Décimo Superior), áreas táctiles accesibles ($\ge 44\text{px}$) y eliminación total de "AI-Slop" (sin partículas, sin degradados estridentes, sin sombras hipertrofiadas).
3. **Ruptura de la monotonía visual entre secciones:**
   - **Sobre mí:** Composición editorial asimétrica en 2 columnas (7 columnas para principios formales de DDD, persistencia políglota y cultura de calidad; 5 columnas para ficha académica de la UPC e idiomas).
   - **Tecnologías:** Matriz compacta y escaneable agrupada en 5 dominios técnicos con badges monoespaciados discretos y contextos específicos sin barras de porcentaje arbitrarias.
   - **Proyectos Destacados:** Tarjetas con protagonismo visual claro para los 4 proyectos clave, resaltando la tesis *Nexo* como proyecto principal y enlaces a código o casos de estudio.
   - **Educación y Certificaciones:** Jerarquía en dos niveles que separa certificaciones profesionales oficiales verificadas (AZ-900, TOEFL ITP B2, Scrum SFC) de cursos y especializaciones complementarias de Coursera con toggle colapsable.
   - **Currículum Vitae:** Panel unificado y compacto en 2 columnas con descarga directa de PDFs de 1 página según perfil (*Software Engineering* vs *Data & AI*).
   - **Contacto:** Bloque limpio de 3 tarjetas con copiado de correo al portapapeles en 1 clic y accesos rápidos directos.
4. **Verificación técnica completa (Quality Gate):** Cero errores en TypeScript, cero advertencias en ESLint, 25/25 pruebas unitarias aprobadas en Vitest, compilación de producción en 2.40s y 30/30 pruebas E2E aprobadas en Playwright (Desktop y Mobile Chrome), con verificación de cero desbordamiento horizontal desde 320px hasta 1440px.

---

## 2. Diagnóstico y Corrección de Capturas en Modo Oscuro

### Causa Raíz Identificada
El análisis de [ThemeContext.tsx](file:///C:/Ricardo/Portafolio/src/context/ThemeContext.tsx#L5) e [index.html](file:///C:/Ricardo/Portafolio/index.html#L15) reveló que el contrato de almacenamiento persistente utiliza la clave:
```ts
const STORAGE_KEY = 'portfolio-theme';
```
En el script anterior de `tests/e2e/home-visual.spec.ts`:
1. La prueba escribía en `localStorage.setItem('ricardo-portfolio-theme', 'dark')` después de navegar a la página.
2. Al ejecutar `await page.reload()`, el script inline anti-FOUT de [index.html](file:///C:/Ricardo/Portafolio/index.html#L12-L23) consultaba `localStorage.getItem('portfolio-theme')`, que retornaba `null`.
3. Al ser `null`, evaluaba `window.matchMedia('(prefers-color-scheme: dark)').matches`. Como Playwright inicializa el navegador en modo `light` por defecto, la consulta era `false`.
4. En consecuencia, el script anti-FOUT ejecutaba síncronamente `document.documentElement.classList.remove('dark')`, neutralizando la clase oscura justo antes de renderizar la captura.

### Solución Implementada
En [home-visual.spec.ts](file:///C:/Ricardo/Portafolio/tests/e2e/home-visual.spec.ts):
1. **Emulación explícita de esquema de color:** `await page.emulateMedia({ colorScheme: 'dark' })` para modo oscuro y `colorScheme: 'light'` para modo claro.
2. **Inyección previa a la carga (`addInitScript`):** Se inyecta la clave oficial `localStorage.setItem('portfolio-theme', 'dark')` antes de la navegación para que el script anti-FOUT de `index.html` lea inmediatamente el valor persistido.
3. **Aserciones sobre el DOM y CSS computado:**
   ```ts
   // 1. Verifica clase 'dark' en el documento raíz
   const hasDarkClass = await page.evaluate(() => document.documentElement.classList.contains('dark'));
   expect(hasDarkClass).toBe(true);

   // 2. Verifica el valor computado real de background-color del body
   const bodyBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
   expect(bodyBg).toBe('rgb(9, 9, 11)'); // #09090b
   expect(bodyBg).not.toBe('rgb(255, 255, 255)');
   ```
4. **Validación visual verificada:** En modo claro el fondo computa estrictamente a `rgb(255, 255, 255)` (`#ffffff`), y en modo oscuro a `rgb(9, 9, 11)` (`#09090b`).

---

## 3. Refinamientos de Diseño UI/UX y Emil Kowalski Standards

| Componente | Refinamiento Aplicado | Principio de Diseño |
| :--- | :--- | :--- |
| **Hero** | Nombre principal H1 balanceado, subtítulo en violeta `#7C3AED` / `#A78BFA`, badge sutil verde pulsante para disponibilidad y badge UPC Décimo Superior. Extracto con ancho controlado (`max-w-2xl`). Botones principales con altura de 44px (`h-11`) y botones de redes con `h-11 w-11` para área táctil $\ge 44\text{px}$. | Tipografía protagonista, accesibilidad táctil WCAG 2.5.5 / 2.5.8, cero "AI slop". |
| **Sobre mí** | Se reemplazó la disposición de dos cajas simétricas por una grilla editorial 7-5. Columna izquierda: 3 pilares de ingeniería (DDD, persistencia políglota, calidad) con iconografía sobria. Columna derecha: tarjeta académica UPC y bloque de idiomas. | Ruptura de ritmo y cadencia editorial. |
| **Tecnologías** | Cuadrícula de 2 columnas con tarjetas de 5 dominios técnicos. Badges monoespaciados compactos con contexto sutil entre paréntesis (e.g., `Java 21 LTS (Spring Boot 3)`). | Escaneabilidad técnica sin porcentajes arbitrarios. |
| **Proyectos Destacados** | 4 proyectos destacados con jerarquía visual de protagonista (`FeaturedProjectCard`). Nexo cuenta con distinción de Tesis UPC, y acceso directo al catálogo de 8 proyectos. | Jerarquía de producto y honestidad académica. |
| **Certificaciones** | Separación en dos bloques: 3 credenciales profesionales oficiales con credencial verificable y bloque colapsable para especializaciones de Coursera. | Valor formal de acreditaciones. |
| **CV** | Contenedor unificado de 2 columnas con separación sutil (`divide-x`), identificando claramente el perfil de Software Engineering vs Data & AI, con botón de descarga directa de PDF de 1 página. | Reducción de fricción para reclutadores técnicos. |
| **Contacto** | 3 tarjetas especializadas con botón interactivo de copiado de email en un clic (feedback visual de 2 segundos) y enlaces directos a LinkedIn y GitHub. | Conversión y comunicación directa. |

---

## 4. Galería de Capturas Visuales Generadas

Las capturas de alta resolución han sido actualizadas y archivadas en `docs/reports/screenshots/` y en el directorio de artefactos:

### Capturas de Página Completa (Full Page)

| Vista | Viewport | Captura Local | Estado de Overflow |
| :--- | :--- | :--- | :---: |
| **Desktop Modo Claro** | 1440 × 900 px | [home-desktop-light-1440.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/home-desktop-light-1440.png) | 0px (Sin overflow) |
| **Desktop Modo Oscuro** | 1440 × 900 px | [home-desktop-dark-1440.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/home-desktop-dark-1440.png) | 0px (Sin overflow) |
| **Tablet Modo Claro** | 768 × 1024 px | [home-tablet-light-768.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/home-tablet-light-768.png) | 0px (Sin overflow) |
| **Móvil Modo Claro** | 390 × 844 px | [home-mobile-light-390.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/home-mobile-light-390.png) | 0px (Sin overflow) |
| **Móvil Modo Oscuro** | 390 × 844 px | [home-mobile-dark-390.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/home-mobile-dark-390.png) | 0px (Sin overflow) |

### Capturas del Viewport Inicial (Hero Section)

| Vista | Viewport | Captura Local | Fondo Computado |
| :--- | :--- | :--- | :---: |
| **Hero Desktop Claro** | 1440 × 900 px | [hero-desktop-light-1440.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/hero-desktop-light-1440.png) | `rgb(255, 255, 255)` |
| **Hero Desktop Oscuro** | 1440 × 900 px | [hero-desktop-dark-1440.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/hero-desktop-dark-1440.png) | `rgb(9, 9, 11)` |
| **Hero Móvil Claro** | 390 × 844 px | [hero-mobile-light-390.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/hero-mobile-light-390.png) | `rgb(255, 255, 255)` |
| **Hero Móvil Oscuro** | 390 × 844 px | [hero-mobile-dark-390.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/hero-mobile-dark-390.png) | `rgb(9, 9, 11)` |

### Vistas Adicionales del Sistema

| Vista | Viewport | Captura Local |
| :--- | :--- | :--- |
| **Catálogo Desktop Claro** | 1440 × 900 px | [catalog-desktop-light-1440.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/catalog-desktop-light-1440.png) |
| **Catálogo Desktop Oscuro** | 1440 × 900 px | [catalog-desktop-dark-1440.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/catalog-desktop-dark-1440.png) |
| **Detalle Nexo Desktop Oscuro** | 1440 × 900 px | [nexo-detail-desktop-dark-1440.png](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/nexo-detail-desktop-dark-1440.png) |

---

## 5. Resultados del Quality Gate de Verificación

Todas las pruebas y verificaciones fueron ejecutadas y pasadas satisfactoriamente:

```
> tsc --noEmit
Exit code: 0 (0 errores de tipado)

> eslint .
Exit code: 0 (0 errores, 0 advertencias)

> vitest run
Test Files: 7 passed (7)
Tests:      25 passed (25)
Duration:   8.24s

> vite build
Built in:   2.40s
Chunks:     dist/index.html (1.79 kB), dist/assets/index-DqDfzbQc.css (50.28 kB), dist/assets/index-CfWmgfdE.js (336.49 kB)

> npx playwright test
Running 30 tests using 8 workers
30 passed (10.3s)
- Revisión visual Desktop/Tablet/Mobile: APROBADA
- Verificación de ausencia de overflow en 320px/375px/390px/768px/1440px: APROBADA
- Verificación de color computado y clase .dark: APROBADA
- Navegación, filtrado reactivo e i18n ES/EN: APROBADA
- Aislamiento de privacidad académica de Nexo: APROBADA
```

---

## 6. Estado de Git y Conclusión

```
Rama actual: master
Commit base: cdf1bb2 (feat: implement phase 2a home visual identity and sections)
Modificaciones en working tree: Refinamientos visuales, tests Playwright y capturas actualizadas
Commits automáticos realizados: 0 (Cumplimiento de la restricción de autorización)
Pushes remotos realizados: 0
```

> [!IMPORTANT]
> **ESTADO FINAL: READY FOR VISUAL APPROVAL**  
> El refinamiento visual de la Home y la resolución de las capturas en modo oscuro se encuentran completamente ejecutados, probados y documentados.  
> Se presentan los resultados al usuario para su inspección visual antes de cualquier commit o del inicio de la Fase 2B.
