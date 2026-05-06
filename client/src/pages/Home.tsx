/**
 * Home — RISE 사업단 One-View 메인 페이지
 * Style: Organic Tech Bloom (Deep Teal #0F766E + Sun Amber #F59E0B)
 *
 * 사용자 요구:
 *  - 스크롤 없이 한 화면에 핵심 정보 노출
 *  - 위젯 형태(공지사항·뉴스·사업성과)
 *  - 8대 단위과제 직관 네비게이션
 *
 * 레이아웃 (Desktop ≥ lg):
 *  ┌──────────────────────────── Header (h-9 utility + h-20 main) ─────────────────────────────┐
 *  │ ┌── Hero (좌: 카피·슬라이드) ──┐ ┌── 8대 단위과제 그리드 (4×2) ──┐ │
 *  │ │                                │ │                                │ │
 *  │ └────────────────────────────────┘ └────────────────────────────────┘ │
 *  │ ┌── SNS ──┐ ┌── 공지/뉴스/성과 위젯 (탭) ────────────────────────────┐ │
 *  │ └─────────┘ └────────────────────────────────────────────────────────┘ │
 *  └─────────────────────────────────── Footer (compact) ─────────────────────────────────────┘
 *
 * 풀 정보형 페이지는 /full 라우트로 보존.
 */
import { Header } from "@/components/site/Header";
import { OneViewBoard } from "@/components/site/OneViewBoard";
import { UnitTaskNav } from "@/components/site/UnitTaskNav";
import { OneViewHero } from "@/components/site/OneViewHero";
import { OneViewFooter } from "@/components/site/OneViewFooter";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { ASSETS } from "@/lib/site-data";

export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-foreground text-foreground"
      style={{
        backgroundImage: `url(${ASSETS.oneViewHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background scrim — 가독성을 위한 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/55 via-foreground/35 to-foreground/70 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(15,118,110,0.45),transparent_60%)] pointer-events-none" />

      <Header forceTone={false} />

      {/* Main One-View grid */}
      <main className="relative z-10 pt-[116px] lg:pt-[116px]">
        <div className="container">
          {/* Row 1: Hero + Unit task nav */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-7 xl:col-span-7 min-h-[300px] lg:min-h-[360px]">
              <OneViewHero />
            </div>
            <div className="lg:col-span-5 xl:col-span-5">
              <UnitTaskNav />
            </div>
          </div>

          {/* Row 2: Board widget (공지/뉴스/사업성과) + SNS strip */}
          <div className="mt-5 lg:mt-6">
            <OneViewBoard />
          </div>
        </div>

        <OneViewFooter />
      </main>

      <FloatingCTA />
    </div>
  );
}
