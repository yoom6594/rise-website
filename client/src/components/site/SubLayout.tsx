/**
 * SubLayout — 서브페이지 공통 본문 레이아웃
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Teal + Amber)
 * 구조: Breadcrumb → [좌측 LNB(sticky) + 우측 본문] 2-Column
 * - LNB 항목 중 available=false 는 "준비중" toast
 * - 모바일에서는 LNB가 상단 가로 칩으로 전환
 */
import { Home, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import type { LnbSection } from "@/lib/site-data";

interface SubLayoutProps {
  lnb: LnbSection;
  activeHref: string;
  breadcrumb: { label: string; href?: string }[];
  children: React.ReactNode;
  /** LNB 헤더 영문 eyebrow (기본 ABOUT) */
  lnbEyebrow?: string;
  /** LNB 하단 문의 도움 카드 노출 여부 (기본 true) */
  showHelpCard?: boolean;
}

function go(href: string, available: boolean | undefined, label: string) {
  if (available === false) {
    toast.info(`'${label}' 페이지는 준비 중입니다.`, {
      description: "콘텐츠가 곧 업데이트될 예정입니다.",
    });
    return;
  }
  window.location.href = href;
}

export default function SubLayout({
  lnb,
  activeHref,
  breadcrumb,
  children,
  lnbEyebrow = "ABOUT",
  showHelpCard = true,
}: SubLayoutProps) {
  return (
    <div className="container pb-20 pt-6 lg:pt-8">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground">
        <a href="/" className="inline-flex items-center gap-1 transition-colors hover:text-primary">
          <Home className="h-4 w-4" />
          <span className="sr-only">홈</span>
        </a>
        {breadcrumb.map((c, i) => (
          <span key={i} className="inline-flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-border" />
            {c.href && i < breadcrumb.length - 1 ? (
              <a href={c.href} className="transition-colors hover:text-primary">
                {c.label}
              </a>
            ) : (
              <span className="font-semibold text-foreground">{c.label}</span>
            )}
          </span>
        ))}
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr] lg:gap-12">
        {/* LNB */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="bg-gradient-to-br from-primary to-pine px-6 py-5">
              <p className="font-numeric text-[11px] font-semibold tracking-[0.22em] text-amber">{lnbEyebrow}</p>
              <h2 className="mt-1 font-display text-xl font-extrabold text-white">{lnb.groupLabel}</h2>
            </div>
            <nav className="p-2">
              {lnb.items.map((item) => {
                const active = item.href === activeHref;
                return (
                  <button
                    key={item.href}
                    onClick={() => go(item.href, item.available, item.label)}
                    className={[
                      "group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] transition-all",
                      active
                        ? "bg-primary/10 font-bold text-primary"
                        : "font-medium text-foreground/80 hover:bg-secondary hover:text-primary",
                    ].join(" ")}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={[
                          "h-1.5 w-1.5 rounded-full transition-all",
                          active ? "bg-amber" : "bg-border group-hover:bg-primary/50",
                        ].join(" ")}
                      />
                      {item.label}
                    </span>
                    {active && <ChevronRight className="h-4 w-4 text-primary" />}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* LNB 하단 도움 카드 */}
          {showHelpCard && (
          <div className="mt-4 rounded-2xl border border-amber/30 bg-amber/5 p-5">
            <p className="text-sm font-bold text-foreground">문의가 필요하신가요?</p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
              사업단 운영 및 프로그램 관련 문의는 대표 연락처로 안내드립니다.
            </p>
            <a
              href="tel:041-580-2000"
              className="font-numeric mt-3 inline-block text-sm font-bold text-primary hover:underline"
            >
              041-580-2000
            </a>
          </div>
          )}
        </aside>

        {/* 본문 */}
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
