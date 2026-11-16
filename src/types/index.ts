export type ProjectCategory = 'software-engineering' | 'data-ai' | 'mobile';

export type ProjectStatus =
  | 'production'
  | 'mvp-completed'
  | 'fase-0-verified'
  | 'in-development'
  | 'academic-completed';

export interface ProjectLinks {
  github?: string;
  demo?: string;
  docs?: string;
  article?: string;
}

export interface LocalizedString {
  es: string;
  en: string;
}

export interface LocalizedArray {
  es: string[];
  en: string[];
}

export interface ArchitectureComponent {
  name: string;
  role: LocalizedString;
  technology: string;
}

export interface TechnicalDecision {
  title: LocalizedString;
  decision: LocalizedString;
  tradeoff: LocalizedString;
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  featured: boolean;
  order: number;
  categories: ProjectCategory[];
  status: ProjectStatus;
  statusLabel: LocalizedString;

  isAcademicThesis?: boolean;
  isPrivateCode?: boolean;

  summary: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  personalRole: LocalizedString;
  contributions: LocalizedArray;

  implementedFeatures: LocalizedArray;
  plannedFeatures?: LocalizedArray;

  technologies: string[];
  architectureOverview?: LocalizedString;
  architectureComponents?: ArchitectureComponent[];
  keyDecisions?: TechnicalDecision[];
  metricsAndResults?: LocalizedArray;
  challengesAndLearnings?: LocalizedArray;

  coverImage?: string;
  galleryImages?: string[];
  links: ProjectLinks;
  relatedProjectSlugs: string[];
}

export type CredentialType =
  | 'professional-certification'
  | 'language-accreditation'
  | 'specialization'
  | 'course-completion'
  | 'in-progress';

export type CredentialCategory =
  | 'cloud'
  | 'data-ai'
  | 'security'
  | 'methodology'
  | 'language'
  | 'software-engineering';

export interface Certification {
  id: string;
  title: LocalizedString;
  issuer: string;
  type: CredentialType;
  typeLabel: LocalizedString;
  category: CredentialCategory;
  categoryLabel: LocalizedString;
  issueDate?: string;
  expirationDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  skills?: string[];
  description?: LocalizedString;
  isFeatured?: boolean;
}

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
