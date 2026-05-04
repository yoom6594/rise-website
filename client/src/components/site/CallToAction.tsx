/**
 * CallToAction — 사용자별 진입 경로 유도 (학생/교수/기업 분리 행동 유도)
 * UX 핵심: 페르소나별 명확한 경로 제시
 */
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2, GraduationCap } from "lucide-react";
import { toast } from "sonner";

const PERSONAS = [
  {
    id: "student",
    icon: GraduationCap,
    badge: "FOR STUDENTS",
    title: "학생이라면",
    desc: "캡스톤디자인, 인턴십, 창업지원 등 진로에 필요한 프로그램을 한 번에 찾으세요.",
    cta: "프로그램 둘러보기",
    color: "from-primary to-pine",
    accent: "text-amber",
  },
  {
    id: "faculty",
    icon: Briefcase,
    badge: "FOR FACULTY",
    title: "교수·연구자라면",
    desc: "지역 특화 R&D 공모, 산학협력 과제, 캡스톤디자인 운영 지원을 확인하세요.",
    cta: "연구개발 안내",
    color: "from-amber to-orange-500",
    accent: "text-pine",
  },
  {
    id: "corporate",
    icon: Building2,
    badge: "FOR COMPANIES",
    title: "지역 기업이라면",
    desc: "가족회사 등록을 통해 우수 인재 채용, 공동 R&D, 산학협력 기회를 만나세요.",
    cta: "가족회사 신청",
    color: "from-emerald-700 to-emerald-900",
    accent: "text-amber",
  },
];

export function CallToAction() {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-primary uppercase">
            <span className="block w-8 h-px bg-primary" />
            How to Join
            <span className="block w-8 h-px bg-primary" />
          </div>
          <h2 className="mt-4 font-display font-black text-4xl lg:text-5xl tracking-tight leading-tight">
            나에게 맞는 <br className="sm:hidden" />
            <span className="font-editorial italic font-semibold text-primary">RISE 참여 경로</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            누구나 RISE 사업의 일부가 될 수 있습니다. 당신의 역할에 맞는 시작점을 안내해 드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {PERSONAS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                onClick={() => toast.info(`${p.title} 전용 페이지는 준비 중입니다.`)}
                className={`group relative overflow-hidden rounded-3xl p-7 lg:p-9 text-left text-white bg-gradient-to-br ${p.color} hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="absolute -right-8 -top-8 size-40 rounded-full bg-white/10 blur-2xl group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute -right-4 -bottom-12 size-48 rounded-full bg-white/5 blur-2xl" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <span className="size-14 grid place-items-center rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
                      <Icon className={`size-7 ${p.accent}`} strokeWidth={1.75} />
                    </span>
                    <span className="text-[11px] tracking-[0.2em] font-bold opacity-80">{p.badge}</span>
                  </div>
                  <h3 className="font-display font-black text-3xl lg:text-4xl tracking-tight">{p.title}</h3>
                  <p className="mt-4 text-white/85 leading-relaxed text-[15px]">{p.desc}</p>

                  <div className="mt-10 inline-flex items-center gap-2 font-bold border-b-2 border-white/40 pb-1.5 group-hover:border-white transition-colors">
                    {p.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
