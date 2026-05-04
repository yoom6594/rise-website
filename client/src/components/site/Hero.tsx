/**
 * Hero — RISE 사업단 메인 비주얼
 * Style: Organic Tech Bloom — 풍부한 깊이, 글로우, 그레인 텍스처
 * UX 고도화: 핵심 슬로건 + 명확한 듀얼 CTA + 라이브 카운터, 스크롤 다운 인디케이터
 */
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MousePointer2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/site-data";
import { toast } from "sonner";

export function Hero() {
  const placeholder = (label: string) => () => toast.info(`${label}는 준비 중입니다.`);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden min-h-[100svh] grain"
    >
      {/* Background image with gradient overlays */}
      <div className="absolute inset-0 -z-20">
        <img
          src={ASSETS.hero}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-pine via-pine/85 to-primary/70" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_85%_30%,rgba(245,158,11,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_15%_90%,rgba(15,118,110,0.6),transparent_60%)]" />
      </div>

      {/* Floating organic blobs */}
      <div className="pointer-events-none absolute -z-10 top-32 right-[8%] size-72 lg:size-[28rem] bg-amber/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -z-10 bottom-20 left-[6%] size-72 lg:size-[24rem] bg-primary/35 blur-3xl animate-blob" style={{ animationDelay: "-9s" }} />

      <div className="container relative pt-36 pb-24 lg:pt-48 lg:pb-32 grid lg:grid-cols-12 gap-10 items-center">
        {/* Left: copy */}
        <div className="lg:col-span-7 text-white">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide"
          >
            <Sparkles className="size-3.5 text-amber" />
            <span>2026 RISE 통합 플랫폼 정식 오픈</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display font-black tracking-tight text-[44px] sm:text-[56px] lg:text-[76px] leading-[1.02]"
          >
            지역과 대학이 <br className="hidden sm:block" />
            <span className="relative inline-block">
              함께
              <svg
                viewBox="0 0 200 12"
                className="absolute left-0 right-0 -bottom-2 w-full h-3 text-amber"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M2 8 C 50 2, 150 12, 198 4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{" "}
            성장하는
            <br />
            <span className="bg-gradient-to-r from-amber via-amber to-amber/70 bg-clip-text text-transparent">
              혁신 생태계
            </span>
            <span className="font-editorial italic font-medium text-white/70 ml-2">, RISE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 max-w-xl text-base lg:text-lg text-white/80 leading-relaxed"
          >
            RISE 사업단은 지역혁신중심 대학지원체계를 통해 인재 양성, 연구개발, 지역
            정주를 선도합니다. 대학과 지역사회가 만나 만들어가는 새로운 가능성을 함께 열어갑니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              onClick={placeholder("프로그램 신청")}
              className="h-13 px-7 bg-amber hover:bg-amber/90 text-amber-foreground font-bold text-base shadow-2xl shadow-amber/30 group"
            >
              프로그램 참여하기
              <ArrowRight className="ml-1 size-4.5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={placeholder("사업관리 플랫폼")}
              className="h-13 px-7 bg-white/10 hover:bg-white/15 border-white/25 text-white font-semibold text-base backdrop-blur-md"
            >
              사업관리 플랫폼
              <ArrowUpRight className="ml-1 size-4.5" />
            </Button>
          </motion.div>

          {/* Live indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-10 flex items-center gap-3 text-sm text-white/70"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-amber opacity-75 animate-ping" />
              <span className="relative inline-flex size-2.5 rounded-full bg-amber" />
            </span>
            현재 <span className="font-numeric font-bold text-amber">3개</span> 프로그램이 모집중입니다
          </motion.div>
        </div>

        {/* Right: floating info card */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative">
            {/* Decorative card behind */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-amber/30 to-primary/20 blur-2xl" />

            <div className="relative rounded-3xl p-1.5 bg-gradient-to-br from-white/30 via-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl rotate-[2deg]">
              <div className="rounded-[1.4rem] overflow-hidden bg-card/95 backdrop-blur-sm">
                <img
                  src={ASSETS.collaboration}
                  alt="RISE 캡스톤 협업 모습"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-semibold tracking-wide">
                    <span className="text-primary">SUCCESS STORY</span>
                    <span className="text-muted-foreground font-numeric">2026.04</span>
                  </div>
                  <h3 className="mt-2 font-display font-bold text-xl leading-tight">
                    캡스톤 프로젝트가 만든 <br />
                    지역 스타트업, 첫 투자 유치
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    RISE 캡스톤디자인에서 시작된 학생 프로젝트가 시드 투자 5억원을 유치하며 지역 창업 생태계의 새로운 모델로 주목받고 있습니다.
                  </p>
                  <button
                    onClick={placeholder("성공 사례 보기")}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-pine transition-colors"
                  >
                    사례 자세히 보기
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating mini badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 lg:-left-8 -bottom-6 rounded-2xl bg-card/95 backdrop-blur-xl border border-border/40 shadow-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="size-10 grid place-items-center rounded-xl bg-amber/15 text-amber">
                <Sparkles className="size-5" />
              </div>
              <div>
                <div className="font-numeric font-bold text-2xl leading-none">+128</div>
                <div className="text-xs text-muted-foreground mt-0.5">참여 가족회사</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 hidden lg:flex flex-col items-center gap-2 text-white/60">
        <MousePointer2 className="size-4" />
        <span className="text-[11px] tracking-[0.3em] font-medium">SCROLL</span>
        <span className="block w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>

      {/* Bottom organic divider */}
      <svg
        className="absolute -bottom-px left-0 right-0 w-full text-background"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,40 C200,90 400,0 720,40 C1040,80 1240,10 1440,40 L1440,90 L0,90 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}
