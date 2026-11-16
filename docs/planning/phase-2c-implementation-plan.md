# Plan de Implementación — FASE 2C: Refinamiento de Fidelidad Visual y Elevación de Craft

**Documento:** PLAN-PHASE-2C-001  
**Versión:** 2.0.0 (Actualizada con políticas estrictas de privacidad personal y académica)  
**Fecha:** 16 de noviembre de 2026  
**Proyecto:** Portafolio Profesional de Ricardo Fernando Cardenas Minaya  
**Fase:** Fase 2C — Auditoría y Planificación de Refinamiento Visual  
**Estado:** 🚀 READY FOR DESIGN APPROVAL (NO IMPLEMENTAR HASTA AUTORIZACIÓN)  
**Autor:** Antigravity Engineering Team & Emil Kowalski Design Engineer  

---

## 1. Objetivo y Alcance de la Fase 2C

El objetivo de la **Fase 2C** es recuperar la riqueza visual, la profundidad de superficies y el refinamiento de interacción del diseño aprobado **Minimalista Profesional (B)**, adaptándose estrictamente a las directrices de privacidad personal y académica instruidas por el usuario, sin alterar la arquitectura de componentes, sin modificar la lógica de negocio ni romper la suite de pruebas automatizadas (31 pruebas unitarias y 38 pruebas E2E en Playwright).

### Principios Rectores:
1. **Privacidad Personal Total:** Queda descartada la fotografía personal y cualquier retrato artificial. Se mantiene y refina el **monograma tipográfico RC** y se estructura el Hero mediante una composición editorial en dos columnas con un recurso gráfico abstracto técnico no personal.
2. **Privacidad Académica Absoluta:** No se publicará el promedio ponderado numérico privado, ni calificaciones académicas privadas, ni constancias o documentos universitarios de notas. Se conserva exclusivamente la información profesional pertinente: carrera, 8.º ciclo en UPC, mención de **Décimo Superior / Top 10%** y certificaciones técnicas verificadas (AZ-900).
3. **Preservación de Tesis (Nexo):** El proyecto de investigación académica de Nexo mantendrá su código fuente 100% privado, sin enlaces a repositorios externos ni divulgación de infraestructura sensible.
4. **Cero "AI Slop":** Toda mejora visual responderá a principios de diseño de ingeniería funcional (tipografía intencional, ritmo vertical, elevación de superficies y respuesta táctil), evitando fondos con partículas, gradientes estridentes o decoraciones innecesarias.
5. **Transparencia Documental:** Se declara explícitamente que el archivo `docs/design/references/approved-portfolio-reference.png` no existe en disco; la referencia de diseño procede de las especificaciones aprobadas en Markdown (`docs/design/mockups/`) y sus tokens cromáticos.

---

## 2. Desglose Secuencial de Tareas de Implementación (Fase 2C.2)

### Tarea 1: Rediseño Editorial del Hero en Dos Columnas y Monograma RC
- **Objetivo:** Transformar el Hero actual de una sola columna en una composición editorial asimétrica de dos columnas con identidad técnica no personal.
- **Acciones Técnicas:**
  1. En `src/components/sections/HeroSection.tsx`, estructurar un layout en dos columnas para resoluciones de escritorio ($\ge 1024$px):
     - **Columna Izquierda (60%):**
       - Badges superiores: Disponibilidad para prácticas con punto indicador luminoso (`animate-ping`) y badge de formación UPC con distinción oficial de **Décimo Superior / Top 10%**.
       - **Monograma Tipográfico RC Refinado:** Rediseñar el componente `Avatar` con un squircle geométrico (`rounded-2xl`), sutil degradado perimetral violeta (`from-primary/15 via-primary/5 to-surface-elevated`) y borde nítido de 1px (`border border-primary/30`). **Sin fotografías personales.**
       - Título Display principal con tracking ajustado (`tracking-tight`) y subtítulo de especialidad profesional.
       - Propuesta de valor de ingeniería concisa.
       - Botones principales de acción (Explorar Proyectos y Descargar CV) y enlaces directos a GitHub y LinkedIn.
     - **Columna Derecha (40%):**
       - Diseñar un **recurso gráfico abstracto técnico no personal**: una tarjeta interactiva de arquitectura de software moderna que ilustra de forma esquemática un monolito modular con Bounded Contexts, nodos de persistencia políglota (relacional y grafos) e indicadores luminosos de estado operativo, reforzando la identidad de ingeniería de software sin mostrar rostros ni capturas ficticias.
  2. Incorporar una iluminación ambiental muy sutil en la cabecera (`bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.08),transparent)]` en modo claro y `rgba(124,58,237,0.12)` en modo oscuro).
