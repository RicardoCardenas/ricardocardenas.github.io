import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { MobileNavSheet } from './MobileNavSheet';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { cn } from '../../utils/cn';

const sectionIds = ['about', 'skills', 'featured-projects', 'education', 'cv', 'contact'];
const sectionIdMap: Record<string, string> = {
  about: 'about',
  skills: 'skills',
  projects: 'featured-projects',
  education: 'education',
  cv: 'cv',
  contact: 'contact',
};

export function Navbar() {
  const { t } = useTranslation('nav');
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const activeSectionId = useScrollSpy(sectionIds);

  const navLinks = [
    { key: 'about', label: t('about'), href: '#about' },
    { key: 'skills', label: t('skills'), href: '#skills' },
    { key: 'projects', label: t('projects'), href: '#featured-projects' },
    { key: 'education', label: t('education'), href: '#education' },
    { key: 'cv', label: t('cv'), href: '#cv' },
    { key: 'contact', label: t('contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/85 border-b border-border/60 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo Monograma Minimalista */}
        <Link
          to="/"
          className="flex items-center gap-2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-focus rounded-md"
          aria-label={`Ricardo Cardenas - ${t('home')}`}
        >
          <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm tracking-tight group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
            RC
          </div>
          <span className="font-semibold text-sm tracking-tight text-text-primary hidden sm:inline-block">
            Ricardo Cardenas
          </span>
        </Link>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5" aria-label="Navegación principal">
          {navLinks.map((link) => {
            const isAnchor = link.href.startsWith('#');
            const href = isAnchor
              ? isHomePage
                ? link.href
                : `/${link.href}`
              : link.href;

            const isSectionActive = isHomePage && sectionIdMap[link.key] === activeSectionId;

            return (
              <Link
                key={link.key}
                to={href}
                className={cn(
                  'px-2.5 py-1.5 text-xs font-medium rounded-md transition-[color,background-color,border-color] duration-150',
                  isSectionActive
                    ? 'text-primary font-semibold bg-primary/10 border border-primary/25 shadow-2xs'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface border border-transparent'
                )}
                aria-current={isSectionActive ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/projects"
            className={cn(
              'px-2.5 py-1.5 text-xs font-medium rounded-md transition-[color,background-color,border-color] duration-150',
              location.pathname.startsWith('/projects')
                ? 'text-primary font-semibold bg-primary/15 border border-primary/30 shadow-2xs'
                : 'text-primary hover:bg-accent-subtle border border-transparent'
            )}
            aria-current={location.pathname.startsWith('/projects') ? 'page' : undefined}
          >
            {t('catalog')}
          </Link>
        </nav>

        {/* Controles de Utilidad (Desktop) & Menú Móvil */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <MobileNavSheet navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
