import { AlertTriangle, ArrowRight, Binary, Home, Radar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";

const SIGNALS = [
  "No route matched this request",
  "The requested page may have moved",
  "Your investigation can continue from the dashboard",
] as const;

export function NotFoundPage() {
  return (
    <div className="relative min-h-svh overflow-hidden bg-[#04070f] text-slate-100">
      <div className="hero-radial-stack absolute inset-0 opacity-90" />
      <div className="hero-grid absolute inset-0 opacity-25" />
      <div className="hero-grid-fade absolute inset-0" />
      <div className="hero-aurora hero-aurora-a absolute top-[-6rem] left-[8%] h-[20rem] w-[20rem] animate-aurora-drift" />
      <div className="hero-aurora hero-aurora-c absolute right-[10%] bottom-[-7rem] h-[18rem] w-[18rem] animate-aurora-pulse" />

      <div className="page-container relative z-10 flex min-h-svh items-center justify-center py-12">
        <GlassCard className="w-full max-w-5xl rounded-[2.5rem] border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-0 shadow-[0_24px_90px_rgba(2,8,23,0.55)]">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-cyan-200 uppercase">
                <AlertTriangle className="h-4 w-4" aria-hidden />
                Error 404
              </div>
              <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                The signal vanished before the AI could verify it.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                This route is outside the current TruthLens map. Return to the landing page
                or reopen the verification dashboard to continue your investigation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Radar className="h-4 w-4" aria-hidden />
                    Open Dashboard
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                    <Home className="h-4 w-4" aria-hidden />
                    Back to Home
                  </Button>
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {SIGNALS.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-950/35 px-4 py-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 bg-slate-950/35 p-8 sm:p-10 lg:border-t-0 lg:border-l lg:p-12">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_36%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                        AI Route Scanner
                      </p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        Missing destination
                      </p>
                    </div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                      <Binary className="h-5 w-5" aria-hidden />
                    </span>
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <p className="text-xs tracking-[0.16em] text-slate-500 uppercase">
                        Status
                      </p>
                      <p className="mt-2 text-sm font-medium text-rose-100">
                        Route confidence: 0%
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                      <p className="text-xs tracking-[0.16em] text-slate-500 uppercase">
                        Recommendation
                      </p>
                      <p className="mt-2 text-sm font-medium text-slate-200">
                        Return to a verified navigation path
                      </p>
                    </div>
                  </div>

                  <Link
                    to="/dashboard"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition-colors duration-[280ms] hover:text-cyan-100"
                  >
                    Resume protected workspace
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300">
                <Sparkles className="h-4 w-4 text-cyan-300" aria-hidden />
                Beautiful fallback page active
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
