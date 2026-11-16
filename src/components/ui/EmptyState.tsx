import { SearchX } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export interface EmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
}

export function EmptyState({ title, description, onReset }: EmptyStateProps) {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center rounded-xl border border-dashed border-border bg-surface/50 my-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-subtle text-primary mb-3">
        <SearchX className="h-6 w-6" />
      </div>
      <h4 className="text-base font-semibold text-text-primary mb-1">
        {title || t('emptyState.noProjectsFound')}
      </h4>
      <p className="text-xs text-text-secondary max-w-sm mb-4">
        {description || t('emptyState.noProjectsDescription')}
      </p>
      {onReset ? (
        <Button variant="outline" size="sm" onClick={onReset}>
          {t('actions.clearFilters')}
        </Button>
      ) : null}
    </div>
  );
}
