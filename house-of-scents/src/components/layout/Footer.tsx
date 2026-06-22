'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Camera, Globe, Send } from 'lucide-react';

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Fragrances', href: '/shop' },
      { label: 'For Her', href: '/shop' },
      { label: 'For Him', href: '/shop' },
      { label: 'Unisex', href: '/shop' },
    ],
  },
  {
    title: 'House',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Account', href: '/account' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Care',
    links: [
      { label: 'Shipping', href: '/shipping' },
      { label: 'Returns', href: '/returns' },
      { label: 'Policies', href: '/policies' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-gold/15 bg-charcoal/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-ivory">House of Scents</h2>
            <p className="text-[0.55rem] uppercase tracking-[0.4em] text-gold">
              Brisbane
            </p>
            <p className="mt-4 max-w-sm font-accent text-lg leading-relaxed text-beige">
              A curated house of rare and exquisite fragrances, hand-selected for
              the discerning few. Crafted with passion in Brisbane, Australia.
            </p>
            <div className="mt-6 flex gap-4">
              {[Camera, Globe, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center border border-gold/30 text-gold transition-colors hover:bg-gold hover:text-background"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">
                {col.title}
              </h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-beige transition-colors hover:text-ivory"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-gold/15 pt-10">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="font-serif text-lg text-ivory">
                Join the Inner Circle
              </h3>
              <p className="text-sm text-beige">
                Receive private previews, rare arrivals and exclusive offers.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full border border-gold/30 bg-background px-4 py-3 text-sm text-ivory placeholder:text-beige/40 outline-none focus:border-gold"
              />
              <button type="submit" className="btn-gold whitespace-nowrap">
                {done ? 'Thank You' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold/15 pt-8 text-xs text-bronze sm:flex-row">
          <p>© {new Date().getFullYear()} House of Scents Brisbane. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/policies" className="hover:text-gold">Privacy</Link>
            <Link href="/policies" className="hover:text-gold">Terms</Link>
            <Link href="/returns" className="hover:text-gold">Returns</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
