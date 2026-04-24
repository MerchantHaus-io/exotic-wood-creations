import { createFileRoute, Link } from "@tanstack/react-router";
import { classes } from "@/data/classes";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — Frej Improv Collective" },
      {
        name: "description",
        content:
          "Upcoming improv class start dates, drop-in jams, and live showcases. All times Eastern.",
      },
    ],
  }),
  component: SchedulePage,
});

const upcoming = [
  { date: "May 2 · Fri", time: "8:00 pm ET", title: "Friday Night Jam", type: "Drop-in", price: "$15", cta: "Reserve" },
  { date: "May 6 · Tue", time: "7:00 pm ET", title: "Improv 101: Yes, And — Spring Cohort", type: "8-week course", price: "$345", cta: "Sign up" },
  { date: "May 8 · Thu", time: "7:00 pm ET", title: "Improv 201: Scene Craft", type: "8-week course", price: "$395", cta: "Sign up" },
  { date: "May 9 · Fri", time: "8:00 pm ET", title: "Friday Night Jam", type: "Drop-in", price: "$15", cta: "Reserve" },
  { date: "May 12 · Mon", time: "7:30 pm ET", title: "Improv 301: Long-form Harold", type: "10-week course", price: "$495", cta: "Sign up" },
  { date: "May 14 · Wed", time: "6:30 pm ET", title: "Improv for Life", type: "6-week course", price: "$245", cta: "Sign up" },
  { date: "May 16 · Fri", time: "7:00 pm ET", title: "Student Showcase — 201 Spring A", type: "Live show", price: "Free", cta: "RSVP" },
  { date: "May 20 · Tue", time: "7:00 pm ET", title: "Sketch Writing Lab", type: "6-week course", price: "$325", cta: "Sign up" },
  { date: "May 23 · Fri", time: "8:00 pm ET", title: "Friday Night Jam", type: "Drop-in", price: "$15", cta: "Reserve" },
];

function TypeChip({ type }: { type: string }) {
  const map: Record<string, string> = {
    "Drop-in": "bg-primary text-ink",
    "8-week course": "bg-accent text-white",
    "10-week course": "bg-pop text-white",
    "6-week course": "bg-secondary text-ink",
    "Live show": "bg-[oklch(0.85_0.12_160)] text-ink",
  };
  return (
    <span
      className={`inline-flex rounded-full border-2 border-ink px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-pop-sm ${
        map[type] ?? "bg-background text-ink"
      }`}
    >
      {type}
    </span>
  );
}

function SchedulePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <SectionHeader
        eyebrow="What's on stage"
        title="Upcoming classes, drop-ins & showcases."
        subtitle="All times Eastern. New dates drop the first of every month."
      />

      <ul className="space-y-4">
        {upcoming.map((e, i) => (
          <li
            key={i}
            className="grid gap-4 rounded-3xl border-2 border-ink bg-card p-5 shadow-pop-sm transition-transform hover:-translate-y-0.5 md:grid-cols-[140px_1fr_auto] md:items-center"
          >
            <div>
              <p className="font-display text-lg font-black text-ink">{e.date}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-ink/60">{e.time}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-display text-xl font-bold text-ink">{e.title}</p>
              <div className="flex flex-wrap items-center gap-2">
                <TypeChip type={e.type} />
                <span className="text-sm font-semibold text-ink/70">· {e.price}</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-1 rounded-full border-2 border-ink bg-primary px-5 py-2 text-sm font-bold text-ink shadow-pop-sm transition-transform hover:-translate-y-0.5"
            >
              {e.cta}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-16 rounded-3xl border-2 border-ink bg-primary p-8 text-center shadow-pop">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/70">Heads up</p>
        <h3 className="mt-2 font-display text-2xl font-black text-ink">
          Classes cap at 12. They fill fast.
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-ink/75">
          If a course is full, join the waitlist — we run a second cohort for 101 and 201 every
          season and you'll get first dibs.
        </p>
      </div>
    </div>
  );
}
