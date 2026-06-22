'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, User, ShoppingBag, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCartStore, useWishlistStore } from '@/lib/store';

const links = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const openCart = useCartStore((s) => s.openCart);
  const itemCount = useCartStore((s) => s.itemCount());
  const wishlistCount = useWishlistStore((s) => s.items.length);

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || mobileOpen;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          solid
            ? 'bg-background/90 backdrop-blur-md border-b border-gold/15'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button
            className="lg:hidden text-ivory"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'text-xs uppercase tracking-[0.2em] transition-colors',
                  pathname.startsWith(l.href)
                    ? 'text-gold'
                    : 'text-ivory hover:text-gold'
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-center"
          >
            <span className="block font-serif text-xl tracking-[0.1em] text-ivory md:text-2xl">
              House of Scents
            </span>
            <span className="block text-[0.55rem] uppercase tracking-[0.4em] text-gold">
              Brisbane
            </span>
          </Link>

          <div className="flex items-center gap-4 text-ivory md:gap-5">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen((o) => !o)}
              className="hover:text-gold transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/account?tab=wishlist"
              aria-label="Wishlist"
              className="relative hidden hover:text-gold transition-colors sm:block"
            >
              <Heart className="h-5 w-5" />
              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[0.6rem] font-bold text-background">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              href="/account"
              aria-label="Account"
              className="hover:text-gold transition-colors"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              aria-label="Cart"
              onClick={openCart}
              className="relative hover:text-gold transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-gold text-[0.6rem] font-bold text-background">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-gold/15 bg-background/95"
            >
              <form
                action="/shop"
                className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-5"
              >
                <Search className="h-5 w-5 text-gold" />
                <input
                  name="q"
                  autoFocus
                  placeholder="Search fragrances..."
                  className="w-full bg-transparent text-ivory placeholder:text-beige/40 outline-none"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background lg:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <Link
                  href={l.href}
                  className="font-serif text-3xl text-ivory hover:text-gold"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/account"
              className="font-serif text-3xl text-ivory hover:text-gold"
            >
              Account
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
