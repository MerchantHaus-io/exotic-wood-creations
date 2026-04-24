import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { classes, instructors } from "@/data/classes";
import { ClassCard } from "@/components/ClassCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const valueProps = [
  {
    emoji: "🎭",
    title: "Taught by working performers",
    body: "Every instructor has house-team cred, a writers-room credit, or both. No armchair coaches.",
  },
  {
    emoji: "💻",
    title: "Live on Zoom, every week",
    body: "Real cohorts. Real showcase nights. No pre-recorded videos collecting dust in your queue.",
  },
  {
    emoji: "🙌",
    title: "Welcoming by design",
    body: "First-timers, over-thinkers, and introverts are our people. There is no wrong way to try.",
  },
  {
    emoji: "🎯",
    title: "Built for real life",
    body: "The skills transfer — presentations, parenting, dating, selling. Improv is sneaky-useful.",
  },
];

const stats = [
  { value: "12,000+", label: "Alumni" },
  { value: "4.9★", label: "Avg. rating" },
  { value: "26", label: "Countries represented" },
  { value: "7 yrs", label: "Since 2019" },
];

function HomePage() {
  const featured = classes.slice(0, 4);
  const featuredInstructors = instructors.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-background">
        <div className="pointer-events-none absolute inset-0 bg-confetti" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-background px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ink shadow-pop-sm"
            >
              <span className="h-2 w-2 rounded-full bg-accent" /> New cohort starts May 6
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 font-display text-6xl font-black leading-[0.95] tracking-tight text-ink md:text-8xl"
            >
              Yes,{" "}
              <span className="text-gradient-sunset">and —</span>
              <br />
              take the leap.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75 md:text-xl"
            >
              Online improv comedy classes that are rigorous, generous, and a little weird.
              Taught live by working performers. First class is $15, no commitment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/classes"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-pop transition-transform hover:-translate-y-1"
              >
                Browse classes
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-background px-8 py-4 text-base font-bold text-ink shadow-pop-sm transition-transform hover:-translate-y-1"
              >
                Try Friday's drop-in — $15
              </Link>
            </motion.div>

            <dl className="mt-14 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-black text-ink">{s.value}</dt>
                  <dd className="mt-1 text-xs font-bold uppercase tracking-wider text-ink/60">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Stacked polaroid-style cards */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
            <motion.div
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              animate={{ opacity: 1, rotate: -6, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute inset-x-8 top-4 aspect-[4/5] rounded-3xl border-2 border-ink bg-pop p-3 shadow-pop"
            >
              <div className="h-full w-full overflow-hidden rounded-2xl border-2 border-ink">
                <img
                  src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&w=800&q=80"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 4, y: 20 }}
              animate={{ opacity: 1, rotate: 3, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute inset-x-0 top-20 aspect-[4/5] rounded-3xl border-2 border-ink bg-accent p-3 shadow-pop-lg"
            >
              <div className="h-full w-full overflow-hidden rounded-2xl border-2 border-ink">
                <img
                  src="https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=800&q=80"
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border-2 border-ink bg-background px-4 py-3 text-center font-display text-sm font-black text-ink shadow-pop-sm">
                101 cohort · Spring '26
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute -right-6 -top-2 flex h-24 w-24 items-center justify-center rounded-full border-2 border-ink bg-primary font-display text-xs font-black uppercase tracking-wider text-ink shadow-pop"
            >
              <span className="-rotate-12 text-center leading-tight">
                Yes,
                <br />
                and!
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-b-2 border-ink bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Why Frej"
            title="An improv school that actually feels good to go to."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border-2 border-ink bg-card p-6 shadow-pop-sm"
              >
                <div className="text-3xl">{v.emoji}</div>
                <h3 className="mt-4 font-display text-xl font-black leading-tight text-ink">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured classes */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="This season's lineup"
          title="Pick your first class."
          subtitle="Every course runs live on Zoom, ends with a performance, and caps at 12 students so you actually get reps."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {featured.map((c) => (
            <ClassCard key={c.id} item={c} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-background px-6 py-3 text-sm font-bold text-ink shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            See all classes
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Instructors */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="The people in the Zoom squares"
          title="Instructors who've done the reps."
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {featuredInstructors.map((i) => (
            <Link
              key={i.id}
              to="/about"
              className="group rounded-3xl border-2 border-ink bg-card p-5 shadow-pop-sm transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-ink">
                <img
                  src={i.image}
                  alt={i.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-black text-ink">{i.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                {i.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="border-y-2 border-ink bg-pop text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
              For teams
            </p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Improv, but make it a team offsite.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              90-minute virtual workshops. Multi-day leadership intensives. A single all-hands
              ice-breaker that actually works. Our corporate program translates the stage into
              better listening, better meetings, and a Slack channel that doesn't go quiet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/corporate"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary px-6 py-3 text-sm font-bold text-ink shadow-pop transition-transform hover:-translate-y-0.5"
              >
                Book a team workshop
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-ink"
              >
                Talk to us
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              "Google · Team Days",
              "Stripe · Leadership Offsite",
              "Shopify · All-hands 2026",
              "Notion · Manager training",
            ].map((brand) => (
              <li
                key={brand}
                className="rounded-2xl border-2 border-ink bg-white/10 px-5 py-3 font-display text-base font-semibold text-white backdrop-blur-sm"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl font-black leading-tight tracking-tight text-ink md:text-5xl">
            You already have the instinct.
            <br />
            <span className="text-gradient-sunset">Come use it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">
            Drop in on a Friday Jam. Sign up for Improv 101. Or bring us to your team.
            Whatever door you pick, it's one room farther out of your head.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/classes"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-pop transition-transform hover:-translate-y-1"
            >
              Find your class
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-background px-8 py-4 text-base font-bold text-ink shadow-pop-sm transition-transform hover:-translate-y-1"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
