import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { GlassCard } from "./GlassCard";

type SectionCardProps = HTMLAttributes<HTMLDivElement> & {
  title?: string;
  description?: string;
  action?: ReactNode;
};

export function SectionCard({
  title,
  description,
  action,
  className,
  children,
  ...props
}: SectionCardProps) {
  return (
    <GlassCard
      hover={false}
      className={cn("rounded-[2rem] border-white/10 bg-white/[0.045]", className)}
      {...props}
    >
      {title || description || action ? (
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            {title ? <h2 className="text-lg font-semibold text-white">{title}</h2> : null}
            {description ? (
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                {description}
              </p>
            ) : null}
          </div>
          {action ? <div className="shrink-0">{action}</div> : null}
        </div>
      ) : null}
      {children}
    </GlassCard>
  );
}
