/**
 * BoardListText — 공통 게시판 [텍스트형] 리스트
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Cyan Teal + Amber)
 * 구조: 검색바 + 분류 필터 칩 → 게시글 행(데스크톱: 번호/제목/작성자/날짜/조회, 모바일: 카드)
 * - pinned 게시글 상단 고정(공지 아이콘)
 * - NEW 뱃지, 첨부파일/조회수 메타
 * - 행 클릭 시 상세 페이지(/board/:boardId/:postId)로 이동
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Search, Pin, Paperclip, Eye, ChevronRight } from "lucide-react";
import type { BoardConfig, BoardPost } from "@/lib/board-data";

interface Props {
  board: BoardConfig;
  posts: BoardPost[];
}

export default function BoardListText({ board, posts }: Props) {
  const categories = board.categories ?? ["전체"];
  const [activeCat, setActiveCat] = useState(categories[0]);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = posts;
    if (activeCat && activeCat !== "전체") {
      list = list.filter((p) => p.category === activeCat);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.summary.toLowerCase().includes(q),
      );
    }
    // 고정글 우선, 그 다음 최신순
    return [...list].sort((a, b) => {
      if (!!a.pinned !== !!b.pinned) return a.pinned ? -1 : 1;
      return a.date < b.date ? 1 : -1;
    });
  }, [posts, activeCat, query]);

  const total = posts.length;

  return (
    <div>
      {/* 상단 컨트롤 바 */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          전체 <span className="font-numeric font-bold text-primary">{total}</span>건
          {activeCat !== "전체" && (
            <span className="ml-1">
              · <span className="font-semibold text-foreground">{activeCat}</span>{" "}
              {filtered.length}건
            </span>
          )}
        </p>
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="제목·내용 검색"
            className="h-11 w-full rounded-full border border-border bg-card pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </div>
      </div>

      {/* 분류 필터 칩 */}
      {categories.length > 1 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((c) => {
            const active = c === activeCat;
            return (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={[
                  "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "border border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-primary",
                ].join(" ")}
              >
                {c}
              </button>
            );
          })}
        </div>
      )}

      {/* 테이블 헤더 (데스크톱) */}
      <div className="mt-6 hidden grid-cols-[64px_1fr_120px_120px_88px] items-center border-y-2 border-foreground/80 px-4 py-3 text-[13px] font-bold text-foreground lg:grid">
        <span className="text-center">번호</span>
        <span>제목</span>
        <span className="text-center">작성자</span>
        <span className="text-center">등록일</span>
        <span className="text-center">조회</span>
      </div>

      {/* 리스트 */}
      <ul className="divide-y divide-border lg:border-b lg:border-border">
        {filtered.length === 0 && (
          <li className="py-20 text-center text-sm text-muted-foreground">
            검색 결과가 없습니다.
          </li>
        )}
        {filtered.map((post, idx) => {
          const number = post.pinned ? null : filtered.filter((p) => !p.pinned).indexOf(post) + 1;
          return (
            <li key={post.id}>
              <Link
                href={`/board/${board.id}/${post.id}`}
                className="group block px-2 py-4 transition-colors hover:bg-secondary/60 lg:grid lg:grid-cols-[64px_1fr_120px_120px_88px] lg:items-center lg:px-4 lg:py-3.5"
              >
                {/* 번호 / 고정 */}
                <span className="hidden text-center lg:block">
                  {post.pinned ? (
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber/15 text-amber">
                      <Pin className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <span className="font-numeric text-sm text-muted-foreground">
                      {number}
                    </span>
                  )}
                </span>

                {/* 제목 + 메타 */}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    {post.pinned && (
                      <span className="inline-flex items-center gap-1 rounded-md bg-amber/15 px-2 py-0.5 text-[11px] font-bold text-amber lg:hidden">
                        <Pin className="h-3 w-3" /> 공지
                      </span>
                    )}
                    {post.category && (
                      <span className="shrink-0 rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                        {post.category}
                      </span>
                    )}
                    <span className="truncate font-semibold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </span>
                    {post.isNew && (
                      <span className="font-numeric shrink-0 rounded bg-teal px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                        NEW
                      </span>
                    )}
                    {post.attachments && post.attachments.length > 0 && (
                      <Paperclip className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    )}
                  </div>
                  {/* 모바일 메타 */}
                  <div className="mt-1.5 flex items-center gap-3 text-[12px] text-muted-foreground lg:hidden">
                    <span>{post.author}</span>
                    <span className="font-numeric tabular-nums">{post.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span className="font-numeric tabular-nums">
                        {post.views.toLocaleString()}
                      </span>
                    </span>
                  </div>
                </div>

                {/* 작성자 (데스크톱) */}
                <span className="hidden text-center text-sm text-muted-foreground lg:block">
                  {post.author}
                </span>
                {/* 등록일 (데스크톱) */}
                <span className="font-numeric hidden text-center text-sm tabular-nums text-muted-foreground lg:block">
                  {post.date}
                </span>
                {/* 조회 (데스크톱) */}
                <span className="font-numeric hidden text-center text-sm tabular-nums text-muted-foreground lg:block">
                  {post.views.toLocaleString()}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* 페이지네이션 (정적 데모) */}
      <div className="mt-8 flex items-center justify-center gap-1.5">
        <button
          disabled
          className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground opacity-50"
          aria-label="이전"
        >
          <ChevronRight className="h-4 w-4 rotate-180" />
        </button>
        {[1, 2, 3].map((n) => (
          <button
            key={n}
            className={[
              "font-numeric grid h-9 w-9 place-items-center rounded-lg text-sm font-semibold transition-colors",
              n === 1
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground/70 hover:border-primary/40 hover:text-primary",
            ].join(" ")}
          >
            {n}
          </button>
        ))}
        <button
          className="grid h-9 w-9 place-items-center rounded-lg border border-border text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
          aria-label="다음"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
