import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Radar, BrainCircuit, ScanSearch, CloudCog, Headset } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const solutions = [
  {
    icon: Radar,
    title: "Threat Intelligence",
    tagline: "Driving enterprise security with unrivalled threat intelligence.",
    body: "Benediction Threat Intel is a powerful, real-time threat intelligence platform designed to enhance cybersecurity readiness. It supports ingestion and processing of multiple feeds, leveraging telemetry from millions of endpoints and global sources — prioritizing potential risks and reducing false positives so security teams respond faster.",
    features: [
      "Real-time Threat Intelligence",
      "Threat Attribution & IOC Mapping",
      "Global Threat Context & Telemetry",
      "Multi-feed Threat Ingestion",
      "SIEM, SOAR & EDR Integrations",
      "Industry-Specific Contextualization",
    ],
  },
  {
    icon: BrainCircuit,
    title: "Agentic AI Security Operations",
    tagline: "Reasons, investigates, and decides at machine speed.",
    body: "Manual analysis can't match modern attack speed. Benediction turns alert volume into decisive action — faster investigations, clearer verdicts, and greater analyst impact, without compromising on data privacy. Every AI decision comes with an explainable Verdict Justification.",
    features: [
      "AI Analyst & AI Investigation",
      "Incident Response at Machine Speed",
      "Explainable AI Verdict Justification",
      "AI Decision Engine & Automation",
      "Investigation Notebooks & Audit Logs",
      "Pre-approved, Fully Logged Policies",
    ],
  },
  {
    icon: ScanSearch,
    title: "Vulnerability Management",
    tagline: "Continuously detect, prioritize, and remediate at scale.",
    body: "Next-generation vulnerability management securing the cloud across AWS, Azure, GCP, and Kubernetes. Complete, continuous coverage across VMs, containers, K8s clusters, and serverless functions — with 20+ vulnerability data sources and dynamic risk scoring.",
    features: [
      "AWS, Azure & Google Cloud Coverage",
      "Containers, Kubernetes & Serverless",
      "Dynamic Risk Scoring & Reachability",
      "Toxic Risk Combination Detection",
      "Natural-Language Cloud Queries",
      "AI-Driven Code Fixes at the Source",
    ],
  },
  {
    icon: CloudCog,
    title: "Cloud Security",
    tagline: "Complete, centralized visibility of your entire cloud estate.",
    body: "Designed for organizations operating in the cloud who need complete visibility — spending less time sorting through alerts and more time remediating the risks that matter most. Data is collected directly from cloud configuration and workload runtime block storage, out-of-band.",
    features: [
      "Full Cloud Visibility",
      "Cloud Posture Management",
      "Cloud Workload Protection",
      "Compliance & Audit Readiness",
      "Out-of-Band Data Collection",
      "Workload-Deep Intelligence",
    ],
  },
  {
    icon: Headset,
    title: "Managed Security Services",
    tagline: "World-class service from top-tier security professionals.",
    body: "Backed by Benediction Labs — targeted to be one of the world's largest and most effective malware analysis labs — our managed services keep your organization resilient against modern cyber risk, around the clock.",
    features: [
      "Threat Hunting — Expert-Led Intelligence",
      "Managed Detection & Response",
      "Incident Readiness & Response",
      "Digital Risk Protection Services",
      "Ransomware Recovery as a Service",
      "DPDP & GDPR Compliance Support",
    ],
  },
];

export function SolutionsSection({ full = false }: { full?: boolean }) {
  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <div className="glow-orb left-[-12%] top-[35%] h-[420px] w-[420px] bg-primary/15" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solutions"
          title={
            <>
              One Platform. <span className="text-gradient">Every Critical Security Decision.</span>
            </>
          }
          description="A holistic, platformized cybersecurity portfolio spanning threat intelligence, agentic AI operations, vulnerability management, cloud security, and managed services."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {solutions.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.12, duration: 0.55 }}
              className={`glass-card glow-hover group p-8 ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/15 text-accent transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-xs font-semibold tracking-widest text-muted-foreground/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold sm:text-2xl">{s.title}</h3>
              <p className="mt-1.5 text-sm font-medium text-accent">{s.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              {full && (
                <ul className="mt-5 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                to="/solutions"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-all group-hover:gap-3"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
