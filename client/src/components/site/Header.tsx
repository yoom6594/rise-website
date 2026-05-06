/**
 * Header — RISE 사업단 통합 플랫폼
 * Style: Organic Tech Bloom (Deep Teal + Amber)
 * UX: 사용자 제공 IA(7개 1Depth) 기반 메가 드롭다운.
 *     - 호버 시 풀바이트 메가 패널 노출 (좌측 인트로 + 우측 2Depth 카드)
 *     - 3Depth(TAP)는 칩 형태로, 화면타입(HTML/PROGRAM/BOARD)은 우측 상단 뱃지로 표기
 *     - 모바일: 슬라이드 드로어, accordion + 3Depth 칩
 */
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  ImageIcon,
  LineChart,
  LogIn,
  Megaphone,
  Menu,
  Microscope,
  Search,
  Sprout,
  UserPlus,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, type NavGroup, SCREEN_TYPE_LABEL } from "@/lib/site-data";
import { toast } from "sonner";

const GROUP_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  센터소개: Compass,
  인재양성: GraduationCap,
  연구개발: Microscope,
  지역사회혁신: Sprout,
  "사업·성과관리": LineChart,
  알림마당: Megaphone,
  홍보마당: ImageIcon,
};

const SCREEN_BADGE_STYLE: Record<string, string> = {
  HTML: "bg-primary/10 text-primary border-primary/20",
  PROGRAM: "bg-amber/15 text-amber-700 border-amber/30",
  BOARD: "bg-emerald-50 text-emerald-700 border-emerald-200",
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const placeholder = (label: string) => () => toast.info(`${label} 페이지는 준비 중입니다.`);
  const navTone = scrolled || activeGroup;

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        navTone
          ? "bg-background/92 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_0_rgba(15,118,110,0.06)]"
          : "bg-transparent",
      ].join(" ")}
      onMouseLeave={() => setActiveGroup(null)}
    >
      {/* Top utility bar */}
      <div
        className={[
          "hidden lg:block border-b transition-colors",
          navTone ? "border-border/40" : "border-white/10",
        ].join(" ")}
      >
        <div className="container flex h-9 items-center justify-end gap-5 text-xs">
          <a
            onClick={placeholder("사이트맵")}
            className={[
              "transition-colors",
              navTone ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white",
            ].join(" ")}
          >
            사이트맵
          </a>
          <a
            onClick={placeholder("관련 사이트")}
            className={[
              "transition-colors",
              navTone ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white",
            ].join(" ")}
          >
            관련 사이트
          </a>
          <span className={navTone ? "text-border" : "text-white/20"}>|</span>
          <button
            onClick={placeholder("언어 변경")}
            className={[
              "flex items-center gap-1 transition-colors",
              navTone ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white",
            ].join(" ")}
          >
            <Globe className="size-3" />
            KOR
            <ChevronDown className="size-3" />
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-16 lg:h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 group shrink-0">
          <span className="relative size-9 lg:size-10 grid place-items-center rounded-xl bg-gradient-to-br from-primary to-pine text-primary-foreground shadow-lg shadow-primary/25">
            <span className="font-numeric text-sm font-bold tracking-tight">R</span>
            <span className="absolute -right-1 -bottom-1 size-3 rounded-full bg-amber border-2 border-background" />
          </span>
          <div className="flex flex-col leading-none">
            <span
              className={[
                "text-[10px] tracking-[0.18em] font-medium",
                navTone ? "text-muted-foreground" : "text-white/70",
              ].join(" ")}
            >
              ANCHOR · RISE
            </span>
            <span
              className={[
                "font-display font-bold text-base lg:text-lg tracking-tight mt-0.5",
                navTone ? "text-foreground" : "text-white",
              ].join(" ")}
            >
              RISE 사업단
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center flex-1 justify-center">
          <ul className="flex items-center">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveGroup(item.label)}
              >
                <a
                  href={item.href}
                  className={[
                    "relative inline-flex items-center px-3.5 xl:px-4 py-3 text-[15px] font-semibold tracking-tight transition-colors",
                    activeGroup === item.label
                      ? "text-primary"
                      : navTone
                        ? "text-foreground/85 hover:text-primary"
                        : "text-white/95 hover:text-amber",
                  ].join(" ")}
                >
                  {item.label}
                  {item.label === "지역사회혁신" && (
                    <span className="ml-1.5 size-1.5 rounded-full bg-amber animate-pulse" />
                  )}
                  <span
                    className={[
                      "absolute left-3.5 right-3.5 xl:left-4 xl:right-4 -bottom-0.5 h-0.5 origin-left transition-transform duration-300",
                      activeGroup === item.label ? "scale-x-100 bg-primary" : "scale-x-0",
                      navTone ? "bg-primary" : "bg-amber",
                    ].join(" ")}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 lg:gap-2 shrink-0">
          <button
            onClick={placeholder("검색")}
            aria-label="검색"
            className={[
              "size-10 grid place-items-center rounded-full transition-colors",
              navTone
                ? "text-foreground/80 hover:bg-accent hover:text-accent-foreground"
                : "text-white/90 hover:bg-white/10",
            ].join(" ")}
          >
            <Search className="size-4.5" />
          </button>
          <Button
            onClick={placeholder("로그인")}
            size="sm"
            variant="ghost"
            className={[
              "hidden md:inline-flex h-10 px-3.5 gap-1.5 font-semibold",
              navTone ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10",
            ].join(" ")}
          >
            <LogIn className="size-4" />
            로그인
          </Button>
          <Button
            onClick={placeholder("회원가입")}
            size="sm"
            className="hidden md:inline-flex h-10 px-4 gap-1.5 bg-amber hover:bg-amber/90 text-amber-foreground font-semibold shadow-md shadow-amber/30"
          >
            <UserPlus className="size-4" />
            회원가입
          </Button>
          <button
            onClick={() => setOpen(true)}
            aria-label="메뉴 열기"
            className={[
              "lg:hidden size-10 grid place-items-center rounded-full transition-colors",
              navTone ? "text-foreground/80 hover:bg-accent" : "text-white/90 hover:bg-white/10",
            ].join(" ")}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mega menu panel (desktop) */}
      <div
        className={[
          "hidden lg:block absolute inset-x-0 top-full overflow-hidden transition-all duration-300 ease-out",
          activeGroup ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="border-t border-border/60 bg-background/96 backdrop-blur-xl shadow-[0_24px_48px_-24px_rgba(15,118,110,0.25)]">
          <div className="container py-8">
            {NAV_ITEMS.filter((g) => g.label === activeGroup).map((group) => (
              <MegaPanel key={group.label} group={group} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[92%] max-w-sm bg-background shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span className="font-display font-bold text-lg">메뉴</span>
              <button
                onClick={() => setOpen(false)}
                className="size-9 grid place-items-center rounded-full hover:bg-accent"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
              {NAV_ITEMS.map((item) => {
                const Icon = GROUP_ICON[item.label] ?? FileText;
                return (
                  <details key={item.label} className="group border-b border-border/60">
                    <summary className="flex items-center justify-between py-4 px-3 font-semibold text-foreground cursor-pointer list-none">
                      <span className="flex items-center gap-2.5">
                        <Icon className="size-4 text-primary" />
                        {item.label}
                      </span>
                      <ChevronDown className="size-4 transition-transform group-open:rotate-180 text-muted-foreground" />
                    </summary>
                    <ul className="pb-3 px-3 space-y-2">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a
                            href={c.href}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2.5 rounded-lg text-sm hover:bg-accent"
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-semibold text-foreground">{c.label}</span>
                              <span
                                className={[
                                  "text-[10px] font-numeric font-semibold tracking-wider px-1.5 py-0.5 rounded border",
                                  SCREEN_BADGE_STYLE[SCREEN_TYPE_LABEL[c.screenType]],
                                ].join(" ")}
                              >
                                {SCREEN_TYPE_LABEL[c.screenType]}
                              </span>
                            </div>
                            {c.tabs && c.tabs.length > 0 && (
                              <div className="mt-1.5 flex flex-wrap gap-1">
                                {c.tabs.map((t) => (
                                  <span
                                    key={t}
                                    className="text-[11px] px-1.5 py-0.5 rounded bg-secondary text-secondary-foreground"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                );
              })}
              <div className="grid grid-cols-2 gap-2 p-3 mt-3">
                <Button onClick={placeholder("로그인")} variant="outline" className="border-primary/30 text-primary">
                  <LogIn className="size-4 mr-1" /> 로그인
                </Button>
                <Button onClick={placeholder("회원가입")} className="bg-amber hover:bg-amber/90 text-amber-foreground">
                  <UserPlus className="size-4 mr-1" /> 회원가입
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaPanel({ group }: { group: NavGroup }) {
  const Icon = GROUP_ICON[group.label] ?? FileText;
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Left column — group intro */}
      <div className="col-span-3 pr-4 border-r border-border/60">
        <div className="flex items-center gap-2.5">
          <span className="size-9 grid place-items-center rounded-lg bg-primary/10 text-primary">
            <Icon className="size-4.5" />
          </span>
          <span className="text-[11px] font-numeric tracking-[0.16em] uppercase text-muted-foreground">
            {group.label}
          </span>
        </div>
        <h3 className="mt-3 font-display font-bold text-xl leading-snug text-foreground">
          {group.tagline}
        </h3>
        <a
          href={group.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
        >
          전체 보기 <ArrowUpRight className="size-3.5" />
        </a>
      </div>

      {/* Right column — 2Depth cards */}
      <div className="col-span-9 grid grid-cols-2 xl:grid-cols-3 gap-3">
        {group.children.map((c) => {
          const badge = SCREEN_TYPE_LABEL[c.screenType];
          return (
            <a
              key={c.label}
              href={c.href}
              className={[
                "group relative rounded-xl border p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5",
                c.highlight ? "border-amber/30 bg-amber/5" : "border-border bg-card",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold text-foreground text-[15px] tracking-tight group-hover:text-primary transition-colors">
                    {c.label}
                  </div>
                  {c.desc && (
                    <p className="mt-0.5 text-[12.5px] text-muted-foreground leading-relaxed">{c.desc}</p>
                  )}
                </div>
                <span
                  className={[
                    "shrink-0 text-[10px] font-numeric font-semibold tracking-wider px-1.5 py-0.5 rounded border",
                    SCREEN_BADGE_STYLE[badge],
                  ].join(" ")}
                >
                  {badge}
                </span>
              </div>
              {c.tabs && c.tabs.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                  {c.tabs.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <ArrowUpRight className="absolute right-3 bottom-3 size-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
