import type { ProjectCaseStudy } from '../types';

export const verifiedProjects: ProjectCaseStudy[] = [
  {
    id: 'nexo',
    slug: 'nexo-agentic-graphrag',
    title: 'Nexo — Agentic GraphRAG',
    featured: true,
    order: 1,
    categories: ['software-engineering', 'data-ai'],
    status: 'fase-0-verified',
    statusLabel: {
      es: 'Fase 0 Verificada (En desarrollo)',
      en: 'Phase 0 Verified (Active Development)',
    },
    isAcademicThesis: true,
    isPrivateCode: true,
    summary: {
      es: 'Plataforma web basada en Agentic GraphRAG e interoperabilidad híbrida para apoyar decisiones comerciales de PYMES en el sector comercio del Perú.',
      en: 'Intelligent web platform based on Agentic GraphRAG and hybrid interoperability to support SME business decisions in Peru.',
    },
    problem: {
      es: 'Las micro y pequeñas empresas (PYMES) comerciales en el Perú operan con datos fragmentados entre inventarios físicos, hojas de cálculo y sistemas transaccionales aislados. Los modelos de lenguaje comerciales (LLMs genéricos) presentan alucinaciones y no pueden realizar cálculos numéricos autoritativos, haciendo inviable su uso directo para la toma de decisiones financieras y comerciales críticas.',
      en: 'Commercial small and medium-sized enterprises (SMEs) in Peru operate with fragmented data across physical inventories, spreadsheets, and disconnected transactional systems. Generic LLMs suffer hallucinations and lack authoritative computation engines, making them unreliable for critical business and financial decisions.',
    },
    solution: {
      es: 'Monolito modular con FastAPI que combina consultas SQL autoritativas en PostgreSQL con proyecciones de grafos en Neo4j y orquestación autónoma mediante LangGraph. Las cifras exactas provienen de consultas SQL auditadas en PostgreSQL; las relaciones complejas provienen de Neo4j; y los agentes supervisados interpretan los resultados con evidencia verificable sin exponer datos privados.',
      en: 'Modular monolith using FastAPI combining authoritative SQL queries on PostgreSQL with graph projections in Neo4j and autonomous orchestration via LangGraph. Exact figures stem from audited SQL queries on PostgreSQL; relationship paths come from Neo4j; and supervised agents explain outcomes with verifiable citations without compromising private data.',
    },
    personalRole: {
      es: 'Arquitecto y Desarrollador Principal (Proyecto de Tesis UPC)',
      en: 'Lead Architect & Developer (UPC Thesis Research Project)',
    },
    contributions: {
      es: [
        'Diseño de arquitectura de software DDD con 7 Bounded Contexts y aislamiento multiorganización.',
        'Implementación de persistencia dual: PostgreSQL con pgvector y proyección hacia grafo Neo4j.',
        'Configuración del entorno contenerizado en Docker Compose con redes aisladas y suite en Pytest.',
        'Definición de contratos de integración para ingesta asíncrona mediante Celery y Redis.',
      ],
      en: [
        'DDD software architecture specification with 7 Bounded Contexts and strict multi-tenant isolation.',
        'Implementation of dual persistence: PostgreSQL with pgvector and projection into Neo4j graph nodes.',
        'Docker Compose containerized environment setup with network isolation and Pytest automated testing.',
        'Integration contract design for asynchronous ingestion pipelines using Celery and Redis.',
      ],
    },
    implementedFeatures: {
      es: [
        'Base técnica del backend FastAPI con health checks verificados y cero incidencias de linter.',
        'Monolito modular estructurado en 7 Bounded Contexts DDD/CQRS (iam, ingestion, knowledge, etc.).',
        'Persistencia dual con PostgreSQL 16 (pgvector) y Neo4j 5 Community en Docker.',
        'Cola de tareas asíncronas con Celery y broker Redis 7 (baseline de infraestructura).',
        'Frontend desacoplado en React 19, TypeScript y Tailwind CSS v4.',
        'Entorno contenerizado multi-servicio en Docker Compose con proxy inverso Nginx Alpine.',
        'Suite de pruebas automatizadas con Pytest y formateador estricto con Ruff.',
      ],
      en: [
        'FastAPI backend baseline with verified health check endpoints and clean Ruff linting.',
        'Modular monolith structured into 7 DDD/CQRS Bounded Contexts (iam, ingestion, knowledge, etc.).',
        'Dual persistence with PostgreSQL 16 (pgvector) and Neo4j 5 Community on Docker.',
        'Asynchronous task processing queue with Celery and Redis 7 broker (baseline infrastructure).',
        'Decoupled frontend architecture built with React 19, TypeScript, and Tailwind CSS v4.',
        'Multi-service containerized environment via Docker Compose & Nginx Alpine reverse proxy.',
        'Pytest automated testing suite with strict Ruff styling enforcement.',
      ],
    },
    plannedFeatures: {
      es: [
        'Fase 1: Módulo IAM y aislamiento multiorganización con Row-Level Security (RLS) en producción.',
        'Fase 2: Modelo canónico e ingesta continua de fuentes heterogéneas (Excel, CSV, APIs).',
        'Fase 3: Proyección automática hacia grafo Neo4j y recuperación híbrida vectorial-estructurada.',
        'Fase 4: Agentes autónomos en LangGraph con herramientas seguras y evaluación con Ragas.',
      ],
      en: [
        'Phase 1: Multi-tenant IAM and production Row-Level Security (RLS) isolation.',
        'Phase 2: Canonical schema modeling and continuous ingestion of heterogeneous data (Excel, CSV, APIs).',
        'Phase 3: Automated Neo4j graph projection and hybrid vector-structured retrieval pipelines.',
        'Phase 4: Autonomous agents in LangGraph with sandboxed tools and Ragas benchmark evaluation.',
      ],
    },
    architectureOverview: {
      es: 'Monolito modular estructurado en 7 Bounded Contexts bajo Domain-Driven Design (DDD) y CQRS. Utiliza una arquitectura de persistencia políglota donde PostgreSQL actúa como fuente de verdad transaccional y autoritativa (con soporte vectorial pgvector), mientras que Neo4j almacena proyecciones de grafos para consultas de conectividad comercial.',
      en: 'Modular monolith structured into 7 Bounded Contexts under Domain-Driven Design (DDD) and CQRS. Employs a polyglot persistence architecture where PostgreSQL acts as the authoritative transactional source of truth (with pgvector embedding support), while Neo4j stores graph projections for commercial connectivity queries.',
    },
    architectureComponents: [
      {
        name: 'Nginx Reverse Proxy',
        role: {
          es: 'Terminación SSL, enrutamiento de peticiones y aislamiento perimetral',
          en: 'SSL termination, request routing, and perimeter network isolation',
        },
        technology: 'Nginx Alpine (Puertos 80/443)',
        status: 'implemented',
      },
      {
        name: 'FastAPI Modular Monolith',
        role: {
          es: 'Lógica de negocio dividida en 7 Bounded Contexts (iam, ingestion, knowledge, assistant, insights, audit, shared)',
          en: 'Business logic partitioned into 7 Bounded Contexts (iam, ingestion, knowledge, assistant, insights, audit, shared)',
        },
        technology: 'Python 3.12 / FastAPI',
        status: 'implemented',
      },
      {
        name: 'PostgreSQL 16 + pgvector',
        role: {
          es: 'Fuente autoritativa de datos comerciales, aislamiento multiorganización con RLS y búsqueda semántica de embeddings',
          en: 'Authoritative commercial data store, multi-tenant RLS isolation, and semantic embedding search',
        },
        technology: 'PostgreSQL 16 / pgvector',
        status: 'implemented',
      },
      {
        name: 'Neo4j 5 Community',
        role: {
          es: 'Proyección de grafos de conocimiento: relaciones complejas entre productos, proveedores, clientes y ventas',
          en: 'Knowledge graph projection: complex relationships across products, vendors, clients, and sales',
        },
        technology: 'Neo4j 5 Cypher',
        status: 'implemented',
      },
      {
        name: 'Celery & Redis 7',
        role: {
          es: 'Línea base para procesamiento en cola y distribución asíncrona de ingesta de archivos comerciales',
          en: 'Baseline queued background processing and asynchronous ingestion of bulk commercial data files',
        },
        technology: 'Celery Worker / Redis 7',
        status: 'implemented',
      },
      {
        name: 'LangGraph Orchestrator',
        role: {
          es: 'Orquestación determinista de agentes supervisados con herramientas de consulta SQL seguras (Planificado para Fase 4)',
          en: 'Deterministic orchestration of supervised agents with sandboxed SQL tools (Planned for Phase 4)',
        },
        technology: 'LangGraph / Ollama (Qwen2.5-Coder)',
        status: 'planned',
      },
    ],
    metrics: [
      {
        value: '7 Contextos',
        label: { es: 'Bounded Contexts DDD', en: 'DDD Bounded Contexts' },
        description: { es: 'Aislamiento de dominio en monolito modular', en: 'Strict domain isolation in modular monolith' },
        category: 'architecture',
        verifiedSource: 'Auditoría de código backend/app en C:\\Ricardo\\ProyectoTesis\\Nexo',
      },
      {
        value: 'Fase 0',
        label: { es: 'Línea Base Verificada', en: 'Verified Baseline' },
        description: { es: 'Health checks, Docker Compose y suite Pytest validados', en: 'Health checks, Docker Compose, and Pytest suite validated' },
        category: 'architecture',
        verifiedSource: 'docker-compose.yml y backend/app/main.py',
      },
      {
        value: 'Dual',
        label: { es: 'Persistencia Relacional y Grafo', en: 'Relational & Graph Storage' },
        description: { es: 'PostgreSQL 16 autoritativo + Neo4j 5 proyectado', en: 'PostgreSQL 16 authoritative + Neo4j 5 projected' },
        category: 'architecture',
        verifiedSource: 'docker-compose.yml (servicios db y neo4j)',
      },
      {
        value: 'Pytest Suite',
        label: { es: 'Pruebas Automatizadas', en: 'Automated Testing' },
        description: { es: 'Suite unitaria de controladores y entidades aprobada', en: 'Passing unit test suite for controllers and entities' },
        category: 'testing',
        verifiedSource: 'pytest backend/tests (0 fallos reportados)',
      },
    ],
    keyDecisions: [
      {
        title: {
          es: 'ADR-1: Monolito Modular vs Microservicios Distribuidos',
          en: 'ADR-1: Modular Monolith vs Distributed Microservices',
        },
        decision: {
          es: 'Se adoptó un monolito modular organizado por Bounded Contexts sobre microservicios independientes.',
          en: 'Adopted a modular monolith organized by Bounded Contexts over independent distributed microservices.',
        },
        tradeoff: {
          es: 'Elimina latencias de red interservicios y complejidad operacional en desarrollo local para la tesis, a cambio de mantener disciplina estricta de límites en el código.',
          en: 'Eliminates network latency and operational complexity in local thesis development, in exchange for enforcing strict boundary discipline in code.',
        },
      },
      {
        title: {
          es: 'ADR-2: PostgreSQL como Única Fuente de Verdad Autoritativa',
          en: 'ADR-2: PostgreSQL as the Single Authoritative Source of Truth',
        },
        decision: {
          es: 'Todo cálculo numérico y financiero se ejecuta exclusivamente sobre PostgreSQL; Neo4j es un almacén secundario de solo lectura proyectado.',
          en: 'All numeric and financial computations execute exclusively on PostgreSQL; Neo4j is a secondary read-only projected store.',
        },
        tradeoff: {
          es: 'Evita discrepancias contables y garantiza consistencia ACID estricta en facturación, requiriendo un pipeline de sincronización de eventos hacia el grafo.',
          en: 'Prevents accounting drift and ensures strict ACID consistency on transactions, requiring an event synchronization pipeline into the graph.',
        },
      },
      {
        title: {
          es: 'ADR-3: Herramientas SQL Acotadas en LangGraph (Planificado)',
          en: 'ADR-3: Sandboxed SQL Tools in LangGraph (Planned)',
        },
        decision: {
          es: 'Los agentes LLM no ejecutarán código SQL libre; invocarán funciones parametrizadas predefinidas con validación estricta de esquemas.',
          en: 'LLM agents will not execute arbitrary SQL; they will invoke predefined parameterized functions with strict schema validation.',
        },
        tradeoff: {
          es: 'Bloquea inyecciones SQL y alucinaciones numéricas, con un coste menor en la flexibilidad de consultas abiertas no contempladas en el catálogo de herramientas.',
          en: 'Prevents SQL injections and numeric hallucinations, with a minor trade-off in arbitrary open-ended query flexibility.',
        },
      },
    ],
    challengesAndLearnings: {
      es: [
        'Sincronización consistente entre esquemas relacionales PostgreSQL y proyecciones de grafos en Neo4j mediante eventos asíncronos.',
        'Diseño de aislamiento multiorganización estricto sin degradar el rendimiento de consultas analíticas y embeddings.',
        'Prevención de alucinaciones en modelos de lenguaje comerciales limitando su salida a consultas autoritativas auditadas.',
      ],
      en: [
        'Consistent synchronization between PostgreSQL relational schemas and Neo4j graph projections via asynchronous event pipelines.',
        'Designing strict multi-tenant tenant isolation without degrading analytical query throughput or embedding lookups.',
        'Preventing LLM hallucinations by restricting agent outputs to audited authoritative query results.',
      ],
    },
    technologies: [
      'Python 3.12',
      'FastAPI',
      'PostgreSQL 16',
      'pgvector',
      'Neo4j 5',
      'Redis 7',
      'Celery',
      'Docker Compose',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'LangGraph',
    ],
    links: {
      // Repositorio privado por ser proyecto de tesis en curso
    },
    relatedProjectSlugs: ['capital-cruise', 'thelook-ecommerce-pipeline'],
  },
  {
    id: 'capital-cruise',
    slug: 'capital-cruise',
    title: 'Capital Cruise',
    featured: true,
    order: 2,
    categories: ['software-engineering'],
    status: 'mvp-completed',
    statusLabel: {
      es: 'MVP Funcional Verificado',
      en: 'Verified Functional MVP',
    },
    summary: {
      es: 'Plataforma web empresarial para simulación matemática avanzada y gestión integral de créditos vehiculares bajo el método francés.',
      en: 'Enterprise web platform for advanced mathematical simulation and end-to-end vehicle loan management under the French amortization method.',
    },
    problem: {
      es: 'En el sector automotriz peruano, la simulación de créditos vehiculares presenta alta fricción operativa debido a la dispersión de fórmulas financieras, variaciones en comisiones/seguros y falta de transparencia en la determinación de la Tasa de Costo Efectivo Anual (TCEA), la Tasa Efectiva Mensual (TEM) y el cálculo de cronogramas con cuotas balón.',
      en: 'In the automotive financial sector, vehicle loan simulations suffer high friction due to disparate financial formulas, varied commissions/insurances, and non-transparent TCEA, TEM conversions, and balloon installment structures.',
    },
    solution: {
      es: 'Motor financiero bimoneda (PEN/USD) en Spring Boot 3 con migración Flyway y frontend reactivo en Vue 3 que modela amortización francesa ordinaria, modalidad de Compra Inteligente (cuota final elevada), periodos de gracia total o parcial y métricas de rentabilidad.',
      en: 'Bimonetary financial engine (PEN/USD) in Spring Boot 3 with Flyway database migrations and reactive Vue 3 frontend modeling regular French amortization, Smart Purchase balloon options, full/partial grace periods, and financial yield metrics.',
    },
    personalRole: {
      es: 'Ingeniero de Software Backend & Arquitectura',
      en: 'Backend Software & Architecture Engineer',
    },
    contributions: {
      es: [
        'Modelado matemático de amortización francesa y Compra Inteligente con tipos BigDecimal para precisión financiera.',
        'Desarrollo de servicios REST con Spring Boot 3.5, Spring Security JWT y persistencia PostgreSQL.',
        'Versionado riguroso de esquema relacional con Flyway y contratos interactivos con OpenAPI.',
        'Configuración de contenedores Docker y suite de pruebas unitarias.',
      ],
      en: [
        'Mathematical modeling of French amortization and Smart Purchase balloon loans using BigDecimal precision.',
        'Development of REST services with Spring Boot 3.5, Spring Security JWT, and PostgreSQL persistence.',
        'Rigorous database schema versioning via Flyway and interactive OpenAPI contracts.',
        'Docker containerization setup and unit testing suite.',
      ],
    },
    implementedFeatures: {
      es: [
        'Autenticación JWT y control de acceso basado en roles (clientes y analistas de crédito).',
        'Motor de conversión de tasas TEA a TEM y estructuración de cuotas regulares y balón.',
        'Generación de cronogramas con periodos de gracia total (capitalización) y parcial (pago de intereses).',
        'Gestión de expedientes de clientes y detalles de financiamiento vehicular.',
        'Versionado de base de datos automatizado con migraciones Flyway.',
        'Documentación interactiva de endpoints con OpenAPI/Swagger UI.',
      ],
      en: [
        'JWT authentication and role-based access control (clients and credit analysts).',
        'Rate conversion engine from TEA to TEM and installment structuring.',
        'Amortization schedules with full grace (capitalization) and partial grace periods.',
        'Client profile management workflows and vehicle financing details.',
        'Automated database versioning via Flyway migration scripts.',
        'Interactive endpoint documentation via OpenAPI/Swagger UI.',
      ],
    },
    plannedFeatures: {
      es: [
        'Integración en tiempo real con burós crediticios para precalificación automática.',
        'Exportación nativa de cronogramas a PDF y Excel con firma digital.',
      ],
      en: [
        'Real-time integration with credit bureau APIs for automated pre-qualification.',
        'Native export of schedules to PDF and Excel with digital signatures.',
      ],
    },
    architectureOverview: {
      es: 'Arquitectura desacoplada en dos subsistemas principales: un backend en Spring Boot 3 organizado bajo principios de Domain-Driven Design (DDD) con Bounded Contexts modulares (iam, clients, loans, vehicles), y una interfaz web reactiva en Vue 3 (Composition API) orquestada con Vite.',
      en: 'Decoupled architecture composed of two primary subsystems: a Spring Boot 3 backend structured under Domain-Driven Design (DDD) with modular Bounded Contexts (iam, clients, loans, vehicles), and a reactive web UI in Vue 3 (Composition API) bundled with Vite.',
    },
    architectureComponents: [
      {
        name: 'Vue 3 Web Client',
        role: {
          es: 'Calculadora interactiva reactiva, visualización de cronogramas y panel de expedientes',
          en: 'Interactive loan simulator, amortization schedule viewer, and customer management dashboard',
        },
        technology: 'Vue 3.5 / Vite 8 / Tailwind CSS',
        status: 'implemented',
      },
      {
        name: 'Spring Boot 3 API',
        role: {
          es: 'Controladores REST, autenticación JWT, validación de reglas de negocio y autorización por roles',
          en: 'REST controllers, JWT authentication, business validation rules, and role authorization',
        },
        technology: 'Java 21 / Spring Boot 3.5',
        status: 'implemented',
      },
      {
        name: 'Financial Math Engine',
        role: {
          es: 'Cálculo exacto de cuotas con método francés, conversión de tasas y periodos de gracia con BigDecimal',
          en: 'Exact installment calculations via French method, rate conversion, and grace periods with BigDecimal',
        },
        technology: 'Java 21 / Spring Data JPA',
        status: 'implemented',
      },
      {
        name: 'Flyway Migration Engine',
        role: {
          es: 'Gestión inmutable y reproducible del esquema relacional en base de datos',
          en: 'Immutable and reproducible relational database schema evolution and migrations',
        },
        technology: 'Flyway / PostgreSQL 15+',
        status: 'implemented',
      },
      {
        name: 'OpenAPI Documentation',
        role: {
          es: 'Contratos de interfaz REST documentados interactivamente para el frontend',
          en: 'Interactive REST API contracts and schema specifications for frontend integration',
        },
        technology: 'SpringDoc OpenAPI 3.0 / Swagger UI',
        status: 'implemented',
      },
      {
        name: 'Credit Bureau Integration Service',
        role: {
          es: 'Servicio de consulta en tiempo real a burós crediticios para scoring dinámico (Planificado)',
          en: 'Real-time credit bureau integration service for automated scoring (Planned)',
        },
        technology: 'Spring Cloud OpenFeign / REST',
        status: 'planned',
      },
    ],
    metrics: [
      {
        value: 'PEN / USD',
        label: { es: 'Simulación Bimoneda', en: 'Dual Currency Engine' },
        description: { es: 'Cálculo simultáneo en Soles y Dólares con conversión de tipo de cambio', en: 'Simultaneous calculations in Soles and USD with exchange rate handling' },
        category: 'functional',
        verifiedSource: 'Capital Cruise README y controladores bimoneda',
      },
      {
        value: 'Método Francés',
        label: { es: 'Amortización & Balón', en: 'Amortization & Balloon' },
        description: { es: 'Conversión de TEA a TEM con periodos de gracia total y parcial', en: 'TEA to TEM rate conversion with full and partial grace periods' },
        category: 'functional',
        verifiedSource: 'Implementación en Spring Boot AmortizationScheduleService',
      },
      {
        value: 'BigDecimal',
        label: { es: 'Aritmética Arbitraria', en: 'Arbitrary Precision Math' },
        description: { es: 'Cálculo financiero bancario libre de errores de redondeo flotante', en: 'Banking financial arithmetic free of float rounding drift' },
        category: 'architecture',
        verifiedSource: 'Modelos de dominio Java (prohibición estricta de float/double)',
      },
      {
        value: 'Flyway',
        label: { es: 'Migraciones Versionadas', en: 'Versioned Migrations' },
        description: { es: 'Control estricto e inmutable del esquema relacional en PostgreSQL', en: 'Strict and immutable relational schema evolution on PostgreSQL' },
        category: 'architecture',
        verifiedSource: 'Scripts SQL en src/main/resources/db/migration',
      },
    ],
    keyDecisions: [
      {
        title: {
          es: 'ADR-1: Uso de BigDecimal para Todas las Fórmulas Financieras',
          en: 'ADR-1: Adoption of BigDecimal for All Financial Math',
        },
        decision: {
          es: 'Se prohibió el uso de tipos primitivos flotantes (float/double) en el motor de amortización.',
          en: 'Prohibited primitive floating point types (float/double) across all financial calculations.',
        },
        tradeoff: {
          es: 'Garantiza exactitud contable al céntimo exigida por regulaciones bancarias, a costa de una sintaxis más verbosa en Java.',
          en: 'Guarantees cent-accurate accounting required by banking standards, at the cost of more verbose Java syntax.',
        },
      },
      {
        title: {
          es: 'ADR-2: Control de Esquema Relacional Mediante Flyway',
          en: 'ADR-2: Relational Schema Evolution via Flyway',
        },
        decision: {
          es: 'El esquema se gestiona exclusivamente mediante scripts SQL versionados en lugar de auto-generación de JPA.',
          en: 'Schema is managed exclusively through versioned SQL scripts rather than JPA auto-DDL generation.',
        },
        tradeoff: {
          es: 'Permite despliegues seguros y reproducibles en cualquier entorno, requiriendo escribir migraciones manuales para cada entidad.',
          en: 'Enables safe reproducible deployments across environments, requiring manual migration writing for each entity.',
        },
      },
    ],
    challengesAndLearnings: {
      es: [
        'Modelado riguroso de la capitalización de intereses en periodos de gracia total frente a la liquidación ordinaria en gracia parcial.',
        'Sincronización de contratos OpenAPI entre backend Java y cliente Vue 3 asegurando coherencia de tipos bimoneda.',
      ],
      en: [
        'Rigorous modeling of interest capitalization in full grace periods versus standard interest settlements in partial grace.',
        'Synchronizing OpenAPI contracts between the Java backend and Vue 3 frontend to enforce bimonetary type consistency.',
      ],
    },
    technologies: [
      'Java 21',
      'Spring Boot 3.5',
      'PostgreSQL',
      'Flyway',
      'Vue 3.5',
      'Vite 8',
      'Docker',
      'OpenAPI',
      'Spring Security',
    ],
    links: {
      github: 'https://github.com/RicardoCardenas/Capital-Cruise',
    },
    relatedProjectSlugs: ['meditrack-iot-health', 'jobsy-backend'],
  },
  {
    id: 'talestar-mobile',
    slug: 'talestar-mobile',
    title: 'TaleStar Mobile',
    featured: true,
    order: 3,
    categories: ['mobile', 'software-engineering'],
    status: 'mvp-completed',
    statusLabel: {
      es: 'MVP Finalizado (351 Tests Passing)',
      en: 'Completed MVP (351 Passing Tests)',
    },
    summary: {
      es: 'Aplicación móvil en Flutter con Realidad Aumentada (ARCore), reproducción de audio FLAC de alta fidelidad y Modo Niño protegido por PIN parental.',
      en: 'Flutter mobile application featuring Augmented Reality (ARCore), lossless FLAC audio streaming, and parent PIN-protected Kids Mode.',
    },
    problem: {
      es: 'Las aplicaciones infantiles suelen presentar riesgos de seguridad digital cuando los niños acceden accidentalmente a configuraciones de cuenta o compras, interfaces sobrecargadas que rompen el escalado y experiencias estáticas que carecen de interactividad tridimensional inmersiva.',
      en: 'Children apps often carry digital safety risks when kids inadvertently access account settings, cluttered interfaces that break responsiveness across screens, and static experiences lacking 3D physical interactivity.',
    },
    solution: {
      es: 'Aplicación móvil con arquitectura limpia organizada por características (Feature-First Clean Architecture) que combina lectura de cuentos ilustrados, proyección física en Realidad Aumentada (Google ARCore) con shaders OpenGL ES nativos, audio FLAC y confinamiento estricto en Modo Niño protegido por PIN de 4 dígitos.',
      en: 'Mobile app built with Feature-First Clean Architecture combining illustrated storytelling, physical Augmented Reality projection (Google ARCore) with native OpenGL ES shaders, background FLAC playback, and strict PIN-protected child confinement.',
    },
    personalRole: {
      es: 'Desarrollador Móvil Flutter & QA Lead',
      en: 'Mobile Flutter Developer & QA Lead',
    },
    contributions: {
      es: [
        'Implementación del sistema de navegación segura y confinamiento con GoRouter y PopScope.',
        'Desacoplamiento de datos simulados y backend real con arquitectura limpia e inyección GetIt.',
        'Autoría y validación de la suite de 351 pruebas automatizadas (100% aprobadas y 0 incidencias).',
        'Integración de PlatformView nativo en Kotlin para proyección AR con OpenGL ES 2.0.',
      ],
      en: [
        'Implementation of safe child navigation confinement using GoRouter guards and PopScope.',
        'Clean decoupling of mock and live data sources via repository patterns and GetIt injection.',
        'Authoring and verification of the 351 automated test suite (100% passing and zero lint issues).',
        'Native Kotlin PlatformView integration for AR projection using OpenGL ES 2.0.',
      ],
    },
    implementedFeatures: {
      es: [
        'Lector inmersivo ARCore con detección de superficies reales y shaders OpenGL ES.',
        'Entorno Modo Niño blindado resistente a gestos de retroceso y salidas accidentales.',
        'Mini-reproductor interactivo flotante con soporte FLAC en segundo plano.',
        'Almacenamiento cifrado seguro respaldado por Android KeyStore.',
        'Arquitectura reactiva con BLoC / Cubit y 351 pruebas unitarias y de widgets aprobadas.',
      ],
      en: [
        'Immersive ARCore surface reader on horizontal planes with OpenGL ES shaders.',
        'Kids Mode confinement resistant to gesture navigation escapes.',
        'Floating interactive mini-player supporting background FLAC audio.',
        'Secure hardware-backed encrypted storage via Android KeyStore.',
        'Reactive state management with BLoC / Cubit backed by 351 passing tests.',
      ],
    },
    plannedFeatures: {
      es: [
        'Soporte ARKit para dispositivos iOS en hardware físico verificado.',
        'Descarga offline de cuentos y audio en almacenamiento cifrado local.',
      ],
      en: [
        'ARKit support for iOS devices on verified physical hardware.',
        'Offline interactive story and audio downloads in local encrypted storage.',
      ],
    },
    architectureOverview: {
      es: 'Feature-First Clean Architecture en Flutter con separación estricta en tres capas: Presentation (Screens, Widgets, BLoC), Domain (Entities, Casos de Uso, interfaces Dart puro) y Data (Data Sources, Repositorios, DTOs). Inyección de dependencias centralizada con GetIt y navegación declarativa con GoRouter.',
      en: 'Feature-First Clean Architecture in Flutter with strict three-layer separation: Presentation (Screens, Widgets, BLoC), Domain (Entities, Use Cases, pure Dart contracts), and Data (Data Sources, Repositories, DTOs). Centralized dependency injection via GetIt and declarative navigation with GoRouter.',
    },
    architectureComponents: [
      {
        name: 'Presentation Layer',
        role: {
          es: 'Widgets responsivos, componentes de lectura interactiva y gestión de estado reactiva con BLoC/Cubit',
          en: 'Responsive widgets, interactive story viewer, and reactive state management with BLoC/Cubit',
        },
        technology: 'Flutter 3.41 / flutter_bloc',
        status: 'implemented',
      },
      {
        name: 'ARCore Native Bridge',
        role: {
          es: 'PlatformView nativo en Kotlin con shaders OpenGL ES 2.0 para detección de planos y proyección 3D',
          en: 'Native Kotlin PlatformView with OpenGL ES 2.0 shaders for plane detection and 3D projection',
        },
        technology: 'Google ARCore 1.47 / OpenGL ES',
        status: 'implemented',
      },
      {
        name: 'Audio Player Service',
        role: {
          es: 'Reproducción continua de audio FLAC en segundo plano con control flotante minimizable',
          en: 'Seamless background FLAC playback with floating minimizable controls',
        },
        technology: 'just_audio / audio_service',
        status: 'implemented',
      },
      {
        name: 'Security & Confinement Guard',
        role: {
          es: 'Validación de PIN parental de 4 dígitos, interceptores de rutas con GoRouter y PopScope',
          en: '4-digit parental PIN validation, GoRouter route guards, and PopScope back-gesture lock',
        },
        technology: 'GoRouter 14.8 / Android KeyStore',
        status: 'implemented',
      },
      {
        name: 'Data Repository Layer',
        role: {
          es: 'Desacoplamiento entre fuentes simuladas y API remota mediante repositorios inyectados',
          en: 'Decoupling between mock data sources and remote APIs via injected repository pattern',
        },
        technology: 'GetIt 8.3 / Dart 3.11',
        status: 'implemented',
      },
      {
        name: 'ARKit iOS Bridge',
        role: {
          es: 'Adaptador de Realidad Aumentada para dispositivos Apple con ARKit y SceneKit (Planificado)',
          en: 'Augmented Reality bridge for iOS hardware using ARKit & SceneKit (Planned)',
        },
        technology: 'ARKit / Swift',
        status: 'planned',
      },
    ],
    metrics: [
      {
        value: '351',
        label: { es: 'Tests Automatizados', en: 'Automated Tests' },
        description: { es: '100% aprobadas en suite unitaria y de widgets', en: '100% passing rate across unit and widget suites' },
        category: 'testing',
        verifiedSource: 'test/ directory en repositorio TaleStar-Mobile',
      },
      {
        value: '0 Warnings',
        label: { es: 'Conformidad Linter', en: 'Clean Linter' },
        description: { es: 'Código Dart conforme a flutter analyze y sound null safety', en: 'Clean Dart codebase validated with flutter analyze' },
        category: 'testing',
        verifiedSource: 'flutter analyze (0 issues found)',
      },
      {
        value: 'ARCore',
        label: { es: 'Realidad Aumentada', en: 'Augmented Reality' },
        description: { es: 'Detección física de planos con shaders OpenGL ES nativos', en: 'Real-time surface tracking with native OpenGL shaders' },
        category: 'functional',
        verifiedSource: 'android/app/src/main/kotlin/ PlatformView & ARCore',
      },
      {
        value: '4 Dígitos',
        label: { es: 'PIN Confinamiento', en: 'Parental PIN Guard' },
        description: { es: 'Bloqueo reactivo de rutas con GoRouter y Android KeyStore', en: 'Reactive route confinement via GoRouter & Android KeyStore' },
        category: 'architecture',
        verifiedSource: 'lib/core/security y GoRouter redirect guards',
      },
    ],
    galleryImages: [
      '/images/projects/talestar-ar.png',
      '/images/projects/talestar-home.png',
      '/images/projects/talestar-container.png',
    ],
    keyDecisions: [
      {
        title: {
          es: 'ADR-1: Feature-First Clean Architecture',
          en: 'ADR-1: Feature-First Clean Architecture',
        },
        decision: {
          es: 'Se estructuró el código por funcionalidades (features/ar, features/reader, features/parental_mode) en vez de por capas técnicas.',
          en: 'Structured code by business features (features/ar, features/reader, features/parental_mode) rather than technical layers.',
        },
        tradeoff: {
          es: 'Facilita la modularidad y el testeo independiente de cada subsistema sin tocar código de otras pantallas.',
          en: 'Fosters modularity and independent subsystem testability without modifying unrelated screen code.',
        },
      },
      {
        title: {
          es: 'ADR-2: Confinamiento Infantil Mediante GoRouter y PopScope',
          en: 'ADR-2: Child Confinement via GoRouter and PopScope',
        },
        decision: {
          es: 'Se implementó interceptación reactiva en GoRouter combinada con PopScope para interceptar gestos de retroceso.',
          en: 'Implemented reactive route interception in GoRouter combined with PopScope to prevent back-gesture escapes.',
        },
        tradeoff: {
          es: 'Evita accesos accidentales a la configuración de cuenta sin necesidad de bloquear el teléfono a nivel de SO.',
          en: 'Prevents accidental access to account settings without requiring root-level OS locking.',
        },
      },
    ],
    challengesAndLearnings: {
      es: [
        'Manejo de sincronización entre el hilo de renderizado nativo OpenGL ES de ARCore y el ciclo de vida del widget tree de Flutter.',
        'Blindaje de la navegación infantil ante gestos de borde propios de versiones recientes de Android e iOS.',
      ],
      en: [
        'Synchronizing the native ARCore OpenGL ES render thread with the Flutter widget tree lifecycle without memory leaks.',
        'Hardening child confinement against edge-swipe gestures introduced in recent Android and iOS OS versions.',
      ],
    },
    technologies: [
      'Flutter 3.41',
      'Dart 3.11',
      'Google ARCore',
      'OpenGL ES',
      'BLoC / Cubit',
      'GetIt',
      'GoRouter',
      'Android KeyStore',
    ],
    links: {
      github: 'https://github.com/RicardoCardenas/TaleStar-Mobile',
    },
    relatedProjectSlugs: ['nexo-agentic-graphrag', 'capital-cruise'],
  },
  {
    id: 'meditrack',
    slug: 'meditrack-iot-health',
    title: 'MediTrack — Telemetría IoT & Monitoreo de Salud',
    featured: false,
    order: 4,
    categories: ['software-engineering'],
    status: 'academic-completed',
    statusLabel: {
      es: 'Arquitectura Distribuida Verificada',
      en: 'Verified Distributed Architecture',
    },
    summary: {
      es: 'Plataforma de telemedicina y monitoreo continuo de signos vitales para adultos mayores en arquitectura Edge-Fog-Cloud con microservicios y MQTT.',
      en: 'Telemedicine and continuous vital signs monitoring platform for seniors built on an Edge-Fog-Cloud microservices architecture with MQTT.',
    },
    problem: {
      es: 'El cuidado continuo de adultos mayores exige monitoreo constante de signos vitales para prevenir emergencias médicas. Los sistemas centralizados tradicionales introducen latencia en la detección de anomalías y saturan la red con transmisiones continuas de telemetría sin procesar.',
      en: 'Senior healthcare demands continuous vital signs telemetry to avoid medical crises. Traditional centralized architectures cause critical latency in anomaly detection and saturate bandwidth with raw unprocessed data.',
    },
    solution: {
      es: 'Parche IoT simulado que recopila señales biomédicas, procesa localmente en el nodo Edge (Python) para detección inmediata de anomalías, transmite vía MQTT Mosquitto (Fog) y consolida microservicios desacoplados en Spring Boot con frontend en Angular 20.',
      en: 'Simulated IoT patch collecting biometric signals, processing locally at the Edge node (Python) for instant threshold anomaly alerts, transmitting via MQTT Mosquitto (Fog), and consolidating decoupled Spring Boot microservices with an Angular 20 dashboard.',
    },
    personalRole: {
      es: 'Desarrollador Backend de Microservicios & IoT Integration',
      en: 'Backend Microservices & IoT Integration Developer',
    },
    contributions: {
      es: [
        'Desarrollo de microservicios en Spring Boot 3 (iam, clinical, devices, relatives) con bases de datos MySQL independientes.',
        'Integración del pipeline de ingesta MQTT de alta frecuencia y broker ActiveMQ.',
        'Contenerización global con Docker Compose y modelado de arquitectura C4.',
        'Diseño del API Gateway unificado con validación centralizada de tokens JWT.',
      ],
      en: [
        'Development of Spring Boot 3 microservices (iam, clinical, devices, relatives) with decoupled MySQL databases.',
        'High-frequency MQTT telemetry ingestion and ActiveMQ message broker integration.',
        'Multi-service Docker Compose containerization and C4 architecture modeling.',
        'Centralized API Gateway design with unified JWT token authentication and routing.',
      ],
    },
    implementedFeatures: {
      es: [
        'Pipeline de telemetría IoT con filtrado Edge de anomalías biomédicas en tiempo real.',
        'API Gateway centralizado con validación de tokens JWT y enrutamiento por microservicio.',
        'Bases de datos MySQL 8 independientes por contexto acotado.',
        'Broker de mensajería ligero Mosquitto (MQTT) y ActiveMQ.',
        'Visualización clínica en tiempo real en portal Angular 20.',
        'Orquestación multi-contenedor verificada en Docker Compose.',
      ],
      en: [
        'IoT telemetry pipeline with edge threshold anomaly filtering in real time.',
        'Centralized API Gateway with unified JWT validation and routing per microservice.',
        'Independent MySQL 8 databases per bounded context microservice.',
        'Lightweight message brokering via Eclipse Mosquitto (MQTT) and ActiveMQ.',
        'Real-time clinical dashboard visualization in Angular 20 portal.',
        'Multi-container verified orchestration via Docker Compose.',
      ],
    },
    plannedFeatures: {
      es: [
        'Integración con sensores biomédicos comerciales vía Bluetooth Low Energy (BLE).',
        'Modelos de Machine Learning para predicción temprana de descompensación clínica.',
      ],
      en: [
        'Hardware integration with commercial biometric sensors via Bluetooth Low Energy (BLE).',
        'Machine Learning predictive models for early clinical decompensation alerts.',
      ],
    },
    architectureOverview: {
      es: 'Arquitectura distribuida Edge-Fog-Cloud estructurada en 7 microservicios desacoplados: gateway (enrutamiento unificado), iam (autenticación), organization (residencias y cuidadores), clinical (registro histórico), devices (parches IoT), relatives (portal familiar) y edge (telemetría local en Python).',
      en: 'Distributed Edge-Fog-Cloud architecture structured into 7 decoupled microservices: gateway (unified routing), iam (auth), organization (nursing homes), clinical (vital signs logs), devices (IoT patches), relatives (family portal), and edge (local Python telemetry).',
    },
    architectureComponents: [
      {
        name: 'Simulated Edge Node',
        role: {
          es: 'Generación sintética de señales biomédicas y filtrado inmediato de umbrales críticos',
          en: 'Synthetic biometric telemetry generation and instant threshold anomaly filtering',
        },
        technology: 'Python 3.11 / Edge Daemon',
        status: 'implemented',
      },
      {
        name: 'Fog MQTT Broker',
        role: {
          es: 'Broker ligero para transmisión de telemetría de baja latencia',
          en: 'Lightweight broker for low-latency telemetry ingestion from devices',
        },
        technology: 'Eclipse Mosquitto (Puertos 1883/9001)',
        status: 'implemented',
      },
      {
        name: 'Cloud API Gateway',
        role: {
          es: 'Punto de entrada unificado, validación JWT centralizada y balanceo de carga',
          en: 'Unified entry point, centralized JWT token verification, and reverse proxy routing',
        },
        technology: 'Spring Cloud Gateway (Puerto 8080)',
        status: 'implemented',
      },
      {
        name: 'Clinical Microservices Cloud',
        role: {
          es: 'Gestión clínica, dispositivos y usuarios con persistencia aislada',
          en: 'Clinical records, device registry, and identity services with isolated databases',
        },
        technology: 'Spring Boot 3.3 / Java 21 / MySQL 8',
        status: 'implemented',
      },
      {
        name: 'Web Dashboard',
        role: {
          es: 'Monitoreo interactivo de pacientes para cuidadores y médicos',
          en: 'Interactive clinical monitoring dashboard for caregivers and medical personnel',
        },
        technology: 'Angular 20 / TypeScript',
        status: 'implemented',
      },
      {
        name: 'BLE Ingestion Gateway',
        role: {
          es: 'Módulo de enlace directo con sensores de grado médico vía Bluetooth Low Energy (Planificado)',
          en: 'Direct medical sensor ingestion interface via Bluetooth Low Energy (Planned)',
        },
        technology: 'BLE 5.3 / Python Bleak',
        status: 'planned',
      },
    ],
    metrics: [
      {
        value: '7',
        label: { es: 'Microservicios Desacoplados', en: 'Decoupled Microservices' },
        description: { es: 'Arquitectura C4 contenerizada con Docker Compose', en: 'C4 architecture containerized in Docker Compose' },
        category: 'architecture',
        verifiedSource: 'docker-compose.yml y repositorio MediTrack',
      },
      {
        value: 'MQTT',
        label: { es: 'Telemetría IoT Ligera', en: 'Lightweight IoT Telemetry' },
        description: { es: 'Ingesta de alta frecuencia con broker Mosquitto', en: 'High-frequency telemetry ingestion via Mosquitto' },
        category: 'architecture',
        verifiedSource: 'Configuración Mosquitto (puertos 1883/9001)',
      },
      {
        value: 'Edge Anomaly',
        label: { es: 'Filtrado en el Dispositivo', en: 'Edge Anomaly Filtering' },
        description: { es: 'Detección local de umbrales críticos sin sobrecarga de red', en: 'Local critical threshold alerts without network overhead' },
        category: 'functional',
        verifiedSource: 'Script edge/sensor_generator.py',
      },
      {
        value: 'MySQL 8',
        label: { es: 'Bases de Datos Aisladas', en: 'Isolated Databases' },
        description: { es: 'Patrón Database-per-Service para evitar acoplamiento relacional', en: 'Database-per-Service pattern preventing tight coupling' },
        category: 'architecture',
        verifiedSource: 'Esquemas SQL independientes en cada microservicio',
      },
    ],
    keyDecisions: [
      {
        title: {
          es: 'ADR-1: Procesamiento en el Nodo Edge',
          en: 'ADR-1: Edge Node Telemetry Processing',
        },
        decision: {
          es: 'El nodo local evalúa umbrales y descarta lecturas biomédicas estables antes de transmitir a la nube.',
          en: 'The local edge node evaluates thresholds and discards stable readings prior to cloud transmission.',
        },
        tradeoff: {
          es: 'Reduce en más del 80% el consumo de ancho de banda y latencia ante emergencias, requiriendo capacidad de cómputo en el dispositivo.',
          en: 'Reduces network bandwidth and emergency latency by over 80%, requiring local compute capability on the device.',
        },
      },
      {
        title: {
          es: 'ADR-2: Base de Datos Independiente por Microservicio',
          en: 'ADR-2: Database-per-Service Pattern',
        },
        decision: {
          es: 'Cada microservicio cuenta con su propia base de datos MySQL 8 aislada.',
          en: 'Each microservice owns an isolated MySQL 8 database instance.',
        },
        tradeoff: {
          es: 'Garantiza independencia de despliegue y evita acoplamiento relacional, requiriendo replicación eventual de datos compartidos.',
          en: 'Guarantees deployment independence and avoids relational coupling, requiring eventual data synchronization.',
        },
      },
    ],
    challengesAndLearnings: {
      es: [
        'Orquestación de microservicios con dependencias mutuas de arranque en Docker Compose mediante health checks.',
        'Manejo de reconexión y almacenamiento en búfer temporal en broker MQTT durante caídas de red.',
      ],
      en: [
        'Orchestrating microservices with startup dependencies in Docker Compose using proper container health checks.',
        'Handling automatic reconnection and local buffer queuing in MQTT brokers during temporary network disruptions.',
      ],
    },
    technologies: [
      'Java 21',
      'Spring Boot 3.3',
      'Angular 20',
      'Python 3.11',
      'MQTT Mosquitto',
      'ActiveMQ',
      'MySQL 8',
      'Docker Compose',
    ],
    links: {
      github: 'https://github.com/RicardoCardenas/Meditrack',
    },
    relatedProjectSlugs: ['capital-cruise', 'jobsy-backend'],
  },
  {
    id: 'thelook-pipeline',
    slug: 'thelook-ecommerce-pipeline',
    title: 'TheLook eCommerce Data Pipeline',
    featured: true,
    order: 5,
    categories: ['data-ai'],
    status: 'production',
    statusLabel: {
      es: 'Pipeline Automatizado en GCP',
      en: 'Automated GCP Pipeline',
    },
    summary: {
      es: 'Pipeline analítico integral en Google Cloud Platform procesando 2.4M de eventos históricos con BigQuery ML y tableros interactivos.',
      en: 'End-to-end data engineering and ML pipeline on Google Cloud Platform processing 2.4M events with BigQuery ML and Looker Studio.',
    },
    problem: {
      es: 'Una operación de comercio electrónico con más de 7 años y 3 meses de transacciones (2019-2026) carecía de centralización analítica para diagnosticar cuellos de botella en el embudo de ventas, detectar abandono de carritos y segmentar clientes por valor de ciclo de vida (CLV).',
      en: 'A high-volume eCommerce operation with over 7 years of transactions (2019-2026) lacked centralized analytics to diagnose checkout funnel bottlenecks, detect cart abandonment, and segment customers by Customer Lifetime Value (CLV).',
    },
    solution: {
      es: 'Pipeline automatizado diario a las 6:00 AM en BigQuery con capas Staging, Aggregations y CLV, modelos de Machine Learning (Logistic Regression, ARIMA_PLUS y K-Means) ejecutados in-situ, y tableros comerciales interactivos en Looker Studio.',
      en: 'Daily scheduled 6:00 AM BigQuery pipeline structured into Staging, Aggregations, and CLV layers, BigQuery ML in-database models (Logistic Regression, ARIMA_PLUS, K-Means), and Looker Studio executive dashboards.',
    },
    personalRole: {
      es: 'Data Engineer & Analytics Specialist',
      en: 'Data Engineer & Analytics Specialist',
    },
    contributions: {
      es: [
        'Diseño y programación del pipeline diario programado a las 6:00 AM en BigQuery.',
        'Implementación de consultas SQL analíticas avanzadas con funciones de ventana para capas dimensionales.',
        'Entrenamiento y evaluación de 3 modelos BigQuery ML (predicción de churn, ventas y clusters).',
        'Construcción de dashboards de embudo y rentabilidad en Looker Studio.',
      ],
      en: [
        'Scheduled daily 6:00 AM data pipeline architecture in BigQuery.',
        'Implementation of advanced SQL analytical queries and window functions for dimensional layers.',
        'Training and evaluation of 3 BigQuery ML models (churn prediction, sales forecast, clusters).',
        'Design and publication of conversion funnel and profit margin dashboards in Looker Studio.',
      ],
    },
    implementedFeatures: {
      es: [
        'Procesamiento histórico de más de 2.4 millones de eventos web y 125,000 pedidos.',
        'Detección de cuello de botella crítico en embudo (~250,000 sesiones abandonadas entre carrito y compra).',
        'Modelo predictivo de churn con 82.8% de precisión y 80.4% de recall (LOGISTIC_REG).',
        'Pronóstico de ventas a 30 días con intervalo de confianza al 95% mediante ARIMA_PLUS.',
        'Segmentación de clientes en 4 clusters estandarizados con K-Means.',
        'Tablero ejecutivo en Looker Studio para visualización de métricas de margen.',
      ],
      en: [
        'Historical processing of over 2.4 million web events and 125,000 orders.',
        'Checkout drop-off bottleneck diagnosis (~250,000 abandoned sessions between cart and purchase).',
        'Churn prediction model achieving 82.8% precision and 80.4% recall (LOGISTIC_REG).',
        '30-day sales forecast horizon with 95% confidence intervals via ARIMA_PLUS.',
        'Customer segmentation into 4 standardized clusters via K-Means.',
        'Looker Studio executive dashboard visualizing profit margin metrics.',
      ],
    },
    plannedFeatures: {
      es: [
        'Orquestación de flujos de trabajo con Apache Airflow / Cloud Composer.',
        'Alertas automatizadas en Slack ante caídas bruscas en tasas de conversión.',
      ],
      en: [
        'Workflow orchestration with Apache Airflow / Google Cloud Composer.',
        'Automated Slack alerting upon sudden conversion rate anomalies.',
      ],
    },
    architectureOverview: {
      es: 'Pipeline estructurado en capas analíticas dentro de Google BigQuery: Staging Layer (stg_orders_enriched), Aggregations Layer (fact_top_products_monthly), Reverse Logistics Layer (fact_returns_analysis) y Customer Attributes Layer (dim_customer_clv), alimentando modelos BigQuery ML y Looker Studio.',
      en: 'Pipeline structured into analytical layers within Google BigQuery: Staging Layer (stg_orders_enriched), Aggregations Layer (fact_top_products_monthly), Reverse Logistics Layer (fact_returns_analysis), and Customer Attributes Layer (dim_customer_clv), feeding BigQuery ML models and Looker Studio.',
    },
    architectureComponents: [
      {
        name: 'Cloud Data Warehouse',
        role: {
          es: 'Almacenamiento columnar y procesamiento distribuido de eventos web y transacciones',
          en: 'Columnar storage and distributed processing for millions of web events and orders',
        },
        technology: 'Google BigQuery (us-central1)',
        status: 'implemented',
      },
      {
        name: 'SQL Transformation Engine',
        role: {
          es: 'Cálculo de márgenes, rankings mensuales y segmentación CLV con funciones de ventana',
          en: 'Margin calculations, monthly product rankings, and CLV segmentation using window functions',
        },
        technology: 'BigQuery Data Engineering Agent / Dataform',
        status: 'implemented',
      },
      {
        name: 'In-Database Machine Learning',
        role: {
          es: 'Predicción de abandono (LOGISTIC_REG), pronóstico de ventas (ARIMA_PLUS) y clusters (KMEANS)',
          en: 'Churn prediction (LOGISTIC_REG), sales forecasting (ARIMA_PLUS), and clustering (KMEANS)',
        },
        technology: 'BigQuery ML',
        status: 'implemented',
      },
      {
        name: 'Business Intelligence Portal',
        role: {
          es: 'Tablero interactivo con embudo de conversión, productos líderes y análisis de devoluciones',
          en: 'Interactive dashboard visualizing checkout funnel, top products, and return rate analysis',
        },
        technology: 'Looker Studio',
        status: 'implemented',
      },
      {
        name: 'Airflow Orchestration DAGs',
        role: {
          es: 'Orquestación de flujos dependientes y alertas en Slack con Cloud Composer (Planificado)',
          en: 'Workflow DAG orchestration and Slack alerting with Cloud Composer (Planned)',
        },
        technology: 'Apache Airflow / Cloud Composer',
        status: 'planned',
      },
    ],
    metrics: [
      {
        value: '2.4M',
        label: { es: 'Eventos Procesados', en: 'Processed Events' },
        description: { es: 'Datos históricos consolidados en BigQuery (2019-2026)', en: 'Consolidated historical web events in BigQuery (2019-2026)' },
        category: 'data',
        verifiedSource: 'Google Cloud BigQuery us-central1 events table',
      },
      {
        value: '125K',
        label: { es: 'Pedidos Analizados', en: 'Orders Analyzed' },
        description: { es: 'Más de 7 años de transacciones y catálogo', en: 'Over 7 years of eCommerce transactions' },
        category: 'data',
        verifiedSource: 'stg_orders_enriched dataset en BigQuery',
      },
      {
        value: '82.8%',
        label: { es: 'Precisión Churn ML', en: 'Churn ML Precision' },
        description: { es: 'Modelo LOGISTIC_REG entrenado y evaluado in-situ', en: 'In-database LOGISTIC_REG evaluated model' },
        category: 'functional',
        verifiedSource: 'BigQuery ML ML.EVALUATE output',
      },
      {
        value: '30 Días',
        label: { es: 'Horizonte Forecast', en: 'Forecast Horizon' },
        description: { es: 'Proyección temporal con ARIMA_PLUS (95% confianza)', en: 'Time-series forecasting with ARIMA_PLUS (95% CI)' },
        category: 'functional',
        verifiedSource: 'BigQuery ML ML.FORECAST output',
      },
    ],
    galleryImages: [
      '/images/projects/thelook-dashboard.png',
      '/images/projects/thelook-diagram-er.png',
    ],
    keyDecisions: [
      {
        title: {
          es: 'ADR-1: Machine Learning In-Situ en BigQuery ML',
          en: 'ADR-1: In-Database Machine Learning with BigQuery ML',
        },
        decision: {
          es: 'Se entrenaron los modelos directamente dentro de BigQuery sin exportar datasets a servidores externos de Python.',
          en: 'Trained models directly inside BigQuery without exporting datasets to external Python environments.',
        },
        tradeoff: {
          es: 'Elimina costos de transferencia de datos y latencias de exportación de 2.4M registros, a cambio de limitarse a algoritmos soportados por BigQuery ML.',
          en: 'Eliminates data egress costs and latency of moving 2.4M records, while restricting algorithms to those natively supported by BigQuery ML.',
        },
      },
      {
        title: {
          es: 'ADR-2: Modelado en Capas Staging y Marts',
          en: 'ADR-2: Layered Staging and Data Mart Architecture',
        },
        decision: {
          es: 'Se aislaron las transformaciones en capas intermedias en vez de alimentar Looker Studio desde las tablas crudas.',
          en: 'Isolated transformations into intermediate analytical layers rather than querying raw transactional tables from Looker Studio.',
        },
        tradeoff: {
          es: 'Optimiza drásticamente los tiempos de carga del dashboard y los costos de escaneo de BigQuery.',
          en: 'Drastically optimizes dashboard query response times and reduces BigQuery scanning billing costs.',
        },
      },
    ],
    challengesAndLearnings: {
      es: [
        'Optimización de particiones por fecha y clustering por usuario para reducir el costo de consultas analíticas sobre 2.4M registros.',
        'Diagnóstico del cuello de botella más severo en el embudo comercial: una caída de más del 50% entre añadir al carrito y finalizar la compra.',
      ],
      en: [
        'Partitioning by transaction date and clustering by user ID to minimize query scan costs on 2.4M records.',
        'Diagnosing the most critical sales funnel bottleneck: an over 50% drop-off between adding items to cart and checkout completion.',
      ],
    },
    technologies: [
      'Google Cloud (GCP)',
      'BigQuery',
      'SQL Analítico',
      'BigQuery ML',
      'Dataform',
      'Looker Studio',
    ],
    links: {
      github: 'https://github.com/RicardoCardenas/E-commerce-Data-pipeline',
    },
    relatedProjectSlugs: ['customer-churn-analytics', 'nexo-agentic-graphrag'],
  },
  {
    id: 'customer-churn',
    slug: 'customer-churn-analytics',
    title: 'Customer Churn & Behavioral Analytics',
    featured: false,
    order: 6,
    categories: ['data-ai'],
    status: 'mvp-completed',
    statusLabel: {
      es: 'Dashboard Ejecutivo Completado',
      en: 'Executive Dashboard Completed',
    },
    summary: {
      es: 'Análisis exploratorio de datos, segmentación K-Means y cuantificación financiera del abandono de clientes en telecomunicaciones con Power BI.',
      en: 'Exploratory data analysis, K-Means customer segmentation, and financial churn impact quantification for telecom with Power BI.',
    },
    problem: {
      es: 'En las empresas de suscripción de telecomunicaciones, la deserción de clientes (churn) erosiona los ingresos recurrentes mensuales (MRR). Identificar las bajas de forma reactiva genera altos costos de readquisición, mientras que la falta de segmentación impide enfocar presupuestos de retención en clientes de alto valor.',
      en: 'In telecom subscription businesses, customer churn erodes Monthly Recurring Revenue (MRR). Reactive churn identification leads to high re-acquisition costs, while lack of behavioral segmentation prevents targeting retention spend on high-value accounts.',
    },
    solution: {
      es: 'Pipeline analítico en Python que procesa más de 7,000 registros transaccionales, ejecuta consultas analíticas en memoria mediante DuckDB, segmenta perfiles de riesgo con K-Means (Scikit-Learn) y consolida los hallazgos en un informe interactivo en Power BI con medidas DAX dinámicas.',
      en: 'Python analytical pipeline processing 7,000+ transactional records, executing in-memory SQL queries via DuckDB, segmenting risk profiles with K-Means (Scikit-Learn), and presenting findings in an interactive Power BI report with custom DAX measures.',
    },
    personalRole: {
      es: 'Data Analyst & BI Developer',
      en: 'Data Analyst & BI Developer',
    },
    contributions: {
      es: [
        'Limpieza, tratamiento de nulos y modelado de variables sobre +7,000 registros en Python.',
        'Consultas analíticas de alto rendimiento en memoria con DuckDB.',
        'Entrenamiento de modelo de agrupamiento K-Means con Scikit-Learn y método del codo.',
        'Modelado semántico de datos y formulación de medidas DAX avanzadas en Power BI.',
      ],
      en: [
        'Data cleaning, missing value imputation, and feature engineering across 7,000+ records in Python.',
        'High-performance in-memory analytical SQL queries using DuckDB.',
        'K-Means clustering model training with Scikit-Learn and elbow method optimization.',
        'Semantic data modeling and custom dynamic DAX measures in Power BI.',
      ],
    },
    implementedFeatures: {
      es: [
        'Identificación de tasa de churn global del 26.54% y cohorte crítica 0-12 meses (55.48% de bajas).',
        'Cuantificación financiera de $120,847.10 de MRR en riesgo por contratos mensuales (Month-to-month).',
        'Detección de método de pago más vulnerable: Electronic check con 45.29% de abandono.',
        'Cluster K-Means de alto riesgo caracterizado por 13.25 meses de antigüedad promedio y cargos de $74.95.',
        'Informe interactivo ejecutable en Power BI (.pbix) con filtros por cohorte y servicio.',
      ],
      en: [
        'Identification of 26.54% global churn rate and isolation of critical 0-12 month cohort (55.48% of total churn).',
        'Financial quantification of $120,847.10 in monthly MRR risk concentrated in month-to-month contracts.',
        'Detection of most vulnerable payment method: Electronic check with 45.29% churn rate.',
        'K-Means high-risk cluster profiling (13.25 months average tenure and $74.95 monthly fee).',
        'Interactive executable Power BI report (.pbix) with dynamic cohort and service filters.',
      ],
    },
    plannedFeatures: {
      es: [
        'Publicación del informe interactivo en Power BI Service con actualización programada.',
        'Despliegue de API REST con FastAPI para scoring de riesgo de churn en tiempo real.',
      ],
      en: [
        'Interactive report publishing on Power BI Service with scheduled data refresh.',
        'REST API deployment using FastAPI for real-time customer churn risk scoring.',
      ],
    },
    architectureOverview: {
      es: 'Arquitectura analítica híbrida: una fase de ingeniería de datos en Python (Pandas y DuckDB) para extracción, limpieza y clustering con Scikit-Learn, exportando datasets enriquecidos hacia un modelo semántico en Power BI con medidas DAX.',
      en: 'Hybrid analytical pipeline: a Python data engineering phase (Pandas and DuckDB) for extraction, data curation, and Scikit-Learn clustering, exporting enriched datasets into a Power BI semantic model powered by DAX.',
    },
    architectureComponents: [
      {
        name: 'Data Wrangling Engine',
        role: {
          es: 'Procesamiento de datos transaccionales, normalización de variables y detección de valores atípicos',
          en: 'Transactional data wrangling, feature normalization, and outlier detection',
        },
        technology: 'Python 3 / Pandas / NumPy',
        status: 'implemented',
      },
      {
        name: 'In-Memory SQL Engine',
        role: {
          es: 'Consultas agregadas de alta velocidad sobre DataFrames sin requerir servidor externo de BD',
          en: 'High-speed aggregated SQL queries over DataFrames without requiring an external DB server',
        },
        technology: 'DuckDB',
        status: 'implemented',
      },
      {
        name: 'Unsupervised ML Cluster',
        role: {
          es: 'Estandarización de características numéricas y segmentación de clientes por nivel de riesgo',
          en: 'Feature standardization and customer segmentation into distinct behavioral risk groups',
        },
        technology: 'Scikit-Learn (K-Means / StandardScaler)',
        status: 'implemented',
      },
      {
        name: 'Power BI Executive Report',
        role: {
          es: 'Visualización interactiva, segmentación por cohortes y cuantificación de MRR en riesgo con DAX',
          en: 'Interactive executive visualization, cohort slicers, and MRR risk quantification via DAX',
        },
        technology: 'Power BI Desktop / DAX',
        status: 'implemented',
      },
      {
        name: 'Real-time Scoring API',
        role: {
          es: 'Servicio web para scoring predictivo en línea de clientes con FastAPI (Planificado)',
          en: 'Online customer churn risk scoring service using FastAPI (Planned)',
        },
        technology: 'Python / FastAPI',
        status: 'planned',
      },
    ],
    metrics: [
      {
        value: '26.54%',
        label: { es: 'Tasa de Churn Global', en: 'Global Churn Rate' },
        description: { es: 'Identificada sobre más de 7,000 registros transaccionales', en: 'Identified across over 7,000 transactional records' },
        category: 'data',
        verifiedSource: 'Dataset telco_churn_enriched.csv',
      },
      {
        value: '$120.8K',
        label: { es: 'MRR en Riesgo', en: 'MRR at Risk' },
        description: { es: 'Pérdida mensual en contratos month-to-month cuantificada con DAX', en: 'Monthly revenue lost on month-to-month contracts via DAX' },
        category: 'functional',
        verifiedSource: 'Power BI measure [MRR at Risk Month-to-Month]',
      },
      {
        value: '4 Clusters',
        label: { es: 'Segmentación K-Means', en: 'K-Means Clusters' },
        description: { es: 'Grupos de riesgo calculados con Scikit-Learn y método del codo', en: 'Risk profiles calculated via Scikit-Learn & elbow method' },
        category: 'functional',
        verifiedSource: 'Notebook 02_eda_and_segmentation.ipynb',
      },
      {
        value: 'DuckDB',
        label: { es: 'In-Memory SQL Engine', en: 'In-Memory SQL Engine' },
        description: { es: 'Consultas analíticas vectorizadas sobre DataFrames', en: 'Vectorized analytical SQL queries over DataFrames' },
        category: 'architecture',
        verifiedSource: 'Implementación Python DuckDB integration',
      },
    ],
    galleryImages: [
      '/images/projects/churn-dashboard.png',
    ],
    keyDecisions: [
      {
        title: {
          es: 'ADR-1: Uso de DuckDB para Agregaciones en Memoria',
          en: 'ADR-1: Use of DuckDB for In-Memory Aggregations',
        },
        decision: {
          es: 'Se integró DuckDB para ejecutar sentencias SQL directamente sobre los DataFrames de Pandas.',
          en: 'Integrated DuckDB to execute native SQL queries directly over in-memory Pandas DataFrames.',
        },
        tradeoff: {
          es: 'Brinda velocidad analítica C++ y sintaxis SQL declarativa sin la sobrecarga de levantar un contenedor de base de datos.',
          en: 'Provides C++ analytical performance and declarative SQL syntax without the operational overhead of a separate DB daemon.',
        },
      },
      {
        title: {
          es: 'ADR-2: Cuantificación Monetaria de Hallazgos Estadísticos',
          en: 'ADR-2: Monetary Quantification of Statistical Insights',
        },
        decision: {
          es: 'Cada porcentaje de deserción se vinculó directamente al cálculo de MRR perdido mediante medidas DAX.',
          en: 'Every churn percentage was directly tied to monthly MRR dollar loss via dynamic DAX measures.',
        },
        tradeoff: {
          es: 'Transforma métricas técnicas en valor financiero inmediato para la gerencia general.',
          en: 'Converts abstract technical metrics into immediate actionable financial insights for leadership.',
        },
      },
    ],
    challengesAndLearnings: {
      es: [
        'Aislamiento de la correlación espuria entre tipo de contrato mensual y método de pago electrónico mediante segmentación multivariable.',
        'Formulación de medidas DAX complejas para calcular tasas de deserción que se adapten dinámicamente a filtros de antigüedad.',
      ],
      en: [
        'Disentangling the spurious correlation between month-to-month contracts and electronic check payments through multivariate clustering.',
        'Designing dynamic DAX measures calculating churn percentages that correctly adjust across multi-tiered tenure filters.',
      ],
    },
    technologies: [
      'Python',
      'Pandas',
      'DuckDB',
      'Scikit-Learn',
      'Power BI',
      'DAX',
      'Seaborn',
    ],
    links: {
      github: 'https://github.com/RicardoCardenas/Customer-Churn-Analytics',
    },
    relatedProjectSlugs: ['thelook-ecommerce-pipeline', 'nexo-agentic-graphrag'],
  },
  {
    id: 'jobsy-backend',
    slug: 'jobsy-backend',
    title: 'Jobsy Backend — API de Reclutamiento',
    featured: false,
    order: 7,
    categories: ['software-engineering', 'data-ai'],
    status: 'mvp-completed',
    statusLabel: {
      es: 'API .NET 9 Funcional',
      en: '.NET 9 Functional API',
    },
    summary: {
      es: 'API REST en .NET 9 y C# con Domain-Driven Design, MediatR, extracción de CVs en PDF y autenticación segura con JWT.',
      en: 'REST API built with .NET 9 and C# following Domain-Driven Design, MediatR, PDF CV text parsing, and JWT security.',
    },
    problem: {
      es: 'Los procesos de selección y reclutamiento laboral presentan sobrecarga operativa en la revisión manual de currículums en PDF, falta de filtros estandarizados por competencias y desconexión entre la publicación de vacantes y la comunicación con postulantes.',
      en: 'Talent recruitment workflows face administrative friction due to manual resume reviews in PDF formats, lack of standardized competency filtering, and disconnected job opening channels.',
    },
    solution: {
      es: 'API REST modular en .NET 9 y C# 13 organizada por Bounded Contexts con extracción automatizada de texto de CVs (UglyToad.PdfPig), controladores REST desacoplados mediante el patrón mediador (MediatR) y suite de pruebas unitarias en xUnit.',
      en: 'Modular .NET 9 REST API in C# 13 organized by Bounded Contexts with automated PDF CV text parsing (UglyToad.PdfPig), controllers decoupled via the mediator pattern (MediatR), and automated testing in xUnit.',
    },
    personalRole: {
      es: 'Backend .NET Developer & Software Architect',
      en: 'Backend .NET Developer & Software Architect',
    },
    contributions: {
      es: [
        'Diseño de arquitectura DDD con 4 Bounded Contexts (IAM, JobOfferManagement, JobsyAI, Messages).',
        'Configuración de persistencia relacional con Entity Framework Core 9 y MySQL.',
        'Implementación de comandos y handlers desacoplados con MediatR.',
        'Construcción de pruebas unitarias con xUnit para autenticación y emisión de tokens JWT.',
      ],
      en: [
        'DDD architecture design across 4 Bounded Contexts (IAM, JobOfferManagement, JobsyAI, Messages).',
        'Relational persistence configuration using Entity Framework Core 9 and MySQL.',
        'Implementation of decoupled commands and handlers via MediatR.',
        'Unit test suite authoring using xUnit covering authentication and JWT token issuance.',
      ],
    },
    implementedFeatures: {
      es: [
        'Contexto IAM con emisión y validación de tokens JWT protegidos por BCrypt.',
        'Extracción programática de texto desde currículums en PDF mediante UglyToad.PdfPig.',
        'Ciclo de vida completo de ofertas laborales (creación, edición, cierre y consulta).',
        'Desacoplamiento de lógica de aplicación mediante MediatR.',
        'Documentación interactiva de endpoints con Swagger OpenAPI 3.0.',
        'Suite de pruebas automatizadas con xUnit (Jobsy.Tests).',
      ],
      en: [
        'IAM context with JWT token issuance and BCrypt password encryption.',
        'Programmatic resume text extraction from PDFs using UglyToad.PdfPig.',
        'Full job offer lifecycle management (create, update, close, search).',
        'Application logic decoupling via the MediatR mediator pattern.',
        'Interactive endpoint documentation via Swagger OpenAPI 3.0.',
        'Automated test suite using xUnit (Jobsy.Tests).',
      ],
    },
    plannedFeatures: {
      es: [
        'Integración de modelo de embeddings para emparejamiento semántico entre ofertas y currículums.',
        'Pipeline de despliegue automatizado en Azure App Service con GitHub Actions.',
      ],
      en: [
        'Embedding model integration for semantic matching between job descriptions and resumes.',
        'Automated CI/CD deployment pipeline to Azure App Service via GitHub Actions.',
      ],
    },
    architectureOverview: {
      es: 'Arquitectura limpia en capas dentro del ecosistema .NET 9: Presentation (Controllers y Swagger), Application (Comandos, Queries y Handlers de MediatR), Domain (Entidades de dominio y Value Objects) e Infrastructure (Entity Framework Core 9 con MySQL y parser PdfPig).',
      en: 'Clean layered architecture in the .NET 9 ecosystem: Presentation (Controllers and Swagger), Application (MediatR Commands, Queries, and Handlers), Domain (Domain Entities and Value Objects), and Infrastructure (Entity Framework Core 9 with MySQL and PdfPig parser).',
    },
    architectureComponents: [
      {
        name: 'ASP.NET Core Web API',
        role: {
          es: 'Punto de entrada REST, middlewares de autenticación JWT y documentación Swagger',
          en: 'REST entry point, JWT authentication middlewares, and Swagger documentation',
        },
        technology: '.NET 9 / ASP.NET Core',
        status: 'implemented',
      },
      {
        name: 'Application Mediator Layer',
        role: {
          es: 'Desacoplamiento de casos de uso mediante comandos y handlers independientes',
          en: 'Use-case decoupling using isolated command and query handlers',
        },
        technology: 'MediatR 9.0',
        status: 'implemented',
      },
      {
        name: 'PDF Extraction Engine',
        role: {
          es: 'Lectura programática y parseo de texto desde archivos curriculares PDF subidos',
          en: 'Programmatic parsing and text extraction from uploaded resume PDF files',
        },
        technology: 'UglyToad.PdfPig',
        status: 'implemented',
      },
      {
        name: 'Persistence Infrastructure',
        role: {
          es: 'Mapeo objeto-relacional y persistencia de ofertas, usuarios y mensajes',
          en: 'Object-relational mapping and persistence for job offers, users, and messages',
        },
        technology: 'Entity Framework Core 9 / MySQL',
        status: 'implemented',
      },
      {
        name: 'Semantic Matcher Module',
        role: {
          es: 'Módulo de matching vectorial entre perfiles y vacantes con embeddings (Planificado)',
          en: 'Vector embedding matching module between candidates and job posts (Planned)',
        },
        technology: 'ONNX Runtime / Sentence-Transformers',
        status: 'planned',
      },
    ],
    metrics: [
      {
        value: '.NET 9',
        label: { es: 'Framework Moderno', en: 'Modern Framework' },
        description: { es: 'C# 13 con compilación de alto rendimiento', en: 'C# 13 with high-performance compilation' },
        category: 'architecture',
        verifiedSource: 'Jobsy.sln target framework net9.0',
      },
      {
        value: '4 Contextos',
        label: { es: 'Bounded Contexts', en: 'Bounded Contexts' },
        description: { es: 'Límites DDD acotados (IAM, JobOffer, AI, Messages)', en: 'Domain-Driven Design bounded contexts' },
        category: 'architecture',
        verifiedSource: 'Estructura de carpetas en Application/ y Domain/',
      },
      {
        value: 'PdfPig',
        label: { es: 'Parseo de CVs en Memoria', en: 'In-Memory CV Parsing' },
        description: { es: 'Extracción programática de texto de PDFs sin servicios de OCR externos', en: 'Programmatic PDF parsing without external OCR services' },
        category: 'functional',
        verifiedSource: 'Dependencia UglyToad.PdfPig en JobsyAI.csproj',
      },
      {
        value: 'xUnit',
        label: { es: 'Suite Automatizada', en: 'Automated Suite' },
        description: { es: 'Pruebas unitarias de emisión de tokens JWT y autenticación', en: 'Unit tests covering JWT token generation & auth' },
        category: 'testing',
        verifiedSource: 'Proyecto de pruebas Jobsy.Tests',
      },
    ],
    keyDecisions: [
      {
        title: {
          es: 'ADR-1: Desacoplamiento de Casos de Uso con MediatR',
          en: 'ADR-1: Use-Case Decoupling with MediatR',
        },
        decision: {
          es: 'Los controladores HTTP delegan toda la lógica enviando comandos y consultas a MediatR.',
          en: 'HTTP controllers delegate all business workflows by sending commands and queries to MediatR.',
        },
        tradeoff: {
          es: 'Permite probar cada caso de uso de manera aislada sin depender de contextos HTTP.',
          en: 'Enables testing each use case in complete isolation from the HTTP web context.',
        },
      },
      {
        title: {
          es: 'ADR-2: Extracción Local de CVs con UglyToad.PdfPig',
          en: 'ADR-2: Local Resume Parsing with UglyToad.PdfPig',
        },
        decision: {
          es: 'Se adoptó una librería local C# en lugar de consumir servicios de OCR en la nube.',
          en: 'Adopted an embedded local C# library over third-party cloud OCR API subscriptions.',
        },
        tradeoff: {
          es: 'Cero costos de API y menor latencia en el procesamiento, limitado a PDFs con texto digital seleccionable.',
          en: 'Zero third-party API costs and lower latency, scoped to PDFs with selectable digital text streams.',
        },
      },
    ],
    challengesAndLearnings: {
      es: [
        'Manejo de esquemas heterogéneos y codificación de caracteres en currículums generados por plataformas variadas.',
        'Aislamiento de contextos de base de datos dentro de una misma solución de Entity Framework Core.',
      ],
      en: [
        'Handling heterogeneous formatting and character encodings across resumes generated by varied tools.',
        'Isolating distinct database context boundaries within a single Entity Framework Core solution.',
      ],
    },
    technologies: [
      '.NET 9',
      'C# 13',
      'ASP.NET Core',
      'EF Core',
      'MySQL',
      'MediatR',
      'xUnit',
      'Swagger',
    ],
    links: {
      github: 'https://github.com/RicardoCardenas/Jobsy-Backend',
    },
    relatedProjectSlugs: ['capital-cruise', 'onecoin-backend'],
  },
  {
    id: 'onecoin-backend',
    slug: 'onecoin-backend',
    title: 'OneCoin Backend — Red Social Corporativa',
    featured: false,
    order: 8,
    categories: ['software-engineering'],
    status: 'mvp-completed',
    statusLabel: {
      es: 'Backend Node.js Funcional',
      en: 'Node.js Functional Backend',
    },
    summary: {
      es: 'API REST en Node.js y Express con esquemas NoSQL en MongoDB, autenticación JWT y contenedor Docker para red social corporativa.',
      en: 'REST API in Node.js and Express with MongoDB NoSQL schemas, JWT authentication, and Docker container for corporate social networks.',
    },
    problem: {
      es: 'Las organizaciones requieren canales formales pero dinámicos de comunicación interna que fomenten la interacción entre equipos, permitan compartir publicaciones y faciliten la mensajería privada sin depender de plataformas externas no corporativas.',
      en: 'Organizations require dedicated internal communication channels for company announcements, peer interactions, and private messaging without external platforms.',
    },
    solution: {
      es: 'Backend modular en capas con Express, esquemas Mongoose para publicaciones y relaciones de amistad, autenticación JWT con bcryptjs, documentación interactiva en Swagger UI y contenedor Docker para despliegue uniforme.',
      en: 'Layered modular backend using Express, Mongoose schemas for posts and friend requests, JWT authentication with bcryptjs, interactive Swagger UI documentation, and Docker containerization.',
    },
    personalRole: {
      es: 'Backend Node.js Developer',
      en: 'Backend Node.js Developer',
    },
    contributions: {
      es: [
        'Modelado de colecciones NoSQL en MongoDB con Mongoose (User, Post, Comment, Message, FriendRequest).',
        'Implementación de middlewares de autenticación JWT y hashing seguro con bcryptjs.',
        'Contenerización con Dockerfile y documentación interactiva con Swagger OpenAPI 3.0.',
      ],
      en: [
        'MongoDB NoSQL collection modeling via Mongoose (User, Post, Comment, Message, FriendRequest).',
        'Implementation of JWT authentication middlewares and secure hashing with bcryptjs.',
        'Dockerfile containerization and interactive Swagger OpenAPI 3.0 documentation.',
      ],
    },
    implementedFeatures: {
      es: [
        'Registro y login con token JWT protegido y contraseñas hasheadas.',
        'Muro de publicaciones de contenido y comentarios en hilos.',
        'Gestión de solicitudes de amistad (envío, aceptación y rechazo).',
        'Mensajería directa entre colaboradores.',
        'Documentación interactiva disponible en /api-docs.',
        'Empaquetado reproducible en contenedor Docker.',
      ],
      en: [
        'User registration and login with protected JWT tokens and hashed passwords.',
        'Content wall posts and threaded comments.',
        'Friend request lifecycle management (send, accept, decline).',
        'Direct messaging between organization peers.',
        'Interactive documentation available at /api-docs.',
        'Reproducible packaging via Docker container.',
      ],
    },
    plannedFeatures: {
      es: [
        'Soporte de WebSockets (Socket.io) para mensajería instantánea y notificaciones en tiempo real.',
        'Frontend web cliente en React o Angular para consumir la API.',
      ],
      en: [
        'WebSockets (Socket.io) integration for real-time instant messaging and push notifications.',
        'Web client frontend in React or Angular consuming the API.',
      ],
    },
    architectureOverview: {
      es: 'Arquitectura en capas clásica sobre Express.js: controllers (lógica de negocio), routes (definición de endpoints), models (esquemas de Mongoose en MongoDB) y middleware (autenticación JWT y validación).',
      en: 'Layered architecture on Express.js: controllers (business logic), routes (endpoint routing), models (Mongoose schemas in MongoDB), and middleware (JWT authentication and validation).',
    },
    architectureComponents: [
      {
        name: 'Express.js Routing Server',
        role: {
          es: 'Enrutamiento HTTP, middlewares de seguridad, CORS y control de errores',
          en: 'HTTP routing, security middlewares, CORS configuration, and error handling',
        },
        technology: 'Node.js 20 / Express 4.22',
        status: 'implemented',
      },
      {
        name: 'NoSQL Document Store',
        role: {
          es: 'Almacenamiento de perfiles, publicaciones, comentarios y solicitudes de amistad',
          en: 'Storage for user profiles, wall posts, comments, and friend requests',
        },
        technology: 'MongoDB / Mongoose ODM 8.1',
        status: 'implemented',
      },
      {
        name: 'Security Middleware',
        role: {
          es: 'Validación de cabeceras de autorización JWT y verificación de contraseñas con bcryptjs',
          en: 'JWT authorization header verification and bcryptjs password hashing',
        },
        technology: 'jsonwebtoken / bcryptjs',
        status: 'implemented',
      },
      {
        name: 'Swagger API Docs',
        role: {
          es: 'Interfaz interactiva para exploración y prueba de endpoints en /api-docs',
          en: 'Interactive explorer interface for endpoint testing at /api-docs',
        },
        technology: 'swagger-ui-express 5.0 / OpenAPI 3.0',
        status: 'implemented',
      },
      {
        name: 'WebSocket Gateway',
        role: {
          es: 'Servidor de eventos bidireccionales en tiempo real para chat y notificaciones (Planificado)',
          en: 'Bidirectional real-time event server for chat and push notifications (Planned)',
        },
        technology: 'Socket.io / Redis adapter',
        status: 'planned',
      },
    ],
    metrics: [
      {
        value: 'Node.js 20',
        label: { es: 'Runtime Express', en: 'Express Runtime' },
        description: { es: 'API REST estructurada en capas con ES Modules', en: 'Layered REST API structured with ES Modules' },
        category: 'architecture',
        verifiedSource: 'package.json (Node.js engine & dependencies)',
      },
      {
        value: 'Mongoose',
        label: { es: 'Esquemas NoSQL', en: 'NoSQL Schemas' },
        description: { es: 'Modelado dinámico de publicaciones y relaciones de red', en: 'Dynamic modeling of posts and network connections' },
        category: 'architecture',
        verifiedSource: 'Carpetas models/User.js, models/Post.js, etc.',
      },
      {
        value: 'JWT + BCrypt',
        label: { es: 'Seguridad de Rutas', en: 'Route Security' },
        description: { es: 'Autenticación basada en tokens sin estado y contraseñas hasheadas', en: 'Stateless token authentication and hashed credentials' },
        category: 'functional',
        verifiedSource: 'Middlewares en middleware/auth.js',
      },
      {
        value: 'Swagger UI',
        label: { es: 'Contratos OpenAPI', en: 'OpenAPI Contracts' },
        description: { es: 'Documentación interactiva disponible en /api-docs', en: 'Interactive documentation available at /api-docs' },
        category: 'functional',
        verifiedSource: 'Endpoint /api-docs y swagger-ui-express',
      },
    ],
    keyDecisions: [
      {
        title: {
          es: 'ADR-1: Esquemas Flexibles en MongoDB con Mongoose',
          en: 'ADR-1: Flexible MongoDB Schemas with Mongoose',
        },
        decision: {
          es: 'Se eligió MongoDB para facilitar la evolución de formatos de publicaciones, comentarios y multimedia sin migraciones rígidas de esquema.',
          en: 'Selected MongoDB to accommodate evolving post formats, threaded comments, and media attachments without rigid migrations.',
        },
        tradeoff: {
          es: 'Permite iteración ágil en modelos sociales, exigiendo validación cuidadosa a nivel de aplicación en Mongoose.',
          en: 'Enables rapid iteration for social interaction models, requiring careful validation enforcement in Mongoose.',
        },
      },
      {
        title: {
          es: 'ADR-2: Documentación Interactiva Integrada en el Servidor',
          en: 'ADR-2: In-Server Interactive Swagger Documentation',
        },
        decision: {
          es: 'La documentación OpenAPI se sirve directamente en el endpoint /api-docs.',
          en: 'OpenAPI documentation is served directly at the /api-docs endpoint.',
        },
        tradeoff: {
          es: 'Facilita la prueba inmediata de endpoints por parte de desarrolladores frontend sin herramientas externas.',
          en: 'Enables immediate endpoint testing by frontend developers without external tooling.',
        },
      },
    ],
    challengesAndLearnings: {
      es: [
        'Modelado de relaciones bidireccionales de amistad en esquemas NoSQL asegurando consistencia sin transacciones complejas.',
        'Manejo de referencias pobladas (populate) en Mongoose para consultas anidadas de comentarios.',
      ],
      en: [
        'Modeling bidirectional friend relationships in NoSQL document schemas while maintaining consistency.',
        'Managing Mongoose population references across nested comment hierarchies without query performance degradation.',
      ],
    },
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Docker',
      'Swagger',
    ],
    links: {
      github: 'https://github.com/RicardoCardenas/OneCoin-Backend',
    },
    relatedProjectSlugs: ['jobsy-backend', 'capital-cruise'],
  },
];
