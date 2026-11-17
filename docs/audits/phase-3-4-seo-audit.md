# Auditoría Integral de SEO Técnico e Indexabilidad — FASE 3.4
## Portafolio Profesional de Ingeniería de Software — Ricardo Cárdenas

**Documento:** AUDIT-SEO-3-4-001  
**Versión:** 1.1.0  
**Fecha:** 16 de noviembre de 2026  
**Entorno de Auditoría:** Build de Producción (`dist/`) servido en `http://localhost:4173/`  
**Puntuación Google Lighthouse SEO:** **100 / 100** (Desktop y Mobile en todas las rutas)  
**Herramientas de Verificación:** Google Lighthouse v13.6.0, Playwright Test E2E, Schema.org Validator / JSON Schema Checker  

---

## 1. Resumen Ejecutivo y Estado General

En la Fase 3.4 se ejecutó una auditoría exhaustiva de SEO técnico, rastreabilidad, metadatos y datos estructurados sobre el portafolio profesional en React 19 + Vite + TypeScript. 

Previamente a la optimización, el portafolio operaba como una Single Page Application (SPA) pura sin archivos de rastreo canónicos (`robots.txt`, `sitemap.xml`), sin metadatos Open Graph dedicados, sin sincronización dinámica de etiquetas canónicas ni datos estructurados JSON-LD, obteniendo una puntuación Lighthouse SEO inicial de **91-92**.

Tras la implementación de la arquitectura de SEO (`src/config/seo.ts`, `src/components/seo/SEOHead.tsx`), el pipeline de prerenderizado estático (SSG), la parametrización desacoplada del dominio canónico (`getSiteUrl()`) y la generación dinámica de activos de indexación, el sitio alcanza **100 / 100** en todas las auditorías automatizadas de SEO de Google Lighthouse y pasa el 100% de la suite de pruebas E2E especializadas (`tests/e2e/seo-and-performance.spec.ts`).

---

## 2. Inventario de Rutas y Metadatos Auditados

Se auditaron las 11 rutas del portafolio tanto en su versión cruda (HTML prerenderizado para rastreadores) como en su comportamiento reactivo con cambio de idioma (ES / EN). Las URLs canónicas y esquemas están parametrizados mediante `getSiteUrl()`, cuyo origen por defecto en entorno local de pruebas/preview es `http://localhost:4173` y en producción adoptará `VITE_SITE_URL` sin modificar código:

| Ruta | Título Dinámico (ES / EN) | Canonical URL (Base `[SITE_URL]`) | Meta Robots | OG Type | Schemas JSON-LD |
| :--- | :--- | :--- | :---: | :---: | :--- |
| `/` | `Ricardo Cardenas \| Ingeniería de Software & Arquitectura DDD` / `Ricardo Cardenas \| Software Engineering & DDD Architecture` | `[SITE_URL]/` | `index, follow` | `website` | `Person`, `WebSite` |
| `/projects` | `Catálogo de Proyectos Verificados \| Ricardo Cardenas` / `Verified Projects Catalog \| Ricardo Cardenas` | `[SITE_URL]/projects` | `index, follow` | `website` | `CollectionPage`, `ItemList` (8 ítems) |
| `/projects/nexo-agentic-graphrag` | `Nexo: Multi-Agent GraphRAG Architecture \| Software Engineering • Data & AI \| Ricardo Cardenas` | `[SITE_URL]/projects/nexo-agentic-graphrag` | `index, follow` | `article` | `TechArticle`, `BreadcrumbList` |
| `/projects/capital-cruise` | `Capital Cruise \| Software Engineering • Data & AI \| Ricardo Cardenas` | `[SITE_URL]/projects/capital-cruise` | `index, follow` | `article` | `TechArticle`, `BreadcrumbList`, `SoftwareSourceCode` |
| `/projects/talestar-mobile` | `TaleStar Mobile \| Software Engineering \| Ricardo Cardenas` | `[SITE_URL]/projects/talestar-mobile` | `index, follow` | `article` | `TechArticle`, `BreadcrumbList`, `SoftwareSourceCode` |
| `/projects/meditrack-iot-health` | `MediTrack IoT Health \| Software Engineering \| Ricardo Cardenas` | `[SITE_URL]/projects/meditrack-iot-health` | `index, follow` | `article` | `TechArticle`, `BreadcrumbList`, `SoftwareSourceCode` |
| `/projects/thelook-ecommerce-pipeline` | `TheLook eCommerce Pipeline \| Data & AI \| Ricardo Cardenas` | `[SITE_URL]/projects/thelook-ecommerce-pipeline` | `index, follow` | `article` | `TechArticle`, `BreadcrumbList`, `SoftwareSourceCode` |
| `/projects/customer-churn-analytics` | `Customer Churn Analytics \| Data & AI \| Ricardo Cardenas` | `[SITE_URL]/projects/customer-churn-analytics` | `index, follow` | `article` | `TechArticle`, `BreadcrumbList`, `SoftwareSourceCode` |
| `/projects/jobsy-backend` | `Jobsy Backend Microservices \| Software Engineering \| Ricardo Cardenas` | `[SITE_URL]/projects/jobsy-backend` | `index, follow` | `article` | `TechArticle`, `BreadcrumbList`, `SoftwareSourceCode` |
| `/projects/onecoin-backend` | `OneCoin Core Banking \| Software Engineering \| Ricardo Cardenas` | `[SITE_URL]/projects/onecoin-backend` | `index, follow` | `article` | `TechArticle`, `BreadcrumbList`, `SoftwareSourceCode` |
| `/404` (o ruta desconocida) | `404: Página No Encontrada \| Ricardo Cardenas` / `404: Page Not Found \| Ricardo Cardenas` | `[SITE_URL]/404` | `noindex, nofollow` | `website` | Ninguno (no indexable) |

