import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { STATS } from "../../config/landing";
import {
  fadeTransition,
  fadeUpVariants,
  staggerContainer,
} from "../../utils/motion";

export function Stats() {
  const reducedMotion = useReducedMotion() ?? false;
  const item = fadeUpVariants(reducedMotion);

  return (
    <section
      aria-labelledby="stats-heading"
      className="section-space relative"
    >
      <div className="page-container">
        <SectionHeading
          id="stats-heading"
          eyebrow="Platform signals"
          title="Built for trust at scale"
          description="Production-grade detection metrics designed for newsrooms, platforms, and security teams."
          className="mb-14 lg:mb-16"
        />

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 lg:gap-8"
          variants={staggerContainer(reducedMotion)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-48px" }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              transition={fadeTransition(reducedMotion)}
            >
              <GlassCard className="h-full text-center">
                <p className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-slate-400">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
