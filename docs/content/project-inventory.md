# Inventario Exhaustivo y Verificado de Proyectos Profesionales

**Documento:** CONTENT-INV-001  
**Versión:** 2.0.0 (Actualizada con auditoría remota de repositorios GitHub)  
**Fecha:** 15 de noviembre de 2026  
**Auditor Principal:** Senior Software Architect & Technical Documentation Engineer  
**Fuentes de Verificación:** Repositorios oficiales remotos en `github.com/RicardoCardenas`, repositorios locales en `C:\Ricardo\GithubDesktop` y proyecto de tesis en `C:\Ricardo\ProyectoTesis\Nexo`.

---

## 1. Metodología de Inspección y Verificación

Cada proyecto ha sido auditado mediante:
1. **Inspección remota de Git:** Verificación de URLs en `github.com/RicardoCardenas`, resolución de rama principal (`main`), lectura de `README.md` más reciente, inspección de dependencias (`pom.xml`, `package.json`, `.csproj`, `requirements.txt`, `pubspec.yaml`, `docker-compose.yml`) y conteo de archivos.
2. **Comparación local vs remota:** Verificación de estado de trabajo en clones existentes (`git fetch` no destructivo), validación de commits y documentación de discrepancias de sincronización.
3. **Tratamiento especial de confidencialidad (Nexo):** Tratado como proyecto académico de tesis en desarrollo sin divulgación de código fuente, credenciales ni enlaces a repositorios mientras permanezca privado.

---

## 2. Catálogo Detallado de Proyectos Verificados

---

### Proyecto 1: Capital Cruise — Plataforma de Simulación y Gestión de Créditos Vehiculares