---

## 3. Navegación Facetada y Normalización Canónica

Un riesgo severo en catálogos filtrables es la **canibalización de palabras clave** e **indexación de contenido duplicado** cuando los usuarios o rastreadores acceden a URLs con parámetros (`/projects?category=data-ai`, `/projects?q=microservicios`, `/projects?category=software-engineering&q=event-driven`).

### Solución Implementada
- En `src/config/seo.ts` y `src/components/seo/SEOHead.tsx`, la etiqueta `<link rel="canonical">` siempre se normaliza a la ruta canónica pura sin query string:
  ```html
  <link rel="canonical" href="http://localhost:4173/projects">
  ```
- **Verificación Automatizada:**
  En `tests/e2e/seo-and-performance.spec.ts`:
  ```ts
  test('Normalización de URL canónica: filtros en el catálogo preservan la canónica raíz', async ({ page }) => {
    await page.goto('/projects?category=data-ai&q=graph');
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', `${expectedSiteUrl}/projects`);
  });
  ```
  Resultado: **Aprobado**. Los motores de búsqueda indexan únicamente la página maestra del catálogo, asignándole toda la autoridad de dominio.

---

## 4. Auditoría de Datos Estructurados (Schema.org JSON-LD)

Se implementaron esquemas ricos semánticos estructurados según las especificaciones de Schema.org y Google Search Central:

