'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice, cn } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { useCartStore, useWishlistStore } from '@/lib/store';

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const toggle = useWishlistStore((s) => s.toggle);
  const isWishlisted = useWishlistStore((s) => s.isWishlisted(product.id));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col"
    >
      <div className="relative overflow-hidden bg-charcoal border border-gold/10 transition-colors duration-500 group-hover:border-gold/50 group-hover:shadow-[0_0_40px_rgba(201,168,76,0.15)]">
        {/* Badges */}
        <div className="absolute left-3 top-3 z-10 flex flex-col gap-2">
          {product.isNew && <Badge variant="new">New</Badge>}
          {product.bestSeller && <Badge variant="gold">Bestseller</Badge>}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggle(product);
          }}
          aria-label="Toggle wishlist"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center bg-background/60 backdrop-blur transition-colors hover:bg-gold/20"
        >
          <Heart
            className={cn(
              'h-4 w-4 transition-colors',
              isWishlisted ? 'fill-gold text-gold' : 'text-ivory'
            )}
          />
        </button>

        <Link href={`/products/${product.slug}`} className="block">
          <div className="relative aspect-[3/4] w-full bg-gradient-to-b from-charcoal to-background">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover opacity-0 transition-transform duration-700 group-hover:scale-105"
            />
            {/* decorative bottle silhouette */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-44 w-24 rounded-md bg-gradient-to-b from-gold/30 via-bronze/20 to-background/10 shadow-[0_0_60px_rgba(201,168,76,0.2)]">
                <div className="mx-auto mt-3 h-7 w-9 rounded-sm bg-gold/70" />
              </div>
            </div>
          </div>
        </Link>

        {/* Quick add */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-background/85 backdrop-blur px-4 py-3 transition-transform duration-500 group-hover:translate-y-0">
          <button
            onClick={() => addItem(product, product.sizes[0].size)}
            className="flex w-full items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] text-gold hover:text-gold-light"
          >
            <ShoppingBag className="h-4 w-4" /> Quick Add
          </button>
        </div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-bronze">
          {product.family}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-serif text-lg text-ivory transition-colors hover:text-gold">
            {product.name}
          </h3>
        </Link>
        <div className="mt-1 flex items-center justify-center gap-1 text-gold">
          <Star className="h-3 w-3 fill-gold" />
          <span className="text-xs text-beige">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <p className="mt-2 font-accent text-xl text-gold-light">
          {formatPrice(product.price)}
        </p>
      </div>
    </motion.div>
  );
}
