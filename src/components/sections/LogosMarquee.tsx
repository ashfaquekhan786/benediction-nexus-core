export type LogoBrand = { name: string; domain: string };

const LOGO_TOKEN = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY as string | undefined;

function BrandTile({ brand }: { brand: LogoBrand }) {
  const src = LOGO_TOKEN
    ? `https://img.logo.dev/${brand.domain}?token=${LOGO_TOKEN}&size=200&format=png&retina=true`
    : `https://logo.clearbit.com/${brand.domain}?size=200`;
  return (
    <div className="mx-4 flex h-24 min-w-[200px] items-center justify-center rounded-xl border border-border/60 bg-white/80 px-8 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_10px_30px_-20px_rgba(0,0,0,0.25)] backdrop-blur-md transition-all hover:border-accent/60 hover:shadow-[0_0_0_1px_rgba(198,161,91,0.35),0_20px_40px_-24px_rgba(198,161,91,0.35)]">
      <img
        src={src}
        alt={`${brand.name} logo`}
        loading="lazy"
        decoding="async"
        className="max-h-14 max-w-[160px] object-contain"
        onError={(e) => {
          const img = e.currentTarget;
          const parent = img.parentElement;
          if (!parent) return;
          img.style.display = "none";
          if (!parent.querySelector("[data-fallback]")) {
            const span = document.createElement("span");
            span.setAttribute("data-fallback", "true");
            span.className =
              "font-display text-base font-semibold tracking-[0.18em] text-foreground/85 whitespace-nowrap uppercase text-center";
            span.textContent = brand.name;
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
}

export function LogosMarquee({ brands }: { brands: LogoBrand[] }) {
  const mid = Math.ceil(brands.length / 2);
  const row1 = brands.slice(0, mid);
  const row2 = brands.slice(mid);

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max animate-marquee">
          {[...row1, ...row1].map((b, i) => (
            <BrandTile key={`r1-${i}`} brand={b} />
          ))}
        </div>
      </div>
      {row2.length > 0 && (
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee-track flex w-max animate-marquee-slow">
            {[...row2, ...row2].map((b, i) => (
              <BrandTile key={`r2-${i}`} brand={b} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
