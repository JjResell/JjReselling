import type { Product, Testimonial } from '@/types';

function sizes(base: number) {
  return [
    { size: '50ml' as const, price: base },
    { size: '100ml' as const, price: Math.round(base * 1.55) },
  ];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Noir Élégance',
    slug: 'noir-elegance',
    price: 289,
    shortDescription: 'A woody oriental of midnight allure and quiet power.',
    description:
      'Noir Élégance is an ode to the sophistication of nightfall. Smoky woods entwine with warm spices and a velvet base of amber and leather, creating a fragrance that lingers like a whispered secret. Composed in the grand tradition of French perfumery, it is at once commanding and intimate.',
    images: ['/products/product-1.jpg', '/products/product-1-alt.jpg'],
    fragranceNotes: {
      top: ['Bergamot', 'Black Pepper', 'Cardamom'],
      middle: ['Cedarwood', 'Patchouli', 'Incense'],
      base: ['Amber', 'Leather', 'Vanilla'],
    },
    category: 'For Him',
    family: 'Woody Oriental',
    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    sizes: sizes(289),
    rating: 4.8,
    reviewCount: 214,
  },
  {
    id: '2',
    name: "Lumière d'Or",
    slug: 'lumiere-dor',
    price: 349,
    shortDescription: 'A radiant floral chypre crowned with golden light.',
    description:
      "Lumière d'Or captures the first light of dawn upon a Mediterranean garden. Luminous florals dance over a mossy chypre foundation, gilded with citrus and a breath of golden amber. A fragrance of effortless luxury and timeless femininity.",
    images: ['/products/product-2.jpg', '/products/product-2-alt.jpg'],
    fragranceNotes: {
      top: ['Mandarin', 'Pink Pepper', 'Neroli'],
      middle: ['Jasmine', 'Rose', 'Orris'],
      base: ['Oakmoss', 'Amber', 'Musk'],
    },
    category: 'For Her',
    family: 'Floral Chypre',
    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: true,
    sizes: sizes(349),
    rating: 4.9,
    reviewCount: 312,
  },
  {
    id: '3',
    name: 'Velours Noir',
    slug: 'velours-noir',
    price: 319,
    shortDescription: 'Amber and woods wrapped in a veil of black velvet.',
    description:
      'Velours Noir is sensuality made scent. Resinous amber melts into precious woods and a hint of dark fruit, draped in smoke and spice. A fragrance designed for those who move through the world with quiet, magnetic confidence.',
    images: ['/products/product-3.jpg', '/products/product-3-alt.jpg'],
    fragranceNotes: {
      top: ['Saffron', 'Plum', 'Cinnamon'],
      middle: ['Rose', 'Guaiac Wood', 'Olibanum'],
      base: ['Amber', 'Sandalwood', 'Tonka Bean'],
    },
    category: 'Unisex',
    family: 'Amber Woody',
    inStock: true,
    featured: true,
    bestSeller: false,
    isNew: false,
    sizes: sizes(319),
    rating: 4.7,
    reviewCount: 168,
  },
  {
    id: '4',
    name: 'Rose Imperiale',
    slug: 'rose-imperiale',
    price: 299,
    shortDescription: 'The empress of roses, regal and intoxicating.',
    description:
      'Rose Imperiale is a sovereign bouquet of a thousand petals. Damascena and Centifolia roses are layered with honeyed nectar and a whisper of spice, settling into a soft musky drydown. An imperial tribute to the eternal queen of flowers.',
    images: ['/products/product-4.jpg', '/products/product-4-alt.jpg'],
    fragranceNotes: {
      top: ['Lychee', 'Bergamot', 'Pink Pepper'],
      middle: ['Damask Rose', 'Peony', 'Honey'],
      base: ['White Musk', 'Cedar', 'Amber'],
    },
    category: 'For Her',
    family: 'Floral Rose',
    inStock: true,
    featured: false,
    bestSeller: true,
    isNew: false,
    sizes: sizes(299),
    rating: 4.8,
    reviewCount: 276,
  },
  {
    id: '5',
    name: 'Oud Mystique',
    slug: 'oud-mystique',
    price: 389,
    shortDescription: 'Rare oud wood, mysterious and profoundly deep.',
    description:
      'Oud Mystique journeys to the heart of the Orient. Precious agarwood is enriched with rose, saffron and resins, an opulent composition of remarkable depth and tenacity. A fragrance for the connoisseur who seeks the extraordinary.',
    images: ['/products/product-5.jpg', '/products/product-5-alt.jpg'],
    fragranceNotes: {
      top: ['Saffron', 'Bergamot', 'Raspberry'],
      middle: ['Agarwood (Oud)', 'Rose', 'Patchouli'],
      base: ['Sandalwood', 'Amber', 'Musk'],
    },
    category: 'Unisex',
    family: 'Oud Woody',
    inStock: true,
    featured: true,
    bestSeller: true,
    isNew: false,
    sizes: sizes(389),
    rating: 4.9,
    reviewCount: 198,
  },
  {
    id: '6',
    name: 'Santal Blanc',
    slug: 'santal-blanc',
    price: 269,
    shortDescription: 'Creamy sandalwood wrapped in soft white musk.',
    description:
      'Santal Blanc is a meditation in serenity. Smooth sandalwood is brushed with iris and warm milky notes, finished with a clean musk that lingers close to the skin. Understated luxury for everyday refinement.',
    images: ['/products/product-6.jpg', '/products/product-6-alt.jpg'],
    fragranceNotes: {
      top: ['Cardamom', 'Violet Leaf', 'Bergamot'],
      middle: ['Sandalwood', 'Iris', 'Cashmere Wood'],
      base: ['White Musk', 'Vanilla', 'Cedar'],
    },
    category: 'Unisex',
    family: 'Woody Musky',
    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: true,
    sizes: sizes(269),
    rating: 4.6,
    reviewCount: 142,
  },
  {
    id: '7',
    name: 'Jasmin Précieux',
    slug: 'jasmin-precieux',
    price: 279,
    shortDescription: 'A precious white floral of luminous purity.',
    description:
      'Jasmin Précieux unveils the most precious jasmine at the peak of its bloom. Indolic, narcotic and utterly luminous, softened by orange blossom and a creamy sandalwood base. An intoxicating ode to the night-blooming flower.',
    images: ['/products/product-7.jpg', '/products/product-7-alt.jpg'],
    fragranceNotes: {
      top: ['Orange Blossom', 'Green Notes', 'Bergamot'],
      middle: ['Jasmine Sambac', 'Tuberose', 'Ylang-Ylang'],
      base: ['Sandalwood', 'Musk', 'Benzoin'],
    },
    category: 'For Her',
    family: 'White Floral',
    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    sizes: sizes(279),
    rating: 4.7,
    reviewCount: 156,
  },
  {
    id: '8',
    name: 'Tabac Royal',
    slug: 'tabac-royal',
    price: 359,
    shortDescription: 'An aromatic fougère of refined, smoky distinction.',
    description:
      'Tabac Royal is the scent of a gentlemanʼs library at dusk. Aromatic herbs and lavender meet sweet tobacco leaf, cured with honey and warmed by tonka and woods. A timeless fougère reimagined with regal grandeur.',
    images: ['/products/product-8.jpg', '/products/product-8-alt.jpg'],
    fragranceNotes: {
      top: ['Lavender', 'Clary Sage', 'Bergamot'],
      middle: ['Tobacco Leaf', 'Cinnamon', 'Geranium'],
      base: ['Tonka Bean', 'Vanilla', 'Oakmoss'],
    },
    category: 'For Him',
    family: 'Aromatic Fougère',
    inStock: true,
    featured: false,
    bestSeller: true,
    isNew: false,
    sizes: sizes(359),
    rating: 4.8,
    reviewCount: 189,
  },
  {
    id: '9',
    name: 'Iris Céleste',
    slug: 'iris-celeste',
    price: 339,
    shortDescription: 'A powdery floral as ethereal as the heavens.',
    description:
      'Iris Céleste elevates the noble iris to celestial heights. Silken orris butter is suspended in a powdery veil of violet and musk, cool and elegant, with a soft suede warmth at its heart. The very essence of quiet sophistication.',
    images: ['/products/product-9.jpg', '/products/product-9-alt.jpg'],
    fragranceNotes: {
      top: ['Bergamot', 'Aldehydes', 'Carrot Seed'],
      middle: ['Orris', 'Violet', 'Rose'],
      base: ['Suede', 'White Musk', 'Cedar'],
    },
    category: 'Unisex',
    family: 'Powdery Floral',
    inStock: true,
    featured: true,
    bestSeller: false,
    isNew: true,
    sizes: sizes(339),
    rating: 4.7,
    reviewCount: 121,
  },
  {
    id: '10',
    name: 'Ambre Doré',
    slug: 'ambre-dore',
    price: 249,
    shortDescription: 'A warm oriental amber, golden and enveloping.',
    description:
      'Ambre Doré is an embrace of golden warmth. Labdanum and benzoin glow with vanilla and spice over a soft resinous base, comforting and sensual. A luminous oriental to be worn close, like a second skin.',
    images: ['/products/product-10.jpg', '/products/product-10-alt.jpg'],
    fragranceNotes: {
      top: ['Orange', 'Pink Pepper', 'Cinnamon'],
      middle: ['Labdanum', 'Benzoin', 'Rose'],
      base: ['Amber', 'Vanilla', 'Tonka Bean'],
    },
    category: 'Unisex',
    family: 'Warm Oriental',
    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    sizes: sizes(249),
    rating: 4.6,
    reviewCount: 134,
  },
  {
    id: '11',
    name: 'Vétiver Suprême',
    slug: 'vetiver-supreme',
    price: 309,
    shortDescription: 'Fresh vetiver with a crisp, woody clarity.',
    description:
      'Vétiver Suprême is the essence of refined freshness. Earthy Haitian vetiver is lifted by citrus and aromatic greens, grounded in clean cedar and a hint of grapefruit. Invigorating, sophisticated and impeccably tailored.',
    images: ['/products/product-11.jpg', '/products/product-11-alt.jpg'],
    fragranceNotes: {
      top: ['Grapefruit', 'Bergamot', 'Mint'],
      middle: ['Vetiver', 'Nutmeg', 'Geranium'],
      base: ['Cedar', 'Vetiver', 'Musk'],
    },
    category: 'For Him',
    family: 'Woody Fresh',
    inStock: true,
    featured: false,
    bestSeller: false,
    isNew: false,
    sizes: sizes(309),
    rating: 4.7,
    reviewCount: 147,
  },
  {
    id: '12',
    name: 'Musc Absolu',
    slug: 'musc-absolu',
    price: 329,
    shortDescription: 'A clean, intimate musk of absolute purity.',
    description:
      'Musc Absolu is the scent of skin perfected. Layers of white and crystalline musks intertwine with soft florals and a breath of cashmere, creating a second-skin sensuality that is at once clean, warm and irresistibly close.',
    images: ['/products/product-12.jpg', '/products/product-12-alt.jpg'],
    fragranceNotes: {
      top: ['Aldehydes', 'Bergamot', 'Pear'],
      middle: ['White Musk', 'Lily', 'Orris'],
      base: ['Cashmere Wood', 'Ambrette', 'Vanilla'],
    },
    category: 'Unisex',
    family: 'Musky Clean',
    inStock: true,
    featured: false,
    bestSeller: true,
    isNew: true,
    sizes: sizes(329),
    rating: 4.8,
    reviewCount: 203,
  },
];

