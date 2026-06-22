'use client';

import { cn } from '@/lib/utils';

export interface FilterState {
  category: string | null;
  family: string | null;
  maxPrice: number;
}

interface ProductFiltersProps {
  categories: string[];
  families: string[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  priceBounds: [number, number];
}

export function ProductFilters({
  categories,
  families,
  filters,
  onChange,
  priceBounds,
}: ProductFiltersProps) {
  return (
    <aside className="space-y-10">
      <FilterGroup title="Category">
        <FilterButton
          active={filters.category === null}
          onClick={() => onChange({ ...filters, category: null })}
        >
          All
        </FilterButton>
        {categories.map((c) => (
          <FilterButton
            key={c}
            active={filters.category === c}
            onClick={() => onChange({ ...filters, category: c })}
          >
            {c}
          </FilterButton>
        ))}
      </FilterGroup>

      <FilterGroup title="Fragrance Family">
        <FilterButton
          active={filters.family === null}
          onClick={() => onChange({ ...filters, family: null })}
        >
          All Families
        </FilterButton>
        {families.map((f) => (
          <FilterButton
            key={f}
            active={filters.family === f}
            onClick={() => onChange({ ...filters, family: f })}
          >
            {f}
          </FilterButton>
        ))}
      </FilterGroup>

      <FilterGroup title="Max Price">
        <div className="px-1">
          <input
            type="range"
            min={priceBounds[0]}
            max={priceBounds[1]}
            value={filters.maxPrice}
            onChange={(e) =>
              onChange({ ...filters, maxPrice: Number(e.target.value) })
            }
            className="w-full accent-[#c9a84c]"
          />
          <div className="mt-2 flex justify-between text-xs text-beige">
            <span>${priceBounds[0]}</span>
            <span className="text-gold">Up to ${filters.maxPrice}</span>
          </div>
        </div>
      </FilterGroup>
    </aside>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-4 font-serif text-sm uppercase tracking-[0.2em] text-gold">
        {title}
      </h3>
      <div className="flex flex-col items-start gap-2">{children}</div>
    </div>
  );
}

function FilterButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'text-left text-sm transition-colors',
        active ? 'text-gold' : 'text-beige/70 hover:text-ivory'
      )}
    >
      {children}
    </button>
  );
}
