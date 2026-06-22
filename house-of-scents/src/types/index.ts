export interface FragranceNotes {
  top: string[];
  middle: string[];
  base: string[];
}

export type SizeOption = '50ml' | '100ml';

export interface ProductSize {
  size: SizeOption;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  description: string;
  images: string[];
  fragranceNotes: FragranceNotes;
  category: string;
  family: string;
  inStock: boolean;
  featured: boolean;
  bestSeller: boolean;
  isNew?: boolean;
  sizes: ProductSize[];
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  size: SizeOption;
  quantity: number;
  unitPrice: number;
}

export interface WishlistItem {
  product: Product;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
}
