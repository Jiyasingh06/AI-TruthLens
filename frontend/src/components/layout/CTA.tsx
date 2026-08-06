import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import { EASE_OUT } from "../../utils/motion";

export function CTA() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative pb-20 sm:pb-24 lg:pb-32 2xl:pb-36"
    >
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-48px" }}
          transition={{
            duration: reducedMotion ? 0.01 : 0.55,
            ease: EASE_OUT,
          }}
          className="relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-cyan-500/15 via-slate-900/80 to-teal-500/10 px-6 py-16 text-center shadow-[0_8px_40px_rgba(0,0,0,0.28)] sm:px-12 sm:py-20 lg:px-16 lg:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/25 blur-3xl"
          />
          <h2
            id="cta-heading"
            className="font-display relative text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ready to Detect Misinformation?
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Launch AI TruthLens and bring multimodal authenticity checks into
            your verification workflow.
          </p>
          <div className="relative mt-10 flex justify-center sm:mt-12">
            <Button size="lg" aria-label="Launch AI TruthLens">
              Launch AI TruthLens
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
