import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
  return (
    <Card
      className={cn(
        'group flex flex-col justify-between transition-all duration-200 hover:border-primary/50 hover:shadow-md',
        project.isAcademicThesis && 'border-primary/30',
        className
      )}
    >
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
          ) : index !== undefined ? (
            <span className="text-xs font-mono text-text-muted">
              0{index + 1}
            </span>
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

      <CardFooter className="pt-3 border-t border-border/60 flex flex-wrap items-center justify-between gap-2">
        <Link to={`/projects/${project.slug}`}>
          <Button variant="ghost" size="sm" className="gap-1.5 p-0 text-primary text-xs hover:text-primary-hover font-medium">
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
            className="flex items-center gap-1 text-[11px] text-text-muted italic px-2 py-1 rounded bg-surface-muted/60 border border-border/40"
            title={lang === 'es' ? 'Código privado por reserva de investigación' : 'Private codebase for thesis research'}
          >
            <ShieldCheck className="h-3 w-3 text-warning" />
            <span>{lang === 'es' ? 'Código Privado' : 'Private Code'}</span>
          </div>
        ) : null}
      </CardFooter>
    </Card>
  );
}
