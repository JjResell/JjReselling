'use client';

import { Product } from '@/types';
import { ProductCard } from './ProductCard';

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="font-serif text-2xl text-beige">No fragrances found</p>
        <p className="mt-2 text-sm text-bronze">
          Try adjusting your filters or search.
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