### 4.1. Esquema `Person` y `WebSite` (Página Principal)
Inyectado en la Home como un array de esquemas:
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ricardo Fernando Cardenas Minaya",
    "alternateName": "Ricardo Cardenas",
    "jobTitle": "Software Engineer & Architecture Lead",
    "url": "http://localhost:4173",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universidad Peruana de Ciencias Aplicadas (UPC)"
    },
    "sameAs": [
      "https://github.com/RicardoCardenas",
      "https://www.linkedin.com/in/ricardo-cardenas-minaya-4734a3323"
    ],
    "knowsAbout": [
      "Software Architecture",
      "Domain-Driven Design (DDD)",
      "GraphRAG",
      "Microservices",
      "Spring Boot",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Neo4j",
      "Docker"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ricardo Cardenas Portfolio",
    "url": "http://localhost:4173",
    "description": "Portafolio profesional de ingeniería de software, arquitectura de sistemas y ciencia de datos.",
    "author": {
      "@type": "Person",
      "name": "Ricardo Fernando Cardenas Minaya"
    }
  }
]
```

### 4.2. Esquema `CollectionPage` e `ItemList` (Catálogo)
Estructura el catálogo de proyectos con listado ordenado (`position`, `name`, `url`, `description`), permitiendo a Google interpretar cada estudio de caso como una entidad de ingeniería formal.

### 4.3. Esquema `TechArticle`, `BreadcrumbList` y `SoftwareSourceCode` (Detalle de Proyectos)
- `TechArticle`: define el estudio de caso como artículo técnico con autoría verificada, nivel de competencia (`proficiencyLevel: "Expert"`), tecnologías (`keywords`) y categorías (`about`).
- `BreadcrumbList`: define la jerarquía de migas de pan (`Home -> Projects Catalog -> [Project Title]`).
- `SoftwareSourceCode`: se genera **únicamente** para proyectos con repositorio público de GitHub (`!project.isPrivateCode && project.links.github`). Para Nexo (código reservado), este bloque se omite automáticamente, protegiendo la confidencialidad.

---

## 5. Rastreabilidad: `robots.txt` y `sitemap.xml` Dinámicos

Los archivos `robots.txt` y `sitemap.xml` se generan programáticamente durante el build (`scripts/prerender.js`) garantizando una sincronización absoluta con la URL configurada en tiempo de compilación:

### 5.1. `robots.txt` Generado
```txt
# Robots.txt — Portafolio Profesional Ricardo Cardenas
User-agent: *
Allow: /

