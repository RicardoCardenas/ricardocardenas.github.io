import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook para desplazamiento suave hacia elementos anclados por hash (#seccion),
 * respetando el desplazamiento con retraso para permitir el montaje del DOM.
 */
export function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Si navegamos a una ruta sin hash, restauramos arriba
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = hash.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // Pequeño timeout para asegurar que el layout haya finalizado
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [pathname, hash]);
}
