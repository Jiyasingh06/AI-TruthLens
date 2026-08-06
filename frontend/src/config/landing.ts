import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  BrainCircuit,
  Image,
  Newspaper,
  ShieldCheck,
  Video,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HowItWorksStep = {
  title: string;
  description: string;
};

export type TechItem = {
  name: string;
  category: string;
};

export type SocialProofItem = {
  name: string;
};

export type DemoStage = {
  label: string;
  detail: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Technology", href: "#technology" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
];

export const GITHUB_URL = "https://github.com";

export const STATS: StatItem[] = [
  { value: "98.7%", label: "Detection Accuracy" },
  { value: "1M+", label: "Media Analysed" },
  { value: "5", label: "Detection Modules" },
  { value: "24/7", label: "AI Availability" },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Fake News Detection",
    description:
      "Cross-check claims against trusted signals and linguistic patterns to surface misinformation early.",
    icon: Newspaper,
  },
  {
    title: "Image Deepfake Detection",
    description:
      "Spot facial and texture artifacts in still imagery with multimodal forensic analysis.",
    icon: Image,
  },
  {
    title: "Video Deepfake Detection",
    description:
      "Analyse frame-level inconsistencies, temporal flicker, and lip-sync anomalies in video.",
    icon: Video,
  },
  {
    title: "AI Audio Detection",
    description:
      "Identify synthetic speech and voice clones through spectral and prosodic cues.",
    icon: AudioLines,
  },
  {
    title: "Source Credibility",
    description:
      "Score publisher reliability and provenance so context travels with every verdict.",
    icon: ShieldCheck,
  },
  {
    title: "Explainable AI",
    description:
      "Readable confidence scores and rationale—so every decision is transparent and auditable.",
    icon: BrainCircuit,
  },
];

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    title: "Upload",
    description: "Submit text, image, video, or audio for multimodal analysis.",
  },
  {
    title: "AI Processing",
    description: "Specialized models inspect content across linguistic and visual signals.",
  },
  {
    title: "Confidence Score",
    description: "Receive a calibrated authenticity score grounded in forensic evidence.",
  },
  {
    title: "Explanation",
    description: "Review human-readable insights that clarify why the model decided.",
  },
  {
    title: "Report Generation",
    description: "Export a shareable report for teams, newsrooms, and investigators.",
  },
];

export const TECHNOLOGIES: TechItem[] = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Runtime" },
  { name: "FastAPI", category: "API" },
  { name: "MongoDB", category: "Database" },
  { name: "PyTorch", category: "ML" },
  { name: "Transformers", category: "NLP" },
  { name: "OpenCV", category: "Vision" },
];

export const HERO_SOCIAL_PROOF: SocialProofItem[] = [
  { name: "React" },
  { name: "FastAPI" },
  { name: "PyTorch" },
  { name: "Hugging Face" },
  { name: "MongoDB" },
  { name: "OpenCV" },
];

export const DASHBOARD_MODULES: readonly string[] = [
  "Fake News",
  "Source Credibility",
  "Image Forensics",
];

export const LIVE_DEMO_STAGES: readonly DemoStage[] = [
  {
    label: "User Input",
    detail: "Paste News Headline",
  },
  {
    label: "AI Processing",
    detail: "Cross-checking source reputation and linguistic risk signals.",
  },
  {
    label: "Analysis Complete",
    detail: "Multimodal verification finished successfully.",
  },
  {
    label: "Verdict",
    detail: "Likely Real",
  },
  {
    label: "Confidence",
    detail: "98.7% confidence after evidence weighting.",
  },
  {
    label: "Explanation",
    detail: "Headline tone is neutral, sourcing aligns with trusted outlets, and no manipulation patterns were flagged.",
  },
];

/** Pre-sliced footer list — avoids per-render `.slice()` allocations. */
export const FOOTER_TECH_PREVIEW: readonly string[] = TECHNOLOGIES.slice(
  0,
  5,
).map((tech) => tech.name);

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];
