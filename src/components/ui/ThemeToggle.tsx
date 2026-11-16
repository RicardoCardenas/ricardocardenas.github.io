import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { Button } from './Button';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { t } = useTranslation('common');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label={t('theme.toggleAria')}
          className="relative text-text-secondary hover:text-text-primary"
        >
          {resolvedTheme === 'dark' ? (
            <Moon className="h-4 w-4 text-primary transition-transform duration-200" />
          ) : (
            <Sun className="h-4 w-4 text-primary transition-transform duration-200" />
          )}
        </Button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="z-50 min-w-[140px] rounded-lg border border-border bg-surface-elevated p-1 shadow-md animate-in fade-in-0 zoom-in-95"
        >
          <DropdownMenu.Item
            onClick={() => setTheme('light')}
            className="flex items-center justify-between px-2.5 py-1.5 text-xs text-text-primary rounded-md cursor-pointer hover:bg-surface focus:bg-surface focus:outline-none"
          >
            <span className="flex items-center gap-2">
              <Sun className="h-3.5 w-3.5 text-text-muted" />
              {t('theme.light')}
            </span>
            {theme === 'light' ? <Check className="h-3.5 w-3.5 text-primary" /> : null}
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={() => setTheme('dark')}
            className="flex items-center justify-between px-2.5 py-1.5 text-xs text-text-primary rounded-md cursor-pointer hover:bg-surface focus:bg-surface focus:outline-none"
          >
            <span className="flex items-center gap-2">
              <Moon className="h-3.5 w-3.5 text-text-muted" />
              {t('theme.dark')}
            </span>
            {theme === 'dark' ? <Check className="h-3.5 w-3.5 text-primary" /> : null}
          </DropdownMenu.Item>

          <DropdownMenu.Item
            onClick={() => setTheme('system')}
            className="flex items-center justify-between px-2.5 py-1.5 text-xs text-text-primary rounded-md cursor-pointer hover:bg-surface focus:bg-surface focus:outline-none"
          >
            <span className="flex items-center gap-2">
              <Laptop className="h-3.5 w-3.5 text-text-muted" />
              {t('theme.system')}
            </span>
            {theme === 'system' ? <Check className="h-3.5 w-3.5 text-primary" /> : null}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
