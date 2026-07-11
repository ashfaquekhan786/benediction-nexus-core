import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Crosshair, Satellite, Network, Cpu, RadioTower, Waypoints } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import defencePlatform from "@/assets/defence-platform.jpg";

const capabilities = [
  { icon: Waypoints, title: "AI Mission Planning & C2", body: "Command and control of swarming autonomous systems with AI sensor fusion and a real-time common operational picture." },
  { icon: Cpu, title: "Edge AI Modules", body: "End-to-end autonomous missions in contested environments — operations in GPS- and comms-jammed conditions." },
  { icon: Satellite, title: "ISR Integration", body: "Live data streams from ISR drones, spotters, and other sources integrated into a common operational target picture." },
  { icon: RadioTower, title: "Ground Station Software", body: "Operators coordinate and adapt scaled campaigns in real time — orchestrating indirect fires and strike-drone swarms." },
  { icon: Network, title: "Resilient Data Fabric", body: "Distributed data fabric for resilient communications over degraded networks, with open third-party interfaces." },
  { icon: Crosshair, title: "Scaled Precision Effects", body: "AI-driven target acquisition, localisation, assignment, and engagement with superior hit rates in EW environments." },
];

export function DefenceSection({ full = false }: { full?: boolean }) {
  return (
    <section id="defence" className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-orb right-[-8%] top-[8%] h-[460px] w-[460px] bg-glow/15" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Benediction Defence Platform"
          title={
            <>
              AI-Enabled Precision Mass, <span className="text-gradient-glow">Across All Domains</span>
            </>
          }
          description="Benediction designs and builds new types of autonomous systems, and partners with governments and industry to connect existing hardware into a new AI-enabled network — deployed thoughtfully, with the highest ethical standards."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-glow)]"
        >
          <img
            src={defencePlatform}
            alt="Animated battlefield visualization with autonomous drone swarms, satellite ISR feeds and tactical overlays"
            width={1536}
            height={1024}
            loading="lazy"
            className="h-[320px] w-full object-cover sm:h-[440px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="eyebrow">Benediction Force Multiplier</p>
            <p className="mt-2 max-w-2xl font-display text-xl font-semibold sm:text-2xl">
              The battlefield, intelligently connected — transforming the accuracy, speed, and robustness of modern land forces.
            </p>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="glass-card glow-hover p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow/15 text-glow">
                <c.icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </motion.article>
          ))}
        </div>

        {full && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card mt-12 p-8 lg:p-10"
          >
            <h3 className="font-display text-2xl font-bold">
              The End-to-End Software for <span className="text-gradient-glow">AI Pilots in Today&apos;s Fight</span>
            </h3>
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                "Operations in GPS- and comms-jammed environments",
                "Autonomous mission execution",
                "Coordinated multi-agent teaming and swarming",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-glow" />
                  {s}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              For ground combat, the platform uses AI to achieve scaled target acquisition and coordinated precision
              effects. Drones and ISR assets gain the ability to penetrate heavily contested electromagnetic warfare
              (EW) environments, while artillery systems and other effectors engage targets with superior hit rates.
              AI-aided effector assignments — surfaced through an intuitive human-machine interface — reduce load on
              the operator. Automated fire adjustment speeds up the decision chain in battle. Platform-agnostic and
              commercial dual-use, Benediction is the leading autonomy software for militaries and OEMs.
            </p>
          </motion.div>
        )}

        {!full && (
          <div className="mt-10 text-center">
            <Link to="/defence" className="btn-ghost-glow">
              Explore Defence Platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
