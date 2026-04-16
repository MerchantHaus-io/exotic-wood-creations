import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { tables, slabs, pastProjects } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import logoTree from "@/assets/logo-tree.png";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const featuredTables = tables.filter((t) => !t.sold).slice(0, 4);
  const featuredSlabs = slabs.slice(0, 6);
  const featuredProjects = pastProjects.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://static.wixstatic.com/media/04833c_dd40f86d4fd74e69acdcdb57a60bd0a5f000.jpg/v1/fill/w_1920,h_900,al_c,q_85,enc_avif,quality_auto/04833c_dd40f86d4fd74e69acdcdb57a60bd0a5f000.jpg)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background" />

        {/* Elegant tree logo backdrop */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <img
            src={logoTree}
            alt=""
            aria-hidden="true"
            className="h-[80vh] max-h-[760px] w-auto object-contain opacity-[0.18] mix-blend-screen invert drop-shadow-[0_0_60px_oklch(0.75_0.12_70_/_0.35)]"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Since 2018</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Exotic Wood{" "}
            <span className="text-gradient-gold">Depot</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Handcrafted live edge tables and exotic wood slabs imported from Costa Rica. Each piece tells a unique story through natural beauty and expert craftsmanship.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/tables"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_4px_20px_-4px_oklch(0.75_0.12_70_/_0.4)]"
            >
              View Tables
            </Link>
            <Link
              to="/slabs"
              className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              Browse Slabs
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tables */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader title="Ready For a Home" subtitle="Finished tables available for purchase" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredTables.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/tables"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View All Tables
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* Featured Slabs */}
      <section className="border-y border-border/30 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader title="Available Slabs" subtitle="Raw exotic wood slabs ready for your custom project" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredSlabs.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/slabs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
            >
              View All Slabs
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader title="Past Projects" subtitle="A showcase of our finest work" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            View Full Gallery
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* About / CTA */}
      <section className="border-t border-border/30 bg-card/30 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            From Costa Rica to Your Home
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Exotic Wood Depot was born during a fishing trip in Costa Rica, where we discovered some of the most beautiful wood in the world. Since 2018, we've been bringing that beauty to homes across the States — creating one-of-a-kind tables that become the centerpiece of any room.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_4px_20px_-4px_oklch(0.75_0.12_70_/_0.4)]"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
