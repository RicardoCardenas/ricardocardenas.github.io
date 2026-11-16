import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { verifiedProjects } from '../data/projects';
import type { ProjectCategory } from '../types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Search, ExternalLink, ShieldCheck, ArrowLeft, ArrowRight, X } from 'lucide-react';

export function ProjectsCatalogPage() {
  const { i18n, t } = useTranslation('common');
  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'es';

  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return verifiedProjects.filter((project) => {
      // Filtro de categoría
      const matchesCategory =
        activeCategory === 'all' || project.categories.includes(activeCategory);

      // Filtro de texto
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const titleMatch = project.title.toLowerCase().includes(query);
      const summaryMatch = project.summary[lang].toLowerCase().includes(query);
      const roleMatch = project.personalRole[lang].toLowerCase().includes(query);
      const techMatch = project.technologies.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && (titleMatch || summaryMatch || roleMatch || techMatch);
    });
  }, [activeCategory, searchQuery, lang]);

  const categoryCounts = useMemo(() => {
    return {
      all: verifiedProjects.length,
      'software-engineering': verifiedProjects.filter((p) =>
        p.categories.includes('software-engineering')
      ).length,
      'data-ai': verifiedProjects.filter((p) => p.categories.includes('data-ai')).length,
      mobile: verifiedProjects.filter((p) => p.categories.includes('mobile')).length,
    };
  }, []);

  return (
    <div className="py-8 sm:py-12 max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-text-muted" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-text-primary transition-colors flex items-center gap-1">
          <ArrowLeft className="h-3 w-3" />
          <span>{lang === 'es' ? 'Inicio' : 'Home'}</span>
        </Link>
        <span>/</span>
        <span className="text-text-primary font-medium">
          {lang === 'es' ? 'Catálogo de Proyectos' : 'Projects Catalog'}
        </span>
      </nav>

      {/* Encabezado Editorial de Página */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold">
          <span>{lang === 'es' ? 'Ingeniería de Software & Datos' : 'Software & Data Engineering'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary">
          {lang === 'es' ? 'Catálogo de Proyectos' : 'Engineering Projects Catalog'}
        </h1>
        <p className="text-base sm:text-lg text-text-secondary max-w-3xl leading-relaxed">
          {lang === 'es'
            ? 'Casos de estudio, arquitecturas modulares, microservicios, pipelines de datos y aplicaciones móviles verificadas con código y especificación matemática.'
            : 'Verified case studies, modular architectures, microservices, data pipelines, and mobile applications with documented technical evidence.'}
        </p>
      </div>

      {/* Barra de Filtros de Categoría y Buscador */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-4 border-b border-border">
        {/* Chips de Categoría */}
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtro por categoría">
          <Button
            variant={activeCategory === 'all' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('all')}
            className="text-xs h-9"
          >
            {lang === 'es' ? 'Todos' : 'All'} ({categoryCounts.all})
          </Button>

          <Button
            variant={activeCategory === 'software-engineering' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('software-engineering')}
            className="text-xs h-9"
          >
            Software ({categoryCounts['software-engineering']})
          </Button>

          <Button
            variant={activeCategory === 'data-ai' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('data-ai')}
            className="text-xs h-9"
          >
            Data & AI ({categoryCounts['data-ai']})
          </Button>

          <Button
            variant={activeCategory === 'mobile' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('mobile')}
            className="text-xs h-9"
          >
            Mobile ({categoryCounts.mobile})
          </Button>
        </div>

        {/* Input de Búsqueda con Botón Limpiar */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'es' ? 'Buscar tecnología, rol o título...' : 'Search stack, role or title...'}
            aria-label={lang === 'es' ? 'Buscar proyectos' : 'Search projects'}
            className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-hidden focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-text-muted hover:text-text-primary rounded-md"
              aria-label="Limpiar búsqueda"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          ) : null}
        </div>
      </div>

      {/* Conteo Dinámico de Resultados */}
      <div className="flex items-center justify-between text-xs text-text-muted">
        <span>
          {lang === 'es'
            ? `Mostrando ${filteredProjects.length} de ${verifiedProjects.length} proyectos verificados`
            : `Showing ${filteredProjects.length} of ${verifiedProjects.length} verified projects`}
        </span>

        {activeCategory !== 'all' || searchQuery ? (
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="text-primary hover:underline font-medium"
          >
            {lang === 'es' ? 'Restablecer filtros' : 'Reset all filters'}
          </button>
        ) : null}
      </div>

      {/* Grilla de Tarjetas de Proyectos */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col justify-between transition-all duration-200 hover:border-primary/40 hover:shadow-xs"
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

              <CardContent className="space-y-3 pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-muted text-text-secondary border border-border/50"
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

              <CardFooter className="pt-3 border-t border-border/60 flex items-center justify-between">
                <Link to={`/projects/${project.slug}`}>
                  <Button variant="ghost" size="sm" className="gap-1.5 p-0 text-primary text-xs hover:text-primary-hover font-medium">
                    <span>{t('actions.viewCaseStudy')}</span>
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
                    <Button variant="outline" size="sm" className="gap-1 text-xs h-8">
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
          ))}
        </div>
      ) : (
        <EmptyState
          onReset={() => {
            setActiveCategory('all');
            setSearchQuery('');
          }}
        />
      )}
    </div>
  );
}
