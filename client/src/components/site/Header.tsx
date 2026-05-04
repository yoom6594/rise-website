/**
 * Header — RISE 사업단 통합 플랫폼
 * Style: Organic Tech Bloom (Deep Teal + Amber)
 * UX: 스크롤 상태에 따라 반투명 배경 + 백드롭 블러 적용, 상단 인포바 + 메인 GNB 분리
 */
import { useEffect, useState } from "react";
import { ChevronDown, Globe, LogIn, Menu, Search, UserPlus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/lib/site-data";
import { toast } from "sonner";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const placeholder = (label: string) => () => toast.info(`${label} 페이지는 준비 중입니다.`);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_0_rgba(15,118,110,0.06)]"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* Top utility bar */}
      <div
        className={[
          "hidden lg:block border-b transition-colors",
          scrolled ? "border-border/40" : "border-white/10",
        ].join(" ")}
      >
        <div className="container flex h-9 items-center justify-end gap-5 text-xs">
          <a
            onClick={placeholder("사이트맵")}
            className={[
              "transition-colors",
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white",
            ].join(" ")}
          >
            사이트맵
          </a>
          <a
            onClick={placeholder("관련 사이트")}
            className={[
              "transition-colors",
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white",
            ].join(" ")}
          >
            관련 사이트
          </a>
          <span className={scrolled ? "text-border" : "text-white/20"}>|</span>
          <button
            onClick={placeholder("언어 변경")}
            className={[
              "flex items-center gap-1 transition-colors",
              scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white",
            ].join(" ")}
          >
            <Globe className="size-3" />
            KOR
            <ChevronDown className="size-3" />
          </button>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex h-16 lg:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative size-9 lg:size-10 grid place-items-center rounded-xl bg-gradient-to-br from-primary to-pine text-primary-foreground shadow-lg shadow-primary/25">
            <span className="font-numeric text-sm font-bold tracking-tight">R</span>
            <span className="absolute -right-1 -bottom-1 size-3 rounded-full bg-amber border-2 border-background" />
          </span>
          <div className="flex flex-col leading-none">
            <span
              className={[
                "text-[10px] tracking-[0.18em] font-medium",
                scrolled ? "text-muted-foreground" : "text-white/70",
              ].join(" ")}
            >
              REGIONAL · INNOVATION · SYSTEM
            </span>
            <span
              className={[
                "font-display font-bold text-base lg:text-lg tracking-tight mt-0.5",
                scrolled ? "text-foreground" : "text-white",
              ].join(" ")}
            >
              RISE 사업단
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex items-center">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="relative group">
                <a
                  href={item.href}
                  className={[
                    "relative inline-flex items-center px-5 py-3 text-[15px] font-semibold tracking-tight transition-colors",
                    scrolled
                      ? "text-foreground/85 hover:text-primary"
                      : "text-white/95 hover:text-amber",
                  ].join(" ")}
                >
                  {item.label}
                  <span
                    className={[
                      "absolute left-5 right-5 -bottom-0.5 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                      scrolled ? "bg-primary" : "bg-amber",
                    ].join(" ")}
                  />
                </a>
                {item.children && (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-2 w-56">
                    <div className="rounded-xl border border-border/60 bg-popover/95 backdrop-blur-xl shadow-xl shadow-primary/5 overflow-hidden">
                      <ul className="py-2">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <a
                              href={c.href}
                              className="flex items-center justify-between px-4 py-2.5 text-sm text-popover-foreground/85 hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {c.label}
                              <ChevronDown className="size-3.5 -rotate-90 opacity-50" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 lg:gap-2">
          <button
            onClick={placeholder("검색")}
            aria-label="검색"
            className={[
              "size-10 grid place-items-center rounded-full transition-colors",
              scrolled
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
              scrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10",
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
              scrolled
                ? "text-foreground/80 hover:bg-accent"
                : "text-white/90 hover:bg-white/10",
            ].join(" ")}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-background shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span className="font-display font-bold text-lg">메뉴</span>
              <button onClick={() => setOpen(false)} className="size-9 grid place-items-center rounded-full hover:bg-accent">
                <X className="size-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3">
              {NAV_ITEMS.map((item) => (
                <details key={item.label} className="group border-b border-border/60">
                  <summary className="flex items-center justify-between py-4 px-3 font-semibold text-foreground cursor-pointer list-none">
                    {item.label}
                    <ChevronDown className="size-4 transition-transform group-open:rotate-180 text-muted-foreground" />
                  </summary>
                  <ul className="pb-3 px-3 space-y-1">
                    {item.children?.map((c) => (
                      <li key={c.label}>
                        <a href={c.href} onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                          {c.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
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
