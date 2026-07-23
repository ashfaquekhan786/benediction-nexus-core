import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { LogosMarquee, type LogoBrand } from "@/components/sections/LogosMarquee";

const agencyLogos: LogoBrand[] = [
  { name: "Indian Army", domain: "indianarmy.nic.in" },
  { name: "Indian Air Force", domain: "indianairforce.nic.in" },
  { name: "Indian Navy", domain: "indiannavy.nic.in" },
  { name: "Indian Coast Guard", domain: "indiancoastguard.gov.in" },
  { name: "National Security Guards", domain: "nsg.gov.in" },
  { name: "ADE", domain: "drdo.gov.in" },
  { name: "ARDE", domain: "drdo.gov.in" },
  { name: "CVRDE", domain: "drdo.gov.in" },
  { name: "DEBEL", domain: "drdo.gov.in" },
  { name: "DEAL", domain: "drdo.gov.in" },
  { name: "HAL", domain: "hal-india.co.in" },
  { name: "BEL", domain: "bel-india.in" },
  { name: "MDL", domain: "mazagondock.in" },
  { name: "BDL", domain: "bdl-india.in" },
  { name: "GRSE", domain: "grse.in" },
  { name: "BEML", domain: "bemlindia.in" },
  { name: "AVNL", domain: "avnl.co.in" },
  { name: "Assam Rifles", domain: "assamrifles.gov.in" },
  { name: "BSF", domain: "bsf.gov.in" },
  { name: "CISF", domain: "cisf.gov.in" },
  { name: "CRPF", domain: "crpf.gov.in" },
  { name: "ITBP", domain: "itbpolice.nic.in" },
  { name: "SSB", domain: "ssb.nic.in" },
  { name: "DFSS", domain: "dfs.gov.in" },
  { name: "RRU", domain: "rru.ac.in" },
  { name: "NCDC", domain: "ncdcindia.gov.in" },
  { name: "Intelligence Bureau", domain: "mha.gov.in" },
  { name: "NIA", domain: "nia.gov.in" },
  { name: "NCB", domain: "narcoticsindia.nic.in" },
  { name: "DRDO", domain: "drdo.gov.in" },
  { name: "Mumbai Police", domain: "mumbaipolice.gov.in" },
  { name: "Delhi Police", domain: "delhipolice.gov.in" },
  { name: "Bangalore Police", domain: "bcp.karnataka.gov.in" },
  { name: "Kolkata Police", domain: "kolkatapolice.gov.in" },
  { name: "Hyderabad Police", domain: "hyderabadpolice.gov.in" },
  { name: "UP Police", domain: "uppolice.gov.in" },
  { name: "Central Forensic Labs", domain: "cfslkolkata.gov.in" },
];


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

      <div className="mx-auto mt-14 max-w-[100vw]">
        <LogosMarquee brands={agencyLogos} />
      </div>
    </section>
  );
}

