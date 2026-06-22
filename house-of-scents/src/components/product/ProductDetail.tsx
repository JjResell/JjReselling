'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Minus, Plus, Star, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { Product, SizeOption } from '@/types';
import { formatPrice, cn } from '@/lib/utils';
import { useWishlistStore } from '@/lib/store';
import { AddToCartButton } from './AddToCartButton';
import { FragranceNotes } from './FragranceNotes';
import { Product3DViewer } from './Product3DViewer';

const familyColor: Record<string, string> = {
  'Woody Oriental': '#8b5a2b',
  'Floral Chypre': '#d4af37',
  'Amber Woody': '#b5651d',
  'Floral Rose': '#c97b84',
  'Oud Woody': '#5c3a21',
  'Woody Musky': '#c9a84c',
  'White Floral': '#e8d5a3',
  'Aromatic Fougère': '#7a8450',
  'Powdery Floral': '#c4b7d4',
  'Warm Oriental': '#d39a4e',
  'Woody Fresh': '#6fa37a',
  'Musky Clean': '#dcd2c0',
};

export function ProductDetail({ product }: { product: Product }) {
  const [size, setSize] = useState<SizeOption>(product.sizes[0].size);
  const [quantity, setQuantity] = useState(1);
  const [view, setView] = useState<'image' | '3d'>('3d');

  const toggle = useWishlistStore((s) => s.toggle);
  const isWishlisted = useWishlistStore((s) => s.isWishlisted(product.id));

  const currentPrice =
    product.sizes.find((s) => s.size === size)?.price ?? product.price;

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      {/* Gallery / 3D */}
      <div>
        <div className="relative aspect-square border border-gold/15 bg-gradient-to-b from-charcoal to-background">
          {view === '3d' ? (
            <Product3DViewer
              color={familyColor[product.family] ?? '#c9a84c'}
              className="h-full w-full"
            />
          ) : (
            <div className="relative h-full w-full">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-0"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-64 w-36 rounded-md bg-gradient-to-b from-gold/40 via-bronze/30 to-background/20 shadow-[0_0_80px_rgba(201,168,76,0.25)]">
                  <div className="mx-auto mt-5 h-10 w-12 rounded-sm bg-gold/80" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => setView('3d')}
            className={cn(
              'flex-1 border py-2 text-xs uppercase tracking-[0.15em] transition-colors',
              view === '3d'
                ? 'border-gold text-gold'
                : 'border-gold/20 text-beige/60 hover:text-ivory'
            )}
          >
            3D View
          </button>
          <button
            onClick={() => setView('image')}
            className={cn(
              'flex-1 border py-2 text-xs uppercase tracking-[0.15em] transition-colors',
              view === 'image'
                ? 'border-gold text-gold'
                : 'border-gold/20 text-beige/60 hover:text-ivory'
            )}
          >
            Bottle
          </button>
        </div>
      </div>

      {/* Info */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-bronze">
            {product.category} · {product.family}
          </p>
          <h1 className="mt-2 font-serif text-4xl text-ivory md:text-5xl">
            {product.name}
          </h1>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    'h-4 w-4',
                    i < Math.round(product.rating)
                      ? 'fill-gold text-gold'
                      : 'text-gold/30'
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-beige">
              {product.rating} · {product.reviewCount} reviews
            </span>
          </div>

          <p className="mt-6 font-accent text-lg leading-relaxed text-beige">
            {product.shortDescription}
          </p>

          <p className="mt-8 font-accent text-4xl text-gold-light">
            {formatPrice(currentPrice)}
          </p>

          {/* Size */}
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-bronze">
              Size
            </p>
            <div className="flex gap-3">
              {product.sizes.map((s) => (
                <button
                  key={s.size}
                  onClick={() => setSize(s.size)}
                  className={cn(
                    'border px-6 py-3 text-sm transition-colors',
                    size === s.size
                      ? 'border-gold bg-gold/10 text-gold'
                      : 'border-gold/20 text-beige hover:border-gold/50'
                  )}
                >
                  {s.size}
                  <span className="ml-2 text-xs text-bronze">
                    {formatPrice(s.price)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-bronze">
              Quantity
            </p>
            <div className="inline-flex items-center border border-gold/20">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-gold hover:bg-gold/10"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center text-ivory">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-gold hover:bg-gold/10"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <AddToCartButton
              product={product}
              size={size}
              quantity={quantity}
              className="flex-1"
            />
            <button
              onClick={() => toggle(product)}
              className="inline-flex items-center justify-center gap-2 border border-gold/40 px-6 py-4 text-xs uppercase tracking-[0.15em] text-gold transition-colors hover:bg-gold/10"
            >
              <Heart
                className={cn('h-4 w-4', isWishlisted && 'fill-gold')}
              />
              {isWishlisted ? 'Saved' : 'Wishlist'}
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gold/15 pt-6 text-center">
            <Trust icon={<Truck className="h-5 w-5" />} label="Free AU Shipping" />
            <Trust icon={<ShieldCheck className="h-5 w-5" />} label="100% Authentic" />
            <Trust icon={<RefreshCw className="h-5 w-5" />} label="30-Day Returns" />
          </div>
        </motion.div>
      </div>

      {/* Description + Notes full width */}
      <div className="lg:col-span-2">
        <div className="gold-divider my-12" />
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl text-gold">The Composition</h2>
            <p className="mt-4 font-accent text-lg leading-relaxed text-beige">
              {product.description}
            </p>
          </div>
          <div>
            <h2 className="mb-6 font-serif text-2xl text-gold">
              Olfactory Pyramid
            </h2>
            <FragranceNotes notes={product.fragranceNotes} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Trust({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-gold">
      {icon}
      <span className="text-[0.65rem] uppercase tracking-[0.1em] text-beige">
        {label}
      </span>
    </div>
  );
}
