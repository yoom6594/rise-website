/**
 * OneViewFooter — One-View 메인용 한 줄 컴팩트 푸터
 * UX: 메인 화면을 점유하지 않도록 최소화. 상세 사이트맵은 /full 라우트의 Footer에서 노출.
 */
import { ChevronUp, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export function OneViewFooter() {
  return (
    <footer className="relative z-10 mt-3 lg:mt-3">
      {/* 관련 사이트 토글 라인 */}
      <div className="container">
        <div className="rounded-t-xl bg-white/8 backdrop-blur-md border border-white/15 border-b-0 px-5 py-2 flex items-center justify-center gap-2 text-[11.5px] text-white/85">
          <span>지역과 함께 성장하는 대표 RISE 사업단</span>
          <button className="font-bold text-amber hover:underline inline-flex items-center gap-1">
            관련 사이트
            <ChevronUp className="size-3.5" />
          </button>
        </div>
      </div>

      {/* Footer bar */}
      <div className="bg-foreground/85 backdrop-blur-md border-t border-white/10">
        <div className="container py-2.5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 text-[11px] text-white/70">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-numeric font-bold text-amber tracking-wider text-[10px]">
              RISE
            </span>
            <span className="text-white/30">|</span>
            <span>(34134) 대전광역시 유성구 대학로 99 산학연교육연구관(W1) 508호</span>
            <span className="text-white/30">|</span>
            <span className="font-numeric tabular-nums">Tel. 042-000-0000</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/full"
              className="inline-flex items-center gap-1 hover:text-amber transition-colors"
            >
              상세 사이트맵
              <ExternalLink className="size-3" />
            </Link>
            <span className="text-white/30">·</span>
            <span>© 2026 RISE 사업단. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
