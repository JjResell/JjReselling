'use client';

import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { products, categories, fragranceFamilies } from '@/lib/products';
import { ProductGrid } from '@/components/product/ProductGrid';
import { ProductFilters, FilterState } from '@/components/product/ProductFilters';
import { PageHeader } from '@/components/ui/PageHeader';

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'newest';

const priceBounds: [number, number] = [
  Math.min(...products.map((p) => p.price)),
  Math.max(...products.map((p) => p.price)),
];

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: null,
    family: null,
    maxPrice: priceBounds[1],
  });
  const [sort, setSort] = useState<SortKey>('featured');
  const [query, setQuery] = useState('');
  const [mobileFilters, setMobileFilters] = useState(false);

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (filters.category && p.category !== filters.category) return false;
      if (filters.family && p.family !== filters.family) return false;
      if (p.price > filters.maxPrice) return false;
      if (
        query &&
        !`${p.name} ${p.family} ${p.shortDescription}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
        return false;
      return true;
    });

    switch (sort) {
      case 'price-asc':
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        list = [...list].sort(
          (a, b) => Number(b.isNew) - Number(a.isNew)
        );
        break;
      default:
        list = [...list].sort(
          (a, b) => Number(b.featured) - Number(a.featured)
        );
    }
    return list;
  }, [filters, sort, query]);

  return (
    <>
      <PageHeader
        eyebrow="The Collection"
        title="Shop Fragrances"
        description="Twelve rare compositions, each an invitation to express the inexpressible."
      />

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        {/* Search + sort */}
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full items-center gap-3 border border-gold/20 bg-charcoal/40 px-4 py-3 sm:max-w-sm">
            <Search className="h-5 w-5 text-gold" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search fragrances..."
              className="w-full bg-transparent text-sm text-ivory placeholder:text-beige/40 outline-none"
            />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilters(true)}
              className="flex items-center gap-2 border border-gold/20 px-4 py-3 text-xs uppercase tracking-[0.15em] text-gold lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="border border-gold/20 bg-charcoal/40 px-4 py-3 text-sm text-ivory outline-none focus:border-gold"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
          <div className="hidden lg:block">
            <ProductFilters
              categories={categories}
              families={fragranceFamilies}
              filters={filters}
              onChange={setFilters}
              priceBounds={priceBounds}
            />
          </div>

          <div>
            <p className="mb-6 text-sm text-bronze">
              {filtered.length} {filtered.length === 1 ? 'fragrance' : 'fragrances'}
            </p>
            <ProductGrid products={filtered} />
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setMobileFilters(false)}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto border-r border-gold/20 bg-background p-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-serif text-xl text-ivory">Filters</h2>
              <button onClick={() => setMobileFilters(false)} className="text-ivory">
                <X className="h-5 w-5" />
              </button>
            </div>
            <ProductFilters
              categories={categories}
              families={fragranceFamilies}
              filters={filters}
              onChange={setFilters}
              priceBounds={priceBounds}
            />
          </div>
        </div>
      )}
    </>
  );
}
