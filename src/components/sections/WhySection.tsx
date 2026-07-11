import { motion } from "framer-motion";
import { Lock, BrainCircuit, Shield, Building2, Rocket, FileCheck2, Globe2, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  { icon: Lock, title: "Privacy First", body: "Customer data is never used to train models — privacy-first by design." },
  { icon: BrainCircuit, title: "AI Powered", body: "Patented AI/ML stack reasoning and deciding at machine speed." },
  { icon: Shield, title: "Military Grade", body: "Deployed across Army, Air Force, Navy, and NSG environments." },
  { icon: Building2, title: "Enterprise Ready", body: "One foundation, complete context — enterprise-ready by design." },
  { icon: Rocket, title: "Fast Deployment", body: "Ease of deployment and seamless integration with your stack." },
  { icon: FileCheck2, title: "Compliance", body: "DPDP & GDPR aligned, with fully logged automated actions." },
  { icon: Globe2, title: "Global Threat Intelligence", body: "Telemetry from millions of endpoints and global sources." },
  { icon: Users, title: "Expert Security Team", body: "A large pool of threat researchers with 3 decades of expertise." },
];

export function WhySection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Benediction"
          title={
            <>
              Advantage Benediction, <span className="text-gradient">Every Step of the Way</span>
            </>
          }
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 4) * 0.07, duration: 0.5 }}
              className="glass-card glow-hover p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/25 to-glow/20 text-accent">
                <r.icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{r.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
