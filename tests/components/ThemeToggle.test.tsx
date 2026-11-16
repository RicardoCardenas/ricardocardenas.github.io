import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../../src/components/ui/ThemeToggle';
import { ThemeProvider } from '../../src/context/ThemeContext';

describe('Componente ThemeToggle', () => {
  it('renderiza el disparador accesible con aria-label', () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    );

    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();
  });

  it('abre el menú de temas al interactuar con el teclado', async () => {
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    );

    const trigger = screen.getByRole('button');
    // En Radix UI DropdownMenu, ArrowDown abre el menú de forma garantizada en JSDOM
    fireEvent.keyDown(trigger, { key: 'ArrowDown', code: 'ArrowDown' });

    expect(await screen.findByText(/claro|light/i)).toBeInTheDocument();
    expect(screen.getByText(/oscuro|dark/i)).toBeInTheDocument();
    expect(screen.getByText(/sistema|system/i)).toBeInTheDocument();
  });
});
