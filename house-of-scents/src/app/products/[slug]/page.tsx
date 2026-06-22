import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products';
import { ProductDetail } from '@/components/product/ProductDetail';
import { ProductCard } from '@/components/product/ProductCard';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Not Found | House of Scents' };
  return {
    title: `${product.name} | House of Scents Brisbane`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <div className="pt-28">
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <nav className="mb-8 text-xs uppercase tracking-[0.15em] text-bronze">
          Shop / {product.category} / <span className="text-gold">{product.name}</span>
        </nav>
        <ProductDetail product={product} />
      </div>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">
            You May Also Adore
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ivory md:text-4xl">
            Related Fragrances
          </h2>
          <div className="gold-divider mx-auto mt-6 w-24" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
