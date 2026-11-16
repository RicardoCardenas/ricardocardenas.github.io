import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook para desplazamiento accesible hacia elementos anclados por hash (#seccion),
 * respetando las preferencias de reducción de movimiento del usuario.
 */
export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const targetId = hash.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setTimeout(() => {
        element.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }, 50);
    }
  }, [hash]);
}
