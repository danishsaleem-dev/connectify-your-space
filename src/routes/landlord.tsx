import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/page-shell";
import { RequestForm } from "@/components/request-form";
import { Check, Building2, Store, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/landlord")({
  head: () => ({
    meta: [
      { title: "Landlord & Property Owner Services | Connectors" },
      {
        name: "description",
        content:
          "Submit your retail or commercial property and get matched with expansion-ready brands actively seeking new locations.",
      },
      { property: "og:title", content: "Landlord & Property Owner Services — Connectors" },
      {
        property: "og:description",
        content:
          "Faster tenant acquisition, access to established brands and long-term leasing opportunities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/landlord" },
    ],
    links: [{ rel: "canonical", href: "/landlord" }],
  }),
  component: LandlordPage,
});

const types = [
  "Retail shops", "Commercial units", "Food court spaces", "Standalone buildings",
  "Kiosks", "Showrooms", "Office spaces", "Mixed-use properties",
];

const benefits = [
  { icon: Clock, title: "Faster tenant acquisition", body: "Match with brands actively looking for expansion locations." },
  { icon: Store, title: "Established brands", body: "Access recognised, high-performing retail tenants." },
  { icon: ShieldCheck, title: "Long-term leasing", body: "Structured long-term agreements with reliable operators." },
  { icon: Building2, title: "Professional matching", body: "We evaluate fit before introductions — no time wasted." },
];

function LandlordPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Landlord & Property"
        title={
          <>
            Match your commercial space
            <span className="text-gradient-brand"> with growing brands.</span>
          </>
        }
        description="Connectors allows landlords and property owners to submit retail and commercial spaces for brand leasing opportunities — we bring the tenants."
      />

      <section className="py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 text-lg">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-16 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Property types</span>
            <h2 className="mt-3 text-4xl md:text-5xl">Every commercial space, welcome.</h2>
            <p className="mt-4 text-muted-foreground">
              From standalone retail units to full mixed-use developments — if
              it's leasable, we can match it with the right tenant.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {types.map((t) => (
                <span key={t} className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">How it works</span>
            <h3 className="mt-3 text-2xl">From listing to lease</h3>
            <ol className="mt-6 space-y-4">
              {[
                { t: "Submit your property", d: "Share location, size, type and target rental terms." },
                { t: "We evaluate & shortlist", d: "Our team matches your space with expansion-ready brands." },
                { t: "Introductions & negotiations", d: "We facilitate meetings and support negotiations." },
                { t: "Lease signed", d: "Long-term tenant secured with professional oversight." },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4 rounded-lg border border-border bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{step.t}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ul className="mt-6 grid gap-2 text-sm">
              {["Faster tenant acquisition", "Access to established brands", "Long-term leasing", "Professional matching"].map((b) => (
                <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-surface">
        <RequestForm
          title="Submit your property for leasing."
          subtitle="Share property details — location, size, type and terms. We'll evaluate and respond with matched brand interest within one business day."
          companyLabel="Property location / city"
          subjectLabel="Property type & size"
          submitLabel="Submit property"
          intro={
            <div className="rounded-lg border border-border bg-white p-4 text-xs">
              Include <strong>location</strong>, <strong>size (sqft/sqm)</strong>,
              <strong> property type</strong> and any <strong>target rent</strong> in your message.
            </div>
          }
        />
      </div>
    </PageShell>
  );
}
