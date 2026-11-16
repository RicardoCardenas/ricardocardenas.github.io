import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../src/components/ui/Button';

describe('Componente Button', () => {
  it('renderiza el texto del botón correctamente', () => {
    render(<Button>Explorar Proyectos</Button>);
    expect(screen.getByRole('button', { name: /explorar proyectos/i })).toBeInTheDocument();
  });

  it('ejecuta la función onClick al presionar el botón', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Acción</Button>);

    const button = screen.getByRole('button', { name: /acción/i });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('respeta el estado disabled y no dispara clics', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Deshabilitado</Button>);

    const button = screen.getByRole('button', { name: /deshabilitado/i });
    expect(button).toBeDisabled();

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('aplica las clases de variante correspondientes', () => {
    const { rerender } = render(<Button variant="primary">Primario</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary');

    rerender(<Button variant="outline">Contorno</Button>);
    expect(screen.getByRole('button')).toHaveClass('bg-transparent');
  });
});
