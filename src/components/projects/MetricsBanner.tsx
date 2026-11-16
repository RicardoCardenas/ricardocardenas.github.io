import type { ProjectMetric } from '../../types';
import { ShieldCheck } from 'lucide-react';

interface MetricsBannerProps {
  metrics: ProjectMetric[];
  lang: 'es' | 'en';
}

export function MetricsBanner({ metrics, lang }: MetricsBannerProps) {
  if (!metrics || metrics.length === 0) return null;

  const getCategoryLabel = (cat: 'functional' | 'testing' | 'architecture' | 'data') => {
    switch (cat) {
      case 'functional':
        return lang === 'es' ? 'Métrica Funcional' : 'Functional Metric';
      case 'testing':
        return lang === 'es' ? 'Aseguramiento QA' : 'QA Testing';
      case 'architecture':
        return lang === 'es' ? 'Arquitectura' : 'Architecture';
      case 'data':
        return lang === 'es' ? 'Datos & Analítica' : 'Data & Analytics';
    }
  };

  return (
    <div className="space-y-2 my-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-border bg-surface p-4 flex flex-col justify-between transition-all duration-150 hover:border-primary/30 shadow-2xs"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-text-muted mb-2">
                <span>{getCategoryLabel(metric.category)}</span>
                {metric.verifiedSource ? (
                  <span title={metric.verifiedSource}>
                    <ShieldCheck className="h-3 w-3 text-success/80" />
                  </span>
                ) : null}
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold text-primary font-mono tracking-tight">
                {typeof metric.value === 'string' ? metric.value : metric.value[lang]}
              </div>
            </div>

            <div className="mt-3 space-y-0.5 border-t border-border/40 pt-2">
              <div className="text-xs sm:text-sm font-semibold text-text-primary">
                {metric.label[lang]}
              </div>
              {metric.description ? (
                <div className="text-[11px] text-text-muted leading-tight">
                  {metric.description[lang]}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
