/**
 * QuickLinks — 핵심 행동 유도 영역 (사용자가 가장 자주 찾는 6개 메뉴)
 * Style: Organic Tech Bloom — bento grid, hover시 amber glow
 */
import {
  Bell,
  FilePenLine,
  FolderOpen,
  HelpCircle,
  LayoutDashboard,
  MapPin,
} from "lucide-react";
import { Link } from "wouter";
import { QUICK_LINKS } from "@/lib/site-data";
import { toast } from "sonner";
import type { LucideIcon } from "lucide-react";

// 퀵링크 항목 → 게시판 경로 매핑 (없으면 준비중 toast)
const QUICK_HREF: Record<string, string> = {
  q2: "/board/notices", // 공지사항
  q4: "/board/resources", // 자료실
};

const ICONS: Record<string, LucideIcon> = {
  platform: LayoutDashboard,
  bell: Bell,
  edit: FilePenLine,
  folder: FolderOpen,
  help: HelpCircle,
  map: MapPin,
};

export function QuickLinks() {
  return (
    <section className="relative -mt-10 lg:-mt-16 z-10">
      <div className="container">
        <div className="rounded-[2rem] bg-card/95 backdrop-blur-xl border border-border/60 shadow-2xl shadow-primary/10 p-3 lg:p-5">
          <ul className="grid grid-cols-3 lg:grid-cols-6 gap-1.5 lg:gap-2">
            {QUICK_LINKS.map((q) => {
              const Icon = ICONS[q.iconKey] ?? LayoutDashboard;
              const href = QUICK_HREF[q.id];
              const innerClass =
                "group relative w-full h-full flex flex-col items-center justify-center gap-2.5 px-3 py-5 lg:py-6 rounded-2xl text-center transition-all duration-300 hover:bg-gradient-to-br hover:from-primary/5 hover:to-amber/10";
              const inner = (
                  <>
                    <span className="relative size-12 lg:size-14 grid place-items-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-pine group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:scale-110">
                      <Icon className="size-5.5 lg:size-6" strokeWidth={1.75} />
                      <span className="absolute -inset-1 rounded-2xl ring-1 ring-primary/0 group-hover:ring-amber/40 transition" />
                    </span>
                    <div>
                      <div className="font-bold text-sm lg:text-[15px] tracking-tight text-foreground">
                        {q.label}
                      </div>
                      <div className="hidden lg:block text-[11.5px] text-muted-foreground mt-0.5">
                        {q.description}
                      </div>
                    </div>
                </>
              );
              return (
                <li key={q.id}>
                  {href ? (
                    <Link href={href} className={innerClass}>
                      {inner}
                    </Link>
                  ) : (
                    <button
                      onClick={() => toast.info(`${q.label} 페이지는 준비 중입니다.`)}
                      className={innerClass}
                    >
                      {inner}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
