import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MetricsBanner } from '../../src/components/projects/MetricsBanner';
import { KeyDecisionsCard } from '../../src/components/projects/KeyDecisionsCard';
import { ProjectGallery } from '../../src/components/projects/ProjectGallery';
import { ArchitectureDiagram } from '../../src/components/projects/ArchitectureDiagram';
import { ProjectCoverGraphic } from '../../src/components/projects/ProjectCoverGraphic';
import { verifiedProjects } from '../../src/data/projects';
import userEvent from '@testing-library/user-event';
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
      {
        value: { es: '7 Contextos', en: '7 Contexts' },
        label: { es: 'Bounded Contexts DDD', en: 'DDD Bounded Contexts' },
        description: { es: 'Aislamiento de dominio', en: 'Domain isolation' },
        category: 'architecture',
        verifiedSource: 'Auditoría de arquitectura',
      },
    ];

    const { rerender } = render(<MetricsBanner metrics={mockMetrics} lang="es" />);
    expect(screen.getByText('2.4M')).toBeInTheDocument();
    expect(screen.getByText('Eventos Procesados')).toBeInTheDocument();
    expect(screen.getByText('En BigQuery')).toBeInTheDocument();
    expect(screen.getByText('82.8%')).toBeInTheDocument();
    expect(screen.getByText('7 Contextos')).toBeInTheDocument();
    expect(screen.getByText(/Datos & Analítica/i)).toBeInTheDocument();

    rerender(<MetricsBanner metrics={mockMetrics} lang="en" />);
    expect(screen.getByText('Processed Events')).toBeInTheDocument();
    expect(screen.getByText('In BigQuery')).toBeInTheDocument();
    expect(screen.getByText('7 Contexts')).toBeInTheDocument();
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

  it('renderiza ProjectCoverGraphic para Nexo con topología abstracta y LangGraph claramente planificado', () => {
    const nexoProject = verifiedProjects.find((p) => p.id === 'nexo')!;
    const { rerender } = render(<ProjectCoverGraphic project={nexoProject} lang="es" variant="hero" />);

    expect(screen.getByLabelText(/Diagrama conceptual de arquitectura Agentic GraphRAG para Nexo/i)).toBeInTheDocument();
    expect(screen.getByText(/Concepto de Arquitectura/i)).toBeInTheDocument();
    expect(screen.getByText(/Tesis UPC • Código Privado/i)).toBeInTheDocument();
    expect(screen.getByText('FastAPI')).toBeInTheDocument();
    expect(screen.getByText('LangGraph')).toBeInTheDocument();
    expect(screen.getByText('Agentes Supervisados')).toBeInTheDocument();
    expect(screen.getByText('Planificado')).toBeInTheDocument();

    rerender(<ProjectCoverGraphic project={nexoProject} lang="en" variant="hero" />);
    expect(screen.getByText('Supervised Agents')).toBeInTheDocument();
    expect(screen.getByText('Planned')).toBeInTheDocument();
  });

  it('renderiza ProjectCoverGraphic para proyectos con capturas reales (Capital Cruise)', () => {
    const ccProject = verifiedProjects.find((p) => p.id === 'capital-cruise')!;
    render(<ProjectCoverGraphic project={ccProject} lang="es" variant="card" />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/images/projects/capital-cruise-db.png');
    expect(screen.getByText(/Esquema de BD Relacional/i)).toBeInTheDocument();
    expect(screen.getByText(/Captura Real Verificada/i)).toBeInTheDocument();
  });

  it('renderiza ProjectCoverGraphic para proyectos sin captura real (MediTrack) usando tarjeta editorial', () => {
    const meditrackProject = verifiedProjects.find((p) => p.id === 'meditrack')!;
    render(<ProjectCoverGraphic project={meditrackProject} lang="es" variant="card" />);

    expect(screen.getByLabelText(/Ficha arquitectónica técnica para MediTrack/i)).toBeInTheDocument();
    expect(screen.getByText(/Edge-Fog-Cloud Telemetry/i)).toBeInTheDocument();
    expect(screen.getByText(/Monitoreo IoT & Telemedicina/i)).toBeInTheDocument();
    expect(screen.getByText(/Arquitectura Distribuida/i)).toBeInTheDocument();
  });

  it('ProjectGallery abre lightbox interactivo, navega entre imágenes y restaura el foco al cerrar con Escape', async () => {
    const user = userEvent.setup();
    const mockImages = [
      '/images/projects/thelook-dashboard.png',
      '/images/projects/thelook-diagram-er.png',
    ];
    render(<ProjectGallery images={mockImages} title="TheLook Pipeline" lang="es" />);

    // Clic en la primera imagen para abrir el modal
    const galleryButtons = screen.getAllByRole('button', { name: /ver imagen ampliada/i });
    expect(galleryButtons).toHaveLength(2);
    await user.click(galleryButtons[0]);

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText(/1 \/ 2/)).toBeInTheDocument();

    // Navegación con flecha derecha
    await user.keyboard('{ArrowRight}');
    expect(screen.getByText(/2 \/ 2/)).toBeInTheDocument();

    // Presionar Escape para cerrar el modal
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Verificar que el foco se restaura al botón disparador original
    expect(galleryButtons[0]).toHaveFocus();
  });
});
