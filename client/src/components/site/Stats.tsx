/**
 * Stats — RISE 사업 핵심 성과 지표 (라이브 카운팅 애니메이션)
 * UX: 시각적 임팩트 강조 + 신뢰감 부여
 */
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { STATS, ASSETS } from "@/lib/site-data";

function useCounter(target: number, duration = 1600, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return val;
}

function StatItem({ stat, index, inView }: { stat: typeof STATS[number]; index: number; inView: boolean }) {
  const v = useCounter(stat.value, 1600 + index * 200, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="font-numeric font-bold text-5xl lg:text-7xl tracking-tighter leading-none bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
        {v.toLocaleString()}
        <span className="text-amber">{stat.suffix}</span>
      </div>
      <div className="mt-3 lg:mt-4 font-bold text-lg lg:text-xl">{stat.label}</div>
      <div className="mt-1 text-sm text-muted-foreground">{stat.desc}</div>
    </motion.div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <img
        src={ASSETS.statsBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-background/85 -z-10" />

      <div className="container relative">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary uppercase">
            <span className="block w-8 h-px bg-primary" />
            Impact in Numbers
          </div>
          <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl tracking-tight leading-tight">
            숫자로 보는 RISE의 발자취
          </h2>
          <p className="mt-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
            지역과 대학이 함께 성장한 시간의 결과를, 정직한 데이터로 공유합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {STATS.map((s, i) => (
            <StatItem key={s.id} stat={s} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
