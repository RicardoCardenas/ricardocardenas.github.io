# Plan de Rendimiento (Web Vitals) y Optimización para Motores de Búsqueda (SEO)

**Documento:** QA-PERF-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Auditor:** Frontend Performance Engineer & SEO Specialist  

---

## 1. Objetivos Formales de Rendimiento y Core Web Vitals

La arquitectura de la aplicación está optimizada para superar ampliamente los estándares de la industria en dispositivos de gama media:

| Métrica | Definición Técnica | Objetivo Móvil (4G) | Objetivo Desktop | Estrategia de Mitigación |
|---|---|---|---|---|
| **LCP (Largest Contentful Paint)** | Momento en que el bloque de contenido principal es visible. | $\le 1.5$ s | $\le 1.0$ s | Tipografía sans-serif preinstalada como fallback, prioridad de carga en Hero, ausencia de scripts bloqueantes pesados. |
| **INP (Interaction to Next Paint)** | Tiempo de respuesta a clics, toques o pulsaciones de teclado. | $\le 100$ ms | $\le 50$ ms | Tareas de renderizado cortas, `touch-action: manipulation` en móviles, desvinculación de listeners pesados en scroll. |
| **CLS (Cumulative Layout Shift)** | Estabilidad visual del diseño durante la carga. | $\mathbf{0.000}$ | $\mathbf{0.000}$ | Dimensiones explícitas de relación de aspecto (`aspect-ratio`, `width`, `height`) en todas las imágenes y contenedores. |
| **FCP (First Contentful Paint)** | Primer renderizado de texto o imagen. | $\le 0.9$ s | $\le 0.5$ s | CSS crítico extraído con Tailwind CSS purgado ($< 25$ KB). |
| **TTFB (Time to First Byte)** | Tiempo de respuesta del servidor CDN. | $\le 120$ ms | $\le 80$ ms | Distribución en Edge CDN global (Vercel Edge Network) con compresión Brotli. |

### Metas de Validación en Google Lighthouse
- **Performance:** $\ge 90$ (Móvil) / $\ge 98$ (Desktop).
- **Accessibility:** $\ge 95$ (Objetivo: 100).
- **Best Practices:** $\ge 95$ (Objetivo: 100).
- **SEO:** $\ge 95$ (Objetivo: 100).

---

## 2. Estrategia de Metadatos SEO y Open Graph (OG)

Para asegurar que los enlaces compartidos en LinkedIn, WhatsApp, X (Twitter) o reclutadores por correo muestren tarjetas enriquecidas de alta calidad:

### 2.1 Metadatos Canónicos y Dinámicos
Cada vista actualizará dinámicamente sus metaetiquetas mediante `react-helmet-async` o un hook ligero `useDocumentMeta`:

```html
<!-- Metadatos de la Página Principal (/) -->
<title>Ricardo Cardenas | Software Engineering, Backend & Data Architecture</title>
<meta name="description" content="Portafolio profesional de Ricardo Cardenas, estudiante de Ingeniería de Software (UPC, Décimo Superior). Especializado en arquitectura DDD, microservicios, cloud, pipelines BigQuery e inteligencia artificial con GraphRAG." />
<meta name="author" content="Ricardo Fernando Cardenas Minaya" />
<link rel="canonical" href="https://ricardocardenas.dev/" />

<!-- Open Graph / LinkedIn / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://ricardocardenas.dev/" />
<meta property="og:title" content="Ricardo Cardenas — Software Engineering & Architecture" />
<meta property="og:description" content="Casos de estudio de ingeniería: Agentic GraphRAG, Spring Boot, BigQuery ML, Flutter ARCore." />
<meta property="og:image" content="https://ricardocardenas.dev/assets/og-image.png" />
<meta property="og:locale" content="es_PE" />
<meta property="og:locale:alternate" content="en_US" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Ricardo Cardenas — Software Engineering Portfolio" />
<meta name="twitter:description" content="Casos de estudio de ingeniería: Agentic GraphRAG, Spring Boot, BigQuery ML, Flutter ARCore." />
<meta name="twitter:image" content="https://ricardocardenas.dev/assets/og-image.png" />
```

### 2.2 Metadatos Específicos por Caso de Estudio (`/projects/:slug`)
Al ingresar a `/projects/nexo-agentic-graphrag`:
- El título se actualiza automáticamente a: `Nexo — Agentic GraphRAG | Caso de Estudio • Ricardo Cardenas`.
- La descripción resume el problema, la arquitectura modular y las tecnologías utilizadas.
- La imagen `og:image` apunta a la captura o diagrama de arquitectura de Nexo.

---

## 3. Generación de Sitemap y Robots.txt

En la carpeta `public/` se mantendrán los archivos de rastreo estático:

### `public/robots.txt`
```text
User-agent: *
Allow: /
Sitemap: https://ricardocardenas.dev/sitemap.xml
```

### `public/sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ricardocardenas.dev/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ricardocardenas.dev/projects</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://ricardocardenas.dev/projects/nexo-agentic-graphrag</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ricardocardenas.dev/projects/capital-cruise</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ricardocardenas.dev/projects/talestar-mobile</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ricardocardenas.dev/projects/thelook-ecommerce-pipeline</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://ricardocardenas.dev/projects/customer-churn-analytics</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

## 4. Optimización de Imágenes y Recursos Estáticos

1. **Formatos Modernos:** Todas las imágenes y diagramas de arquitectura se convertirán a formato **WebP** o **SVG**, reduciendo el tamaño en un 60-80% en comparación con PNG tradicional.
2. **Carga Diferida Inteligente (Native Lazy Loading):**
   - Las imágenes de la sección Hero cargan inmediatamente con prioridad alta (`fetchpriority="high"`).
   - Las capturas de proyectos en secciones inferiores y catálogo cargan de forma diferida (`loading="lazy"` y `decoding="async"`).
3. **Contenedores con Relación de Aspecto Fija:** Cada imagen se aloja dentro de un contenedor con clase `aspect-video` o `aspect-[16/10]`, garantizando cero saltos de contenido (CLS = 0).
