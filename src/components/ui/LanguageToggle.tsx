import { useTranslation } from 'react-i18next';
import { cn } from '../../utils/cn';

export function LanguageToggle() {
  const { i18n, t } = useTranslation('common');
  const currentLang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'es';

  const toggleLanguage = (lang: 'es' | 'en') => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      role="group"
      aria-label={t('language.toggleAria')}
      className="inline-flex items-center rounded-lg border border-border bg-surface p-0.5"
    >
      <button
        type="button"
        onClick={() => toggleLanguage('es')}
        className={cn(
          'px-2 py-1 text-xs font-medium rounded-md cursor-pointer select-none',
          'transition-[background-color,color,box-shadow] duration-150',
          currentLang === 'es'
            ? 'bg-surface-elevated text-primary font-semibold shadow-xs'
            : 'text-text-muted hover:text-text-primary'
        )}
        aria-pressed={currentLang === 'es'}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => toggleLanguage('en')}
        className={cn(
          'px-2 py-1 text-xs font-medium rounded-md cursor-pointer select-none',
          'transition-[background-color,color,box-shadow] duration-150',
          currentLang === 'en'
            ? 'bg-surface-elevated text-primary font-semibold shadow-xs'
            : 'text-text-muted hover:text-text-primary'
        )}
        aria-pressed={currentLang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
