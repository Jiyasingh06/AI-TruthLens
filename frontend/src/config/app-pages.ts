type AppPageDefinition = {
  title: string;
  description: string;
  eyebrow: string;
  emptyTitle: string;
  emptyDescription: string;
};

export const APP_PAGE_CONTENT: Record<string, AppPageDefinition> = {
  dashboard: {
    title: "Workspace Dashboard",
    description:
      "Monitor verification activity, review team momentum, and jump into the next analysis flow from a polished command center.",
    eyebrow: "Overview",
    emptyTitle: "Everything is ready for your next investigation",
    emptyDescription:
      "Connect backend workflows later to replace these placeholders with real detection telemetry and insights.",
  },
  fakeNews: {
    title: "Fake News Detection",
    description:
      "Stage article and claim verification flows with a structured workspace designed for future AI-backed analysis.",
    eyebrow: "Detection",
    emptyTitle: "Article verification workspace coming next",
    emptyDescription:
      "This placeholder area is ready for credibility signals, claim breakdowns, and analysis results.",
  },
  imageDetection: {
    title: "Image Detection",
    description:
      "Prepare a review surface for image authenticity checks, manipulation cues, and provenance insights.",
    eyebrow: "Detection",
    emptyTitle: "Image analysis modules will appear here",
    emptyDescription:
      "Use this surface later for visual anomaly scoring, metadata review, and confidence indicators.",
  },
  videoDetection: {
    title: "Video Detection",
    description:
      "Reserve space for deepfake screening workflows, frame-level evidence, and media trust diagnostics.",
    eyebrow: "Detection",
    emptyTitle: "Video verification workspace is scaffolded",
    emptyDescription:
      "This area can later host frame analysis timelines, summaries, and export-ready findings.",
  },
  audioDetection: {
    title: "Audio Detection",
    description:
      "Lay the groundwork for voice authenticity checks, synthetic audio review, and investigation notes.",
    eyebrow: "Detection",
    emptyTitle: "Audio authenticity tools will live here",
    emptyDescription:
      "Future iterations can plug in waveform insights, speaker cues, and confidence scoring panels.",
  },
  sourceCredibility: {
    title: "Source Credibility",
    description:
      "Track source trust signals, reputation snapshots, and publisher context in a dedicated review experience.",
    eyebrow: "Analysis",
    emptyTitle: "Source trust profiles are ready to be connected",
    emptyDescription:
      "Later this section can surface authority metrics, domain signals, and evidence summaries.",
  },
  history: {
    title: "History",
    description:
      "Browse prior verification sessions, revisit investigations, and manage saved workflow snapshots.",
    eyebrow: "Analysis",
    emptyTitle: "No completed investigations yet",
    emptyDescription:
      "Historical activity cards and search tools can be connected here once app logic is introduced.",
  },
  reports: {
    title: "Reports",
    description:
      "Organize polished verification deliverables, summaries, and stakeholder-ready analysis exports.",
    eyebrow: "Analysis",
    emptyTitle: "Report generation templates are prepared",
    emptyDescription:
      "This placeholder supports future export workflows, executive summaries, and audit-ready reports.",
  },
  settings: {
    title: "Settings",
    description:
      "Centralize workspace preferences, notifications, and system controls inside a clean account settings area.",
    eyebrow: "Account",
    emptyTitle: "Workspace controls will be managed here",
    emptyDescription:
      "When business logic arrives, this page can host preferences, alerts, and integration settings.",
  },
  profile: {
    title: "Profile",
    description:
      "Maintain analyst identity details, workspace role information, and future account preferences.",
    eyebrow: "Account",
    emptyTitle: "Profile details are waiting for account data",
    emptyDescription:
      "This surface can later show identity controls, role metadata, and activity highlights.",
  },
};
