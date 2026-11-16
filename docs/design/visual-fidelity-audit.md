# Auditoría de Fidelidad Visual — Minimalista Profesional (B)

**Documento:** AUDIT-VIS-001  
**Versión:** 2.0.0 (Actualizada con directrices estrictas de privacidad personal y académica)  
**Fecha:** 16 de noviembre de 2026  
**Proyecto:** Portafolio Profesional de Ricardo Fernando Cardenas Minaya  
**Fase:** Fase 2C.1 — Auditoría de Fidelidad Visual y Planificación del Refinamiento  
**Estado:** 🎨 READY FOR DESIGN APPROVAL  
**Auditor:** Emil Kowalski Design Engineer & Antigravity Craft Team  

---

## 1. Resumen Ejecutivo y Marco de Referencia

La Fase 2B concluyó con éxito la base técnica y funcional del portafolio: catálogo completo de 8 proyectos, estudios de caso técnicos modulares en 14 bloques, métricas cuantitativas auditadas por categoría, búsqueda reactiva, filtrado bilingüe (ES/EN) y una suite automatizada libre de regresiones (31 pruebas unitarias y 38 pruebas Playwright pasando al 100%).

En esta Fase 2C.1 se audita la fidelidad visual de la implementación React actual frente a las especificaciones aprobadas del estilo **Minimalista Profesional (B)** ([design-system.md](file:///C:/Ricardo/Portafolio/docs/design/design-system.md) y [view-1-home-desktop.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-1-home-desktop.md) a [view-5-theme-and-language.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-5-theme-and-language.md)), aplicando de manera prioritaria las **nuevas restricciones de privacidad personal y académica**:

1. **Privacidad de Fotografía Personal:**
   - No se utilizará ninguna fotografía personal (descartando `Ricardo.png` o retratos artificiales).
   - Se conserva y refina el **monograma tipográfico RC** como marca de identidad visual profesional.
   - El Hero se reestructura mediante una **composición editorial en dos columnas** con un recurso gráfico abstracto/técnico no personal en la columna derecha.
2. **Privacidad de Información Académica:**
   - Queda estrictamente excluida la publicación de calificaciones individuales, historial de notas, documentos oficiales de notas y el promedio ponderado numérico privado.
   - Se preserva exclusivamente la información profesional pertinente: carrera de Ingeniería de Software, Universidad Peruana de Ciencias Aplicadas (UPC), ciclo académico (8.º ciclo), distinciones oficiales consolidadas (**Décimo Superior / Top 10%**) y certificaciones profesionales verificadas (Microsoft Azure Fundamentals AZ-900).
   - No se implementarán enlaces, modales ni visualizadores para consultar constancias o notas privadas.
3. **Privacidad y Confidencialidad de Tesis (Nexo):**
   - Se mantiene el código fuente 100% privado, sin enlaces a repositorios y con aviso formal de reserva de investigación.

> [!IMPORTANT]
> **Declaración de Transparencia sobre el Archivo de Referencia Original:**  
> Se comprobó la ruta `docs/design/references/approved-portfolio-reference.png` mediante el comando `Test-Path` y **se constató que el archivo no existe en el sistema de archivos local**. Por tanto, se informa con total veracidad que **falta dicha referencia gráfica física y no se declara haber realizado una comparación visual directa contra ese archivo PNG**.  
> La presente auditoría se fundamenta legítimamente en:
> - Las especificaciones formales y wireframes geométricos en Markdown ([view-1-home-desktop.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-1-home-desktop.md) a [view-5-theme-and-language.md](file:///C:/Ricardo/Portafolio/docs/design/mockups/view-5-theme-and-language.md)).
> - La matriz de tokens cromáticos, jerarquía tipográfica y contrastes de [design-system.md](file:///C:/Ricardo/Portafolio/docs/design/design-system.md).
> - Las capturas reales de alta resolución generadas por Playwright en [docs/reports/screenshots/](file:///C:/Ricardo/Portafolio/docs/reports/screenshots/).
> - Las directrices de craft y microinteracciones de `emil-design-eng`.

---

## 2. Diagnóstico Detallado Sección por Sección

### 2.1. Hero Section & Composición Editorial (`#hero`)
- **Diseño Actual:**
  - Layout en una sola columna vertical.
  - Avatar con iniciales "RC" sobre un fondo cuadrado simple con `ring-2 ring-primary/20`.
  - Título y subtítulo seguidos de párrafo de resumen, dos botones principales y tres botones cuadrados pequeños para redes sociales.
  - Fondo blanco/zinc plano sin profundidad visual.
- **Dirección Visual Aprobada & Refinamiento Propuesto:**
  - **Composición Editorial en Dos Columnas (Desktop $\ge 1024$px):**
    - **Columna Izquierda (60%):** Badges de disponibilidad y distinción UPC (Décimo Superior / Top 10%), monograma tipográfico RC refinado, encabezado Display con tracking intencional (`tracking-tight`), propuesta de valor de ingeniería, botones de acción (Explorar Proyectos y Descargar CV) y accesos directos a GitHub y LinkedIn.
    - **Columna Derecha (40%):** **Recurso gráfico abstracto técnico no personal**, consistente en una tarjeta de arquitectura visual interactiva (representación esquemática de monolito modular con Bounded Contexts, nodos relacionales/grafos e indicadores luminosos de estado) que comunica ingeniería de software de alto nivel sin mostrar fotografías ni capturas ficticias.
  - **Refinamiento del Monograma RC:**
    - Diseñar un contenedor squircle geométrico (`rounded-2xl`) con degradado sutil violeta (`from-primary/15 via-primary/5 to-surface-elevated`), borde perimetral nítido (`border border-primary/30`) y tipografía cuidada con tracking ajustado.
  - **Atmósfera Lumínica:**
    - Gradiente radial superior muy suave (`bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.08),transparent)]` en modo claro y `rgba(124,58,237,0.12)` en modo oscuro), aportando calidez visual sin saturación.

### 2.2. Sección Sobre Mí y Pilares de Ingeniería (`#about`)
- **Diseño Actual:**
  - 3 tarjetas horizontales de pilares técnicos (DDD, Persistencia Políglota, Calidad Verificable) con aspecto neutro uniforme.
  - Tarjeta de formación universitaria UPC y tarjeta de nivel de idiomas.
- **Dirección Visual Aprobada & Refinamiento Propuesto:**
  - Preservar la composición asimétrica de 2 columnas (7/5).
  - Dotar a las 3 tarjetas de pilares de bordes izquierdos coloreados (`border-l-2 border-primary/70`), fondo con gradiente perimetral imperceptible y micro-tags conceptuales (`DDD`, `pgvector`, `Pytest`).
  - En la tarjeta universitaria UPC, destacar de forma sobria el mérito consolidado (**Décimo Superior • Top 10% de la carrera**) y el ciclo actual (**8.º Ciclo**), **omitiendo de forma estricta cualquier mención al promedio ponderado numérico privado o calificaciones académicas privadas**.

### 2.3. Tecnologías y Dominios de Especialidad (`#skills`)
- **Diseño Actual:**
  - 5 tarjetas de dominio con badges monoespaciados y texto explicativo entre paréntesis.
- **Dirección Visual Aprobada & Refinamiento Propuesto:**
  - Introducir jerarquía visual clara entre tecnologías troncales (*Core Stack*) y complementarias (*Secondary*).
  - Aplicar micro-elevación y borde perimetral interactivo al hover (`hover:border-primary/40 hover:shadow-xs transition-[border-color,box-shadow,transform] duration-180 ease-out`).

### 2.4. Tarjetas de Proyectos Destacados en la Home (`#featured-projects`)
- **Diseño Actual:**
  - Grilla de 2×2 con 4 proyectos, presentada en formato 100% tipográfico sin ningún elemento gráfico.
- **Dirección Visual Aprobada & Refinamiento Propuesto:**
  - Integrar cabeceras con **capturas y diagramas auténticos** ya verificados en el repositorio:
    - **TaleStar Mobile:** Captura real de Realidad Aumentada con Google ARCore (`/images/projects/talestar-ar.png`).
    - **TheLook eCommerce Pipeline:** Captura del dashboard analítico en Looker Studio (`/images/projects/thelook-dashboard.png`).
    - **Capital Cruise:** Diagrama relacional de base de datos de dbdiagram.io (`/images/projects/capital-cruise-db.png`, a incorporar desde Downloads).
    - **Nexo:** Banner técnico abstracto de topología con badge de Tesis UPC, **sin pantallas ni código privado**.
  - Efecto de micro-zoom suave al hover (`group-hover:scale-[1.02] transition-transform duration-300 ease-out`).

### 2.5. Catálogo de Proyectos (`/projects`)
- **Diseño Actual:**
  - 8 tarjetas en 2 columnas, con búsqueda reactiva y filtros por categoría.
- **Dirección Visual Aprobada & Refinamiento Propuesto:**
  - Añadir miniatura o distintivo gráfico de tipología técnica (Backend API, Data Pipeline, Mobile App, Tesis de Investigación).
  - Resaltar la micro-métrica destacada con tipografía monoespaciada prominente (`font-mono text-primary font-bold`).
  - Incorporar respuesta táctil `:active:scale-[0.99]`.

### 2.6. Estudios de Caso y Detalle de Proyecto (`/projects/:slug`)
- **Diseño Actual:**
  - 14 bloques estructurados (métricas, problema/solución, topología de arquitectura, ADRs, galería, etc.).
- **Dirección Visual Aprobada & Refinamiento Propuesto:**
  - **Métricas (`MetricsBanner`):** Cifras en gran formato monoespaciado (`text-3xl font-extrabold font-mono`) con acento superior violeta de 2px.
  - **Decisiones (`KeyDecisionsCard`):** Separación visual nítida entre la decisión técnica (acento verde/primario) y el trade-off (borde ámbar).
  - **Capital Cruise:** Enriquecer la galería técnica incorporando el diagrama relacional auditado (`CruiseDB.png`).
  - **Nexo:** Mantener aislamiento total sin enlaces de código ni datos privados.

---

## 3. Matriz Comparativa de Componentes

| Componente | Diseño actual | Referencia aprobada | Diferencia | Mejora propuesta (Respetando Privacidad) | Prioridad |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **Identidad del Hero** | Monograma textual simple "RC" en caja violeta plana. | Monograma con identidad visual refinada y diseño geométrico cuidado. | Aspecto básico; carece de presencia de marca personal. | Diseñar un monograma RC en squircle geométrico (`rounded-2xl`) con degradado sutil (`from-primary/15 via-primary/5 to-surface-elevated`) y borde perimetral nítido. **Cero fotografías personales.** | **Alta** |
| **Composición del Hero** | Columna única vertical con espacios vacíos a los costados. | Composición editorial en dos columnas balanceadas. | Falta de dinamismo y sensación de maquetación provisional. | Implementar layout en 2 columnas: izquierda con jerarquía de texto y CTAs; derecha con **recurso gráfico abstracto técnico no personal** (topología de ingeniería/arquitectura). | **Alta** |
| **Atmósfera del Hero** | Fondo blanco o zinc neutro completamente plano. | Superficie minimalista con sutil iluminación de acento violeta. | Contraste plano; la cabecera no ancla la atención. | Añadir iluminación radial muy suave (`radial-gradient` al 8-12% de opacidad) que aporte calidez sin saturar. | **Alta** |
| **Información Académica (Sobre mí)** | Tarjeta universitaria con semestre y distinción académica básica. | Ficha institucional con formación relevante y distinciones oficiales. | Puede explicitar mejor el mérito académico consolidado. | Destacar el badge de **Décimo Superior • Top 10%** y el 8.º ciclo en UPC. **Excluir formalmente el promedio ponderado numérico privado, historial de notas y documentos confidenciales.** | **Alta** |
| **Pilares Técnicos (Sobre mí)** | 3 tarjetas horizontales neutras sin acento de color. | Tarjetas asimétricas con acento lateral y micro-tags conceptuales. | Aspecto de lista genérica; falta de ritmo visual. | Añadir borde izquierdo coloreado (`border-l-2 border-primary/70`) y micro-badges conceptuales (`DDD`, `pgvector`, `Pytest`). | **Media** |
| **Tarjetas de Proyectos (Home)** | Tarjetas 100% tipográficas sin ningún elemento gráfico. | Tarjetas con previsualización visual de interfaces o diagramas reales. | Homogeneidad visual; no se evidencia el producto de software. | Añadir cabeceras con imágenes reales: ARCore (TaleStar), Looker Studio (TheLook), DB Schema (Capital Cruise), y banner abstracto para Nexo. | **Alta** |
| **Micro-métricas en Catálogo** | Píldora de texto gris con punto separador. | Métrica numérica monoespaciada prominente con categoría auditable. | La cifra no resalta visualmente dentro de la tarjeta. | Destacar la cifra en violeta negrita monoespaciada (`font-mono text-primary font-bold`) con ícono de categoría y tooltip explicativo. | **Media** |
| **Banner de Métricas de Detalle** | 4 tarjetas neutras con valores en tamaño estándar. | Tarjetas cuantitativas con números grandes y borde superior de acento. | Falta de jerarquía respecto a los títulos de bloque. | Cifras en gran formato (`text-3xl font-extrabold font-mono`), borde superior sutil violeta e ícono de categoría temática. | **Media** |
| **Fichas de Decisiones (ADRs)** | Tarjeta neutra con texto continuo de decisión y trade-off. | Ficha estructurada con distinción cromática entre decisión y trade-off. | Difícil de escanear rápidamente. | Bloque de decisión con acento verde/primario y bloque de trade-off con acento ámbar delimitado por barra vertical de 2px. | **Media** |
| **Microinteracciones** | Transiciones estándar de Tailwind (`duration-150`) sin `:active`. | Microinteracciones táctiles basadas en Emil Kowalski (`:active:scale-[0.98]`). | La interfaz se percibe estática ante el toque o clic. | Aplicar `:active:scale-[0.98]` en botones y tarjetas con `transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1)`. | **Alta** |

---

## 4. Tabla de Revisión UI según `emil-design-eng`

| Before | After | Why |
| :--- | :--- | :--- |
| Monograma RC plano con borde básico | Monograma RC en squircle geométrico con degradado sutil violeta | Refuerza la identidad visual profesional y moderna sin recurrir a fotografías personales. |
| Hero en 1 sola columna vertical con fondo plano | Hero editorial de 2 columnas con gráfico abstracto técnico en la derecha | Aprovecha el ancho del viewport de escritorio y exhibe capacidades de arquitectura de software sin elementos personales. |
| Tarjeta de proyecto sin imagen (texto puro) | Tarjeta con cabecera de previsualización visual auténtica (`aspect-[16/9]`) | Las capturas reales de ARCore, Looker Studio y esquemas de BD demuestran software funcional e ingeniería real. |
| `transition: all 200ms` en tarjetas | `transition: transform 180ms ease-out, border-color 180ms ease-out, box-shadow 180ms ease-out` | Especificar propiedades exactas previene saltos de renderizado y repaint innecesario de fuentes. |
| Sin estado `:active` en tarjetas y botones | `active:scale-[0.98]` con `transition: transform 160ms ease-out` | Brinda retroalimentación háptica instantánea confirmando la recepción de la acción. |
| Tipografía con tracking por defecto | `tracking-tight` en títulos Display (`-0.03em`) y `tracking-wider` en micro-badges | El espaciado tipográfico intencional genera contraste editorial y sofisticación visual. |
| Badges de estado con borde plano estático | Badge con punto indicador luminoso (`relative flex h-2 w-2`) y desenfoque de fondo | Comunica estado operativo y verificado en tiempo real con elegancia minimalista. |
| Modal de galería con apertura instantánea | Modal con escala suave `scale(0.96) -> scale(1)` y `backdrop-blur-md` | Las transiciones basadas en resortes y escalas naturales evitan cambios bruscos e intrusivos en la UI. |

---

## 5. Criterios de Aceptación de Privacidad y Calidad

1. **Privacidad Personal Inquebrantable:**
   - Cero fotografías personales en `public/`, `src/` o componentes de la aplicación.
   - Cero generación de avatares sintéticos con apariencia humana.
   - El Hero conservará el monograma tipográfico RC y su composición técnica no personal.
2. **Privacidad Académica Absoluta:**
   - Cero referencias al promedio ponderado numérico privado.
   - Cero exposición de historiales de calificaciones, constancias universitarias o notas individuales.
   - Se mantiene exclusivamente el reconocimiento formal de **Décimo Superior / Top 10%**.
3. **Preservación de Tesis (Nexo):**
   - Código privado, sin enlaces a repositorios y con banner formal de reserva académica.
4. **Calidad Técnica y Rendimiento:**
   - Cero desbordamiento horizontal (`scrollWidth === clientWidth`) en 320px, 390px, 768px y 1440px.
   - Mantener el 100% de paso en las 31 pruebas unitarias y 38 pruebas Playwright.
   - Cumplimiento de accesibilidad WCAG 2.2 AA en contrastes de texto y navegación por teclado.

---

> [!IMPORTANT]
> **ESTADO DE LA AUDITORÍA: READY FOR DESIGN APPROVAL**  
> El informe ha sido actualizado incorporando plenamente las directrices de privacidad y queda a la espera de la autorización formal del usuario.
