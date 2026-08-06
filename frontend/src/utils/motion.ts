import type { Transition, Variants } from "framer-motion";

/** Premium ease — soft deceleration, no bounce. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function fadeUpVariants(reducedMotion: boolean): Variants {
  return {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 16 },
    visible: { opacity: 1, y: 0 },
  };
}

export function staggerContainer(
  reducedMotion: boolean,
  stagger = 0.07,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : stagger,
        delayChildren: reducedMotion ? 0 : 0.06,
      },
    },
  };
}

export function fadeTransition(
  reducedMotion: boolean,
  delay = 0,
): Transition {
  return {
    duration: reducedMotion ? 0.01 : 0.55,
    delay: reducedMotion ? 0 : delay,
    ease: EASE_OUT,
  };
}
