import { Download, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export interface CVSectionProps {
  lang: 'es' | 'en';
}

export function CVSection({ lang }: CVSectionProps) {
  return (
    <section id="cv" className="scroll-mt-24 space-y-8" aria-label={lang === 'es' ? 'Descarga de Currículum' : 'Download CV'}>
      <SectionHeader
        badge={lang === 'es' ? 'Currículum Vitae' : 'Curriculum Vitae'}
        title={lang === 'es' ? 'Currículum Profesional' : 'Professional Resumes'}
        description={
          lang === 'es'
            ? 'Descarga la versión adaptada según el perfil técnico requerido (Software Engineering / Backend o Data Engineering / Analytics).'
            : 'Download targeted versions aligned with your technical requirements (Software Engineering / Backend or Data Engineering / Analytics).'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CV 1: Software & Backend */}
        <Card className="flex flex-col justify-between border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant="accent" className="font-semibold text-xs">
                Software Engineering
              </Badge>
              <span className="text-xs text-text-muted font-mono">PDF • 1 Pág.</span>
            </div>

            <div>
              <CardTitle className="text-xl text-text-primary">
                {lang === 'es' ? 'CV Software Engineering & Backend' : 'Software Engineering & Backend CV'}
              </CardTitle>
              <CardDescription className="text-xs text-text-secondary mt-1">
                {lang === 'es'
                  ? 'Enfocado en diseño de microservicios, Java Spring Boot 3, .NET 9, arquitectura DDD, cloud y pruebas automatizadas.'
                  : 'Tailored for microservices engineering, Java Spring Boot 3, .NET 9, DDD architecture, cloud, and automated testing.'}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-2 text-xs text-text-secondary">
            <p className="font-semibold text-text-primary">
              {lang === 'es' ? 'Áreas clave documentadas:' : 'Core documented areas:'}
            </p>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Spring Boot 3 (Flyway, JPA, OpenAPI), .NET 9 (MediatR, DDD)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>FastAPI, PostgreSQL relacional, Neo4j, Docker Compose</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Pruebas unitarias en Vitest, Pytest, xUnit y Playwright</span>
              </li>
            </ul>
          </CardContent>

          <CardFooter className="pt-2">
            <a
              href="/cv/CV_Ricardo_Cardenas_Minaya-Software.pdf"
              download="CV_Ricardo_Cardenas_Minaya-Software.pdf"
              className="w-full"
            >
              <Button variant="primary" size="md" className="w-full gap-2">
                <Download className="h-4 w-4" />
                <span>{lang === 'es' ? 'Descargar PDF (Software)' : 'Download PDF (Software)'}</span>
              </Button>
            </a>
          </CardFooter>
        </Card>

        {/* CV 2: Data & AI */}
        <Card className="flex flex-col justify-between border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge variant="accent" className="font-semibold text-xs">
                Data & AI
              </Badge>
              <span className="text-xs text-text-muted font-mono">PDF • 1 Pág.</span>
            </div>

            <div>
              <CardTitle className="text-xl text-text-primary">
                {lang === 'es' ? 'CV Data Engineering & Analytics' : 'Data Engineering & Analytics CV'}
              </CardTitle>
              <CardDescription className="text-xs text-text-secondary mt-1">
                {lang === 'es'
                  ? 'Enfocado en Google Cloud BigQuery, pipelines de datos con Dataform, Power BI con DAX, Python analítico y modelos de Machine Learning.'
                  : 'Tailored for Google Cloud BigQuery, data pipelines with Dataform, Power BI with DAX, analytical Python, and Machine Learning models.'}
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-2 text-xs text-text-secondary">
            <p className="font-semibold text-text-primary">
              {lang === 'es' ? 'Áreas clave documentadas:' : 'Core documented areas:'}
            </p>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Google BigQuery (2.4M eventos), BigQuery ML, Dataform</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Python analítico (DuckDB, Pandas, Scikit-Learn K-Means)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                <span>Dashboards ejecutivos en Power BI con medidas DAX</span>
              </li>
            </ul>
          </CardContent>

          <CardFooter className="pt-2">
            <a
              href="/cv/CV_Ricardo_Cardenas-Data.pdf"
              download="CV_Ricardo_Cardenas-Data.pdf"
              className="w-full"
            >
              <Button variant="primary" size="md" className="w-full gap-2">
                <Download className="h-4 w-4" />
                <span>{lang === 'es' ? 'Descargar PDF (Data & AI)' : 'Download PDF (Data & AI)'}</span>
              </Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
