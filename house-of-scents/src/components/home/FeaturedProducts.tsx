'use client';

import Link from 'next/link';
import { getFeaturedProducts } from '@/lib/products';
import { ProductCard } from '@/components/product/ProductCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function FeaturedProducts() {
  const featured = getFeaturedProducts();
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <ScrollReveal className="mb-14 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          Curated Selection
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ivory md:text-5xl">
          Featured Fragrances
        </h2>
        <div className="gold-divider mx-auto mt-6 w-24" />
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link href="/shop" className="btn-outline-gold">
          View All Fragrances
        </Link>
      </div>
    </section>
  );
}
