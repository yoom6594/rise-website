/**
 * Signup — 회원가입 프로세스 페이지
 * 라우트: /signup
 * 디자인 언어: 확정 메인 시안 계승 (Royal Blue #003D92 + Teal/Pine + Amber, 곡선 웨이브)
 * 구조: Header → SubHero → 스텝퍼(약관동의 → 정보입력 → 가입완료) → 카드 폼 → Footer
 * - 프론트 데모: 유효성 검사만 수행하고 실제 계정 생성은 하지 않음
 */
import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  UserPlus,
  CheckCircle2,
  Check,
  ArrowRight,
  ArrowLeft,
  User,
  Lock,
  Mail,
  Phone,
  PartyPopper,
} from "lucide-react";
import { toast } from "sonner";
import { Header } from "@/components/site/Header";
import SubHero from "@/components/site/SubHero";
import { OneViewFooter } from "@/components/site/OneViewFooter";
import { FloatingCTA } from "@/components/site/FloatingCTA";

const STEPS = [
  { id: 1, label: "약관 동의", icon: FileText },
  { id: 2, label: "정보 입력", icon: UserPlus },
  { id: 3, label: "가입 완료", icon: CheckCircle2 },
];

const TERMS = [
  {
    id: "service",
    title: "이용약관 동의",
    required: true,
    body: "본 약관은 RISE 사업단 통합정보플랫폼(이하 '플랫폼')이 제공하는 서비스의 이용 조건 및 절차, 이용자와 플랫폼의 권리·의무 및 책임사항을 규정합니다. 이용자는 플랫폼이 제공하는 프로그램 신청, 자료실, 알림 서비스 등을 본 약관에 따라 성실히 이용하여야 합니다.",
  },
  {
    id: "privacy",
    title: "개인정보 수집·이용 동의",
    required: true,
    body: "플랫폼은 회원가입, 프로그램 신청·관리, 본인 확인 및 안내 목적으로 성명, 아이디, 이메일, 연락처, 소속 정보를 수집·이용합니다. 수집된 개인정보는 관련 법령이 정한 기간 동안 보관 후 지체 없이 파기합니다.",
  },
  {
    id: "marketing",
    title: "마케팅 정보 수신 동의 (선택)",
    required: false,
    body: "프로그램 모집, 행사·일정, 뉴스레터 등 유익한 정보를 이메일 및 문자메시지로 받아보실 수 있습니다. 선택 항목이며 동의하지 않아도 회원가입 및 서비스 이용이 가능합니다.",
  },
];

