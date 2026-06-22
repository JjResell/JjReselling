'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <section className="relative overflow-hidden border-y border-gold/15 py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1),transparent_60%)]" />
      <ParticleBackground density={40} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-2xl px-6 text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          The Inner Circle
        </p>
        <h2 className="mt-4 font-serif text-4xl text-ivory md:text-5xl">
          Indulge in the Extraordinary
        </h2>
        <p className="mt-4 font-accent text-xl text-beige">
          Subscribe for private previews of rare arrivals, perfumer stories and
          exclusive offers reserved for our patrons.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setDone(true);
          }}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full border border-gold/30 bg-background px-4 py-3.5 text-sm text-ivory placeholder:text-beige/40 outline-none focus:border-gold"
          />
          <button type="submit" className="btn-gold whitespace-nowrap">
            {done ? 'Welcome' : 'Subscribe'}
          </button>
        </form>
        {done && (
          <p className="mt-4 text-sm text-gold">
            Thank you for joining the House of Scents Inner Circle.
          </p>
        )}
      </motion.div>
    </section>
  );
}
