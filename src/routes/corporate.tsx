import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Workshops — Frej Improv Collective" },
      {
        name: "description",
        content:
          "Virtual and on-site improv workshops for teams. Better listening, better meetings, and the kind of ice-breaker that actually works.",
      },
    ],
  }),
  component: CorporatePage,
});

const programs = [
  {
    eyebrow: "01",
    title: "The 90-minute unblock",
    tagline: "One session. Every Zoom square participating. No homework.",
    description:
      "Our most-booked session. Perfect as an all-hands energizer, a pre-offsite warm-up, or a standalone \"we need to feel like a team again\" moment. Scalable from 10 to 200 people.",
    points: [
      "Fully remote or in-person",
      "Up to 200 participants",
      "Breakout rooms led by our instructors",
      "Custom debrief for your leader",
    ],
    cta: "From $2,400",
  },
  {
    eyebrow: "02",
    title: "Manager listening lab",
    tagline: "Four sessions. Real, trainable listening skills.",
    description:
      "A four-week cohort for people managers. We translate improv's core technical skill — committed listening — into interview, 1:1, and feedback practice. Managers leave with a playbook their reports feel.",
    points: [
      "4 × 75-minute live sessions",
      "Small cohorts of 8–12 managers",
      "Private Slack + weekly rep prompts",
      "Outcome survey after 30 days",
    ],
    cta: "From $6,800",
  },
  {
    eyebrow: "03",
    title: "Leadership intensive",
    tagline: "Two days. On-site or off-site. Serious fun.",
    description:
      "A full offsite program for exec and leadership teams. Mixes improv scene work, structured games, and facilitated conversation to surface how your team actually makes decisions under pressure.",
    points: [
      "Two full days, bespoke agenda",
      "Up to 25 leaders",
      "Pre-interviews with your CEO",
      "Post-session executive summary",
    ],
    cta: "From $18,000",
  },
];

const logos = [
  "Google",
  "Stripe",
  "Shopify",
  "Notion",
  "Atlas Software",
  "Figma",
  "Airtable",
  "Canva",
];

function CorporatePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-pop py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-confetti opacity-40" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Corporate programs
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            The only team-building<br />
            <span className="text-primary">nobody groans about.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
            Virtual and on-site improv workshops for teams that want to actually listen to each
            other again. Rigorous, funny, and translated into language your execs will use on
            Monday.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary px-8 py-4 text-base font-bold text-ink shadow-pop transition-transform hover:-translate-y-1"
            >
              Book a call
            </Link>
            <a
              href="mailto:hello@frejimprov.com"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-ink"
            >
              hello@frejimprov.com
            </a>
          </div>
        </div>
      </section>

      {/* Logo strip */}
      <section className="border-b-2 border-ink bg-background py-10">
        <p className="mx-auto mb-6 max-w-5xl px-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-ink/50">
          Trusted by teams at
        </p>
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
          {logos.map((l) => (
            <span key={l} className="font-display text-xl font-bold text-ink/70">
              {l}
            </span>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="Three ways to bring us in"
          title="Pick a program. Or we'll build one with you."
        />

        <div className="space-y-10">
          {programs.map((p, idx) => (
            <motion.article
              key={p.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="grid gap-6 rounded-3xl border-2 border-ink bg-card p-8 shadow-pop-sm md:grid-cols-[200px_1fr_auto] md:items-center md:p-10"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-6xl font-black text-accent">{p.eyebrow}</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-black text-ink md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm italic text-accent">{p.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">{p.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {p.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-ink/80">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <span className="inline-flex rounded-full border-2 border-ink bg-primary px-4 py-2 text-sm font-bold text-ink shadow-pop-sm">
                  {p.cta}
                </span>
                <Link
                  to="/contact"
                  className="text-sm font-bold text-accent hover:text-pop"
                >
                  Request a quote →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="border-y-2 border-ink bg-primary py-20">
        <figure className="mx-auto max-w-3xl px-6 text-center">
          <blockquote className="font-display text-2xl font-semibold leading-[1.3] tracking-tight text-ink md:text-4xl">
            "We booked Marcus for a leadership offsite and the Slack channel has been a
            'yes, and' stream ever since. Best budget we spent all year."
          </blockquote>
          <figcaption className="mt-8">
            <p className="font-display text-lg font-black text-ink">Linnea Park</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-ink/60">
              Head of People · Atlas Software
            </p>
          </figcaption>
        </figure>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl font-black tracking-tight text-ink md:text-5xl">
            Have a date in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">
            Tell us your team, your goal, and your calendar. We'll come back inside 48 hours
            with a proposal.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-pop transition-transform hover:-translate-y-1"
          >
            Start the conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
