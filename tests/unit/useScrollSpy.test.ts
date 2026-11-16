import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useScrollSpy } from '../../src/hooks/useScrollSpy';

describe('useScrollSpy hook', () => {
  it('inicializa con activeId vacío cuando está en la parte superior', () => {
    const { result } = renderHook(() => useScrollSpy(['about', 'skills', 'featured-projects']));
    expect(result.current).toBe('');
  });

  it('detecta sección activa usando fallback de scroll cuando no hay IntersectionObserver', () => {
    const section1 = document.createElement('div');
    section1.id = 'about';
    Object.defineProperty(section1, 'offsetTop', { value: 100 });
    document.body.appendChild(section1);

    const section2 = document.createElement('div');
    section2.id = 'skills';
    Object.defineProperty(section2, 'offsetTop', { value: 500 });
    document.body.appendChild(section2);

    const { result } = renderHook(() => useScrollSpy(['about', 'skills'], 50));

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe('about');

    document.body.removeChild(section1);
    document.body.removeChild(section2);
  });
});
