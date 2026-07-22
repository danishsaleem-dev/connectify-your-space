import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { RequestForm } from "@/components/request-form";
import { Check, Handshake, Users, Cog, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise Development & Sales | Connectors" },
      {
        name: "description",
        content:
          "Turn your brand into a scalable franchise. Model development, franchise sales, lead generation, onboarding and operations technology.",
      },
      { property: "og:title", content: "Franchise Development & Sales — Connectors" },
      {
        property: "og:description",
        content:
          "Structure, market and sell franchises. Match qualified franchisees with the right brand.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/franchise" },
    ],
    links: [{ rel: "canonical", href: "/franchise" }],
  }),
  component: FranchisePage,
});

const services = [
  "Franchise model development",
  "Business structuring",
  "Franchise documentation",
  "Operations systems",
  "Franchise sales & lead generation",
  "Franchise matchmaking",
  "Territory management",
  "Marketing campaigns",
  "Investor presentations",
  "Franchisee onboarding",
];

const matching = [
  { label: "Investment capacity" },
  { label: "Business experience" },
  { label: "Preferred territory" },
  { label: "Industry interest" },
  { label: "Operational capability" },
];

const tech = [
  { icon: Cog, title: "Franchise Sales CRM", body: "Manage leads, sales pipeline and investor communications centrally." },
  { icon: GraduationCap, title: "Training (LMS)", body: "Full learning system for franchisee teams and management." },
  { icon: Users, title: "Franchisee Management", body: "KPIs, communications and multi-location performance monitoring." },
  { icon: Handshake, title: "Onboarding & Support", body: "Structured onboarding, ticketing and compliance workflows." },
];

function FranchisePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Franchise"
        title={
          <>
            Turn your brand into a
            <span className="text-gradient-brand"> scalable franchise.</span>
          </>
        }
        description="We design, structure, market and sell franchise opportunities — and match qualified franchisees to the right brand for long-term success."
      />

      <section className="py-20">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Franchise services</span>
            <h2 className="mt-3 text-4xl md:text-5xl">End-to-end franchise development.</h2>
            <p className="mt-4 text-muted-foreground">
              From franchise model design to sales, onboarding and operations —
              everything you need to grow a franchise system.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Franchisee matching</span>
            <h3 className="mt-3 text-2xl">The right franchisee for the right brand</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              We carefully match franchisees to brands based on:
            </p>
            <ul className="mt-6 space-y-3">
              {matching.map((m, i) => (
                <li key={m.label} className="flex items-center gap-3 rounded-lg border border-border bg-white p-3.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary-soft text-xs font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium">{m.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Technology ecosystem</span>
            <h2 className="mt-3 text-4xl md:text-5xl">Built on modern franchise technology.</h2>
            <p className="mt-4 text-muted-foreground">
              A full stack of systems to streamline sales, operations, training,
              compliance and finance across your franchise network.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tech.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="rounded-2xl border border-border bg-card p-6">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-surface">
        <RequestForm
          title="Ready to franchise your brand — or invest in one?"
          subtitle="Whether you're a brand looking to franchise or a franchisee exploring opportunities, tell us your goals and we'll respond within one business day."
          companyLabel="Brand / interest"
          subjectLabel="I am a"
          submitLabel="Submit franchise inquiry"
          intro={
            <div className="rounded-lg border border-border bg-white p-4 text-xs">
              Please mention whether you are a <strong>brand</strong> looking to
              franchise, or a <strong>franchisee / investor</strong> exploring
              opportunities — plus preferred territory and investment range.
            </div>
          }
        />
      </div>
    </PageShell>
  );
}
