/**
 * UnitTaskNav — 8대 단위과제 직관 네비게이션 (4×2 그리드)
 * Style: Glass-morphism on top of hero background.
 * UX: 카드 호버 시 amber underline + arrow, 그룹별 컬러 점으로 카테고리 구분.
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
  연구개발: "bg-amber",
  인재양성: "bg-mist",
  지역사회혁신: "bg-emerald-300",
};

const GROUP_LABEL: Record<UnitTask["group"], string> = {
  연구개발: "R&D",
  인재양성: "TALENT",
  지역사회혁신: "REGION",
};

export function UnitTaskNav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative h-full rounded-3xl overflow-hidden border border-white/15 bg-white/8 backdrop-blur-xl shadow-2xl shadow-foreground/30">
      {/* Glow */}
      <div className="absolute -left-12 -top-12 size-48 rounded-full bg-primary/35 blur-3xl pointer-events-none" />
      <div className="absolute -right-10 -bottom-10 size-40 rounded-full bg-amber/25 blur-3xl pointer-events-none" />

      <div className="relative h-full p-5 lg:p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-end justify-between mb-3.5">
          <div>
            <span className="font-numeric text-[10px] tracking-[0.22em] font-bold text-amber uppercase">
              8 Unit Tasks
            </span>
            <h2 className="mt-1 font-display font-bold text-white text-[18px] lg:text-[20px] tracking-tight leading-tight">
              8대 단위과제 바로가기
            </h2>
          </div>
          <button
            onClick={() => toast.info("단위과제 전체 보기는 준비 중입니다.")}
            className="text-[11px] tracking-[0.16em] font-semibold text-white/70 hover:text-amber transition-colors flex items-center gap-1"
          >
            ALL
            <ArrowUpRight className="size-3.5" />
          </button>
        </div>

        {/* 2 columns × 4 rows — 좁은 사이드 패널 최적화 */}
        <div className="grid grid-cols-2 grid-rows-4 gap-2 lg:gap-2.5 flex-1">
          {UNIT_TASKS.map((task, i) => {
            const Icon = ICON_MAP[task.iconKey];
            const isHovered = hovered === task.id;
            return (
              <motion.button
                key={task.id}
                onMouseEnter={() => setHovered(task.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => toast.info(`${task.code} ${task.name} 페이지는 준비 중입니다.`)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.4, ease: "easeOut" }}
                className={[
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 lg:py-3 text-left min-h-0",
                  "border transition-all duration-300",
                  isHovered
                    ? "bg-white text-foreground border-white shadow-2xl shadow-foreground/40 -translate-y-0.5"
                    : "bg-white/10 text-white border-white/15 hover:bg-white/15",
                ].join(" ")}
              >
                {/* Group dot */}
                <span
                  className={[
                    "absolute right-2.5 top-2.5 size-1.5 rounded-full",
                    GROUP_DOT[task.group],
                  ].join(" ")}
                />

                {/* Icon */}
                <span
                  className={[
                    "shrink-0 size-9 grid place-items-center rounded-lg transition-colors",
                    isHovered
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/12 text-white",
                  ].join(" ")}
                >
                  <Icon className="size-4" />
                </span>

                {/* Code + name */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-numeric text-[10px] font-bold tracking-wider text-amber">
                      {task.code}
                    </span>
                    <span className={[
                      "font-numeric text-[9px] tracking-[0.14em] font-semibold",
                      isHovered ? "text-muted-foreground" : "text-white/55",
                    ].join(" ")}>
                      {GROUP_LABEL[task.group]}
                    </span>
                  </div>
                  <div className="font-display font-bold text-[13px] leading-tight tracking-tight truncate">
                    {task.name}
                  </div>
                </div>

                {/* Arrow on hover */}
                <ArrowUpRight
                  className={[
                    "shrink-0 size-3.5 transition-all",
                    isHovered ? "opacity-100 text-primary translate-x-0" : "opacity-0 -translate-x-1",
                  ].join(" ")}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-3 lg:mt-3.5 flex items-center justify-end gap-3 text-[10px] tracking-[0.16em] font-semibold text-white/65">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-amber" />R&D
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-mist" />TALENT
          </span>
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-emerald-300" />REGION
          </span>
        </div>
      </div>
    </div>
  );
}
