import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'dark' | 'new';
  className?: string;
}

export function Badge({ children, variant = 'gold', className }: BadgeProps) {
  const variants = {
    gold: 'bg-gold text-background',
    dark: 'bg-background/80 text-gold border border-gold/40',
    new: 'bg-ivory text-background',
  };
  return (
    <span
      className={cn(
        'inline-block px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.15em]',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
