import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ProjectsCatalogPage } from '../../src/pages/ProjectsCatalogPage';

describe('ProjectsCatalogPage URL Search Params & Filtering', () => {
  it('inicializa con filtro de categoría desde search params (?category=data-ai)', () => {
    render(
      <MemoryRouter initialEntries={['/projects?category=data-ai']}>
        <Routes>
          <Route path="/projects" element={<ProjectsCatalogPage />} />
        </Routes>
      </MemoryRouter>
    );

    // En data-ai hay 4 proyectos verificados (TheLook, Churn, Nexo, MediTrack)
    expect(screen.getByText(/(Showing|Mostrando) 4 (of|de) 8/i)).toBeInTheDocument();
    expect(screen.getByText('TheLook eCommerce Data Pipeline')).toBeInTheDocument();
    expect(screen.getByText('Customer Churn & Behavioral Analytics')).toBeInTheDocument();
  });

  it('resetea de forma segura a "all" si la categoría en URL es desconocida (?category=unknown)', () => {
    render(
      <MemoryRouter initialEntries={['/projects?category=invalid-category']}>
        <Routes>
          <Route path="/projects" element={<ProjectsCatalogPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/(Showing|Mostrando) 8 (of|de) 8/i)).toBeInTheDocument();
  });

  it('inicializa con término de búsqueda desde URL (?q=spring)', () => {
    render(
      <MemoryRouter initialEntries={['/projects?q=spring']}>
        <Routes>
          <Route path="/projects" element={<ProjectsCatalogPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Capital Cruise')).toBeInTheDocument();
  });

  it('permite limpiar filtros mediante el botón Restablecer filtros', () => {
    render(
      <MemoryRouter initialEntries={['/projects?category=mobile']}>
        <Routes>
          <Route path="/projects" element={<ProjectsCatalogPage />} />
        </Routes>
      </MemoryRouter>
    );

    // En mobile hay 1 proyecto verificado (TaleStar)
    expect(screen.getByText(/(Showing|Mostrando) 1 (of|de) 8/i)).toBeInTheDocument();
    const resetButton = screen.getByText(/(Restablecer filtros|Reset all filters)/i);
    fireEvent.click(resetButton);

    expect(screen.getByText(/(Showing|Mostrando) 8 (of|de) 8/i)).toBeInTheDocument();
  });

  it('el atajo de teclado "/" enfoca el input de búsqueda si ningún campo editable tiene el foco', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <Routes>
          <Route path="/projects" element={<ProjectsCatalogPage />} />
        </Routes>
      </MemoryRouter>
    );

    const searchInput = screen.getByRole('textbox', { name: /(buscar proyectos|search projects)/i });
    expect(searchInput).not.toHaveFocus();

    fireEvent.keyDown(window, { key: '/' });
    expect(searchInput).toHaveFocus();
  });
});
