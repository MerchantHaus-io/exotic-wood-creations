import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/SectionHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Exotic Wood Depot" },
      { name: "description", content: "Get in touch with Exotic Wood Depot for custom tables, slabs, and inquiries. Visit us at 316 N Parramore Ave, Orlando, FL." },
      { property: "og:title", content: "Contact — Exotic Wood Depot" },
      { property: "og:description", content: "Get in touch with Exotic Wood Depot." },
    ],
  }),
  component: ContactPage,
});

const reviews = [
  {
    name: "Patricia Hinman",
    rating: 5,
    text: "I had a slab that I had given up on, epoxy work backfired on me. These guys worked their magic; leveling and removing overage and exposing some truly beautiful oak patterns. Price is reasonable, work was excellent, and the guys are a pleasure to work with.",
  },
  {
    name: "Mike R.",
    rating: 5,
    text: "Absolutely stunning table. The craftsmanship is top-notch and the wood grain is breathtaking. Highly recommend Exotic Wood Depot!",
  },
  {
    name: "Sarah L.",
    rating: 5,
    text: "We ordered a custom Guanacaste dining table and it exceeded all expectations. Beautiful work and great communication throughout.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-primary">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeader title="Get In Touch" subtitle="Interested in a piece or have a custom project in mind?" />

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-border/50 bg-card p-8">
            <p className="text-lg text-muted-foreground">
              Reach out to us through any of the channels below. We'd love to hear about your project and help bring your vision to life.
            </p>

            <div className="mt-6 space-y-4">
              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/30 hover:bg-secondary/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Location</p>
                  <p className="text-sm text-muted-foreground">316 N. Parramore Ave, Orlando, FL 32801</p>
                </div>
              </div>

              {/* Phone - Graham */}
              <a
                href="tel:321-948-6665"
                className="flex items-center gap-4 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/30 hover:bg-secondary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Graham</p>
                  <p className="text-sm text-muted-foreground">(321) 948-6665</p>
                </div>
              </a>

              {/* Phone - Marcus */}
              <a
                href="tel:352-544-9269"
                className="flex items-center gap-4 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/30 hover:bg-secondary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Marcus</p>
                  <p className="text-sm text-muted-foreground">(352) 544-9269</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:exoticwooddepotllc@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/30 hover:bg-secondary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">exoticwooddepotllc@gmail.com</p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-4 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/30 hover:bg-secondary/50">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Hours</p>
                  <p className="text-sm text-muted-foreground">Mon–Fri: 9:30 am – 4:30 pm</p>
                  <p className="text-sm text-muted-foreground">Saturday: 9:30 am – 2:00 pm</p>
                </div>
              </div>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/wooddepotllc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/30 hover:bg-secondary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Facebook</p>
                  <p className="text-sm text-muted-foreground">Message us on Facebook</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/exoticwooddepotllc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border/50 p-4 transition-all hover:border-primary/30 hover:bg-secondary/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Instagram</p>
                  <p className="text-sm text-muted-foreground">Follow us on Instagram</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl border border-border/50 bg-card overflow-hidden">
          <iframe
            title="Exotic Wood Depot Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d-81.3876!3d28.5461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s316+N+Parramore+Ave%2C+Orlando%2C+FL!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Google Reviews */}
      <div className="mt-16">
        <SectionHeader title="What Our Customers Say" subtitle="Real reviews from happy customers" />

        <div className="grid gap-6 sm:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/20"
            >
              <Stars count={review.rating} />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{review.text}"</p>
              <p className="mt-4 text-sm font-semibold text-foreground">— {review.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/place/316+N+Parramore+Ave,+Orlando,+FL+32801"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#4285F4"/><path d="M12 6.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S13.38 6.5 12 6.5z" fill="white"/><path d="M12 14c-2.33 0-7 1.17-7 3.5V19h14v-1.5c0-2.33-4.67-3.5-7-3.5z" fill="white"/></svg>
            See All Reviews on Google
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
