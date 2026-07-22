import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import {
  ArrowRight,
  Store,
  Handshake,
  Building2,
  TrendingUp,
  MapPin,
  Users,
  Sparkles,
  ShieldCheck,
  Rocket,
  Network,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Connectors — Connecting Growth Through Opportunities" },
      {
        name: "description",
        content:
          "Connectors is a business expansion, franchise development and retail leasing platform bridging brands, investors, franchisees and landlords.",
      },
      { property: "og:title", content: "Connectors — Connecting Growth Through Opportunities" },
      {
        property: "og:description",
        content:
          "A complete ecosystem for brand expansion, franchise sales, investment facilitation and commercial leasing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Store,
    title: "Brand Expansion",
    body: "Retail location sourcing, site evaluation and multi-city rollout planning for expanding brands.",
    href: "/brands",
  },
  {
    icon: Handshake,
    title: "Franchise Development",
    body: "Structure, market and sell your franchise. We match qualified franchisees with the right brand.",
    href: "/franchise",
  },
  {
    icon: Building2,
    title: "Landlord & Property",
    body: "List retail and commercial spaces and match with recognised brands actively seeking locations.",
    href: "/landlord",
  },
  {
    icon: TrendingUp,
    title: "Investor Connections",
    body: "Access verified brand opportunities, growth capital partnerships and joint ventures.",
  },
  {
    icon: MapPin,
    title: "Mall & Project Support",
    body: "Tenant acquisition, retail mix planning and anchor brand strategy for commercial projects.",
  },
  {
    icon: Sparkles,
    title: "Marketing & Technology",
    body: "360° marketing plus franchise CRM, LMS and management technology built for scale.",
  },
];

const stats = [
  { k: "12+", v: "Industries served" },
  { k: "360°", v: "Growth ecosystem" },
  { k: "100%", v: "Partnership focus" },
  { k: "Global", v: "Network reach" },
];

const values = [
  { icon: ShieldCheck, title: "Integrity", body: "Transparent, ethical relationships in every deal." },
  { icon: Rocket, title: "Growth", body: "Every partnership is designed to scale sustainably." },
  { icon: Network, title: "Partnerships", body: "Long-term strategic connections, not one-off intros." },
  { icon: Users, title: "Excellence", body: "Premium delivery with measurable business results." },
];

function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-70" aria-hidden />
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" aria-hidden />
        <div className="container-page relative pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-primary shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Connecting Growth Through Opportunities
            </span>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
              We don't just connect businesses —{" "}
              <span className="text-gradient-brand">we create growth.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Connectors is a business expansion, franchise development and
              retail leasing platform bridging brands, investors, franchisees,
              landlords and commercial projects into one ecosystem.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/brands"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
              >
                Expand your brand
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/franchise"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Explore franchise
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/70 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.v} className="bg-white p-6 text-center">
                <div className="font-display text-3xl text-primary">{s.k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                What we do
              </span>
              <h2 className="mt-3 text-4xl md:text-5xl">
                A complete ecosystem for retail and franchise growth.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Seven integrated divisions working together — from location
              sourcing to franchise sales, marketing and operations technology.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              const card = (
                <div className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  {s.href && (
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  )}
                </div>
              );
              return s.href ? (
                <Link key={s.title} to={s.href}>{card}</Link>
              ) : (
                <div key={s.title}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MISSION / STATEMENT */}
      <section className="relative overflow-hidden py-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-[var(--gradient-brand)] p-10 text-white shadow-[var(--shadow-brand)] md:p-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
            <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/80">Our mission</span>
                <h2 className="mt-3 text-4xl leading-tight text-white md:text-5xl">
                  A powerful network for brands, investors and locations.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-white/85">
                Our mission is to create a business network that connects brands,
                investors, franchisees, landlords and commercial projects together
                for sustainable growth and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Core values</span>
            <h2 className="mt-3 text-4xl md:text-5xl">Built on trust, engineered for growth.</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-2xl border border-border bg-surface p-7">
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 text-lg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUDIENCES CTA */}
      <section className="py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Who we work with</span>
            <h2 className="mt-3 text-4xl md:text-5xl">Choose your path to growth.</h2>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                to: "/brands",
                title: "For Brands",
                body: "Enter new markets, secure premium retail locations and scale multi-city with confidence.",
                icon: Store,
              },
              {
                to: "/franchise",
                title: "For Franchisees",
                body: "Discover verified franchise opportunities matched to your capital, territory and experience.",
                icon: Handshake,
              },
              {
                to: "/landlord",
                title: "For Landlords",
                body: "Submit your commercial space and get matched with expansion-ready brands.",
                icon: Building2,
              },
            ].map((a) => {
              const Icon = a.icon;
              return (
                <Link
                  key={a.to}
                  to={a.to}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Get started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="pb-24">
        <div className="container-page">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface p-12 text-center">
            <img src="/connectors.jpg" alt="Connectors" className="h-12 w-auto" />
            <p className="max-w-2xl font-display text-2xl leading-snug md:text-3xl">
              Brands. Investors. Franchisees. Locations. Opportunities.{" "}
              <span className="text-primary">All connected.</span>
            </p>
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-brand)]"
            >
              Start a conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
