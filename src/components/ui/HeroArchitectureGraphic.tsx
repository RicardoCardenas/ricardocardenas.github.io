import {
  Server,
  Database,
  ShieldCheck,
  CheckCircle2,
  Network,
} from 'lucide-react';
import { cn } from '../../utils/cn';

export interface HeroArchitectureGraphicProps {
  className?: string;
  lang?: 'es' | 'en';
}

export function HeroArchitectureGraphic({
  className,
  lang = 'es',
}: HeroArchitectureGraphicProps) {
  return (
    <div
      className={cn(
        'relative w-full max-w-lg mx-auto select-none transition-transform duration-300 ease-out hover:scale-[1.01]',
        className
      )}
      aria-label={
        lang === 'es'
          ? 'Diagrama conceptual interactivo de arquitectura de software y sistemas'
          : 'Interactive conceptual software architecture and systems diagram'
      }
    >
      {/* Sutil halo violeta de iluminación ambiental de fondo */}
      <div
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 blur-xl opacity-60 dark:opacity-40 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Contenedor Principal tipo Ventana de Ingeniería */}
      <div className="rounded-2xl border border-border/80 bg-surface/90 dark:bg-surface-elevated/90 shadow-lg backdrop-blur-md overflow-hidden">
        {/* Barra Superior de la Ventana */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-surface-muted/50 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono text-[11px] text-text-muted font-medium">
              architecture-concept.sys
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold font-mono border border-primary/20">
            <Network className="h-3 w-3 text-primary" />
            <span>{lang === 'es' ? 'Concepto de Arquitectura' : 'Architecture Concept'}</span>
          </div>
        </div>

        {/* Cuerpo del Diagrama de Arquitectura */}
        <div className="p-4 sm:p-5 space-y-3.5">
          {/* Nivel 1: Capa Perimetral & Gateway */}
          <div className="p-3 rounded-xl border border-border/70 bg-surface dark:bg-surface/50 space-y-1.5 shadow-2xs">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-semibold text-text-primary">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span>{lang === 'es' ? 'Perímetro & Gateway Seguro' : 'Perimeter & API Gateway'}</span>
              </div>
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                TLS 1.3 • Nginx Edge
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] text-text-secondary font-mono">
              <span className="text-text-muted">SSL Termination • CORS • Rate Limiting</span>
              <span className="text-text-muted flex items-center gap-1 text-[10px] font-mono">
                <CheckCircle2 className="h-3 w-3 text-primary" />
                <span>{lang === 'es' ? 'Aislamiento de Red' : 'Network Isolation'}</span>
              </span>
            </div>
          </div>

          {/* Conector Visual 1 */}
          <div className="flex justify-center -my-2" aria-hidden="true">
            <div className="w-px h-3.5 bg-gradient-to-b from-primary/60 to-primary/30" />
          </div>

          {/* Nivel 2: Núcleo de Aplicación y Dominio DDD */}
          <div className="p-3.5 rounded-xl border border-primary/40 bg-gradient-to-br from-primary/[0.04] via-surface to-surface space-y-2.5 shadow-2xs relative">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 font-semibold text-text-primary">
                <Server className="h-4 w-4 text-primary shrink-0" />
                <span>{lang === 'es' ? 'Núcleo de Servicios & Dominio DDD' : 'Core Services & DDD Domain'}</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-primary text-primary-foreground font-semibold">
                Bounded Contexts
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
              <div className="p-1.5 rounded-lg border border-border/80 bg-surface-muted/60 text-text-primary">
                <span className="block font-bold text-primary">REST / CQRS</span>
                <span className="text-[9px] text-text-muted">Clean Separation</span>
              </div>
              <div className="p-1.5 rounded-lg border border-border/80 bg-surface-muted/60 text-text-primary">
                <span className="block font-bold text-primary">Microservices</span>
                <span className="text-[9px] text-text-muted">Decoupled Modules</span>
              </div>
              <div className="p-1.5 rounded-lg border border-border/80 bg-surface-muted/60 text-text-primary">
                <span className="block font-bold text-primary">Automated QA</span>
                <span className="text-[9px] text-text-muted">Unit & E2E Suites</span>
              </div>
            </div>
          </div>

          {/* Conector Visual 2 (Bifurcación) */}
          <div className="flex justify-around px-8 -my-2" aria-hidden="true">
            <div className="w-px h-3.5 bg-gradient-to-b from-primary/40 to-primary/20" />
            <div className="w-px h-3.5 bg-gradient-to-b from-primary/40 to-primary/20" />
          </div>

          {/* Nivel 3: Persistencia Políglota y Almacenamiento */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Nodo Relacional */}
            <div className="p-2.5 rounded-xl border border-border/70 bg-surface dark:bg-surface/50 space-y-1 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
                <Database className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="truncate">PostgreSQL • ACID</span>
              </div>
              <p className="text-[10px] font-mono text-text-muted leading-tight">
                Authoritative SQL • pgvector • Flyway Versioned
              </p>
            </div>

            {/* Nodo Grafos & Tareas */}
            <div className="p-2.5 rounded-xl border border-border/70 bg-surface dark:bg-surface/50 space-y-1 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
                <Network className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="truncate">Neo4j & Redis</span>
              </div>
              <p className="text-[10px] font-mono text-text-muted leading-tight">
                Graph Queries • Async Queue • In-Memory Cache
              </p>
            </div>
          </div>
        </div>

        {/* Franja Inferior de Telemetría */}
        <div className="px-4 py-2 border-t border-border/60 bg-surface-muted/30 flex items-center justify-between text-[11px] font-mono text-text-muted">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-success" />
            <span>{lang === 'es' ? 'Docker Compose • Contenedores Aislados' : 'Docker Compose • Isolated Networks'}</span>
          </div>
          <span className="text-[10px] text-primary font-semibold">
            TypeScript • Java • Python • .NET
          </span>
        </div>
      </div>
    </div>
  );
}
