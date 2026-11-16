import { useState } from 'react';
import {
  Network,
  Activity,
  Briefcase,
  Coins,
  Layers,
  ShieldCheck,
  Database,
  Terminal,
} from 'lucide-react';
import type { ProjectCaseStudy } from '../../types';
import { cn } from '../../utils/cn';

export interface ProjectCoverGraphicProps {
  project: ProjectCaseStudy;
  lang?: 'es' | 'en';
  variant?: 'card' | 'hero';
  className?: string;
}

export function ProjectCoverGraphic({
  project,
  lang = 'es',
  variant = 'card',
  className,
}: ProjectCoverGraphicProps) {
  const [imageError, setImageError] = useState(false);

  // Helper para etiquetas contextuales de capturas reales
  const getCoverTag = (projectId: string) => {
    switch (projectId) {
      case 'capital-cruise':
        return lang === 'es' ? 'Esquema de BD Relacional' : 'Relational DB Schema';
      case 'talestar-mobile':
        return lang === 'es' ? 'App Móvil ARCore' : 'ARCore Mobile App';
      case 'thelook-pipeline':
        return lang === 'es' ? 'Pipeline Analítico BigQuery' : 'BigQuery Analytics Pipeline';
      case 'customer-churn':
        return lang === 'es' ? 'Dashboard Ejecutivo Power BI' : 'Power BI Executive Dashboard';
      default:
        return lang === 'es' ? 'Evidencia Verificada' : 'Verified Evidence';
    }
  };

  // CASO 1: Nexo — Representación Conceptual Abstracta de Arquitectura
  // Proyecto de Tesis UPC con código 100% privado: topología abstracta Agentic GraphRAG
  if (project.id === 'nexo' || project.isAcademicThesis) {
    return (
      <div
        role="img"
        className={cn(
          'relative w-full overflow-hidden bg-gradient-to-br from-primary/10 via-surface dark:via-surface-elevated to-primary/5 select-none',
          variant === 'card' ? 'aspect-[16/9] border-b border-border/60' : 'aspect-[16/10] sm:aspect-[16/9] rounded-2xl border border-border/80 shadow-md',
          className
        )}
        aria-label={
          lang === 'es'
            ? 'Diagrama conceptual de arquitectura Agentic GraphRAG para Nexo'
            : 'Agentic GraphRAG conceptual architecture diagram for Nexo'
        }
      >
        {/* Grilla geométrica sutil de fondo */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:16px_16px] opacity-15"
          aria-hidden="true"
        />

        {/* SVG de Topología de Red y Persistencia Políglota */}
        <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-5">
          <svg viewBox="0 0 340 190" className="w-full h-full text-primary/40" fill="none" stroke="currentColor">
            {/* Conexiones / Aristas del Grafo */}
            <line x1="70" y1="95" x2="160" y2="45" strokeWidth="1.5" strokeDasharray="3 3" className="stroke-primary/50" />
            <line x1="70" y1="95" x2="160" y2="145" strokeWidth="1.5" strokeDasharray="3 3" className="stroke-primary/50" />
            {/* Conexiones hacia componente planificado (diferenciadas con trazo discontinuo en ámbar) */}
            <line x1="160" y1="45" x2="265" y2="95" strokeWidth="1.5" strokeDasharray="4 3" className="stroke-amber-500/70 dark:stroke-amber-400/70" />
            <line x1="160" y1="145" x2="265" y2="95" strokeWidth="1.5" strokeDasharray="4 3" className="stroke-amber-500/70 dark:stroke-amber-400/70" />

            {/* Nodo 1: FastAPI Modular Monolith (Ingesta / API) */}
            <circle cx="70" cy="95" r="28" className="fill-surface stroke-primary/70" strokeWidth="1.5" />
            <text x="70" y="92" textAnchor="middle" className="text-[10px] fill-text-primary font-mono font-bold" stroke="none">FastAPI</text>
            <text x="70" y="103" textAnchor="middle" className="text-[8px] fill-text-muted font-mono" stroke="none">{lang === 'es' ? '7 Contextos' : '7 Contexts'}</text>

            {/* Nodo 2: Neo4j (Knowledge Graph) */}
            <circle cx="160" cy="45" r="24" className="fill-surface stroke-primary/70" strokeWidth="1.5" />
            <text x="160" y="43" textAnchor="middle" className="text-[10px] fill-text-primary font-mono font-bold" stroke="none">Neo4j 5</text>
            <text x="160" y="53" textAnchor="middle" className="text-[8px] fill-primary font-mono" stroke="none">Graph Cypher</text>

            {/* Nodo 3: PostgreSQL + pgvector (Authoritative Data) */}
            <circle cx="160" cy="145" r="24" className="fill-surface stroke-primary/70" strokeWidth="1.5" />
            <text x="160" y="143" textAnchor="middle" className="text-[10px] fill-text-primary font-mono font-bold" stroke="none">Postgres 16</text>
            <text x="160" y="153" textAnchor="middle" className="text-[8px] fill-primary font-mono" stroke="none">pgvector RLS</text>

            {/* Nodo 4: LangGraph (Supervised Autonomous Agents — PLANIFICADO / ROADMAP) */}
            <circle cx="265" cy="95" r="32" className="fill-amber-500/5 stroke-amber-500/80 dark:stroke-amber-400/80" strokeWidth="1.75" strokeDasharray="4 3" />
            <text x="265" y="87" textAnchor="middle" className="text-[10.5px] fill-amber-600 dark:fill-amber-400 font-mono font-bold" stroke="none">LangGraph</text>
            <text x="265" y="99" textAnchor="middle" className="text-[8px] fill-text-muted font-mono" stroke="none">{lang === 'es' ? 'Agentes Supervisados' : 'Supervised Agents'}</text>
            <text x="265" y="111" textAnchor="middle" className="text-[7.5px] fill-amber-600 dark:fill-amber-400 font-mono font-bold uppercase tracking-wider" stroke="none">{lang === 'es' ? 'Planificado' : 'Planned'}</text>
          </svg>
        </div>

        {/* Badge Superior: Concepto de Arquitectura */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface/90 dark:bg-surface-elevated/90 border border-primary/30 text-[10px] font-semibold text-primary backdrop-blur-xs shadow-2xs">
          <Network className="h-3 w-3 text-primary shrink-0" />
          <span>{lang === 'es' ? 'Concepto de Arquitectura' : 'Architecture Concept'}</span>
        </div>

        {/* Badge Inferior: Persistencia Políglota & Privacidad Neutral */}
        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-surface/85 dark:bg-surface-elevated/85 border border-border/80 text-[10px] font-mono text-text-muted backdrop-blur-xs">
          <ShieldCheck className="h-3 w-3 text-warning shrink-0" />
          <span title={lang === 'es' ? 'Código fuente privado durante el desarrollo del proyecto de tesis universitaria UPC' : 'Private codebase during UPC university thesis project development'}>
            {lang === 'es' ? 'Tesis UPC • Código Privado' : 'UPC Thesis • Private Code'}
          </span>
        </div>
      </div>
    );
  }

  // CASO 2: Proyectos con captura real auténtica
  if (project.coverImage && !imageError) {
    return (
      <div
        className={cn(
          'relative w-full overflow-hidden bg-surface-muted/60 select-none group/cover',
          variant === 'card' ? 'aspect-[16/9] border-b border-border/60' : 'aspect-[16/10] sm:aspect-[16/9] rounded-2xl border border-border/80 shadow-md',
          className
        )}
      >
        <img
          src={project.coverImage}
          alt={`${project.title} - ${getCoverTag(project.id)}`}
          onError={() => setImageError(true)}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover/cover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-60 dark:opacity-75 pointer-events-none" />

        {/* Pill con descripción técnica auténtica */}
        <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-surface/90 dark:bg-surface-elevated/90 border border-border/80 font-mono text-[10px] text-text-primary backdrop-blur-xs font-semibold shadow-2xs">
          {getCoverTag(project.id)}
        </div>

        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-surface/85 dark:bg-surface-elevated/85 border border-border/80 text-[10px] font-mono text-text-secondary backdrop-blur-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span>{lang === 'es' ? 'Captura Real Verificada' : 'Verified Real Capture'}</span>
        </div>
      </div>
    );
  }

  // CASO 3: Proyectos sin capturas reales (MediTrack, Jobsy, OneCoin)
  // Tarjeta editorial tipográfica y de arquitectura (sin simular UI de app falsa)
  const getEditorialDetails = () => {
    switch (project.id) {
      case 'meditrack':
        return {
          icon: Activity,
          topologyName: 'Edge-Fog-Cloud Telemetry',
          headline: lang === 'es' ? 'Monitoreo IoT & Telemedicina' : 'IoT Telemetry & Vital Monitoring',
          subline: 'MQTT Broker • InfluxDB • Microservices • ESP32',
          pill: lang === 'es' ? 'Arquitectura Distribuida' : 'Distributed Architecture',
          colorClass: 'text-emerald-500',
          bgGradient: 'from-emerald-500/10 via-surface to-primary/5',
        };
      case 'jobsy-backend':
        return {
          icon: Briefcase,
          topologyName: '.NET 9 Domain-Driven Design',
          headline: lang === 'es' ? 'API de Reclutamiento & Extracción CV' : 'Recruitment API & CV Text Parsing',
          subline: 'ASP.NET Core 9 • MediatR • MySQL • UglyToad.PdfPig',
          pill: lang === 'es' ? 'Diseño Guiado por el Dominio' : 'Domain-Driven Design',
          colorClass: 'text-primary',
          bgGradient: 'from-primary/10 via-surface to-accent/10',
        };
      case 'onecoin-backend':
        return {
          icon: Coins,
          topologyName: 'Node.js Modular REST & NoSQL',
          headline: lang === 'es' ? 'Red Social Corporativa & Reconocimiento' : 'Corporate Social Recognition API',
          subline: 'Express.js • MongoDB NoSQL • JWT Auth • Docker',
          pill: lang === 'es' ? 'API Modular NoSQL' : 'NoSQL Modular API',
          colorClass: 'text-amber-500',
          bgGradient: 'from-amber-500/10 via-surface to-primary/5',
        };
      default:
        return {
          icon: Terminal,
          topologyName: 'Software Engineering System',
          headline: project.title,
          subline: project.technologies.slice(0, 4).join(' • '),
          pill: lang === 'es' ? 'Ficha de Arquitectura' : 'Architectural Spec',
          colorClass: 'text-primary',
          bgGradient: 'from-primary/10 via-surface to-primary/5',
        };
    }
  };

  const editorial = getEditorialDetails();
  const IconComponent = editorial.icon;

  return (
    <div
      role="img"
      className={cn(
        'relative w-full overflow-hidden select-none flex flex-col justify-between p-4 sm:p-5 bg-gradient-to-br',
        editorial.bgGradient,
        variant === 'card' ? 'aspect-[16/9] border-b border-border/60' : 'aspect-[16/10] sm:aspect-[16/9] rounded-2xl border border-border/80 shadow-md',
        className
      )}
      aria-label={
        lang === 'es'
          ? `Ficha arquitectónica técnica para ${project.title}`
          : `Technical architectural spec for ${project.title}`
      }
    >
      {/* Patrón sutil de cuadrícula de ingeniería */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]"
        aria-hidden="true"
      />

      {/* Cabecera del cover editorial */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-surface/90 dark:bg-surface-elevated/90 border border-border/70 shadow-2xs">
            <IconComponent className={cn('h-4 w-4', editorial.colorClass)} />
          </div>
          <span className="font-mono text-[11px] font-semibold text-text-primary">
            {editorial.topologyName}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-surface/90 dark:bg-surface-elevated/90 border border-border/70 text-[10px] font-mono font-medium text-text-secondary shadow-2xs">
          {editorial.pill}
        </span>
      </div>

      {/* Centro: Contenido tipográfico editorial */}
      <div className="relative z-10 space-y-1 my-auto pt-2">
        <h4 className="text-base sm:text-lg font-bold text-text-primary tracking-tight line-clamp-1">
          {editorial.headline}
        </h4>
        <p className="font-mono text-[11px] text-text-muted line-clamp-1">
          {editorial.subline}
        </p>
      </div>

      {/* Pie del cover editorial: Especificación de Arquitectura */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border/50 text-[10px] font-mono text-text-muted">
        <div className="flex items-center gap-1.5">
          <Layers className="h-3 w-3 text-primary" />
          <span>{lang === 'es' ? 'Ficha de Arquitectura & Código' : 'Architecture & Code Spec'}</span>
        </div>
        <div className="flex items-center gap-1 text-primary font-semibold">
          <Database className="h-3 w-3" />
          <span>{project.technologies[0]}</span>
        </div>
      </div>
    </div>
  );
}
