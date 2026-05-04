/**
 * Partners — 협력 기관 무한 마퀴
 */
import { PARTNERS } from "@/lib/site-data";

export function Partners() {
  const items = [...PARTNERS, ...PARTNERS]; // duplicate for seamless loop

  return (
    <section className="relative py-16 border-t border-border bg-background">
      <div className="container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
            <span className="block w-8 h-px bg-border" />
            함께하는 기관
            <span className="block w-8 h-px bg-border" />
          </div>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-3 w-max animate-marquee-x">
            {items.map((p, i) => (
              <div
                key={i}
                className="flex-none h-16 px-7 rounded-2xl bg-secondary/50 border border-border/50 grid place-items-center font-bold text-base tracking-tight text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card transition-colors"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
