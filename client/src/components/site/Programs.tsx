/**
 * Programs — 모집중 프로그램 (사용자 행동 유도의 핵심)
 * UX 고도화: 상태 배지 + D-day + 카테고리 필터 탭 + 직접 신청 CTA
 */
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROGRAMS, type Program } from "@/lib/site-data";
import { toast } from "sonner";

const STATUS_STYLES: Record<Program["status"], { label: string; cls: string; dot: string }> = {
  open: {
    label: "모집중",
    cls: "bg-amber/15 text-amber-foreground ring-1 ring-amber/40",
    dot: "bg-amber",
  },
  upcoming: {
    label: "모집예정",
    cls: "bg-primary/10 text-primary ring-1 ring-primary/30",
    dot: "bg-primary",
  },
  closed: {
    label: "모집마감",
    cls: "bg-muted text-muted-foreground ring-1 ring-border",
    dot: "bg-muted-foreground/50",
  },
};

const CATEGORIES = ["전체", "인재양성", "연구개발", "창업지원", "지역정주", "교육지원"];

export function Programs() {
  const [active, setActive] = useState<string>("전체");

  const filtered = useMemo(() => {
    if (active === "전체") return PROGRAMS;
    return PROGRAMS.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="programs" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary uppercase">
              <span className="block w-8 h-px bg-primary" />
              Programs
            </div>
            <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl tracking-tight leading-tight">
              지금, 참여할 수 있는 <br />
              <span className="text-primary">RISE 프로그램</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
              학생, 교수, 기업 관계자 모두를 위한 다양한 프로그램이 진행 중입니다. 모집 상태와 마감일을 확인하고 지금 바로 신청하세요.
            </p>
          </div>

          <Button
            variant="ghost"
            onClick={() => toast.info("전체 프로그램 페이지는 준비 중입니다.")}
            className="self-start lg:self-end h-11 px-4 text-primary hover:text-pine hover:bg-primary/5 font-semibold group"
          >
            전체 프로그램 보기
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={[
                "h-10 px-4 rounded-full text-sm font-semibold transition-all",
                active === c
                  ? "bg-foreground text-background shadow-md"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30",
              ].join(" ")}
            >
              {c}
              <span className="ml-1.5 text-xs opacity-70 font-numeric">
                {c === "전체"
                  ? PROGRAMS.length
                  : PROGRAMS.filter((p) => p.category === c).length}
              </span>
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => {
              const s = STATUS_STYLES[p.status];
              return (
                <motion.article
                  layout
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative flex flex-col rounded-3xl bg-card border border-border/70 p-6 lg:p-7 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`inline-flex items-center gap-1.5 h-7 px-2.5 rounded-full text-xs font-bold ${s.cls}`}>
                      <span className={`size-1.5 rounded-full ${s.dot} ${p.status === "open" ? "animate-pulse" : ""}`} />
                      {s.label}
                    </span>
                    <Badge variant="secondary" className="text-[11px] font-semibold tracking-tight">
                      {p.category}
                    </Badge>
                  </div>

                  <h3 className="font-display font-bold text-lg lg:text-xl leading-snug tracking-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="mt-5 space-y-1.5 pb-5 border-b border-dashed border-border">
                    <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                      <Calendar className="size-3.5 text-primary/70" />
                      <span className="font-numeric">{p.startDate}</span>
                      <span>—</span>
                      <span className="font-numeric">{p.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                      <Users className="size-3.5 text-primary/70" />
                      <span>{p.target}</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    {p.status === "open" && p.daysLeft !== undefined ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-numeric font-bold text-2xl text-amber">D-{p.daysLeft}</span>
                        <span className="text-xs text-muted-foreground">남음</span>
                      </div>
                    ) : p.status === "upcoming" ? (
                      <span className="text-xs text-muted-foreground font-semibold">곧 모집 시작</span>
                    ) : (
                      <span className="text-xs text-muted-foreground font-semibold">접수 마감</span>
                    )}

                    <button
                      onClick={() =>
                        toast.info(p.status === "open" ? `${p.title}\n신청 페이지로 이동합니다.` : "해당 프로그램 상세는 준비 중입니다.")
                      }
                      className={[
                        "inline-flex items-center gap-1 h-9 px-3.5 rounded-full text-sm font-semibold transition-all",
                        p.status === "open"
                          ? "bg-primary text-primary-foreground hover:bg-pine shadow-md shadow-primary/20"
                          : "bg-secondary text-secondary-foreground hover:bg-muted",
                      ].join(" ")}
                    >
                      {p.status === "open" ? "신청하기" : "상세보기"}
                      <ArrowRight className="size-3.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
