/**
 * BoardListGallery — 공통 게시판 [갤러리형] 카드 그리드
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Cyan Teal + Amber)
 * 구조: 검색바 + 분류 필터 칩 → 썸네일 카드 그리드(3열)
 * - 카드: 16:10 썸네일 + 분류 뱃지 + NEW + 제목/요약 + 날짜/조회 메타
 * - 카드 클릭 시 상세 페이지(/board/:boardId/:postId)로 이동
 */
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, Eye, Calendar, ImageIcon } from "lucide-react";
import type { BoardConfig, BoardPost } from "@/lib/board-data";

interface Props {
  board: BoardConfig;
  posts: BoardPost[];
}

export default function BoardListGallery({ board, posts }: Props) {
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
    return [...list].sort((a, b) => (a.date < b.date ? 1 : -1));
  }, [posts, activeCat, query]);

  return (
    <div>
      {/* 상단 컨트롤 바 */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          전체 <span className="font-numeric font-bold text-primary">{posts.length}</span>건
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

      {/* 카드 그리드 */}
      {filtered.length === 0 ? (
        <p className="py-20 text-center text-sm text-muted-foreground">
          검색 결과가 없습니다.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            >
              <Link
                href={`/board/${board.id}/${post.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                {/* 썸네일 */}
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                  {post.thumbnail ? (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center text-muted-foreground">
                      <ImageIcon className="h-10 w-10" />
                    </div>
                  )}
                  {/* 상단 뱃지 */}
                  <div className="absolute left-3 top-3 flex items-center gap-1.5">
                    {post.category && (
                      <span className="rounded-md bg-primary/90 px-2 py-1 text-[11px] font-bold text-primary-foreground backdrop-blur">
                        {post.category}
                      </span>
                    )}
                    {post.isNew && (
                      <span className="font-numeric rounded-md bg-teal px-2 py-1 text-[10px] font-bold leading-none text-white">
                        NEW
                      </span>
                    )}
                  </div>
                  {/* 이미지 장수 */}
                  {post.images && post.images.length > 1 && (
                    <span className="font-numeric absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md bg-foreground/70 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur">
                      <ImageIcon className="h-3 w-3" />
                      {post.images.length}
                    </span>
                  )}
                </div>

                {/* 본문 */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="line-clamp-2 font-display text-base font-extrabold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                    {post.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[12px] text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span className="font-numeric tabular-nums">{post.date}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" />
                      <span className="font-numeric tabular-nums">
                        {post.views.toLocaleString()}
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}

      {/* 페이지네이션 (정적 데모) */}
      <div className="mt-10 flex items-center justify-center gap-1.5">
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
      </div>
    </div>
  );
}
