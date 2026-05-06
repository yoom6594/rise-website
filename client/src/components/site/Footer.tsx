/**
 * Footer — 사이트 정보, 연락처, 관련 링크, 정책
 */
import { ChevronUp, Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import { toast } from "sonner";
import { NAV_ITEMS } from "@/lib/site-data";

export function Footer() {
  const placeholder = (label: string) => () => toast.info(`${label} 페이지는 준비 중입니다.`);

  return (
    <footer className="relative bg-pine text-white">
      <div className="container py-16 lg:py-20 grid gap-10 lg:grid-cols-12">
        {/* Brand column */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2.5">
            <span className="relative size-11 grid place-items-center rounded-xl bg-gradient-to-br from-amber to-orange-500 text-pine font-numeric font-black text-base">
              R
            </span>
            <div className="leading-none">
              <div className="text-[10px] tracking-[0.18em] font-medium text-white/60">REGIONAL · INNOVATION · SYSTEM</div>
              <div className="font-display font-bold text-lg mt-0.5">RISE 사업단</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-md">
            RISE(Regional Innovation System & Education) 사업단은 지역혁신중심 대학지원체계를 통해 지역과 대학의 동반 성장을 만들어가는 통합 플랫폼입니다.
          </p>
          <div className="mt-6 space-y-2.5 text-sm">
            <a href="tel:042-000-0000" className="flex items-center gap-3 text-white/75 hover:text-amber transition-colors">
              <Phone className="size-4 text-amber" />
              <span className="font-numeric">042 — 000 — 0000</span>
            </a>
            <a href="mailto:rise@example.ac.kr" className="flex items-center gap-3 text-white/75 hover:text-amber transition-colors">
              <Mail className="size-4 text-amber" />
              rise@example.ac.kr
            </a>
          </div>

          <div className="mt-7 flex items-center gap-2">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                onClick={placeholder(label)}
                className="size-10 grid place-items-center rounded-full border border-white/15 hover:border-amber hover:bg-amber hover:text-pine transition-all"
              >
                <Icon className="size-4" />
              </button>
            ))}
          </div>
        </div>

        {/* Sitemap columns — IA 기반 1Depth × 2Depth */}
        <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-7">
          {NAV_ITEMS.map((group) => (
            <div key={group.label}>
              <h4 className="text-sm font-bold tracking-tight mb-4 text-white">{group.label}</h4>
              <ul className="space-y-2">
                {group.children.map((c) => (
                  <li key={c.label}>
                    <button
                      onClick={placeholder(`${group.label} > ${c.label}`)}
                      className="text-[13px] text-white/60 hover:text-amber transition-colors text-left"
                    >
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Address */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-bold tracking-tight mb-4">사업단 위치</h4>
          <address className="not-italic text-sm text-white/65 leading-relaxed">
            (06324) 대전광역시 유성구 RISE로 99 <br />
            지역혁신타워 8층 RISE 사업단 <br />
            <span className="text-white/45">평일 09:00 — 18:00</span>
          </address>
          <button
            onClick={placeholder("관련 사이트")}
            className="mt-6 w-full inline-flex items-center justify-between h-11 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-semibold transition-colors"
          >
            관련 사이트 바로가기
            <ChevronUp className="size-4 rotate-90" />
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <div className="flex items-center gap-4">
            <button onClick={placeholder("개인정보처리방침")} className="font-bold text-white/85 hover:text-amber">
              개인정보처리방침
            </button>
            <span className="text-white/20">|</span>
            <button onClick={placeholder("이용약관")} className="hover:text-amber">이용약관</button>
            <span className="text-white/20">|</span>
            <button onClick={placeholder("이메일무단수집거부")} className="hover:text-amber">이메일무단수집거부</button>
          </div>
          <div className="font-numeric">© 2026 RISE 사업단. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
