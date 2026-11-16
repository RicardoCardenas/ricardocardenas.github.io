import { Image as ImageIcon, ZoomIn } from 'lucide-react';
import { useState } from 'react';

interface ProjectGalleryProps {
  images: string[];
  title: string;
  lang: 'es' | 'en';
}

export function ProjectGallery({ images, title, lang }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  const getImageCaption = (src: string) => {
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
  };

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
          <div
            key={idx}
            className="group relative rounded-xl border border-border bg-surface overflow-hidden shadow-2xs hover:border-primary/40 transition-all cursor-pointer"
            onClick={() => setSelectedImage(img)}
          >
            <div className="aspect-video w-full bg-surface-muted overflow-hidden flex items-center justify-center relative">
              <img
                src={img}
                alt={getImageCaption(img)}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
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
          </div>
        ))}
      </div>

      {/* Modal de Previsualización a Pantalla Completa */}
      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-surface border border-border rounded-xl p-2 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-3 py-2 border-b border-border text-xs text-text-muted">
              <span>{getImageCaption(selectedImage)}</span>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="px-2 py-1 rounded hover:bg-surface-muted text-text-primary font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="overflow-auto max-h-[80vh] flex items-center justify-center p-2">
              <img
                src={selectedImage}
                alt={getImageCaption(selectedImage)}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
