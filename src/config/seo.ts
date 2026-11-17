import type { ProjectCaseStudy } from '../types';

/**
 * Determina de forma centralizada y parametrizable la URL pública del sitio:
 * 1. Variable de entorno VITE_SITE_URL (inyectada en CI/CD o hosting para producción).
 * 2. Origen del navegador (`window.location.origin`) si se ejecuta en cliente local o preview.
 * 3. Fallback seguro de pruebas locales ('http://localhost:4173').
 *
 * NOTA DE ARQUITECTURA:
 * No se asume ningún dominio inventado o provisional. Si VITE_SITE_URL no está definida,
 * el sistema utiliza el origen local de pruebas, evitando la publicación accidental
 * de dominios no autorizados por el usuario.
 */
export function getSiteUrl(): string {
  const envUrl =
    (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
    (typeof process !== 'undefined' && process.env?.VITE_SITE_URL);

  if (typeof envUrl === 'string' && envUrl.trim().length > 0) {
    return envUrl.trim().replace(/\/$/, '');
  }

  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin.replace(/\/$/, '');
  }

  return 'http://localhost:4173';
}

export const SITE_CONFIG = {
  get siteUrl(): string {
    return getSiteUrl();
  },
  author: 'Ricardo Fernando Cardenas Minaya',
  authorHandle: '@RicardoCardenas',
  defaultImage: '/images/og-image.png',
  githubUrl: 'https://github.com/RicardoCardenas',
  linkedinUrl: 'https://www.linkedin.com/in/ricardo-cardenas-minaya-4734a3323',
  email: 'fernandocm1112@gmail.com',
};

export interface RouteSEO {
  title: string;
  description: string;
  canonicalPath: string;
  type?: 'website' | 'article';
  image?: string;
  noindex?: boolean;
}

export function getHomeSEO(lang: 'es' | 'en'): RouteSEO {
  return {
    title:
      lang === 'es'
        ? 'Ricardo Cardenas | Ingeniería de Software & Arquitectura DDD'
        : 'Ricardo Cardenas | Software Engineering & DDD Architecture',
    description:
      lang === 'es'
        ? 'Portafolio profesional de Ricardo Cardenas (UPC, Décimo Superior). Arquitectura de software DDD, microservicios, ingeniería de datos e inteligencia artificial con GraphRAG.'
        : 'Professional software portfolio of Ricardo Cardenas (UPC, Top 10%). Specializing in DDD software architecture, microservices, data engineering, and agentic GraphRAG.',
    canonicalPath: '/',
    type: 'website',
    image: SITE_CONFIG.defaultImage,
  };
}

export function getCatalogSEO(lang: 'es' | 'en'): RouteSEO {
  return {
    title:
      lang === 'es'
        ? 'Catálogo de Proyectos Verificados | Ricardo Cardenas'
        : 'Verified Projects Catalog | Ricardo Cardenas',
    description:
      lang === 'es'
        ? 'Explora 8 proyectos verificados en ingeniería de software, arquitectura DDD, sistemas distribuidos, pipelines analíticos e inteligencia artificial.'
        : 'Explore 8 verified projects spanning software engineering, DDD architecture, distributed systems, analytical data pipelines, and artificial intelligence.',
    canonicalPath: '/projects',
    type: 'website',
    image: SITE_CONFIG.defaultImage,
  };
}

export function getProjectDetailSEO(project: ProjectCaseStudy, lang: 'es' | 'en'): RouteSEO {
  const categoryLabels = project.categories
    .map((c) => (c === 'software-engineering' ? 'Software Engineering' : 'Data & AI'))
    .join(' • ');

  const summary = project.summary[lang] || project.summary.es;

  return {
    title: `${project.title} | ${categoryLabels} | Ricardo Cardenas`,
    description: summary.length > 155 ? `${summary.slice(0, 152)}...` : summary,
    canonicalPath: `/projects/${project.slug}`,
    type: 'article',
    image:
      project.galleryImages && project.galleryImages.length > 0
        ? project.galleryImages[0]
        : SITE_CONFIG.defaultImage,
  };
}

export function getNotFoundSEO(lang: 'es' | 'en'): RouteSEO {
  return {
    title:
      lang === 'es'
        ? '404: Página No Encontrada | Ricardo Cardenas'
        : '404: Page Not Found | Ricardo Cardenas',
    description:
      lang === 'es'
        ? 'La página solicitada no existe o fue reubicada dentro del portafolio profesional de Ricardo Cardenas.'
        : 'The requested page does not exist or has been relocated within Ricardo Cardenas software portfolio.',
    canonicalPath: '/404',
    noindex: true,
  };
}

/**
 * Generador de Schemas JSON-LD (Schema.org)
 */

export function getPersonAndWebSiteSchema(siteUrl: string = SITE_CONFIG.siteUrl) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE_CONFIG.author,
      alternateName: 'Ricardo Cardenas',
      jobTitle: 'Software Engineer & Architecture Lead',
      url: siteUrl,
      sameAs: [SITE_CONFIG.githubUrl, SITE_CONFIG.linkedinUrl],
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
        description: 'Décimo Superior (Top 10%) - Carrera de Ingeniería de Software',
      },
      knowsAbout: [
        'Software Architecture',
        'Domain-Driven Design (DDD)',
        'Command Query Responsibility Segregation (CQRS)',
        'Microservices',
        'Data Engineering',
        'GraphRAG',
        'PostgreSQL',
        'Neo4j',
        'Docker',
        'FastAPI',
        'Spring Boot',
        '.NET',
        'Flutter',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Ricardo Cardenas Portfolio',
      url: siteUrl,
      description:
        'Portafolio profesional de ingeniería de software, arquitectura de sistemas y ciencia de datos.',
      author: {
        '@type': 'Person',
        name: SITE_CONFIG.author,
      },
    },
  ];
}

export function getCollectionPageSchema(
  projects: ProjectCaseStudy[],
  siteUrl: string = SITE_CONFIG.siteUrl
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Verified Software Projects Catalog',
    description:
      'Catálogo de estudios de caso técnicos en arquitectura DDD, microservicios, ingeniería de datos e IA.',
    url: `${siteUrl}/projects`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteUrl}/projects/${p.slug}`,
        name: p.title,
        description: p.summary.es,
      })),
    },
  };
}

export function getProjectDetailSchema(
  project: ProjectCaseStudy,
  siteUrl: string = SITE_CONFIG.siteUrl
) {
  const schemas: Array<Record<string, unknown>> = [
    {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: project.title,
      description: project.summary.es,
      author: {
        '@type': 'Person',
        name: SITE_CONFIG.author,
        url: siteUrl,
      },
      url: `${siteUrl}/projects/${project.slug}`,
      proficiencyLevel: 'Expert',
      keywords: project.technologies.join(', '),
      about: project.categories.map((c) => ({
        '@type': 'Thing',
        name: c === 'software-engineering' ? 'Software Engineering' : 'Data & AI',
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Projects Catalog',
          item: `${siteUrl}/projects`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: project.title,
          item: `${siteUrl}/projects/${project.slug}`,
        },
      ],
    },
  ];

  // Si tiene código público en GitHub y no es reservado, agregar SoftwareSourceCode
  if (!project.isPrivateCode && project.links.github) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'SoftwareSourceCode',
      name: project.title,
      codeRepository: project.links.github,
      programmingLanguage: project.technologies,
      author: {
        '@type': 'Person',
        name: SITE_CONFIG.author,
      },
    });
  }

  return schemas;
}