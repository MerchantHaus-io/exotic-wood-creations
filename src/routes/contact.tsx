import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Frej Improv Collective" },
      {
        name: "description",
        content:
          "Questions, class sign-ups, corporate quotes, or just saying hi. The fastest way to reach Frej Improv Collective.",
      },
    ],
  }),
  component: ContactPage,
});

const topics = [
  { value: "general", label: "General question" },
  { value: "classes", label: "Classes & sign-up" },
  { value: "corporate", label: "Corporate workshops" },
  { value: "press", label: "Press / partnerships" },
] as const;

function ContactPage() {
  const [topic, setTopic] = useState<(typeof topics)[number]["value"]>("classes");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        eyebrow="Say hi"
        title="We reply in one business day."
        subtitle="Pick a topic below. If you're signing up for a class, a human gets back with payment details and the Zoom link."
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {/* Form */}
        <div className="rounded-3xl border-2 border-ink bg-card p-8 shadow-pop">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-primary shadow-pop-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-ink"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3 className="mt-6 font-display text-2xl font-black text-ink">
                Got it. Thanks.
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm text-ink/70">
                We'll get back to you within one business day. In the meantime, poke around
                the class catalog or drop in on a Friday Jam.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5"
            >
              <div>
                <label htmlFor="topic" className="text-sm font-bold text-ink">
                  What's this about?
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {topics.map((t) => {
                    const selected = topic === t.value;
                    return (
                      <button
                        key={t.value}
                        type="button"
                        onClick={() => setTopic(t.value)}
                        className={`rounded-full border-2 border-ink px-4 py-2 text-sm font-bold transition-all ${
                          selected
                            ? "bg-ink text-background shadow-pop-sm"
                            : "bg-background text-ink hover:-translate-y-0.5"
                        }`}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-bold text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-xl border-2 border-ink bg-background px-4 py-3 text-sm text-ink focus:outline-none focus:ring-4 focus:ring-primary/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-bold text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-xl border-2 border-ink bg-background px-4 py-3 text-sm text-ink focus:outline-none focus:ring-4 focus:ring-primary/40"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-bold text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="mt-2 w-full rounded-xl border-2 border-ink bg-background px-4 py-3 text-sm text-ink focus:outline-none focus:ring-4 focus:ring-primary/40"
                  placeholder="Tell us a little about what you're looking for…"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-pop transition-transform hover:-translate-y-0.5"
              >
                Send it
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
            </form>
          )}
        </div>

        {/* Direct channels */}
        <div className="space-y-4">
          <a
            href="mailto:hello@frejimprov.com"
            className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-card p-5 shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-primary text-ink">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Email</p>
              <p className="text-sm text-ink/70">hello@frejimprov.com</p>
            </div>
          </a>

          <a
            href="tel:+18885551212"
            className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-card p-5 shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-accent text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Phone</p>
              <p className="text-sm text-ink/70">(888) 555-1212</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-card p-5 shadow-pop-sm">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-ink bg-pop text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p className="text-sm font-bold text-ink">Office hours</p>
              <p className="text-sm text-ink/70">Mon–Fri · 10a–6p ET</p>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-ink bg-primary p-5 shadow-pop-sm">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-ink/70">
              Fastest path
            </p>
            <p className="mt-2 font-display text-lg font-black text-ink">
              Come try a $15 Friday Jam.
            </p>
            <p className="mt-2 text-sm text-ink/75">
              You'll know inside twenty minutes whether this is the school for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
