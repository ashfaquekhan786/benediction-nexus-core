import { motion } from "framer-motion";
import img1 from "@/assets/healthcare/robotics-1_1.jpg";
import img2 from "@/assets/healthcare/robotics-1_2.jpg";
import img3 from "@/assets/healthcare/robotics-1_3.jpg";
import img4 from "@/assets/healthcare/robotics-1_4.jpg";
import img5 from "@/assets/healthcare/robotics-2_1.jpg";
import img6 from "@/assets/healthcare/robotics-2_2.jpg";
import img7 from "@/assets/healthcare/robotics-2_3.jpg";
import img8 from "@/assets/healthcare/robotics-2_4.jpg";
import img9 from "@/assets/healthcare/robotics-2_5.jpg";
import img10 from "@/assets/healthcare/robotics-2_6.jpg";
import img11 from "@/assets/healthcare/robotics-3_1.jpg";
import img12 from "@/assets/healthcare/robotics-3_2.jpg";
import img13 from "@/assets/healthcare/robotics-3_3.jpg";
import img14 from "@/assets/healthcare/robotics-3_4.jpg";
import img15 from "@/assets/healthcare/robotics-3_5.jpg";
import img16 from "@/assets/healthcare/robotics-3_6.jpg";

const gallery = [
  { src: img1, caption: "CorPath robotic surgical system" },
  { src: img2, caption: "Surgical robot components diagram" },
  { src: img3, caption: "Remote surgery control flow" },
  { src: img4, caption: "Surgeon operating a robotic surgical system" },
  { src: img5, caption: "Console with multi-screen medical imaging" },
  { src: img6, caption: "Remote-controlled robotic procedure" },
  { src: img7, caption: "Surgical team with robotic system" },
  { src: img8, caption: "Robotic procedure with anatomy monitor" },
  { src: img9, caption: "Robotic surgical arm close-up" },
  { src: img10, caption: "Multi-arm robotic OR environment" },
  { src: img11, caption: "Robotic arm procedure in progress" },
  { src: img12, caption: "Society of Robotic Surgery console" },
  { src: img13, caption: "VR-assisted surgical training" },
  { src: img14, caption: "Surgeon at robotic viewfinder" },
  { src: img15, caption: "Robotic arms operating on patient" },
  { src: img16, caption: "Surgical team around robotic system" },
];

export function HealthcareRobotics() {
  return (
    <section id="healthcare" className="relative border-y border-border bg-surface/40 py-24 sm:py-28">
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
            Robotic surgery &amp; <span className="text-gradient">remote precision care</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Benediction partners with leading super-speciality hospitals to advance robotic surgical
            systems, remote-controlled interventions, and AI-guided imaging — extending expert care
            beyond geography and elevating outcomes across every operating room.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
              className="group overflow-hidden rounded-xl border border-border bg-background/40"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-3 py-2 text-xs text-muted-foreground">{g.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
