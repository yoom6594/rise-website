/**
 * FloatingCTA — 우측 하단 영구 떠 있는 사업관리 플랫폼 / Top 버튼
 * UX: 모든 페이지 위치에서 핵심 행동 유도 가능
 */
import { useEffect, useState } from "react";
import { ArrowUp, LayoutDashboard } from "lucide-react";
import { toast } from "sonner";

export function FloatingCTA() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 lg:right-7 lg:bottom-7 z-40 flex flex-col items-end gap-3">
      <button
        onClick={() => toast.info("사업관리 플랫폼은 준비 중입니다.")}
        className="group relative flex items-center gap-2 h-14 lg:h-16 pl-4 pr-5 rounded-full bg-gradient-to-br from-primary to-pine text-primary-foreground shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all hover:scale-[1.03]"
      >
        <span className="absolute inset-0 rounded-full ring-4 ring-primary/20 animate-ping opacity-30" />
        <span className="relative size-9 lg:size-10 grid place-items-center rounded-full bg-amber text-amber-foreground">
          <LayoutDashboard className="size-4.5" strokeWidth={2.2} />
        </span>
        <span className="relative pr-1">
          <span className="block text-[11px] tracking-[0.15em] font-medium opacity-80 leading-none">RISE</span>
          <span className="block font-bold text-[15px] tracking-tight mt-0.5 leading-none">사업관리 플랫폼</span>
        </span>
      </button>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="맨 위로"
        className={[
          "size-12 grid place-items-center rounded-full bg-card border border-border text-foreground shadow-lg hover:bg-foreground hover:text-background hover:border-foreground transition-all",
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
        ].join(" ")}
      >
        <ArrowUp className="size-4.5" />
      </button>
    </div>
  );
}
