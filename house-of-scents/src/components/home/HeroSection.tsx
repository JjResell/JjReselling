'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { luxuryEase } from '@/lib/animations';

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-charcoal to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12),transparent_60%)]" />
      <ParticleBackground density={70} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: luxuryEase }}
          className="mb-6 text-xs uppercase tracking-[0.5em] text-gold"
        >
          House of Scents · Brisbane
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: luxuryEase }}
          className="font-serif text-5xl leading-tight text-ivory md:text-7xl lg:text-8xl"
        >
          The Art of <span className="text-gradient-gold">Fragrance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: luxuryEase }}
          className="mx-auto mt-8 max-w-2xl font-accent text-xl leading-relaxed text-beige md:text-2xl"
        >
          Discover our curated collection of rare and exquisite perfumes,
          composed for those who wear elegance as a second skin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: luxuryEase }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/shop" className="btn-gold">
            Explore Collection
          </Link>
          <Link href="/about" className="btn-outline-gold">
            Our Story
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-bronze">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-10 w-px bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
