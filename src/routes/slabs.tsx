import { createFileRoute } from "@tanstack/react-router";
import { slabs } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/slabs")({
  head: () => ({
    meta: [
      { title: "Exotic Wood Slabs — Exotic Wood Depot" },
      { name: "description", content: "Browse our collection of exotic wood slabs. Guanacaste Parota, Monkeypod, Pachote and more." },
      { property: "og:title", content: "Exotic Wood Slabs — Exotic Wood Depot" },
      { property: "og:description", content: "Browse our collection of exotic wood slabs." },
    ],
  }),
  component: SlabsPage,
});

function SlabsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader title="Available Slabs" subtitle="Raw exotic wood slabs ready for your custom project" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {slabs.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
