/**
 * OneViewBoard — 공지사항 / 뉴스 / 사업성과 탭 위젯
 * UX:
 *  - 좌측: 탭 헤더 + 리스트 (3행) + MORE
 *  - 우측: 사업성과 카드 3개 항상 노출 (행동 유도용 시각 요소)
 *  - 하단: SNS 위젯 (Instagram / Blog / YouTube)
 */
import { useState } from "react";
import { ArrowUpRight, Calendar, FileText, Pin, Plus, Sparkles, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NEWS,
  NOTICES,
  PERFORMANCE_HIGHLIGHTS,
} from "@/lib/site-data";
import { Link } from "wouter";
import { toast } from "sonner";

type TabKey = "notice" | "news";

const TABS: { key: TabKey; label: string; sub: string }[] = [
  { key: "notice", label: "공지사항", sub: "Notice" },
  { key: "news", label: "뉴스", sub: "News" },
];

export function OneViewBoard() {
  const [tab, setTab] = useState<TabKey>("notice");

  const items =
    tab === "notice"
      ? NOTICES.slice(0, 3).map((n) => ({
          id: n.id,
          title: n.title,
          date: n.date,
          pinned: n.pinned,
          tag: n.type,
        }))
      : NEWS.slice(0, 3).map((n) => ({
          id: n.id,
          title: n.title,
          date: n.date,
          pinned: false,
          tag: "NEWS",
        }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
      {/* SNS strip (좌측 컴팩트) */}
      <div className="lg:col-span-3">
        <SNSWidget />
      </div>

      {/* Tab 위젯 (중앙) */}
      <div className="lg:col-span-5">
        <div className="h-full rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl shadow-foreground/25 overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-border/60">
            <div className="flex items-center gap-1">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={[
                    "relative px-3 py-2 text-[15px] font-display font-bold tracking-tight transition-colors",
                    tab === t.key ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  <span className="flex items-center gap-1.5">
                    {t.label}
                    <span className={[
                      "font-numeric text-[10px] tracking-[0.16em] font-semibold",
                      tab === t.key ? "text-amber" : "text-muted-foreground/70",
                    ].join(" ")}>
                      {t.sub}
                    </span>
                  </span>
                  {tab === t.key && (
                    <motion.span
                      layoutId="boardTabUnderline"
                      className="absolute left-3 right-3 -bottom-[1px] h-[3px] rounded-full bg-amber"
                    />
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={() => toast.info("전체 목록은 준비 중입니다.")}
              className="text-[11px] tracking-[0.18em] font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              MORE
              <Plus className="size-3" />
            </button>
          </div>

          <div className="px-2 py-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {items.map((item) => (
                  <div
                    key={item.id}
                    role="button"
                    className="group flex items-center justify-between gap-3 px-3 py-3 rounded-lg hover:bg-mist/40 cursor-pointer transition-colors"
                    onClick={() => toast.info(`${item.title} 페이지는 준비 중입니다.`)}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {item.pinned ? (
                        <span className="shrink-0 size-6 grid place-items-center rounded-md bg-amber/15 text-amber-foreground">
                          <Pin className="size-3.5 text-amber" strokeWidth={2.4} />
                        </span>
                      ) : (
                        <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[10px] font-numeric font-bold tracking-wider">
                          {item.tag}
                        </span>
                      )}
                      <span className="truncate text-[14px] font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <span className="shrink-0 flex items-center gap-2 text-[12px] font-numeric text-muted-foreground tabular-nums">
                      {item.date}
                      <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 사업성과 위젯 (우측) */}
      <div className="lg:col-span-4">
        <div className="h-full rounded-2xl bg-gradient-to-br from-primary to-pine text-primary-foreground border border-primary/30 shadow-2xl shadow-primary/30 overflow-hidden relative">
          <div className="absolute -right-10 -top-12 size-44 rounded-full bg-amber/30 blur-3xl pointer-events-none" />
          <div className="relative p-5">
            <div className="flex items-center justify-between mb-3.5">
              <div>
                <span className="font-numeric text-[10px] tracking-[0.22em] font-bold text-amber uppercase flex items-center gap-1.5">
                  <Sparkles className="size-3" />
                  Performance
                </span>
                <h3 className="mt-1 font-display font-bold text-[16px] lg:text-[17px] tracking-tight">
                  사업성과 한눈에
                </h3>
              </div>
              <Link
                href="/full"
                className="text-[11px] tracking-[0.16em] font-semibold text-white/80 hover:text-amber transition-colors flex items-center gap-1"
              >
                MORE
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {PERFORMANCE_HIGHLIGHTS.map((p) => (
                <div
                  key={p.id}
                  className="rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 p-2.5 hover:bg-white/15 transition-colors cursor-pointer"
                  onClick={() => toast.info(`${p.label} 상세는 준비 중입니다.`)}
                >
                  <div className="font-numeric font-extrabold text-[22px] lg:text-[24px] tracking-tight leading-none text-white">
                    {p.metric}
                  </div>
                  <div className="mt-1.5 text-[11px] font-bold tracking-tight text-white/95 leading-tight">
                    {p.label}
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-numeric font-bold tracking-wider bg-amber/20 text-amber border border-amber/30">
                    <TrendingUp className="size-2.5" />
                    {p.trend}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => toast.info("성과 대시보드는 준비 중입니다.")}
              className="mt-3.5 w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 border border-white/15 text-left transition-colors"
            >
              <span className="text-[12px] font-semibold text-white/95 flex items-center gap-2">
                <FileText className="size-3.5 text-amber" />
                단위과제별 성과 대시보드 열기
              </span>
              <ArrowUpRight className="size-4 text-amber" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SNSWidget() {
  const sns = [
    { id: "ig", label: "Instagram", handle: "@rise_official", color: "from-pink-500 via-rose-500 to-amber-500" },
    { id: "bl", label: "Blog", handle: "rise.tistory", color: "from-emerald-500 to-teal-600" },
    { id: "yt", label: "YouTube", handle: "RISE Channel", color: "from-red-500 to-rose-600" },
  ];

  return (
    <div className="h-full rounded-2xl bg-white/12 backdrop-blur-md border border-white/20 p-4 lg:p-5 shadow-xl shadow-foreground/20">
      <div className="flex items-center justify-between mb-3">
        <span className="font-numeric text-[10px] tracking-[0.22em] font-bold text-amber uppercase">
          SNS · Channel
        </span>
        <Calendar className="size-3.5 text-white/60" />
      </div>

      <div className="space-y-2">
        {sns.map((s) => (
          <button
            key={s.id}
            onClick={() => toast.info(`${s.label} 채널은 준비 중입니다.`)}
            className="group w-full flex items-center gap-3 p-2.5 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 transition-all hover:-translate-y-0.5"
          >
            <span className={`size-9 shrink-0 rounded-lg bg-gradient-to-br ${s.color} grid place-items-center text-white font-bold text-[12px]`}>
              {s.label[0]}
            </span>
            <div className="text-left min-w-0">
              <div className="text-[12.5px] font-bold text-white tracking-tight truncate">
                {s.label}
              </div>
              <div className="text-[11px] text-white/60 font-numeric truncate">
                {s.handle}
              </div>
            </div>
            <ArrowUpRight className="ml-auto size-4 text-white/50 group-hover:text-amber transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}
