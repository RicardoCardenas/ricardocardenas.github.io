import { cn } from '../../utils/cn';
import { Badge } from './Badge';

export interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl',
        className
      )}
    >
      {badge ? (
        <div className={align === 'center' ? 'flex justify-center' : ''}>
          <Badge variant="accent" className="text-xs uppercase tracking-wider font-semibold">
            {badge}
          </Badge>
        </div>
      ) : null}

      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>

      {description ? (
        <p className="text-base text-text-secondary leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
