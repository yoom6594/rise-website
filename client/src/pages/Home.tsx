/**
 * Home — RISE 사업단 One-View 메인 페이지
 * Style: Royal Blue (#003D92) × Cyan Teal (#2D9D9F) × Amber
 *
 * 사용자 요구:
 *  - 스크롤 없이 한 화면에 핵심 정보 노출
 *  - 위젯 형태(공지사항·뉴스·사업성과)
 *  - 8대 단위과제는 1줄 가로 배치 → 공지/뉴스, 성과현황 아래
 *
 * 레이아웃 (Desktop ≥ lg):
 *  ┌───────────────── Header ─────────────────┐
 *  │ ┌─── Hero (풀너비) ───┐                  │
 *  │ │                       │                  │
 *  │ └───────────────────────┘                  │
 *  │ ┌── 공지·뉴스 ──┐ ┌── 단위과제 성과현황 ──┐│
 *  │ └───────────────┘ └───────────────────────┘│
 *  │ ┌──── 8대 단위과제 1줄 가로 그리드 ───────┐│
 *  │ └──────────────────────────────────────────┘│
 *  └────────────── Compact Footer ──────────────┘
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.34_0.18_264/0.55),transparent_60%)] pointer-events-none" />

      <Header forceTone={false} />

      {/* Main One-View grid */}
      <main className="relative z-10 pt-[104px] lg:pt-[108px]">
        <div className="container">
          {/* Row 1: Hero (풀너비) */}
          <div className="min-h-[230px] lg:min-h-[240px]">
            <OneViewHero />
          </div>

          {/* Row 2: 공지·뉴스 + 단위과제 성과현황 */}
          <div className="mt-4 lg:mt-4">
            <OneViewBoard />
          </div>

          {/* Row 3: 8대 단위과제 1줄 */}
          <div className="mt-4 lg:mt-4 pb-3">
            <UnitTaskNav />
          </div>
        </div>

        <OneViewFooter />
      </main>

      <FloatingCTA />
    </div>
  );
}
