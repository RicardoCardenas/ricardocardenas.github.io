import { Code2, Compass, GraduationCap, Languages, Sparkles } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { verifiedProfile } from '../../data/profile';

export interface AboutSectionProps {
  lang: 'es' | 'en';
}

export function AboutSection({ lang }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-24 space-y-8" aria-label={lang === 'es' ? 'Sobre mí' : 'About me'}>
      <SectionHeader
        badge={lang === 'es' ? 'Perfil Profesional' : 'Professional Profile'}
        title={lang === 'es' ? 'Sobre mí y Enfoque de Ingeniería' : 'About Me & Engineering Focus'}
        description={
          lang === 'es'
            ? 'Ingeniería de software fundamentada en modularidad, diseño dirigido por el dominio, contratos estrictos y calidad comprobada con pruebas automatizadas.'
            : 'Software engineering grounded in modularity, domain-driven design, robust contracts, and quality assured by automated testing.'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Columna 1: Enfoque de Ingeniería */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center gap-2.5 text-primary">
              <Code2 className="h-5 w-5" />
              <CardTitle className="text-lg">
                {lang === 'es' ? 'Enfoque Técnico y Principios' : 'Technical Focus & Principles'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>
              {lang === 'es'
                ? 'Concibo el desarrollo de software no solo como escritura de código, sino como el modelado riguroso de reglas de negocio para construir sistemas escalables y mantenibles en el tiempo.'
                : 'I view software development not merely as writing code, but as the rigorous modeling of business domains to build maintainable, scalable systems over time.'}
            </p>

            <ul className="space-y-2.5 pt-1">
              <li className="flex items-start gap-2">
                <Compass className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-primary">Domain-Driven Design (DDD):</strong>{' '}
                  {lang === 'es'
                    ? 'Separación explícita en Bounded Contexts, agregados y modelos desacoplados de la infraestructura.'
                    : 'Explicit separation into Bounded Contexts, aggregates, and infrastructure-isolated domain models.'}
                </span>
              </li>

              <li className="flex items-start gap-2">
                <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-primary">Persistencia Políglota:</strong>{' '}
                  {lang === 'es'
                    ? 'Almacenamiento relacional (PostgreSQL/MySQL), vectorial (pgvector) y de grafos (Neo4j) según la naturaleza del dato.'
                    : 'Relational (PostgreSQL/MySQL), vector (pgvector), and graph (Neo4j) storage fitted to data characteristics.'}
                </span>
              </li>

              <li className="flex items-start gap-2">
                <Code2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong className="text-text-primary">Cultura de Calidad:</strong>{' '}
                  {lang === 'es'
                    ? 'Pruebas unitarias, de integración y E2E (Vitest, Pytest, xUnit, Playwright) como garantía inmutable de entrega.'
                    : 'Unit, integration, and E2E test suites (Vitest, Pytest, xUnit, Playwright) as non-negotiable delivery gates.'}
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Columna 2: Trayectoria Académica en UPC */}
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex items-center gap-2.5 text-primary">
              <GraduationCap className="h-5 w-5" />
              <CardTitle className="text-lg">
                {lang === 'es' ? 'Formación y Distinciones' : 'Education & Distinctions'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 space-y-1.5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-semibold text-text-primary text-base">
                  {verifiedProfile.university.name}
                </span>
                <Badge variant="accent">
                  {verifiedProfile.university.distinction[lang]}
                </Badge>
              </div>
              <p className="text-xs text-primary font-medium">
                {verifiedProfile.university.program[lang]} • {verifiedProfile.university.currentSemester} ({verifiedProfile.university.period})
              </p>
              <p className="text-xs text-text-secondary pt-1">
                {lang === 'es'
                  ? 'Reconocimiento al rendimiento académico superior constante en ciencias de la computación, arquitectura de software, bases de datos y algoritmos.'
                  : 'Consistent academic standing in computer science, software architecture, databases, and algorithms.'}
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-text-primary font-semibold text-sm">
                <Languages className="h-4 w-4 text-primary" />
                <span>{lang === 'es' ? 'Idiomas' : 'Languages'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {verifiedProfile.languages.map((l) => (
                  <div key={l.language.en} className="p-2.5 rounded-lg border border-border bg-surface flex flex-col gap-0.5">
                    <span className="font-medium text-text-primary">{l.language[lang]}</span>
                    <span className="text-text-muted">{l.proficiency[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
