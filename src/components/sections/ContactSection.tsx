import { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MapPin, Check, Copy } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Button, buttonVariants } from '../ui/Button';
import { verifiedProfile } from '../../data/profile';

export interface ContactSectionProps {
  lang: 'es' | 'en';
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(verifiedProfile.contacts.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-8" aria-label={lang === 'es' ? 'Contacto' : 'Contact'}>
      <SectionHeader
        badge={lang === 'es' ? 'Contacto' : 'Contact'}
        title={lang === 'es' ? 'Canales de Comunicación' : 'Get in Touch'}
        description={
          lang === 'es'
            ? 'Disponible para oportunidades profesionales, proyectos de ingeniería de software o consultas técnicas.'
            : 'Open to software engineering internships, technical collaborations, and project inquiries.'
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Directo */}
        <Card className="flex flex-col justify-between border-primary/20 hover:border-primary/40 transition-colors">
          <CardHeader className="space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
              <Mail className="h-5 w-5" />
            </div>
            <CardTitle className="text-base text-text-primary">
              {lang === 'es' ? 'Correo Electrónico' : 'Direct Email'}
            </CardTitle>
            <p className="text-xs text-text-muted">
              {lang === 'es' ? 'Respuesta en menos de 24 horas' : 'Response within 24 hours'}
            </p>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <a
              href={`mailto:${verifiedProfile.contacts.email}`}
              className="text-xs font-mono text-primary font-semibold hover:underline break-all inline-flex items-center min-h-[28px] py-1"
            >
              {verifiedProfile.contacts.email}
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopyEmail}
              className="w-full gap-2 text-xs"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
              <span>
                {copied
                  ? lang === 'es'
                    ? '¡Copiado al portapapeles!'
                    : 'Copied to clipboard!'
                  : lang === 'es'
                  ? 'Copiar correo'
                  : 'Copy email address'}
              </span>
            </Button>
          </CardContent>
        </Card>

        {/* LinkedIn */}
        <Card className="flex flex-col justify-between hover:border-primary/40 transition-colors">
          <CardHeader className="space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
              <Linkedin className="h-5 w-5" />
            </div>
            <CardTitle className="text-base text-text-primary">
              LinkedIn
            </CardTitle>
            <p className="text-xs text-text-muted">
              {lang === 'es' ? 'Perfil profesional y red' : 'Professional network'}
            </p>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <p className="text-xs text-text-secondary leading-relaxed">
              {lang === 'es'
                ? 'Conectemos para conversar sobre ingeniería de software, arquitectura o prácticas preprofesionales.'
                : 'Connect with me to discuss software engineering, distributed systems, or internship roles.'}
            </p>
            <a
              href={verifiedProfile.contacts.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'sm', className: 'w-full text-xs cursor-pointer' })}
            >
              <span>{lang === 'es' ? 'Ver perfil en LinkedIn' : 'View LinkedIn Profile'}</span>
            </a>
          </CardContent>
        </Card>

        {/* GitHub & Ubicación */}
        <Card className="flex flex-col justify-between hover:border-primary/40 transition-colors">
          <CardHeader className="space-y-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
              <Github className="h-5 w-5" />
            </div>
            <CardTitle className="text-base text-text-primary">
              {lang === 'es' ? 'GitHub y Ubicación' : 'GitHub & Location'}
            </CardTitle>
            <p className="text-xs text-text-muted flex items-center gap-1">
              <MapPin className="h-3 w-3 text-primary" />
              <span>{verifiedProfile.location} (UTC-5)</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            <div className="space-y-1 text-xs text-text-secondary">
              <p className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-text-muted shrink-0" />
                <span className="font-mono">{verifiedProfile.contacts.phone}</span>
              </p>
            </div>
            <a
              href={verifiedProfile.contacts.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline', size: 'sm', className: 'w-full text-xs cursor-pointer' })}
            >
              <span>{lang === 'es' ? 'Ver repositorios en GitHub' : 'View GitHub Repositories'}</span>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
