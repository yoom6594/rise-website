/**
 * UnitTaskNav — 8대 단위과제 1줄 가로 네비게이션 (lg:grid-cols-8)
 * Style: White card with primary blue accent + group dots
 * UX: 카드 호버 시 primary border + amber underline + arrow shift
 * 모바일: 2x4 / 태블릿: 4x2 / 데스크톱: 8x1
 */
import { useState } from "react";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  FlaskConical,
  Globe2,
  GraduationCap,
  Handshake,
  Leaf,
  Rocket,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { UNIT_TASKS, type UnitTask } from "@/lib/site-data";
import { toast } from "sonner";

const ICON_MAP: Record<UnitTask["iconKey"], LucideIcon> = {
  graduation: GraduationCap,
  flask: FlaskConical,
  briefcase: Briefcase,
  users: Users,
  rocket: Rocket,
  globe: Globe2,
  leaf: Leaf,
  sparkles: Sparkles,
  building: Building2,
  handshake: Handshake,
};

const GROUP_DOT: Record<UnitTask["group"], string> = {
  연구개발: "bg-primary",
  인재양성: "bg-teal",
  지역사회혁신: "bg-amber",
};

const GROUP_LABEL: Record<UnitTask["group"], string> = {
  연구개발: "R&D",
  인재양성: "TALENT",
  지역사회혁신: "REGION",
};

const GROUP_TEXT: Record<UnitTask["group"], string> = {
  연구개발: "text-primary",
  인재양성: "text-teal",
  지역사회혁신: "text-amber",
};

export function UnitTaskNav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl shadow-foreground/25 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-3 pb-2.5 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <span className="size-7 grid place-items-center rounded-md bg-primary/10 text-primary">
            <Sparkles className="size-3.5" strokeWidth={2.4} />
          </span>
          <div>
            <span className="font-numeric text-[10px] tracking-[0.22em] font-bold text-primary uppercase">
              8 Unit Tasks
            </span>
            <h2 className="font-display font-bold text-foreground text-[15px] lg:text-[16px] tracking-tight leading-tight">
              8대 단위과제 바로가기
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Legend */}
          <div className="hidden md:flex items-center gap-3 text-[10px] tracking-[0.16em] font-bold text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-primary" />R&D
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-teal" />TALENT
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-amber" />REGION
            </span>
          </div>
          <button
            onClick={() => toast.info("단위과제 전체 보기는 준비 중입니다.")}
            className="text-[11px] tracking-[0.18em] font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            ALL
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>
      </div>

      {/* 8칸 1줄 그리드 — 모바일 2 / 태블릿 4 / 데스크톱 8 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-border/40">
        {UNIT_TASKS.map((task, i) => {
          const Icon = ICON_MAP[task.iconKey];
          const isHovered = hovered === task.id;
          return (
            <motion.button
              key={task.id}
              onMouseEnter={() => setHovered(task.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => toast.info(`${task.code} ${task.name} 페이지는 준비 중입니다.`)}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i, duration: 0.35, ease: "easeOut" }}
              className={[
                "group relative flex flex-col items-start gap-1.5 px-3 py-2.5 lg:py-3 text-left bg-white transition-all duration-300",
                isHovered ? "bg-mist" : "hover:bg-mist/60",
              ].join(" ")}
            >
              {/* Top accent on hover */}
              <span
                className={[
                  "absolute left-0 right-0 top-0 h-[3px] transition-transform origin-left",
                  GROUP_DOT[task.group],
                  isHovered ? "scale-x-100" : "scale-x-0",
                ].join(" ")}
              />

              {/* Code badge + group dot */}
              <div className="w-full flex items-center justify-between">
                <span
                  className={[
                    "font-numeric text-[10px] font-bold tracking-[0.14em]",
                    GROUP_TEXT[task.group],
                  ].join(" ")}
                >
                  {task.code}
                </span>
                <span className={["size-1.5 rounded-full", GROUP_DOT[task.group]].join(" ")} />
              </div>

              {/* Icon */}
              <span
                className={[
                  "size-8 grid place-items-center rounded-lg transition-all duration-300",
                  isHovered
                    ? "bg-primary text-primary-foreground scale-105"
                    : "bg-secondary text-foreground/80",
                ].join(" ")}
              >
                <Icon className="size-3.5" strokeWidth={2.2} />
              </span>

              {/* Name */}
              <div className="min-w-0 w-full">
                <div className="font-display font-bold text-[12.5px] lg:text-[13px] leading-tight tracking-tight text-foreground line-clamp-2 min-h-[2.2em]">
                  {task.name}
                </div>
              </div>

              {/* Arrow & group label */}
              <div className="w-full flex items-center justify-between mt-auto">
                <span
                  className={[
                    "font-numeric text-[9px] tracking-[0.16em] font-bold",
                    GROUP_TEXT[task.group],
                    "opacity-70",
                  ].join(" ")}
                >
                  {GROUP_LABEL[task.group]}
                </span>
                <ArrowUpRight
                  className={[
                    "size-3.5 transition-all",
                    isHovered
                      ? "opacity-100 text-primary translate-x-0"
                      : "opacity-30 -translate-x-0.5 text-muted-foreground",
                  ].join(" ")}
                />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
