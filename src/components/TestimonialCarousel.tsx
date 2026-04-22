import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Testimonial = {
  name: string;
  role?: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Patricia Hinman",
    role: "Verified Customer",
    text: "I had a slab that I had given up on — epoxy work backfired on me. These guys worked their magic; leveling and removing overage and exposing some truly beautiful oak patterns. Price is reasonable, work was excellent, and the guys are a pleasure to work with.",
  },
  {
    name: "Mike R.",
    role: "Custom Table Client",
    text: "Absolutely stunning table. The craftsmanship is top-notch and the wood grain is breathtaking. Highly recommend Exotic Wood Depot!",
  },
  {
    name: "Sarah L.",
    role: "Dining Table Commission",
    text: "We ordered a custom Guanacaste dining table and it exceeded all expectations. Beautiful work and great communication throughout.",
  },
  {
    name: "David K.",
    role: "Slab Buyer",
    text: "Walked into the shop and was blown away by the quality of the slabs. Graham took the time to walk me through every species. Found the perfect piece for my project.",
  },
  {
    name: "Jennifer M.",
    role: "Repeat Customer",
    text: "This is our second piece from Exotic Wood Depot and it won't be our last. The attention to detail and the depth of color in the finish is unmatched.",
  },
];

const AUTOPLAY_MS = 7000;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused]);

  const goTo = (i: number) => setIndex((i + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section
      className="relative overflow-hidden py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.75_0.12_70_/_0.08),_transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Quote icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="mx-auto h-12 w-12 text-primary/60"
        >
          <path d="M7.17 6C4.32 6 2 8.32 2 11.17V18h6.83v-6.83H5.5c0-1.84 1.5-3.34 3.34-3.34V6H7.17zm10 0c-2.85 0-5.17 2.32-5.17 5.17V18h6.83v-6.83H15.5c0-1.84 1.5-3.34 3.34-3.34V6h-1.67z" />
        </svg>

        {/* Stars */}
        <div className="mt-6 flex justify-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Animated quote */}
        <div className="relative mt-8 min-h-[260px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <blockquote className="font-display text-xl font-medium leading-relaxed text-foreground md:text-2xl md:leading-[1.5]">
                "{current.text}"
              </blockquote>

              <div className="mx-auto mt-8 h-px w-16 bg-primary/40" />

              <figcaption className="mt-6">
                <p className="font-display text-lg font-semibold text-foreground">{current.name}</p>
                {current.role && (
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {current.role}
                  </p>
                )}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
