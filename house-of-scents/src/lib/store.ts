'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem, Product, SizeOption, User } from '@/types';

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, size: SizeOption, quantity?: number) => void;
  removeItem: (productId: string, size: SizeOption) => void;
  updateQuantity: (productId: string, size: SizeOption, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  total: () => number;
  itemCount: () => number;
}

function priceFor(product: Product, size: SizeOption): number {
  return product.sizes.find((s) => s.size === size)?.price ?? product.price;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product, size, quantity = 1) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.id === product.id && i.size === size
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id && i.size === size
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
              isOpen: true,
            };
          }
          return {
            items: [
              ...state.items,
              { product, size, quantity, unitPrice: priceFor(product, size) },
            ],
            isOpen: true,
          };
        }),
      removeItem: (productId, size) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.product.id === productId && i.size === size)
          ),
        })),
      updateQuantity: (productId, size, quantity) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.product.id === productId && i.size === size
                ? { ...i, quantity: Math.max(1, quantity) }
                : i
            )
            .filter((i) => i.quantity > 0),
        })),
      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      total: () =>
        get().items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),
      itemCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: 'hos-cart' }
  )
);

interface WishlistState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggle: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) =>
        set((state) =>
          state.items.some((i) => i.id === product.id)
            ? state
            : { items: [...state.items, product] }
        ),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.id !== productId),
        })),
      toggle: (product) =>
        set((state) =>
          state.items.some((i) => i.id === product.id)
            ? { items: state.items.filter((i) => i.id !== product.id) }
            : { items: [...state.items, product] }
        ),
      isWishlisted: (productId) => get().items.some((i) => i.id === productId),
    }),
    { name: 'hos-wishlist' }
  )
);

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  login: (email: string, _password: string) => void;
  register: (name: string, email: string, _password: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      login: (email) =>
        set({
          user: {
            id: 'u_' + Math.random().toString(36).slice(2, 8),
            name: email.split('@')[0],
            email,
          },
          isLoggedIn: true,
        }),
      register: (name, email) =>
        set({
          user: {
            id: 'u_' + Math.random().toString(36).slice(2, 8),
            name,
            email,
          },
          isLoggedIn: true,
        }),
      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    { name: 'hos-auth' }
  )
);
