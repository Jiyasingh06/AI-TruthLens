import { useEffect, useMemo, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "../../utils/cn";

type NodePoint = {
  id: number;
  x: number;
  y: number;
  r: number;
  delay: number;
};

type Edge = {
  id: string;
  from: number;
  to: number;
};

const NODES: NodePoint[] = [
  { id: 0, x: 12, y: 22, r: 2.2, delay: 0 },
  { id: 1, x: 28, y: 38, r: 1.8, delay: 0.4 },
  { id: 2, x: 18, y: 58, r: 2.4, delay: 0.8 },
  { id: 3, x: 42, y: 18, r: 1.6, delay: 0.2 },
  { id: 4, x: 52, y: 42, r: 2.6, delay: 1.1 },
  { id: 5, x: 38, y: 68, r: 1.9, delay: 0.6 },
  { id: 6, x: 68, y: 28, r: 2.1, delay: 0.3 },
  { id: 7, x: 78, y: 52, r: 2.5, delay: 0.9 },
  { id: 8, x: 62, y: 72, r: 1.7, delay: 1.3 },
  { id: 9, x: 88, y: 34, r: 2.0, delay: 0.5 },
  { id: 10, x: 84, y: 72, r: 1.8, delay: 1.0 },
  { id: 11, x: 48, y: 82, r: 2.2, delay: 0.7 },
];

const EDGES: Edge[] = [
  { id: "e0", from: 0, to: 1 },
  { id: "e1", from: 0, to: 3 },
  { id: "e2", from: 1, to: 2 },
  { id: "e3", from: 1, to: 4 },
  { id: "e4", from: 2, to: 5 },
  { id: "e5", from: 3, to: 4 },
  { id: "e6", from: 3, to: 6 },
  { id: "e7", from: 4, to: 5 },
  { id: "e8", from: 4, to: 7 },
  { id: "e9", from: 5, to: 8 },
  { id: "e10", from: 5, to: 11 },
  { id: "e11", from: 6, to: 7 },
  { id: "e12", from: 6, to: 9 },
  { id: "e13", from: 7, to: 8 },
  { id: "e14", from: 7, to: 10 },
  { id: "e15", from: 8, to: 11 },
  { id: "e16", from: 9, to: 10 },
];

const ORBS = [
  {
    className:
      "left-[8%] top-[18%] h-56 w-56 bg-cyan-400/25 animate-float-orb",
    style: { animationDelay: "0s" },
  },
  {
    className:
      "right-[12%] top-[28%] h-72 w-72 bg-sky-500/20 animate-float-orb-slow",
    style: { animationDelay: "-4s" },
  },
  {
    className:
      "bottom-[12%] left-[28%] h-64 w-64 bg-teal-400/15 animate-float-orb",
    style: { animationDelay: "-8s" },
  },
  {
    className:
      "right-[30%] bottom-[20%] h-40 w-40 bg-indigo-400/20 animate-float-orb-slow",
    style: { animationDelay: "-2s" },
  },
] as const;

const PARTICLES = [
  { left: "7%", top: "16%", size: 4, delay: 0.2 },
  { left: "14%", top: "54%", size: 3, delay: 1.1 },
  { left: "24%", top: "72%", size: 5, delay: 2.1 },
  { left: "37%", top: "24%", size: 3, delay: 0.6 },
  { left: "46%", top: "62%", size: 4, delay: 1.8 },
  { left: "58%", top: "14%", size: 5, delay: 2.4 },
  { left: "68%", top: "46%", size: 3, delay: 1.4 },
  { left: "76%", top: "70%", size: 4, delay: 0.9 },
  { left: "86%", top: "20%", size: 5, delay: 2.8 },
  { left: "91%", top: "58%", size: 3, delay: 1.6 },
] as const;

type HeroBackgroundProps = {
  className?: string;
};

export function HeroBackground({ className }: HeroBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.4 });

  const nearX = useTransform(x, (v) => (reducedMotion ? 0 : v * 0.035));
  const nearY = useTransform(y, (v) => (reducedMotion ? 0 : v * 0.035));
  const midX = useTransform(x, (v) => (reducedMotion ? 0 : v * 0.02));
  const midY = useTransform(y, (v) => (reducedMotion ? 0 : v * 0.02));
  const farX = useTransform(x, (v) => (reducedMotion ? 0 : v * 0.01));
  const farY = useTransform(y, (v) => (reducedMotion ? 0 : v * 0.01));

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${x}px ${y}px, rgba(34,211,238,0.14), transparent 55%)`;

  const nodeMap = useMemo(() => {
    const map = new Map<number, NodePoint>();
    for (const node of NODES) map.set(node.id, node);
    return map;
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reducedMotion) return;

    const center = () => rectCenter(el);
    rawX.set(center().x);
    rawY.set(center().y);

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (!inside) return;
      rawX.set(event.clientX - rect.left);
      rawY.set(event.clientY - rect.top);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [rawX, rawY, reducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[#04070f]" />
      <div className="hero-radial-stack absolute inset-0 animate-radial-drift" />

      <motion.div
        style={{ x: farX, y: farY }}
        className="absolute -left-1/4 top-[-20%] h-[70%] w-[80%] will-change-transform"
      >
        <div className="hero-aurora hero-aurora-a h-full w-full animate-aurora-drift" />
      </motion.div>
      <motion.div
        style={{ x: midX, y: midY }}
        className="absolute -right-1/4 top-[10%] h-[65%] w-[70%] will-change-transform"
      >
        <div className="hero-aurora hero-aurora-b h-full w-full animate-aurora-drift-alt" />
      </motion.div>
      <div className="absolute bottom-[-15%] left-[15%] h-[50%] w-[70%]">
        <div className="hero-aurora hero-aurora-c h-full w-full animate-aurora-pulse" />
      </div>

      {!reducedMotion ? (
        <motion.div
          className="absolute inset-0 will-change-[background]"
          style={{ background: spotlight }}
        />
      ) : null}

      <motion.div
        style={{ x: farX, y: farY }}
        className="hero-grid absolute inset-0 opacity-40 will-change-transform"
      />
      <div className="hero-grid-fade absolute inset-0" />

      <motion.div
        style={{ x: midX, y: midY }}
        className="absolute inset-0 will-change-transform"
      >
        {ORBS.map((orb) => (
          <div
            key={orb.className}
            className={cn(
              "absolute rounded-full blur-3xl will-change-transform",
              orb.className,
            )}
            style={orb.style}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0">
        {PARTICLES.map((particle) => (
          <span
            key={`${particle.left}-${particle.top}`}
            className="hero-particle animate-particle-float"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ x: nearX, y: nearY }}
        className="absolute inset-0 h-full w-full will-change-transform"
      >
        <defs>
          <linearGradient id="neural-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.05)" />
            <stop offset="50%" stopColor="rgba(56,189,248,0.45)" />
            <stop offset="100%" stopColor="rgba(45,212,191,0.05)" />
          </linearGradient>
          <filter id="node-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="0.6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {EDGES.map((edge) => {
          const from = nodeMap.get(edge.from);
          const to = nodeMap.get(edge.to);
          if (!from || !to) return null;
          return (
            <motion.line
              key={edge.id}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="url(#neural-edge)"
              strokeWidth={0.15}
              initial={false}
              animate={
                reducedMotion
                  ? { opacity: 0.28 }
                  : { opacity: [0.12, 0.45, 0.12] }
              }
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 5.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: (edge.from + edge.to) * 0.18,
                    }
              }
            />
          );
        })}

        {NODES.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.r * 0.35}
            fill="rgba(165,243,252,0.95)"
            filter="url(#node-glow)"
            initial={false}
            animate={
              reducedMotion
                ? { opacity: 0.55, scale: 1 }
                : { opacity: [0.4, 0.9, 0.4], scale: [1, 1.2, 1] }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: node.delay,
                  }
            }
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          />
        ))}
      </motion.svg>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,7,15,0.35)_55%,rgba(4,7,15,0.85)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04070f] to-transparent" />
    </div>
  );
}

function rectCenter(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return { x: rect.width / 2, y: rect.height / 2 };
}
