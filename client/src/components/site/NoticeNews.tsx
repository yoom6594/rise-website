/**
 * NoticeNews — 공지사항 + 보도자료 통합
 * UX: 탭 전환 + Pin 처리 + 일자 가독성 강조
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Pin, Megaphone, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NEWS, NOTICES, ASSETS } from "@/lib/site-data";
import { toast } from "sonner";

export function NoticeNews() {
  const [tab, setTab] = useState<"notice" | "news">("notice");

  return (
    <section id="notice" className="relative py-24 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left: title + featured news */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary uppercase">
              <span className="block w-8 h-px bg-primary" />
              Notice & News
            </div>
            <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl tracking-tight leading-tight">
              사업단의 <br />
              <span className="text-primary">새로운 소식</span>
            </h2>

            <div className="mt-8 group relative overflow-hidden rounded-3xl cursor-pointer" onClick={() => toast.info("보도자료 상세 페이지는 준비 중입니다.")}>
              <img src={ASSETS.innovationLab} alt="" className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 text-white">
                <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full text-[11px] font-bold tracking-wide bg-amber text-amber-foreground">
                  HEADLINE
                </span>
                <h3 className="mt-3 font-display font-bold text-xl lg:text-2xl leading-snug">
                  RISE 사업단, 지역 강소기업 32개사와 산학협력 MOU 체결
                </h3>
                <p className="mt-2 text-sm text-white/80 line-clamp-2">
                  지역 우수기업과의 협력 확대를 통해 학생 현장실습과 채용연계의 폭이 한층 넓어졌습니다.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-white/70 font-numeric">
                  <span>2026.05.01</span>
                  <span className="size-1 rounded-full bg-white/40" />
                  <span>보도자료</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: tabs and list */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6 border-b border-border">
              <div className="flex">
                <button
                  onClick={() => setTab("notice")}
                  className={[
                    "relative h-12 px-5 inline-flex items-center gap-2 text-base font-bold tracking-tight transition-colors",
                    tab === "notice" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  <Megaphone className="size-4" />
                  공지사항
                  <span className="font-numeric text-xs text-muted-foreground">{NOTICES.length}</span>
                  {tab === "notice" && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
                <button
                  onClick={() => setTab("news")}
                  className={[
                    "relative h-12 px-5 inline-flex items-center gap-2 text-base font-bold tracking-tight transition-colors",
                    tab === "news" ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  <Newspaper className="size-4" />
                  보도자료
                  <span className="font-numeric text-xs text-muted-foreground">{NEWS.length}</span>
                  {tab === "news" && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toast.info("전체 목록 페이지는 준비 중입니다.")}
                className="hidden sm:inline-flex text-muted-foreground hover:text-primary"
              >
                전체보기 <ArrowRight className="ml-1 size-3.5" />
              </Button>
            </div>

            <AnimatePresence mode="wait">
              {tab === "notice" ? (
                <motion.ul
                  key="notice"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="divide-y divide-border"
                >
                  {NOTICES.map((n) => (
                    <li key={n.id}>
                      <button
                        onClick={() => toast.info(`"${n.title}"\n상세 페이지는 준비 중입니다.`)}
                        className="group w-full text-left flex items-center gap-4 py-4 hover:px-2 transition-all"
                      >
                        {n.pinned ? (
                          <span className="flex-none size-8 grid place-items-center rounded-full bg-amber/15 text-amber" title="고정 공지">
                            <Pin className="size-3.5" fill="currentColor" />
                          </span>
                        ) : (
                          <span className="flex-none size-8 grid place-items-center rounded-full bg-secondary text-muted-foreground text-[11px] font-bold">
                            {n.type}
                          </span>
                        )}
                        <span className="flex-1 truncate text-[15px] font-semibold text-foreground group-hover:text-primary transition-colors">
                          {n.title}
                        </span>
                        <span className="flex-none font-numeric text-sm text-muted-foreground">{n.date}</span>
                        <ArrowRight className="flex-none size-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </button>
                    </li>
                  ))}
                </motion.ul>
              ) : (
                <motion.ul
                  key="news"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-2"
                >
                  {NEWS.map((n) => (
                    <li key={n.id}>
                      <button
                        onClick={() => toast.info(`"${n.title}"\n상세 페이지는 준비 중입니다.`)}
                        className="group w-full text-left flex flex-col gap-1.5 p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-bold text-[15px] lg:text-base text-foreground group-hover:text-primary transition-colors leading-snug">
                            {n.title}
                          </h4>
                          <span className="flex-none font-numeric text-xs text-muted-foreground mt-0.5">{n.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{n.excerpt}</p>
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
