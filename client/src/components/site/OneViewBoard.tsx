/**
 * OneViewBoard — 공지사항/뉴스 탭 위젯 + 단위과제별 성과현황 차트
 * UX:
 *  - 좌측 7/12: 공지·뉴스 탭형 리스트 (3행 + MORE)
 *  - 우측 5/12: 단위과제별 성과현황 (BarChart + KPI 카드)
 *  - SNS 위젯은 제거 (요청사항)
 */
import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Pin, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NEWS, NOTICES } from "@/lib/site-data";
import { PerformanceChart } from "./PerformanceChart";
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
          // 메인 공지 id(n1~n5) → 게시판 상세 id(notice-1~5) 매핑
          id: n.id.replace(/^n/, "notice-"),
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
      {/* 공지사항 / 뉴스 탭 */}
      <div className="lg:col-span-7">
        <div className="h-full rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl shadow-foreground/25 overflow-hidden flex flex-col">
          {/* Tab header */}
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
                    <span
                      className={[
                        "font-numeric text-[10px] tracking-[0.16em] font-semibold",
                        tab === t.key ? "text-amber" : "text-muted-foreground/70",
                      ].join(" ")}
                    >
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
            <Link
              href={tab === "notice" ? "/board/notices" : "/board/press"}
              className="text-[11px] tracking-[0.18em] font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              MORE
              <Plus className="size-3" />
            </Link>
          </div>

          {/* Tab content */}
          <div className="px-2 py-2 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
              >
                {items.map((item) => (
                  <Link
                    key={item.id}
                    href={
                      tab === "notice"
                        ? `/board/notices/${item.id}`
                        : "/board/press"
                    }
                    onClick={(e) => {
                      // 뉴스 항목은 개별 상세가 없으므로 보도자료 목록으로 이동
                      if (tab === "news") {
                        toast.info("뉴스 상세는 보도자료에서 확인하세요.");
                      }
                    }}
                    className="group flex items-center justify-between gap-3 px-3 py-3.5 rounded-lg hover:bg-mist cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {item.pinned ? (
                        <span className="shrink-0 size-6 grid place-items-center rounded-md bg-amber/15">
                          <Pin className="size-3.5 text-amber" strokeWidth={2.4} />
                        </span>
                      ) : (
                        <span className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-numeric font-bold tracking-wider">
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
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 단위과제별 성과현황 차트 */}
      <div className="lg:col-span-5">
        <PerformanceChart />
      </div>
    </div>
  );
}
