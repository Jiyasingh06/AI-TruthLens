import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/Button";
import { HERO_SOCIAL_PROOF } from "../../config/landing";
import { EASE_OUT } from "../../utils/motion";
import { HeroBackground } from "./HeroBackground";
import { HeroDashboardPreview } from "./HeroDashboardPreview";

export function Hero() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28 lg:pb-32"
    >
      <HeroBackground />

      <div className="page-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.75,
            ease: EASE_OUT,
          }}
          className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(340px,480px)] lg:gap-12 xl:gap-16"
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left">
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200/90 backdrop-blur-md">
              <span aria-hidden className="text-sm leading-none">✨</span>
              AI-Powered Multimodal Verification Platform
            </p>

            <div className="relative w-full max-w-4xl">
              <div className="headline-glow" aria-hidden />
              <h1
                id="hero-heading"
                className="font-display text-4xl leading-[1.02] font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.35rem] xl:text-[5.1rem]"
              >
                Detect Fake News.{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                  Expose Deepfakes.
                </span>{" "}
                Trust Information.
              </h1>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              AI TruthLens is a multimodal platform that analyses text, images,
              video, and audio, delivering confidence scores and explainable
              insights so teams can verify content before it spreads.
            </p>

            <div
              className="mt-10 flex w-full max-w-md flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center lg:justify-start"
              role="group"
              aria-label="Primary actions"
            >
              <Button
                size="lg"
                className="min-w-[190px]"
                aria-label="Start detecting misinformation"
              >
                Start Detecting
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="min-w-[180px]"
                aria-label="View product demo"
              >
                <Play className="h-4 w-4" aria-hidden />
                View Demo
              </Button>
            </div>

            <div className="mt-8 flex w-full flex-col items-center gap-3 lg:items-start">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-slate-500 uppercase">
                Powered by
              </p>
              <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                {HERO_SOCIAL_PROOF.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-xs font-medium text-slate-200 shadow-[0_0_18px_rgba(15,23,42,0.35)] backdrop-blur-md"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <HeroDashboardPreview />
        </motion.div>

        <a
          href="#stats-heading"
          className="scroll-indicator group absolute inset-x-0 bottom-4 z-10 hidden flex-col items-center gap-2 text-center text-xs font-medium tracking-[0.2em] text-slate-400 uppercase sm:flex"
        >
          <span>Scroll to explore</span>
          <span className="scroll-indicator-line" aria-hidden />
        </a>
      </div>
    </section>
  );
}
