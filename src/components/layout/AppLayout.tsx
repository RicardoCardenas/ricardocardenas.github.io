import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useHashScroll } from '../../hooks/useHashScroll';

export function AppLayout() {
  useHashScroll();
  const { i18n } = useTranslation('common');
  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'es';

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary">
      <ScrollRestoration getKey={(location) => location.pathname} />
      {/* Enlace accesible para lectores de pantalla y navegación por teclado */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-md"
      >
        {lang === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'}
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
