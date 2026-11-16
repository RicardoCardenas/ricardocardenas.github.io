import { useState } from 'react';
import { Award, GraduationCap, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CertificationCard } from '../ui/CertificationCard';
import { verifiedProfile } from '../../data/profile';
import { verifiedCertifications } from '../../data/certifications';

export interface EducationSectionProps {
  lang: 'es' | 'en';
}

export function EducationSection({ lang }: EducationSectionProps) {
  const [showAllSpecializations, setShowAllSpecializations] = useState(false);

  // Jerarquía: Certificaciones profesionales y acreditaciones oficiales
  const officialCredentials = verifiedCertifications.filter(
    (c) => c.type === 'professional-certification' || c.type === 'language-accreditation'
  );

  // Especializaciones y cursos completados
  const specializations = verifiedCertifications.filter(
    (c) => c.type === 'specialization' || c.type === 'course-completion'
  );

  const displayedSpecializations = showAllSpecializations
    ? specializations
    : specializations.slice(0, 2);

  return (
    <section id="education" className="scroll-mt-24 space-y-8" aria-label={lang === 'es' ? 'Educación y certificaciones' : 'Education and certifications'}>
      <SectionHeader
        badge={lang === 'es' ? 'Trayectoria Académica' : 'Academic Credentials'}
        title={lang === 'es' ? 'Formación Universitaria y Certificaciones' : 'Education & Verified Certifications'}
        description={
          lang === 'es'
            ? 'Formación de pregrado en la UPC y credenciales profesionales verificadas en computación en la nube, bases de datos, software e inglés.'
            : 'Undergraduate education at UPC alongside verified credentials in cloud computing, databases, software engineering, and English.'
        }
      />

      {/* 1. Tarjeta Destacada de Formación Universitaria UPC */}
      <div className="p-5 sm:p-6 rounded-2xl border border-primary/30 bg-surface/90 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary">
                {verifiedProfile.university.name}
              </h3>
              <p className="text-sm font-semibold text-primary mt-0.5">
                {verifiedProfile.university.program[lang]}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="accent" className="font-semibold px-3 py-1 text-xs">
              <Award className="h-3.5 w-3.5 mr-1" />
              {verifiedProfile.university.distinction[lang]}
            </Badge>
            <Badge variant="outline" className="text-xs">
              {lang === 'es' ? 'Pregrado' : 'Undergraduate'} • {verifiedProfile.university.period}
            </Badge>
          </div>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed pt-1">
          {lang === 'es'
            ? 'Plan curricular orientado a arquitectura de sistemas distribuidos, microservicios, seguridad en aplicaciones, ingeniería de datos y metodologías ágiles. Rendimiento académico constante en el Décimo Superior.'
            : 'Curriculum focused on distributed systems architecture, microservices, application security, data engineering, and agile methodologies. Consistent Top 10% academic standing.'}
        </p>
      </div>

      {/* 2. Nivel 1: Certificaciones Profesionales Oficiales & Acreditaciones */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2 text-text-primary">
          <Award className="h-4.5 w-4.5 text-primary" />
          <h3 className="text-base sm:text-lg font-bold">
            {lang === 'es' ? 'Certificaciones Profesionales y Acreditaciones Oficiales' : 'Professional Certifications & Official Accreditations'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {officialCredentials.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} lang={lang} />
          ))}
        </div>
      </div>

      {/* 3. Nivel 2: Especializaciones y Cursos Completados (Coursera & Industria) */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-text-primary">
            <BookOpen className="h-4.5 w-4.5 text-primary" />
            <h3 className="text-base sm:text-lg font-bold">
              {lang === 'es' ? 'Especializaciones y Cursos de Especialidad' : 'Specializations & Verified Courses'}
            </h3>
          </div>
          <span className="text-xs text-text-muted font-mono">
            {displayedSpecializations.length} / {specializations.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayedSpecializations.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} lang={lang} />
          ))}
        </div>

        <div className="flex justify-center pt-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAllSpecializations(!showAllSpecializations)}
            className="gap-2 text-xs h-9"
          >
            <span>
              {showAllSpecializations
                ? lang === 'es'
                  ? 'Mostrar menos especializaciones'
                  : 'Show fewer specializations'
                : lang === 'es'
                ? `Ver todas las especializaciones (${specializations.length})`
                : `View all specializations (${specializations.length})`}
            </span>
            {showAllSpecializations ? (
              <ChevronUp className="h-3.5 w-3.5" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" />
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
