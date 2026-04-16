import { createFileRoute } from "@tanstack/react-router";
import { tables } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/tables")({
  head: () => ({
    meta: [
      { title: "Tables — Exotic Wood Depot" },
      { name: "description", content: "Handcrafted exotic wood tables for sale. Live edge dining tables, desks, and coffee tables." },
      { property: "og:title", content: "Tables — Exotic Wood Depot" },
      { property: "og:description", content: "Handcrafted exotic wood tables for sale." },
    ],
  }),
  component: TablesPage,
});

function TablesPage() {
  const available = tables.filter((t) => !t.sold);
  const sold = tables.filter((t) => t.sold);

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader title="Tables For Sale" subtitle="Handcrafted exotic wood tables ready for a home" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {available.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {sold.length > 0 && (
        <div className="mt-20">
          <h3 className="mb-8 text-center font-display text-2xl font-semibold text-muted-foreground">Previously Sold</h3>
          <div className="grid gap-6 opacity-60 sm:grid-cols-2 lg:grid-cols-3">
            {sold.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
