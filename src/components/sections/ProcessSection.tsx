import { motion } from "framer-motion";
import { Search, Shield, Radar, Zap, RefreshCcw } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  { icon: Search, title: "Discover", body: "Map your attack surface across devices, cloud, identity, and network — complete, continuous visibility." },
  { icon: Shield, title: "Protect", body: "Deploy Benediction aligned to your environment, with defense-in-depth across every layer." },
  { icon: Radar, title: "Detect", body: "AI-powered hunting determines whether your organization is under attack — in real time." },
  { icon: Zap, title: "Respond", body: "Move from investigation to containment at machine speed with pre-approved automated actions." },
  { icon: RefreshCcw, title: "Recover", body: "Incident readiness, ransomware recovery, and lessons operationalized — resilient by design." },
];

export function ProcessSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              From Raw Signals to <span className="text-gradient">Resilient Operations</span>
            </>
          }
        />
        <div className="relative mt-20">
          <div className="absolute left-1/2 top-6 hidden h-px w-[calc(100%-8rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-surface text-accent shadow-[var(--shadow-glow)]">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="mt-2 font-display text-xs font-semibold tracking-widest text-muted-foreground/60">
                  STEP 0{i + 1}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
