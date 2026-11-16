# Product Requirements Document (PRD) — Portafolio Ricardo Cardenas

**Documento:** PRD-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Autor:** Senior Software Architect & Lead Product Designer  

---

## 1. Visión y Propósito del Producto

El portafolio web de Ricardo Fernando Cardenas Minaya es una plataforma interactiva, bilingüe, accesible y de alto rendimiento que sirve como carta de presentación técnica. Demuestra competencias verificables en ingeniería de software, arquitectura orientada al dominio (DDD/CQRS), desarrollo backend, soluciones cloud, pipelines de datos e inteligencia artificial aplicada.

### Objetivos Clave de Negocio / Carrera
1. **Atraer y convencer a reclutadores técnicos y hiring managers** para posiciones de prácticas preprofesionales en Software Engineering, Backend, Cloud, Data y AI.
2. **Evidenciar competencia técnica real** mediante casos de estudio profundos, diagramas de arquitectura C4, modelos de datos, pruebas automatizadas y enlaces directos al código fuente.
3. **Ofrecer una experiencia de usuario impecable (UX/UI)** basada en el estilo *Minimalista Profesional (B)*, con microinteracciones sutiles, soporte responsive total y cero patrones genéricos ("AI Slop").
4. **Proveer acceso inmediato y sin fricciones a documentos clave:** CV especializado en Software Engineering / Backend y CV especializado en Data & AI.

---

## 2. Audiencias y Personas Clave

| Perfil de Audiencia | Objetivo Principal al Visitar el Sitio | Criterio de Éxito de la Visita | Fricción a Evitar |
|---|---|---|---|
| **Tech Recruiter / Talent Acquisition** | Evaluar en menos de 30 segundos si el candidato cumple el perfil de prácticas en backend o datos, y descargar su CV correspondiente. | Localiza el stack tecnológico, nivel de inglés (B2), universidad (UPC - 8vo ciclo, décimo superior) y descarga el CV en PDF con 1 clic. | PDFs ocultos, navegación confusa, datos de contacto no visibles o desactualizados. |
| **Engineering Lead / Senior Architect** | Inspeccionar la calidad técnica real, diseño de sistemas, arquitectura de software, uso de DDD y pruebas en proyectos reales. | Revisa el caso de estudio de *Nexo* o *Capital Cruise*, examina diagramas C4 y visita el repositorio GitHub. | Proyectos tipo "tutorial" sin profundidad técnica, métricas inventadas o descripciones vacías. |
| **Data / AI Hiring Manager** | Determinar capacidad en manipulación de datos, pipelines en nube (GCP BigQuery), modelado analítico y agentes de IA. | Encuentra el pipeline de *TheLook eCommerce* o el análisis de *Customer Churn Analytics* con notebooks y dashboards reales. | Proyectos sin código fuente verificable o afirmaciones vagas de "experto en IA". |
| **Colaborador / Comunidad Open Source** | Conocer el perfil, intereses de investigación (tesis en GraphRAG) y vías de contacto profesional. | Accede a LinkedIn, GitHub y correo profesional con enlaces funcionales. | Enlaces rotos o formularios de contacto que fallan silenciosamente. |

---

## 3. Principios de Experiencia del Usuario (UX)

1. **Claridad sobre adorno:** El diseño debe poner el trabajo de ingeniería en primer plano. La tipografía, el espaciado y el contraste guían la lectura sin elementos distractores.
2. **Velocidad e inmediatez:** El sitio debe cargar de forma casi instantánea, con un Largest Contentful Paint (LCP) inferior a 1.2 segundos y sin destellos de tema incorrecto (Flash of Unstyled Theme - FOUT).
3. **Navegación sin callejones sin salida:** Cada proyecto lleva a su código fuente, a proyectos relacionados y de regreso a la navegación principal con breadcrumbs claros.
4. **Respeto absoluto por el contexto del usuario:** Detección de preferencia de color (`prefers-color-scheme`), detección de preferencia de reducción de movimiento (`prefers-reduced-motion`) y detección de idioma del navegador con persistencia local.

---

## 4. Requisitos No Funcionales (NFR)

- **Rendimiento:** Puntuación Lighthouse en Performance $\ge 90$ en móvil y $\ge 95$ en desktop. Core Web Vitals en umbrales óptimos (LCP $< 1.5$s, CLS $< 0.05$, INP $< 100$ms).
- **Accesibilidad:** Conformidad estricta con WCAG 2.2 Nivel AA. Contraste mínimo de 4.5:1 para texto normal y 3:1 para texto grande o elementos de interfaz. Navegación por teclado completa e indicadores visuales de foco perceptibles.
- **Internacionalización:** Soporte nativo para Español (ES) e Inglés (EN) en todas las páginas, metadatos y controles.
- **Portabilidad y Despliegue:** Compilación estática alojable en Vercel o GitHub Pages con compatibilidad para rutas profundas (`/projects/:slug`).
