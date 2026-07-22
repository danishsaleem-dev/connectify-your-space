import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/connectors-logo.asset.json";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logoAsset.url} alt="Connectors" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Connecting brands, investors, franchisees, landlords and commercial
            projects into one growth ecosystem.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/brands" className="hover:text-foreground">For Brands</Link></li>
            <li><Link to="/franchise" className="hover:text-foreground">Franchise Development</Link></li>
            <li><Link to="/landlord" className="hover:text-foreground">Landlord & Property</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> hello@connectors.co</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +971 000 000 000</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> Global Business Network</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Connectors. All rights reserved.</p>
          <p>Connecting Growth Through Opportunities.</p>
        </div>
      </div>
    </footer>
  );
}
