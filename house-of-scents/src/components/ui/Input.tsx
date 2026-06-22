'use client';

import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-xs uppercase tracking-[0.15em] text-beige mb-2"
          >
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            'w-full bg-charcoal/60 border border-gold/20 px-4 py-3 text-ivory placeholder:text-beige/40 outline-none transition-colors duration-300 focus:border-gold',
            error && 'border-red-500/60',
            className
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
