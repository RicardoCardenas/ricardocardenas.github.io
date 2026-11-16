import { Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
  lang: 'es' | 'en';
}

export function ProjectGallery({ images, title, lang }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const getImageCaption = useCallback((src: string) => {
    if (src.includes('capital-cruise-db')) {
      return lang === 'es'
        ? 'Capital Cruise: Esquema de Base de Datos Relacional y Auditoría Financiera'
        : 'Capital Cruise: Relational Database Schema & Financial Audit Engine';
    }
    if (src.includes('thelook-dashboard')) {
      return lang === 'es' ? 'Looker Studio: Embudo de Conversión & Márgenes' : 'Looker Studio: Conversion Funnel & Profit Margins';
    }
    if (src.includes('thelook-diagram-er')) {
      return lang === 'es' ? 'Diagrama Entidad-Relación de Esquema en BigQuery' : 'Entity-Relationship Schema Diagram in BigQuery';
    }
    if (src.includes('churn-dashboard')) {
      return lang === 'es' ? 'Power BI: Dashboard Ejecutivo de Abandono (DAX)' : 'Power BI: Executive Churn Overview Dashboard (DAX)';
    }
    if (src.includes('talestar-ar')) {
      return lang === 'es' ? 'TaleStar: Proyección de Realidad Aumentada (ARCore)' : 'TaleStar: Augmented Reality Surface Projection (ARCore)';
    }
    if (src.includes('talestar-home')) {
      return lang === 'es' ? 'TaleStar: Interfaz Principal y Navegación' : 'TaleStar: Main Screen & Feature Navigation';
    }
    if (src.includes('talestar-container')) {
      return lang === 'es' ? 'TaleStar: Diagrama de Contenedores de Arquitectura Limpia' : 'TaleStar: Clean Architecture Container Diagram';
    }
    return title;
  }, [lang, title]);

  const handleOpen = (idx: number, e: React.MouseEvent<HTMLButtonElement>) => {
    triggerRef.current = e.currentTarget;
    setSelectedIndex(idx);
  };

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    // Restaurar el foco al elemento disparador original
    setTimeout(() => {
      triggerRef.current?.focus();
    }, 0);
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  }, [images.length, selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  }, [images.length, selectedIndex]);

  // Manejo accesible de teclado: Escape, Flechas y Atrapamiento de Foco (Focus Trap)
  useEffect(() => {
    if (selectedIndex === null) return;

    // Enviar foco al botón de cerrar al abrir
    const focusTimer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
      } else if (event.key === 'ArrowLeft') {
        if (images.length > 1) {
          event.preventDefault();
          handlePrev();
        }
      } else if (event.key === 'ArrowRight') {
        if (images.length > 1) {
          event.preventDefault();
          handleNext();
        }
      } else if (event.key === 'Tab') {
        // Trampa de foco accesible dentro del modal
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext, images.length]);

  if (!images || images.length === 0) return null;

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-text-primary">
        <ImageIcon className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold">
          {lang === 'es' ? 'Evidencia Visual & Capturas Reales' : 'Visual Evidence & Real Screenshots'}
        </h3>
      </div>

      <div className={`grid grid-cols-1 ${images.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''} gap-4`}>
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            aria-haspopup="dialog"
            aria-label={`${lang === 'es' ? 'Ver imagen ampliada:' : 'Enlarge image:'} ${getImageCaption(img)}`}
            onClick={(e) => handleOpen(idx, e)}
            className="group text-left w-full relative rounded-xl border border-border bg-surface overflow-hidden shadow-2xs hover:border-primary/40 focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer active:scale-[0.98]"
          >
            <div className="aspect-video w-full bg-surface-muted overflow-hidden flex items-center justify-center relative">
              <img
                src={img}
                alt={getImageCaption(img)}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100" aria-hidden="true">
                <span className="p-2 rounded-full bg-surface/90 text-text-primary shadow-xs">
                  <ZoomIn className="h-4 w-4" />
                </span>
              </div>
            </div>
            <div className="p-3 border-t border-border/60">
              <p className="text-xs font-medium text-text-secondary line-clamp-1">
                {getImageCaption(img)}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal Accesible de Previsualización a Pantalla Completa (Lightbox) */}
      {currentImage && selectedIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={getImageCaption(currentImage)}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={handleClose}
        >
          <div
            ref={modalRef}
            className="relative max-w-4xl max-h-[90vh] bg-surface border border-border rounded-xl p-3 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-2 pb-2.5 border-b border-border text-xs text-text-muted gap-4">
              <div className="flex items-center gap-2 truncate">
                {images.length > 1 ? (
                  <span className="font-mono px-2 py-0.5 rounded bg-surface-muted text-text-muted text-[11px] font-semibold shrink-0">
                    {selectedIndex + 1} / {images.length}
                  </span>
                ) : null}
                <span className="font-medium text-text-primary truncate">
                  {getImageCaption(currentImage)}
                </span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleClose}
                aria-label={lang === 'es' ? 'Cerrar vista previa (Escape)' : 'Close preview (Escape)'}
                className="p-1 rounded-md hover:bg-surface-muted text-text-muted hover:text-text-primary cursor-pointer transition-colors focus:outline-hidden focus:ring-2 focus:ring-primary/50 shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative overflow-auto max-h-[75vh] flex items-center justify-center p-2 group/modal">
              <img
                src={currentImage}
                alt={getImageCaption(currentImage)}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />

              {/* Controles de navegación anterior/siguiente accesibles cuando hay más de 1 imagen */}
              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label={lang === 'es' ? 'Imagen anterior (Flecha Izquierda)' : 'Previous image (Left Arrow)'}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface/80 hover:bg-surface text-text-primary border border-border/80 shadow-md backdrop-blur-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-transform active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label={lang === 'es' ? 'Imagen siguiente (Flecha Derecha)' : 'Next image (Right Arrow)'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface/80 hover:bg-surface text-text-primary border border-border/80 shadow-md backdrop-blur-xs cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary/50 transition-transform active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
