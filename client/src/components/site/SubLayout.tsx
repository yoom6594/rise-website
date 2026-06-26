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

export default function SubLayout({ lnb, activeHref, breadcrumb, children }: SubLayoutProps) {
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
              <p className="font-numeric text-[11px] font-semibold tracking-[0.22em] text-amber">ABOUT</p>
              <h2 className="mt-1 font-display text-xl font-extrabold text-white">{lnb.groupLabel}</h2>
            </div>
            <nav className="p-2">
              {lnb.items.map((item) => {
                const active = item.href === activeHref;
                const hasChildren = !!item.children && item.children.length > 0;
                return (
                  <div key={item.href}>
                    <button
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

                    {/* 3Depth(TAP) 가이드 — 해당 메뉴가 활성이고 children이 있을 때 펼쳐 표시 */}
                    {hasChildren && active && (
                      <ul className="mb-1 ml-[18px] mt-1 space-y-0.5 border-l border-primary/15 pl-3">
                        {item.children!.map((sub) => (
                          <li key={sub.label}>
                            <span className="flex items-center gap-2 rounded-lg px-3 py-2 text-[13.5px] text-muted-foreground">
                              {sub.tag && (
                                <span className="font-numeric inline-flex h-5 min-w-[28px] items-center justify-center rounded-md bg-secondary px-1.5 text-[10.5px] font-bold text-primary">
                                  {sub.tag}
                                </span>
                              )}
                              <span>{sub.label}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* 본문 */}
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
