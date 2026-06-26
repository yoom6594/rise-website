/**
 * BoardPage — 공통 게시판 리스트 페이지 (텍스트형/갤러리형 통합)
 * 라우트: /board/:boardId
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Cyan Teal + Amber, 곡선 웨이브)
 * 구조: Header → SubHero(웨이브) → SubLayout[Breadcrumb + LNB + 본문(게시판 유형별 렌더)]
 */
import { useParams } from "wouter";
import { Header } from "@/components/site/Header";
import SubHero from "@/components/site/SubHero";
import SubLayout from "@/components/site/SubLayout";
import { OneViewFooter } from "@/components/site/OneViewFooter";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import BoardListText from "@/components/site/BoardListText";
import BoardListGallery from "@/components/site/BoardListGallery";
import NotFound from "@/pages/NotFound";
import { getBoard, getPostsByBoard, getLnbForBoard } from "@/lib/board-data";

export default function BoardPage() {
  const params = useParams<{ boardId: string }>();
  const boardId = params.boardId ?? "";
  const board = getBoard(boardId);

  if (!board) return <NotFound />;

  const posts = getPostsByBoard(boardId);
  const lnb = getLnbForBoard(boardId);

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
          { label: board.title },
        ]}
      >
        {board.type === "text" ? (
          <BoardListText board={board} posts={posts} />
        ) : (
          <BoardListGallery board={board} posts={posts} />
        )}
      </SubLayout>

      <OneViewFooter />
      <FloatingCTA />
    </div>
  );
}
