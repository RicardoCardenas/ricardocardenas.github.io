import {
  Code2,
  GraduationCap,
  Languages,
  Sparkles,
  CheckCircle2,
  Briefcase,
  Compass,
  Layers,
  Terminal,
} from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { verifiedProfile } from '../../data/profile';

export interface AboutSectionProps {
  lang: 'es' | 'en';
}

export function AboutSection({ lang }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-24 space-y-8" aria-label={lang === 'es' ? 'Sobre mí' : 'About me'}>
      <SectionHeader
        badge={lang === 'es' ? 'Perfil & Enfoque' : 'Profile & Approach'}
        title={lang === 'es' ? 'Sobre mí y Enfoque de Ingeniería' : 'About Me & Engineering Focus'}
        description={
          lang === 'es'
            ? 'Ingeniería de software orientada a la construcción de sistemas modulares, desacoplados y respaldados por pruebas de software rigurosas.'
            : 'Software engineering dedicated to designing modular, decoupled systems backed by rigorous automated testing.'
        }
      />

      {/* Composición Editorial en 2 Columnas Asimétricas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Columna Izquierda: Tarjeta Visual de Principios de Ingeniería y Craftsmanship (5 columnas) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 sm:p-6 rounded-2xl border border-primary/25 bg-gradient-to-br from-surface via-surface to-primary/5 space-y-5 shadow-2xs">
            <div className="flex items-center justify-between gap-2 border-b border-border/60 pb-3">
              <div className="flex items-center gap-2 text-primary font-bold text-sm">
                <Terminal className="h-4 w-4" />
                <span>{lang === 'es' ? 'Filosofía de Ingeniería' : 'Engineering Philosophy'}</span>
              </div>
              <Badge variant="accent" className="font-semibold text-[11px] px-2 py-0.5">
                Core Principles
              </Badge>
            </div>

            {/* Tres Pilares Técnicos Editoriales */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-3 p-3 rounded-xl border border-border/70 bg-surface/80">
                <Compass className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5 min-w-0">
                  <h3 className="text-xs font-bold text-text-primary">
                    Domain-Driven Design (DDD)
                  </h3>
                  <p className="text-[11px] text-text-secondary leading-snug">
                    {lang === 'es'
                      ? 'Bounded Contexts independientes, agregados consistentes y desacoplamiento de frameworks o infraestructura.'
                      : 'Independent Bounded Contexts, consistent aggregates, and complete isolation from infrastructure concerns.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-border/70 bg-surface/80">
                <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5 min-w-0">
                  <h3 className="text-xs font-bold text-text-primary">
                    {lang === 'es' ? 'Persistencia Políglota Estratégica' : 'Strategic Polyglot Persistence'}
                  </h3>
                  <p className="text-[11px] text-text-secondary leading-snug">
                    {lang === 'es'
                      ? 'PostgreSQL para integridad ACID, extensiones vectoriales (pgvector) y grafos (Neo4j) para relaciones complejas.'
                      : 'PostgreSQL for ACID integrity, vector extensions (pgvector), and graphs (Neo4j) for deep entity relationships.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border border-border/70 bg-surface/80">
                <Code2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div className="space-y-0.5 min-w-0">
                  <h3 className="text-xs font-bold text-text-primary">
                    {lang === 'es' ? 'Cultura de Calidad Verificable' : 'Verifiable Quality Culture'}
                  </h3>
                  <p className="text-[11px] text-text-secondary leading-snug">
                    {lang === 'es'
                      ? 'Suites automatizadas (Pytest, Vitest, xUnit, Playwright) integradas en CI como criterio inmutable de entrega.'
                      : 'Automated suites (Pytest, Vitest, xUnit, Playwright) integrated in CI pipelines as strict acceptance gates.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Bio Editorial + 4 Fichas Estructuradas (7 columnas) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="prose text-text-secondary text-base leading-relaxed space-y-3">
            <p>
              {lang === 'es'
                ? 'Concibo el desarrollo de software como una disciplina de modelado formal. Frente a la complejidad de las reglas de negocio, aplico principios arquitectónicos claros para mantener el código mantenible, resistente a la deuda técnica y preparado para evolucionar sin fricción.'
                : 'I approach software development as a formal modeling discipline. Facing complex business domains, I enforce clear architectural boundaries to keep codebases resilient, testable, and free from accumulating technical debt.'}
            </p>
            <p className="text-sm text-text-muted">
              {lang === 'es'
                ? 'Mi trayectoria abarca desde microservicios backend en Java Spring Boot y .NET 9 con arquitecturas limpias y CQRS, hasta pipelines analíticos con Google Cloud BigQuery e interfaces móviles nativas en Flutter.'
                : 'My background spans backend microservices in Java Spring Boot and .NET 9 with clean architecture and CQRS, analytical data pipelines with Google Cloud BigQuery, and cross-platform mobile apps in Flutter.'}
            </p>
          </div>

          {/* 4 Fichas Estructuradas en Grid 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Ficha 1: Formación */}
            <div className="p-4 rounded-xl border border-primary/25 bg-surface/80 space-y-2 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                  <GraduationCap className="h-4 w-4" />
                  <span>{lang === 'es' ? 'Formación' : 'Education'}</span>
                </div>
                <Badge variant="accent" className="text-[10px] px-2 py-0.2">
                  {verifiedProfile.university.distinction[lang]}
                </Badge>
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">
                  {verifiedProfile.university.name}
                </p>
                <p className="text-[11px] text-text-secondary">
                  {verifiedProfile.university.program[lang]} ({verifiedProfile.university.currentSemester})
                </p>
              </div>
              <div className="pt-1 text-[11px] text-text-muted flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-success shrink-0" />
                <span>{lang === 'es' ? 'Rendimiento en el 10% superior' : 'Top 10% academic standing'}</span>
              </div>
            </div>

            {/* Ficha 2: Enfoque Técnico */}
            <div className="p-4 rounded-xl border border-border/80 bg-surface/80 space-y-2 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                  <Layers className="h-4 w-4" />
                  <span>{lang === 'es' ? 'Enfoque Técnico' : 'Technical Focus'}</span>
                </div>
                <Badge variant="outline" className="text-[10px] px-2 py-0.2">
                  Backend & Data
                </Badge>
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">
                  {lang === 'es' ? 'Sistemas Distribuidos' : 'Distributed Systems'}
                </p>
                <p className="text-[11px] text-text-secondary">
                  Java Spring Boot • .NET 9 • Python FastAPI
                </p>
              </div>
              <div className="pt-1 text-[11px] text-text-muted flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                <span>{lang === 'es' ? 'DDD, CQRS & Cloud Architecture' : 'DDD, CQRS & Cloud Architecture'}</span>
              </div>
            </div>

            {/* Ficha 3: Disponibilidad */}
            <div className="p-4 rounded-xl border border-border/80 bg-surface/80 space-y-2 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                  <Briefcase className="h-4 w-4" />
                  <span>{lang === 'es' ? 'Disponibilidad' : 'Availability'}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] text-success font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                  <span>{lang === 'es' ? 'Activa' : 'Active'}</span>
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">
                  {lang === 'es' ? 'Prácticas Preprofesionales' : 'Pre-Professional Internships'}
                </p>
                <p className="text-[11px] text-text-secondary">
                  {lang === 'es' ? 'Lima, Perú / Modalidad Remota' : 'Lima, Peru / Remote Mode'}
                </p>
              </div>
              <div className="pt-1 text-[11px] text-text-muted flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-success shrink-0" />
                <span>{lang === 'es' ? 'Convenio de Prácticas UPC' : 'UPC Internship Agreement'}</span>
              </div>
            </div>

            {/* Ficha 4: Idiomas */}
            <div className="p-4 rounded-xl border border-border/80 bg-surface/80 space-y-2 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                  <Languages className="h-4 w-4" />
                  <span>{lang === 'es' ? 'Idiomas' : 'Languages'}</span>
                </div>
                <Badge variant="outline" className="text-[10px] px-2 py-0.2">
                  Bilingüe
                </Badge>
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary">
                  {lang === 'es' ? 'Español & Inglés' : 'Spanish & English'}
                </p>
                <p className="text-[11px] text-text-secondary">
                  {lang === 'es' ? 'Español (Nativo) • Inglés (Avanzado B2)' : 'Spanish (Native) • English (Advanced B2)'}
                </p>
              </div>
              <div className="pt-1 text-[11px] text-text-muted flex items-center gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-primary shrink-0" />
                <span>{lang === 'es' ? 'Comunicación técnica fluida' : 'Fluent technical communication'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
