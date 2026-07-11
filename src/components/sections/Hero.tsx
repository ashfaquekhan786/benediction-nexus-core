import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { CyberBackground } from "@/components/CyberBackground";
import heroGlobe from "@/assets/hero-globe.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <CyberBackground />
      <div className="glow-orb left-[-10%] top-[10%] h-[420px] w-[420px] bg-primary/25" />
      <div className="glow-orb bottom-[-15%] right-[5%] h-[380px] w-[380px] bg-glow/20" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-4 py-1.5 backdrop-blur-md"
          >
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              Patented AI/ML · Explainable Decisions · Privacy by Design
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            AI-Powered Cybersecurity for the World&apos;s{" "}
            <span className="text-gradient-glow">Most Critical Missions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Protecting enterprises, governments, and critical infrastructure through intelligent
            cybersecurity, autonomous defence systems, and AI-driven operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-hero">
              Request Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/solutions" className="btn-ghost-glow">
              Explore Platform
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[
              ["9M+", "Devices Protected Globally"],
              ["3", "Decades of Expertise"],
              ["24/7", "Global Threat Telemetry"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-2xl font-bold text-gradient">{v}</p>
                <p className="mt-1 text-xs text-muted-foreground">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-[100px]" />
          <motion.img
            src={heroGlobe}
            alt="Digital globe with a global AI threat-intelligence network"
            width={1536}
            height={1024}
            className="w-full rounded-2xl border border-border shadow-[var(--shadow-glow)] [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)]"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
