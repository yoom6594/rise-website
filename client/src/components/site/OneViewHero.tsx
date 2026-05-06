/**
 * OneViewHero — 미니멀 히어로 (슬라이드 컨트롤을 카피·CTA 아래로 이동)
 * 배경 이미지 위에 카피·CTA만 노출하고, 진행바/좌우 화살표는 본문 하단에 배치.
 */
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HERO_SLIDES } from "@/lib/site-data";
import { toast } from "sonner";

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
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Subtle radial glow behind the copy */}
      <div className="absolute -left-10 top-0 size-72 rounded-full bg-primary/30 blur-3xl pointer-events-none" />

      <div className="relative py-2 lg:py-3">
        {/* Body */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.22em] text-amber bg-amber/15 border border-amber/40 uppercase backdrop-blur-sm">
                {slide.eyebrow}
              </span>
              <h1 className="mt-3 text-white font-display text-[28px] sm:text-[32px] lg:text-[38px] xl:text-[44px] leading-[1.15] font-extrabold tracking-tight drop-shadow-[0_2px_22px_rgba(0,0,0,0.75)]">
                {slide.title}
                <br />
                <span className="bg-gradient-to-r from-amber via-amber to-mist bg-clip-text text-transparent drop-shadow-none">
                  {slide.titleAccent}
                </span>
              </h1>
              <p className="mt-3 text-white/95 text-[14px] lg:text-[15.5px] leading-relaxed max-w-2xl drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)]">
                {slide.desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA dual */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button
              onClick={() => toast.info("사업관리 플랫폼은 준비 중입니다.")}
              className="h-11 px-5 gap-2 bg-amber hover:bg-amber/90 text-amber-foreground font-semibold shadow-xl shadow-amber/30"
            >
              사업관리 플랫폼
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("소개 영상은 준비 중입니다.")}
              className="h-11 px-4 gap-2 bg-white/10 hover:bg-white/15 border-white/40 text-white backdrop-blur-sm"
            >
              <PlayCircle className="size-4.5" />
              소개 영상
            </Button>
          </div>

          {/* Slide control row — CTA 아래 */}
          <div className="mt-5 lg:mt-6 flex items-center gap-3 max-w-2xl">
            <span className="font-numeric text-[11px] tracking-[0.22em] font-bold text-amber uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 h-[2px] rounded-full bg-white/25 overflow-hidden">
              <motion.div
                key={`${idx}-${paused}`}
                initial={{ width: "0%" }}
                animate={{ width: paused ? "30%" : "100%" }}
                transition={{ duration: paused ? 0.3 : 6, ease: "linear" }}
                className="h-full bg-amber"
              />
            </div>
            <span className="font-numeric text-[11px] tracking-[0.22em] font-bold text-white/75 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
              {String(total).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5 ml-2">
              <button
                aria-label="이전 슬라이드"
                onClick={() => go(idx - 1)}
                className="size-8 grid place-items-center rounded-full bg-white/12 hover:bg-white/22 text-white/95 border border-white/25 transition backdrop-blur-sm"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                aria-label="다음 슬라이드"
                onClick={() => go(idx + 1)}
                className="size-8 grid place-items-center rounded-full bg-white/12 hover:bg-white/22 text-white/95 border border-white/25 transition backdrop-blur-sm"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
