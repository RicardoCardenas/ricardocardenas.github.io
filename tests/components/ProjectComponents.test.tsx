import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricsBanner } from '../../src/components/projects/MetricsBanner';
import { KeyDecisionsCard } from '../../src/components/projects/KeyDecisionsCard';
import { ProjectGallery } from '../../src/components/projects/ProjectGallery';
import { ArchitectureDiagram } from '../../src/components/projects/ArchitectureDiagram';
import type { ProjectMetric, TechnicalDecision, ArchitectureComponent } from '../../src/types';

describe('Project Detail Specialized Components', () => {
  it('renderiza MetricsBanner con métricas, categorías y etiquetas bilingües', () => {
    const mockMetrics: ProjectMetric[] = [
      {
        value: '2.4M',
        label: { es: 'Eventos Procesados', en: 'Processed Events' },
        description: { es: 'En BigQuery', en: 'In BigQuery' },
        category: 'data',
        verifiedSource: 'Google Cloud BigQuery events table',
      },
      {
        value: '82.8%',
        label: { es: 'Precisión Churn', en: 'Churn Precision' },
        description: { es: 'Modelo ML in-situ', en: 'In-database ML model' },
        category: 'functional',
        verifiedSource: 'BigQuery ML ML.EVALUATE',
      },
    ];

    const { rerender } = render(<MetricsBanner metrics={mockMetrics} lang="es" />);
    expect(screen.getByText('2.4M')).toBeInTheDocument();
    expect(screen.getByText('Eventos Procesados')).toBeInTheDocument();
    expect(screen.getByText('En BigQuery')).toBeInTheDocument();
    expect(screen.getByText('82.8%')).toBeInTheDocument();
    expect(screen.getByText(/Datos & Analítica/i)).toBeInTheDocument();

    rerender(<MetricsBanner metrics={mockMetrics} lang="en" />);
    expect(screen.getByText('Processed Events')).toBeInTheDocument();
    expect(screen.getByText('In BigQuery')).toBeInTheDocument();
    expect(screen.getByText(/Data & Analytics/i)).toBeInTheDocument();
  });

  it('renderiza KeyDecisionsCard con ADRs, decisiones y trade-offs', () => {
    const mockDecisions: TechnicalDecision[] = [
      {
        title: { es: 'Uso de BigDecimal', en: 'Adoption of BigDecimal' },
        decision: { es: 'Tipos monetarios de precisión', en: 'Precise financial types' },
        tradeoff: { es: 'Mayor verbosidad en código', en: 'More verbose syntax' },
      },
    ];

    render(<KeyDecisionsCard decisions={mockDecisions} lang="es" />);
    expect(screen.getByText(/Uso de BigDecimal/i)).toBeInTheDocument();
    expect(screen.getByText(/Tipos monetarios de precisión/i)).toBeInTheDocument();
    expect(screen.getByText(/Mayor verbosidad en código/i)).toBeInTheDocument();
  });

  it('renderiza ProjectGallery con imágenes y captions descriptivos', () => {
    const mockImages = ['/images/projects/thelook-dashboard.png'];
    render(<ProjectGallery images={mockImages} title="TheLook Pipeline" lang="es" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/projects/thelook-dashboard.png');
    expect(screen.getByText(/Looker Studio/i)).toBeInTheDocument();
  });

  it('renderiza ArchitectureDiagram con topología y componentes modulares distinguiendo implementados y planificados', () => {
    const mockComponents: ArchitectureComponent[] = [
      {
        name: 'FastAPI Monolith',
        role: { es: 'Lógica de negocio', en: 'Business logic' },
        technology: 'Python 3.12',
        status: 'implemented',
      },
      {
        name: 'PostgreSQL Store',
        role: { es: 'Datos autoritativos', en: 'Authoritative data' },
        technology: 'PostgreSQL 16',
        status: 'implemented',
      },
      {
        name: 'LangGraph Orchestrator',
        role: { es: 'Agentes supervisados', en: 'Supervised agents' },
        technology: 'LangGraph',
        status: 'planned',
      },
    ];

    render(
      <ArchitectureDiagram
        projectId="nexo"
        overview="Arquitectura de persistencia políglota"
        components={mockComponents}
        lang="es"
      />
    );

    expect(screen.getByText('Arquitectura de persistencia políglota')).toBeInTheDocument();
    expect(screen.getAllByText(/FastAPI/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/PostgreSQL 16/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/LangGraph Orchestrator/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Planificado/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Implementado/i).length).toBeGreaterThan(0);
  });
});
