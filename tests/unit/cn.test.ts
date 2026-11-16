import { describe, it, expect } from 'vitest';
import { cn } from '../../src/utils/cn';

describe('Utility cn()', () => {
  it('combina clases simples correctamente', () => {
    const result = cn('text-sm', 'font-bold');
    expect(result).toBe('text-sm font-bold');
  });

  it('resuelve colisiones de clases en Tailwind (prioriza la última)', () => {
    const result = cn('p-4', 'p-2');
    expect(result).toBe('p-2');
  });

  it('ignora valores falsy y condicionales', () => {
    const isPrimary = false;
    const result = cn('btn', isPrimary && 'btn-primary', 'btn-lg');
    expect(result).toBe('btn btn-lg');
  });
});
