import { Server, Layout, Cloud, Database, Cpu } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { SkillCategoryCard } from '../ui/SkillCategoryCard';

export interface SkillsSectionProps {
  lang: 'es' | 'en';
}

export function SkillsSection({ lang }: SkillsSectionProps) {
  const categories = [
    {
      title: lang === 'es' ? 'Backend & Software Engineering' : 'Backend & Software Engineering',
      description:
        lang === 'es'
          ? 'Arquitectura modular, DDD y APIs REST seguras'
          : 'Modular architecture, DDD, and resilient REST APIs',
      icon: Server,
      skills: [
        { name: 'Java 21', context: 'Spring Boot 3', isPrimary: true },
        { name: 'C#', context: '.NET 9 & MediatR', isPrimary: true },
        { name: 'Python 3.12', context: 'FastAPI', isPrimary: true },
        { name: 'TypeScript', context: 'ESM / Node.js' },
        { name: 'Domain-Driven Design', context: 'Bounded Contexts' },
        { name: 'RESTful APIs', context: 'OpenAPI / Swagger' },
      ],
    },
    {
      title: lang === 'es' ? 'Frontend & Mobile' : 'Frontend & Mobile',
      description:
        lang === 'es'
          ? 'Interfaces accesibles, móviles y sistemas reactivos'
          : 'Accessible, responsive interfaces and mobile systems',
      icon: Layout,
      skills: [
        { name: 'React 19', context: 'Vite & Radix UI', isPrimary: true },
        { name: 'Flutter & Dart', context: 'BLoC Pattern', isPrimary: true },
        { name: 'Vue 3', context: 'Composition API' },
        { name: 'Tailwind CSS v4', context: 'Design Tokens' },
        { name: 'WCAG 2.2 AA', context: 'A11y Standards' },
      ],
    },
    {
      title: lang === 'es' ? 'Cloud, DevOps & Infraestructura' : 'Cloud, DevOps & Infrastructure',
      description:
        lang === 'es'
          ? 'Contenerización, automatización y nube'
          : 'Containerization, automation, and cloud fundamentals',
      icon: Cloud,
      skills: [
        { name: 'Docker', context: 'Docker Compose', isPrimary: true },
        { name: 'Microsoft Azure', context: 'AZ-900 Certified', isPrimary: true },
        { name: 'Git & GitHub Actions', context: 'CI/CD' },
        { name: 'Nginx', context: 'Reverse Proxy' },
        { name: 'Flyway', context: 'SQL Migrations' },
      ],
    },
    {
      title: lang === 'es' ? 'Data Engineering & Analytics' : 'Data Engineering & Analytics',
      description:
        lang === 'es'
          ? 'Almacenamiento políglota, pipelines y visualización'
          : 'Polyglot storage, analytical pipelines, and BI reporting',
      icon: Database,
      skills: [
        { name: 'PostgreSQL 16', context: 'pgvector & RLS', isPrimary: true },
        { name: 'Neo4j 5', context: 'Cypher / Graph DB', isPrimary: true },
        { name: 'Google BigQuery', context: 'Dataform & ML' },
        { name: 'DuckDB & Pandas', context: 'In-Memory Analytics' },
        { name: 'Power BI', context: 'DAX & Modeling' },
      ],
    },
    {
      title: lang === 'es' ? 'IA & Aseguramiento de Calidad' : 'AI & Quality Assurance',
      description:
        lang === 'es'
          ? 'Orquestación de agentes, tareas en cola y testing'
          : 'Agent orchestration, asynchronous workers, and testing',
      icon: Cpu,
      skills: [
        { name: 'LangGraph', context: 'Agentic GraphRAG', isPrimary: true },
        { name: 'Celery & Redis', context: 'Distributed Queues', isPrimary: true },
        { name: 'Ollama / LLMs', context: 'Local AI Inference' },
        { name: 'Vitest & RTL', context: 'Frontend Unit Testing' },
        { name: 'Pytest & xUnit', context: 'Backend Test Suites' },
        { name: 'Playwright', context: 'E2E Automation' },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 space-y-8" aria-label={lang === 'es' ? 'Habilidades y Tecnologías' : 'Skills & Technologies'}>
      <SectionHeader
        badge={lang === 'es' ? 'Pila Tecnológica' : 'Technical Stack'}
        title={lang === 'es' ? 'Tecnologías y Dominios de Especialidad' : 'Technologies & Core Domains'}
        description={
          lang === 'es'
            ? 'Herramientas y tecnologías aplicadas en proyectos de ingeniería de software, arquitectura de sistemas, pipelines analíticos e inteligencia artificial.'
            : 'Tools and technologies applied across software engineering projects, system architecture, data analytics pipelines, and AI systems.'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <SkillCategoryCard
            key={cat.title}
            title={cat.title}
            description={cat.description}
            icon={cat.icon}
            skills={cat.skills}
          />
        ))}
      </div>
    </section>
  );
}
