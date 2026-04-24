import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-black leading-none text-gradient-sunset">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold text-ink">
          Looks like nobody "yes, and"-ed this page into existence.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Let's get you back to somewhere fun.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-primary px-6 py-3 text-sm font-bold text-ink shadow-pop-sm transition-transform hover:-translate-y-0.5"
          >
            Back to the stage
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Frej Improv Collective — Online Improv Comedy Classes" },
      {
        name: "description",
        content:
          "Online improv comedy classes for total beginners, sketch writers, and long-form heads. Weekly drop-ins, eight-week courses, and corporate workshops — taught live on Zoom.",
      },
      { name: "author", content: "Frej Improv Collective" },
      { property: "og:title", content: "Frej Improv Collective — Online Improv Comedy Classes" },
      {
        property: "og:description",
        content:
          "Yes, and — take the leap. Live online improv classes that are rigorous, generous, and a little weird.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Frej Improv Collective" },
      {
        name: "twitter:description",
        content:
          "Live online improv comedy classes for every level. Try a $15 drop-in jam this Friday.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Header />
      <main className="pt-[78px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
