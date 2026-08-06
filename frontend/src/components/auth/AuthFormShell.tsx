import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type SocialAction = {
  label: string;
  icon: string;
};

type AuthFormShellProps = {
  formId: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  submitLabel: string;
  alternateLabel: string;
  alternateHref: string;
  alternateCta: string;
  footer?: ReactNode;
  children: ReactNode;
};

const SOCIAL_ACTIONS: SocialAction[] = [
  { label: "Continue with Google", icon: "G" },
  { label: "Continue with GitHub", icon: "GH" },
];

export function AuthFormShell({
  formId,
  onSubmit,
  submitLabel,
  alternateLabel,
  alternateHref,
  alternateCta,
  footer,
  children,
}: AuthFormShellProps) {
  return (
    <div className="space-y-6">
      <form id={formId} onSubmit={onSubmit} className="space-y-5">
        {children}

        <button type="submit" className="auth-primary-button w-full">
          {submitLabel}
        </button>
      </form>

      <div className="space-y-3">
        <p className="text-center text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
          Social sign-in
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {SOCIAL_ACTIONS.map((action) => (
            <button
              key={action.label}
              type="button"
              disabled
              className={cn("auth-social-button")}
              aria-disabled="true"
              title="Coming Soon"
            >
              <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-2 text-[11px] font-semibold tracking-[0.14em] text-slate-300 uppercase">
                {action.icon}
              </span>
              <span>{action.label}</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
                Coming Soon
              </span>
            </button>
          ))}
        </div>
      </div>

      {footer}

      <p className="text-center text-sm text-slate-400">
        {alternateLabel}{" "}
        <Link
          to={alternateHref}
          className="font-medium text-cyan-300 transition-colors duration-[280ms] hover:text-cyan-200"
        >
          {alternateCta}
        </Link>
      </p>
    </div>
  );
}
