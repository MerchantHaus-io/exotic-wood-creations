import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Flattening, Sanding & Epoxy | Exotic Wood Depot" },
      {
        name: "description",
        content:
          "Professional slab flattening, fine sanding, and custom epoxy river table services in Orlando, FL. CNC capacity up to 72\" × 18'.",
      },
      { property: "og:title", content: "Services — Exotic Wood Depot" },
      {
        property: "og:description",
        content:
          "Slab flattening, sanding, and epoxy river tables — crafted with precision in Orlando, FL.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "flattening",
    eyebrow: "01",
    title: "Slab Flattening",
    tagline: "Precision CNC flattening for slabs of any scale.",
    description:
      "Our large-format CNC router takes raw, twisted, or cupped slabs and brings them to a perfectly true plane — ready for finishing. Whether you've sourced your own slab or one of ours, we make it furniture-ready.",
    points: [
      'Maximum capacity: 72" wide × 18\' long',
      "Removes warp, cup, twist, and high spots",
      "Clean, consistent surface ready for sanding",
      "Drop off or schedule a pickup in the Orlando area",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M5 8h14" />
        <path d="M5 16h14" />
        <path d="M2 6l2-2h16l2 2" />
        <path d="M2 18l2 2h16l2-2" />
      </svg>
    ),
  },
  {
    id: "sanding",
    eyebrow: "02",
    title: "Fine Sanding",
    tagline: "From rough mill marks to a glass-smooth finish.",
    description:
      "After flattening, we progressively sand your slab through multiple grits to reveal the wood's true depth and figure. The result is a silky, finish-ready surface that brings out every detail in the grain.",
    points: [
      "Progressive grit work for a flawless surface",
      "Edges, live edges, and bark inclusions detailed by hand",
      "Prepares the slab for oil, lacquer, or epoxy finishing",
      "Pairs perfectly with our flattening service",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7c2-2 6-2 8 0s6 2 8 0" />
        <path d="M4 12c2-2 6-2 8 0s6 2 8 0" />
        <path d="M4 17c2-2 6-2 8 0s6 2 8 0" />
      </svg>
    ),
  },
  {
    id: "epoxy",
    eyebrow: "03",
    title: "Custom Epoxy",
    tagline: "River tables, void fills, and luminous accents.",
    description:
      "We design and pour custom epoxy work — from dramatic river tables to subtle void fills that preserve a slab's character. Choose a color and finish that complements your space, and we'll handle the rest.",
    points: [
      "Custom river tables in any color or clarity",
      "Void, knot, and crack fills that highlight natural beauty",
      "Layered pours with embedded elements on request",
      "Finished, leveled, and polished to a furniture standard",
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v6" />
        <path d="M8 8h8l-1.5 4a4 4 0 1 1-5 0L8 8z" />
        <path d="M9 22h6" />
        <path d="M12 18v4" />
      </svg>
    ),
  },
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        title="Our Services"
        subtitle="Three crafts, one workshop. We turn raw timber into heirloom-grade pieces."
      />

      <div className="space-y-20">
        {services.map((service, idx) => (
          <motion.section
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center"
          >
            <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-secondary/60 via-card to-background p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_oklch(0.75_0.12_70_/_0.15),_transparent_60%)]" />
                <div className="relative flex flex-col items-start gap-6">
                  <span className="font-display text-7xl font-bold tracking-tight text-primary/30">
                    {service.eyebrow}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                </div>
              </div>
            </div>

            <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                {service.title}
              </h2>
              <p className="mt-3 text-lg italic text-primary/90">{service.tagline}</p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-background p-10 text-center md:p-14"
      >
        <h3 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Ready to start your project?
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Whether you have a slab that needs flattening or a vision for a custom epoxy table, we'd love to hear from you. Stop by the shop or send us a message.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Get in Touch
          </Link>
          <Link
            to="/slabs"
            className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30"
          >
            Browse Our Slabs
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
