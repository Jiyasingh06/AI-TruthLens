import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { TECHNOLOGIES } from "../../config/landing";
import {
  fadeTransition,
  fadeUpVariants,
  staggerContainer,
} from "../../utils/motion";

export function Technology() {
  const reducedMotion = useReducedMotion() ?? false;
  const item = fadeUpVariants(reducedMotion);

  return (
    <section
      id="technology"
      aria-labelledby="technology-heading"
      className="section-space relative scroll-mt-24"
    >
      <div className="page-container">
        <SectionHeading
          id="technology-heading"
          eyebrow="Stack"
          title="Technology that powers TruthLens"
          description="A modern fullstack and ML stack engineered for precision, speed, and explainability."
          className="mb-14 lg:mb-16"
        />

        <motion.ul
          className="grid list-none grid-cols-2 gap-4 p-0 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-6"
          variants={staggerContainer(reducedMotion, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {TECHNOLOGIES.map((tech) => (
            <motion.li
              key={tech.name}
              variants={item}
              transition={fadeTransition(reducedMotion)}
            >
              <GlassCard className="h-full text-center">
                <p className="font-display text-base font-semibold text-white sm:text-lg">
                  {tech.name}
                </p>
                <p className="mt-2 text-xs tracking-wide text-slate-500 uppercase">
                  {tech.category}
                </p>
              </GlassCard>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
