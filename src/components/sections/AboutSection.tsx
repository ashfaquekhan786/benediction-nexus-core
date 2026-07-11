import { motion } from "framer-motion";
import { Eye, Lock, ShieldCheck, Lightbulb, Building2, Target } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const pillars = [
  {
    icon: Target,
    title: "Our Vision",
    body: "Benediction envisions a world where every business is digitally safer and more secure than the last. We are dedicated to advancing cybersecurity to ensure a protected digital environment for all.",
  },
  {
    icon: ShieldCheck,
    title: "Our Mission",
    body: "Our mission is to protect service members and civilians with intelligent systems — elevating state-of-the-art technology to production quality so it can be relied upon in the most complex and contested environments.",
  },
  {
    icon: Building2,
    title: "Who We Are",
    body: "Benediction brings a strong background of innovation, powered by next-generation technology, to collaborate with scientifically driven enterprises across the world.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Through Everything",
    body: "With a proactive product-owner mindset, we look outside the box, spot inefficiency, and suggest innovative solutions to improve technical and business performance.",
  },
  {
    icon: Eye,
    title: "Explainable AI",
    body: "Every AI decision is accompanied by an explainable Verdict Justification, so security teams always understand why the platform acted — critical for regulated and mission environments.",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    body: "Customer data is never used to train models. Automated actions fire only within pre-approved, fully logged policies — enterprise-grade privacy and compliance safeguards by default.",
  },
];

const stats = [
  { value: 9, suffix: "M+", label: "Devices Protected Globally" },
  { value: 30, suffix: "+", label: "Years of Cybersecurity Expertise" },
  { value: 250, suffix: "+", label: "Threat Researchers & Analysts" },
  { value: 4, suffix: "M", label: "Threat Telemetry Signals" },
];

export function AboutSection({ full = false }: { full?: boolean }) {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="glow-orb right-[-10%] top-[20%] h-[400px] w-[400px] bg-accent/10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Benediction"
          title={
            <>
              A Full-Stack Cybersecurity Company, <span className="text-gradient">Built for What&apos;s Next</span>
            </>
          }
          description="Benediction provides cutting-edge cybersecurity solutions designed to safeguard businesses from evolving threats. Leveraging our patented AI/ML-powered technology stack, we deliver comprehensive protection across devices, applications, networks, cloud, data, and identity."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.55 }}
              className="glass-card glow-hover p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-accent">
                <p.icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </motion.article>
          ))}
        </div>

        {full && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card mt-16 p-8 lg:p-10"
          >
            <h3 className="font-display text-2xl font-bold">
              What Sets Us Apart? <span className="text-gradient">Unmatched Security and Unparalleled Expertise</span>
            </h3>
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Protecting Over 9 Million Devices Globally",
                "Comprehensive Portfolio of On-Premise and Cloud Solutions",
                "Holistic, Platformized Cybersecurity Solution",
                "Highly Responsive Multi-channel Support",
                "Expertise in Securing Critical Infrastructure Globally",
                "Large Pool of Threat Researchers",
                "3 Decades of Cybersecurity Expertise",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center"
            >
              <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
