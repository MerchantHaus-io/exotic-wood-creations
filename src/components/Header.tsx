import { Link } from "@tanstack/react-router";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/classes", label: "Classes" },
  { to: "/schedule", label: "Schedule" },
  { to: "/corporate", label: "Corporate" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Wordmark() {
  return (
    <span className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-primary font-display text-lg font-black text-ink shadow-pop-sm"
      >
        F!
      </span>
      <span className="font-display text-xl font-black tracking-tight text-ink">
        Frej<span className="text-accent">.</span>
      </span>
    </span>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-ink bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <Wordmark />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.slice(1, -1).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-accent"
              activeProps={{ className: "text-sm font-semibold text-accent" }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border-2 border-ink bg-primary px-4 py-2 text-sm font-bold text-ink shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            Sign up
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="border-t-2 border-ink bg-background md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-ink/70 transition-colors hover:bg-secondary hover:text-accent"
                activeProps={{ className: "rounded-lg px-4 py-3 text-sm font-semibold bg-secondary text-accent" }}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
