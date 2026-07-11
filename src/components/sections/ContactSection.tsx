import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Linkedin, UserRound, CheckCircle2, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const inputClass =
  "w-full rounded-lg border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/50 transition-colors";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative border-t border-border bg-surface/25 py-24 sm:py-32">
      <div className="glow-orb right-[-8%] top-[10%] h-[380px] w-[380px] bg-primary/15" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Book a Demo. <span className="text-gradient">See Benediction in Action.</span>
            </>
          }
          description="Talk to our team about intelligent cybersecurity, defence autonomy, and AI-driven operations for your organization."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-7">
              <h3 className="font-display text-lg font-semibold">Get in Touch</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-accent">
                    <UserRound className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="font-medium">Mr. Sumer Biswas</p>
                    <p className="text-xs text-muted-foreground">Business Director</p>
                  </div>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-accent">
                    <Mail className="h-4.5 w-4.5" />
                  </span>
                  <a href="mailto:businessdirector@benedictions.in" className="transition-colors hover:text-accent">
                    businessdirector@benedictions.in
                  </a>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-accent">
                    <Phone className="h-4.5 w-4.5" />
                  </span>
                  <a href="tel:+919599459721" className="transition-colors hover:text-accent">
                    +91-9599459721
                  </a>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-accent">
                    <Linkedin className="h-4.5 w-4.5" />
                  </span>
                  <a
                    href="https://www.linkedin.com/in/sumer-biswas-7a923ba7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    Connect on LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Google Maps placeholder — replace the iframe src with your location embed */}
            <div className="glass-card relative overflow-hidden !p-0">
              <div className="cyber-grid flex h-56 items-center justify-center bg-background/40">
                <div className="text-center">
                  <MapPin className="mx-auto h-8 w-8 text-accent" />
                  <p className="mt-2 text-sm font-medium">Google Maps</p>
                  <p className="text-xs text-muted-foreground">Location embed placeholder</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-14 w-14 text-accent" />
                <h3 className="mt-5 font-display text-xl font-bold">Request Received</h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thank you for your interest in Benediction. Our team will reach out shortly to schedule your demo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid gap-5 sm:grid-cols-2"
              >
                <div>
                  <label htmlFor="fullName" className="mb-1.5 block text-xs font-medium text-muted-foreground">Full Name</label>
                  <input id="fullName" name="fullName" required className={inputClass} placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-medium text-muted-foreground">Company Name</label>
                  <input id="company" name="company" required className={inputClass} placeholder="Acme Corp" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted-foreground">Business Email</label>
                  <input id="email" name="email" type="email" required className={inputClass} placeholder="jane@company.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-muted-foreground">Phone Number</label>
                  <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+91 ..." />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="country" className="mb-1.5 block text-xs font-medium text-muted-foreground">Country</label>
                  <input id="country" name="country" className={inputClass} placeholder="India" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted-foreground">Message</label>
                  <textarea id="message" name="message" rows={4} className={inputClass} placeholder="Tell us about your security requirements..." />
                </div>
                <div className="flex items-start gap-2.5 sm:col-span-2">
                  <input id="privacy" type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-input bg-background accent-[var(--primary)]" />
                  <label htmlFor="privacy" className="text-xs text-muted-foreground">
                    I agree to the Privacy Policy.
                  </label>
                </div>
                <div className="flex flex-wrap gap-3 sm:col-span-2">
                  <button type="submit" className="btn-hero">Book a Demo</button>
                  <button type="submit" className="btn-ghost-glow">Submit Request</button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
