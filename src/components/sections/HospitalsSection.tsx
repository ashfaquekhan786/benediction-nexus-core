import { motion } from "framer-motion";
import { HeartPulse } from "lucide-react";
import { LogosMarquee, type LogoBrand } from "@/components/sections/LogosMarquee";

const hospitals: { name: string; domain: string }[] = [
  { name: "Apollo Hospitals", domain: "apollohospitals.com" },
  { name: "Max Super Speciality Hospital", domain: "maxhealthcare.in" },
  { name: "Medanta - The Medicity", domain: "medanta.org" },
  { name: "Fortis Memorial Research Institute", domain: "fortishealthcare.com" },
  { name: "Kokilaben Dhirubhai Ambani Hospital", domain: "kokilabenhospital.com" },
  { name: "All India Institute of Medical Sciences (AIIMS)", domain: "aiims.edu" },
  { name: "Tata Memorial Hospital", domain: "tmc.gov.in" },
  { name: "Christian Medical College (CMC)", domain: "cmch-vellore.edu" },
  { name: "PGIMER", domain: "pgimer.edu.in" },
  { name: "Mayo Clinic – Rochester", domain: "mayoclinic.org" },
  { name: "Cleveland Clinic", domain: "clevelandclinic.org" },
  { name: "The Johns Hopkins Hospital", domain: "hopkinsmedicine.org" },
  { name: "MD Anderson Cancer Center", domain: "mdanderson.org" },
  { name: "Charité - Universitätsmedizin Berlin", domain: "charite.de" },
  { name: "Karolinska University Hospital", domain: "karolinska.se" },
  { name: "Hospital Clínic de Barcelona", domain: "clinicbarcelona.org" },
  { name: "ASST Grande Ospedale Metropolitano Niguarda", domain: "ospedaleniguarda.it" },
  { name: "Asan Medical Center", domain: "amc.seoul.kr" },
  { name: "Bumrungrad International Hospital", domain: "bumrungrad.com" },
  { name: "Sunway Medical Centre", domain: "sunwaymedical.com" },
  { name: "Cleveland Clinic Abu Dhabi", domain: "clevelandclinicabudhabi.ae" },
  { name: "Aster DM Healthcare Network", domain: "asterdmhealthcare.com" },
];

const hospitalBrands: LogoBrand[] = hospitals.map((h) => ({ name: h.name, domain: h.domain }));

export function HospitalsSection() {
  return (
    <section id="hospitals" className="relative border-y border-border bg-surface/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="eyebrow">Healthcare</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            Elevating the <span className="text-gradient">Patient Curability Index</span> at leading
            super-speciality hospitals
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Benediction is working on next-generation technologies to significantly improve the
            &ldquo;patient curability index&rdquo; at the following super-speciality hospitals:
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {hospitals.map((h) => (
            <li
              key={h.name}
              className="glass-card flex items-start gap-3 p-4 text-sm leading-snug text-foreground/90"
            >
              <HeartPulse className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{h.name}</span>
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="mx-auto mt-14 max-w-[100vw]">
        <LogosMarquee brands={hospitalBrands} />
      </div>
    </section>
  );
}
