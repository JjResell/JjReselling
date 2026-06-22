'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'gold', size = 'md', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-medium uppercase tracking-[0.08em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
    const variants = {
      gold:
        'bg-gradient-to-br from-gold to-gold-light text-background hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 font-semibold',
      outline:
        'border border-gold text-gold hover:bg-gold hover:text-background',
      ghost: 'text-ivory hover:text-gold',
    };
    const sizes = {
      sm: 'text-[0.65rem] px-4 py-2',
      md: 'text-xs px-7 py-3.5',
      lg: 'text-sm px-10 py-4',
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
