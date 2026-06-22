'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  LayoutDashboard,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
} from 'lucide-react';
import { useAuthStore, useWishlistStore } from '@/lib/store';
import { formatPrice } from '@/lib/utils';
import { PageHeader } from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/Button';

const tabs = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'orders', label: 'Orders', icon: Package },
  { key: 'wishlist', label: 'Wishlist', icon: Heart },
  { key: 'addresses', label: 'Addresses', icon: MapPin },
  { key: 'settings', label: 'Settings', icon: Settings },
];

const mockOrders = [
  { id: 'HOS-A1B2-C3D4', date: '12 May 2026', total: 638, status: 'Delivered', items: 2 },
  { id: 'HOS-E5F6-G7H8', date: '28 Apr 2026', total: 349, status: 'Delivered', items: 1 },
];

function AccountContent() {
  const router = useRouter();
  const params = useSearchParams();
  const initial = params.get('tab') ?? 'dashboard';
  const [tab, setTab] = useState(initial);

  const { user, isLoggedIn, logout } = useAuthStore();
  const wishlist = useWishlistStore((s) => s.items);

  if (!isLoggedIn) {
    return (
      <>
        <PageHeader eyebrow="Account" title="My Account" />
        <div className="mx-auto max-w-md px-6 py-24 text-center">
          <p className="font-accent text-xl text-beige">
            Please sign in to access your account.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="/account/login" className="btn-gold">Sign In</Link>
            <Link href="/account/register" className="btn-outline-gold">Register</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader eyebrow="Account" title={`Welcome, ${user?.name}`} />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-1">
            {tabs.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    tab === t.key
                      ? 'bg-gold/10 text-gold'
                      : 'text-beige hover:text-ivory'
                  }`}
                >
                  <Icon className="h-4 w-4" /> {t.label}
                </button>
              );
            })}
            <button
              onClick={() => {
                logout();
                router.push('/');
              }}
              className="flex w-full items-center gap-3 px-4 py-3 text-sm text-bronze hover:text-red-400"
            >
              <LogOut className="h-4 w-4" /> Sign Out
            </button>
          </aside>

          <div className="min-h-[400px]">
            {tab === 'dashboard' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <Stat label="Total Orders" value={String(mockOrders.length)} />
                  <Stat label="Wishlist Items" value={String(wishlist.length)} />
                  <Stat label="Loyalty Tier" value="Gold" />
                </div>
                <div>
                  <h3 className="mb-4 font-serif text-xl text-ivory">Recent Orders</h3>
                  <OrdersTable />
                </div>
              </div>
            )}

            {tab === 'orders' && (
              <div>
                <h3 className="mb-4 font-serif text-xl text-ivory">Order History</h3>
                <OrdersTable />
              </div>
            )}

            {tab === 'wishlist' && (
              <div>
                <h3 className="mb-4 font-serif text-xl text-ivory">Your Wishlist</h3>
                {wishlist.length === 0 ? (
                  <p className="text-beige">
                    Your wishlist is empty.{' '}
                    <Link href="/shop" className="text-gold hover:underline">
                      Explore fragrances
                    </Link>
                    .
                  </p>
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {wishlist.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.slug}`}
                        className="flex items-center justify-between border border-gold/15 bg-charcoal/30 p-4 hover:border-gold/40"
                      >
                        <div>
                          <p className="font-serif text-ivory">{p.name}</p>
                          <p className="text-xs text-bronze">{p.family}</p>
                        </div>
                        <span className="text-gold">{formatPrice(p.price)}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            {tab === 'addresses' && (
              <div>
                <h3 className="mb-4 font-serif text-xl text-ivory">Saved Addresses</h3>
                <div className="border border-gold/15 bg-charcoal/30 p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">Default</p>
                  <p className="mt-2 text-ivory">{user?.name}</p>
                  <p className="text-beige">42 James Street, Fortitude Valley</p>
                  <p className="text-beige">Brisbane QLD 4006, Australia</p>
                </div>
                <Button variant="outline" className="mt-4">Add New Address</Button>
              </div>
            )}

            {tab === 'settings' && (
              <div>
                <h3 className="mb-4 font-serif text-xl text-ivory">Account Settings</h3>
                <div className="space-y-3 border border-gold/15 bg-charcoal/30 p-6">
                  <Detail label="Name" value={user?.name ?? ''} />
                  <Detail label="Email" value={user?.email ?? ''} />
                  <Detail label="Member Since" value="2026" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function OrdersTable() {
  return (
    <div className="overflow-hidden border border-gold/15">
      {mockOrders.map((o, i) => (
        <div
          key={o.id}
          className={`grid grid-cols-2 gap-2 p-4 text-sm sm:grid-cols-5 ${
            i % 2 ? 'bg-charcoal/20' : 'bg-charcoal/40'
          }`}
        >
          <span className="text-gold">{o.id}</span>
          <span className="text-beige">{o.date}</span>
          <span className="text-beige">{o.items} item(s)</span>
          <span className="text-beige">{formatPrice(o.total)}</span>
          <span className="text-green-400">{o.status}</span>
        </div>
      ))}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gold/15 bg-charcoal/30 p-6 text-center">
      <p className="font-serif text-3xl text-gold">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-bronze">{label}</p>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-gold/10 pb-2">
      <span className="text-bronze">{label}</span>
      <span className="text-ivory">{value}</span>
    </div>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <AccountContent />
    </Suspense>
  );
}
