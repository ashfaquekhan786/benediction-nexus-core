import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Benediction cut the time our analysts spend sorting through signals dramatically. Investigations that used to take hours now resolve in minutes — with an explainable justification behind every verdict.",
    role: "Chief Information Security Officer",
    org: "Government Research Organization",
  },
  {
    quote:
      "The platform's ability to correlate telemetry across endpoints, cloud, identity, and network gave us visibility we simply didn't have before. Deployment was seamless across our critical infrastructure.",
    role: "Head of Security Operations",
    org: "National Energy Enterprise",
  },
  {
    quote:
      "In contested environments, we need decisions we can trust. Benediction's explainable AI and fully logged automated actions meet the bar our compliance and mission requirements demand.",
    role: "Director of Cyber Defence",
    org: "Defence Organization",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted Where <span className="text-gradient">Failure Is Not an Option</span>
            </>
          }
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.org}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="glass-card glow-hover flex flex-col p-7"
            >
              <Quote className="h-7 w-7 text-accent/70" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-display text-sm font-semibold">{t.role}</p>
                <p className="text-xs text-muted-foreground">{t.org}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
