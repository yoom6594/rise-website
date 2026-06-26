/**
 * Greetings — 센터소개 ▸ 인사말 서브페이지
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Cyan Teal + Amber, 곡선 웨이브)
 * 구조: Header → SubHero(웨이브) → SubLayout[Breadcrumb + LNB + 본문]
 * 본문: 인사말 단락(좌) + 단장 사진(우, 텍스트 배너 없음) + 서명
 */
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Header } from "@/components/site/Header";
import SubHero from "@/components/site/SubHero";
import SubLayout from "@/components/site/SubLayout";
import { OneViewFooter } from "@/components/site/OneViewFooter";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { ABOUT_LNB, GREETING_CONTENT, ASSETS } from "@/lib/site-data";

export default function Greetings() {
  const g = GREETING_CONTENT;

  return (
    <div className="min-h-screen bg-background">
      <Header forceTone />

      <SubHero eyebrow={g.eyebrow} title={g.pageTitle} subtitle={g.pageSubtitle} />

      <SubLayout
        lnb={ABOUT_LNB}
        activeHref="/intro/greetings"
        breadcrumb={[
          { label: "센터소개", href: "/intro/greetings" },
          { label: "인사말" },
        ]}
      >
        {/* 본문: 좌 인사말 / 우 단장 사진 */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
          {/* 인사말 본문 */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 min-w-0 lg:order-1"
          >
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-sm font-bold text-primary">{g.badge}</span>
            </div>

            {/* 헤드라인 */}
            <div className="relative mt-5">
              <Quote className="absolute -left-1 -top-3 h-10 w-10 text-primary/10" strokeWidth={1.5} />
              <h2 className="relative whitespace-pre-line font-display text-2xl font-extrabold leading-snug text-foreground sm:text-[28px] lg:text-[32px]">
                {g.headline}
              </h2>
            </div>
            <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-teal" />

            {/* 단락 */}
            <div className="mt-7 space-y-5 text-[15px] leading-[1.95] text-foreground/80 sm:text-base">
              {g.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg font-semibold text-foreground" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* 서명 */}
            <div className="mt-9 flex items-end justify-end gap-3 border-t border-dashed border-border pt-6">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{g.signOff}</p>
                <p className="font-display text-xl font-extrabold tracking-wide text-foreground">
                  {g.signName}
                </p>
              </div>
            </div>
          </motion.article>

          {/* 단장 사진 (우측, 텍스트 배너 없음) */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start"
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_18px_48px_-24px_oklch(0.34_0.18_264/0.45)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={ASSETS.directorPortrait}
                  alt="RISE 사업단장"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="border-t border-border px-5 py-4 text-center">
                <p className="text-sm text-muted-foreground">{g.signOff}</p>
                <p className="font-display text-lg font-extrabold text-foreground">{g.signName}</p>
              </div>
            </div>
          </motion.aside>
        </div>
      </SubLayout>

      <OneViewFooter />
      <FloatingCTA />
    </div>
  );
}
