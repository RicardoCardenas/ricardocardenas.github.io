import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageToggle } from '../../src/components/ui/LanguageToggle';
import i18n from '../../src/i18n/config';

describe('Componente LanguageToggle', () => {
  it('renderiza las opciones ES y EN', () => {
    render(<LanguageToggle />);
    expect(screen.getByRole('button', { name: 'ES' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument();
  });

  it('cambia el idioma activo al hacer clic en EN', async () => {
    render(<LanguageToggle />);

    const enButton = screen.getByRole('button', { name: 'EN' });
    fireEvent.click(enButton);

    expect(i18n.language).toMatch(/^en/);
    expect(enButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('restablece el idioma a ES al hacer clic en ES', async () => {
    render(<LanguageToggle />);

    const esButton = screen.getByRole('button', { name: 'ES' });
    fireEvent.click(esButton);

    expect(i18n.language).toMatch(/^es/);
    expect(esButton).toHaveAttribute('aria-pressed', 'true');
  });
});
