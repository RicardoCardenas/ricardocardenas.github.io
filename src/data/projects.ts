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
      es: 'Las PYMES comerciales operan con datos fragmentados en hojas de cálculo y sistemas aislados. Los LLMs genéricos sufren alucinaciones y no ejecutan cálculos autoritativos.',
      en: 'Commercial SMEs operate with fragmented data in spreadsheets and isolated systems. Generic LLMs suffer hallucinations and cannot execute authoritative computations.',
    },
    solution: {
      es: 'Monolito modular con FastAPI que combina consultas SQL autoritativas en PostgreSQL con proyecciones de grafos en Neo4j y orquestación autónoma mediante LangGraph.',
      en: 'Modular monolith using FastAPI combining authoritative SQL queries on PostgreSQL with graph projections in Neo4j and autonomous orchestration via LangGraph.',
    },
    personalRole: {
      es: 'Arquitecto y Desarrollador Principal (Proyecto de Tesis UPC)',
      en: 'Lead Architect & Developer (UPC Thesis Research Project)',
    },
    contributions: {
      es: [
        'Diseño de arquitectura DDD con 7 Bounded Contexts y aislamiento multiorganización.',
        'Implementación de base de datos relacional con RLS y proyección hacia grafo Neo4j.',
        'Configuración de infraestructura en Docker Compose y suite de pruebas unitarias en Pytest.',
      ],
      en: [
        'DDD architecture design with 7 Bounded Contexts and strict multi-tenant isolation.',
        'Implementation of authoritative relational storage with RLS and Neo4j graph projections.',
        'Docker Compose infrastructure setup and unit test suite with Pytest.',
      ],
    },
    implementedFeatures: {
      es: [
        'Base técnica del backend FastAPI con health checks verificados.',
        'Monolito modular con 7 Bounded Contexts DDD/CQRS.',
        'Persistencia dual con PostgreSQL (pgvector) y Neo4j 5.',
        'Cola asíncrona de tareas con Celery y broker Redis.',
        'Frontend desacoplado en React 19, TypeScript y Tailwind CSS.',
        'Entorno contenerizado multi-servicio en Docker Compose y Nginx.',
        'Suite de pruebas con Pytest y linter estricto con Ruff.',
      ],
      en: [
        'FastAPI backend baseline with verified health check endpoints.',
        'Modular monolith structured with 7 DDD/CQRS Bounded Contexts.',
        'Dual persistence with PostgreSQL (pgvector) and Neo4j 5.',
        'Asynchronous task processing with Celery and Redis broker.',
        'Decoupled frontend built with React 19, TypeScript, and Tailwind CSS.',
        'Multi-service containerized environment via Docker Compose & Nginx.',
        'Pytest automated testing suite and strict Ruff code styling.',
      ],
    },
    plannedFeatures: {
      es: [
        'Fase 1: IAM y aislamiento multiorganización con RLS en producción.',
        'Fase 2: Modelo canónico e ingesta continua de fuentes heterogéneas.',
        'Fase 3: Orquestación multi-agente con LangGraph y herramientas seguras.',
      ],
      en: [
        'Phase 1: Multi-tenant IAM and production Row-Level Security (RLS).',
        'Phase 2: Canonical schema modeling and heterogeneous data ingestion.',
        'Phase 3: Multi-agent orchestration via LangGraph with sandboxed tools.',
      ],
    },
    technologies: [
      'Python 3.12',
      'FastAPI',
      'PostgreSQL 16',
      'pgvector',
      'Neo4j 5',
      'Redis',
      'Celery',
      'Docker Compose',
      'React 19',
      'TypeScript',
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
      es: 'La simulación de créditos vehiculares presenta alta fricción operativa debido a variaciones en comisiones, seguros, modalidades de compra inteligente y cálculo de TCEA.',
      en: 'Vehicle loan simulations suffer high friction due to complex commissions, insurances, balloon payment options, and non-transparent TCEA calculations.',
    },
    solution: {
      es: 'Motor financiero bimoneda en Spring Boot con migración Flyway y frontend reactivo en Vue 3 que modela cuotas regulares, balloon, periodos de gracia y métricas VAN/TIR.',
      en: 'Bimonetary financial engine in Spring Boot with Flyway migrations and reactive Vue 3 frontend modeling regular installments, balloon payments, grace periods, and NPV/IRR.',
    },
    personalRole: {
      es: 'Ingeniero de Software Backend & Arquitectura',
      en: 'Backend Software & Architecture Engineer',
    },
    contributions: {
      es: [
        'Modelado matemático de amortización francesa y Compra Inteligente.',
        'Desarrollo de servicios REST con Spring Boot 3 y persistencia PostgreSQL.',
        'Versionado de base de datos con Flyway y contratos interactivos con OpenAPI.',
      ],
      en: [
        'Mathematical modeling of French amortization and Smart Purchase balloon loans.',
        'Development of REST services with Spring Boot 3 and PostgreSQL persistence.',
        'Database schema versioning via Flyway and interactive OpenAPI contracts.',
      ],
    },
    implementedFeatures: {
      es: [
        'Autenticación JWT y control de acceso por roles.',
        'Motor de conversión de tasas TEA a TEM y cálculo de cronogramas.',
        'Gestión de expedientes de clientes y detalles de financiamiento vehicular.',
        'Contenerización con Docker y pruebas unitarias.',
      ],
      en: [
        'JWT authentication and role-based access control.',
        'Rate conversion engine from TEA to TEM and schedule structuring.',
        'Client management workflows and vehicle financing details.',
        'Docker containerization and unit testing suite.',
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
      es: 'Las aplicaciones infantiles suelen carecer de interactividad física y presentan riesgos de seguridad digital cuando los niños acceden a configuraciones de cuenta.',
      en: 'Children apps often lack physical interactivity and carry digital safety risks when children inadvertently navigate into account settings.',
    },
    solution: {
      es: 'Arquitectura Feature-First Clean en Flutter que integra proyección AR con OpenGL ES nativo, audio FLAC y confinamiento estricto en rutas protegidas.',
      en: 'Feature-First Clean Architecture in Flutter integrating native OpenGL ES AR projection, background FLAC playback, and protected child confinement.',
    },
    personalRole: {
      es: 'Desarrollador Móvil Flutter & QA Lead',
      en: 'Mobile Flutter Developer & QA Lead',
    },
    contributions: {
      es: [
        'Implementación del sistema de navegación segura y confinamiento con GoRouter.',
        'Desacoplamiento de datos simulados y backend real con arquitectura limpia.',
        'Autoría y validación de la suite de 351 pruebas automatizadas (100% aprobadas).',
      ],
      en: [
        'Implementation of safe child navigation confinement using GoRouter guards.',
        'Clean decoupling of mock and live data sources via repository patterns.',
        'Authoring and verification of the 351 automated test suite (100% passing).',
      ],
    },
    implementedFeatures: {
      es: [
        'Lector inmersivo ARCore con detección de superficies reales.',
        'Entorno Modo Niño resistente a gestos de retroceso.',
        'Mini-reproductor interactivo flotante con soporte FLAC.',
        'Almacenamiento seguro con Android KeyStore.',
      ],
      en: [
        'Immersive ARCore surface reader on horizontal planes.',
        'Kids Mode confinement resistant to gesture navigation escapes.',
        'Floating interactive mini-player supporting FLAC audio.',
        'Secure hardware-backed storage via Android KeyStore.',
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
      es: 'El cuidado continuo de adultos mayores exige monitoreo constante de signos vitales sin saturar la red ni retrasar la atención ante anomalías biomédicas.',
      en: 'Continuous senior healthcare requires steady vital signs telemetry without network congestion or latency during critical biometric anomalies.',
    },
    solution: {
      es: 'Parche IoT simulado que procesa en Edge (Python), transmite vía MQTT Mosquitto (Fog) y consolida microservicios Spring Boot con frontend en Angular 20.',
      en: 'Simulated IoT patch with Edge processing (Python), MQTT Mosquitto broker (Fog), and Spring Boot cloud microservices consumed by an Angular 20 dashboard.',
    },
    personalRole: {
      es: 'Desarrollador Backend de Microservicios & IoT Integration',
      en: 'Backend Microservices & IoT Integration Developer',
    },
    contributions: {
      es: [
        'Desarrollo de microservicios en Spring Boot (iam, clinical, devices, relatives).',
        'Integración de ingesta MQTT de alta frecuencia y broker ActiveMQ.',
        'Contenerización global con Docker Compose y modelado C4.',
      ],
      en: [
        'Spring Boot microservices development (iam, clinical, devices, relatives).',
        'High-frequency MQTT telemetry ingestion and ActiveMQ broker integration.',
        'Multi-service Docker Compose containerization and C4 architecture modeling.',
      ],
    },
    implementedFeatures: {
      es: [
        'Pipeline de telemetría IoT con filtrado Edge de anomalías.',
        'API Gateway centralizado con validación de tokens JWT.',
        'Bases de datos MySQL independientes por microservicio.',
        'Visualización clínica en tiempo real.',
      ],
      en: [
        'IoT telemetry pipeline with edge threshold anomaly detection.',
        'Centralized API Gateway with unified JWT validation.',
        'Independent MySQL databases per microservice boundary.',
        'Real-time clinical dashboard visualization.',
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
      es: 'Una operación de comercio electrónico con más de 7 años de transacciones carecía de centralización analítica para detectar abandono de carritos y rentabilidad.',
      en: 'A high-volume eCommerce operation with 7+ years of transactions lacked centralized analytics to diagnose cart abandonment and product margins.',
    },
    solution: {
      es: 'Pipeline automatizado diario en BigQuery con capas Staging, Aggregations y CLV, modelos de Machine Learning (LogReg, ARIMA, K-Means) y Looker Studio.',
      en: 'Daily scheduled BigQuery pipeline with Staging, Aggregations, and CLV layers, BigQuery ML models (LogReg, ARIMA, K-Means), and Looker Studio dashboards.',
    },
    personalRole: {
      es: 'Data Engineer & Analytics Specialist',
      en: 'Data Engineer & Analytics Specialist',
    },
    contributions: {
      es: [
        'Diseño y programación del pipeline diario a las 6:00 AM en BigQuery.',
        'Entrenamiento y validación de modelos BigQuery ML (predicción de churn y ventas).',
        'Construcción de dashboards de embudo y rentabilidad en Looker Studio.',
      ],
      en: [
        'Scheduled daily 6:00 AM data pipeline architecture in BigQuery.',
        'Training and evaluation of BigQuery ML models (churn prediction and revenue forecast).',
        'Conversion funnel and profitability dashboard design in Looker Studio.',
      ],
    },
    implementedFeatures: {
      es: [
        'Procesamiento histórico de más de 2.4 millones de eventos web y 125,000 pedidos.',
        'Detección de cuello de botella en embudo (250k sesiones abandonadas).',
        'Modelo predictivo de churn con 82.8% de precisión.',
        'Pronóstico de ingresos a 30 días con ARIMA_PLUS.',
      ],
      en: [
        'Historical processing of over 2.4 million web events and 125,000 orders.',
        'Checkout funnel drop-off bottleneck diagnosis (~250k abandoned sessions).',
        'Churn prediction model achieving 82.8% precision.',
        '30-day revenue forecasting horizon with ARIMA_PLUS.',
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
      es: 'La deserción de clientes reduce los ingresos recurrentes (MRR) y genera altos costos de readquisición si no se detectan patrones tempranos de abandono.',
      en: 'Customer churn diminishes monthly recurring revenue (MRR) and drives up re-acquisition costs without early behavioral pattern detection.',
    },
    solution: {
      es: 'Pipeline en Python con consultas analíticas en memoria con DuckDB, segmentación de riesgo con K-Means y reporte interactivo en Power BI con medidas DAX.',
      en: 'Python pipeline utilizing in-memory DuckDB analytical queries, Scikit-Learn K-Means risk clustering, and interactive Power BI DAX reports.',
    },
    personalRole: {
      es: 'Data Analyst & BI Developer',
      en: 'Data Analyst & BI Developer',
    },
    contributions: {
      es: [
        'Limpieza y tratamiento de datos transaccionales (+7,000 registros) en Python.',
        'Consultas analíticas de alto rendimiento con DuckDB.',
        'Modelado semántico y medidas DAX en Power BI.',
      ],
      en: [
        'Data wrangling and feature preparation on 7,000+ records in Python.',
        'High-performance analytical in-memory queries with DuckDB.',
        'Semantic data modeling and custom DAX measures in Power BI.',
      ],
    },
    implementedFeatures: {
      es: [
        'Identificación de churn global de 26.54% y cohorte crítica 0-12 meses (55.48% de bajas).',
        'Cuantificación de $120,847.10 de MRR en riesgo por contratos mensuales.',
        'Cluster K-Means de alto riesgo con antigüedad promedio de 13 meses.',
        'Archivo de informe interactivo de Power BI (.pbix) con medidas DAX.',
      ],
      en: [
        'Global churn identification (26.54%) and 0-12 month critical cohort isolation (55.48% churn).',
        'Quantification of $120,847.10 in monthly MRR risk for month-to-month contracts.',
        'K-Means high-risk cluster profiling (13-month average tenure).',
        'Interactive Power BI report (.pbix) with custom DAX KPIs.',
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
      es: 'Los procesos de selección de personal presentan sobrecarga operativa en la revisión manual de currículums y falta de integración entre vacantes y mensajería.',
      en: 'Talent recruitment workflows face administrative friction due to manual resume reviews and disconnected job opening channels.',
    },
    solution: {
      es: 'Arquitectura modular en .NET 9 organizada por Bounded Contexts con extracción de texto de CVs (PdfPig), controladores REST y pruebas xUnit.',
      en: 'Modular .NET 9 architecture organized by Bounded Contexts with PDF text extraction (PdfPig), REST controllers, and xUnit test suites.',
    },
    personalRole: {
      es: 'Backend .NET Developer & Software Architect',
      en: 'Backend .NET Developer & Software Architect',
    },
    contributions: {
      es: [
        'Diseño de contextos DDD (IAM, JobOfferManagement, JobsyAI, Messages).',
        'Configuración de persistencia con Entity Framework Core 9 y MySQL.',
        'Implementación de pruebas unitarias con xUnit para autenticación y JWT.',
      ],
      en: [
        'DDD context modeling (IAM, JobOfferManagement, JobsyAI, Messages).',
        'Entity Framework Core 9 and MySQL persistence architecture.',
        'xUnit unit test implementation for authentication and JWT tokens.',
      ],
    },
    implementedFeatures: {
      es: [
        'Contexto IAM con emisión y validación de tokens JWT.',
        'Extracción programática de texto desde currículums en PDF con UglyToad.PdfPig.',
        'Desacoplamiento de lógica con patrón Mediator (MediatR).',
        'Documentación interactiva con Swagger OpenAPI 3.0.',
      ],
      en: [
        'IAM context with JWT issuance and security middleware validation.',
        'Programmatic resume text extraction from PDFs using UglyToad.PdfPig.',
        'Mediator pattern command decoupling via MediatR.',
        'Interactive documentation via Swagger OpenAPI 3.0.',
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
      es: 'Las organizaciones necesitan canales corporativos ágiles para publicaciones, interacción entre equipos y mensajería privada sin depender de plataformas externas.',
      en: 'Organizations require dedicated internal communication channels for posts, peer interactions, and private messaging without external platforms.',
    },
    solution: {
      es: 'Backend modular en capas con Express, esquemas Mongoose para publicaciones y relaciones de amistad, y documentación interactiva con Swagger UI.',
      en: 'Layered modular backend using Express, Mongoose schemas for posts and friend requests, and interactive Swagger UI documentation.',
    },
    personalRole: {
      es: 'Backend Node.js Developer',
      en: 'Backend Node.js Developer',
    },
    contributions: {
      es: [
        'Modelado de colecciones NoSQL en MongoDB con Mongoose (User, Post, Comment, Message).',
        'Implementación de middlewares de autenticación JWT y hashing con bcryptjs.',
        'Contenerización con Dockerfile y documentación con Swagger OpenAPI.',
      ],
      en: [
        'MongoDB NoSQL collection modeling via Mongoose (User, Post, Comment, Message).',
        'Implementation of JWT authentication middlewares and bcryptjs hashing.',
        'Dockerfile containerization and Swagger OpenAPI documentation.',
      ],
    },
    implementedFeatures: {
      es: [
        'Registro y login con token JWT protegido.',
        'Publicaciones de contenido y comentarios asociados.',
        'Gestión de solicitudes de amistad y mensajería directa.',
        'Documentación interactiva en /api-docs.',
      ],
      en: [
        'User registration and login with protected JWT tokens.',
        'Content wall posts and threaded comments.',
        'Friend request workflows and direct peer messaging.',
        'Interactive documentation on /api-docs.',
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
