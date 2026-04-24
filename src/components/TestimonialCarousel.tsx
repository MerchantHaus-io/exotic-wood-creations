import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/classes";

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
      className="relative overflow-hidden border-y-2 border-ink bg-primary py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-confetti opacity-50" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/70">
          Word from the class
        </p>

        <div className="relative mt-8 min-h-[260px] md:min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <blockquote className="font-display text-2xl font-semibold leading-[1.3] tracking-tight text-ink md:text-3xl">
                "{current.text}"
              </blockquote>

              <figcaption className="mt-8">
                <p className="font-display text-lg font-bold text-ink">{current.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-ink/60">
                  {current.role}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-background text-ink shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full border border-ink transition-all ${
                  i === index ? "w-8 bg-ink" : "w-2 bg-background hover:bg-ink/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-background text-ink shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
