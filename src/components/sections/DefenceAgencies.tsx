import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const agencies = [
  "Indian Army",
  "Indian Air Force",
  "Indian Navy",
  "Indian Coast Guard",
  "National Security Guards",
  "Aeronautical Development Establishment (ADE)",
  "Armament Research & Development Establishment (ARDE)",
  "Combat Vehicles Research & Development Establishment (CVRDE)",
  "Defence Bio-Engineering & Electro Medical Laboratory (DEBEL)",
  "Defence Electronics Applications Laboratory (DEAL)",
  "Hindustan Aeronautics Limited (HAL)",
  "Bharat Electronics Limited (BEL)",
  "Mazagon Dock Shipbuilders Limited (MDL)",
  "Bharat Dynamics Limited (BDL)",
  "Garden Reach Shipbuilders & Engineers (GRSE)",
  "Bharat Earth Movers Limited (BEML)",
  "Armoured Vehicles Nigam Limited (AVNL)",
  "Department of Internal Security",
  "Department of Border Management, Assam Rifles (AR)",
  "Border Security Force (BSF)",
  "Central Industrial Security Force (CISF)",
  "Central Reserve Police Force (CRPF)",
  "Indo-Tibetan Border Police (ITBP)",
  "Sashastra Seema Bal (SSB)",
  "Directorate of Forensic Science Services (DFSS)",
  "Rashtriya Raksha University (RRU)",
  "National Civil Defence College (NCDC)",
  "Intelligence Bureau (IB)",
  "National Investigation Agency (NIA)",
  "Narcotics Control Bureau (NCB)",
  "Defence Research & Development Organisation (DRDO)",
  "Mumbai Police",
  "Delhi Police",
  "Bangalore Police",
  "Kolkata Police",
  "Hyderabad Police",
  "Uttar Pradesh Police",
  "Central Forensic Labs (CFL)",
];

export function DefenceAgencies() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="eyebrow">Nation &amp; Allies</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Committed to the growth of our{" "}
            <span className="text-gradient">Motherland India</span> and her trusted allies
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Benediction is committed to the growth and progress of our motherland India and its
              global allies — the United States of America, Israel, United Kingdom, Europe,
              Australia, and other trusted allies of Mother India.
            </p>
            <p>
              Benediction is trusted by industry verticals such as Petroleum, Power, Energy and
              Utilities, Manufacturing, Supply Chain Management, and Healthcare Management Systems.
            </p>
            <p>
              Benediction is focussed on advancing next-generation technologies to strengthen the
              armed forces and Homeland Security of the following esteemed agencies:
            </p>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {agencies.map((a) => (
            <li
              key={a}
              className="glass-card flex items-start gap-3 p-4 text-sm leading-snug text-foreground/90"
            >
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{a}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
