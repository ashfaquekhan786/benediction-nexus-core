import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Linkedin } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <span className="font-display text-sm font-bold text-primary-foreground">B</span>
              </span>
              <span className="font-display text-lg font-bold tracking-tight">BENEDICTION</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Intelligent systems for cybersecurity, defence autonomy, and industrial operations.
              Protecting enterprises, governments, and critical infrastructure worldwide.
            </p>
            <a
              href="https://www.linkedin.com/in/sumer-biswas-7a923ba7/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>

          <nav aria-label="Company">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="transition-colors hover:text-accent">About</Link></li>
              <li><Link to="/solutions" className="transition-colors hover:text-accent">Solutions</Link></li>
              <li><Link to="/industries" className="transition-colors hover:text-accent">Industries</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-accent">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Platforms">
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">Platforms</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/defence" className="transition-colors hover:text-accent">Defence</Link></li>
              <li><Link to="/operations" className="transition-colors hover:text-accent">Operations</Link></li>
              <li><span className="cursor-default">Privacy Policy</span></li>
              <li><span className="cursor-default">Terms &amp; Conditions</span></li>
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">Newsletter</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Threat intelligence and product updates, straight to your inbox.
            </p>
            {subscribed ? (
              <p className="mt-4 text-sm font-medium text-accent">Thank you for subscribing.</p>
            ) : (
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
              >
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  className="w-full rounded-full border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none"
                />
                <button type="submit" className="btn-hero !px-5 !py-2.5 !text-sm">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © 2026 Benediction. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
