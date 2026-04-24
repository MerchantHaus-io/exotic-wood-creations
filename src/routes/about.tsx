import { createFileRoute, Link } from "@tanstack/react-router";
import { instructors } from "@/data/classes";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Frej Improv Collective" },
      {
        name: "description",
        content:
          "The story, the values, and the instructors behind Frej Improv Collective — an online improv school built to feel good to walk into.",
      },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Yes, and — always.",
    body: "The first rule is the best rule. We accept what's offered, build on it, and don't tear each other down for sport.",
  },
  {
    title: "Rigor with room to fail.",
    body: "We take the craft seriously. We do not take ourselves seriously. Both things are true in every class.",
  },
  {
    title: "Small rooms, many reps.",
    body: "Nothing beats stage time. We cap classes at 12 so every student gets the reps they need, every week.",
  },
  {
    title: "No gatekeeping.",
    body: "You don't need a theater kid history. You don't need to be funny. You just need to be willing to listen.",
  },
];

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-primary py-24">
        <div className="pointer-events-none absolute inset-0 bg-confetti opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-ink/70">
            About the collective
          </p>
          <h1 className="mt-4 font-display text-5xl font-black leading-[1.02] tracking-tight text-ink md:text-7xl">
            A generous school for a{" "}
            <span className="text-gradient-sunset">ridiculous art form.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/80 md:text-xl">
            Frej Improv Collective was started in 2019 by a bunch of working improvisers who
            were tired of schools where "yes, and" only applied when the teacher felt like it.
            We built one we'd want to take a class at.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeader eyebrow="Our story" title="How Frej got started." align="center" />
        <div className="space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            In 2019, Frej Lindholm was teaching at three different theaters in two different
            cities and kept hearing the same thing from students: "I love improv, I just don't
            love the school." Too much ego, not enough reps, and a lot of people leaving the
            art form after one bad class.
          </p>
          <p>
            He got a few friends — working performers at UCB, iO, Second City, and the Magnet
            — on a Zoom and asked one question: what would a school look like if we designed
            it for the student first? Small rooms. Instructors who actually like teaching.
            No gatekeeping. Everyone on stage every class.
          </p>
          <p>
            That first cohort had nine students and met in a Brooklyn loft. Seven years later
            we're fully online, with alumni in 26 countries and a waiting list for 301. The
            values haven't changed a bit.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="border-y-2 border-ink bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="What we believe" title="Four principles, repeated often." />
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border-2 border-ink bg-card p-8 shadow-pop-sm"
              >
                <h3 className="font-display text-2xl font-black text-ink">{p.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-ink/75">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader
          eyebrow="The faculty"
          title="The people you'll actually learn from."
          subtitle="Every instructor is a working performer — on stage, in writers rooms, or both."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {instructors.map((i) => (
            <article
              key={i.id}
              className="flex gap-6 rounded-3xl border-2 border-ink bg-card p-6 shadow-pop-sm"
            >
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border-2 border-ink">
                <img
                  src={i.image}
                  alt={i.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-black text-ink">{i.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  {i.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{i.bio}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {i.credits.map((c) => (
                    <li
                      key={c}
                      className="rounded-full border-2 border-ink bg-secondary px-3 py-1 text-xs font-semibold text-ink"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-ink bg-pop py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl font-black tracking-tight md:text-5xl">
            Come take a class with us.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/85">
            The quickest way to know if Frej is right for you is to sit in on a $15 drop-in.
            Bring a friend. Leave with thirty.
          </p>
          <Link
            to="/classes"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary px-8 py-4 text-base font-bold text-ink shadow-pop transition-transform hover:-translate-y-1"
          >
            See classes
          </Link>
        </div>
      </section>
    </div>
  );
}
