import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { SEOHead } from '../components/seo/SEOHead';
import { getNotFoundSEO } from '../config/seo';
import { FileQuestion, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  const { t, i18n } = useTranslation('common');
  const lang = i18n.language && i18n.language.startsWith('en') ? 'en' : 'es';
  const seo = getNotFoundSEO(lang);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-16 space-y-6">
      <SEOHead {...seo} />
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-subtle text-primary border border-primary/20">
        <FileQuestion className="h-8 w-8" />
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          404 — {t('notFound.title')}
        </h1>
        <p className="text-sm text-text-secondary">
          {t('notFound.description')}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link to="/">
          <Button variant="primary" size="md" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            {t('notFound.cta')}
          </Button>
        </Link>
        <Link to="/projects">
          <Button variant="outline" size="md">
            {t('actions.exploreProjects')}
          </Button>
        </Link>
      </div>
    </div>
  );
}
