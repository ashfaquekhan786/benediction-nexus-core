import { SectionHeading } from "@/components/SectionHeading";
import { LogosMarquee, type LogoBrand } from "@/components/sections/LogosMarquee";

const brands: LogoBrand[] = [
  { name: "IOCL", domain: "iocl.com" },
  { name: "BPCL", domain: "bharatpetroleum.in" },
  { name: "HPCL", domain: "hindustanpetroleum.com" },
  { name: "HMEL", domain: "hmel.in" },
  { name: "IHBL", domain: "ihbl.in" },
  { name: "Alfanar", domain: "alfanar.com" },
  { name: "Kalpataru", domain: "kalpatarupower.com" },
  { name: "IRCON", domain: "ircon.org" },
  { name: "NHSRCL", domain: "nhsrcl.in" },
  { name: "CPCL", domain: "cpcl.co.in" },
  { name: "GSPC", domain: "gspcgroup.com" },
  { name: "ONGC", domain: "ongcindia.com" },
  { name: "Essar Oil", domain: "essar.com" },
  { name: "OIL India", domain: "oil-india.com" },
  { name: "MNGL", domain: "mngl.in" },
  { name: "Tata Power", domain: "tatapower.com" },
  { name: "DVC", domain: "dvc.gov.in" },
  { name: "NCRTC", domain: "ncrtc.in" },
  { name: "GAIL", domain: "gailonline.com" },
  { name: "Indian Railways", domain: "indianrailways.gov.in" },
  { name: "Power Grid", domain: "powergrid.in" },
  { name: "REC", domain: "recindia.nic.in" },
  { name: "NHPC", domain: "nhpcindia.com" },
  { name: "Cairn Energy", domain: "cairnindia.com" },
  { name: "Jindal Power", domain: "jindalpower.com" },
  { name: "Adani Energy", domain: "adanienergysolutions.com" },
  { name: "Reliance Petroleum", domain: "ril.com" },
  { name: "Reliance Power", domain: "reliancepower.co.in" },
  { name: "IGGL", domain: "iggl.co.in" },
  { name: "Delhi Transco", domain: "delhitransco.gov.in" },
  { name: "UP Power Transmission", domain: "upptcl.org" },
  { name: "Nayara Energy", domain: "nayaraenergy.com" },
  { name: "IGL", domain: "iglonline.net" },
  { name: "MGL", domain: "mahanagargas.com" },
  { name: "Sterlite Power", domain: "sterlitepower.com" },
  { name: "L&T Power", domain: "larsentoubro.com" },
  { name: "NLC India", domain: "nlcindia.in" },
  { name: "MAHATRANSCO", domain: "mahatransco.in" },
  { name: "GVK Power", domain: "gvk.com" },
  { name: "GMR", domain: "gmrgroup.in" },
  { name: "India Power", domain: "indiapower.com" },
  { name: "SJVN", domain: "sjvn.nic.in" },
  { name: "Torrent Power", domain: "torrentpower.com" },
];

export function BrandsMarquee({ heading = true }: { heading?: boolean }) {
  return (
    <section id="brands" className="relative border-y border-border bg-surface/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {heading && (
          <SectionHeading
            eyebrow="Trusted Partners"
            title={
              <>
                Powering India&apos;s <span className="text-gradient">Critical Enterprises</span>
              </>
            }
            description="Benediction is trusted by leading names across Petroleum, Power, Energy Utilities, Manufacturing, Supply Chain Management, Transport, and Infrastructure."
          />
        )}
      </div>

      <div className="mx-auto mt-12 max-w-[100vw]">
        <LogosMarquee brands={brands} />
      </div>
    </section>
  );
}

export { brands as partnerBrands };
