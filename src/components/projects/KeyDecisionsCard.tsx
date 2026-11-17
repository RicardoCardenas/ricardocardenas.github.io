import type { TechnicalDecision } from '../../types';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { GitCommit, Scale, CheckCircle2 } from 'lucide-react';

interface KeyDecisionsCardProps {
  decisions: TechnicalDecision[];
  lang: 'es' | 'en';
}

export function KeyDecisionsCard({ decisions, lang }: KeyDecisionsCardProps) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-text-primary">
        <GitCommit className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-bold">
          {lang === 'es' ? 'Decisiones de Arquitectura & Trade-Offs (ADRs)' : 'Architecture Decisions & Trade-Offs (ADRs)'}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {decisions.map((ad, idx) => (
          <Card key={idx} className="border-border hover:border-primary/30 transition-colors duration-150">
            <CardHeader className="pb-3 space-y-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase text-primary tracking-wider">
                ADR-0{idx + 1}
              </span>
              <CardTitle className="text-base text-text-primary">
                {ad.title[lang]}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3.5 pt-0 text-xs sm:text-sm">
              {/* Decisión tomada */}
              <div className="rounded-lg bg-surface-muted/70 p-3 border border-border/50 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5 text-success shrink-0" />
                  <span>{lang === 'es' ? 'Decisión Técnica Adoptada' : 'Adopted Technical Decision'}</span>
                </div>
                <p className="text-text-secondary leading-relaxed">
                  {ad.decision[lang]}
                </p>
              </div>

              {/* Trade-off evaluado */}
              <div className="rounded-lg bg-surface-muted/40 p-3 border border-border/40 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-text-muted">
                  <Scale className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>{lang === 'es' ? 'Trade-Off & Justificación' : 'Trade-Off & Justification'}</span>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {ad.tradeoff[lang]}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
