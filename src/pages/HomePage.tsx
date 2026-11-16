import { useTranslation } from 'react-i18next';
import { verifiedProfile } from '../data/profile';
import { verifiedProjects } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

export function HomePage() {
  const { i18n, t } = useTranslation('common');
  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'es';

  const featured = verifiedProjects.filter((p) => p.featured);

  return (
    <div className="flex flex-col space-y-24 py-12 max-w-6xl mx-auto px-4 sm:px-6">
      {/* 1. SECCIÓN HERO (#hero) */}
      <section id="hero" className="flex flex-col items-start pt-6 sm:pt-12 space-y-6">
        <Badge variant="accent" className="gap-2 py-1 px-3">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          {verifiedProfile.availability.label[lang]}
        </Badge>

        <div className="space-y-3 max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-primary">
            {verifiedProfile.fullName}
          </h1>
          <p className="text-lg sm:text-xl font-medium text-primary">
            {verifiedProfile.title[lang]}
          </p>
          <p className="text-base text-text-secondary leading-relaxed pt-2">
            {verifiedProfile.headline[lang]}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link to="#featured-projects">
            <Button variant="primary" size="md">
              {t('actions.exploreProjects')}
            </Button>
          </Link>
          <Link to="#cv">
            <Button variant="secondary" size="md">
              <Download className="h-4 w-4 mr-1 text-primary" />
              {t('actions.downloadCV')}
            </Button>
          </Link>
          <div className="flex items-center gap-2 pl-2">
            <a
              href={verifiedProfile.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Ricardo Cardenas"
            >
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a
              href={verifiedProfile.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Ricardo Cardenas"
            >
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a
              href={`mailto:${verifiedProfile.contacts.email}`}
              aria-label="Enviar correo a Ricardo Cardenas"
            >
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SECCIÓN SOBRE MÍ (#about) */}
      <section id="about" className="scroll-mt-24 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">
            {lang === 'es' ? 'Sobre mí' : 'About me'}
          </h2>
          <p className="text-sm text-text-secondary">
            {lang === 'es'
              ? 'Formación académica, principios de ingeniería y áreas de especialización.'
              : 'Academic background, engineering principles, and core specialties.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>
                {lang === 'es' ? 'Enfoque de Ingeniería de Software' : 'Software Engineering Focus'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-text-secondary space-y-3">
              <p>
                {lang === 'es'
                  ? 'Diseño y desarrollo de arquitecturas modulares y distribuidas aplicando Domain-Driven Design (DDD), principios SOLID y Clean Architecture.'
                  : 'Design and development of modular and distributed architectures applying Domain-Driven Design (DDD), SOLID principles, and Clean Architecture.'}
              </p>
              <p>
                {lang === 'es'
                  ? 'Experiencia en persistencia políglota: bases de datos relacionales autoritativas (PostgreSQL, MySQL), grafos de conocimiento (Neo4j) y vectores para recuperación semántica (pgvector).'
                  : 'Experience in polyglot persistence: authoritative relational databases (PostgreSQL, MySQL), knowledge graphs (Neo4j), and vector embeddings for semantic retrieval (pgvector).'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                {lang === 'es' ? 'Excelencia Académica & UPC' : 'Academic Excellence & UPC'}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-text-secondary space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="accent">{verifiedProfile.university.currentSemester}</Badge>
                <Badge variant="success">{verifiedProfile.university.distinction[lang]}</Badge>
              </div>
              <p>
                <strong>{verifiedProfile.university.name}</strong>
                <br />
                {verifiedProfile.university.program[lang]} ({verifiedProfile.university.period})
              </p>
              <p>
                {lang === 'es'
                  ? 'Idiomas: Español (Nativo), Inglés (Avanzado | Certificación oficial TOEFL ITP B2).'
                  : 'Languages: Spanish (Native), English (Advanced | Official TOEFL ITP B2 certified).'}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. SECCIÓN TECNOLOGÍAS (#skills) */}
      <section id="skills" className="scroll-mt-24 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">
            {lang === 'es' ? 'Habilidades y Tecnologías Verificadas' : 'Skills & Verified Stack'}
          </h2>
          <p className="text-sm text-text-secondary">
            {lang === 'es'
              ? 'Herramientas y tecnologías aplicadas activamente en proyectos reales.'
              : 'Tools and technologies actively applied in verified real-world projects.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">
                {lang === 'es' ? 'Lenguajes & Backend' : 'Languages & Backend'}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {['Java 21', 'Spring Boot 3', 'C# / .NET 9', 'Python 3.12', 'FastAPI', 'Node.js', 'Express'].map(
                (item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                )
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">
                {lang === 'es' ? 'Frontend & Móvil' : 'Frontend & Mobile'}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {['React 19', 'TypeScript', 'Vite', 'Vue 3', 'Angular 20', 'Flutter', 'Dart', 'Tailwind CSS'].map(
                (item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                )
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">
                {lang === 'es' ? 'Datos & Cloud' : 'Data & Cloud'}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {['PostgreSQL', 'pgvector', 'Neo4j', 'DuckDB', 'MySQL', 'GCP BigQuery', 'Microsoft Azure', 'Power BI'].map(
                (item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                )
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">
                {lang === 'es' ? 'Arquitectura & QA' : 'Architecture & QA'}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-1.5">
              {['Domain-Driven Design', 'CQRS', 'Docker', 'Celery / Redis', 'LangGraph', 'Vitest', 'xUnit', 'Pytest'].map(
                (item) => (
                  <Badge key={item} variant="default">
                    {item}
                  </Badge>
                )
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. SECCIÓN PROYECTOS DESTACADOS (#featured-projects) */}
      <section id="featured-projects" className="scroll-mt-24 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary">
              {lang === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
            </h2>
            <p className="text-sm text-text-secondary">
              {lang === 'es'
                ? 'Casos de estudio de ingeniería con arquitectura, código y resultados verificables.'
                : 'Engineering case studies with architecture, code, and verifiable results.'}
            </p>
          </div>
          <Link to="/projects">
            <Button variant="outline" size="sm" className="gap-2">
              {lang === 'es' ? 'Ver catálogo completo' : 'View all projects'}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
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
                    {project.technologies.slice(0, 5).map((t) => (
                      <Badge key={t} variant="outline" className="text-[11px]">
                        {t}
                      </Badge>
                    ))}
                    {project.technologies.length > 5 ? (
                      <Badge variant="outline" className="text-[11px]">
                        +{project.technologies.length - 5}
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
      </section>

      {/* 5. SECCIÓN FORMACIÓN Y CERTIFICACIONES (#education) */}
      <section id="education" className="scroll-mt-24 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">
            {lang === 'es' ? 'Formación y Certificaciones' : 'Education & Certifications'}
          </h2>
          <p className="text-sm text-text-secondary">
            {lang === 'es'
              ? 'Títulos universitarios, certificaciones oficiales de industria y formación especializada.'
              : 'University degree, official industry certifications, and specialized coursework.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">Mar 2023 - Dic 2027</span>
                <Badge variant="success">{verifiedProfile.university.distinction[lang]}</Badge>
              </div>
              <CardTitle className="text-base">{verifiedProfile.university.name}</CardTitle>
              <CardDescription>{verifiedProfile.university.program[lang]} • 8.º Ciclo</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">Sep 2026</span>
                <Badge variant="accent">Microsoft Certified</Badge>
              </div>
              <CardTitle className="text-base">Microsoft Certified: Azure Fundamentals (AZ-900)</CardTitle>
              <CardDescription>Microsoft Corporation • Credencial Oficial</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">Jun 2024</span>
                <Badge variant="accent">Nivel B2 Avanzado</Badge>
              </div>
              <CardTitle className="text-base">TOEFL ITP — English Proficiency</CardTitle>
              <CardDescription>ETS (Educational Testing Service)</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">Jul 2026</span>
                <Badge variant="outline">University of Colorado Boulder</Badge>
              </div>
              <CardTitle className="text-base">Databases for Data Scientists</CardTitle>
              <CardDescription>Diseño relacional, consultas SQL complejas y optimización</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* 6. SECCIÓN CV (#cv) */}
      <section id="cv" className="scroll-mt-24 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">
            {lang === 'es' ? 'Currículum Vitae' : 'Curriculum Vitae'}
          </h2>
          <p className="text-sm text-text-secondary">
            {lang === 'es'
              ? 'Descarga los dos perfiles especializados según el área técnica de su interés.'
              : 'Download either specialized resume profile based on your technical focus.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card className="flex flex-col justify-between">
            <CardHeader>
              <Badge variant="accent" className="w-fit mb-2">
                Software Engineering
              </Badge>
              <CardTitle>
                {lang === 'es' ? 'CV Software Engineering & Backend' : 'Software Engineering & Backend CV'}
              </CardTitle>
              <CardDescription>
                {lang === 'es'
                  ? 'Enfocado en diseño de microservicios, Java Spring Boot, .NET, arquitectura DDD, cloud y pruebas automatizadas.'
                  : 'Focused on microservices design, Java Spring Boot, .NET, DDD architecture, cloud, and automated testing.'}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <a
                href="/cv/CV_Ricardo_Cardenas_Minaya-Software.pdf"
                download="CV_Ricardo_Cardenas_Minaya-Software.pdf"
                className="w-full"
              >
                <Button variant="primary" size="md" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  {lang === 'es' ? 'Descargar PDF (Software)' : 'Download PDF (Software)'}
                </Button>
              </a>
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between">
            <CardHeader>
              <Badge variant="accent" className="w-fit mb-2">
                Data & AI
              </Badge>
              <CardTitle>
                {lang === 'es' ? 'CV Data Engineering & Analytics' : 'Data Engineering & Analytics CV'}
              </CardTitle>
              <CardDescription>
                {lang === 'es'
                  ? 'Enfocado en Google Cloud BigQuery, pipelines de datos, Power BI con DAX, Python analítico y modelos de Machine Learning.'
                  : 'Focused on Google Cloud BigQuery, data pipelines, Power BI with DAX, analytical Python, and Machine Learning models.'}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <a
                href="/cv/CV_Ricardo_Cardenas-Data.pdf"
                download="CV_Ricardo_Cardenas-Data.pdf"
                className="w-full"
              >
                <Button variant="primary" size="md" className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  {lang === 'es' ? 'Descargar PDF (Data & AI)' : 'Download PDF (Data & AI)'}
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* 7. SECCIÓN CONTACTO (#contact) */}
      <section id="contact" className="scroll-mt-24 space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">
            {lang === 'es' ? 'Contacto Profesional' : 'Professional Contact'}
          </h2>
          <p className="text-sm text-text-secondary">
            {lang === 'es'
              ? 'Canales directos para consultas, propuestas de prácticas preprofesionales y colaboraciones.'
              : 'Direct channels for inquiries, internship opportunities, and technical collaboration.'}
          </p>
        </div>

        <Card className="p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-semibold text-text-primary">
                {verifiedProfile.fullName}
              </h3>
              <p className="text-sm text-text-secondary">
                {verifiedProfile.location} • {verifiedProfile.contacts.email}
              </p>
              <p className="text-xs text-text-muted">
                {lang === 'es' ? 'Teléfono / WhatsApp:' : 'Phone / WhatsApp:'}{' '}
                {verifiedProfile.contacts.phone}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href={`mailto:${verifiedProfile.contacts.email}`}>
                <Button variant="primary" size="md" className="gap-2">
                  <Mail className="h-4 w-4" />
                  {t('actions.contactMe')}
                </Button>
              </a>
              <a
                href={verifiedProfile.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="md" className="gap-2">
                  <Linkedin className="h-4 w-4 text-primary" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
