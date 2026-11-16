import { describe, it, expect } from 'vitest';
import { verifiedProjects } from '../../src/data/projects';

describe('Verified Projects Data Structure', () => {
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
    }
  });

  it('verifica que Nexo se catalogue estrictamente como tesis privada sin link a GitHub', () => {
    const nexo = verifiedProjects.find((p) => p.id === 'nexo');
    expect(nexo).toBeDefined();
    expect(nexo?.isAcademicThesis).toBe(true);
    expect(nexo?.isPrivateCode).toBe(true);
    expect(nexo?.links.github).toBeUndefined();
    expect(nexo?.categories).toContain('software-engineering');
    expect(nexo?.categories).toContain('data-ai');
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

    expect(softwareProjects.length).toBeGreaterThanOrEqual(5);
    expect(dataAiProjects.length).toBeGreaterThanOrEqual(4);
    expect(mobileProjects.length).toBeGreaterThanOrEqual(1);
  });
});