- **Nombre Oficial:** Capital Cruise
- **Repositorio Oficial:** [https://github.com/RicardoCardenas/Capital-Cruise](https://github.com/RicardoCardenas/Capital-Cruise)
- **Rama Principal:** `main` (Último commit remoto: `a8246321cd3482c282ea8ed43a3bb2967cf0e5a7`)
- **Copia Local:** `C:\Ricardo\GithubDesktop\Capital-Cruise` (HEAD local: `c82c3f41db04f517e4907301501d3c623d9bf5f0`, rama `main`).
  - *Diferencia local vs remota:* La versión remota cuenta con una actualización extensa del `README.md` (+618 líneas de especificación matemática y diagramas). La copia local contiene 5 archivos de configuración de entorno pendientes de commit (`application*.properties`, `.env.*`). No se realizaron modificaciones destructivas.
- **Categorías:** `Software Engineering`
- **Estado Actual:** MVP Funcional y Arquitectura Empresarial Verificada.
- **Problema de Negocio:**
  En el mercado automotriz peruano, la simulación y estructuración de créditos vehiculares presenta alta fricción operativa debido a la dispersión de fórmulas financieras, variaciones en comisiones/seguros y falta de transparencia en la determinación de la Tasa de Costo Efectivo Anual (TCEA), la Tasa Efectiva Mensual (TEM) y la evaluación de rentabilidad (VAN y TIR) para el comprador.
- **Solución Implementada:**
  Plataforma web empresarial bimoneda (PEN/USD) que estandariza el cálculo financiero bajo el **método francés vencido ordinario**, incorporando la modalidad de **Compra Inteligente** (financiamiento con cuota final elevada o *balloon*), periodos de gracia parcial o total, cronogramas de amortización detallados y gestión de expedientes de clientes.
- **Stack Tecnológico Verificado:**
  - *Backend:* Java 21 LTS, Spring Boot 3.5.14, Spring Data JPA, Spring Security, Spring Validation, Lombok, SpringDoc OpenAPI 3.0.
  - *Base de Datos & Migraciones:* PostgreSQL 15+ en producción/runtime, Flyway para versionado riguroso del esquema relacional, H2 Database para pruebas en memoria.
  - *Frontend:* Vue 3.5.38 (Composition API), Vite 8.0.16, Vue Router, JavaScript modular (ESM).
  - *Contenerización:* Dockerfile optimizado para el backend y frontend.
- **Arquitectura:**
  Arquitectura desacoplada en dos subsistemas (`backend/` y `frontend-web/`). El backend aplica Domain-Driven Design (DDD) con Bounded Contexts modulares (`iam`, `clients`, `loans`, `vehicles`, `public`).
- **Funcionalidades Implementadas:**
  - Autenticación JWT y control de acceso basado en roles.
  - Motor de cálculo financiero con conversión de TEA a TEM y estructuración de cuotas regulares y balón.
  - Generación de cronogramas con periodos de gracia total (capitalización de intereses) y gracia parcial (pago de intereses devengados).
  - Migraciones de base de datos automatizadas con Flyway.
  - Documentación interactiva de endpoints con OpenAPI/Swagger UI.
- **Funcionalidades Planificadas / Futuras:**
  - Integración directa con burós de crédito en tiempo real.
  - Exportación nativa del cronograma a PDF/Excel con firma digital.
- **Contribuciones Personales Confirmadas:**
  - Diseño y modelado del motor de cálculo financiero y cronogramas de amortización en Spring Boot.
  - Configuración de migraciones SQL versionadas mediante Flyway.
  - Documentación técnica y contratos OpenAPI.
- **Recursos Disponibles:**
  - Código fuente completo en GitHub (518 archivos).
  - Documentación técnica exhaustiva con formulación matemática completa en README.
- **Información Pendiente:**
  - No cuenta con demo pública en la nube; opera en entorno local contenerizado.

---

### Proyecto 2: TaleStar Mobile — Ecosistema Móvil Seguro con Realidad Aumentada y Audio Lossless

- **Nombre Oficial:** TaleStar Mobile
- **Repositorio Oficial:** [https://github.com/RicardoCardenas/TaleStar-Mobile](https://github.com/RicardoCardenas/TaleStar-Mobile)
- **Rama Principal:** `main` (Último commit remoto: `cf243a07273741f13a7dd5a511827cd49aa9f64c`)
- **Copia Local:** `C:\Ricardo\GithubDesktop\TaleStar-backend\frontend-mobile` (Clon vinculado al origen de organización `Tale-Star/frontend-mobile.git` en commit `608f48d7c8f2e9c13fdf1746df82dc22131758e1`).
  - *Diferencia local vs remota:* El repositorio personal en `github.com/RicardoCardenas/TaleStar-Mobile` contiene la consolidación de la aplicación cliente móvil con suite de pruebas completa y documentación maestra.
- **Categorías:** `Mobile`, `Software Engineering`
- **Estado Actual:** MVP Finalizado con **351 pruebas automatizadas aprobadas (100% passing)** y 0 incidencias de linter.
- **Problema de Negocio:**
  Las aplicaciones infantiles suelen presentar riesgos de seguridad digital (acceso accidental a configuraciones de cuenta o compras), interfaces sobrecargadas que rompen el escalado en pantallas diversas y experiencias estáticas que carecen de interactividad tridimensional inmersiva.
- **Solución Implementada:**
  Aplicación móvil con arquitectura limpia organizada por características (**Feature-First Clean Architecture**) que combina lectura de cuentos ilustrados, proyección física en **Realidad Aumentada (Google ARCore)** sobre superficies reales con shaders nativos OpenGL ES 2.0, reproductor de audio FLAC en segundo plano y confinamiento estricto en "Modo Niño" protegido por PIN parental de 4 dígitos.
- **Stack Tecnológico Verificado:**
  - *Framework & Lenguaje:* Flutter 3.41.9 (canal stable), Dart 3.11.5 con tipado estricto (*sound null safety*).
  - *Gestión de Estado:* BLoC / Cubit (`flutter_bloc: ^9.0.0`).
  - *Inyección de Dependencias:* GetIt 8.3.0 (Service Locator).
  - *Navegación & Enrutamiento:* GoRouter 14.8.1 con interceptores reactivos y `PopScope`.
  - *Realidad Aumentada:* Google ARCore 1.47.0 (`com.google.ar:core`) con PlatformView nativo en Kotlin y OpenGL ES 2.0.
  - *Seguridad & Persistencia:* Flutter Secure Storage 9.2.4 respaldado por Android KeyStore.
- **Arquitectura:**
  Feature-First Clean Architecture con separación estricta en tres capas: Presentation (`Screens`, `Widgets`, `BLoC`), Domain (`Entities`, `Repository Contracts`, código Dart puro) y Data (`Data Sources`, `Models`, `DTOs`).
- **Funcionalidades Implementadas:**
  - Lector AR tridimensional con detección de planos horizontales y renderizado de personajes.
  - Confinamiento "Modo Niño" a prueba de escapes gestuales y reinicios de app.
  - Reproductor flotante de audio FLAC de alta fidelidad.
  - Desacoplamiento arquitectónico mediante switches de entorno (`USE_MOCK_DATA` vs API real).
  - 351 pruebas unitarias y de widgets ejecutadas y verificadas.
- **Funcionalidades Planificadas / Futuras:**
  - Soporte ARKit para iOS en hardware físico verificado.
  - Descarga offline de paquetes multimedia interactivos en almacenamiento cifrado.
- **Contribuciones Personales Confirmadas:**
  - Implementación de la capa de seguridad y enrutamiento con guards en `GoRouter`.
  - Arquitectura reactiva con BLoC y desacoplamiento de fuentes de datos.
  - Construcción y mantenimiento de la suite de 351 pruebas automatizadas.
- **Recursos Disponibles:**
  - Repositorio público completo en GitHub (507 archivos).
  - Documentación técnica detallada de arquitectura y seguridad.
- **Información Pendiente:**
  - No está publicada en Google Play Store (distribución como APK / MVP de desarrollo).

---

### Proyecto 3: MediTrack — Plataforma de Monitoreo Remoto de Salud y Telemetría IoT (Edge-Fog-Cloud)

- **Nombre Oficial:** MediTrack
- **Repositorio Oficial:** [https://github.com/RicardoCardenas/Meditrack](https://github.com/RicardoCardenas/Meditrack)
- **Rama Principal:** `main` (Último commit remoto: `3c235f976572ac75e9c98c4c90ada60c3abcfb2a`)
- **Copia Local:** No se localizó copia local en la carpeta principal de trabajo; el proyecto reside de forma completa y autoritativa en el repositorio oficial de GitHub.
- **Categorías:** `Software Engineering`
- **Estado Actual:** Arquitectura de microservicios distribuida completa y verificada con Docker Compose.
- **Problema de Negocio:**
  El envejecimiento poblacional exige monitoreo constante de signos vitales en adultos mayores para prevenir crisis médicas. Los sistemas centralizados tradicionales introducen latencia en la detección de anomalías y sobrecargan la red con transmisiones continuas de telemetría sin procesar.
- **Solución Implementada:**
  Plataforma médica distribuida bajo el paradigma **Edge-Fog-Cloud**. Un parche IoT inteligente recopila señales biomédicas (frecuencia cardíaca, temperatura, saturación $SpO_2$ y presión arterial), procesa localmente en el nodo **Edge** (Python) para detección inmediata de transgresiones de umbrales, transmite vía protocolo ligero **MQTT/Mosquitto (Fog)** y consolida la persistencia e historial en una nube de microservicios en **Spring Boot**, consumida por un dashboard web en **Angular 20**.
- **Stack Tecnológico Verificado:**
  - *Backend Microservicios:* Java 21 LTS, Spring Boot 3.3.0 / 4.0.6, Spring Cloud Gateway, Spring Security JWT, JPA/Hibernate.
  - *Bases de Datos:* MySQL 8.0 con esquemas independientes por contexto.
  - *Mensajería & Telemetría:* Eclipse Mosquitto (MQTT Broker en puertos 1883/9001), Apache ActiveMQ (JMS Broker en puerto 61616).
  - *Edge / Simulación:* Python 3.11 con generadores de señales biomédicas sintéticas y filtros de umbrales.
  - *Frontend:* Angular 20 con gráficos clínicos en tiempo real.
  - *Infraestructura:* Docker, Dockerfiles multi-stage y orquestación integral en `docker-compose.yml`.
- **Arquitectura:**
  Arquitectura C4 (Contexto, Contenedores y Pipeline de Telemetría) organizada en 7 microservicios desacoplados:
  1. `gateway`: API Gateway unificado (puerto 8080).
  2. `iam`: Gestión de usuarios, roles clínicos y JWT (puerto 8081).
  3. `organization`: Gestión de residencias geriátricas y cuidadores (puerto 8082).
  4. `clinical`: Registro histórico de signos vitales y umbrales (puerto 8083).
  5. `devices`: Registro de parches IoT, firmware y estado de enlace (puerto 8084).
  6. `relatives`: Portal de familiares y alertas push (puerto 8085).
  7. `edge`: Nodo de telemetría IoT.
- **Funcionalidades Implementadas:**
  - Ingesta de alta frecuencia mediante broker MQTT.
  - Filtro Edge para descarte de datos estables y priorización de eventos de alarma.
  - Enrutamiento y validación JWT centralizada en el API Gateway.
  - Esquema desacoplado con bases de datos independientes por microservicio.
- **Funcionalidades Planificadas / Futuras:**
  - Integración con dispositivos médicos certificados vía Bluetooth Low Energy (BLE).
  - Algoritmos predictivos de descompensación clínica temprana.
- **Contribuciones Personales Confirmadas:**
  - Desarrollo de microservicios en Spring Boot y diseño del API Gateway.
  - Integración del pipeline de telemetría MQTT y procesamiento de mensajes biomédicos.
  - Modelado de arquitectura C4 y contenerización con Docker Compose.
- **Recursos Disponibles:**
  - Repositorio completo en GitHub (1,519 archivos).
  - Diagramas C4 detallados en ASCII/Mermaid en el README principal.
- **Información Pendiente:**
  - Despliegue en cluster Kubernetes en la nube (actualmente contenerizado en Docker Compose local).

---

### Proyecto 4: Customer Churn & Behavioral Analytics (EDA, K-Means & Power BI)

- **Nombre Oficial:** Customer Churn & Behavioral Analytics
- **Repositorio Oficial:** [https://github.com/RicardoCardenas/Customer-Churn-Analytics](https://github.com/RicardoCardenas/Customer-Churn-Analytics)
- **Rama Principal:** `main` (Commit: `f41704c3038ae5f7ed6e3787f2a267283129991f`)
- **Copia Local:** `C:\Ricardo\GithubDesktop\Customer-Churn-Analytics` (Sincronizada al 100% con `origin/main`, árbol de trabajo limpio).
- **Categorías:** `Data & AI`
- **Estado Actual:** Análisis Exploratorio de Datos (EDA), modelo de segmentación no supervisada y Dashboard Ejecutivo completados.
- **Problema de Negocio:**
  En las empresas de suscripción de telecomunicaciones, la deserción de clientes (*customer churn*) erosiona los ingresos recurrentes mensuales (MRR). Identificar de forma reactiva las bajas genera altos costos de readquisición, mientras que la falta de segmentación impide enfocar presupuestos de retención en clientes con alto valor y alto riesgo.
- **Solución Implementada:**
  Pipeline analítico en Python que procesa y cura un dataset transaccional (+7,000 registros), ejecuta consultas analíticas en memoria mediante **DuckDB**, entrena un modelo de segmentación no supervisada con **K-Means Clustering (Scikit-Learn)** y consolida los hallazgos en un **Dashboard Ejecutivo interactivo en Power BI** con medidas DAX avanzadas.
- **Stack Tecnológico Verificado:**
  - *Data Wrangling & Visualización:* Python, Pandas, NumPy, Matplotlib, Seaborn.
  - *Query Engine Analítico:* DuckDB (consultas SQL de alto rendimiento sobre DataFrames).
  - *Machine Learning:* Scikit-Learn (estandarización con `StandardScaler`, K-Means Clustering, método del codo).
  - *Business Intelligence:* Power BI Desktop, DAX (cálculo de MRR en riesgo, tasas de deserción por cohorte).
  - *Entorno:* Jupyter Notebooks estructurados (`01_tranforming_data_csv.ipynb`, `02_eda_and_segmentation.ipynb`).
- **Hallazgos Técnicos y Métricas Reales:**
  - Tasa de churn global identificada: **26.54%**.
  - Contratos mensuales (*Month-to-month*): Tasa crítica de abandono del **42.71%**, concentrando **$120,847.10 de MRR perdido**.
  - Método de pago más vulnerable: *Electronic check* con **45.29%** de abandono.
  - Cohorte más sensible: Clientes de **0 a 12 meses** representan el **55.48%** del total de clientes perdidos.
  - Perfil K-Means de alto riesgo: Clientes con 13.25 meses de antigüedad promedio y cargos mensuales de $74.95 (tasa de churn del 47.08%).
- **Funcionalidades Implementadas:**
  - Pipeline de transformación y generación de dataset enriquecido (`data/processed/telco_churn_enriched.csv`).
  - Reporte semántico ejecutable en Power BI (`dashboard/churn_executive_overview.pbix`).
- **Contribuciones Personales Confirmadas:**
  - Limpieza, estandarización y modelado de datos en Python.
  - Consultas analíticas con DuckDB y modelado K-Means.
  - Diseño del dashboard ejecutivo y medidas DAX en Power BI.
- **Recursos Disponibles:**
  - Repositorio público completo en GitHub (14 archivos).
  - Archivo de informe `.pbix` y captura visual previa en `dashboard/dashboard_preview.png`.
- **Información Pendiente:**
  - Publicación del informe en Power BI Service / Web embedding.

---

### Proyecto 5: TheLook eCommerce — Pipeline Analítico, Machine Learning y BigQuery

- **Nombre Oficial:** TheLook eCommerce Data Pipeline
- **Repositorio Oficial:** [https://github.com/RicardoCardenas/E-commerce-Data-pipeline](https://github.com/RicardoCardenas/E-commerce-Data-pipeline)
- **Rama Principal:** `main` (Commit: `ad33366051bfb1f438ec5f00c4949809d4f2c296`)
- **Copia Local:** `C:\Ricardo\GithubDesktop\E-commerce-Data-pipeline` (Sincronizada al 100% con `origin/main`, árbol de trabajo limpio).
- **Categorías:** `Data & AI`
- **Estado Actual:** Pipeline en producción programado en GCP con modelos de Machine Learning y dashboards operativos.
- **Problema de Negocio:**
  Una plataforma de comercio electrónico de gran escala con más de 7 años de operaciones acumulaba millones de interacciones sin un ecosistema de datos centralizado, impidiendo detectar cuellos de botella en el embudo de compras, productos de baja rentabilidad o clientes en riesgo de inactividad.
- **Solución Implementada:**
  Ecosistema integral de ingeniería de datos en **Google Cloud Platform (GCP)** que procesa más de 7 años y 3 meses de histórico (2019-2026) con más de **2.4 millones de eventos web y 125,000 pedidos**. El flujo ejecuta transformaciones automáticas diarias en **BigQuery**, entrena modelos predictivos mediante **BigQuery ML** y expone métricas comerciales en **Looker Studio**.
- **Stack Tecnológico Verificado:**
  - *Cloud Data Warehouse:* Google Cloud Platform (GCP), Google BigQuery (región `us-central1`).
  - *Orquestación & Transformación:* BigQuery Data Engineering Agent, Dataform, SQL avanzado con funciones analíticas de ventana (`RANK()`).
  - *Machine Learning (BigQuery ML):*
    - Predicción de Churn: `LOGISTIC_REG` (Precisión 82.8%, Recall 80.4%, Accuracy 70.2%).
    - Proyección de Ventas: `ARIMA_PLUS` (horizonte a 30 días, intervalo de confianza 95%).
    - Segmentación de Clientes: `KMEANS` (4 clusters estandarizados).
  - *Visualización:* Looker Studio (Dashboards de embudo de conversión y márgenes comerciales).
- **Arquitectura de Capas de Datos:**
  1. *Staging Layer (`stg_orders_enriched`):* Consolidación de eventos web, inventario, transacciones, catálogo y usuarios con cálculo de margen de ganancia unificado.
  2. *Monthly Aggregation Layer (`fact_top_products_monthly`):* Ranking mensual de productos líderes por categoría.
  3. *Reverse Logistics Layer (`fact_returns_analysis`):* Clasificación de proveedores de alto riesgo (devoluciones $> 15\%$).
  4. *Customer Attributes Layer (`dim_customer_clv`):* Cálculo de Customer Lifetime Value (CLV) y segmentación VIP/Regular/Low Value.
- **Hallazgos Técnicos Verificados:**
  - Fuga crítica en embudo: Gran caída entre carrito (432,610 sesiones) y compra final (182,038 sesiones), señalando ~250,000 sesiones abandonadas.
  - Categoría más rentable: *Outerwear & Coats* con ganancia neta acumulada de $186,269.57.
  - Canal de mayor conversión: Campañas de correo electrónico con más de 82,000 transacciones exitosas.
- **Contribuciones Personales Confirmadas:**
  - Diseño y programación del pipeline diario programado a las 6:00 AM.
  - Implementación de consultas SQL para agregaciones y capas dimensionales.
  - Entrenamiento y evaluación de los tres modelos de BigQuery ML.
  - Diseño del tablero analítico en Looker Studio.
- **Recursos Disponibles:**
  - Repositorio público en GitHub (11 archivos).
  - Diagrama Entidad-Relación (`screenshots/DiagramER.png`) y captura del dashboard (`screenshots/dashboard.png`).
- **Información Pendiente:**
  - Enlace público interactivo al informe de Looker Studio (requiere token o compartición pública).

---

### Proyecto 6: Jobsy Backend — Plataforma Inteligente de Reclutamiento con DDD y Extracción de CVs

- **Nombre Oficial:** Jobsy Backend
- **Repositorio Oficial:** [https://github.com/RicardoCardenas/Jobsy-Backend](https://github.com/RicardoCardenas/Jobsy-Backend)
- **Rama Principal:** `main` (Último commit remoto: `cb70ebfd44b81f8412a553599895b7b1dec5efcc`)
- **Copia Local:** No se encontraba en `C:\Ricardo\GithubDesktop` con ese nombre; verificado e inspeccionado directamente desde el repositorio oficial de GitHub.
- **Categorías:** `Software Engineering`, `Data & AI`
- **Estado Actual:** Proyecto funcional con arquitectura preparada para producción y pruebas unitarias de autenticación.
- **Problema de Negocio:**
  Los procesos de selección y reclutamiento tradicionales presentan alta carga operativa en la revisión manual de currículums en PDF, falta de filtros estandarizados por competencias y desconexión entre la publicación de vacantes y la comunicación con los candidatos.
- **Solución Implementada:**
  API REST robusta desarrollada en **.NET 9 y C#** bajo principios de **Domain-Driven Design (DDD)** con contextos acotados, que administra el ciclo de reclutamiento laboral, automatiza la ingesta y lectura de CVs en formato PDF mediante la librería `UglyToad.PdfPig`, gestiona mensajería interna y desacopla la lógica de negocio mediante el patrón mediador (**MediatR**).
- **Stack Tecnológico Verificado:**
  - *Runtime & Framework:* .NET 9 (`net9.0`), C# 13, ASP.NET Core Web API.
  - *Persistencia & ORM:* Entity Framework Core 9.0.6, MySQL con `MySql.EntityFrameworkCore 9.0.3`.
  - *Arquitectura & Patrones:* Domain-Driven Design (DDD) con Bounded Contexts, CQRS conceptual mediante MediatR 9.0.
  - *Procesamiento de Documentos:* `UglyToad.PdfPig` (extracción y análisis de texto desde archivos PDF de postulantes).
  - *Seguridad:* Autenticación JWT (`Microsoft.AspNetCore.Authentication.JwtBearer 9.0.6`, `System.IdentityModel.Tokens.Jwt 8.12.1`), hashing de contraseñas con `BCrypt.Net-Next 4.0.3`.
  - *Documentación:* Swagger / OpenAPI (`Swashbuckle.AspNetCore 9.0.1`).
  - *Pruebas Automatizadas:* Suite unitaria con **xUnit** en el proyecto `Jobsy.Tests`.
  - *Infraestructura:* Preparado para despliegue en Azure App Service con GitHub Actions.
- **Bounded Contexts Implementados:**
  1. `IAM`: Registro, inicio de sesión, generación/validación de JWT y seguridad de rutas.
  2. `JobOfferManagement`: Ciclo de vida de ofertas de trabajo (creación, edición, cierre y consulta).
  3. `JobsyAI`: Extracción de contenido de CVs y soporte para análisis de candidatos.
  4. `Messages`: Mensajería directa entre reclutadores y postulantes.
- **Funcionalidades Implementadas:**
  - Controladores REST organizados por capas (Presentation, Application, Domain, Infrastructure).
  - Pruebas unitarias xUnit para el módulo de autenticación y tokens JWT.
  - Documentación Swagger interactiva en `/swagger`.
- **Contribuciones Personales Confirmadas:**
  - Modelado de Bounded Contexts en C# y configuración de EF Core con MySQL.
  - Implementación de controladores, handlers de MediatR y servicios de aplicación.
  - Configuración de seguridad JWT y desarrollo de pruebas unitarias xUnit.
- **Recursos Disponibles:**
  - Repositorio público completo en GitHub (1,078 archivos, incluyendo solución `.sln` y proyecto de pruebas).
- **Información Pendiente:**
  - Instancia de Azure App Service inactiva actualmente (preparada para redespliegue).

---

### Proyecto 7: OneCoin Backend — Red Social Corporativa Modular

- **Nombre Oficial:** OneCoin Backend
- **Repositorio Oficial:** [https://github.com/RicardoCardenas/OneCoin-Backend](https://github.com/RicardoCardenas/OneCoin-Backend)
- **Rama Principal:** `main` (Último commit remoto: `dcf0f5804ae113b64d77cc98d15dd4eb7d2f547e`)
- **Copia Local:** No se encontraba localmente; verificado e inspeccionado directamente desde el repositorio oficial de GitHub.
- **Categorías:** `Software Engineering`
- **Estado Actual:** Backend funcional completado con documentación Swagger y contenedor Docker.
- **Problema de Negocio:**
  Las organizaciones requieren canales formales pero dinámicos de comunicación interna que fomenten la cohesión de equipos, permitan compartir reconocimientos y faciliten la interacción sin depender de herramientas externas no corporativas.
- **Solución Implementada:**
  API REST estructurada en **Node.js y Express** que proporciona la capa de servicios para una red social corporativa: autenticación segura, gestión de publicaciones (muro), comentarios en hilos, sistema de solicitudes de amistad y mensajería privada entre colaboradores.
- **Stack Tecnológico Verificado:**
  - *Runtime & Framework:* Node.js 20+, Express.js 4.22.1.
  - *Base de Datos NoSQL:* MongoDB con Mongoose ODM 8.1.0.
  - *Seguridad:* Autenticación JWT (`jsonwebtoken 9.0.2`), hashing de contraseñas con `bcryptjs 2.4.3`.
  - *CORS:* Configurado para clientes web en `http://localhost:4200`.
  - *Documentación:* Swagger OpenAPI 3.0 (`swagger-ui-express 5.0.1`, `swagger-jsdoc 6.2.8`).
  - *Contenerización:* Dockerfile para despliegue uniforme.
- **Arquitectura:**
  Arquitectura en capas clásica: `controllers/` (lógica de negocio), `routes/` (definición de endpoints), `models/` (esquemas de Mongoose: `User`, `Post`, `Comment`, `Message`, `FriendRequest`) y `middleware/` (autenticación y validación de tokens).
- **Funcionalidades Implementadas:**
  - Registro y autenticación con emisión de JWT.
  - CRUD de publicaciones y comentarios.
  - Flujo de solicitudes de amistad (envío, aceptación y rechazo).
  - Mensajería directa entre usuarios.
  - Documentación Swagger interactiva en `/api-docs`.
- **Contribuciones Personales Confirmadas:**
  - Diseño de esquemas de datos NoSQL con Mongoose.
  - Implementación de controladores, middlewares de autenticación JWT y rutas.
  - Documentación completa de endpoints con OpenAPI y contenerización con Docker.
- **Recursos Disponibles:**
  - Repositorio público completo en GitHub (26 archivos).
- **Información Pendiente:**
  - No cuenta con frontend integrado en el repositorio (diseñado como API desacoplada).

---

### Proyecto 8: Nexo — Plataforma Comercial Inteligente con Agentic GraphRAG (Proyecto de Tesis UPC)

- **Nombre Oficial:** Nexo — Agentic GraphRAG
- **Estado de Visibilidad:** **Proyecto Académico de Tesis en Desarrollo / Repositorio Privado**
  *(Condición estricta: Se presenta exclusivamente como caso de estudio académico en el portafolio. No se publica su código fuente ni se enlaza a repositorio público mientras permanezca bajo reserva académica).*
- **Ubicación Local Verificada:** `C:\Ricardo\ProyectoTesis\Nexo`
- **Categorías:** `Software Engineering`, `Data & AI`
- **Estado Actual:** **Fase 0 Técnica completada y verificada** (Monolito modular FastAPI con 7 contextos DDD/CQRS, worker Celery, PostgreSQL + pgvector, Neo4j, Docker Compose y suite de pruebas unitarias). Iniciando Fase 1.
- **Problema Abordado:**
  Las micro y pequeñas empresas (PYMES) comerciales en el Perú operan con datos fragmentados entre inventarios físicos, hojas de cálculo y sistemas transaccionales. Los modelos de lenguaje comerciales (LLMs) presentan alucinaciones y no pueden realizar cálculos numéricos autoritativos, haciendo inviable su uso directo para la toma de decisiones financieras críticas.
- **Solución Propuesta:**
  Plataforma web inteligente que combina **recuperación documental vectorial, grafos de conocimiento e interoperabilidad híbrida** para responder consultas comerciales en lenguaje natural. Las cifras exactas provienen de consultas SQL autoritativas en PostgreSQL; las relaciones complejas provienen de Neo4j; y los agentes orquestados con **LangGraph** interpretan y explican los resultados con evidencia verificable.
- **Stack Tecnológico Verificado (Localmente):**
  - *Backend:* Python 3.12+, FastAPI, Monolito modular con 7 Bounded Contexts DDD/CQRS (`iam`, `ingestion`, `knowledge`, `assistant`, `insights`, `audit`, `shared`).
  - *Datos Autoritativos:* PostgreSQL 16 con extensión `pgvector` y Row-Level Security (RLS) para aislamiento multiorganización estricto.
  - *Grafo Derivado:* Neo4j 5 Community para modelado de redes comerciales y relaciones entre productos/clientes.
  - *Procesamiento Asíncrono:* Celery + Redis 7 para ingesta masiva de archivos comerciales.
  - *Orquestación de IA:* LangGraph con modelos locales (Ollama / Qwen2.5-Coder) y embeddings BGE-M3.
  - *Frontend:* React 19, TypeScript, Vite, Tailwind CSS v4.
  - *Infraestructura:* Docker, Docker Compose con redes aisladas y Nginx Alpine como Reverse Proxy.
- **Funcionalidades Implementadas:**
  - Base técnica de backend FastAPI con health checks verificados.
  - Pruebas unitarias aprobadas (`pytest backend/tests -v`).
  - Linter y formateador limpios (`ruff check`, `ruff format`).
  - Orquestación local validada con `docker compose config`.
- **Funcionalidades Planificadas (Tesis en curso):**
  - Fase 1: IAM y aislamiento multiorganización.
  - Fase 2: Modelo canónico e ingesta de fuentes heterogéneas.
  - Fase 3: Proyección hacia grafo Neo4j y recuperación híbrida.
  - Fase 4: Agentes autónomos en LangGraph.
- **Contribuciones Personales Confirmadas:**
  - Autor y arquitecto del proyecto de tesis en la UPC.
  - Diseño de la arquitectura de software DDD, modelos relacionales y proyecciones hacia grafos.
  - Configuración de la infraestructura contenerizada y suite de aseguramiento de calidad.
- **Recursos Disponibles en Portafolio:**
  - Caso de estudio técnico detallado, diagramas de arquitectura C4 autorizados y resumen de investigación académica.
  - **Sin botón de repositorio externo ni divulgación de secretos/código privado.**
