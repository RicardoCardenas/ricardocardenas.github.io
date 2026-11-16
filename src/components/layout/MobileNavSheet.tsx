import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { X, Menu, ExternalLink } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageToggle } from '../ui/LanguageToggle';
import { Button } from '../ui/Button';

export interface MobileNavSheetProps {
  navLinks: { key: string; label: string; href: string }[];
}

export function MobileNavSheet({ navLinks }: MobileNavSheetProps) {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation('common');
  const location = useLocation();

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Abrir menú de navegación"
          className="md:hidden text-text-primary"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs animate-in fade-in-0 duration-200" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-surface-elevated p-6 shadow-xl border-l border-border flex flex-col justify-between animate-in slide-in-from-right duration-200">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <span className="font-bold text-sm tracking-tight text-primary">
                Ricardo Cardenas
              </span>
              <Dialog.Close asChild>
                <Button variant="ghost" size="icon" aria-label="Cerrar menú">
                  <X className="h-5 w-5 text-text-muted hover:text-text-primary" />
                </Button>
              </Dialog.Close>
            </div>

            <nav className="flex flex-col space-y-1 py-4">
              {navLinks.map((link) => {
                const isAnchor = link.href.startsWith('#');
                const href = isAnchor
                  ? location.pathname === '/'
                    ? link.href
                    : `/${link.href}`
                  : link.href;

                return (
                  <Link
                    key={link.key}
                    to={href}
                    onClick={handleLinkClick}
                    className="flex items-center h-12 px-3 text-sm font-medium rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface active:bg-border/30 transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/projects"
                onClick={handleLinkClick}
                className="flex items-center justify-between h-12 px-3 text-sm font-medium rounded-lg text-primary hover:bg-accent-subtle transition-colors"
              >
                <span>{t('actions.exploreProjects')}</span>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </nav>
          </div>

          <div className="pt-4 border-t border-border flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted">{t('theme.title')}</span>
              <ThemeToggle />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-text-muted">{t('language.title')}</span>
              <LanguageToggle />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
