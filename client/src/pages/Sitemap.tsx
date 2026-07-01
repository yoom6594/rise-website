/**
 * Sitemap — 전체 메뉴(사이트맵) 페이지
 * 라우트: /sitemap
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Teal/Pine + Amber, 곡선 웨이브)
 * 구조: Header → SubHero → 8개 1Depth 카드(2Depth 리스트 + 3Depth 칩) → Footer
 * - 구현된 링크는 wouter Link로 이동, 미구현(available !== true)은 준비중 toast
 */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Compass,
  GraduationCap,
  Microscope,
  Sprout,
  LineChart,
  Megaphone,
  ImageIcon,
  UserCircle,
  ChevronRight,
  CornerDownRight,
} from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/site/Header";
import SubHero from "@/components/site/SubHero";
import { OneViewFooter } from "@/components/site/OneViewFooter";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SITEMAP, type SitemapLeaf } from "@/lib/site-data";

const ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  graduation: GraduationCap,
  microscope: Microscope,
  sprout: Sprout,
  chart: LineChart,
  megaphone: Megaphone,
  image: ImageIcon,
  user: UserCircle,
};

function isInternal(href: string) {
  return href.startsWith("/");
}

/** 준비중(미구현) 링크 클릭 처리 */
function useGuardedNav() {
  return (leaf: SitemapLeaf) => (e: React.MouseEvent) => {
    if (!leaf.available) {
      e.preventDefault();
      toast.info(`'${leaf.label}' 페이지는 준비 중입니다.`);
    }
  };
}

export default function Sitemap() {
  const guard = useGuardedNav();

  return (
    <div className="min-h-screen bg-background">
      <Header forceTone />

      <SubHero
        eyebrow="SITEMAP"
        title="전체 메뉴"
        subtitle="RISE 사업단 누리집의 모든 메뉴를 한눈에 확인하실 수 있습니다."
      />

      <section className="relative py-16 sm:py-20">
        {/* 은은한 배경 텍스처 */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(0,61,146,0.05),transparent)]" />

        <div className="container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {SITEMAP.map((group, gi) => {
              const Icon = ICON[group.iconKey] ?? Compass;
              return (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: gi * 0.05 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  {/* 1Depth 헤더 */}
                  <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-primary to-pine px-5 py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-numeric text-[10px] font-bold tracking-[0.18em] text-amber">
                        {String(gi + 1).padStart(2, "0")}
                      </p>
                      <h2 className="font-display text-lg font-extrabold leading-tight text-white">
                        {group.label}
                      </h2>
                    </div>
                  </div>

                  {/* 2Depth + 3Depth */}
                  <ul className="flex-1 divide-y divide-border/70 px-2 py-2">
                    {group.children.map((node) => {
                      const nodeInternal = isInternal(node.href) && node.available;
                      const NodeInner = (
                        <span className="flex items-center justify-between gap-2 rounded-lg px-3 py-2.5 transition-colors group-hover/item:bg-secondary">
                          <span className="flex items-center gap-2 text-[15px] font-semibold text-foreground">
                            <ChevronRight className="h-4 w-4 shrink-0 text-primary" />
                            {node.label}
                          </span>
                          {!node.available && !node.children && (
                            <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                              준비중
                            </span>
                          )}
                        </span>
                      );

                      return (
                        <li key={node.label} className="group/item py-0.5">
                          {nodeInternal ? (
                            <Link href={node.href} className="block hover:text-primary">
                              {NodeInner}
                            </Link>
                          ) : (
                            <a
                              href={node.href}
                              onClick={guard(node)}
                              className="block cursor-pointer hover:text-primary"
                            >
                              {NodeInner}
                            </a>
                          )}

                          {/* 3Depth 칩 */}
                          {node.children && node.children.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pb-2.5 pl-9 pr-3 pt-1">
                              {node.children.map((leaf) => {
                                const leafInternal = isInternal(leaf.href) && leaf.available;
                                const chip =
                                  "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors";
                                return leafInternal ? (
                                  <Link
                                    key={leaf.label}
                                    href={leaf.href}
                                    className={`${chip} border-primary/20 bg-primary/5 text-primary hover:bg-primary/10`}
                                  >
                                    <CornerDownRight className="h-3 w-3" />
                                    {leaf.label}
                                  </Link>
                                ) : (
                                  <span
                                    key={leaf.label}
                                    onClick={() =>
                                      leaf.available
                                        ? undefined
                                        : toast.info(`'${leaf.label}' 페이지는 준비 중입니다.`)
                                    }
                                    className={`${chip} cursor-pointer border-border bg-secondary/60 text-muted-foreground hover:text-foreground`}
                                  >
                                    <CornerDownRight className="h-3 w-3" />
                                    {leaf.label}
                                  </span>
                                );
                              })}
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <OneViewFooter />
      <FloatingCTA />
    </div>
  );
}
