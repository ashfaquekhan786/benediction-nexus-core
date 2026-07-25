import { motion } from "framer-motion";
import img1 from "@/assets/healthcare-new/image.png.asset.json";
import img2 from "@/assets/healthcare-new/image-2.png.asset.json";
import img3 from "@/assets/healthcare-new/image-3.png.asset.json";
import img4 from "@/assets/healthcare-new/image-4.png.asset.json";
import img5 from "@/assets/healthcare-new/image-5.png.asset.json";
import img6 from "@/assets/healthcare-new/image-6.png.asset.json";
import img7 from "@/assets/healthcare-new/image-7.png.asset.json";
import img8 from "@/assets/healthcare-new/image-8.png.asset.json";
import img9 from "@/assets/healthcare-new/image-9.png.asset.json";
import img10 from "@/assets/healthcare-new/image-10.png.asset.json";

const gallery = [
  { src: img1.url, caption: "Interventional robotic control room" },
  { src: img2.url, caption: "Remote-controlled robotic procedure" },
  { src: img3.url, caption: "Surgical team with robotic system" },
  { src: img4.url, caption: "Remote-guided robotic OR" },
  { src: img5.url, caption: "Precision robotic surgical arm" },
  { src: img6.url, caption: "Multi-arm da Vinci-class platform" },
  { src: img7.url, caption: "Society of Robotic Surgery console" },
  { src: img8.url, caption: "VR-assisted surgical training" },
  { src: img9.url, caption: "Robotic arms operating on patient" },
  { src: img10.url, caption: "Surgical team around robotic system" },
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

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {gallery.map((g, i) => (
            <motion.figure
              key={g.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              className="group overflow-hidden rounded-xl border border-border bg-background/40"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <figcaption className="px-3 py-2 text-xs text-muted-foreground">{g.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
