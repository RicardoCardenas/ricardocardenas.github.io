import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent' | 'outline' | 'success' | 'warning';
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  const baseStyles =
    'inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium select-none ' +
    'transition-colors duration-150';

  const variants = {
    default: 'bg-surface text-text-secondary border border-border/80',
    accent: 'bg-accent-subtle text-primary border border-primary/20 font-semibold',
    outline: 'bg-transparent text-text-secondary border border-border',
    success: 'bg-success/10 text-success border border-success/20',
    warning: 'bg-warning/10 text-warning border border-warning/20',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
