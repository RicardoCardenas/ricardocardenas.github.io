import type { ArchitectureComponent } from '../../types';
import { Network, Server, ArrowDown, Database, Cpu, Layers, Clock, CheckCircle2, Wrench } from 'lucide-react';

interface ArchitectureDiagramProps {
  projectId: string;
  overview: string;
  components: ArchitectureComponent[];
  lang: 'es' | 'en';
}

export function ArchitectureDiagram({
  projectId,
  overview,
  components,
  lang,
}: ArchitectureDiagramProps) {
  const getStatusBadge = (status: 'implemented' | 'in-development' | 'planned') => {
    switch (status) {
      case 'implemented':
        return (
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-success/10 text-success border border-success/30">
            <CheckCircle2 className="h-2.5 w-2.5" />
            <span>{lang === 'es' ? 'Implementado' : 'Implemented'}</span>
          </span>
        );
      case 'in-development':
        return (
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-primary/10 text-primary border border-primary/30">
            <Wrench className="h-2.5 w-2.5" />
            <span>{lang === 'es' ? 'En desarrollo' : 'In Dev'}</span>
          </span>
        );
      case 'planned':
        return (
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-warning/10 text-warning border border-dashed border-warning/40">
            <Clock className="h-2.5 w-2.5" />
            <span>{lang === 'es' ? 'Planificado' : 'Planned'}</span>
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Encabezado y Resumen Arquitectónico */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-text-primary">
          <Network className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold">
            {lang === 'es' ? 'Arquitectura del Sistema & Diagrama de Componentes' : 'System Architecture & Component Diagram'}
          </h2>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">
          {overview}
        </p>
      </div>

      {/* Visualización de Flujo de Arquitectura */}
      <div className="rounded-xl border border-border bg-surface p-4 sm:p-6 shadow-2xs space-y-4">
        {/* Leyenda de Estados de Componentes */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-border/60 pb-3">
          <span className="font-mono uppercase font-semibold text-primary">
            {lang === 'es' ? 'Topología de Flujo de Datos' : 'Data Flow Topology'}
          </span>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1 text-success">
              <span className="h-2 w-2 rounded-full bg-success"></span>
              <span>{lang === 'es' ? 'Implementado' : 'Implemented'}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-warning">
              <span className="h-2 w-2 rounded-full border border-dashed border-warning bg-warning/20"></span>
              <span>{lang === 'es' ? 'Planificado' : 'Planned'}</span>
            </span>
          </div>
        </div>

        {/* Diagramas Específicos por Proyecto */}
        {projectId === 'nexo' ? (
          <div className="space-y-3 text-xs font-mono">
            {/* Capa Cliente y Proxy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-success/30 bg-surface-muted/60 flex items-center justify-between">
                <div>
                  <div className="font-bold text-text-primary flex items-center gap-1.5">
                    <span>React 19 Client Web</span>
                    <span className="text-[10px] text-success">✓</span>
                  </div>
                  <div className="text-[11px] text-text-muted">TypeScript + Tailwind CSS v4</div>
                </div>
                <Layers className="h-4 w-4 text-primary" />
              </div>

              <div className="p-3 rounded-lg border border-success/30 bg-surface-muted/60 flex items-center justify-between">
                <div>
                  <div className="font-bold text-text-primary flex items-center gap-1.5">
                    <span>Nginx Reverse Proxy</span>
                    <span className="text-[10px] text-success">✓</span>
                  </div>
                  <div className="text-[11px] text-text-muted">Alpine (Puertos 80/443 SSL)</div>
                </div>
                <Server className="h-4 w-4 text-text-muted" />
              </div>
            </div>

            <div className="flex justify-center text-primary">
              <ArrowDown className="h-4 w-4 animate-pulse" />
            </div>

            {/* Núcleo FastAPI Implementado */}
            <div className="p-3.5 rounded-lg border border-success/40 bg-surface-muted flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="font-bold text-primary flex items-center gap-1.5">
                  <span>FastAPI Modular Monolith</span>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-secondary mt-0.5">
                  {lang === 'es'
                    ? '7 Bounded Contexts DDD/CQRS (iam, ingestion, knowledge, assistant, insights, audit, shared)'
                    : '7 Bounded Contexts DDD/CQRS (iam, ingestion, knowledge, assistant, insights, audit, shared)'}
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-primary/10 text-primary self-start font-semibold">
                Python 3.12 (Fase 0)
              </span>
            </div>

            <div className="flex justify-center text-primary">
              <ArrowDown className="h-4 w-4" />
            </div>

            {/* Persistencia Base Implementada */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border border-success/40 bg-surface-muted/50 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-text-primary">
                    <Database className="h-3.5 w-3.5 text-success" />
                    <span>PostgreSQL 16</span>
                  </div>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-muted">
                  {lang === 'es' ? 'pgvector + esquema base relacional' : 'pgvector + base relational schema'}
                </div>
              </div>

              <div className="p-3 rounded-lg border border-success/40 bg-surface-muted/50 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-text-primary">
                    <Cpu className="h-3.5 w-3.5 text-primary" />
                    <span>Neo4j 5 Community</span>
                  </div>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-muted">
                  {lang === 'es' ? 'Instancia Dockerizada para grafo' : 'Containerized Docker instance for graph'}
                </div>
              </div>

              <div className="p-3 rounded-lg border border-success/40 bg-surface-muted/50 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-text-primary">
                    <Server className="h-3.5 w-3.5 text-warning" />
                    <span>Celery & Redis 7</span>
                  </div>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-muted">
                  {lang === 'es' ? 'Baseline de infraestructura para tareas' : 'Infrastructure baseline for tasks'}
                </div>
              </div>
            </div>

            <div className="flex justify-center text-warning">
              <ArrowDown className="h-4 w-4" />
            </div>

            {/* Módulo Planificado para Fase 4: LangGraph */}
            <div className="p-3.5 rounded-lg border border-dashed border-warning/50 bg-warning/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <div className="font-bold text-warning flex items-center gap-2">
                  <span>LangGraph Orchestrator</span>
                  {getStatusBadge('planned')}
                </div>
                <div className="text-[11px] text-text-secondary">
                  {lang === 'es'
                    ? 'Agentes supervisados con herramientas SQL autoritativas (Planificado para Fase 4)'
                    : 'Supervised agents with authoritative SQL sandboxed tools (Planned for Phase 4)'}
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-warning/15 text-warning self-start font-semibold">
                {lang === 'es' ? 'Tesis Fase 4' : 'Thesis Phase 4'}
              </span>
            </div>
          </div>
        ) : projectId === 'capital-cruise' ? (
          <div className="space-y-3 text-xs font-mono">
            <div className="p-3 rounded-lg border border-success/30 bg-surface-muted/60 flex items-center justify-between">
              <div>
                <div className="font-bold text-text-primary flex items-center gap-1.5">
                  <span>Vue 3.5 Web Application</span>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-muted">Vite 8 / Composition API / Simulador Bimoneda</div>
              </div>
              <Layers className="h-4 w-4 text-primary" />
            </div>

            <div className="flex justify-center text-primary">
              <ArrowDown className="h-4 w-4" />
            </div>

            <div className="p-3.5 rounded-lg border border-success/40 bg-surface-muted flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="font-bold text-primary flex items-center gap-1.5">
                  <span>Spring Boot 3.5 Core Engine</span>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-secondary">
                  DDD Bounded Contexts (iam, clients, loans, vehicles) + SpringDoc OpenAPI 3.0
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-primary/10 text-primary self-start font-semibold">
                Java 21 LTS
              </span>
            </div>

            <div className="flex justify-center text-primary">
              <ArrowDown className="h-4 w-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-success/30 bg-surface-muted/50 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-text-primary">Motor Amortización Francesa</div>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-muted">
                  Cálculo de TCEA, TEA-TEM, Cuotas Balón y Gracia con BigDecimal
                </div>
              </div>

              <div className="p-3 rounded-lg border border-success/30 bg-surface-muted/50 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-text-primary">
                    <Database className="h-3.5 w-3.5 text-success" />
                    <span>PostgreSQL + Flyway</span>
                  </div>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-muted">
                  Versionado inmutable y reproducible de esquema relacional
                </div>
              </div>
            </div>

            <div className="flex justify-center text-warning">
              <ArrowDown className="h-4 w-4" />
            </div>

            <div className="p-3 rounded-lg border border-dashed border-warning/50 bg-warning/5 flex items-center justify-between">
              <div>
                <div className="font-bold text-warning flex items-center gap-2">
                  <span>Credit Bureau Integration</span>
                  {getStatusBadge('planned')}
                </div>
                <div className="text-[11px] text-text-secondary">
                  {lang === 'es' ? 'Integración en tiempo real con burós crediticios para scoring dinámico' : 'Real-time credit bureau integration for dynamic scoring'}
                </div>
              </div>
            </div>
          </div>
        ) : projectId === 'talestar-mobile' ? (
          <div className="space-y-3 text-xs font-mono">
            <div className="p-3 rounded-lg border border-success/30 bg-surface-muted/60 flex items-center justify-between">
              <div>
                <div className="font-bold text-text-primary flex items-center gap-1.5">
                  <span>Flutter 3.41 Presentation Layer</span>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-muted">BLoC / Cubit / Lector Interactivo / Dart 3.11</div>
              </div>
              <Layers className="h-4 w-4 text-primary" />
            </div>

            <div className="flex justify-center text-primary">
              <ArrowDown className="h-4 w-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg border border-success/30 bg-surface-muted space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-primary">GoRouter 14.8 & PopScope</div>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-secondary">
                  Confinamiento en Modo Niño con PIN de 4 dígitos y Android KeyStore
                </div>
              </div>

              <div className="p-3.5 rounded-lg border border-success/30 bg-surface-muted space-y-1">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-primary">Lossless Audio Service</div>
                  {getStatusBadge('implemented')}
                </div>
                <div className="text-[11px] text-text-secondary">
                  Reproducción en segundo plano con mini-player flotante (FLAC)
                </div>
              </div>
            </div>

            <div className="flex justify-center text-primary">
              <ArrowDown className="h-4 w-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg border border-success/30 bg-surface-muted/50 flex items-center justify-between">
                <div>
                  <div className="font-bold text-text-primary flex items-center gap-1.5">
                    <span>ARCore Native Bridge</span>
                    {getStatusBadge('implemented')}
                  </div>
                  <div className="text-[11px] text-text-muted">
                    Kotlin PlatformView con shaders OpenGL ES 2.0
                  </div>
                </div>
                <Cpu className="h-4 w-4 text-success" />
              </div>

              <div className="p-3 rounded-lg border border-dashed border-warning/50 bg-warning/5 flex items-center justify-between">
                <div>
                  <div className="font-bold text-warning flex items-center gap-1.5">
                    <span>ARKit iOS Bridge</span>
                    {getStatusBadge('planned')}
                  </div>
                  <div className="text-[11px] text-text-secondary">
                    {lang === 'es' ? 'Soporte iOS en hardware físico' : 'iOS support on physical hardware'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-lg border border-border bg-surface-muted/40 font-mono text-xs space-y-3">
            <div className="flex items-center justify-between text-primary font-bold">
              <span>{components[0]?.name || 'Client Layer'}</span>
              <span>&rarr;</span>
              <span>{components[1]?.name || 'Service API'}</span>
              <span>&rarr;</span>
              <span>{components[2]?.name || 'Database Engine'}</span>
            </div>
          </div>
        )}

        {/* Lista Detallada de Componentes de la Arquitectura */}
        <div className="pt-4 border-t border-border/60">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">
            {lang === 'es' ? 'Componentes y Módulos de la Arquitectura' : 'Architecture Modules & Components'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {components.map((comp, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border ${
                  comp.status === 'planned'
                    ? 'border-dashed border-warning/40 bg-warning/5'
                    : 'border-border/80 bg-surface-muted/30'
                } space-y-1.5 text-xs`}
              >
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <span className="font-bold text-text-primary">{comp.name}</span>
                  <div className="flex items-center gap-1">
                    {getStatusBadge(comp.status)}
                    <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surface border border-border/60 text-primary">
                      {comp.technology}
                    </span>
                  </div>
                </div>
                <p className="text-text-secondary leading-relaxed text-[11px]">
                  {comp.role[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
