import { Code2, Compass, GraduationCap, Languages, Sparkles, CheckCircle2 } from 'lucide-react';
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
        {/* Columna Principal Editorial (7 columnas) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="prose text-text-secondary text-base leading-relaxed space-y-4">
            <p>
              {lang === 'es'
                ? 'Concibo el desarrollo de software como una disciplina de modelado formal. Frente a la complejidad de las reglas de negocio, aplico principios arquitectónicos claros para mantener el código mantenible y resistente a la deuda técnica.'
                : 'I approach software development as a formal modeling discipline. Facing complex business domains, I enforce clear architectural boundaries to keep codebases resilient and free from technical debt.'}
            </p>
          </div>

          {/* Tres Pilares Técnicos Editoriales */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-border/80 bg-surface/60">
              <Compass className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h3 className="text-sm font-semibold text-text-primary">
                  Domain-Driven Design (DDD)
                </h3>
                <p className="text-xs text-text-secondary leading-normal">
                  {lang === 'es'
                    ? 'Aislamiento de la lógica de dominio en Bounded Contexts independientes, agregados consistentes y desacoplamiento de frameworks o detalles de infraestructura.'
                    : 'Encapsulating domain logic into independent Bounded Contexts, consistent aggregates, and complete isolation from infrastructure concerns.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-border/80 bg-surface/60">
              <Sparkles className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h3 className="text-sm font-semibold text-text-primary">
                  {lang === 'es' ? 'Persistencia Políglota Estratégica' : 'Strategic Polyglot Persistence'}
                </h3>
                <p className="text-xs text-text-secondary leading-normal">
                  {lang === 'es'
                    ? 'Modelado relacional con PostgreSQL para transacciones críticas, extensiones vectoriales (pgvector) para recuperación semántica y grafos (Neo4j) para redes de relaciones complejas.'
                    : 'Relational modeling with PostgreSQL for transactional integrity, vector extensions (pgvector) for semantic retrieval, and graphs (Neo4j) for relationship networks.'}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3.5 rounded-xl border border-border/80 bg-surface/60">
              <Code2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <h3 className="text-sm font-semibold text-text-primary">
                  {lang === 'es' ? 'Cultura de Calidad Verificable' : 'Verifiable Quality Culture'}
                </h3>
                <p className="text-xs text-text-secondary leading-normal">
                  {lang === 'es'
                    ? 'Pruebas unitarias, de integración y end-to-end (Pytest, Vitest, xUnit, Playwright) integradas en pipelines automatizados como criterio inmutable de entrega.'
                    : 'Unit, integration, and end-to-end automated suites (Pytest, Vitest, xUnit, Playwright) embedded into CI pipelines as non-negotiable acceptance gates.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Lateral de Formación e Idiomas (5 columnas) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Ficha Académica UPC */}
          <div className="p-5 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/5 via-surface to-surface space-y-4 shadow-2xs">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <GraduationCap className="h-5 w-5" />
                <span>{lang === 'es' ? 'Formación Universitaria' : 'University Education'}</span>
              </div>
              <Badge variant="accent" className="font-semibold text-xs px-2.5 py-0.5">
                {verifiedProfile.university.distinction[lang]}
              </Badge>
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-bold text-text-primary">
                {verifiedProfile.university.name}
              </h3>
              <p className="text-sm font-semibold text-primary">
                {verifiedProfile.university.program[lang]}
              </p>
              <p className="text-xs text-text-muted font-mono pt-0.5">
                {verifiedProfile.university.currentSemester} • {verifiedProfile.university.period}
              </p>
            </div>

            <div className="pt-2 border-t border-border/60 text-xs text-text-secondary space-y-1.5">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                <span>{lang === 'es' ? 'Rendimiento académico en el 10% superior' : 'Top 10% academic standing (Décimo Superior)'}</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                <span>{lang === 'es' ? 'Tesis de titulación en Agentic GraphRAG' : 'Graduation thesis in Agentic GraphRAG'}</span>
              </p>
            </div>
          </div>

          {/* Bloque de Idiomas */}
          <div className="p-4 rounded-xl border border-border/80 bg-surface space-y-3">
            <div className="flex items-center gap-2 text-text-primary font-semibold text-xs uppercase tracking-wider">
              <Languages className="h-4 w-4 text-primary" />
              <span>{lang === 'es' ? 'Competencia Lingüística' : 'Language Proficiency'}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {verifiedProfile.languages.map((l) => (
                <div key={l.language.en} className="p-2.5 rounded-lg border border-border/60 bg-surface-muted/50 flex flex-col gap-0.5">
                  <span className="font-semibold text-text-primary">{l.language[lang]}</span>
                  <span className="text-text-muted text-[11px]">{l.proficiency[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
