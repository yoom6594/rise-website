/**
 * Login — 로그인 페이지
 * 라우트: /login
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Teal/Pine + Amber, 곡선 웨이브)
 * 구조: Header → SubHero → 로그인 카드(아이디/비밀번호 + 옵션 + 통합플랫폼/소셜 안내 + 회원가입 유도)
 * - 실제 인증은 프론트 데모: 유효성 검사 후 준비중 toast
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Lock, User, Eye, EyeOff, LogIn, ShieldCheck, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/site/Header";
import SubHero from "@/components/site/SubHero";
import { OneViewFooter } from "@/components/site/OneViewFooter";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!userId.trim() || !pw.trim()) {
      toast.error("아이디와 비밀번호를 모두 입력해 주세요.");
      return;
    }
    toast.info("로그인 연동은 준비 중입니다.", {
      description: "통합정보플랫폼 계정 연동 후 이용하실 수 있습니다.",
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <Header forceTone />

      <SubHero
        eyebrow="LOGIN"
        title="로그인"
        subtitle="RISE 통합정보플랫폼 계정으로 로그인하여 프로그램 신청과 자료실을 이용하세요."
      />

      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(0,61,146,0.05),transparent)]" />

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-md"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-primary/5">
              {/* 카드 헤더 */}
              <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-primary to-pine px-6 py-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25">
                  <LogIn className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-extrabold text-white">계정 로그인</h2>
                  <p className="text-xs text-white/80">RISE 통합정보플랫폼</p>
                </div>
              </div>

              {/* 폼 */}
              <form onSubmit={handleSubmit} className="space-y-4 p-6 sm:p-7">
                <div>
                  <label htmlFor="userId" className="mb-1.5 block text-sm font-bold text-foreground">
                    아이디
                  </label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="userId"
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      placeholder="아이디를 입력하세요"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="pw" className="mb-1.5 block text-sm font-bold text-foreground">
                    비밀번호
                  </label>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                      id="pw"
                      type={showPw ? "text" : "password"}
                      value={pw}
                      onChange={(e) => setPw(e.target.value)}
                      placeholder="비밀번호를 입력하세요"
                      className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-11 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw((v) => !v)}
                      aria-label={showPw ? "비밀번호 숨기기" : "비밀번호 표시"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-0.5">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="h-4 w-4 rounded border-border text-primary accent-primary"
                    />
                    아이디 저장
                  </label>
                  <div className="flex items-center gap-2 text-sm">
                    <button
                      type="button"
                      onClick={() => toast.info("아이디 찾기는 준비 중입니다.")}
                      className="text-muted-foreground hover:text-primary"
                    >
                      아이디 찾기
                    </button>
                    <span className="text-border">|</span>
                    <button
                      type="button"
                      onClick={() => toast.info("비밀번호 찾기는 준비 중입니다.")}
                      className="text-muted-foreground hover:text-primary"
                    >
                      비밀번호 찾기
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <LogIn className="h-4 w-4" />
                  로그인
                </button>

                {/* 통합플랫폼 안내 */}
                <div className="flex items-start gap-2.5 rounded-xl border border-primary/15 bg-primary/5 px-4 py-3 text-xs leading-relaxed text-foreground/75">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  기존 통합정보플랫폼 계정을 보유하신 경우 동일한 아이디로 로그인하실 수 있습니다.
                </div>
              </form>

              {/* 회원가입 유도 */}
              <div className="flex items-center justify-between gap-3 border-t border-border bg-secondary/40 px-6 py-4">
                <span className="text-sm text-muted-foreground">아직 회원이 아니신가요?</span>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-1 rounded-full bg-amber px-4 py-2 text-sm font-bold text-amber-foreground transition-transform hover:scale-105"
                >
                  회원가입
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <OneViewFooter />
      <FloatingCTA />
    </div>
  );
}
