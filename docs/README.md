# Documentación de Fase 0 — Portafolio Profesional de Ricardo Cardenas

Bienvenido al repositorio documental de la **Fase 0 (Descubrimiento, Arquitectura y Diseño)** del portafolio profesional de **Ricardo Fernando Cardenas Minaya**, estudiante de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC), Lima, Perú.

Este compendio documental ha sido elaborado por un equipo multidisciplinario simulado (Software Architecture, Frontend Engineering, UI/UX Design, Performance, Accessibility & SEO, QA Automation y Technical Documentation) siguiendo rigurosas prácticas de ingeniería de software.

---

## 1. Misión y Propósito

El objetivo primordial del portafolio es funcionar como carta de presentación técnica y profesional de alto impacto para postular a **prácticas preprofesionales y oportunidades de inicio de carrera** en las siguientes áreas:

1. **Software Engineering**
2. **Backend Development**
3. **Full Stack Development**
4. **Cloud Engineering**
5. **Data Engineering**
6. **Artificial Intelligence**

El portafolio comunica competencia técnica sólida, veraz y verificable, evitando exageraciones de experiencia laboral o afirmaciones no sustentadas en código real.

---

## 2. Mapa Estructural de Entregables de Fase 0

La documentación está organizada de forma modular en el directorio `docs/`:

```text
docs/
├── README.md                          # Este documento (índice general y visión de Fase 0)
├── skills-audit.md                    # Auditoría de skills disponibles en el entorno Antigravity
│
├── requirements/                      # Especificación formal de requisitos
│   ├── product-requirements.md        # Visión de producto, audiencias y objetivos
│   ├── functional-requirements.md     # Requisitos funcionales detallados por vista
│   └── acceptance-criteria.md         # Criterios de aceptación verificables (Given-When-Then)
│
├── architecture/                      # Arquitectura del sistema y decisiones técnicas
│   ├── tech-stack.md                  # Evaluación y justificación de la pila tecnológica
│   ├── system-design.md               # Diseño de componentes, flujos y arquitectura frontend
│   ├── folder-structure.md            # Organización física y modular del código fuente
│   └── adr/                           # Registros de Decisiones de Arquitectura (ADR)
│       ├── ADR-001-hybrid-navigation.md
│       ├── ADR-002-frontend-tech-stack.md
│       ├── ADR-003-design-tokens-and-theme.md
│       ├── ADR-004-i18n-strategy.md
│       └── ADR-005-hosting-and-deployment-target.md
│
├── design/                            # Sistema de diseño, navegación y wireframes
│   ├── README.md                      # Resumen del sistema visual y directrices aprobadas
│   ├── design-system.md               # Tokens semánticos, tipografía, espaciado y contraste
│   ├── navigation-map.md              # Mapa de navegación híbrida y flujos de usuario
│   ├── responsive-spec.md             # Especificación para Desktop, Tablet y Mobile
│   └── mockups/                       # Especificaciones de alta fidelidad y wireframes
│       ├── view-1-home-desktop.md     # Vista 1: Home Desktop
│       ├── view-2-home-mobile.md      # Vista 2: Home Mobile
│       ├── view-3-projects-catalog.md # Vista 3: Catálogo con filtros multi-categoría
│       ├── view-4-project-detail.md   # Vista 4: Detalle de proyecto (Case Study)
│       └── view-5-theme-and-language.md # Vista 5: Selectores de tema y lenguaje
│
├── content/                           # Modelado de datos y contenidos verificados
│   ├── project-inventory.md           # Inventario exhaustivo de proyectos verificados
│   ├── content-model.md               # Esquemas tipados TypeScript para proyectos y CV
│   └── missing-information.md         # Registro de información pendiente por parte del usuario
│
├── quality/                           # Estrategia de aseguramiento de calidad
│   ├── testing-strategy.md            # Pirámide de pruebas (Unitarias, Componentes, Integración, E2E)
│   ├── accessibility-checklist.md     # Lista de verificación WCAG 2.2 AA y buenas prácticas
│   └── seo-performance-plan.md        # Plan de Core Web Vitals, metadatos y sitemap
│
└── planning/                          # Planificación y control
    ├── roadmap.md                     # Cronograma y fases hacia producción
    └── phase-0-verification.md        # Auditoría formal de los 20 criterios de Fase 0
```

---

## 3. Estado de la Fase

- **Estado actual:** `READY FOR REVIEW` (Listo para revisión del usuario).
- **Regla estricta:** No se iniciará la Fase 1 (implementación React, instalación de dependencias ni desarrollo de componentes) hasta contar con la aprobación explícita del usuario.