export const categories = ['For Her', 'For Him', 'Unisex'];

export const fragranceFamilies = Array.from(
  new Set(products.map((p) => p.family))
).sort();

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured).slice(0, 4);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.bestSeller);
}

export function getRelatedProducts(product: Product, count = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.family === product.family)
    .concat(products.filter((p) => p.id !== product.id))
    .filter((p, i, arr) => arr.findIndex((x) => x.id === p.id) === i)
    .slice(0, count);
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Isabella M.',
    location: 'New Farm, Brisbane',
    rating: 5,
    quote:
      'Lumière dʼOr has become my signature. I receive compliments everywhere I go — it is sophistication in a bottle. The packaging alone feels like a gift to oneself.',
  },
  {
    id: 't2',
    name: 'James W.',
    location: 'Teneriffe, Brisbane',
    rating: 5,
    quote:
      'Noir Élégance is unlike anything I have worn. It evolves beautifully throughout the day and lasts from morning to midnight. Truly exceptional craftsmanship.',
  },
  {
    id: 't3',
    name: 'Sophie L.',
    location: 'Ascot, Brisbane',
    rating: 5,
    quote:
      'The service from House of Scents is as luxurious as the fragrances. Oud Mystique is pure opulence — rare, deep and unforgettable. I am a customer for life.',
  },
];
