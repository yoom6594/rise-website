/**
 * BoardCalendar — 캘린더형 게시판(행사·일정) 본문
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Cyan Teal/Pine + Amber)
 * 구조: [좌] 월간 캘린더(이벤트 도트/선택) + 카테고리 범례  /  [우] 선택일·해당 월 일정 리스트
 * - 일정이 있는 날짜에 카테고리 색 도트 표시
 * - 날짜 클릭 시 우측 패널에 해당일 일정 노출, 미선택 시 해당 월 전체 일정
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ChevronLeft, ChevronRight, CalendarDays, MapPin, Clock, Dot } from "lucide-react";
import {
  EVENTS,
  EVENT_CATEGORY_TONE,
  eventTone,
  parseYmd,
  getEventsOnDate,
  type EventItem,
  type BoardConfig,
} from "@/lib/board-data";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

function ymdKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`;
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

/** 해당 월의 모든 일정(기간 일정은 시작월 기준으로 노출) */
function eventsInMonth(year: number, month: number): EventItem[] {
  return EVENTS.filter((e) => {
    const s = parseYmd(e.start);
    const en = e.end ? parseYmd(e.end) : s;
    // 기간이 해당 월과 겹치면 포함
    const monthStart = new Date(year, month, 1);
    const monthEnd = new Date(year, month + 1, 0);
    return en >= monthStart && s <= monthEnd;
  }).sort((a, b) => parseYmd(a.start).getTime() - parseYmd(b.start).getTime());
}

export default function BoardCalendar({ board }: { board: BoardConfig }) {
  // 초기 기준월: 가장 빠른 일정이 있는 달(데모용) — 없으면 오늘
  const initial = EVENTS.length ? parseYmd(EVENTS[0].start) : new Date();
  const [cursor, setCursor] = useState(new Date(initial.getFullYear(), initial.getMonth(), 1));
  const [selected, setSelected] = useState<Date | null>(null);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const today = new Date();

  // 달력 그리드(앞뒤 공백 포함 6주)
  const cells = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const arr: (Date | null)[] = [];
    for (let i = 0; i < firstDay; i++) arr.push(null);
    for (let d = 1; d <= daysInMonth; d++) arr.push(new Date(year, month, d));
    while (arr.length % 7 !== 0) arr.push(null);
    return arr;
  }, [year, month]);

  const monthEvents = useMemo(() => eventsInMonth(year, month), [year, month]);

  const listTitle = selected
    ? `${selected.getMonth() + 1}월 ${selected.getDate()}일 일정`
    : `${month + 1}월 전체 일정`;
  const listEvents = selected ? getEventsOnDate(selected) : monthEvents;

  function moveMonth(delta: number) {
    setSelected(null);
    setCursor(new Date(year, month + delta, 1));
  }

  return (
    <div>
      {/* 상단 헤더 */}
      <div className="mb-6 flex items-center gap-2 text-primary">
        <CalendarDays className="h-5 w-5" />
        <p className="font-numeric text-[11px] font-bold tracking-[0.2em] text-amber">EVENTS</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1fr]">
        {/* ─── 좌: 월간 캘린더 ─────────────────────────────────────── */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
          {/* 월 네비게이션 */}
          <div className="mb-5 flex items-center justify-between">
            <button
              onClick={() => moveMonth(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
              aria-label="이전 달"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="text-center">
              <span className="font-numeric text-sm font-semibold text-muted-foreground">{year}</span>
              <h3 className="font-display text-2xl font-extrabold text-foreground">
                {month + 1}월
              </h3>
            </div>
            <button
              onClick={() => moveMonth(1)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/70 transition-colors hover:bg-secondary hover:text-primary"
              aria-label="다음 달"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* 요일 헤더 */}
          <div className="grid grid-cols-7 border-b border-border pb-2">
            {WEEKDAYS.map((w, i) => (
              <div
                key={w}
                className={[
                  "text-center text-xs font-bold",
                  i === 0 ? "text-rose-500" : i === 6 ? "text-primary" : "text-muted-foreground",
                ].join(" ")}
              >
                {w}
              </div>
            ))}
          </div>

          {/* 날짜 그리드 */}
          <div className="grid grid-cols-7 gap-px">
            {cells.map((date, idx) => {
              if (!date) return <div key={idx} className="aspect-square" />;
              const dayEvents = getEventsOnDate(date);
              const isToday = sameDay(date, today);
              const isSelected = selected && sameDay(date, selected);
              const dow = date.getDay();
              return (
                <button
                  key={idx}
                  onClick={() => setSelected(isSelected ? null : date)}
                  className={[
                    "group relative flex aspect-square flex-col items-center justify-start rounded-lg pt-1.5 transition-all",
                    isSelected
                      ? "bg-primary text-white shadow-md"
                      : "hover:bg-secondary",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium",
                      isSelected
                        ? "text-white"
                        : isToday
                        ? "bg-amber/20 font-bold text-amber-foreground"
                        : dow === 0
                        ? "text-rose-500"
                        : dow === 6
                        ? "text-primary"
                        : "text-foreground/80",
                    ].join(" ")}
                  >
                    {date.getDate()}
                  </span>
                  {/* 이벤트 도트 */}
                  {dayEvents.length > 0 && (
                    <span className="mt-0.5 flex items-center gap-0.5">
                      {dayEvents.slice(0, 3).map((e, i) => (
                        <span
                          key={i}
                          className={[
                            "h-1.5 w-1.5 rounded-full",
                            isSelected ? "bg-white" : eventTone(e.category).dot,
                          ].join(" ")}
                        />
                      ))}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* 카테고리 범례 */}
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4">
            {Object.entries(EVENT_CATEGORY_TONE).map(([cat, tone]) => (
              <span key={cat} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={["h-2 w-2 rounded-full", tone.dot].join(" ")} />
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* ─── 우: 일정 리스트 ─────────────────────────────────────── */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-display text-lg font-extrabold text-foreground">{listTitle}</h3>
            {selected && (
              <button
                onClick={() => setSelected(null)}
                className="text-xs font-medium text-primary hover:underline"
              >
                전체 보기
              </button>
            )}
          </div>

          {listEvents.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/40 py-16 text-center">
              <CalendarDays className="mb-3 h-8 w-8 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">선택하신 날짜에 등록된 일정이 없습니다.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {listEvents.map((e) => {
                const tone = eventTone(e.category);
                const s = parseYmd(e.start);
                const period = e.end
                  ? `${s.getMonth() + 1}.${s.getDate()} ~ ${parseYmd(e.end).getMonth() + 1}.${parseYmd(
                      e.end
                    ).getDate()}`
                  : `${s.getMonth() + 1}.${s.getDate()}`;
                return (
                  <li key={e.id}>
                    <Link
                      href={`/board/${board.id}/${e.id}`}
                      className="group block overflow-hidden rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={["rounded-md px-2 py-0.5 text-[11px] font-bold", tone.chip].join(" ")}
                        >
                          {e.category}
                        </span>
                        <span className="font-numeric inline-flex items-center text-xs font-semibold text-muted-foreground">
                          <Dot className="-ml-1 h-4 w-4" />
                          {period}
                        </span>
                      </div>
                      <h4 className="mt-2 font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {e.title}
                      </h4>
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                        {e.time && (
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {e.time}
                          </span>
                        )}
                        {e.location && (
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {e.location}
                          </span>
                        )}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
