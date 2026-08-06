import { Check, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { fadeTransition, fadeUpVariants } from "../utils/motion";

type AuthLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  aside?: ReactNode;
};

const DEFAULT_ASIDE_ITEMS = [
  "Fake News Detection",
  "Image Deepfake Detection",
  "Video Analysis",
  "Audio Verification",
  "Explainable AI",
  "Source Credibility",
] as const;

export function AuthLayout({
  title,
  description,
  children,
  aside,
}: AuthLayoutProps) {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div className="relative min-h-svh overflow-hidden bg-[#04070f] text-slate-100">
      <div className="hero-radial-stack absolute inset-0 animate-radial-drift opacity-90" />
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="hero-grid-fade absolute inset-0" />
      <div className="hero-aurora hero-aurora-a animate-aurora-drift absolute top-[-8rem] left-[-6rem] h-[22rem] w-[22rem]" />
      <div className="hero-aurora hero-aurora-b animate-aurora-drift-alt absolute right-[-10rem] bottom-[-8rem] h-[24rem] w-[24rem]" />

      <div className="page-container relative z-10 flex min-h-svh flex-col py-8 sm:py-10">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md transition-[border-color,background-color,transform] duration-[280ms] hover:border-cyan-400/35 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
            </span>
            <span className="font-display text-base font-semibold tracking-tight text-white">
              AI TruthLens
            </span>
          </Link>
          <Link
            to="/"
            className="rounded-full px-4 py-2 text-sm text-slate-300 transition-colors duration-[280ms] hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
          >
            Back to Home
          </Link>
        </div>

        <div className="relative flex flex-1 items-center py-10 lg:py-14">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,28rem)] lg:gap-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants(reducedMotion)}
              transition={fadeTransition(reducedMotion)}
              className="auth-panel-shell"
            >
              <div className="headline-glow" />
              <div className="auth-panel">
                <p className="text-xs font-semibold tracking-[0.22em] text-cyan-300/90 uppercase">
                  Secure access
                </p>
                <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {title}
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>
                <div className="mt-8">{children}</div>
              </div>
            </motion.div>

            <div className="hidden lg:block">
              {aside ?? (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUpVariants(reducedMotion)}
                  transition={fadeTransition(reducedMotion)}
                  className="auth-value-panel"
                >
                  <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[1.25rem] border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <ShieldCheck className="h-6 w-6" aria-hidden />
                  </div>
                  <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-cyan-300/90 uppercase">
                    Why AI TruthLens?
                  </p>
                  <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white">
                    Explainable multimodal verification in one premium workspace.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    Built for trust and safety teams that need a clear path from signal
                    detection to source-backed decisions.
                  </p>

                  <div className="mt-8 grid gap-3">
                    {DEFAULT_ASIDE_ITEMS.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-[1.35rem] border border-white/10 bg-slate-950/35 px-4 py-3.5"
                      >
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                          <Check className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="text-sm font-medium text-slate-200">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
