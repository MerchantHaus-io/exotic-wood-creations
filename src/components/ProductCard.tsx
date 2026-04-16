import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const externalUrl = `https://www.exoticwooddepotllc.com/product-page/${product.slug}`;

  return (
    <a
      href={externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_oklch(0.75_0.12_70_/_0.15)]"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.sold && (
          <div className="absolute top-3 left-3 badge-sold rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Sold
          </div>
        )}
        {product.price && !product.sold && (
          <div className="absolute top-3 right-3 badge-price rounded-md px-3 py-1 text-sm font-semibold">
            ${product.price.toLocaleString()}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold leading-tight text-foreground transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        {product.dimensions && (
          <p className="mt-1 text-sm text-muted-foreground">{product.dimensions}</p>
        )}
        {product.woodType && (
          <p className="mt-1 text-xs font-medium uppercase tracking-wider text-primary/70">
            {product.woodType}
          </p>
        )}
      </div>
    </a>
  );
}
