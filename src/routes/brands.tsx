import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { RequestForm } from "@/components/request-form";
import { Check, Store, MapPin, TrendingUp, Globe2 } from "lucide-react";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "For Brands — Retail Expansion & Location Services | Connectors" },
      {
        name: "description",
        content:
          "Expand your brand with Connectors. Retail location sourcing, site evaluation, multi-city rollout planning and franchise growth.",
      },
      { property: "og:title", content: "For Brands — Connectors" },
      {
        property: "og:description",
        content:
          "Enter new markets, secure premium retail locations and scale multi-city with confidence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/brands" },
    ],
    links: [{ rel: "canonical", href: "/brands" }],
  }),
  component: BrandsPage,
});

const services = [
  "Retail location sourcing",
  "Commercial leasing support",
  "Site evaluation & feasibility",
  "Mall placement strategies",
  "High-footfall positioning",
  "Multi-city rollout planning",
  "Territory development",
  "Real estate negotiations",
  "Retail market intelligence",
  "Expansion planning",
];

const industries = [
  "Restaurants", "Cafes", "Fashion", "Beauty", "Electronics",
  "Fitness", "Convenience", "Luxury", "Lifestyle", "International franchises",
];

const highlights = [
  { icon: MapPin, title: "Premium locations", body: "Access high-footfall retail sites in malls and prime commercial areas." },
  { icon: Globe2, title: "Multi-city rollout", body: "Structured plans for expanding across cities and international markets." },
  { icon: TrendingUp, title: "Data-driven", body: "Market research, demographic and traffic analysis before every decision." },
  { icon: Store, title: "End-to-end", body: "From site sourcing to lease negotiations and store launch — handled." },
];

function BrandsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="For Brands"
        title={
          <>
            Expand into the right locations,
            <span className="text-gradient-brand"> with the right partners.</span>
          </>
        }
        description="We help brands identify, secure and expand into high-potential commercial locations — with detailed market research, feasibility analysis and negotiation support."
      />

      <section className="py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.title} className="rounded-2xl border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Services</span>
            <h2 className="mt-3 text-4xl md:text-5xl">Everything you need to expand.</h2>
            <p className="mt-4 text-muted-foreground">
              Our brand expansion team conducts detailed feasibility work so you
              establish stores in the most profitable areas.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Industries we serve</span>
            <h3 className="mt-3 text-2xl">Retail categories we specialise in</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {industries.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm text-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-surface">
        <RequestForm
          title="Tell us about your expansion plans."
          subtitle="Share your brand, target markets and expansion goals. Our team will review and respond within one business day."
          companyLabel="Brand name"
          subjectLabel="Target market / expansion goal"
          submitLabel="Request expansion support"
        />
      </div>
    </PageShell>
  );
}
