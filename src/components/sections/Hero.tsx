import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { CyberBackground } from "@/components/CyberBackground";
import heroGlobe from "@/assets/hero-globe.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <CyberBackground />
      {/* Cinematic backdrop image */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage: `url(${heroGlobe})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(0.4) contrast(1.1)",
          maskImage:
            "radial-gradient(ellipse at 70% 40%, black 25%, transparent 75%)",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="glow-orb left-[-10%] top-[10%] h-[520px] w-[520px] bg-accent/15" />
      <div className="glow-orb bottom-[-15%] right-[5%] h-[420px] w-[420px] bg-glow/15" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 border-t border-b border-accent/30 px-4 py-2"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-accent" />
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.32em] text-muted-foreground">
              Patented AI · Explainable · Privacy by Design
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-10 font-display text-5xl font-normal leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            Cybersecurity <br />
            <span className="italic text-gradient-glow">for the world's</span>
            <br />
            most critical missions.
          </motion.h1>

          <div className="mt-8 gold-rule w-24" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-8 max-w-xl text-base leading-[1.85] text-muted-foreground sm:text-lg"
          >
            Protecting enterprises, governments, and critical infrastructure through
            intelligent cybersecurity, autonomous defence systems, and AI-driven operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-hero">
              Request Demo <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link to="/solutions" className="btn-ghost-glow">
              Explore Platform
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-accent/15 pt-8"
          >
            {[
              ["9M+", "Devices Protected"],
              ["30 yrs", "Of Expertise"],
              ["24/7", "Global Telemetry"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-3xl font-normal text-gradient">{v}</p>
                <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  {l}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-accent/12 blur-[120px]" />
          <div className="glass-card overflow-hidden p-2">
            <motion.img
              src={heroGlobe}
              alt="Digital globe with a global AI threat-intelligence network"
              width={1536}
              height={1024}
              className="w-full rounded-[6px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-accent/20 pt-4 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
            <span>Benediction · Est. 1995</span>
            <span className="text-accent">Global Operations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
