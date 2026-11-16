# Mockup y Especificación de Vista 4: Detalle de Proyecto (Caso de Estudio)

**Documento:** MOCKUP-VIEW-004  
**Vista:** Estudio de Caso de Ingeniería  
**Ruta:** `/projects/:slug` (Ejemplo de referencia: `/projects/nexo-agentic-graphrag`)  
**Estilo:** Minimalista Profesional (B)  

---

## 1. Wireframe Estructural del Caso de Estudio

```text
+--------------------------------------------------------------------------------------------------------------------+
|  [Logo: RC]      Inicio    Sobre mí    Tecnologías    Proyectos    Formación    CV    Contacto     [ES/EN]  [Tema]   |
+--------------------------------------------------------------------------------------------------------------------+
|                                                                                                                    |
|   Inicio  /  Proyectos  /  Nexo — Agentic GraphRAG                                                 (Breadcrumbs)   |
|                                                                                                                    |
|   [Badge: Software Engineering]   [Badge: Data & AI]   [Badge: Estado: Fase 0 Verificada]                          |
|                                                                                                                    |
|   # Nexo — Plataforma Inteligente con Agentic GraphRAG                                                             |
|   Sistema de soporte a decisiones comerciales para PYMEs peruanas mediante orquestación híbrida de                 |
|   bases relacionales (PostgreSQL), grafos de conocimiento (Neo4j) y agentes autónomos con LangGraph.               |
|                                                                                                                    |
|   [ ↗ Ver Repositorio en GitHub ]    [ 📄 Documentación C4 / Tesis ]    [ ⚡ Comandos de Verificación ]            |
|                                                                                                                    |
+--------------------------------------------------------------------------------------------------------------------+
| FICHA TÉCNICA Y METADATOS                                                                                          |
| +----------------------------------------------------------------------------------------------------------------+ |
| | Rol Personal: Lead Backend & Architecture Engineer (Proyecto de Investigación de Tesis)                         | |
| | Duración / Estado: 2026 — En desarrollo activo (Fase 0 aprobada, iniciando Fase 1 de IAM)                     | |
| | Stack Principal: Python 3.12, FastAPI, LangGraph, PostgreSQL 16 + pgvector, Neo4j 5 Community, Celery, Docker  | |
| | Pruebas Automatizadas: Suite unitaria con Pytest, linter y formatter con Ruff (0 errores)                     | |
| +----------------------------------------------------------------------------------------------------------------+ |
+--------------------------------------------------------------------------------------------------------------------+
| 1. PROBLEMA DE NEGOCIO Y DESAFÍO TÉCNICO                                                                           |
| Las micro y pequeñas empresas comerciales en Perú manejan datos fragmentados entre hojas de cálculo, sistemas de   |
| inventario y facturación. Los modelos de lenguaje tradicionales (LLMs genéricos) sufren de alucinaciones y        |
| carecen de acceso a cálculos matemáticos autoritativos, haciendo inviable su uso directo para decisiones críticas.|
+--------------------------------------------------------------------------------------------------------------------+
| 2. SOLUCIÓN IMPLEMENTADA Y ARQUITECTURA                                                                            |
| Se diseñó un monolito modular con Domain-Driven Design (DDD) y CQRS estructurado en 7 contextos acotados:         |
|                                                                                                                    |
|   [ Cliente Web ]                                                                                                  |
|          |                                                                                                         |
|          v                                                                                                         |
|   [ Nginx Reverse Proxy (Puerto 80/443) ]                                                                          |
|          |                                                                                                         |
|          v                                                                                                         |
|   [ FastAPI Modular API ] <=====> [ PostgreSQL 16 + pgvector ] (Fuente Autoritativa de Datos Comerciales)         |
|          |                                                                                                         |
|          +------------> [ Redis 7 / Celery Worker ] (Ingesta Asíncrona)                                            |
|          |                        |                                                                                |
|          v                        v                                                                                |
|   [ Neo4j 5 Graph ] <----- [ LangGraph Agentic Pipeline ] (Consultas SQL controladas y grafo de entidades)         |
|                                                                                                                    |
+--------------------------------------------------------------------------------------------------------------------+
| 3. ROL Y CONTRIBUCIONES PERSONALES                                                                                 |
| - Diseño y especificación formal de la arquitectura DDD (Bounded Contexts: iam, ingestion, knowledge, etc.).      |
| - Configuración del entorno contenerizado con Docker Compose y redes aisladas para base de datos y backend.       |
| - Implementación de la suite de pruebas unitarias en Pytest con separación estricta de base de datos de pruebas.   |
| - Modelado del esquema canónico relacional y su proyección a nodos y relaciones en Neo4j.                          |
+--------------------------------------------------------------------------------------------------------------------+
| 4. DECISIONES TÉCNICAS RELEVANTES (ADRs)                                                                           |
| - ADR-01: Adopción de Monolito Modular en FastAPI frente a Microservicios distribuidos (menor latencia local).    |
| - ADR-02: PostgreSQL como única fuente de verdad autoritativa; Neo4j como almacén derivado para relaciones.        |
| - ADR-03: LangGraph con nodos de validación para impedir inyecciones en sentencias de consulta.                   |
+--------------------------------------------------------------------------------------------------------------------+
| 5. EVIDENCIA Y VERIFICACIÓN EJECUTABLE                                                                             |
| Comandos ejecutados y verificados en el entorno de desarrollo:                                                     |
| ```powershell                                                                                                      |
| pytest backend/tests -v                    # Suite unitaria aprobada                                               |
| ruff check backend worker                  # Cero violaciones de linter                                            |
| docker compose config                      # Sintaxis de infraestructura validada                                  |
| ```                                                                                                                |
+--------------------------------------------------------------------------------------------------------------------+
| 6. PROYECTOS RELACIONADOS                                                                                          |
| +---------------------------------------------+  +---------------------------------------------+                 |
| | Capital Cruise                              |  | TheLook eCommerce Data Pipeline             |                 |
| | [Software Engineering]                      |  | [Data & AI]                                 |                 |
| | Microservicios financieros con Spring Boot. |  | Pipeline analítico en Google Cloud BigQuery.|                 |
| | [ Ver Proyecto -> ]                         |  | [ Ver Proyecto -> ]                         |                 |
| +---------------------------------------------+  +---------------------------------------------+                 |
+--------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Pautas de Contenido y Verosimilitud

- **Prohibición de métricas inventadas:** Si el proyecto no ha sido desplegado a 10,000 usuarios reales, no se afirmará tal métrica. Se destacan resultados tangibles de ingeniería: volumen de datos procesados (ej. *2.4M eventos* en TheLook), pruebas unitarias aprobadas (ej. *351 pruebas* en TaleStar), o conformidad de esquemas de datos.
- **Acceso a código:** Botones prominentes y directos al repositorio verificado en GitHub.
