'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { slideInLeft, slideInRight } from '@/lib/animations';

export function BrandStory() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(139,115,85,0.15),transparent_55%)]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden border border-gold/20">
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-background to-charcoal" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-44 rounded-md bg-gradient-to-b from-gold/30 via-bronze/20 to-background/10 shadow-[0_0_100px_rgba(201,168,76,0.25)] animate-float">
                <div className="mx-auto mt-6 h-12 w-16 rounded-sm bg-gold/70" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="font-accent text-2xl italic text-gold-light">
                &ldquo;Scent is the most poetic form of memory.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Heritage</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl">
            Composed with Intention,
            <br />
            Worn with Distinction
          </h2>
          <p className="mt-6 font-accent text-lg leading-relaxed text-beige">
            Born in the heart of Brisbane, House of Scents was founded on a single
            belief: that fragrance is an art form deserving of reverence. We travel
            the world to source the rarest raw materials — Grasse jasmine,
            Cambodian oud, Florentine orris — and entrust them to master perfumers
            who compose each scent as a couturier drapes silk.
          </p>
          <p className="mt-4 font-accent text-lg leading-relaxed text-beige">
            Every bottle is a quiet ceremony, a testament to patience, and an
            invitation to express the inexpressible.
          </p>
          <ScrollReveal className="mt-8">
            <Link href="/about" className="btn-outline-gold">
              Discover Our Story
            </Link>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}
