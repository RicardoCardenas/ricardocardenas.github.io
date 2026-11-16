import type { Certification } from '../types';

export const verifiedCertifications: Certification[] = [
  {
    id: 'az-900',
    title: {
      es: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      en: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    },
    issuer: 'Microsoft',
    type: 'professional-certification',
    typeLabel: {
      es: 'Certificación Profesional',
      en: 'Professional Certification',
    },
    category: 'cloud',
    categoryLabel: {
      es: 'Cloud Computing',
      en: 'Cloud Computing',
    },
    issueDate: '2026-09',
    description: {
      es: 'Conceptos fundamentales de computación en la nube, arquitectura de Microsoft Azure, servicios de cómputo, almacenamiento, redes y gobernanza de seguridad.',
      en: 'Foundational cloud computing concepts, Microsoft Azure core architecture, compute, storage, networking services, and security governance.',
    },
    skills: ['Microsoft Azure', 'Cloud Computing', 'Cloud Security', 'Networking'],
    isFeatured: true,
  },
  {
    id: 'toefl-itp-b2',
    title: {
      es: 'TOEFL ITP — Nivel B2 (Competencia en Inglés)',
      en: 'TOEFL ITP — Level B2 (English Proficiency)',
    },
    issuer: 'ETS (Educational Testing Service)',
    type: 'language-accreditation',
    typeLabel: {
      es: 'Acreditación de Idioma',
      en: 'Language Accreditation',
    },
    category: 'language',
    categoryLabel: {
      es: 'Idiomas',
      en: 'Languages',
    },
    issueDate: '2024-06',
    description: {
      es: 'Acreditación oficial de dominio del idioma inglés en nivel intermedio-avanzado (B2 CEFR), evaluando comprensión auditiva, lectura académica y estructura gramatical.',
      en: 'Official English language proficiency accreditation at upper-intermediate level (B2 CEFR), evaluating listening, academic reading, and grammatical structure.',
    },
    skills: ['English Proficiency (B2)', 'Technical English', 'Academic Reading'],
    isFeatured: true,
  },
  {
    id: 'scrum-fundamentals',
    title: {
      es: 'Scrum Fundamentals Certified (SFC)',
      en: 'Scrum Fundamentals Certified (SFC)',
    },
    issuer: 'SCRUMstudy',
    type: 'professional-certification',
    typeLabel: {
      es: 'Certificación Profesional',
      en: 'Professional Certification',
    },
    category: 'methodology',
    categoryLabel: {
      es: 'Metodologías Ágiles',
      en: 'Agile Methodologies',
    },
    issueDate: '2024-05',
    credentialId: '1029562',
    description: {
      es: 'Principios y conceptos clave del marco de trabajo Scrum (SBOK Guide), roles de equipo, ceremonias ágiles, artefactos y entrega incremental.',
      en: 'Key principles and concepts of the Scrum framework (SBOK Guide), team roles, agile ceremonies, artifacts, and incremental product delivery.',
    },
    skills: ['Scrum', 'Agile Methodologies', 'Sprint Planning', 'Continuous Delivery'],
    isFeatured: false,
  },
  {
    id: 'michigan-python-specialization',
    title: {
      es: 'Python for Everybody Specialization (5 cursos)',
      en: 'Python for Everybody Specialization (5 Courses)',
    },
    issuer: 'University of Michigan (Coursera)',
    type: 'specialization',
    typeLabel: {
      es: 'Especialización Completada',
      en: 'Completed Specialization',
    },
    category: 'software-engineering',
    categoryLabel: {
      es: 'Software Engineering',
      en: 'Software Engineering',
    },
    issueDate: '2026-06',
    credentialId: 'R47DHZSYJHU8',
    description: {
      es: 'Especialización integral de 5 cursos que abarca programación estructurada en Python, estructuras de datos nativas, acceso a APIs web, bases de datos SQL y visualización de datos.',
      en: 'Comprehensive 5-course specialization covering Python structured programming, data structures, web APIs, SQL databases, and data processing visualization.',
    },
    skills: ['Python 3', 'Data Structures', 'REST APIs', 'SQLite', 'Data Visualization'],
    isFeatured: true,
  },
  {
    id: 'colorado-databases-specialization',
    title: {
      es: 'Databases for Data Scientists Specialization (3 cursos)',
      en: 'Databases for Data Scientists Specialization (3 Courses)',
    },
    issuer: 'University of Colorado Boulder (Coursera)',
    type: 'specialization',
    typeLabel: {
      es: 'Especialización Completada',
      en: 'Completed Specialization',
    },
    category: 'data-ai',
    categoryLabel: {
      es: 'Bases de Datos & Data',
      en: 'Databases & Data',
    },
    issueDate: '2026-07',
    credentialId: '5HK0ZWWIAHCQ',
    description: {
      es: 'Diseño relacional avanzado, normalización, modelado relacional y sintaxis SQL compleja (DML, DDL, DCL, subqueries y window functions).',
      en: 'Advanced relational database design, schema normalization, entity-relationship modeling, and complex SQL (window functions, subqueries, DDL/DML).',
    },
    skills: ['Relational Database Design', 'SQL', 'Schema Normalization', 'Query Optimization'],
    isFeatured: true,
  },
  {
    id: 'google-cybersecurity',
    title: {
      es: 'Google Cybersecurity Professional Certificate (8 cursos)',
      en: 'Google Cybersecurity Professional Certificate (8 Courses)',
    },
    issuer: 'Google (Coursera)',
    type: 'specialization',
    typeLabel: {
      es: 'Certificado Profesional',
      en: 'Professional Certificate',
    },
    category: 'security',
    categoryLabel: {
      es: 'Ciberseguridad & Infraestructura',
      en: 'Cybersecurity & Infrastructure',
    },
    issueDate: '2025-07',
    credentialId: 'FVYYNGV2FYDU',
    description: {
      es: 'Programa de 8 cursos enfocado en gestión de riesgos de seguridad, redes, defensas en Linux y SQL, detección con SIEM y automatización de tareas con Python.',
      en: '8-course curriculum focusing on security risk management, network protection, Linux and SQL forensics, SIEM detection, and Python security automation.',
    },
    skills: ['Linux Security', 'Network Protocols', 'SQL Forensics', 'Python Automation', 'SIEM'],
    isFeatured: false,
  },
  {
    id: 'ibm-generative-ai',
    title: {
      es: 'IBM Generative AI Fundamentals Specialization (5 cursos)',
      en: 'IBM Generative AI Fundamentals Specialization (5 Courses)',
    },
    issuer: 'IBM (Coursera)',
    type: 'specialization',
    typeLabel: {
      es: 'Especialización Completada',
      en: 'Completed Specialization',
    },
    category: 'data-ai',
    categoryLabel: {
      es: 'Inteligencia Artificial',
      en: 'Artificial Intelligence',
    },
    issueDate: '2025-11',
    credentialId: 'FGWUM416WR6F',
    description: {
      es: 'Modelos fundacionales, ingeniería de prompts, consideraciones éticas y casos de uso empresarial de inteligencia artificial generativa.',
      en: 'Foundation models, prompt engineering patterns, ethical guardrails, and enterprise use cases for generative AI.',
    },
    skills: ['Generative AI', 'Prompt Engineering', 'LLM Architectures', 'AI Ethics'],
    isFeatured: false,
  },
  {
    id: 'mongodb-intro',
    title: {
      es: 'Introduction to MongoDB',
      en: 'Introduction to MongoDB',
    },
    issuer: 'MongoDB University',
    type: 'course-completion',
    typeLabel: {
      es: 'Curso Completado',
      en: 'Course Completion',
    },
    category: 'data-ai',
    categoryLabel: {
      es: 'Bases de Datos NoSQL',
      en: 'NoSQL Databases',
    },
    issueDate: '2024-10',
    credentialId: 'MDBuntyl3pvkk',
    description: {
      es: 'Estructura de documentos BSON, operaciones CRUD en MongoDB Atlas, modelado no relacional y pipeline de agregación.',
      en: 'BSON document models, CRUD operations on MongoDB Atlas, non-relational document schema design, and aggregation framework pipelines.',
    },
    skills: ['MongoDB', 'NoSQL', 'Document Modeling', 'Aggregation Pipeline'],
    isFeatured: false,
  },
];
