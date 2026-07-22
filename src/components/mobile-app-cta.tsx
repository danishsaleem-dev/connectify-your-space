import mobileAsset from "@/assets/mobile-app.asset.json";
import { Apple, Smartphone, CheckCircle2 } from "lucide-react";

const highlights = [
  "Track live opportunities across brands, franchises & properties",
  "Instant match alerts and deal-flow notifications",
  "Manage requests, meetings and documents in one place",
];

export function MobileAppCTA() {
  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="container-page relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full border border-primary/20 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Coming soon · Mobile App
          </span>
          <h2 className="mt-5 max-w-xl text-4xl leading-[1.1] md:text-5xl">
            Your growth network, <span className="text-primary">now in your pocket.</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Stay connected to every opportunity on the move. The Connectors app
            brings brand expansion, franchise deals and property matches to a
            single, elegant workspace on your phone.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-3 text-white transition-transform hover:-translate-y-0.5"
            >
              <Apple className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">Download on the</span>
                <span className="block text-sm font-semibold">App Store</span>
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-3 text-white transition-transform hover:-translate-y-0.5"
            >
              <Smartphone className="h-6 w-6" />
              <span className="text-left leading-tight">
                <span className="block text-[10px] uppercase tracking-wider opacity-70">Get it on</span>
                <span className="block text-sm font-semibold">Google Play</span>
              </span>
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-2xl" aria-hidden />
          <img
            src={mobileAsset.url}
            alt="Connectors mobile app on smartphone"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full max-w-md drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
