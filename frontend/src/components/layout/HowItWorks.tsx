import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { HOW_IT_WORKS } from "../../config/landing";
import {
  fadeTransition,
  fadeUpVariants,
  staggerContainer,
} from "../../utils/motion";

export function HowItWorks() {
  const reducedMotion = useReducedMotion() ?? false;
  const item = fadeUpVariants(reducedMotion);

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="section-space relative scroll-mt-24"
    >
      <div className="page-container">
        <SectionHeading
          id="how-it-works-heading"
          eyebrow="Workflow"
          title="How it works"
          description="A clear path from upload to actionable report—optimized for speed and clarity."
          className="mb-14 lg:mb-16"
        />

        <motion.ol
          className="mx-auto flex max-w-xl list-none flex-col items-center p-0"
          variants={staggerContainer(reducedMotion, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {HOW_IT_WORKS.map((step, index) => (
            <motion.li
              key={step.title}
              variants={item}
              transition={fadeTransition(reducedMotion)}
              className="flex w-full flex-col items-center"
            >
              <article className="w-full rounded-3xl border border-white/[0.09] bg-white/[0.035] p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-[transform,box-shadow,border-color] duration-[280ms] ease-out hover:-translate-y-0.5 hover:border-cyan-400/25 hover:shadow-[0_8px_32px_rgba(34,211,238,0.1)] sm:p-8">
                <p className="text-xs font-semibold tracking-[0.16em] text-cyan-300/80 uppercase">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </article>

              {index < HOW_IT_WORKS.length - 1 ? (
                <ArrowDown
                  aria-hidden
                  className="my-4 h-5 w-5 text-cyan-400/70"
                />
              ) : null}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
