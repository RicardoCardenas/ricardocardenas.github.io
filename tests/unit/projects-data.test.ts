import { describe, it, expect } from 'vitest';
import { verifiedProjects } from '../../src/data/projects';

describe('Verified Projects Data Structure & Audit', () => {
  it('contiene exactamente los 8 proyectos verificados', () => {
    expect(verifiedProjects).toHaveLength(8);
  });

  it('valida que todos los proyectos tengan slug, resumen, problema y solución bilingüe', () => {
    for (const project of verifiedProjects) {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.categories.length).toBeGreaterThan(0);
      expect(project.summary.es).toBeTruthy();
      expect(project.summary.en).toBeTruthy();
      expect(project.problem.es).toBeTruthy();
      expect(project.problem.en).toBeTruthy();
      expect(project.solution.es).toBeTruthy();
      expect(project.solution.en).toBeTruthy();
      expect(project.implementedFeatures.es.length).toBeGreaterThan(0);
      expect(project.implementedFeatures.en.length).toBeGreaterThan(0);
    }
  });

  it('valida que las métricas procedan de fuentes técnicas verificadas y tengan categoría válida', () => {
    const validCategories = new Set(['functional', 'testing', 'architecture', 'data']);

    for (const project of verifiedProjects) {
      expect(project.metrics && project.metrics.length).toBeGreaterThanOrEqual(4);
      for (const metric of project.metrics || []) {
        expect(metric.value).toBeTruthy();
        expect(metric.label.es).toBeTruthy();
        expect(metric.label.en).toBeTruthy();
        expect(metric.description?.es).toBeTruthy();
        expect(metric.description?.en).toBeTruthy();
        expect(validCategories.has(metric.category)).toBe(true);
        expect(metric.verifiedSource).toBeTruthy();
      }
    }
  });

  it('valida la topología arquitectónica distinguiendo componentes implementados y planificados', () => {
    const validStatuses = new Set(['implemented', 'in-development', 'planned']);

    for (const project of verifiedProjects) {
      expect(project.architectureOverview?.es).toBeTruthy();
      expect(project.architectureOverview?.en).toBeTruthy();
      expect(project.architectureComponents && project.architectureComponents.length).toBeGreaterThanOrEqual(3);

      for (const comp of project.architectureComponents || []) {
        expect(comp.name).toBeTruthy();
        expect(comp.technology).toBeTruthy();
        expect(comp.role.es).toBeTruthy();
        expect(comp.role.en).toBeTruthy();
        expect(validStatuses.has(comp.status)).toBe(true);
      }
    }

    // Verificación estricta de Nexo: LangGraph NO está implementado en Fase 0
    const nexo = verifiedProjects.find((p) => p.id === 'nexo');
    expect(nexo).toBeDefined();

    const langGraphComp = nexo?.architectureComponents?.find((c) =>
      c.name.toLowerCase().includes('langgraph')
    );
    expect(langGraphComp).toBeDefined();
    expect(langGraphComp?.status).toBe('planned');

    // Componentes ya implementados en Fase 0 de Nexo
    const fastApiComp = nexo?.architectureComponents?.find((c) =>
      c.name.toLowerCase().includes('fastapi')
    );
    expect(fastApiComp?.status).toBe('implemented');

    const postgresComp = nexo?.architectureComponents?.find((c) =>
      c.name.toLowerCase().includes('postgresql')
    );
    expect(postgresComp?.status).toBe('implemented');
  });

  it('verifica que Nexo se catalogue estrictamente como tesis privada sin link a GitHub', () => {
    const nexo = verifiedProjects.find((p) => p.id === 'nexo');
    expect(nexo).toBeDefined();
    expect(nexo?.isAcademicThesis).toBe(true);
    expect(nexo?.isPrivateCode).toBe(true);
    expect(nexo?.links.github).toBeUndefined();
    expect(nexo?.categories).toContain('software-engineering');
    expect(nexo?.categories).toContain('data-ai');
    expect(nexo?.plannedFeatures?.es.length).toBeGreaterThanOrEqual(4);
  });

  it('permite filtrar proyectos por categorías múltiples', () => {
    const softwareProjects = verifiedProjects.filter((p) =>
      p.categories.includes('software-engineering')
    );
    const dataAiProjects = verifiedProjects.filter((p) =>
      p.categories.includes('data-ai')
    );
    const mobileProjects = verifiedProjects.filter((p) =>
      p.categories.includes('mobile')
    );

    expect(softwareProjects.length).toBe(6);
    expect(dataAiProjects.length).toBe(4);
    expect(mobileProjects.length).toBe(1);
  });
});
