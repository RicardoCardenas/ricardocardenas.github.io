import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { verifiedProjects } from '../data/projects';
import { NotFoundPage } from './NotFoundPage';
import { Badge } from '../components/ui/Badge';
import { buttonVariants } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { ArchitectureDiagram } from '../components/projects/ArchitectureDiagram';
import { MetricsBanner } from '../components/projects/MetricsBanner';
import { KeyDecisionsCard } from '../components/projects/KeyDecisionsCard';
import { ProjectGallery } from '../components/projects/ProjectGallery';
import { ProjectCoverGraphic } from '../components/projects/ProjectCoverGraphic';
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Info,
  Lightbulb,
} from 'lucide-react';

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
    <div className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
      {/* 1. Breadcrumbs Semánticos */}
      <nav className="flex items-center gap-2 text-xs text-text-muted" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-text-primary transition-colors flex items-center gap-1 cursor-pointer">
          <ArrowLeft className="h-3 w-3" />
          <span>{lang === 'es' ? 'Inicio' : 'Home'}</span>
        </Link>
        <span>/</span>
        <Link to="/projects" className="hover:text-text-primary transition-colors cursor-pointer">
          {lang === 'es' ? 'Catálogo de Proyectos' : 'Projects Catalog'}
        </Link>
        <span>/</span>
        <span className="text-text-primary font-medium truncate max-w-xs">{project.title}</span>
      </nav>

      {/* 2. Cabecera Principal del Caso de Estudio (Layout Editorial 2 Columnas en Desktop) */}
      <div className="border-b border-border pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Columna Izquierda (7 columnas): Metadatos, Título, Resumen y CTAs */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              {project.categories.map((cat) => (
                <Badge key={cat} variant="accent" className="font-semibold text-xs">
                  {cat === 'software-engineering'
                    ? 'Software Engineering'
                    : cat === 'data-ai'
                    ? 'Data & AI'
                    : 'Mobile'}
                </Badge>
              ))}
              <Badge variant="outline" className="text-xs">{project.statusLabel[lang]}</Badge>
              {project.isAcademicThesis ? (
                <Badge variant="warning" className="gap-1 text-xs">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>{lang === 'es' ? 'Proyecto de Tesis UPC' : 'UPC Thesis Research'}</span>
                </Badge>
              ) : null}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {project.summary[lang]}
            </p>

            {/* Acciones de Cabecera */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.links.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: 'primary', size: 'md', className: 'gap-2 shadow-xs cursor-pointer active:scale-[0.98] transition-transform' })}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{lang === 'es' ? 'Ver Repositorio en GitHub' : 'View on GitHub'}</span>
                </a>
              ) : project.isPrivateCode ? (
                <div className="text-xs text-text-muted italic flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-surface shadow-2xs">
                  <ShieldCheck className="h-4 w-4 text-warning shrink-0" />
                  <span>
                    {lang === 'es'
                      ? 'Código fuente privado durante el desarrollo del proyecto de tesis universitaria UPC'
                      : 'Private codebase during UPC university thesis project development'}
                  </span>
                </div>
              ) : null}

              <Link
                to="/projects"
                className={buttonVariants({ variant: 'outline', size: 'md', className: 'gap-2 cursor-pointer active:scale-[0.98] transition-transform' })}
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{lang === 'es' ? 'Volver al catálogo' : 'Back to catalog'}</span>
              </Link>
            </div>
          </div>

          {/* Columna Derecha (5 columnas): Gráfico de Portada / Previsualización Técnica */}
          <div className="lg:col-span-5 w-full">
            <ProjectCoverGraphic project={project} lang={lang} variant="hero" />
          </div>
        </div>
      </div>

      {/* 3. Banner Informativo de Confidencialidad (si aplica a Nexo) */}
      {project.isAcademicThesis ? (
        <div className="rounded-xl border border-primary/25 bg-primary/5 p-4 sm:p-5 flex items-start gap-3.5 shadow-2xs">
          <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-text-secondary leading-relaxed">
            <p className="font-semibold text-text-primary">
              {lang === 'es' ? 'Aviso de Proyecto de Tesis y Propiedad Intelectual' : 'Thesis Project & Intellectual Property Notice'}
            </p>
            <p>
              {lang === 'es'
                ? 'Este proyecto corresponde a la tesis de titulación profesional en Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC). El código fuente permanece privado durante el desarrollo de la investigación. La presente ficha técnica expone la arquitectura de software DDD, la estrategia de persistencia políglota y los patrones de ingeniería implementados.'
                : 'This project represents undergraduate thesis research in Software Engineering at UPC. The source code remains private during thesis development. This technical spec documents verified DDD software architecture, polyglot storage strategies, and engineering patterns.'}
            </p>
          </div>
        </div>
      ) : null}

      {/* 4. Métricas Clave de Ingeniería */}
      {project.metrics && project.metrics.length > 0 ? (
        <MetricsBanner metrics={project.metrics} lang={lang} />
      ) : null}

      {/* 5. Ficha Técnica de Rol y Contribuciones Personales */}
      <Card className="border-primary/20">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2 text-primary">
            <Layers className="h-5 w-5" />
            <CardTitle className="text-base sm:text-lg">
              {lang === 'es' ? 'Rol y Contribución Personal Confirmada' : 'Role & Confirmed Personal Contributions'}
            </CardTitle>
          </div>
          <p className="text-sm font-semibold text-text-primary">
            {project.personalRole[lang]}
          </p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2.5 text-sm text-text-secondary">
            {project.contributions[lang].map((c, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-primary mt-1 font-bold">•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 6. Problema de Negocio y Solución Propuesta */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base text-text-primary">
              {lang === 'es' ? '1. Problema de Negocio / Desafío' : '1. Problem Statement'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-text-secondary leading-relaxed">
            {project.problem[lang]}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base text-text-primary">
              {lang === 'es' ? '2. Solución Implementada' : '2. Proposed Solution'}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-text-secondary leading-relaxed">
            {project.solution[lang]}
          </CardContent>
        </Card>
      </div>

      {/* 7. Arquitectura del Sistema y Diagrama de Componentes */}
      {project.architectureOverview && project.architectureComponents ? (
        <ArchitectureDiagram
          projectId={project.id}
          overview={project.architectureOverview[lang]}
          components={project.architectureComponents}
          lang={lang}
        />
      ) : null}

      {/* 8. Desglose Transparente: Implementado vs Planificado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-success/20">
          <CardHeader>
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 className="h-4 w-4" />
              <CardTitle className="text-base text-text-primary">
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
          <Card className="border-warning/20">
            <CardHeader>
              <div className="flex items-center gap-2 text-warning">
                <Clock className="h-4 w-4" />
                <CardTitle className="text-base text-text-primary">
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

      {/* 9. Decisiones de Arquitectura Relevantes (ADRs) */}
      {project.keyDecisions && project.keyDecisions.length > 0 ? (
        <KeyDecisionsCard decisions={project.keyDecisions} lang={lang} />
      ) : null}

      {/* 10. Evidencia Visual y Galería */}
      {project.galleryImages && project.galleryImages.length > 0 ? (
        <ProjectGallery images={project.galleryImages} title={project.title} lang={lang} />
      ) : null}

      {/* 11. Retos y Aprendizajes de Ingeniería */}
      {project.challengesAndLearnings ? (
        <Card className="border-border">
          <CardHeader className="space-y-1">
            <div className="flex items-center gap-2 text-primary">
              <Lightbulb className="h-5 w-5" />
              <CardTitle className="text-base sm:text-lg">
                {lang === 'es' ? 'Retos de Ingeniería & Aprendizajes Clave' : 'Engineering Challenges & Key Learnings'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-text-secondary">
              {project.challengesAndLearnings[lang].map((ch, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : null}

      {/* 12. Pila Tecnológica Verificada */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-text-primary">
          <Sparkles className="h-4 w-4 text-primary" />
          <h3 className="text-lg font-bold">
            {lang === 'es' ? 'Pila Tecnológica Verificada' : 'Verified Tech Stack'}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs px-3 py-1 font-mono">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      {/* 13. Proyectos Relacionados para Navegación Cruzada */}
      {relatedProjects.length > 0 ? (
        <div className="space-y-4 pt-8 border-t border-border">
          <h3 className="text-lg font-bold text-text-primary">
            {lang === 'es' ? 'Casos de Estudio Relacionados' : 'Related Case Studies'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((rel) => (
              <Card key={rel.id} interactive className="flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-base">{rel.title}</CardTitle>
                  <p className="text-xs text-text-secondary line-clamp-2 mt-1">
                    {rel.summary[lang]}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link
                    to={`/projects/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-primary text-xs hover:text-primary-hover font-medium cursor-pointer"
                  >
                    <span>{lang === 'es' ? 'Ver caso de estudio' : 'Read case study'}</span>
                    <span className="ml-1">&rarr;</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ) : null}

      {/* 14. Botón Inferior de Retorno */}
      <div className="pt-6 border-t border-border flex justify-between items-center">
        <Link
          to="/projects"
          className={buttonVariants({ variant: 'outline', size: 'sm', className: 'gap-2 text-xs cursor-pointer' })}
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>{lang === 'es' ? 'Volver al catálogo completo' : 'Back to projects catalog'}</span>
        </Link>
      </div>
    </div>
  );
}
