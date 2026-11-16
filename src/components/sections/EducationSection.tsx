import { useState } from 'react';
import { Award, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CertificationCard } from '../ui/CertificationCard';
import { verifiedProfile } from '../../data/profile';
import { verifiedCertifications } from '../../data/certifications';

export interface EducationSectionProps {
  lang: 'es' | 'en';
}

export function EducationSection({ lang }: EducationSectionProps) {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  // Filtramos inicialmente por destacadas, pero permitimos expandir
  const displayedCertifications = showAllCertifications
    ? verifiedCertifications
    : verifiedCertifications.filter((c) => c.isFeatured);

  return (
    <section id="education" className="scroll-mt-24 space-y-8" aria-label={lang === 'es' ? 'Formación y Certificaciones' : 'Education and Certifications'}>
      <SectionHeader
        badge={lang === 'es' ? 'Trayectoria y Logros' : 'Education & Credentials'}
        title={lang === 'es' ? 'Formación Académica y Certificaciones' : 'Academic Education & Certifications'}
        description={
          lang === 'es'
            ? 'Formación universitaria en la UPC y credenciales profesionales verificadas en computación en la nube, bases de datos, software e inglés.'
            : 'Undergraduate education at UPC alongside verified credentials in cloud computing, databases, software engineering, and English.'
        }
      />

      {/* Tarjeta Destacada de Formación Universitaria UPC */}
      <Card className="border-primary/30 bg-surface/80 shadow-xs">
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl text-text-primary">
                  {verifiedProfile.university.name}
                </CardTitle>
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
                {verifiedProfile.university.currentSemester} • {verifiedProfile.university.period}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-text-secondary leading-relaxed">
            {lang === 'es'
              ? 'Plan de estudios orientado a ingeniería de software, arquitectura de sistemas distribuidos, seguridad, bases de datos avanzadas, ingeniería de datos y metodologías ágiles. Reconocimiento permanente en el Décimo Superior de la carrera.'
              : 'Curriculum focused on software engineering, distributed systems architecture, application security, advanced databases, data engineering, and agile practices with consistent Top 10% academic standing.'}
          </p>
        </CardContent>
      </Card>

      {/* Bloque de Certificaciones y Acreditaciones */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-text-primary">
            {lang === 'es' ? 'Certificaciones y Acreditaciones Verificadas' : 'Verified Certifications & Accreditations'}
          </h3>
          <span className="text-xs text-text-muted font-mono">
            {displayedCertifications.length} / {verifiedCertifications.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {displayedCertifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} lang={lang} />
          ))}
        </div>

        {verifiedCertifications.length > 4 ? (
          <div className="flex justify-center pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAllCertifications(!showAllCertifications)}
              className="gap-2 text-xs"
            >
              <span>
                {showAllCertifications
                  ? lang === 'es'
                    ? 'Mostrar solo destacadas'
                    : 'Show featured only'
                  : lang === 'es'
                  ? `Ver todas las certificaciones y cursos (${verifiedCertifications.length})`
                  : `View all credentials & courses (${verifiedCertifications.length})`}
              </span>
              {showAllCertifications ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
