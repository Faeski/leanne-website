"use client";

export interface Product {
  name: string;
  description: string;
  image?: string;
  externalUrl: string;
  price?: string;
}

interface ProductCardProps extends Product {}

/**
 * ProductCard Component
 * Individual product card linking to external webshop
 */
function ProductCard({ name, description, image, externalUrl, price }: ProductCardProps) {
  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:border-neutral-300 hover:shadow-lg"
    >
      {/* Image */}
      {image ? (
        <div className="aspect-square overflow-hidden bg-neutral-50">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="flex aspect-square items-center justify-center bg-neutral-100">
          <svg className="h-12 w-12 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 group-hover:text-neutral-700">
          {name}
        </h3>
        <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
          {description}
        </p>

        {/* Price and external link indicator */}
        <div className="mt-3 flex items-center justify-between">
          {price && (
            <span className="text-sm font-medium text-neutral-900">{price}</span>
          )}
          <span className="ml-auto flex items-center gap-1 text-sm text-neutral-500 transition-colors group-hover:text-neutral-700">
            Webshop
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}

interface ProductRecommendationProps {
  title?: string;
  subtitle?: string;
  products: Product[];
  columns?: 2 | 3 | 4;
}

/**
 * ProductRecommendation Component
 * Grid of products linking to external webshop
 * Used on treatment pages to recommend related products
 */
export function ProductRecommendation({
  title = "Aanbevolen Producten",
  subtitle,
  products,
  columns = 3,
}: ProductRecommendationProps) {
  const gridCols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="mb-8 text-center">
        <h2 className="text-display-sm font-semibold text-neutral-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-neutral-600">{subtitle}</p>
        )}
      </div>
      <div className={`grid gap-6 ${gridCols[columns]}`}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
