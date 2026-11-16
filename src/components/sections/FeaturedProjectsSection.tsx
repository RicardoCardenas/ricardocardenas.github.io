import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { verifiedProjects } from '../../data/projects';
import { SectionHeader } from '../ui/SectionHeader';
import { FeaturedProjectCard } from '../ui/FeaturedProjectCard';
import { Button } from '../ui/Button';

export interface FeaturedProjectsSectionProps {
  lang: 'es' | 'en';
}

export function FeaturedProjectsSection({ lang }: FeaturedProjectsSectionProps) {
  // Obtenemos los 4 proyectos destacados verificados
  const featured = verifiedProjects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <section
      id="featured-projects"
      className="scroll-mt-24 space-y-8"
      aria-label={lang === 'es' ? 'Proyectos destacados' : 'Featured projects'}
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <SectionHeader
          badge={lang === 'es' ? 'Casos de Estudio' : 'Case Studies'}
          title={lang === 'es' ? 'Proyectos Destacados' : 'Featured Engineering Projects'}
          description={
            lang === 'es'
              ? 'Arquitecturas modulares, sistemas distribuidos, microservicios empresariales y pipelines analíticos con código verificable.'
              : 'Modular architectures, distributed systems, enterprise microservices, and analytical pipelines backed by verifiable code.'
          }
        />

        <Link to="/projects" className="shrink-0 hidden sm:block">
          <Button variant="outline" size="sm" className="gap-2 text-xs">
            <span>{lang === 'es' ? 'Ver los 8 proyectos' : 'View all 8 projects'}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((project, idx) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            lang={lang}
            index={idx}
          />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center pt-6 space-y-3">
        <Link to="/projects">
          <Button variant="primary" size="lg" className="gap-2 shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>
              {lang === 'es'
                ? 'Ver Catálogo Completo (8 Proyectos)'
                : 'View Full Catalog (8 Projects)'}
            </span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>

        <p className="text-xs text-text-muted text-center max-w-md">
          {lang === 'es'
            ? 'Incluye proyectos en Java Spring Boot, .NET 9, Python FastAPI, Flutter y Google Cloud Platform.'
            : 'Includes projects built with Java Spring Boot, .NET 9, Python FastAPI, Flutter, and Google Cloud Platform.'}
        </p>
      </div>
    </section>
  );
}
