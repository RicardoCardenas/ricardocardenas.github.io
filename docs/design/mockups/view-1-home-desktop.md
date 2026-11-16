# Mockup y Especificación de Vista 1: Home Desktop

**Documento:** MOCKUP-VIEW-001  
**Vista:** Página Principal (Desktop $\ge 1024$px)  
**Ruta:** `/`  
**Estilo:** Minimalista Profesional (B)  

---

## 1. Wireframe Estructural y Geometría del Layout

```text
+--------------------------------------------------------------------------------------------------------------------+
|  [Logo: RC]      Sobre mí    Tecnologías    Proyectos    Formación    CV    Contacto       [ES/EN]  [Tema]  [CV PDF] | (Navbar Fija Glass)
+--------------------------------------------------------------------------------------------------------------------+
|                                                                                                                    |
|   [Badge: ● Disponible para prácticas preprofesionales]                                                             |
|                                                                                                                    |
|   Ricardo Fernando Cardenas Minaya                                                                                 |
|   Ingeniería de Software • Backend • Arquitectura DDD • Cloud & Data                                               |
|                                                                                                                    |
|   Estudiante de 8.º ciclo en la Universidad Peruana de Ciencias Aplicadas (UPC), perteneciente al                  |
|   Décimo Superior. Especializado en diseño de microservicios, APIs REST seguras, pipelines de datos               |
|   e integración de inteligencia artificial verificable con Agentic GraphRAG.                                       |
|                                                                                                                    |
|   [ Explorar Proyectos (↓) ]    [ Descargar CV (v) ]    [ (GitHub) ]   [ (LinkedIn) ]   [ (Email) ]               |
|                                                                                                                    |
+--------------------------------------------------------------------------------------------------------------------+
| SECCIÓN: SOBRE MÍ (#about)                                                                                         |
| +-------------------------------------------------------+ +------------------------------------------------------+ |
| | Enfoque de Ingeniería                                 | | Formación y Excelencia Académica                     | |
| | - Arquitectura limpia y Domain-Driven Design (DDD).   | | - Universidad Peruana de Ciencias Aplicadas (UPC).   | |
| | - Persistencia relacional, vectorial y de grafos.     | | - Mar 2023 - Dic 2027 | 8.º Ciclo.                   | |
| | - Pruebas automatizadas y aseguramiento de calidad.   | | - Distinción: Décimo Superior de la carrera.        | |
| | - Código limpio, tipado estricto y mantenibilidad.   | | - Idiomas: Español (Nativo), Inglés (Avanzado B2).   | |
| +-------------------------------------------------------+ +------------------------------------------------------+ |
+--------------------------------------------------------------------------------------------------------------------+
| SECCIÓN: TECNOLOGÍAS Y DOMINIOS (#skills)                                                                          |
|  [ Lenguajes & Frameworks ]      [ Arquitectura & DevOps ]     [ Datos & Nube ]           [ IA & Herramientas ]    |
|  - Java (Spring Boot 3)          - Domain-Driven Design (DDD)  - PostgreSQL + pgvector     - LangGraph              |
|  - C# (.NET 9)                   - CQRS & Eventos             - MySQL & DuckDB            - Celery & Redis         |
|  - Python (FastAPI / Pandas)     - Docker & Docker Compose    - Google Cloud (BigQuery)   - Ollama / LLMs Locales  |
|  - TypeScript (React 19 / Vite)  - REST APIs & OpenAPI        - Microsoft Azure           - Claude Code & Copilot  |
|  - Flutter & Dart (BLoC)         - Git & GitHub Actions CI    - Power BI & Looker Studio  - Pytest / Vitest        |
+--------------------------------------------------------------------------------------------------------------------+
| SECCIÓN: PROYECTOS DESTACADOS (#featured-projects)                                                                 |
| +----------------------------------------------------+ +---------------------------------------------------------+ |
| | PROYECTO 1: Nexo — Agentic GraphRAG                | | PROYECTO 2: Capital Cruise                              | |
| | Tags: [Software Engineering] [Data & AI]           | | Tags: [Software Engineering]                            | |
| | Plataforma inteligente para decisiones PYME        | | Plataforma de simulación financiera vehicular con       | |
| | integrando PostgreSQL, Neo4j, Celery y LangGraph.  | | Spring Boot 3, PostgreSQL, Flyway y Vue 3.             | |
| | Badges: [DDD Modular] [GraphRAG] [Docker]          | | Badges: [Spring Boot 3] [PostgreSQL] [Flyway]           | |
| | [ Ver Caso de Estudio -> ]   [ GitHub ]            | | [ Ver Caso de Estudio -> ]   [ GitHub ]                 | |
| +----------------------------------------------------+ +---------------------------------------------------------+ |
| +----------------------------------------------------+ +---------------------------------------------------------+ |
| | PROYECTO 3: TaleStar Mobile                        | | PROYECTO 4: TheLook eCommerce Pipeline                  | |
| | Tags: [Mobile] [Software Engineering]              | | Tags: [Data & AI]                                       | |
| | App móvil en Flutter con Realidad Aumentada        | | Pipeline integral en Google Cloud Platform con BigQuery | |
| | (ARCore), reproductor FLAC y PIN parental.         | | ML (Clustering, ARIMA) procesando 2.4M de eventos.      | |
| | Badges: [Flutter BLoC] [351 Tests] [ARCore]        | | Badges: [GCP BigQuery] [BigQuery ML] [Dataform]         | |
| | [ Ver Caso de Estudio -> ]   [ GitHub ]            | | [ Ver Caso de Estudio -> ]   [ GitHub ]                 | |
| +----------------------------------------------------+ +---------------------------------------------------------+ |
|                                       [ Botón Centrado: Ver Catálogo Completo (8 Proyectos) -> ]                   |
+--------------------------------------------------------------------------------------------------------------------+
| SECCIÓN: FORMACIÓN Y CERTIFICACIONES (#education)                                                                  |
| - Universidad Peruana de Ciencias Aplicadas (UPC) — Ingeniería de Software (Mar 2023 - Dic 2027)                   |
| - Microsoft Certified: Azure Fundamentals (AZ-900) — Microsoft (Sep 2026)                                          |
| - TOEFL ITP Nivel B2 — ETS (Jun 2024)                                                                              |
| - Databases for Data Scientists — University of Colorado Boulder (Jul 2026)                                        |
| - Python for Everybody — University of Michigan (Jul 2026)                                                         |
| - Google Cybersecurity Certificate — Google (Jul 2025)                                                             |
| - Scrum Fundamentals Certified — SCRUMstudy (May 2024)                                                             |
+--------------------------------------------------------------------------------------------------------------------+
| SECCIÓN: DESCARGA DE CURRÍCULUM (#cv)                                                                              |
| +----------------------------------------------------+ +---------------------------------------------------------+ |
| | [CV 1: Software Engineering & Backend]             | | [CV 2: Data Engineering & Analytics]                    | |
| | Especializado en microservicios, Spring Boot,      | | Especializado en BigQuery, pipelines SQL, Power BI,     | |
| | .NET, DDD, cloud y pruebas unitarias.              | | Python analítico y modelos de machine learning.         | |
| | [ Descargar PDF (Software) ↓ ]                     | | [ Descargar PDF (Data & AI) ↓ ]                         | |
| +----------------------------------------------------+ +---------------------------------------------------------+ |
+--------------------------------------------------------------------------------------------------------------------+
| SECCIÓN: CONTACTO (#contact)                                                                                       |
|   Lima, Perú  •  fernandocm1112@gmail.com [Copiar]  •  +51 933206904  •  LinkedIn  •  GitHub                       |
+--------------------------------------------------------------------------------------------------------------------+
| FOOTER: © 2026 Ricardo Cardenas Minaya. Desarrollado con React 19, TypeScript y Tailwind CSS.                       |
+--------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Especificación de Componentes e Interacciones

### 2.1 Navbar Flotante Glassmorphism
- **Estilo:** `sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40`.
- **Interacciones:**
  - Enlaces de sección con indicador activo violeta (`text-primary border-b-2 border-primary`).
  - Dropdown accesible para descarga directa de CV (`MenuTrigger` Radix).
  - Toggles discretos para idioma y tema en el extremo derecho.

### 2.2 Botón de Doble Acción "Descargar CV"
- Al hacer clic, abre un `Popover` o `DropdownMenu` accesible que presenta las dos rutas directas de descarga con iconos distintivos:
  - Icono `FileCode`: *CV Software Engineering / Backend (PDF)*
  - Icono `Database`: *CV Data & AI (PDF)*
- Soporte para navegación con flechas de teclado y cierre con `Escape`.

### 2.3 Tarjetas de Proyectos Destacados
- **Contenedor:** `bg-surface border border-border/60 rounded-xl p-6 transition-all duration-200`.
- **Hover:** `translate-y-[-2px] border-primary/40 shadow-hover`.
- **Badges:** Fondo sutil `bg-accent-subtle text-accent border border-accent/20 rounded-md px-2 py-0.5 text-xs`.
