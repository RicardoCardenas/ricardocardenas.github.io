import { useState } from 'react';
import { cn } from '../../utils/cn';

export interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-12 w-12 text-sm',
  lg: 'h-16 w-16 text-base font-semibold',
  xl: 'h-24 w-24 text-2xl font-bold',
};

export function Avatar({
  src,
  alt = 'Ricardo Cardenas',
  initials = 'RC',
  size = 'md',
  className,
}: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={cn(
        'relative inline-flex items-center justify-center rounded-2xl select-none overflow-hidden',
        'border border-border/80 bg-surface shadow-xs transition-transform duration-150',
        sizeClasses[size],
        className
      )}
      aria-label={alt}
    >
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="h-full w-full object-cover rounded-2xl"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-primary/5 to-surface text-primary font-mono tracking-wider">
          <span>{initials}</span>
        </div>
      )}
    </div>
  );
}
