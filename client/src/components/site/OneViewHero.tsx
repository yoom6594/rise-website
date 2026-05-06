/**
 * OneViewHero — One-View 메인의 좌측 히어로 카드
 * Style: Organic Tech Bloom (Deep Teal + Sun Amber)
 * UX:
 *  - 슬라이드 인디케이터(01/02)로 사용자가 진행 상황 인지
 *  - 라벨/타이틀/짧은 카피/CTA 듀얼 버튼
 *  - 글래스 카드(투명 + 블러) 스타일로 배경 이미지와 자연스럽게 합성
 */
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle, Sparkles, TrendingUp, Users2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HERO_SLIDES, PERFORMANCE_HIGHLIGHTS } from "@/lib/site-data";
import { toast } from "sonner";

const HERO_KPI_ICONS = [Users2, TrendingUp, Sparkles];

export function OneViewHero() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = HERO_SLIDES.length;
  const slide = HERO_SLIDES[idx];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 6000);
    return () => clearInterval(t);
  }, [paused, total]);

  const go = (n: number) => setIdx(((n % total) + total) % total);

  return (
    <div
      className="relative h-full min-h-[230px] lg:min-h-[240px] rounded-3xl overflow-hidden border border-white/15 bg-foreground/15 backdrop-blur-md shadow-2xl shadow-foreground/30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Inner gradient layer for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-pine/85 via-primary/65 to-foreground/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/0 to-foreground/0 pointer-events-none" />
      <div className="absolute -right-16 -top-16 size-64 rounded-full bg-amber/30 blur-3xl pointer-events-none" />

      <div className="relative h-full px-6 py-5 lg:px-8 lg:py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
        <div className="lg:col-span-8 flex flex-col">
        {/* Slide indicator */}
        <div className="flex items-center gap-3">
          <span className="font-numeric text-[11px] tracking-[0.2em] font-semibold text-amber uppercase">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 h-[3px] rounded-full bg-white/20 overflow-hidden">
            <motion.div
              key={`${idx}-${paused}`}
              initial={{ width: "0%" }}
              animate={{ width: paused ? "30%" : "100%" }}
              transition={{ duration: paused ? 0.3 : 6, ease: "linear" }}
              className="h-full bg-amber"
            />
          </div>
          <span className="font-numeric text-[11px] tracking-[0.2em] font-semibold text-white/60">
            {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Body */}
        <div className="mt-4 lg:mt-5 flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.2em] text-amber bg-amber/20 border border-amber/40 uppercase">
                {slide.eyebrow}
              </span>
              <h1 className="mt-2.5 text-white font-display text-[24px] sm:text-[28px] lg:text-[30px] xl:text-[34px] leading-[1.18] font-extrabold tracking-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.6)]">
                {slide.title}
                <br />
                <span className="bg-gradient-to-r from-amber via-amber to-mist bg-clip-text text-transparent drop-shadow-none">
                  {slide.titleAccent}
                </span>
              </h1>
              <p className="mt-2.5 text-white/95 text-[13px] lg:text-[14px] leading-relaxed max-w-2xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)]">
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA dual */}
          <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
            <Button
              onClick={() => toast.info("사업관리 플랫폼은 준비 중입니다.")}
              className="h-10 px-4 gap-2 bg-amber hover:bg-amber/90 text-amber-foreground font-semibold shadow-xl shadow-amber/30"
            >
              사업관리 플랫폼
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("소개 영상은 준비 중입니다.")}
              className="h-10 px-4 gap-2 bg-white/10 hover:bg-white/15 border-white/30 text-white"
            >
              <PlayCircle className="size-4.5" />
              소개 영상
            </Button>
          </div>
        </div>

        </div>

        {/* 우측 핵심 KPI 카드 — 풀너비 히어로의 우측을 채워 시각 균형 확보 */}
        <div className="hidden lg:flex lg:col-span-4 flex-col gap-2.5 self-stretch">
          <div className="flex items-center justify-between mb-1">
            <span className="font-numeric text-[10px] tracking-[0.22em] font-bold text-amber uppercase flex items-center gap-1.5">
              <Sparkles className="size-3" />
              Key Indicators
            </span>
          </div>
          {PERFORMANCE_HIGHLIGHTS.slice(0, 3).map((p, i) => {
            const Icon = HERO_KPI_ICONS[i] ?? Sparkles;
            return (
              <button
                key={p.id}
                onClick={() => toast.info(`${p.label} 상세는 준비 중입니다.`)}
                className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-sm transition-all hover:-translate-y-0.5 text-left flex-1"
              >
                <span className="size-8 shrink-0 grid place-items-center rounded-lg bg-amber/25 text-amber">
                  <Icon className="size-3.5" strokeWidth={2.4} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-numeric font-extrabold text-[18px] leading-none text-white tabular-nums">
                      {p.metric}
                    </span>
                    <span className="text-[10px] font-numeric font-bold tracking-wider text-amber">
                      {p.trend}
                    </span>
                  </div>
                  <div className="mt-1 text-[11.5px] font-bold tracking-tight text-white/95 truncate">
                    {p.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Slide controls */}
        <div className="absolute right-5 lg:right-7 top-5 lg:top-7 flex items-center gap-1.5 z-10">
          <button
            aria-label="이전 슬라이드"
            onClick={() => go(idx - 1)}
            className="size-8 grid place-items-center rounded-full bg-white/12 hover:bg-white/22 text-white/90 border border-white/20 transition"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            aria-label="다음 슬라이드"
            onClick={() => go(idx + 1)}
            className="size-8 grid place-items-center rounded-full bg-white/12 hover:bg-white/22 text-white/90 border border-white/20 transition"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
