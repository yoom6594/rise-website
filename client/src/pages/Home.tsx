/**
 * Home — RISE 사업단 통합 플랫폼 메인 페이지
 * Style: Organic Tech Bloom (Deep Teal #0F766E + Sun Amber #F59E0B)
 *
 * 섹션 구성 (사용자 행동 유도 UX 흐름):
 *  1. Hero          — 핵심 슬로건 + 듀얼 CTA + 라이브 카운터
 *  2. QuickLinks    — 6개 핵심 메뉴 즉시 진입
 *  3. Programs      — 모집중 프로그램 (D-day, 신청 CTA)
 *  4. BusinessAreas — 4대 사업 분야 비주얼 카드
 *  5. Stats         — 카운팅 애니메이션으로 성과 강조
 *  6. CallToAction  — 페르소나별 진입 (학생/교수/기업)
 *  7. NoticeNews    — 공지사항/보도자료 탭
 *  8. Partners      — 협력 기관 마퀴
 *  9. Footer        — 사이트 정보, 관련 링크
 *  +  FloatingCTA   — 영구 플로팅 사업관리 플랫폼 버튼
 */
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { QuickLinks } from "@/components/site/QuickLinks";
import { Programs } from "@/components/site/Programs";
import { BusinessAreas } from "@/components/site/BusinessAreas";
import { Stats } from "@/components/site/Stats";
import { CallToAction } from "@/components/site/CallToAction";
import { NoticeNews } from "@/components/site/NoticeNews";
import { Partners } from "@/components/site/Partners";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <QuickLinks />
        <Programs />
        <BusinessAreas />
        <Stats />
        <CallToAction />
        <NoticeNews />
        <Partners />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
