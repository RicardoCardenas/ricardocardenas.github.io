import { Server, Layout, Cloud, Database, Cpu } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';

export interface SkillsSectionProps {
  lang: 'es' | 'en';
}

export function SkillsSection({ lang }: SkillsSectionProps) {
  const domains = [
    {
      title: lang === 'es' ? 'Backend & Software Engineering' : 'Backend & Software Engineering',
      icon: Server,
      skills: [
        { name: 'Java 21 LTS', context: 'Spring Boot 3', primary: true },
        { name: 'C#', context: '.NET 9 & MediatR', primary: true },
        { name: 'Python 3.12', context: 'FastAPI', primary: true },
        { name: 'TypeScript', context: 'Node.js' },
        { name: 'Domain-Driven Design (DDD)', context: 'Bounded Contexts' },
        { name: 'CQRS', context: 'Commands & Queries' },
        { name: 'REST APIs', context: 'OpenAPI / Swagger' },
      ],
    },
    {
      title: lang === 'es' ? 'Frontend & Mobile' : 'Frontend & Mobile',
      icon: Layout,
      skills: [
        { name: 'React 19', context: 'Vite & Radix UI', primary: true },
        { name: 'Flutter & Dart', context: 'BLoC Pattern', primary: true },
        { name: 'Vue 3', context: 'Composition API' },
        { name: 'Tailwind CSS v4', context: 'Semantic Tokens' },
        { name: 'WCAG 2.2 AA', context: 'Web Accessibility' },
      ],
    },
    {
      title: lang === 'es' ? 'Cloud, DevOps & Infraestructura' : 'Cloud, DevOps & Infrastructure',
      icon: Cloud,
      skills: [
        { name: 'Docker', context: 'Docker Compose', primary: true },
        { name: 'Microsoft Azure', context: 'AZ-900 Certified', primary: true },
        { name: 'Git & GitHub Actions', context: 'CI/CD Pipelines' },
        { name: 'Nginx', context: 'Reverse Proxy' },
        { name: 'Flyway', context: 'SQL Versioning' },
      ],
    },
    {
      title: lang === 'es' ? 'Data Engineering & Analytics' : 'Data Engineering & Analytics',
      icon: Database,
      skills: [
        { name: 'PostgreSQL 16', context: 'pgvector & RLS', primary: true },
        { name: 'Neo4j 5', context: 'Cypher / Graph DB', primary: true },
        { name: 'Google BigQuery', context: 'Dataform & ML' },
        { name: 'DuckDB & Pandas', context: 'In-Memory Analytics' },
        { name: 'Power BI', context: 'DAX & Data Modeling' },
      ],
    },
    {
      title: lang === 'es' ? 'IA Aplicada & Aseguramiento de Calidad' : 'Applied AI & Quality Assurance',
      icon: Cpu,
      skills: [
        { name: 'LangGraph', context: 'Agentic GraphRAG', primary: true },
        { name: 'Celery & Redis', context: 'Distributed Task Queue', primary: true },
        { name: 'Ollama / LLMs', context: 'Local AI Inference' },
        { name: 'Pytest & xUnit', context: 'Backend Test Suites' },
        { name: 'Vitest & RTL', context: 'Frontend Unit Testing' },
        { name: 'Playwright', context: 'End-to-End Automation' },
      ],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-24 space-y-8" aria-label={lang === 'es' ? 'Habilidades técnicas' : 'Technical skills'}>
      <SectionHeader
        badge={lang === 'es' ? 'Pila Tecnológica' : 'Technical Stack'}
        title={lang === 'es' ? 'Tecnologías y Dominios de Especialidad' : 'Technologies & Core Domains'}
        description={
          lang === 'es'
            ? 'Herramientas y tecnologías aplicadas en proyectos de ingeniería de software, arquitectura de sistemas, pipelines analíticos e inteligencia artificial.'
            : 'Technologies applied across software engineering projects, system architecture, data analytics pipelines, and AI systems.'
        }
      />

      {/* Agrupación Compacta, Limpia y Escaneable */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {domains.map((domain) => {
          const Icon = domain.icon;
          return (
            <div
              key={domain.title}
              className="p-4 sm:p-5 rounded-xl border border-border/80 bg-surface/80 hover:border-primary/40 transition-colors space-y-3"
            >
              <div className="flex items-center gap-2.5 pb-1 border-b border-border/50 text-text-primary">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary border border-primary/20 shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-bold tracking-tight">
                  {domain.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {domain.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant={skill.primary ? 'accent' : 'outline'}
                    className="text-xs font-mono py-0.5 px-2 font-normal"
                    title={skill.context}
                  >
                    <span>{skill.name}</span>
                    {skill.context ? (
                      <span className="text-[10px] text-text-muted ml-1 opacity-75">
                        ({skill.context})
                      </span>
                    ) : null}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
