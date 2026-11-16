import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { verifiedProjects } from '../data/projects';
import { NotFoundPage } from './NotFoundPage';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { ArrowLeft, ExternalLink, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation('common');
  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'es';

  const project = verifiedProjects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFoundPage />;
  }

  const relatedProjects = verifiedProjects.filter((p) =>
    project.relatedProjectSlugs.includes(p.slug)
  );

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-text-muted">
        <Link to="/" className="hover:text-text-primary transition-colors">
          {lang === 'es' ? 'Inicio' : 'Home'}
        </Link>
        <span>/</span>
        <Link to="/projects" className="hover:text-text-primary transition-colors">
          {lang === 'es' ? 'Proyectos' : 'Projects'}
        </Link>
        <span>/</span>
        <span className="text-text-primary font-medium truncate max-w-xs">{project.title}</span>
      </nav>

      {/* Cabecera del Caso de Estudio */}
      <div className="space-y-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {project.categories.map((cat) => (
            <Badge key={cat} variant="accent">
              {cat === 'software-engineering'
                ? 'Software Engineering'
                : cat === 'data-ai'
                ? 'Data & AI'
                : 'Mobile'}
            </Badge>
          ))}
          <Badge variant="outline">{project.statusLabel[lang]}</Badge>
          {project.isAcademicThesis ? (
            <Badge variant="warning" className="gap-1">
              <ShieldCheck className="h-3 w-3" />
              {lang === 'es' ? 'Proyecto de Tesis UPC' : 'UPC Thesis Research'}
            </Badge>
          ) : null}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary">
          {project.title}
        </h1>

        <p className="text-lg text-text-secondary leading-relaxed max-w-3xl">
          {project.summary[lang]}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.links.github ? (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="md" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                {lang === 'es' ? 'Ver Repositorio en GitHub' : 'View on GitHub'}
              </Button>
            </a>
          ) : project.isPrivateCode ? (
            <div className="text-xs text-text-muted italic flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface">
              <ShieldCheck className="h-4 w-4 text-warning" />
              <span>
                {lang === 'es'
                  ? 'Código privado por reserva de investigación de tesis universitaria'
                  : 'Private codebase under university thesis research reservation'}
              </span>
            </div>
          ) : null}

          <Link to="/projects">
            <Button variant="outline" size="md" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              {lang === 'es' ? 'Volver al catálogo' : 'Back to catalog'}
            </Button>
          </Link>
        </div>
      </div>

      {/* Ficha Técnica y Rol */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base text-primary">
            {lang === 'es' ? 'Rol y Contribución Personal' : 'Role & Personal Contributions'}
          </CardTitle>
          <div className="text-sm font-semibold text-text-primary">
            {project.personalRole[lang]}
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-text-secondary">
            {project.contributions[lang].map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Problema y Solución */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {lang === 'es' ? '1. Problema de Negocio / Desafío' : '1. Problem Statement'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-text-secondary leading-relaxed">
            {project.problem[lang]}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              {lang === 'es' ? '2. Solución Implementada' : '2. Proposed Solution'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-text-secondary leading-relaxed">
            {project.solution[lang]}
          </CardContent>
        </Card>
      </div>

      {/* Funcionalidades Implementadas vs Planificadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-success" />
              <CardTitle className="text-base">
                {lang === 'es' ? 'Funcionalidades Implementadas' : 'Implemented Features'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-text-secondary">
              {project.implementedFeatures[lang].map((feat, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-success mt-0.5">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {project.plannedFeatures ? (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-warning" />
                <CardTitle className="text-base">
                  {lang === 'es' ? 'Fases / Tareas Planificadas' : 'Planned Roadmaps'}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-text-secondary">
                {project.plannedFeatures[lang].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-warning mt-0.5">⏳</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : null}
      </div>

      {/* Stack Tecnológico Detallado */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-text-primary">
          {lang === 'es' ? 'Pila Tecnológica Verificada' : 'Verified Tech Stack'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs px-3 py-1 font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* Proyectos Relacionados */}
      {relatedProjects.length > 0 ? (
        <div className="space-y-4 pt-6 border-t border-border">
          <h3 className="text-lg font-bold text-text-primary">
            {lang === 'es' ? 'Proyectos Relacionados' : 'Related Projects'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((rel) => (
              <Card key={rel.id} interactive>
                <CardHeader>
                  <CardTitle className="text-sm">{rel.title}</CardTitle>
                  <p className="text-xs text-text-secondary line-clamp-2">
                    {rel.summary[lang]}
                  </p>
                </CardHeader>
                <CardContent>
                  <Link to={`/projects/${rel.slug}`}>
                    <Button variant="ghost" size="sm" className="p-0 text-primary text-xs">
                      {lang === 'es' ? 'Ver estudio de caso' : 'View case study'} &rarr;
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
