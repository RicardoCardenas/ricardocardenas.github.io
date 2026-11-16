import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ShieldCheck, CheckCircle2, Network, ImageOff } from 'lucide-react';
import type { ProjectCaseStudy } from '../../types';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { cn } from '../../utils/cn';

export interface FeaturedProjectCardProps {
  project: ProjectCaseStudy;
  lang: 'es' | 'en';
  index?: number;
  className?: string;
}

export function FeaturedProjectCard({
  project,
  lang,
  index,
  className,
}: FeaturedProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      className={cn(
        'group flex flex-col justify-between overflow-hidden transition-all duration-200 hover:border-primary/50 hover:shadow-md',
        project.isAcademicThesis && 'border-primary/30',
        className
      )}
    >
      {/* 1. Visual Preview Banner Superior */}
      {project.isAcademicThesis ? (
        /* Topología abstracta para Nexo (Tesis UPC privada - sin fotos ni datos sensibles) */
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-primary/10 via-surface-elevated to-primary/5 border-b border-border/60 flex items-center justify-center p-4 select-none">
          <svg viewBox="0 0 320 180" className="w-full h-full text-primary/40" fill="none" stroke="currentColor">
            {/* Aristas del grafo */}
            <line x1="80" y1="90" x2="160" y2="45" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="80" y1="90" x2="160" y2="135" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="160" y1="45" x2="240" y2="90" strokeWidth="1.5" strokeDasharray="3 3" className="stroke-amber-500/70" />
            <line x1="160" y1="135" x2="240" y2="90" strokeWidth="1.5" strokeDasharray="3 3" className="stroke-amber-500/70" />
            {/* Nodos */}
            <circle cx="80" cy="90" r="22" className="fill-surface stroke-primary/60" strokeWidth="1.5" />
            <circle cx="160" cy="45" r="20" className="fill-surface stroke-primary/60" strokeWidth="1.5" />
            <circle cx="160" cy="135" r="20" className="fill-surface stroke-primary/60" strokeWidth="1.5" />
            <circle cx="240" cy="90" r="26" className="fill-amber-500/5 stroke-amber-500/80" strokeWidth="1.75" strokeDasharray="3 3" />
            {/* Etiquetas de nodos */}
            <text x="80" y="93" textAnchor="middle" className="text-[10px] fill-text-primary font-mono font-medium" stroke="none">Postgres</text>
            <text x="160" y="48" textAnchor="middle" className="text-[10px] fill-text-primary font-mono font-medium" stroke="none">Neo4j</text>
            <text x="160" y="138" textAnchor="middle" className="text-[10px] fill-text-primary font-mono font-medium" stroke="none">pgvector</text>
            <text x="240" y="87" textAnchor="middle" className="text-[9.5px] fill-amber-600 dark:fill-amber-400 font-mono font-bold" stroke="none">LangGraph</text>
            <text x="240" y="99" textAnchor="middle" className="text-[7px] fill-amber-600 dark:fill-amber-400 font-mono font-semibold uppercase" stroke="none">{lang === 'es' ? 'Planificado' : 'Planned'}</text>
          </svg>

          <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface/90 border border-primary/30 text-[10px] font-semibold text-primary backdrop-blur-xs shadow-2xs">
            <Network className="h-3 w-3 text-primary shrink-0" />
            <span>Agentic GraphRAG</span>
          </div>

          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface/85 border border-border/80 text-[10px] font-mono text-text-muted backdrop-blur-xs">
            <span>FastAPI Monolith • Polyglot Persistence</span>
          </div>
        </div>
      ) : project.coverImage && !imageError ? (
        /* Captura o diagrama técnico verificado */
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted/60 border-b border-border/60">
          <img
            src={project.coverImage}
            alt={project.title}
            onError={() => setImageError(true)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-50" />
          {index !== undefined ? (
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-surface/90 border border-border/80 font-mono text-[10px] text-text-muted backdrop-blur-xs font-semibold">
              0{index + 1}
            </div>
          ) : null}
        </div>
      ) : (
        /* Fallback abstracto cuando no hay imagen disponible */
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-muted/40 border-b border-border/60 flex items-center justify-center">
          <div className="flex items-center gap-2 text-xs text-text-muted font-mono">
            <ImageOff className="h-4 w-4" />
            <span>{project.title}</span>
          </div>
        </div>
      )}

      {/* 2. Cabecera con Metadatos, Categorías y Título */}
      <CardHeader className="space-y-3 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.categories.map((cat) => (
              <Badge key={cat} variant="accent" className="text-[11px] font-semibold">
                {cat === 'software-engineering'
                  ? 'Software Eng.'
                  : cat === 'data-ai'
                  ? 'Data & AI'
                  : 'Mobile'}
              </Badge>
            ))}
            <Badge variant="outline" className="text-[11px]">
              {project.statusLabel[lang]}
            </Badge>
          </div>

          {project.isAcademicThesis ? (
            <Badge variant="warning" className="gap-1 text-[11px]">
              <ShieldCheck className="h-3 w-3" />
              <span>{lang === 'es' ? 'Tesis UPC' : 'UPC Thesis'}</span>
            </Badge>
          ) : null}
        </div>

        <div>
          <CardTitle className="text-xl text-text-primary group-hover:text-primary transition-colors duration-150">
            <Link to={`/projects/${project.slug}`} className="hover:underline focus-visible:outline-hidden">
              {project.title}
            </Link>
          </CardTitle>
          <p className="text-xs text-text-muted font-medium mt-1">
            {project.personalRole[lang]}
          </p>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
          {project.summary[lang]}
        </p>
      </CardHeader>

      {/* 3. Contenido: Aporte Principal y Tecnologías */}
      <CardContent className="space-y-4 pt-0">
        {project.contributions[lang] && project.contributions[lang].length > 0 ? (
          <div className="space-y-1.5 border-t border-border/60 pt-3">
            <p className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              <span>{lang === 'es' ? 'Aporte principal' : 'Key contribution'}</span>
            </p>
            <p className="text-xs text-text-secondary leading-normal">
              {project.contributions[lang][0]}
            </p>
          </div>
        ) : null}

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-muted text-text-secondary border border-border/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 ? (
            <span className="text-[10px] text-text-muted self-center font-mono">
              +{project.technologies.length - 6}
            </span>
          ) : null}
        </div>
      </CardContent>

      {/* 4. Footer: Enlace al Caso de Estudio y Código / Enlace Externo */}
      <CardFooter className="pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-2">
        <Link to={`/projects/${project.slug}`} className="inline-flex items-center">
          <Button variant="ghost" size="sm" className="gap-1.5 p-0 text-primary text-xs hover:text-primary-hover font-semibold">
            <span>{lang === 'es' ? 'Ver caso de estudio' : 'Read case study'}</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
          </Button>
        </Link>

        {project.links.github ? (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub - ${project.title}`}
          >
            <Button variant="outline" size="sm" className="gap-1.5 text-xs h-8">
              <span>GitHub</span>
              <ExternalLink className="h-3 w-3" />
            </Button>
          </a>
        ) : project.isPrivateCode ? (
          <div
            className="flex items-center gap-1 text-[11px] text-text-muted italic px-2 py-1 rounded bg-surface-muted/60 border border-border/40 select-none"
            title={lang === 'es' ? 'Código privado durante el desarrollo del proyecto de tesis' : 'Private codebase during thesis project development'}
          >
            <ShieldCheck className="h-3 w-3 text-warning" />
            <span>{lang === 'es' ? 'Código Privado' : 'Private Code'}</span>
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
}
