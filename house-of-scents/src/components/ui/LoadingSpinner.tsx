'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        'h-10 w-10 rounded-full border-2 border-gold/20 border-t-gold',
        className
      )}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
    />
  );
}
