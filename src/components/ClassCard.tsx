import { Link } from "@tanstack/react-router";
import type { ImprovClass } from "@/data/classes";

const colorMap: Record<ImprovClass["color"], { bg: string; chip: string }> = {
  yellow: { bg: "bg-primary", chip: "bg-primary" },
  coral: { bg: "bg-accent", chip: "bg-accent text-accent-foreground" },
  purple: { bg: "bg-pop", chip: "bg-pop text-pop-foreground" },
  mint: { bg: "bg-[oklch(0.85_0.12_160)]", chip: "bg-[oklch(0.85_0.12_160)]" },
};

export function ClassCard({ item }: { item: ImprovClass }) {
  const c = colorMap[item.color];
  const chipText = item.color === "yellow" || item.color === "mint" ? "text-ink" : "text-white";

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-card shadow-pop-sm transition-transform hover:-translate-y-1 hover:shadow-pop">
      <div className={`relative h-40 overflow-hidden border-b-2 border-ink ${c.bg}`}>
        <img
          src={item.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover opacity-80 mix-blend-multiply"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className={`rounded-full border-2 border-ink ${c.chip} ${chipText} px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-pop-sm`}>
            {item.level}
          </span>
          <span className="rounded-full border-2 border-ink bg-background px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink shadow-pop-sm">
            {item.format}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-ink">
          {item.title}
        </h3>
        <p className="mt-2 text-sm italic text-accent">{item.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">{item.description}</p>

        <dl className="mt-6 grid grid-cols-2 gap-3 border-t-2 border-dashed border-ink/20 pt-5 text-sm">
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-ink/50">Length</dt>
            <dd className="mt-0.5 font-semibold text-ink">
              {item.weeks === 1 ? "Weekly · drop-in" : `${item.weeks} weeks`}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-ink/50">Session</dt>
            <dd className="mt-0.5 font-semibold text-ink">{item.sessionLength}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-ink/50">Next start</dt>
            <dd className="mt-0.5 font-semibold text-ink">{item.nextStart}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase tracking-wider text-ink/50">Tuition</dt>
            <dd className="mt-0.5 font-semibold text-ink">${item.price}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-semibold text-ink/60">{item.schedule}</span>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1 text-sm font-bold text-accent transition-colors hover:text-pop"
          >
            Sign up
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
