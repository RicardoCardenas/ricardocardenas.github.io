import { useState, useEffect } from 'react';

/**
 * Hook para detección accesible y eficiente de la sección visible activa en la página principal,
 * utilizando IntersectionObserver nativo sin recargar eventos continuos de scroll.
 */
export function useScrollSpy(sectionIds: string[], offset = 140): string {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Enfoque robusto: soporte para entornos de test (jsdom) que no tengan IntersectionObserver nativo
    const hasIntersectionObserver = typeof window.IntersectionObserver !== 'undefined';
    if (!hasIntersectionObserver) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + offset;
        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const el = document.getElementById(sectionIds[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveId(sectionIds[i]);
            return;
          }
        }
        if (window.scrollY < offset) {
          setActiveId('');
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const visibleSections = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Si el usuario está en la parte superior (Hero visible), limpiar el indicador activo
        if (window.scrollY < offset) {
          setActiveId('');
          return;
        }

        // Determinar la primera sección visible en el orden DOM establecido por sectionIds
        for (const id of sectionIds) {
          if (visibleSections.has(id)) {
            setActiveId(id);
            return;
          }
        }
      },
      {
        root: null,
        rootMargin: '-15% 0px -55% 0px',
        threshold: [0, 0.25, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < offset) {
        setActiveId('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
