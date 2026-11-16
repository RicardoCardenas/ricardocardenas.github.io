import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './Card';
import { Badge } from './Badge';
import { cn } from '../../utils/cn';

export interface SkillItem {
  name: string;
  context?: string;
  isPrimary?: boolean;
}

export interface SkillCategoryCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  skills: SkillItem[];
  className?: string;
}

export function SkillCategoryCard({
  title,
  description,
  icon: Icon,
  skills,
  className,
}: SkillCategoryCardProps) {
  return (
    <Card
      className={cn(
        'group transition-all duration-200 hover:border-primary/40 hover:shadow-sm',
        className
      )}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          {Icon ? (
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 transition-transform duration-150">
              <Icon className="h-4.5 w-4.5" />
            </div>
          ) : null}
          <div>
            <CardTitle className="text-base text-text-primary group-hover:text-primary transition-colors duration-150">
              {title}
            </CardTitle>
            {description ? (
              <p className="text-xs text-text-secondary mt-0.5">{description}</p>
            ) : null}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 pt-1">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant={skill.isPrimary ? 'accent' : 'outline'}
              className="text-xs font-mono py-1 px-2.5 transition-colors"
              title={skill.context}
            >
              <span>{skill.name}</span>
              {skill.context ? (
                <span className="text-[10px] text-text-muted ml-1 opacity-75">
                  ({skill.context})
                </span>
              ) : null}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
