/**
 * EventDetailPage — 행사·일정(캘린더형) 상세 페이지
 * 라우트: /board/events/:eventId
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Teal/Pine + Amber)
 * 구조: Header → SubHero → SubLayout[Breadcrumb + LNB + 본문]
 * 본문: 카테고리 배지 + 제목 → 일정 정보 카드(일시/장소/주관/문의) → 본문 → 신청 CTA → 목록 버튼
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Building2,
  Phone,
  List,
  ArrowRight,
  Paperclip,
  Download,
} from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/site/Header";
import SubHero from "@/components/site/SubHero";
import SubLayout from "@/components/site/SubLayout";
import { OneViewFooter } from "@/components/site/OneViewFooter";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import NotFound from "@/pages/NotFound";
import {
  getBoard,
  getEvent,
  getLnbForBoard,
  eventTone,
  parseYmd,
} from "@/lib/board-data";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

function formatFull(ymd: string) {
  const d = parseYmd(ymd);
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()} (${WEEKDAYS[d.getDay()]})`;
}

export default function EventDetailPage() {
  const params = useParams<{ eventId: string }>();
  const eventId = params.eventId ?? "";

  const board = getBoard("events");
  const event = getEvent(eventId);

  if (!board || !event) return <NotFound />;

  const lnb = getLnbForBoard("events");
  const tone = eventTone(event.category);
  const dateLabel = event.end
    ? `${formatFull(event.start)}  ~  ${formatFull(event.end)}`
    : formatFull(event.start);

  const infoRows = [
    { icon: CalendarDays, label: "일시", value: dateLabel },
    event.time ? { icon: Clock, label: "시간", value: event.time } : null,
    event.location ? { icon: MapPin, label: "장소", value: event.location } : null,
    event.host ? { icon: Building2, label: "주관", value: event.host } : null,
    event.contact ? { icon: Phone, label: "문의", value: event.contact } : null,
  ].filter(Boolean) as { icon: typeof CalendarDays; label: string; value: string }[];

  return (
    <div className="min-h-screen bg-background">
      <Header forceTone />

      <SubHero eyebrow={board.eyebrow} title={board.title} subtitle={board.subtitle} />

      <SubLayout
        lnb={lnb}
        activeHref="/board/events"
        lnbEyebrow="NOTICE"
        breadcrumb={[
          { label: board.groupLabel, href: lnb.items[0].href },
          { label: board.title, href: "/board/events" },
          { label: "상세보기" },
        ]}
      >
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-w-0"
        >
          {/* 제목 헤더 */}
          <header className="border-b-2 border-foreground/80 pb-5">
            <span
              className={["inline-block rounded-md px-2.5 py-1 text-xs font-bold", tone.chip].join(" ")}
            >
              {event.category}
            </span>
            <h1 className="mt-3 font-display text-2xl font-extrabold leading-snug text-foreground sm:text-[28px]">
              {event.title}
            </h1>
          </header>

          {/* 일정 정보 카드 */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-gradient-to-r from-primary to-pine px-6 py-4">
              <CalendarDays className="h-5 w-5 text-amber" />
              <h2 className="font-display text-base font-bold text-white">행사 정보</h2>
            </div>
            <dl className="divide-y divide-border">
              {infoRows.map((row) => {
                const Icon = row.icon;
                return (
                  <div key={row.label} className="flex items-start gap-4 px-6 py-4">
                    <dt className="flex w-20 shrink-0 items-center gap-2 text-sm font-bold text-muted-foreground">
                      <Icon className="h-4 w-4 text-primary" />
                      {row.label}
                    </dt>
                    <dd className="text-sm font-medium leading-relaxed text-foreground">
                      {row.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* 본문 */}
          <div className="mt-8 space-y-5 text-[15px] leading-[1.95] text-foreground/85">
            <p className="rounded-2xl border-l-4 border-primary bg-primary/5 px-5 py-4 text-base font-semibold text-foreground">
              {event.summary}
            </p>
            {event.content.map((para, i) => (
              <p key={i} className="whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>

          {/* 첨부파일 */}
          {event.attachments && event.attachments.length > 0 && (
            <div className="mt-8 rounded-2xl border border-border bg-secondary/50 p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Paperclip className="h-4 w-4 text-primary" />
                첨부파일 {event.attachments.length}개
              </p>
              <ul className="mt-3 space-y-2">
                {event.attachments.map((file, i) => (
                  <li key={i}>
                    <button
                      onClick={() =>
                        toast.info("첨부파일 다운로드는 준비 중입니다.", { description: file.name })
                      }
                      className="group flex w-full items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-left transition-colors hover:border-primary/40"
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <Download className="h-4 w-4 shrink-0 text-primary" />
                        <span className="truncate text-sm font-medium text-foreground group-hover:text-primary">
                          {file.name}
                        </span>
                      </span>
                      <span className="font-numeric ml-3 shrink-0 text-xs text-muted-foreground">
                        {file.size}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 신청 CTA */}
          {event.link && (
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-amber/30 bg-amber/5 p-6 sm:flex-row">
              <div>
                <p className="font-bold text-foreground">참가를 원하시나요?</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  아래 버튼을 통해 신청 및 자세한 안내를 확인하실 수 있습니다.
                </p>
              </div>
              <button
                onClick={() =>
                  toast.info("신청 페이지는 준비 중입니다.", {
                    description: "통합정보플랫폼에서 곧 제공될 예정입니다.",
                  })
                }
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
              >
                {event.link.label}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* 목록 버튼 */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/board/events"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <List className="h-4 w-4" />
              일정 목록으로
            </Link>
          </div>
        </motion.article>
      </SubLayout>

      <OneViewFooter />
      <FloatingCTA />
    </div>
  );
}
