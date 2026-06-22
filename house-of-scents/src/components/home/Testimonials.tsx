'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/products';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <ScrollReveal className="mb-14 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Testimonials</p>
        <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">
          Words from Our Patrons
        </h2>
        <div className="gold-divider mx-auto mt-6 w-24" />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="relative border border-gold/15 bg-charcoal/40 p-8"
          >
            <Quote className="h-8 w-8 text-gold/40" />
            <div className="mt-4 flex gap-1">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="mt-4 font-accent text-lg leading-relaxed text-beige">
              {t.quote}
            </p>
            <div className="mt-6 border-t border-gold/15 pt-4">
              <p className="font-serif text-ivory">{t.name}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-bronze">
                {t.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
