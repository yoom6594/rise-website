/**
 * Greetings — 센터소개 ▸ 인사말 서브페이지
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Cyan Teal + Amber, 곡선 웨이브)
 * 구조: Header → SubHero(웨이브) → SubLayout[Breadcrumb + LNB + 본문]
 * 본문: 단장 네임카드(사진/서명) + 인사말 단락 + 3대 약속 카드 + 하단 CTA
 */
import { motion } from "framer-motion";
import { Users, Compass, ShieldCheck, Quote, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/site/Header";
import SubHero from "@/components/site/SubHero";
import SubLayout from "@/components/site/SubLayout";
import { OneViewFooter } from "@/components/site/OneViewFooter";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { ABOUT_LNB, GREETING_CONTENT, ASSETS } from "@/lib/site-data";

const PILLAR_ICONS: Record<string, typeof Users> = {
  users: Users,
  compass: Compass,
  shield: ShieldCheck,
};

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
        {/* 본문: 좌 네임카드 / 우 인사말 */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* 단장 네임카드 */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_18px_48px_-24px_oklch(0.34_0.18_264/0.45)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={ASSETS.directorPortrait}
                  alt="RISE 사업단장"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[oklch(0.18_0.06_264/0.85)] to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <p className="font-numeric text-[11px] font-semibold tracking-[0.22em] text-amber">
                    DIRECTOR
                  </p>
                  <p className="mt-0.5 text-sm text-white/85">{g.signOff}</p>
                  <p className="font-display text-2xl font-extrabold">{g.signName}</p>
                </div>
              </div>
            </div>
            {/* 배지 */}
            <div className="mt-4 flex items-center justify-center gap-2 rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span className="text-sm font-bold text-primary">{g.badge}</span>
            </div>
          </motion.aside>

          {/* 인사말 본문 */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="min-w-0"
          >
            {/* 헤드라인 */}
            <div className="relative">
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

            {/* 3대 약속 카드 */}
            <div className="mt-12">
              <p className="font-numeric text-xs font-semibold tracking-[0.24em] text-teal">
                OUR COMMITMENT
              </p>
              <h3 className="mt-1.5 font-display text-xl font-extrabold text-foreground">
                RISE 사업단의 세 가지 약속
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {g.pillars.map((p, i) => {
                  const Icon = PILLAR_ICONS[p.iconKey] ?? Users;
                  return (
                    <motion.div
                      key={p.id}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.08 }}
                      className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 font-display text-base font-extrabold text-foreground">
                        {p.title}
                      </p>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* 하단 CTA */}
            <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-pine p-7 sm:p-9">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-extrabold text-white sm:text-2xl">
                    RISE 사업단의 비전이 궁금하신가요?
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    미션·비전·핵심 전략과 8대 핵심과제 추진 방향을 확인해 보세요.
                  </p>
                </div>
                <button
                  onClick={() =>
                    toast.info("'비전 및 전략' 페이지는 준비 중입니다.", {
                      description: "콘텐츠가 곧 업데이트될 예정입니다.",
                    })
                  }
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber px-6 py-3 font-bold text-amber-foreground transition-transform hover:scale-105"
                >
                  비전 및 전략 보기
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </SubLayout>

      <OneViewFooter />
      <FloatingCTA />
    </div>
  );
}
