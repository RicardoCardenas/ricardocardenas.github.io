# Modelo de Contenido Tipado en TypeScript

**Documento:** CONTENT-MODEL-001  
**Versión:** 2.0.0 (Actualizada con soporte para distinción de estado y proyectos privados/tesis)  
**Fecha:** 15 de noviembre de 2026  
**Autor:** Senior React & TypeScript Engineer  

---

## 1. Definición de Tipos e Interfaces Estrictas

El modelo tipado en TypeScript (`src/types/index.ts`) gobierna la estructura inmutable de todos los proyectos, certificaciones y datos de perfil en el portafolio:

```typescript
/**
 * Categorías oficiales a las que puede pertenecer un proyecto.
 * Un proyecto puede estar asociado a múltiples categorías simultáneamente.
 */
export type ProjectCategory = 'software-engineering' | 'data-ai' | 'mobile';

/**
 * Estados de madurez técnica del proyecto.
 */
export type ProjectStatus =
  | 'production'
  | 'mvp-completed'
  | 'fase-0-verified'
  | 'in-development'
  | 'academic-completed';

/**
 * Enlaces verificables asociados a un proyecto.
 * Si el proyecto es privado (ej. tesis Nexo), el campo `github` se omite.
 */
export interface ProjectLinks {
  github?: string;
  demo?: string;
  docs?: string;
  article?: string;
}

/**
 * Estructuras de contenido bilingüe (Español / Inglés).
 */
export interface LocalizedString {
  es: string;
  en: string;
}

export interface LocalizedArray {
  es: string[];
  en: string[];
}

/**
 * Componente o nodo de arquitectura dentro de un caso de estudio.
 */
export interface ArchitectureComponent {
  name: string;
  role: LocalizedString;
  technology: string;
}

/**
 * Registro de Decisiones de Arquitectura abreviado para el caso de estudio.
 */
export interface TechnicalDecision {
  title: LocalizedString;
  decision: LocalizedString;
  tradeoff: LocalizedString;
}

/**
 * Modelo completo de un Caso de Estudio de Proyecto (Case Study).
 */
export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  featured: boolean;
  order: number;
  categories: ProjectCategory[];
  status: ProjectStatus;
  statusLabel: LocalizedString;
  
  // Distinción de proyecto de investigación o código privado
  isAcademicThesis?: boolean;
  isPrivateCode?: boolean;

  // Resumen y caso de estudio
  summary: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  personalRole: LocalizedString;
  contributions: LocalizedArray;

  // Distinción obligatoria entre lo implementado y lo planificado
  implementedFeatures: LocalizedArray;
  plannedFeatures?: LocalizedArray;

  // Stack y Arquitectura
  technologies: string[];
  architectureOverview?: LocalizedString;
  architectureComponents?: ArchitectureComponent[];
  keyDecisions?: TechnicalDecision[];
  metricsAndResults?: LocalizedArray;
  challengesAndLearnings?: LocalizedArray;

  // Recursos visuales y enlaces
  coverImage: string;
  galleryImages?: string[];
  links: ProjectLinks;
  relatedProjectSlugs: string[];
}

/**
 * Modelo para Certificaciones y Cursos Verificados.
 */
export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string; // Formato YYYY-MM
  expirationDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  category: 'cloud' | 'data-ai' | 'security' | 'methodology' | 'language';
  isOfficialCertification: boolean; // true para AZ-900, TOEFL; false para cursos Coursera
}

/**
 * Modelo para los dos Currículums Oficiales descargables.
 */
export interface CVDocument {
  id: 'software-backend' | 'data-ai';
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  fileName: string;
  downloadPath: string;
  lastUpdated: string;
  focusAreas: LocalizedArray;
}

/**
 * Modelo del Perfil Profesional del Propietario.
 */
export interface ProfessionalProfile {
  fullName: string;
  preferredName: string;
  title: LocalizedString;
  headline: LocalizedString;
  location: string;
  university: {
    name: string;
    program: LocalizedString;
    period: string;
    currentSemester: string;
    distinction: LocalizedString;
  };
  languages: {
    language: LocalizedString;
    proficiency: LocalizedString;
  }[];
  availability: {
    status: 'available' | 'interviewing' | 'unavailable';
    label: LocalizedString;
  };
  contacts: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}
```

---

## 2. Garantía de Inmutabilidad y Seguridad de Tipos
- La inclusión de `isAcademicThesis` e `isPrivateCode` permite que el componente `ProjectHeader` y `ProjectCard` desactiven condicionalmente el botón de GitHub cuando `links.github` no está presente, mostrando en su lugar el badge informativo *"Caso de Estudio Académico (Código Privado)"*.
- La separación entre `implementedFeatures` y `plannedFeatures` asegura total transparencia técnica con los reclutadores.
