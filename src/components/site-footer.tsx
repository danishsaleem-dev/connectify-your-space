import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/connectors-logo.asset.json";
import { Mail, MapPin, Phone } from "lucide-react";

const offices = [
  {
    label: "UK Office",
    phone: "+44 7894 560314",
    phoneHref: "tel:+447894560314",
    address: ["26-28 Mount Row", "London W1K 3SQ", "United Kingdom"],
  },
  {
    label: "US Office",
    phone: "+1 702 964 1853",
    phoneHref: "tel:+17029641853",
    address: ["8870 S Maryland Pkwy, Suite 130", "Las Vegas, NV 89123", "United States"],
  },
  {
    label: "Pakistan Office",
    phone: "+92 300 6885680",
    phoneHref: "tel:+923006885680",
    address: ["23 Hunza Block, Allama Iqbal Town", "Lahore", "Pakistan"],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-16 md:grid-cols-2">
        <div>
          <img src={logoAsset.url} alt="Connectors" className="h-10 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Connecting brands, investors, franchisees, landlords and commercial
            projects into one growth ecosystem.
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-muted-foreground">
            <a href="mailto:hello@connectors.co" className="flex items-center gap-2 hover:text-foreground">
              <Mail className="h-4 w-4 text-primary" /> hello@connectors.co
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/brands" className="hover:text-foreground">For Brands</Link></li>
            <li><Link to="/franchise" className="hover:text-foreground">Franchise Development</Link></li>
            <li><Link to="/landlord" className="hover:text-foreground">Landlord & Property</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page grid gap-10 py-14 md:grid-cols-3">
          {offices.map((office) => (
            <div key={office.label}>
              <h4 className="text-sm font-semibold text-foreground">{office.label}</h4>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a href={office.phoneHref} className="flex items-center gap-2 hover:text-foreground">
                    <Phone className="h-4 w-4 shrink-0 text-primary" /> {office.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    {office.address.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </span>
                </li>
              </ul>
            </div>
          ))}
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
