'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, Package, Mail } from 'lucide-react';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

function Confirmation() {
  const params = useSearchParams();
  const order = params.get('order') ?? 'HOS-XXXX';

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.1),transparent_60%)]" />
      <ParticleBackground density={50} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-xl text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-full border border-gold/40"
        >
          <CheckCircle2 className="h-10 w-10 text-gold" />
        </motion.div>
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Order Confirmed</p>
        <h1 className="mt-4 font-serif text-4xl text-ivory md:text-5xl">
          Thank You for Your Order
        </h1>
        <p className="mt-5 font-accent text-xl text-beige">
          Your fragrance is being prepared with the utmost care. A confirmation has
          been sent to your email.
        </p>
        <div className="mt-8 inline-block border border-gold/30 bg-charcoal/40 px-8 py-4">
          <p className="text-xs uppercase tracking-[0.2em] text-bronze">
            Order Number
          </p>
          <p className="mt-1 font-serif text-2xl text-gold">{order}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 border border-gold/15 bg-charcoal/30 p-5 text-left">
            <Package className="h-6 w-6 shrink-0 text-gold" />
            <div>
              <p className="text-sm text-ivory">Free Express Shipping</p>
              <p className="text-xs text-bronze">Estimated 2-4 business days</p>
            </div>
          </div>
          <div className="flex items-center gap-3 border border-gold/15 bg-charcoal/30 p-5 text-left">
            <Mail className="h-6 w-6 shrink-0 text-gold" />
            <div>
              <p className="text-sm text-ivory">Order Updates</p>
              <p className="text-xs text-bronze">Tracking sent via email</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/shop" className="btn-gold">
            Continue Shopping
          </Link>
          <Link href="/account" className="btn-outline-gold">
            View My Account
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Confirmation />
    </Suspense>
  );
}