# Sitemap XML canónico
Sitemap: http://localhost:4173/sitemap.xml
```
- Estado de entrega HTTP: **200 OK**.
- Tipo de contenido: `text/plain`.
- Sin directivas conflictivas de bloqueo a recursos CSS/JS.

### 5.2. `sitemap.xml` Generado
- Sintaxis XML válida compatible con el protocolo `sitemaps.org/schemas/sitemap/0.9`.
- Contiene exactamente las **10 rutas públicas canónicas**.
- Prioridades escalonadas:
  - Home: `priority 1.0`, `changefreq monthly`
  - Catálogo: `priority 0.9`, `changefreq weekly`
  - 8 Estudios de Caso: `priority 0.8`, `changefreq monthly`
- La página 404 está expresamente excluida del sitemap.

---

## 6. Prerenderizado Estático (SSG) vs. SPA Tradicional

### El Problema de las SPAs Clásicas en SEO
Las SPAs construidas con Vite generan un archivo `index.html` prácticamente vacío (`<div id="root"></div>`), delegando el renderizado al motor JavaScript del cliente. Aunque el rastreador de Google (Googlebot) ejecuta JavaScript, existe un desfase ("render queue") que retrasa la indexación y penaliza el SEO en motores como Bing, DuckDuckGo o redes sociales (crawlers de LinkedIn, Twitter/X y WhatsApp que **no ejecutan JavaScript**).

### La Solución Implementada: SSG Post-Build
A través de `scripts/prerender.js`, integrado en `npm run build`, se ejecuta un navegador headless con Playwright que visita cada una de las 11 rutas del catálogo y genera archivos HTML estáticos totalmente renderizados:
```
dist/
├── index.html                           (115.5 KB — Home con DOM completo)
├── 404.html                             (13.6 KB — Página 404 estática)
├── projects/
│   ├── index.html                       (71.4 KB — Catálogo completo)
│   ├── nexo-agentic-graphrag/index.html (64.6 KB — Nexo con DOM y TechArticle)
│   ├── capital-cruise/index.html        (56.2 KB)
│   ├── talestar-mobile/index.html       (58.5 KB)
│   ├── meditrack-iot-health/index.html  (49.9 KB)
│   ├── thelook-ecommerce-pipeline/index.html (50.2 KB)
│   ├── customer-churn-analytics/index.html   (48.7 KB)
│   ├── jobsy-backend/index.html         (48.6 KB)
│   └── onecoin-backend/index.html       (47.9 KB)
```
Adicionalmente, se generan los archivos equivalentes planos (`dist/projects.html`, `dist/projects/[slug].html`) para compatibilidad universal con servidores que resuelven rutas limpias sin trailing slash.

### 6.1. Verificación sin JavaScript y Direct Access
- **Prueba con JS Deshabilitado:** La prueba E2E `SSG con JavaScript deshabilitado: renderiza contenido sustantivo y navegación básica` verificó que un cliente sin motor JavaScript (simulando rastreadores o navegadores de texto) recibe títulos `<h1>`, badges de ingeniería, información del autor y enlaces de navegación funcionales.
- **Prueba de Hidratación:** La prueba E2E `Hidratación y Navegación SPA` confirmó que al cargar una ruta directamente prerenderizada e hidratar React, no se generan errores de consola ni duplicación del árbol DOM.

---

## 7. Comportamiento HTTP 404 vs. 404 Visual y Requisitos de Hosting (Fase 4)

Es fundamental distinguir el comportamiento en los dos entornos:
1. **Entorno de Vista Previa / Local (`vite preview`):**
   - En una SPA estándar con Vite, cualquier ruta no coincidente es capturada por el middleware fallback sirviendo `index.html` con código de estado HTTP 200, tras lo cual React Router renderiza la vista `NotFoundPage`.
   - `NotFoundPage` y `SEOHead` inyectan inmediatamente `<meta name="robots" content="noindex, nofollow">` y actualizan el título a `404: Página No Encontrada`, evitando la indexación en buscadores.
2. **Entorno de Producción (Fase 4):**
   - Para que los rastreadores reciban un código de estado real **HTTP 404 Not Found**, la plataforma de hosting debe ser configurada para servir el archivo estático prerenderizado `dist/404.html` ante cualquier ruta inexistente:
     - **Vercel:** Configurar `cleanUrls: true` y ruta de error personalizada en `vercel.json`:
       ```json
       {
         "routes": [
           { "handle": "filesystem" },
           { "src": "/(.*)", "status": 404, "dest": "/404.html" }
         ]
       }
       ```
     - **Netlify:** Definir archivo `public/_redirects` o `netlify.toml` con regla `/* /404.html 404`.
     - **Cloudflare Pages:** Manejo nativo de `404.html` en la raíz de salida estática con estado 404.
     - **Nginx / Servidor Dedicado:** Directiva `error_page 404 /404.html;`.

---

## 8. Internacionalización y Metadatos Multilingües

- La aplicación detecta el idioma del navegador y permite alternar dinámicamente entre Español (`es`) e Inglés (`en`).
- `SEOHead.tsx` sincroniza el atributo `lang` en el elemento raíz `<html>`:
  ```html
  <html lang="es" class="scroll-smooth">
  ```
  o
  ```html
  <html lang="en" class="scroll-smooth">
  ```
- Los títulos, descripciones y datos estructurados se recalculan en tiempo real cuando el usuario cambia el idioma, manteniendo coherencia indexable.

---

## 9. Desacoplamiento de Dominio para Fase 4

El sistema SEO está completamente desacoplado de cualquier dominio provisional:
- Función centralizadora: `getSiteUrl()` en `src/config/seo.ts`.
- Prioridad de resolución:
  1. `import.meta.env.VITE_SITE_URL` (tiempo de compilación de Vite).
  2. `process.env.VITE_SITE_URL` (entornos Node / SSG).
  3. `window.location.origin` (ejecución en cliente SPA).
  4. Fallback por defecto: `http://localhost:4173`.
- **Procedimiento para Fase 4:** Al momento del despliegue, el usuario o el pipeline de CI/CD únicamente debe suministrar la variable:
  ```env
  VITE_SITE_URL=https://<dominio-confirmado-por-usuario>
  ```
  El build generará automáticamente el sitemap, robots.txt, canonicals y schemas con dicho dominio sin necesidad de modificar el código fuente.

---

## 10. Verificación de Reglas de Privacidad e Integridad

- **Cero fotografías personales:** Se confirmó la preservación estricta del monograma SVG `RC` como avatar visual, sin inclusión de retratos fotográficos.
- **Cero promedios numéricos:** Se mantuvo la distinción editorial `UPC • Software Engineering` y `Top 10% / Décimo Superior`, eliminando cualquier referencia a calificaciones académicas privadas.
- **Nexo Agentic GraphRAG:** Se preservó la descripción neutral de código reservado institucional mientras se concluye la tesis universitaria, sin enlaces a repositorios privados ni afirmaciones contractuales inventadas.
- **LangGraph:** Identificado rigurosamente como planificado (`Planned / Planificado`) en diagramas y esquemas.