export default function Signup() {
  const [step, setStep] = useState(1);
  const [agree, setAgree] = useState<Record<string, boolean>>({
    service: false,
    privacy: false,
    marketing: false,
  });
  const [form, setForm] = useState({
    name: "",
    userId: "",
    pw: "",
    pw2: "",
    email: "",
    phone: "",
  });

  const allRequired = agree.service && agree.privacy;
  const allChecked = agree.service && agree.privacy && agree.marketing;

  function toggleAll() {
    const next = !allChecked;
    setAgree({ service: next, privacy: next, marketing: next });
  }

  function goStep2() {
    if (!allRequired) {
      toast.error("필수 약관에 모두 동의해 주세요.");
      return;
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    const { name, userId, pw, pw2, email, phone } = form;
    if (!name || !userId || !pw || !email || !phone) {
      toast.error("필수 정보를 모두 입력해 주세요.");
      return;
    }
    if (pw.length < 8) {
      toast.error("비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    if (pw !== pw2) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const field =
    "w-full rounded-xl border border-border bg-background py-3 pl-10 pr-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <div className="min-h-screen bg-background">
      <Header forceTone />

      <SubHero
        eyebrow="SIGN UP"
        title="회원가입"
        subtitle="RISE 사업단 통합정보플랫폼 회원으로 가입하고 다양한 프로그램에 참여하세요."
      />

      <section className="relative py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_0%,rgba(0,61,146,0.05),transparent)]" />

        <div className="container">
          <div className="mx-auto max-w-2xl">
            {/* 스텝퍼 */}
            <ol className="mb-10 flex items-center">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const active = step === s.id;
                const done = step > s.id;
                return (
                  <li key={s.id} className="flex flex-1 items-center last:flex-none">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={[
                          "flex h-11 w-11 items-center justify-center rounded-full border-2 transition-colors",
                          done
                            ? "border-primary bg-primary text-primary-foreground"
                            : active
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-card text-muted-foreground",
                        ].join(" ")}
                      >
                        {done ? <Check className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
                      </span>
                      <span
                        className={[
                          "text-xs font-bold",
                          active || done ? "text-primary" : "text-muted-foreground",
                        ].join(" ")}
                      >
                        {s.label}
                      </span>
                    </div>
                    {i < STEPS.length - 1 && (
                      <span
                        className={[
                          "mx-2 mb-6 h-0.5 flex-1 transition-colors",
                          step > s.id ? "bg-primary" : "bg-border",
                        ].join(" ")}
                      />
                    )}
                  </li>
                );
              })}
            </ol>

            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg shadow-primary/5">
              <AnimatePresence mode="wait">
                {/* STEP 1 — 약관 동의 */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 sm:p-8"
                  >
                    <h2 className="font-display text-xl font-extrabold text-foreground">약관에 동의해 주세요</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      서비스 이용을 위해 아래 약관에 동의가 필요합니다.
                    </p>

                    {/* 전체 동의 */}
                    <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-xl border-2 border-primary/20 bg-primary/5 px-4 py-4">
                      <input
                        type="checkbox"
                        checked={allChecked}
                        onChange={toggleAll}
                        className="h-5 w-5 rounded border-border accent-primary"
                      />
                      <span className="font-bold text-foreground">약관 전체에 동의합니다</span>
                    </label>

                    <div className="mt-4 space-y-3">
                      {TERMS.map((t) => (
                        <div key={t.id} className="rounded-xl border border-border p-4">
                          <label className="flex cursor-pointer items-center gap-3">
                            <input
                              type="checkbox"
                              checked={agree[t.id]}
                              onChange={(e) =>
                                setAgree((prev) => ({ ...prev, [t.id]: e.target.checked }))
                              }
                              className="h-4 w-4 rounded border-border accent-primary"
                            />
                            <span className="text-sm font-bold text-foreground">
                              {t.title}
                              <span
                                className={[
                                  "ml-2 text-xs font-semibold",
                                  t.required ? "text-primary" : "text-muted-foreground",
                                ].join(" ")}
                              >
                                ({t.required ? "필수" : "선택"})
                              </span>
                            </span>
                          </label>
                          <p className="mt-2.5 max-h-24 overflow-y-auto rounded-lg bg-secondary/50 px-3 py-2.5 text-xs leading-relaxed text-muted-foreground">
                            {t.body}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between gap-3">
                      <Link
                        href="/login"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        로그인으로
                      </Link>
                      <button
                        onClick={goStep2}
                        disabled={!allRequired}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-all enabled:hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        다음 단계
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2 — 정보 입력 */}
                {step === 2 && (
                  <motion.form
                    key="step2"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={submitForm}
                    className="space-y-4 p-6 sm:p-8"
                  >
                    <h2 className="font-display text-xl font-extrabold text-foreground">회원 정보를 입력해 주세요</h2>
                    <p className="-mt-1 text-sm text-muted-foreground">
                      <span className="text-primary">*</span> 표시는 필수 입력 항목입니다.
                    </p>

                    <div>
                      <label className="mb-1.5 block text-sm font-bold text-foreground">
                        이름 <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="홍길동"
                          className={field}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-bold text-foreground">
                        아이디 <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <UserPlus className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          value={form.userId}
                          onChange={(e) => setForm({ ...form, userId: e.target.value })}
                          placeholder="영문/숫자 조합 4~20자"
                          className={field}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm font-bold text-foreground">
                          비밀번호 <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="password"
                            value={form.pw}
                            onChange={(e) => setForm({ ...form, pw: e.target.value })}
                            placeholder="8자 이상"
                            className={field}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-bold text-foreground">
                          비밀번호 확인 <span className="text-primary">*</span>
                        </label>
                        <div className="relative">
                          <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <input
                            type="password"
                            value={form.pw2}
                            onChange={(e) => setForm({ ...form, pw2: e.target.value })}
                            placeholder="비밀번호 재입력"
                            className={field}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-bold text-foreground">
                        이메일 <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="example@rise.ac.kr"
                          className={field}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-sm font-bold text-foreground">
                        연락처 <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="010-0000-0000"
                          className={field}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-3">
                      <button
                        type="button"
                        onClick={() => {
                          setStep(1);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        이전
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
                      >
                        가입 완료
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* STEP 3 — 완료 */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 py-14 text-center sm:px-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.1 }}
                      className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-pine text-white shadow-lg shadow-primary/25"
                    >
                      <PartyPopper className="h-9 w-9" />
                    </motion.div>
                    <h2 className="mt-6 font-display text-2xl font-extrabold text-foreground">
                      회원가입이 완료되었습니다
                    </h2>
                    <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                      <span className="font-bold text-primary">{form.name || "회원"}</span>님, RISE 사업단
                      통합정보플랫폼에 오신 것을 환영합니다. 이제 로그인하여 프로그램 신청과 자료실을 이용하실 수
                      있습니다.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                      <Link
                        href="/login"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-[1.03] sm:w-auto"
                      >
                        <ArrowRight className="h-4 w-4" />
                        로그인하러 가기
                      </Link>
                      <Link
                        href="/"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3 font-bold text-foreground transition-colors hover:bg-secondary sm:w-auto"
                      >
                        메인으로
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <OneViewFooter />
      <FloatingCTA />
    </div>
  );
}
