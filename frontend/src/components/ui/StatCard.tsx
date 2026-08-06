import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { GlassCard } from "./GlassCard";

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  helper: string;
  icon: LucideIcon;
  className?: string;
};

export function StatCard({
  label,
  value,
  change,
  helper,
  icon: Icon,
  className,
}: StatCardProps) {
  return (
    <GlassCard
      className={cn(
        "rounded-[2rem] border-white/10 bg-white/[0.045] p-5 sm:p-6",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-400">{label}</p>
          <p className="mt-4 text-3xl font-semibold tracking-tight text-white">{value}</p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3 text-sm">
        <span className="inline-flex items-center gap-1.5 text-emerald-300">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
          {change}
        </span>
        <span className="text-slate-500">{helper}</span>
      </div>
    </GlassCard>
  );
}
