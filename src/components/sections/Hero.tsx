import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.mp4.asset.json";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-14%"]);
  const yCopy = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-6%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Cinematic background video */}
      <motion.div
        style={{ y: yVideo, scale }}
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <video
          src={heroBg.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ filter: "saturate(0.9) contrast(1.02) brightness(1.06)" }}
        />
      </motion.div>

      {/* Luminous overlays for legibility */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 40%, oklch(1 0 0 / 55%) 0%, oklch(1 0 0 / 25%) 45%, oklch(1 0 0 / 78%) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-background))",
        }}
      />

      <div className="glow-orb left-[-8%] top-[8%] h-[520px] w-[520px] bg-accent/30" />
      <div className="glow-orb bottom-[-15%] right-[0%] h-[440px] w-[440px] bg-glow/25" />

      <motion.div
        style={{ opacity }}
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8"
      >
        <motion.div style={{ y: yTitle }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 border-t border-b border-accent/40 px-4 py-2 backdrop-blur-sm"
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
            style={{ y: yCopy }}
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
            className="mt-16 grid max-w-lg grid-cols-3 gap-8 border-t border-foreground/10 pt-8"
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
        </motion.div>

        <motion.div style={{ y: yCopy }} className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-[120px]" />
            <div className="glass-card overflow-hidden p-3">
              <video
                src={heroBg.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-[6px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"
              />
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-4 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
              <span>Benediction · Est. 1995</span>
              <span className="text-accent">Global Operations</span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

