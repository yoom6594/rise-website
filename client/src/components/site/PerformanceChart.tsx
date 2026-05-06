/**
 * PerformanceChart — 단위과제별 성과현황 위젯
 * - 상단: BarChart (recharts)
 * - 하단: 4개 KPI 카드 (% + delta)
 * - 컬러: PANTONE 2747C 계열 + Cyan Teal
 */
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Plus, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PERFORMANCE_BY_UNIT } from "@/lib/site-data";
import { toast } from "sonner";

const COLOR_MAP = {
  primary: "var(--primary)",
  teal: "var(--teal)",
  amber: "var(--amber)",
  pine: "var(--pine)",
} as const;

export function PerformanceChart() {
  const data = PERFORMANCE_BY_UNIT.map((u) => ({
    short: u.short,
    value: u.value,
    fill: COLOR_MAP[u.colorVar],
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-2xl shadow-foreground/25 overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2 border-b border-border/60">
        <div className="flex items-center gap-2">
          <span className="size-7 grid place-items-center rounded-md bg-primary/10 text-primary">
            <BarChart3 className="size-3.5" strokeWidth={2.4} />
          </span>
          <div>
            <span className="font-numeric text-[10px] tracking-[0.2em] font-bold text-primary uppercase">
              Performance
            </span>
            <h3 className="font-display font-bold text-[15px] tracking-tight text-foreground leading-tight">
              단위과제별 성과현황
            </h3>
          </div>
        </div>
        <button
          onClick={() => toast.info("성과 대시보드는 준비 중입니다.")}
          className="text-[11px] tracking-[0.16em] font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
        >
          MORE
          <Plus className="size-3" />
        </button>
      </div>

      {/* Chart */}
      <div className="px-3 pt-2 pb-1 h-[150px] lg:h-[160px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 6, left: -22, bottom: -4 }}
            barCategoryGap="22%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--border)"
              opacity={0.6}
            />
            <XAxis
              dataKey="short"
              tick={{ fontSize: 11, fill: "var(--muted-foreground)", fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "var(--mist)", opacity: 0.4 }}
              contentStyle={{
                background: "var(--popover)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--foreground)",
              }}
              formatter={(v: number) => [`${v}%`, "달성률"]}
            />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={42}>
              {data.map((d, i) => (
                <Cell key={i} fill={d.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* KPI cards */}
      <div className="px-3 pb-3 pt-1 grid grid-cols-2 gap-2 flex-1">
        {PERFORMANCE_BY_UNIT.map((u) => (
          <button
            key={u.id}
            onClick={() => toast.info(`${u.name} 상세 성과는 준비 중입니다.`)}
            className="group flex items-center justify-between rounded-lg bg-mist/60 hover:bg-mist border border-border/40 px-3 py-2 transition-colors text-left"
          >
            <div className="min-w-0">
              <div className="text-[11.5px] font-bold text-foreground/80 tracking-tight truncate">
                {u.name}
              </div>
              <div className="flex items-center gap-1 text-[9.5px] font-numeric font-bold text-emerald-600 tracking-wider">
                <TrendingUp className="size-2.5" />
                {u.delta}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span
                className="font-numeric font-extrabold text-[18px] leading-none tabular-nums"
                style={{ color: COLOR_MAP[u.colorVar] }}
              >
                {u.value}
                <span className="text-[11px] font-bold opacity-70">%</span>
              </span>
              <ArrowUpRight className="size-3 text-muted-foreground/0 group-hover:text-primary transition-colors" />
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
