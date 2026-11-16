import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { verifiedProjects } from '../data/projects';
import type { ProjectCategory } from '../types';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { EmptyState } from '../components/ui/EmptyState';
import { Search, ExternalLink, ShieldCheck, ArrowLeft } from 'lucide-react';

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
      const techMatch = project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && (titleMatch || summaryMatch || techMatch);
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
    <div className="py-12 max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-text-muted">
        <Link to="/" className="hover:text-text-primary transition-colors flex items-center gap-1">
          <ArrowLeft className="h-3 w-3" />
          <span>{lang === 'es' ? 'Inicio' : 'Home'}</span>
        </Link>
        <span>/</span>
        <span className="text-text-primary font-medium">
          {lang === 'es' ? 'Proyectos' : 'Projects'}
        </span>
      </nav>

      {/* Título de Página */}
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
          {lang === 'es' ? 'Catálogo de Proyectos de Ingeniería' : 'Engineering Projects Catalog'}
        </h1>
        <p className="text-base text-text-secondary max-w-2xl">
          {lang === 'es'
            ? 'Casos de estudio, arquitecturas modulares, microservicios, pipelines de datos y aplicaciones móviles verificadas.'
            : 'Case studies, modular architectures, microservices, data pipelines, and verified mobile applications.'}
        </p>
      </div>

      {/* Barra de Filtros y Búsqueda */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-2 border-b border-border">
        {/* Chips de Categoría */}
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={activeCategory === 'all' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('all')}
          >
            {lang === 'es' ? 'Todos' : 'All'} ({categoryCounts.all})
          </Button>
          <Button
            variant={activeCategory === 'software-engineering' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('software-engineering')}
          >
            Software ({categoryCounts['software-engineering']})
          </Button>
          <Button
            variant={activeCategory === 'data-ai' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('data-ai')}
          >
            Data & AI ({categoryCounts['data-ai']})
          </Button>
          <Button
            variant={activeCategory === 'mobile' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory('mobile')}
          >
            Mobile ({categoryCounts.mobile})
          </Button>
        </div>

        {/* Input de Búsqueda */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'es' ? 'Buscar tecnología o título...' : 'Search stack or title...'}
            className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg bg-surface border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Conteo de Resultados */}
      <div className="text-xs text-text-muted">
        {lang === 'es'
          ? `Mostrando ${filteredProjects.length} de ${verifiedProjects.length} proyectos`
          : `Showing ${filteredProjects.length} of ${verifiedProjects.length} projects`}
      </div>

      {/* Grilla de Proyectos */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} interactive className="flex flex-col justify-between">
              <div>
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap gap-1">
                      {project.categories.map((cat) => (
                        <Badge key={cat} variant="accent">
                          {cat === 'software-engineering'
                            ? 'Software'
                            : cat === 'data-ai'
                            ? 'Data & AI'
                            : 'Mobile'}
                        </Badge>
                      ))}
                    </div>
                    {project.isAcademicThesis ? (
                      <Badge variant="warning" className="gap-1">
                        <ShieldCheck className="h-3 w-3" />
                        {lang === 'es' ? 'Tesis UPC' : 'UPC Thesis'}
                      </Badge>
                    ) : null}
                  </div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="pt-1">
                    {project.summary[lang]}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 6).map((t) => (
                      <Badge key={t} variant="outline" className="text-[11px]">
                        {t}
                      </Badge>
                    ))}
                    {project.technologies.length > 6 ? (
                      <Badge variant="outline" className="text-[11px]">
                        +{project.technologies.length - 6}
                      </Badge>
                    ) : null}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="justify-between">
                <Link to={`/projects/${project.slug}`}>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover p-0">
                    {t('actions.viewCaseStudy')} &rarr;
                  </Button>
                </Link>

                {project.links.github ? (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-muted hover:text-text-primary flex items-center gap-1"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-[11px] text-text-muted italic">
                    {lang === 'es' ? 'Código privado' : 'Private repo'}
                  </span>
                )}
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
