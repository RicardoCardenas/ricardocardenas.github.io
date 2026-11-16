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
      aria-label={lang === 'es' ? 'Presentación profesional' : 'Professional presentation'}
      className="pt-4 sm:pt-8 pb-4 space-y-6 sm:space-y-8"
    >
      {/* 1. Badges Superiores de Estado y Distinción Académica */}
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-success/30 bg-success/10 text-success text-xs font-semibold select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span>{verifiedProfile.availability.label[lang]}</span>
        </div>

        <Badge variant="outline" className="gap-1.5 text-xs text-text-secondary font-medium py-1 px-3">
          <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
          <span>UPC • {verifiedProfile.university.currentSemester} • {verifiedProfile.university.distinction[lang]}</span>
        </Badge>
      </div>

      {/* 2. Bloque Principal: Avatar + Jerarquía de Nombre y Especialidad */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
        <Avatar
          size="xl"
          initials="RC"
          alt={verifiedProfile.fullName}
          className="shrink-0 h-20 w-20 sm:h-24 sm:w-24 text-xl sm:text-2xl font-bold ring-2 ring-primary/20 shadow-2xs"
        />

        <div className="space-y-1.5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary leading-[1.15]">
            {verifiedProfile.fullName}
          </h1>
          <p className="text-base sm:text-lg font-semibold text-primary tracking-normal">
            {verifiedProfile.title[lang]}
          </p>
        </div>
      </div>

      {/* 3. Propuesta de Valor Técnica y Formación */}
      <div className="max-w-2xl space-y-3">
        <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
          {lang === 'es'
            ? 'Estudiante de 8.º ciclo de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC), perteneciente al Décimo Superior. Diseña e implementa arquitecturas modulares, microservicios empresariales, persistencia políglota y soluciones basadas en datos e inteligencia artificial verificable.'
            : '8th-semester Software Engineering student at Universidad Peruana de Ciencias Aplicadas (UPC), Top 10% academic standing. Focused on modular architectures, enterprise microservices, polyglot persistence, and data-driven verifiable AI systems.'}
        </p>
      </div>

      {/* 4. Acciones Principales y Enlaces Profesionales */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
        <a href="#featured-projects" className="w-full sm:w-auto">
          <Button variant="primary" size="md" className="w-full sm:w-auto gap-2 text-sm font-semibold h-11 px-5 shadow-xs">
            <span>{lang === 'es' ? 'Explorar Proyectos' : 'Explore Projects'}</span>
            <ArrowDown className="h-4 w-4" />
          </Button>
        </a>

        <a href="#cv" className="w-full sm:w-auto">
          <Button variant="outline" size="md" className="w-full sm:w-auto gap-2 text-sm font-semibold h-11 px-5">
            <FileText className="h-4 w-4 text-text-muted" />
            <span>{lang === 'es' ? 'Descargar CV (PDF)' : 'Download CV (PDF)'}</span>
          </Button>
        </a>

        {/* Separador y enlaces de redes profesionales */}
        <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:pl-3 sm:border-l sm:border-border w-full sm:w-auto">
          <a
            href={verifiedProfile.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center justify-center h-11 w-11 rounded-lg border border-border bg-surface hover:border-primary/50 hover:text-primary text-text-secondary transition-all active:scale-95"
            title="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href={verifiedProfile.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex items-center justify-center h-11 w-11 rounded-lg border border-border bg-surface hover:border-primary/50 hover:text-primary text-text-secondary transition-all active:scale-95"
            title="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href={`mailto:${verifiedProfile.contacts.email}`}
            aria-label="Email Contact"
            className="flex items-center justify-center h-11 w-11 rounded-lg border border-border bg-surface hover:border-primary/50 hover:text-primary text-text-secondary transition-all active:scale-95"
            title="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
