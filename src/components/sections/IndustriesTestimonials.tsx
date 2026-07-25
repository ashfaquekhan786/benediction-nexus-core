import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const leaders: { role: string; org: string }[] = [
  { role: "General Manager", org: "Indian Oil Corporation Limited" },
  { role: "Executive Director", org: "GAIL" },
  { role: "Executive Director", org: "ONGC" },
  { role: "General Manager", org: "BPCL" },
  { role: "Executive Director", org: "HPCL" },
  { role: "General Manager", org: "IGL" },
  { role: "General Manager", org: "MNGL" },
  { role: "CEO", org: "IGGL" },
  { role: "General Manager", org: "Haldia Petrochemicals Limited" },
  { role: "General Manager", org: "Mangalore Refinery and Petrochemicals Limited" },
  { role: "Executive Director", org: "CPCL" },
  { role: "General Manager", org: "Reliance Industries Limited" },
  { role: "Executive Director", org: "HMEL" },
  { role: "General Manager", org: "PIL" },
  { role: "General Manager", org: "Essar Oil and Gas" },
  { role: "General Manager", org: "GSPL" },
  { role: "Executive Director", org: "OIL" },
  { role: "Head of Operations", org: "Cairn Oil and Gas" },
  { role: "Chief General Manager", org: "IRCON" },
  { role: "Executive Director", org: "National High Speed Rail Corporation Limited" },
  { role: "Chief Engineer", org: "Indian Railways" },
  { role: "Head of the Department", org: "Indian Institute of Technology" },
  { role: "Director", org: "IIIT" },
  { role: "Head of the Department", org: "All India Institute of Medical Sciences" },
  { role: "Head of the Department", org: "Sir Ganga Ram Hospital" },
  { role: "Senior Consultant", org: "Max Super Speciality Hospital" },
  { role: "Consultant", org: "Apollo Hospital" },
  { role: "Senior Consultant", org: "Breach Candy Hospital, Mumbai" },
  { role: "Consultant", org: "Jaslok Hospital, Mumbai" },
  { role: "Senior Consultant", org: "Kokilaben Hospital, Mumbai" },
  { role: "Senior Consultant", org: "Medanta Medicity Hospital" },
  { role: "Head of the Department", org: "Manipal Hospital" },
  { role: "Senior Consultant", org: "Christian Medical College, Vellore" },
  { role: "Head of the Department", org: "Fortis Hospital" },
  { role: "Senior Consultant", org: "Narayana Hrudayalaya" },
  { role: "Senior Consultant", org: "Dr. Agarwals Eye Hospital" },
  { role: "Consultant", org: "Birla Heart" },
  { role: "Senior Consultant", org: "Belle Vue" },
  { role: "Senior Consultant", org: "Kailash Group of Hospitals" },
  { role: "Senior Consultant", org: "Hinduja Healthcare" },
  { role: "Senior Consultant", org: "Gleneagles Global Hospitals" },
  { role: "Senior Consultant", org: "Metro Hospitals" },
  { role: "Senior Consultant", org: "Yatharth Hospitals" },
  { role: "Senior Consultant", org: "Wockhardt Hospital" },
];

const quotes = [
  "Benediction has transformed how we monitor, protect, and optimise mission-critical operations across our facilities.",
  "Their engineering discipline and AI expertise are a class apart — outcomes are measurable from day one.",
  "A partner we trust for the most sensitive workloads. Explainable, auditable, and always on.",
  "From threat detection to operational intelligence, Benediction consistently exceeds expectations.",
  "The team blends deep domain knowledge with world-class technology — a rare combination.",
  "Deployment was seamless and the impact on our uptime and safety posture was immediate.",
  "Benediction's platforms give our leadership real visibility and real control over risk.",
  "An indispensable technology partner for our modernisation and digital transformation journey.",
];

export function IndustriesTestimonials() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Voices of Industry"
          title={
            <>
              Trusted by leaders across{" "}
              <span className="text-gradient">energy, infrastructure &amp; healthcare</span>
            </>
          }
          description="Senior professionals from India's most respected enterprises and institutions share their confidence in Benediction."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((l, i) => (
            <motion.figure
              key={`${l.role}-${l.org}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="glass-card flex h-full flex-col p-6"
            >
              <Quote className="h-5 w-5 text-accent/70" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{quotes[i % quotes.length]}&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-display text-sm font-semibold">{l.role}</p>
                <p className="text-xs text-muted-foreground">{l.org}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