- **Verificación:** Playwright test de visualización de dos columnas en desktop, respuesta táctil y ausencia de desbordamiento horizontal (0px overflow).

---

### Tarea 2: Refinamiento de Superficies y Bordes en el Sistema de Diseño
- **Objetivo:** Eliminar la sensación de contenedores planos mediante sutiles contrastes de superficie y bordes perimétricos limpios.
- **Acciones Técnicas:**
  1. En `src/components/ui/Card.tsx`, aplicar sutil iluminación de borde superior en modo oscuro (`border-t border-white/10`) y elevación suave al hover (`hover:-translate-y-0.5 hover:shadow-sm transition-[transform,box-shadow,border-color] duration-180 ease-out`).
  2. Refinar los tokens de sombra en modo claro para generar profundidad volumétrica sin estridencias (`shadow-card`).
- **Verificación:** Pruebas unitarias de componentes UI y validación visual de contrastes WCAG 2.2 AA.

---

### Tarea 3: Elevación de la Sección Sobre Mí y Pilares de Ingeniería
- **Objetivo:** Aportar ritmo visual a los pilares técnicos y formación académica respetando estrictamente la privacidad.
- **Acciones Técnicas:**
  1. En `src/components/sections/AboutSection.tsx`, estilizar los 3 pilares técnicos con bordes izquierdos coloreados (`border-l-2 border-primary/70`) y micro-tags conceptuales (`DDD`, `pgvector`, `Pytest`).
  2. En la tarjeta institucional UPC, destacar de forma clara el reconocimiento consolidado de **Décimo Superior • Top 10% de la carrera** y el 8.º ciclo académico.
  3. **Restricción de Privacidad:** Asegurar que **no se incluya el promedio ponderado numérico privado, ni calificaciones académicas privadas, ni enlaces/modales a constancias universitarias**.
- **Verificación:** Pruebas unitarias de renderizado de `AboutSection` y verificación de ausencia de cadenas de notas privadas.

---

### Tarea 4: Previsualizaciones Gráficas en Tarjetas de Proyectos Destacados
- **Objetivo:** Dotar a las tarjetas de la Home de evidencia visual técnica auténtica.
- **Acciones Técnicas:**
  1. En `src/components/ui/FeaturedProjectCard.tsx`, habilitar una cabecera de previsualización visual (`aspect-[16/9] overflow-hidden rounded-t-xl bg-surface-muted/60 relative`):
     - **TaleStar Mobile:** Captura real de Realidad Aumentada con ARCore (`/images/projects/talestar-ar.png`).
     - **TheLook eCommerce:** Captura del dashboard analítico en Looker Studio (`/images/projects/thelook-dashboard.png`).
     - **Capital Cruise:** Diagrama relacional de base de datos de dbdiagram.io (`/images/projects/capital-cruise-db.png`).
     - **Nexo:** Banner técnico abstracto de topología con badge destacado de Tesis Académica UPC, **sin pantallas ni código privado**.
  2. Añadir efecto de micro-zoom suave en la imagen al hacer hover sobre la tarjeta (`group-hover:scale-[1.02] transition-transform duration-300 ease-out`).
- **Verificación:** Playwright test comprobando carga correcta de imágenes sin errores 404.

---

### Tarea 5: Refinamiento del Catálogo de Proyectos (`/projects`)
- **Objetivo:** Otorgar mayor dinamismo y jerarquía al catálogo de los 8 proyectos verificados.
- **Acciones Técnicas:**
  1. En `src/pages/ProjectsCatalogPage.tsx`, incorporar una cabecera temática o badge de tipología técnica (Backend API, Data Pipeline, Mobile App, Tesis de Investigación).
  2. Resaltar la micro-métrica destacada con tipografía monoespaciada prominente (`font-mono text-primary font-bold`).
  3. Aplicar feedback táctil al presionar tarjetas (`active:scale-[0.99] transition-transform duration-150`).
- **Verificación:** Pruebas E2E de filtrado, búsqueda y comprobación de ausencia de overflow (0px).

---

