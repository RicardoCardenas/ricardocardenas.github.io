import type { ProfessionalProfile } from '../types';

export const verifiedProfile: ProfessionalProfile = {
  fullName: 'Ricardo Fernando Cardenas Minaya',
  preferredName: 'Ricardo Cardenas',
  title: {
    es: 'Ingeniería de Software | Backend • Arquitectura DDD • Cloud & Data',
    en: 'Software Engineering | Backend • DDD Architecture • Cloud & Data',
  },
  headline: {
    es: 'Estudiante de Ingeniería de Software en la UPC (Décimo Superior). Especializado en diseño de microservicios, APIs REST, pipelines de datos y arquitecturas modulares con IA verificable.',
    en: 'Software Engineering student at UPC (Top 10%). Focused on microservices design, REST APIs, cloud data pipelines, and modular architectures with verifiable AI.',
  },
  location: 'Lima, Perú',
  university: {
    name: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
    program: {
      es: 'Ingeniería de Software',
      en: 'Software Engineering',
    },
    period: 'Mar 2023 - Dic 2027',
    currentSemester: 'Pregrado',
    distinction: {
      es: 'Décimo Superior',
      en: 'Top 10% (Décimo Superior)',
    },
  },
  languages: [
    {
      language: { es: 'Español', en: 'Spanish' },
      proficiency: { es: 'Nativo', en: 'Native' },
    },
    {
      language: { es: 'Inglés', en: 'English' },
      proficiency: { es: 'Avanzado (TOEFL ITP B2)', en: 'Advanced (TOEFL ITP B2)' },
    },
  ],
  availability: {
    status: 'available',
    label: {
      es: 'Disponible para prácticas preprofesionales',
      en: 'Open to software engineering internships',
    },
  },
  contacts: {
    email: 'fernandocm1112@gmail.com',
    phone: '+51 933206904',
    linkedin: 'https://www.linkedin.com/in/ricardo-cardenas-minaya-4734a3323',
    github: 'https://github.com/RicardoCardenas',
  },
};
