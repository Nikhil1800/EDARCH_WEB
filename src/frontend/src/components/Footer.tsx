import { Link } from "@tanstack/react-router";
import { Globe, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-white/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">
                  E
                </span>
              </div>
              <div>
                <p className="font-display font-bold text-xl text-white">
                  EDARCH
                </p>
                <p className="text-xs text-white/60">
                  ISO 9001-2008 Accredited
                </p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Entrepreneurship Development And Rehabilitation Centre for the Handicapped — 
              empowering and sustainable rehabilitation of Divyang persons through skill development.
            </p>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {(
                [
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/overview", label: "Overview" },
                  { to: "/products-manufacture", label: "Products Manufactured" },
                  { to: "/recognitions", label: "Recognitions" },
                  { to: "/appeal", label: "Appeal" },
                  { to: "/contact", label: "Contact" },
                ] as const
              ).map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>212-A, Narayan Peth, Kelkar Road, Pune 411030</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>+91-9850924747</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <span>info@edarch.org</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <Globe className="w-4 h-4 shrink-0 text-primary" />
                <span>www.edarch.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/50">
            © {year} EDARCH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
