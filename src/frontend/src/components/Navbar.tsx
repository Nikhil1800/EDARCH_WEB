import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, X } from "lucide-react";
import { useRef, useState } from "react";

const BASE_URL = import.meta.env.BASE_URL;

const navLinks = [
  { href: "/" as const, label: "Home" },
  { href: "/about" as const, label: "About" },
  { href: "/overview" as const, label: "Overview" },
  { href: "/recognitions" as const, label: "Recognitions" },
  { href: "/appeal" as const, label: "Appeal" },
  { href: "/contact" as const, label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const prevPath = useRef(currentPath);

  if (prevPath.current !== currentPath) {
    setIsOpen(false);
    prevPath.current = currentPath;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm">
            <img
              src={`${BASE_URL}assets/uploads/EDARCH_LOGO.jpg`}
              alt="EDARCH Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="leading-none">
            <span
              className="font-display font-bold text-lg"
              style={{ color: "oklch(0.44 0.1 195)" }}
            >
              EDARCH
            </span>
            <p className="text-[10px] text-muted-foreground font-body hidden sm:block">
              Empowering Divyang Persons
            </p>
          </div>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                data-ocid="nav.link"
                className={`px-3 py-2 rounded-md text-sm font-medium font-body transition-all duration-200 ${
                  currentPath === link.href
                    ? "text-primary bg-secondary"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/appeal">
              <Button
                size="sm"
                className="ml-2 bg-accent hover:bg-accent/90 text-accent-foreground font-body"
                data-ocid="nav.primary_button"
              >
                <Heart className="w-3.5 h-3.5 mr-1" />
                Donate
              </Button>
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <ul className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  data-ocid="nav.link"
                  className={`block px-4 py-2.5 rounded-md text-sm font-medium font-body transition-colors ${
                    currentPath === link.href
                      ? "text-primary bg-secondary"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link to="/appeal">
                <Button
                  size="sm"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  data-ocid="nav.primary_button"
                >
                  <Heart className="w-3.5 h-3.5 mr-1" />
                  Support EDARCH
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
