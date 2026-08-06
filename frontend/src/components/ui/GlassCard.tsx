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
        "relative overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.035] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8",
        "transition-[transform,box-shadow,border-color,background-color] duration-[280ms] ease-out",
        hover &&
          "hover:-translate-y-1.5 hover:border-cyan-400/25 hover:bg-white/[0.055] hover:shadow-[0_18px_48px_rgba(34,211,238,0.12)]",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] opacity-100",
          "before:absolute before:inset-0 before:rounded-[inherit] before:p-px before:[background:linear-gradient(135deg,rgba(103,232,249,0.28),rgba(255,255,255,0.08),rgba(56,189,248,0.22))] before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:xor] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor]",
          hover && "transition-opacity duration-[280ms] group-hover:opacity-100",
        )}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-3xl"
      />
      {children}
    </div>
  );
}
