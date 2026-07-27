import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import logoMark from "@/assets/benediction-mark.png";

type NavLink = {
  to: string;
  label: string;
  children?: { to: string; label: string; description?: string }[];
};

const links: NavLink[] = [
  { to: "/", label: "Home" },
  {
    to: "/solutions",
    label: "Solutions",
    children: [
      { to: "/solutions", label: "Solutions", description: "The Benediction platform overview" },
      { to: "/cybersecurity", label: "Cybersecurity", description: "AI red teaming, GRC, SecOps" },
      { to: "/consulting", label: "Consulting", description: "Strategy, risk & advisory" },
      { to: "/applications", label: "Applications", description: "Enterprise apps & platforms" },
    ],
  },
  {
    to: "/industries",
    label: "Industries",
    children: [
      { to: "/industries", label: "Industries", description: "All sectors we serve" },
      { to: "/healthcare", label: "Healthcare", description: "AI-powered healthcare & robotic surgery" },
      { to: "/petroleum-natural-gas", label: "Petroleum and Natural Gas", description: "Upstream, midstream & downstream AI" },
      { to: "/power-energy", label: "Power and Energy", description: "Agentic grid, storage & edge AI" },
      { to: "/defence-homeland-security", label: "Defence and Homeland Security", description: "Intelligent defence for contested environments" },
      { to: "/supply-chain-management", label: "Supply Chain Management", description: "Control tower, forecasting & logistics AI" },
      { to: "/railways", label: "Railways", description: "Rail intelligence & autonomous operations" },
      { to: "/manufacturing", label: "Manufacturing", description: "Physical AI, cobots & digital twins" },
    ],
  },
  { to: "/leadership", label: "Leadership" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoMark} alt="Benediction" className="h-11 w-auto object-contain" />
          <span className="font-display text-lg font-medium tracking-[0.28em]">
            BENEDICTION
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active =
              pathname === l.to ||
              (l.children && l.children.some((c) => c.to === pathname));
            if (l.children) {
              return (
                <div key={l.to} className="group relative">
                  <Link
                    to={l.to}
                    className={`inline-flex items-center gap-1 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                      active ? "text-accent" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    <ChevronDown className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    <div className="rounded-2xl border border-border bg-background/95 p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                      {l.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className={`block rounded-xl px-4 py-3 transition-colors ${
                            pathname === c.to
                              ? "bg-secondary text-accent"
                              : "text-foreground/85 hover:bg-secondary hover:text-accent"
                          }`}
                        >
                          <div className="font-display text-[0.8rem] font-semibold tracking-wide">
                            {c.label}
                          </div>
                          {c.description && (
                            <div className="mt-0.5 text-xs text-muted-foreground">
                              {c.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] transition-colors ${
                  active ? "text-accent" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Link to="/contact" className="btn-hero ml-4 !px-6 !py-2.5 !text-[0.65rem]">
            Request Demo
          </Link>
        </div>



        <button
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <div key={l.to}>
                  <Link
                    to={l.to}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      pathname === l.to ? "bg-secondary text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                  {l.children && (
                    <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-border pl-3">
                      {l.children
                        .filter((c) => c.to !== l.to)
                        .map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className={`rounded-md px-2 py-1.5 text-xs ${
                              pathname === c.to
                                ? "text-accent"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {c.label}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ))}

              <Link to="/contact" className="btn-hero mt-2 justify-center !text-sm">
                Request Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
