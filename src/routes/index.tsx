import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { tables, slabs, pastProjects } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import logoTree from "@/assets/logo-tree.png";
import { motion } from "framer-motion";

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
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_oklch(0.14_0.01_60_/_0.6)_70%)]" />

        {/* Elegant tree logo backdrop — slow Ken Burns zoom */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 1, x: 0, y: 0 }}
          animate={{
            opacity: [0, 0.18, 0.18],
            scale: [1, 1.08],
            x: [0, -12],
            y: [0, 8],
          }}
          transition={{
            opacity: { duration: 3, ease: "easeOut", times: [0, 0.4, 1] },
            scale: { duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
            x: { duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
            y: { duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
          }}
        >
          <img
            src={logoTree}
            alt=""
            aria-hidden="true"
            className="h-[80vh] max-h-[760px] w-auto object-contain mix-blend-screen invert drop-shadow-[0_0_60px_oklch(0.75_0.12_70_/_0.35)]"
          />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Since 2018</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Exotic Wood{" "}
            <span className="text-gradient-gold">Depot</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85 md:text-xl [text-shadow:0_2px_20px_oklch(0.14_0.01_60_/_0.8)]">
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

      {/* Featured Video */}
      <section className="border-y border-border/30 bg-card/30 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader title="See Our Craft" subtitle="A glimpse into our shop and the wood we love" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto overflow-hidden rounded-2xl border border-border/50 shadow-[0_20px_60px_-20px_oklch(0.75_0.12_70_/_0.25)]"
          >
            {/* Subtle gold glow frame */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 opacity-60" />
            <div className="relative aspect-video w-full bg-background">
              <iframe
                src="https://www.youtube.com/embed/i3M9WQ00mC0?rel=0"
                title="Exotic Wood Depot — Featured Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.75_0.12_70_/_0.08),_transparent_70%)]" />
        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto max-w-3xl px-6 text-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="mx-auto h-12 w-12 text-primary/60"
          >
            <path d="M7.17 6C4.32 6 2 8.32 2 11.17V18h6.83v-6.83H5.5c0-1.84 1.5-3.34 3.34-3.34V6H7.17zm10 0c-2.85 0-5.17 2.32-5.17 5.17V18h6.83v-6.83H15.5c0-1.84 1.5-3.34 3.34-3.34V6h-1.67z" />
          </svg>

          <div className="mt-6 flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <blockquote className="mt-8 font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl md:leading-[1.4]">
            "I had a slab that I had given up on — epoxy work backfired on me. These guys worked their magic; leveling and removing overage and exposing some truly beautiful oak patterns. Price is reasonable, work was excellent, and the guys are a pleasure to work with."
          </blockquote>

          <div className="mx-auto mt-10 h-px w-16 bg-primary/40" />

          <figcaption className="mt-6">
            <p className="font-display text-lg font-semibold text-foreground">Patricia Hinman</p>
            <p className="mt-1 text-sm uppercase tracking-[0.25em] text-muted-foreground">Verified Customer</p>
          </figcaption>
        </motion.figure>
      </section>

      {/* About / CTA */}
      <section className="py-24">
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
