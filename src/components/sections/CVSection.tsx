import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { buttonVariants } from '../ui/Button';

export interface CVSectionProps {
  lang: 'es' | 'en';
}

export function CVSection({ lang }: CVSectionProps) {
  return (
    <section id="cv" className="scroll-mt-24 space-y-6" aria-label={lang === 'es' ? 'Descarga de Currículum' : 'Download CV'}>
      <SectionHeader
        badge={lang === 'es' ? 'Currículum Vitae' : 'Curriculum Vitae'}
        title={lang === 'es' ? 'Descarga de Currículum Profesional' : 'Download Professional Resumes'}
        description={
          lang === 'es'
            ? 'Dos versiones oficiales en formato PDF de 1 página optimizadas según el enfoque técnico requerido.'
            : 'Two official 1-page PDF versions tailored to specific technical roles.'
        }
      />

      {/* Bloque Compacto y Diferenciado de Descarga */}
      <div className="rounded-2xl border border-primary/25 bg-gradient-to-br from-surface via-surface to-primary/5 p-5 sm:p-6 shadow-2xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-border/60">
          {/* Opción 1: Software & Backend */}
          <div className="space-y-4 md:pr-6">
            <div className="flex items-center justify-between">
              <Badge variant="accent" className="font-semibold text-xs">
                Software Engineering
              </Badge>
              <span className="text-xs text-text-muted font-mono flex items-center gap-1">
                <FileText className="h-3.5 w-3.5 text-primary" />
                <span>PDF • 1 Pág.</span>
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text-primary">
                {lang === 'es' ? 'CV Software Engineering & Backend' : 'Software Engineering & Backend CV'}
              </h3>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                {lang === 'es'
                  ? 'Especializado en diseño de microservicios, Java Spring Boot 3, .NET 9, arquitectura DDD, cloud y pruebas automatizadas.'
                  : 'Tailored for microservices design, Java Spring Boot 3, .NET 9, DDD architecture, cloud, and automated testing.'}
              </p>
            </div>

            <ul className="space-y-1.5 text-xs text-text-secondary">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Spring Boot 3 (Flyway, JPA, OpenAPI), .NET 9 (MediatR)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>FastAPI, PostgreSQL relacional, Neo4j, Docker Compose</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="/cv/CV_Ricardo_Cardenas_Software_Backend.pdf"
                download="CV_Ricardo_Cardenas_Software_Backend.pdf"
                className={buttonVariants({ variant: 'primary', size: 'md', className: 'w-full gap-2 text-xs font-semibold h-10 shadow-xs cursor-pointer' })}
              >
                <Download className="h-4 w-4" />
                <span>{lang === 'es' ? 'Descargar CV Software (PDF)' : 'Download Software CV (PDF)'}</span>
              </a>
            </div>
          </div>

          {/* Opción 2: Data & AI */}
          <div className="space-y-4 pt-6 md:pt-0 md:pl-6">
            <div className="flex items-center justify-between">
              <Badge variant="accent" className="font-semibold text-xs">
                Data & AI
              </Badge>
              <span className="text-xs text-text-muted font-mono flex items-center gap-1">
                <FileText className="h-3.5 w-3.5 text-primary" />
                <span>PDF • 1 Pág.</span>
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-text-primary">
                {lang === 'es' ? 'CV Data Engineering & Analytics' : 'Data Engineering & Analytics CV'}
              </h3>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                {lang === 'es'
                  ? 'Especializado en Google Cloud BigQuery, pipelines de datos con Dataform, Power BI con DAX, Python analítico y modelos de ML.'
                  : 'Tailored for Google Cloud BigQuery, data pipelines with Dataform, Power BI with DAX, analytical Python, and ML models.'}
              </p>
            </div>

            <ul className="space-y-1.5 text-xs text-text-secondary">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Google BigQuery (2.4M eventos), BigQuery ML, Dataform</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Python analítico (DuckDB, Pandas) & Power BI con DAX</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="/cv/CV_Ricardo_Cardenas-Data.pdf"
                download="CV_Ricardo_Cardenas-Data.pdf"
                className={buttonVariants({ variant: 'primary', size: 'md', className: 'w-full gap-2 text-xs font-semibold h-10 shadow-xs cursor-pointer' })}
              >
                <Download className="h-4 w-4" />
                <span>{lang === 'es' ? 'Descargar CV Data & AI (PDF)' : 'Download Data & AI CV (PDF)'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
