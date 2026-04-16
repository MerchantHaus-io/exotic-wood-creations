import { createFileRoute } from "@tanstack/react-router";
import { pastProjects } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Exotic Wood Depot" },
      { name: "description", content: "Browse our gallery of past projects. Custom live edge tables, epoxy river tables, and more." },
      { property: "og:title", content: "Gallery — Exotic Wood Depot" },
      { property: "og:description", content: "Browse our gallery of past projects." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader title="Past Projects" subtitle="A showcase of our finest craftsmanship" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pastProjects.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
