import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { SectionHeading } from "../ui/SectionHeading";
import { FEATURES } from "../../config/landing";
import {
  fadeTransition,
  fadeUpVariants,
  staggerContainer,
} from "../../utils/motion";

export function Features() {
  const reducedMotion = useReducedMotion() ?? false;
  const item = fadeUpVariants(reducedMotion);

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="section-space relative scroll-mt-24"
    >
      <div className="page-container">
        <SectionHeading
          id="features-heading"
          eyebrow="Capabilities"
          title="Multimodal detection, one platform"
          description="Cover the full attack surface of synthetic media—from fabricated headlines to cloned voices."
          className="mb-14 lg:mb-16"
        />

        <motion.ul
          className="grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8"
          variants={staggerContainer(reducedMotion, 0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-48px" }}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.li
                key={feature.title}
                variants={item}
                transition={fadeTransition(reducedMotion)}
              >
                <GlassCard className="h-full">
                  <div
                    aria-hidden
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
