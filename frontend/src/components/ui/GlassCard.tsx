import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
};

export function GlassCard({
  children,
  className,
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/[0.09] bg-white/[0.035] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8",
        "transition-[transform,box-shadow,border-color,background-color] duration-[280ms] ease-out",
        hover &&
          "hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.055] hover:shadow-[0_8px_32px_rgba(34,211,238,0.1)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
