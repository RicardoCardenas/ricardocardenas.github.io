import { ArrowDown, FileText, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react';
import { verifiedProfile } from '../../data/profile';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export interface HeroSectionProps {
  lang: 'es' | 'en';
}

export function HeroSection({ lang }: HeroSectionProps) {
  return (
    <section
      id="hero"
      aria-label={lang === 'es' ? 'Presentación y perfil profesional' : 'Presentation and professional profile'}
      className="pt-6 sm:pt-12 pb-10 space-y-8"
    >
      {/* Badge de Disponibilidad y Excelencia Académica */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-success/30 bg-success/10 text-success text-xs font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span>{verifiedProfile.availability.label[lang]}</span>
        </div>

        <Badge variant="outline" className="gap-1.5 text-xs text-text-secondary">
          <ShieldCheck className="h-3.5 w-3.5 text-primary" />
          <span>{verifiedProfile.university.name} • {verifiedProfile.university.distinction[lang]}</span>
        </Badge>
      </div>

      {/* Contenedor Principal: Avatar + Jerarquía de Títulos */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <Avatar
          size="xl"
          initials="RC"
          alt={verifiedProfile.fullName}
          className="shrink-0 ring-4 ring-primary/10 shadow-xs"
        />

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
            {verifiedProfile.fullName}
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-primary">
            {verifiedProfile.title[lang]}
          </p>
        </div>
      </div>

      {/* Propuesta de Valor y Enfoque Técnico */}
      <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
        {verifiedProfile.headline[lang]}
      </p>

      {/* Acciones Principales y Enlaces Profesionales */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a href="#featured-projects">
          <Button variant="primary" size="lg" className="gap-2">
            <span>{lang === 'es' ? 'Explorar proyectos' : 'Explore projects'}</span>
            <ArrowDown className="h-4 w-4" />
          </Button>
        </a>

        <a href="#cv">
          <Button variant="outline" size="lg" className="gap-2">
            <FileText className="h-4 w-4" />
            <span>{lang === 'es' ? 'Descargar CV (PDF)' : 'Download CV (PDF)'}</span>
          </Button>
        </a>

        <div className="flex items-center gap-2 pl-0 sm:pl-2 border-t sm:border-t-0 sm:border-l border-border pt-3 sm:pt-0 w-full sm:w-auto">
          <a
            href={verifiedProfile.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-text-secondary hover:text-text-primary">
              <Github className="h-4.5 w-4.5" />
            </Button>
          </a>

          <a
            href={verifiedProfile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-text-secondary hover:text-text-primary">
              <Linkedin className="h-4.5 w-4.5" />
            </Button>
          </a>

          <a
            href={`mailto:${verifiedProfile.contacts.email}`}
            aria-label="Email Contact"
          >
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 text-text-secondary hover:text-text-primary">
              <Mail className="h-4.5 w-4.5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
