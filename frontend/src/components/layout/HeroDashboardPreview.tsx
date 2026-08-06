import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ChevronRight, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { GlassCard } from "../ui/GlassCard";
import { DASHBOARD_MODULES } from "../../config/landing";
import { EASE_OUT } from "../../utils/motion";

const CONFIDENCE_DATA = [{ name: "Confidence", value: 98.7, fill: "#67e8f9" }];

const METRICS = [
  { label: "Overall Verdict", value: "Real" },
  { label: "Source Trust", value: "94%" },
  { label: "Content Type", value: "News Headline" },
  { label: "Processing Time", value: "0.82s" },
] as const;

export function HeroDashboardPreview() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={{ opacity: 0, x: reducedMotion ? 0 : 28, y: reducedMotion ? 0 : 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: reducedMotion ? 0.01 : 0.8, ease: EASE_OUT, delay: reducedMotion ? 0 : 0.12 }}
      className="relative hidden lg:block"
    >
      <div aria-hidden className="dashboard-preview-glow absolute inset-6 -z-10 rounded-[2rem]" />
      <GlassCard
        hover={false}
        className="dashboard-preview relative overflow-hidden rounded-[2rem] border-cyan-400/16 bg-slate-950/45 p-0 shadow-[0_18px_80px_rgba(8,145,178,0.16)]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <div className="p-6 xl:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-cyan-200/80 uppercase">
                Detection Result
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                AI Analysis Panel
              </h3>
            </div>
            <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200">
              Live Preview
            </div>
          </div>

          <div className="mt-6 grid grid-cols-[1.1fr_0.9fr] gap-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4">
              <p className="text-xs font-medium tracking-[0.14em] text-slate-400 uppercase">
                Confidence
              </p>
              <div className="mt-3 flex items-center gap-4">
                <div className="relative h-28 w-28 shrink-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      data={CONFIDENCE_DATA}
                      innerRadius="72%"
                      outerRadius="100%"
                      startAngle={90}
                      endAngle={-270}
                    >
                      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                      <RadialBar dataKey="value" cornerRadius={12} background={{ fill: "rgba(255,255,255,0.08)" }} />
                    </RadialBarChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-display text-2xl font-semibold text-white">98.7%</span>
                    <span className="text-[11px] tracking-wide text-slate-400 uppercase">Verified</span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-200">
                    <CheckCircle2 className="h-4 w-4" />
                    Overall Verdict: Real
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Signals align with trusted reporting patterns and clean source provenance.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-center gap-2 text-cyan-100">
                <Sparkles className="h-4 w-4 text-cyan-300" />
                <span className="text-sm font-medium">Explainable AI</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100">
                <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                Enabled
              </div>

              <div className="mt-5 space-y-3">
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between rounded-2xl border border-white/8 bg-slate-900/60 px-3 py-2.5"
                  >
                    <span className="text-xs tracking-wide text-slate-400 uppercase">{metric.label}</span>
                    <span className="text-sm font-medium text-white">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                <p className="text-sm font-medium text-white">Detected Modules</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Clock3 className="h-3.5 w-3.5" />
                Completed in 0.82s
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {DASHBOARD_MODULES.map((module) => (
                <span
                  key={module}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-200"
                >
                  {module}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/22 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition-[transform,background-color,border-color] duration-[280ms] ease-out hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-400/14"
            >
              View Detailed Report
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
