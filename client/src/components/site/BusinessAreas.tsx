/**
 * BusinessAreas — 4대 사업 분야 (인재양성/연구개발/네트워크/취·창업)
 * UX: Bento grid + 그라데이션 카드, hover시 detail reveal
 */
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { BUSINESS_AREAS, ASSETS } from "@/lib/site-data";
import { toast } from "sonner";

export function BusinessAreas() {
  return (
    <section
      id="business"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-secondary/40 via-background to-background"
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute top-20 right-0 w-96 h-96 rounded-full bg-amber/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary uppercase">
              <span className="block w-8 h-px bg-primary" />
              Business Areas
            </div>
            <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl tracking-tight leading-tight">
              4대 핵심 사업으로 만들어가는 <br className="hidden md:block" />
              <span className="font-editorial italic font-semibold text-primary">지역혁신 생태계</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-16">
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              인재양성부터 연구개발, 네트워크, 취·창업까지 — RISE 사업단은 지역과 대학이 만나는 모든 접점에서 의미 있는 변화를 만들어갑니다.
            </p>
          </div>
        </div>

        {/* Bento layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5">
          {BUSINESS_AREAS.map((area, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <motion.article
                key={area.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className={[
                  "group relative overflow-hidden rounded-3xl border border-border/40 bg-card p-7 lg:p-9 cursor-pointer transition-all duration-500 hover:border-transparent hover:shadow-2xl hover:-translate-y-1",
                  isLarge ? "lg:col-span-7" : "lg:col-span-5",
                  idx === 1 || idx === 2 ? "lg:col-span-5" : "lg:col-span-7",
                ].join(" ")}
                onClick={() => toast.info(`${area.title} 상세 페이지는 준비 중입니다.`)}
                style={{ minHeight: 280 }}
              >
                {/* Hover gradient bg */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${area.color}`} />

                <div className="relative h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground group-hover:text-white/80 transition-colors">
                        0{idx + 1} · {area.subtitle}
                      </div>
                      <h3 className="mt-3 font-display font-black text-3xl lg:text-4xl tracking-tight text-foreground group-hover:text-white transition-colors">
                        {area.title}
                      </h3>
                    </div>
                    <span className="size-12 grid place-items-center rounded-full bg-secondary text-foreground/70 group-hover:bg-white group-hover:text-foreground transition-all group-hover:rotate-45">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>

                  <p className="mt-5 text-[15px] text-muted-foreground group-hover:text-white/85 transition-colors leading-relaxed max-w-md">
                    {area.desc}
                  </p>

                  <div className="mt-auto pt-6 flex flex-wrap gap-2">
                    {area.points.map((pt) => (
                      <span
                        key={pt}
                        className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground group-hover:bg-white/15 group-hover:text-white transition-colors backdrop-blur-sm"
                      >
                        <Check className="size-3" />
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating illustration */}
                <img
                  src={area.image}
                  alt=""
                  className="absolute -right-6 -bottom-6 size-40 lg:size-48 object-contain opacity-30 group-hover:opacity-90 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                />
              </motion.article>
            );
          })}
        </div>

        {/* Banner with regional image */}
        <div className="mt-12 relative overflow-hidden rounded-3xl">
          <img src={ASSETS.regional} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-pine/95 via-pine/80 to-pine/40" />
          <div className="relative grid md:grid-cols-2 gap-6 items-center p-10 lg:p-14 text-white">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-amber">Together with Region</div>
              <h3 className="mt-3 font-display font-black text-3xl lg:text-4xl leading-tight">
                지역과 함께 그리는 <br />
                새로운 성장의 지도
              </h3>
              <p className="mt-4 text-white/80 max-w-md leading-relaxed">
                RISE 사업단은 지자체, 산업체, 시민사회와 협력하여 지역의 미래 가치를 함께 설계합니다.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              {[
                { v: "8", l: "참여 지자체" },
                { v: "32", l: "협력 강소기업" },
                { v: "47", l: "기술이전 건수" },
              ].map((item) => (
                <div key={item.l} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4 lg:p-5">
                  <div className="font-numeric font-bold text-3xl lg:text-4xl text-amber">{item.v}</div>
                  <div className="text-xs lg:text-sm text-white/80 mt-1">{item.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
