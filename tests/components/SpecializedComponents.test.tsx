import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Avatar } from '../../src/components/ui/Avatar';
import { SectionHeader } from '../../src/components/ui/SectionHeader';
import { SkillCategoryCard } from '../../src/components/ui/SkillCategoryCard';
import { CertificationCard } from '../../src/components/ui/CertificationCard';
import { FeaturedProjectCard } from '../../src/components/ui/FeaturedProjectCard';
import { verifiedCertifications } from '../../src/data/certifications';
import { verifiedProjects } from '../../src/data/projects';

describe('Specialized UI Components', () => {
  it('renderiza Avatar con monograma por defecto', () => {
    render(<Avatar initials="RC" alt="Ricardo Cardenas" />);
    expect(screen.getByText('RC')).toBeInTheDocument();
    expect(screen.getByLabelText('Ricardo Cardenas')).toBeInTheDocument();
  });

  it('renderiza SectionHeader con badge, título y descripción', () => {
    render(
      <SectionHeader
        badge="Tecnologías"
        title="Stack Tecnológico"
        description="Herramientas verificadas"
      />
    );
    expect(screen.getByText('Tecnologías')).toBeInTheDocument();
    expect(screen.getByText('Stack Tecnológico')).toBeInTheDocument();
    expect(screen.getByText('Herramientas verificadas')).toBeInTheDocument();
  });

  it('renderiza SkillCategoryCard con lista de habilidades', () => {
    render(
      <SkillCategoryCard
        title="Backend & Lenguajes"
        skills={[
          { name: 'Java', context: 'Spring Boot 3', isPrimary: true },
          { name: 'C#', context: '.NET 9' },
        ]}
      />
    );
    expect(screen.getByText('Backend & Lenguajes')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('(Spring Boot 3)')).toBeInTheDocument();
    expect(screen.getByText('C#')).toBeInTheDocument();
  });

  it('renderiza CertificationCard para AZ-900', () => {
    const az900 = verifiedCertifications.find((c) => c.id === 'az-900')!;
    render(<CertificationCard certification={az900} lang="es" />);
    expect(screen.getByText(az900.title.es)).toBeInTheDocument();
    expect(screen.getByText('Microsoft')).toBeInTheDocument();
    expect(screen.getByText('Certificación Profesional')).toBeInTheDocument();
  });

  it('renderiza FeaturedProjectCard para Nexo con badge privado y sin enlace a GitHub', () => {
    const nexo = verifiedProjects.find((p) => p.id === 'nexo')!;
    render(
      <MemoryRouter>
        <FeaturedProjectCard project={nexo} lang="es" index={0} />
      </MemoryRouter>
    );
    expect(screen.getByText('Nexo — Agentic GraphRAG')).toBeInTheDocument();
    expect(screen.getByText('Tesis UPC')).toBeInTheDocument();
    expect(screen.getByText('Código Privado')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /github/i })).not.toBeInTheDocument();
  });
});
