import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";
import { MobileAppCTA } from "./mobile-app-cta";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <MobileAppCTA />
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary-soft to-transparent" aria-hidden />
      <div className="container-page relative py-20 md:py-28">
        <span className="inline-flex rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
