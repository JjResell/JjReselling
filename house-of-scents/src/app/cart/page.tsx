'use client';

import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import { PageHeader } from '@/components/ui/PageHeader';

export default function CartPage() {
  const { items, updateQuantity, removeItem } = useCartStore();
  const total = useCartStore((s) => s.total());
  const shipping = total > 200 || total === 0 ? 0 : 15;

  if (items.length === 0) {
    return (
      <>
        <PageHeader eyebrow="Your Selection" title="Shopping Bag" />
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 px-6 py-28 text-center">
          <ShoppingBag className="h-16 w-16 text-gold/40" />
          <h2 className="font-serif text-3xl text-ivory">Your bag is empty</h2>
          <p className="font-accent text-lg text-beige">
            Discover our collection of rare and exquisite fragrances.
          </p>
          <Link href="/shop" className="btn-gold mt-2">
            Explore Collection
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Your Selection" title="Shopping Bag" />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-5 border border-gold/15 bg-charcoal/30 p-5"
              >
                <div className="relative h-32 w-24 shrink-0 bg-charcoal">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-11 rounded-sm bg-gradient-to-b from-gold/40 to-bronze/20">
                      <div className="mx-auto mt-2 h-4 w-5 rounded-sm bg-gold/70" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="font-serif text-xl text-ivory hover:text-gold"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs uppercase tracking-[0.15em] text-bronze">
                        {item.product.family} · {item.size}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.size)}
                      className="text-bronze hover:text-red-400"
                      aria-label="Remove"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="inline-flex items-center border border-gold/20">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity - 1)
                        }
                        className="px-3 py-2 text-gold hover:bg-gold/10"
                        aria-label="Decrease"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-ivory">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity + 1)
                        }
                        className="px-3 py-2 text-gold hover:bg-gold/10"
                        aria-label="Increase"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-accent text-xl text-gold-light">
                      {formatPrice(item.unitPrice * item.quantity)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="pt-6">
              <Link href="/shop" className="text-sm text-gold hover:text-gold-light">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          <aside className="h-fit border border-gold/20 bg-charcoal/40 p-7">
            <h2 className="font-serif text-2xl text-ivory">Order Summary</h2>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-beige">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-beige">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-bronze">
                  Free shipping on orders over {formatPrice(200)}.
                </p>
              )}
              <div className="flex justify-between border-t border-gold/15 pt-4 font-serif text-xl text-gold">
                <span>Total</span>
                <span>{formatPrice(total + shipping)}</span>
              </div>
            </div>
            <Link href="/checkout" className="btn-gold mt-7 w-full">
              Proceed to Checkout
            </Link>
            <div className="mt-5 flex flex-wrap justify-center gap-2 text-[0.6rem] uppercase tracking-[0.1em] text-bronze">
              <span>Visa</span>·<span>Mastercard</span>·<span>Amex</span>·
              <span>PayPal</span>·<span>Apple Pay</span>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
