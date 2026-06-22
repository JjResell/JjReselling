'use client';

import { motion } from 'framer-motion';

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-gold/15 pt-32 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.1),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-6 text-center"
      >
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
        )}
        <h1 className="mt-4 font-serif text-4xl text-ivory md:text-6xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl font-accent text-xl text-beige">
            {description}
          </p>
        )}
        <div className="gold-divider mx-auto mt-6 w-24" />
      </motion.div>
    </div>
  );
}
