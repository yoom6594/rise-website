/**
 * BoardDetailPage — 공통 게시글 상세 페이지 (텍스트형/갤러리형 공용)
 * 라우트: /board/:boardId/:postId
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Cyan Teal + Amber, 곡선 웨이브)
 * 구조: Header → SubHero → SubLayout[Breadcrumb + LNB + 본문]
 * 본문: 제목/메타 헤더 → (갤러리형) 이미지 갤러리 → 본문 단락 → 첨부파일 → 이전·다음 글 → 목록 버튼
 */
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import {
  Calendar,
  Eye,
  User,
  Paperclip,
  Download,
  List,
  ChevronLeft,
  ChevronRight,
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
  getPost,
  getPostsByBoard,
  getLnbForBoard,
} from "@/lib/board-data";

export default function BoardDetailPage() {
  const params = useParams<{ boardId: string; postId: string }>();
  const boardId = params.boardId ?? "";
  const postId = params.postId ?? "";

  const board = getBoard(boardId);
  const post = getPost(postId);

  if (!board || !post || post.boardId !== boardId) return <NotFound />;

  const lnb = getLnbForBoard(boardId);
  const siblings = getPostsByBoard(boardId).sort((a, b) =>
    a.date < b.date ? 1 : -1,
  );
  const idx = siblings.findIndex((p) => p.id === post.id);
  const prev = idx > 0 ? siblings[idx - 1] : null;
  const next = idx < siblings.length - 1 ? siblings[idx + 1] : null;

  const isGallery = board.type === "gallery";

  return (
    <div className="min-h-screen bg-background">
      <Header forceTone />

      <SubHero eyebrow={board.eyebrow} title={board.title} subtitle={board.subtitle} />

      <SubLayout
        lnb={lnb}
        activeHref={board.groupHref === lnb.groupHref ? lnb.items[0].href : board.groupHref}
        lnbEyebrow={board.groupLabel === "홍보마당" ? "PROMOTION" : "NOTICE"}
        breadcrumb={[
          { label: board.groupLabel, href: lnb.items[0].href },
          { label: board.title, href: `/board/${board.id}` },
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
            <div className="flex flex-wrap items-center gap-2">
              {post.category && (
                <span className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">
                  {post.category}
                </span>
              )}
              {post.isNew && (
                <span className="font-numeric rounded bg-teal px-2 py-1 text-[10px] font-bold leading-none text-white">
                  NEW
                </span>
              )}
            </div>
            <h1 className="mt-3 font-display text-2xl font-extrabold leading-snug text-foreground sm:text-[28px]">
              {post.title}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span className="font-numeric tabular-nums">{post.date}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Eye className="h-4 w-4" />
                <span className="font-numeric tabular-nums">
                  조회 {post.views.toLocaleString()}
                </span>
              </span>
            </div>
          </header>

          {/* 갤러리형 이미지 */}
          {isGallery && post.images && post.images.length > 0 && (
            <div className="mt-8 space-y-5">
              {post.images.map((src, i) => (
                <figure key={i} className="overflow-hidden rounded-2xl border border-border">
                  <img src={src} alt={`${post.title} ${i + 1}`} className="w-full object-cover" />
                </figure>
              ))}
            </div>
          )}

          {/* 본문 */}
          <div className="mt-8 space-y-5 text-[15px] leading-[1.95] text-foreground/85">
            {/* 요약 리드 */}
            <p className="rounded-2xl border-l-4 border-primary bg-primary/5 px-5 py-4 text-base font-semibold text-foreground">
              {post.summary}
            </p>
            {post.content.map((para, i) => (
              <p key={i} className="whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>

          {/* 첨부파일 */}
          {post.attachments && post.attachments.length > 0 && (
            <div className="mt-8 rounded-2xl border border-border bg-secondary/50 p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Paperclip className="h-4 w-4 text-primary" />
                첨부파일 {post.attachments.length}개
              </p>
              <ul className="mt-3 space-y-2">
                {post.attachments.map((file, i) => (
                  <li key={i}>
                    <button
                      onClick={() =>
                        toast.info("첨부파일 다운로드는 준비 중입니다.", {
                          description: file.name,
                        })
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

          {/* 이전·다음 글 */}
          <nav className="mt-10 divide-y divide-border border-y border-border">
            <PrevNextRow label="이전글" post={prev} boardId={board.id} direction="prev" />
            <PrevNextRow label="다음글" post={next} boardId={board.id} direction="next" />
          </nav>

          {/* 목록 버튼 */}
          <div className="mt-8 flex justify-center">
            <Link
              href={`/board/${board.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              <List className="h-4 w-4" />
              목록으로
            </Link>
          </div>
        </motion.article>
      </SubLayout>

      <OneViewFooter />
      <FloatingCTA />
    </div>
  );
}

function PrevNextRow({
  label,
  post,
  boardId,
  direction,
}: {
  label: string;
  post: ReturnType<typeof getPost> | null;
  boardId: string;
  direction: "prev" | "next";
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <div className="flex items-center gap-4 px-1 py-3.5">
      <span className="flex w-16 shrink-0 items-center gap-1 text-xs font-bold text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </span>
      {post ? (
        <Link
          href={`/board/${boardId}/${post.id}`}
          className="truncate text-sm font-medium text-foreground transition-colors hover:text-primary"
        >
          {post.title}
        </Link>
      ) : (
        <span className="text-sm text-muted-foreground/60">
          {direction === "prev" ? "이전 글이 없습니다." : "다음 글이 없습니다."}
        </span>
      )}
    </div>
  );
}
