'use client';

import { getBestSellers } from '@/lib/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function BestSellers() {
  const bestSellers = getBestSellers();
  return (
    <section className="bg-charcoal/30 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            Most Coveted
          </p>
          <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">
            Best Sellers
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </ScrollReveal>
      </div>

      <div className="flex gap-6 overflow-x-auto px-5 pb-4 lg:px-8 [scrollbar-width:thin]">
        {bestSellers.map((p) => (
          <div key={p.id} className="w-64 shrink-0 sm:w-72">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