### Tarea 6: Integración del Diagrama Relacional en Capital Cruise
- **Objetivo:** Enriquecer la galería técnica del caso de estudio de Capital Cruise con su modelado relacional verificado.
- **Acciones Técnicas:**
  1. Copiar `C:\Users\Ricardo\Downloads\CruiseDB.png` a `public/images/projects/capital-cruise-db.png`.
  2. Registrar la imagen en la galería de `src/data/projects.ts` para Capital Cruise con título descriptivo (*"Modelo Relacional y Entidades de Crédito Vehicular (dbdiagram.io)"*).
  3. Verificar que `ProjectGallery.tsx` renderice la miniatura y permita ampliarla a pantalla completa en alta definición.
- **Verificación:** Playwright test de visualización de galería en el detalle de Capital Cruise.

---

### Tarea 7: Microinteracciones Táctiles según `emil-design-eng`
- **Objetivo:** Implementar respuesta táctil y transiciones fluidas de alta calidad perceptiva.
- **Acciones Técnicas:**
  1. Reemplazar clases genéricas `transition-all` por propiedades específicas (`transition-[transform,border-color,box-shadow] duration-180 ease-out`).
  2. Configurar `:active:scale-[0.98]` en botones primarios y tarjetas interactivas.
  3. En `ProjectGallery.tsx`, agregar animación de entrada de modal con escala orgánica `scale(0.96) -> scale(1)` y fondo con desenfoque `backdrop-blur-md`.
- **Verificación:** Inspección de rendimiento de animación a 60fps sin reflows layout costosos.

---

### Tarea 8: Integración del CV PDF Oficial para Descarga Funcional
- **Objetivo:** Conectar el botón de descarga de currículum al archivo PDF verificado.
- **Acciones Técnicas:**
  1. Copiar `C:\Ricardo\Kratos\Cvs\CV_Ricardo_Cardenas_Minaya.pdf` a `public/cv/CV_Ricardo_Cardenas_Software_Backend.pdf`.
  2. Asegurar que los botones de descarga de CV en Navbar, Hero y CVSection apunten al archivo estático sin errores 404.
- **Verificación:** Playwright test de verificación de descarga de archivo con status HTTP 200.

---

## 3. Matriz de Criterios de Aceptación y Restricciones de Privacidad

| Categoría | Criterio de Aceptación Medible | Método de Verificación |
| :--- | :--- | :--- |
| **Privacidad Personal** | Cero fotografías personales en `public/`, `src/` o componentes. Se conserva exclusivamente el monograma tipográfico RC. | Inspección de assets + Playwright test |
| **Privacidad Académica** | Cero menciones al promedio ponderado numérico privado. Cero documentos de notas o calificaciones individuales. Se muestra únicamente Décimo Superior / Top 10%. | Vitest regex check + Playwright assertion |
| **Hero Editorial 2 Col.** | Layout en dos columnas en $\ge 1024$px. Columna izquierda con texto y CTAs; columna derecha con gráfico abstracto técnico no personal. | Playwright responsive test + Captura visual |
| **Tarjetas con Imágenes Reales** | TaleStar, TheLook y Capital Cruise muestran banners gráficos reales sin imágenes artificiales. Nexo muestra cabecera abstracta. | Playwright `toBeVisible()` en `<img>` |
| **Privacidad de Nexo** | Cero enlaces a repositorios GitHub o código fuente expuesto en Nexo. | Playwright selector `toHaveCount(0)` |
| **Microinteracciones** | Todas las tarjetas interactivas reaccionan al estado `:active` con escala `[0.98]` y duración $\le 200$ms. | Playwright interaction snapshot |
| **Preservación de Pruebas** | Las 31 pruebas unitarias y 38 pruebas Playwright continúan pasando al 100%. | `npm run test` & `npx playwright test` |
| **Desbordamiento Horizontal** | 0px de desbordamiento horizontal en viewports de 320px, 390px, 768px y 1440px. | Playwright `scrollWidth === clientWidth` |

---

## 4. Estrategia de Pruebas y Quality Gate

Antes de solicitar la aprobación final de la Fase 2C, se ejecutará el Quality Gate completo:

```powershell
npm run typecheck    # 0 errores de tipado en TypeScript
npm run lint         # 0 errores y 0 advertencias en ESLint
npm run test         # 31/31 pruebas unitarias y de componentes pasando
npm run build        # Compilación de producción en Vite limpia
npx playwright test  # Regeneración y validación de capturas de alta resolución
```

---

> [!IMPORTANT]
> **ESTADO DEL PLAN: READY FOR DESIGN APPROVAL**  
> El plan ha sido actualizado incorporando con total rigor las restricciones de privacidad personal y académica. No se modificará ningún componente React ni se creará ningún commit hasta recibir la autorización explícita del usuario.
