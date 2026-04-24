import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { classes, type Level } from "@/data/classes";
import { ClassCard } from "@/components/ClassCard";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes — Frej Improv Collective" },
      {
        name: "description",
        content:
          "Every class on offer this season — beginner Improv 101, long-form 301, sketch writing lab, drop-in jams, and more. Live on Zoom.",
      },
    ],
  }),
  component: ClassesPage,
});

const filters: ("All" | Level)[] = ["All", "Beginner", "Intermediate", "Advanced", "Drop-in"];

function ClassesPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => (active === "All" ? classes : classes.filter((c) => c.level === active)),
    [active],
  );

  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <SectionHeader
        eyebrow="Spring '26 catalog"
        title="Every class, all in one place."
        subtitle="Filter by level. Every course runs live on Zoom and caps at 12 students."
      />

      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((f) => {
          const selected = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border-2 border-ink px-5 py-2 text-sm font-bold transition-all ${
                selected
                  ? "bg-ink text-background shadow-pop-sm"
                  : "bg-background text-ink hover:-translate-y-0.5 hover:shadow-pop-sm"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="py-16 text-center text-ink/60">
          No classes in this level right now — check back next season.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((c) => (
            <ClassCard key={c.id} item={c} />
          ))}
        </div>
      )}
    </div>
  );
}
