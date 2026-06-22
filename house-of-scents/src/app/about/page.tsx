'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Gem, Leaf, Sparkles } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const values = [
  {
    icon: Gem,
    title: 'Rarity',
    text: 'We source the finest and rarest raw materials from across the globe, reserving each composition for those who seek the exceptional.',
  },
  {
    icon: Leaf,
    title: 'Craft',
    text: 'Every fragrance is composed by master perfumers who treat scent as a fine art — patient, precise and uncompromising.',
  },
  {
    icon: Sparkles,
    title: 'Distinction',
    text: 'We believe a fragrance should be as singular as the person who wears it. Ours are made to be remembered.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Heritage"
        title="The House of Scents"
        description="A Brisbane atelier devoted to the art, science and poetry of fragrance."
      />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <ScrollReveal>
          <p className="font-accent text-2xl leading-relaxed text-beige first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:text-gold">
            House of Scents was born from a singular conviction — that perfume is
            not an accessory, but an art form. Founded in the heart of Brisbane, our
            atelier began as a quiet pursuit: to seek out the world&apos;s most
            extraordinary fragrances and present them with the reverence they
            deserve.
          </p>
          <p className="mt-6 font-accent text-xl leading-relaxed text-beige">
            From the jasmine fields of Grasse to the agarwood forests of Southeast
            Asia, we travel in search of beauty. Each composition in our collection
            is chosen not for trend, but for its soul — its ability to move, to
            evoke, and to linger long after the moment has passed.
          </p>
        </ScrollReveal>
      </section>

      <section className="border-y border-gold/15 bg-charcoal/30 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Our Mission</p>
            <h2 className="mt-4 font-serif text-3xl leading-snug text-ivory md:text-4xl">
              To compose moments of beauty that transcend the ordinary — one
              fragrance, one memory, one soul at a time.
            </h2>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <ScrollReveal className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">What We Value</p>
          <h2 className="mt-3 font-serif text-4xl text-ivory">Our Three Pillars</h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-gold/15 bg-charcoal/30 p-8 text-center"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center border border-gold/30 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-ivory">{v.title}</h3>
                <p className="mt-3 font-accent text-lg leading-relaxed text-beige">
                  {v.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl text-ivory">Begin Your Journey</h2>
          <p className="mt-4 font-accent text-xl text-beige">
            Discover the fragrance that speaks for you.
          </p>
          <Link href="/shop" className="btn-gold mt-8">
            Explore the Collection
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
