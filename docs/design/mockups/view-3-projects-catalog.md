# Mockup y Especificación de Vista 3: Catálogo de Proyectos

**Documento:** MOCKUP-VIEW-003  
**Vista:** Catálogo General de Proyectos con Filtros y Búsqueda  
**Ruta:** `/projects`  
**Estilo:** Minimalista Profesional (B)  

---

## 1. Wireframe Estructural del Catálogo

```text
+--------------------------------------------------------------------------------------------------------------------+
|  [Logo: RC]      Inicio    Sobre mí    Tecnologías    Proyectos (activo)    CV    Contacto     [ES/EN]  [Tema]       |
+--------------------------------------------------------------------------------------------------------------------+
|                                                                                                                    |
|   Inicio  /  Proyectos                                                                             (Breadcrumbs)   |
|                                                                                                                    |
|   Catálogo de Proyectos de Ingeniería                                                                               |
|   Casos de estudio, arquitecturas implementadas, pipelines de datos y aplicaciones móviles verificables.          |
|                                                                                                                    |
|   +--------------------------------------------------------------------------------------------------------------+ |
|   |  Filtros:  [ Todos (8) ]  [ Software Engineering (5) ]  [ Data & AI (3) ]  [ Mobile (1) ]                    | |
|   |                                                                                                              | |
|   |  [ 🔍 Buscar por proyecto, tecnología o arquitectura (ej. Spring Boot, BigQuery)...             ] [Limpiar]  | |
|   +--------------------------------------------------------------------------------------------------------------+ |
|                                                                                                                    |
|   Mostrando 8 de 8 proyectos                                                                                       |
|                                                                                                                    |
|   +---------------------------------------------+  +---------------------------------------------+                 |
|   | Nexo — Agentic GraphRAG                     |  | Capital Cruise                              |                 |
|   | [Software Engineering] [Data & AI]          |  | [Software Engineering]                      |                 |
|   |                                             |  |                                             |                 |
|   | Plataforma web para decisiones comerciales  |  | Plataforma de simulación financiera         |                 |
|   | de PYMES mediante FastAPI, LangGraph,       |  | vehicular con Spring Boot 3, PostgreSQL,    |                 |
|   | PostgreSQL + pgvector y Neo4j derivado.     |  | Flyway y frontend reactivo en Vue 3.        |                 |
|   |                                             |  |                                             |                 |
|   | Tech: FastAPI • LangGraph • Neo4j • Celery  |  | Tech: Spring Boot • Java 21 • Postgres • Vue|                 |
|   | Estado: Fase 0 Verificada                   |  | Estado: MVP Funcional                       |                 |
|   | [ Ver Caso de Estudio -> ]      [ GitHub ]  |  | [ Ver Caso de Estudio -> ]      [ GitHub ]  |                 |
|   +---------------------------------------------+  +---------------------------------------------+                 |
|                                                                                                                    |
|   +---------------------------------------------+  +---------------------------------------------+                 |
|   | TaleStar Mobile                             |  | TheLook eCommerce Data Pipeline             |                 |
|   | [Mobile] [Software Engineering]             |  | [Data & AI]                                 |                 |
|   |                                             |  |                                             |                 |
|   | App móvil en Flutter con Clean Architecture,|  | Pipeline analítico integral en Google Cloud |                 |
|   | Realidad Aumentada (ARCore) y FLAC audio.   |  | Platform con BigQuery ML y Dataform.        |                 |
|   |                                             |  |                                             |                 |
|   | Tech: Flutter • Dart • ARCore • BLoC/Cubit  |  | Tech: GCP • BigQuery • SQL • BigQuery ML    |                 |
|   | Estado: 351 Tests Passing (100%)            |  | Estado: Pipeline Automatizado Diario        |                 |
|   | [ Ver Caso de Estudio -> ]      [ GitHub ]  |  | [ Ver Caso de Estudio -> ]      [ GitHub ]  |                 |
|   +---------------------------------------------+  +---------------------------------------------+                 |
|                                                                                                                    |
|   +---------------------------------------------+  +---------------------------------------------+                 |
|   | Customer Churn Analytics                    |  | MediTrack                                   |                 |
|   | [Data & AI]                                 |  | [Software Engineering]                      |                 |
|   |                                             |  |                                             |                 |
|   | Análisis predictivo y segmentación K-Means  |  | Monitoreo de salud e IoT en arquitectura    |                 |
|   | de deserción de clientes con Power BI.      |  | Edge-Fog-Cloud con Spring Boot y MQTT.      |                 |
|   |                                             |  |                                             |                 |
|   | Tech: Python • DuckDB • Scikit-Learn • DAX  |  | Tech: Spring Boot • MySQL • MQTT • Docker   |                 |
|   | Estado: Dashboard Ejecutivo Completado      |  | Estado: Arquitectura Distribuida            |                 |
|   | [ Ver Caso de Estudio -> ]      [ GitHub ]  |  | [ Ver Caso de Estudio -> ]      [ GitHub ]  |                 |
|   +---------------------------------------------+  +---------------------------------------------+                 |
|                                                                                                                    |
|   +---------------------------------------------+  +---------------------------------------------+                 |
|   | DispenX Core API                            |  | AgriSmart Backend                           |                 |
|   | [Software Engineering]                      |  | [Software Engineering]                      |                 |
|   |                                             |  |                                             |                 |
|   | Telemetría IoT y dispensación automatizada  |  | Backend agroindustrial con contenedores     |                 |
|   | en .NET 9 aplicando Domain-Driven Design.   |  | Docker Compose y microservicios.            |                 |
|   |                                             |  |                                             |                 |
|   | Tech: C# • .NET 9 • MySQL • DDD • JWT       |  | Tech: Docker • Node.js/Python • REST        |                 |
|   | Estado: API Documentada                     |  | Estado: Prototipo Verificado                |                 |
|   | [ Ver Caso de Estudio -> ]      [ GitHub ]  |  | [ Ver Caso de Estudio -> ]      [ GitHub ]  |                 |
|   +---------------------------------------------+  +---------------------------------------------+                 |
|                                                                                                                    |
+--------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Componente de Estado Vacío (`EmptyState`)

Cuando el usuario busca un término sin coincidencias (ej. `"Rust"` o `"Kubernetes"`), se muestra el siguiente componente resiliente:

```text
+--------------------------------------------------------------------------------------------------------------------+
|                                                                                                                    |
|                                            [ ⌕ Icono de Lupa Suave ]                                               |
|                                                                                                                    |
|                                     No se encontraron proyectos coincidentes                                       |
|                  No hay proyectos que coincidan con los criterios de búsqueda o categoría actual.                  |
|                                                                                                                    |
|                                              [ Limpiar Filtros y Búsqueda ]                                        |
|                                                                                                                    |
+--------------------------------------------------------------------------------------------------------------------+
```

### Reglas de Interacción de Filtros
- Los proyectos con múltiples etiquetas (ej. *Nexo* categorizado en `software-engineering` y `data-ai`) aparecen en ambas pestañas.
- La barra de búsqueda opera con un debounce de 250ms para garantizar que la interfaz se sienta instantánea sin bloqueos de renderizado.
- El conteo de proyectos se actualiza en tiempo real en los chips de categoría.
