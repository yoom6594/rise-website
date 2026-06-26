/**
 * SubHero — 서브페이지 공통 히어로 배너
 * 디자인 언어: 확정 메인 시안 계승
 * - Royal Blue(#003D92) 컬러 그레이딩 배경 이미지 + 다크 블루 스크림
 * - 하단 곡선 웨이브(SVG) 디바이더로 본문과 자연스럽게 연결
 * - Space Grotesk eyebrow + Pretendard ExtraBold 타이틀
 */
import { motion } from "framer-motion";
import { ASSETS } from "@/lib/site-data";

interface SubHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  bg?: string;
}

export default function SubHero({ eyebrow, title, subtitle, bg }: SubHeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bg || ASSETS.subHeroBg}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* 다크 블루 스크림 — 텍스트 가독성 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.06_264/0.92)] via-[oklch(0.20_0.07_264/0.78)] to-[oklch(0.30_0.08_240/0.45)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.05_264/0.85)] via-transparent to-[oklch(0.16_0.05_264/0.35)]" />
      </div>

      {/* 좌측 라디얼 글로우 */}
      <div className="glow-blue absolute -left-32 top-1/3 -z-10 h-96 w-96 opacity-40 blur-2xl" />

      <div className="container">
        <div className="flex min-h-[300px] flex-col justify-center pb-24 pt-[150px] sm:min-h-[340px] lg:min-h-[380px] lg:pb-28 lg:pt-[168px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-numeric mb-3 flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-amber"
          >
            <span className="inline-block h-px w-8 bg-amber/80" />
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="font-display text-3xl font-extrabold leading-tight text-white drop-shadow-sm sm:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* 하단 곡선 웨이브 디바이더 — flat edge at bottom(y=max), 본문 배경색과 동일 */}
      <div className="absolute bottom-0 left-0 right-0 leading-[0]">
        <svg
          className="block h-[60px] w-full sm:h-[80px] lg:h-[100px]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64 C240,110 480,20 720,40 C960,60 1200,118 1440,56 L1440,100 L0,100 Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
