import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import type { Certification } from '../../types';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Badge } from './Badge';
import { cn } from '../../utils/cn';

export interface CertificationCardProps {
  certification: Certification;
  lang: 'es' | 'en';
  className?: string;
}

export function CertificationCard({
  certification,
  lang,
  className,
}: CertificationCardProps) {
  const isOfficial = certification.type === 'professional-certification';
  const isLanguage = certification.type === 'language-accreditation';

  return (
    <Card
      className={cn(
        'group flex flex-col justify-between transition-all duration-200 hover:border-primary/40',
        isOfficial && 'border-primary/30 bg-surface/90',
        className
      )}
    >
      <CardHeader className="space-y-3 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge
            variant={isOfficial ? 'accent' : isLanguage ? 'warning' : 'outline'}
            className="text-[11px] font-semibold gap-1"
          >
            {isOfficial ? <Award className="h-3 w-3" /> : <CheckCircle className="h-3 w-3" />}
            {certification.typeLabel[lang]}
          </Badge>

          {certification.issueDate ? (
            <span className="text-xs text-text-muted font-mono">
              {certification.issueDate}
            </span>
          ) : null}
        </div>

        <div>
          <CardTitle className="text-base text-text-primary group-hover:text-primary transition-colors duration-150">
            {certification.title[lang]}
          </CardTitle>
          <p className="text-xs font-medium text-text-secondary mt-1">
            {certification.issuer}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-3 pt-0">
        {certification.description ? (
          <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
            {certification.description[lang]}
          </p>
        ) : null}

        {certification.skills && certification.skills.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {certification.skills.map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-surface-muted text-text-secondary border border-border/50"
              >
                {skill}
              </span>
            ))}
          </div>
        ) : null}

        {certification.credentialId || certification.verificationUrl ? (
          <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
            {certification.credentialId ? (
              <span className="font-mono text-[10px]">
                ID: {certification.credentialId}
              </span>
            ) : <span />}

            {certification.verificationUrl ? (
              <a
                href={certification.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                <span>{lang === 'es' ? 'Verificar' : 'Verify'}</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
