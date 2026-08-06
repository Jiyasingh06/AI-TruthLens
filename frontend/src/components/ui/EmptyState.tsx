import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-dashed border-white/12 bg-slate-950/30 px-6 py-10 text-center",
        className,
      )}
    >
      <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
        <Icon className="h-6 w-6" aria-hidden />
      </span>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400">{description}</p>
    </div>
  );
}
