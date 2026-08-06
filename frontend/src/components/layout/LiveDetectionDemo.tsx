import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, CheckCircle2, LoaderCircle, Sparkles } from "lucide-react";
import { LIVE_DEMO_STAGES } from "../../config/landing";
import { EASE_OUT } from "../../utils/motion";
import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";

const SAMPLE_HEADLINE =
  "Global health agency confirms new climate-linked disease surveillance initiative";

const STEP_DELAY_MS = 900;

export function LiveDetectionDemo() {
  const reducedMotion = useReducedMotion() ?? false;
  const [headline, setHeadline] = useState(SAMPLE_HEADLINE);
  const [visibleStageCount, setVisibleStageCount] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    if (visibleStageCount >= LIVE_DEMO_STAGES.length) {
      setIsRunning(false);
      return;
    }

    const timeout = window.setTimeout(
      () => setVisibleStageCount((count) => count + 1),
      reducedMotion ? 0 : STEP_DELAY_MS,
    );

    return () => window.clearTimeout(timeout);
  }, [isRunning, reducedMotion, visibleStageCount]);

  const visibleStages = useMemo(
    () => LIVE_DEMO_STAGES.slice(0, visibleStageCount),
    [visibleStageCount],
  );

  const startDemo = () => {
    setVisibleStageCount(1);
    setIsRunning(true);
  };

  return (
    <section
      aria-labelledby="live-demo-heading"
      className="section-space relative overflow-hidden"
    >
      <div className="page-container">
        <SectionHeading
          id="live-demo-heading"
          eyebrow="Live Demo"
          title="Watch the inference pipeline unfold"
          description="A visual mock of how TruthLens processes breaking headlines from input to explanation."
          className="mb-10 lg:mb-12"
        />

        <GlassCard hover={false} className="overflow-hidden rounded-[2rem] p-0">
          <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="border-b border-white/10 bg-slate-950/55 p-6 sm:p-8 lg:border-r lg:border-b-0">
              <p className="text-xs font-semibold tracking-[0.18em] text-cyan-300/80 uppercase">
                User Input
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
                Paste News Headline
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                The demo stays local and visual only. It simulates a real AI workflow without sending data anywhere.
              </p>

              <label htmlFor="headline-demo" className="sr-only">
                Paste News Headline
              </label>
              <textarea
                id="headline-demo"
                value={headline}
                onChange={(event) => setHeadline(event.target.value)}
                rows={5}
                className="mt-6 w-full resize-none rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-100 outline-none transition-[border-color,box-shadow] duration-[280ms] focus:border-cyan-400/40 focus:shadow-[0_0_0_4px_rgba(34,211,238,0.08)]"
              />

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button size="lg" onClick={startDemo} className="min-w-[180px]">
                  {isRunning ? "Restart Demo" : "Run Demo"}
                </Button>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300">
                  Inference path: Input {"->"} Processing {"->"} Verdict
                </div>
              </div>
            </div>

            <div className="bg-[linear-gradient(180deg,rgba(15,23,42,0.7),rgba(4,7,15,0.92))] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-cyan-300/80 uppercase">
                    AI Pipeline
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-white">
                    Progressive analysis states
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs text-cyan-100">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                  Mock Inference
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <AnimatePresence initial={false}>
                  {visibleStages.map((stage, index) => {
                    const isLastVisible = index === visibleStages.length - 1;
                    const isProcessing = isRunning && isLastVisible && index < LIVE_DEMO_STAGES.length - 1;

                    return (
                      <div key={stage.label}>
                        <motion.div
                          initial={{ opacity: 0, y: reducedMotion ? 0 : 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: reducedMotion ? 0 : -10 }}
                          transition={{ duration: reducedMotion ? 0.01 : 0.48, ease: EASE_OUT }}
                          className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                              {isProcessing ? (
                                <LoaderCircle className="h-4.5 w-4.5 animate-spin" />
                              ) : (
                                <CheckCircle2 className="h-4.5 w-4.5" />
                              )}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <p className="text-sm font-semibold text-white">{stage.label}</p>
                                <span className="rounded-full border border-white/8 bg-slate-900/70 px-2 py-0.5 text-[11px] tracking-wide text-slate-400 uppercase">
                                  Step {index + 1}
                                </span>
                              </div>
                              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                                {stage.label === "User Input" ? headline || SAMPLE_HEADLINE : stage.detail}
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        {index < visibleStages.length - 1 ? (
                          <motion.div
                            initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: reducedMotion ? 0.01 : 0.32, ease: EASE_OUT }}
                            className="flex justify-center py-1 text-cyan-300/75"
                          >
                            <ArrowDown className="h-4 w-4" />
                          </motion.div>
                        ) : null}
                      </div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
