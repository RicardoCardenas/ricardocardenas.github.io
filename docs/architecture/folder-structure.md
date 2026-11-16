# Estructura de Directorios del Proyecto

**Documento:** ARCH-TREE-001  
**Versión:** 1.0.0  
**Fecha:** 15 de noviembre de 2026  
**Autor:** Senior React & TypeScript Engineer  

---

## 1. Organización Física Propuesta (Fase 1)

A continuación se detalla la estructura modular de archivos que se implementará en la aplicación React, organizada bajo el principio de separación de responsabilidades y arquitectura por capas:

```text
portafolio/
├── public/                                # Recursos estáticos servidos directamente
│   ├── assets/                            # Imágenes, capturas de proyectos y diagramas C4
│   │   ├── projects/                      # Capturas reales de proyectos verificados
│   │   │   ├── nexo/                      # Capturas de Nexo Agentic GraphRAG
│   │   │   ├── capital-cruise/            # Capturas de Capital Cruise
│   │   │   ├── talestar-mobile/           # Capturas de TaleStar Mobile
│   │   │   ├── churn-analytics/           # Gráficos y dashboards de Churn
│   │   │   └── ecommerce-pipeline/        # Diagramas de BigQuery Pipeline
│   │   └── avatar/                        # Fotografía o avatar profesional de Ricardo
│   ├── cv/                                # Documentos curriculares oficiales descargables
│   │   ├── CV_Ricardo_Cardenas_Software_Backend.pdf
│   │   └── CV_Ricardo_Cardenas_Data_AI.pdf
│   ├── favicon.ico
│   ├── robots.txt                         # Directivas para rastreadores de motores de búsqueda
│   └── sitemap.xml                        # Mapa de sitio para indexación SEO
│
├── src/                                   # Código fuente principal de la aplicación
│   ├── app/                               # Configuración raíz de la aplicación
│   │   ├── App.tsx                        # Componente raíz y orquestador de proveedores
│   │   ├── router.tsx                     # Definición de rutas y configuración de React Router
│   │   └── providers.tsx                  # Envoltorio de ThemeProvider, I18n y Tooltips
│   │
│   ├── components/                        # Componentes de presentación organizados por ámbito
│   │   ├── layout/                        # Componentes perimetrales de la aplicación
│   │   │   ├── AppLayout.tsx              # Layout principal con Navbar y Footer
│   │   │   ├── Navbar.tsx                 # Barra de navegación principal (Desktop)
│   │   │   ├── MobileNavSheet.tsx         # Menú drawer accesible para dispositivos móviles
│   │   │   ├── Footer.tsx                 # Pie de página y enlaces sociales verificados
│   │   │   ├── ThemeToggle.tsx            # Selector visual de tema (Claro/Oscuro/Sistema)
│   │   │   ├── LanguageToggle.tsx         # Selector bilingüe (ES/EN)
│   │   │   └── Breadcrumbs.tsx            # Migas de pan para vistas de proyectos
│   │   │
│   │   ├── sections/                      # Secciones de la página principal (Home)
│   │   │   ├── HeroSection.tsx            # Sección Hero con CTA principal y disponibilidad
│   │   │   ├── AboutSection.tsx           # Síntesis profesional y propuesta de valor
│   │   │   ├── SkillsSection.tsx          # Matriz categorizada de habilidades y tecnologías
│   │   │   ├── FeaturedProjectsSection.tsx# Grilla de proyectos destacados
│   │   │   ├── EducationSection.tsx       # Universidad UPC, logros y certificaciones
│   │   │   ├── CVSection.tsx              # Módulo de descarga de CVs especializados
│   │   │   └── ContactSection.tsx         # Canales directos de contacto profesional
│   │   │
│   │   ├── projects/                      # Componentes especializados en proyectos
│   │   │   ├── ProjectCard.tsx            # Tarjeta de proyecto con tags y microinteracciones
│   │   │   ├── ProjectFilters.tsx         # Pestañas de filtrado por categoría
│   │   │   ├── ProjectSearch.tsx          # Barra de búsqueda reactiva debounced
│   │   │   ├── ProjectHeader.tsx          # Encabezado del caso de estudio
│   │   │   ├── ProjectArchitecture.tsx    # Visualizador de diagramas C4 y flujo
│   │   │   ├── TechBadgeList.tsx          # Lista interactiva de tecnologías del proyecto
│   │   │   ├── RelatedProjects.tsx        # Carrusel / grilla de proyectos afines
│   │   │   └── EmptyState.tsx             # Estado sin resultados para búsquedas/filtros
│   │   │
│   │   └── ui/                            # Primitivas de interfaz reutilizables (shadcn/ui)
│   │       ├── button.tsx                 # Botones con variantes de estilo y estado activo
│   │       ├── badge.tsx                  # Etiquetas de categoría y tecnologías
│   │       ├── card.tsx                   # Tarjetas con bordes sutiles y elevación
│   │       ├── tabs.tsx                   # Primitivas de pestañas accesibles
│   │       ├── dialog.tsx                 # Ventanas modales accesibles (Radix)
│   │       ├── sheet.tsx                  # Paneles laterales / drawers móviles
│   │       └── tooltip.tsx                # Tooltips con retardo refinado
│   │
│   ├── pages/                             # Vistas de nivel superior asociadas a URLs
│   │   ├── HomePage.tsx                   # Vista principal compuesta por secciones
│   │   ├── ProjectsCatalogPage.tsx        # Vista de catálogo completo con filtros
│   │   ├── ProjectDetailPage.tsx          # Vista de caso de estudio detallado (/projects/:slug)
│   │   └── NotFoundPage.tsx               # Vista de error 404
│   │
│   ├── data/                              # Fuentes de verdad inmutables tipadas
│   │   ├── projects.ts                    # Casos de estudio completos verificados
│   │   ├── skills.ts                      # Matriz estructurada de tecnologías
│   │   ├── certifications.ts              # Certificaciones oficiales y cursos verificados
│   │   └── profile.ts                     # Información profesional, educación y enlaces
│   │
│   ├── hooks/                             # Custom hooks reutilizables
│   │   ├── useTheme.ts                    # Gestión y persistencia del tema visual
│   │   ├── useScrollSpy.ts                # Detección de sección activa en viewport
│   │   ├── useHashScroll.ts               # Desplazamiento suave para anclas entre rutas
│   │   ├── useMediaQuery.ts               # Detección de breakpoints responsive
│   │   └── useDebounce.ts                 # Optimización de búsquedas en tiempo real
│   │
│   ├── i18n/                              # Configuración y recursos de internacionalización
│   │   ├── config.ts                      # Inicialización de i18next y detectores
│   │   └── locales/                       # Diccionarios de traducción
│   │       ├── es/                        # Namespace en Español
│   │       │   ├── common.json            # Textos generales, botones y navegación
│   │       │   ├── home.json              # Textos de secciones de la Home
│   │       │   └── projects.json          # Casos de estudio traducidos
│   │       └── en/                        # Namespace en Inglés
│   │           ├── common.json
│   │           ├── home.json
│   │           └── projects.json
│   │
│   ├── types/                             # Contratos e interfaces TypeScript
│   │   ├── project.ts                     # Modelo tipado de proyectos y estudios de caso
│   │   ├── certification.ts               # Modelo de formación y certificados
│   │   ├── navigation.ts                  # Tipos de rutas, categorías y filtros
│   │   └── theme.ts                       # Tipos para modos visuales ('light' | 'dark' | 'system')
│   │
│   ├── styles/                            # Estilos globales y tokens CSS
│   │   ├── globals.css                    # Directivas de Tailwind y variables CSS
│   │   └── tokens.css                     # Definición de tokens semánticos de color y sombras
│   │
│   ├── utils/                             # Funciones auxiliares puras
│   │   ├── cn.ts                          # Utilidad de combinación de clases (clsx + twMerge)
│   │   └── analytics.ts                   # Registro de eventos sin cookies
│   │
│   ├── index.css                          # Entrada de estilos
│   └── main.tsx                           # Punto de entrada de la aplicación React
│
├── tests/                                 # Suites de pruebas automatizadas
│   ├── unit/                              # Pruebas unitarias (filtros, reducers, utilidades)
│   ├── components/                        # Pruebas de componentes (Navbar, ProjectCard, Filters)
│   └── e2e/                               # Pruebas End-to-End con Playwright
│
├── docs/                                  # Documentación de Fase 0 y arquitectura
├── .gitignore
├── index.html                             # Plantilla HTML con script inline anti-FOUT
├── package.json                           # Manifiesto de dependencias y scripts de ejecución
├── tsconfig.json                          # Configuración estricta de TypeScript
├── vite.config.ts                         # Configuración del bundler Vite
├── tailwind.config.ts                     # Configuración del sistema de diseño Tailwind
└── README.md                              # Documentación general del repositorio
```
