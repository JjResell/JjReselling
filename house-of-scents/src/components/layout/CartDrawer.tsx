'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem } = useCartStore();
  const total = useCartStore((s) => s.total());
  const shipping = total > 200 || total === 0 ? 0 : 15;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-gold/20 bg-background"
          >
            <div className="flex items-center justify-between border-b border-gold/15 px-6 py-5">
              <h2 className="font-serif text-xl text-ivory">Your Bag</h2>
              <button onClick={closeCart} aria-label="Close" className="text-ivory hover:text-gold">
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <ShoppingBag className="h-12 w-12 text-gold/40" />
                <p className="font-serif text-xl text-beige">Your bag is empty</p>
                <Link href="/shop" onClick={closeCart} className="btn-outline-gold mt-2">
                  Explore Collection
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="flex gap-4 border-b border-gold/10 py-5"
                    >
                      <div className="relative h-24 w-20 shrink-0 bg-charcoal">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-16 w-9 rounded-sm bg-gradient-to-b from-gold/40 to-bronze/20">
                            <div className="mx-auto mt-1.5 h-3 w-4 rounded-sm bg-gold/70" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-base text-ivory">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-bronze">{item.size}</p>
                        <p className="mt-1 text-sm text-gold">
                          {formatPrice(item.unitPrice)}
                        </p>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="inline-flex items-center border border-gold/20">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity - 1)
                              }
                              className="px-2 py-1 text-gold hover:bg-gold/10"
                              aria-label="Decrease"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-8 text-center text-sm text-ivory">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.size, item.quantity + 1)
                              }
                              className="px-2 py-1 text-gold hover:bg-gold/10"
                              aria-label="Increase"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id, item.size)}
                            className="text-bronze hover:text-red-400"
                            aria-label="Remove"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gold/15 px-6 py-5">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-beige">
                      <span>Subtotal</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                    <div className="flex justify-between text-beige">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                    </div>
                    <div className="flex justify-between border-t border-gold/15 pt-2 font-serif text-lg text-gold">
                      <span>Total</span>
                      <span>{formatPrice(total + shipping)}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    <Link href="/checkout" onClick={closeCart} className="btn-gold w-full">
                      Checkout
                    </Link>
                    <Link
                      href="/cart"
                      onClick={closeCart}
                      className="btn-outline-gold w-full"
                    >
                      View Bag
                    </Link>
                  </div>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
