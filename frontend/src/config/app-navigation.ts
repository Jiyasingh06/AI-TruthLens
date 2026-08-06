import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  BadgeCheck,
  BarChart3,
  FileText,
  Gauge,
  History,
  ImageIcon,
  SearchCheck,
  Settings,
  ShieldCheck,
  UserCircle2,
  Video,
} from "lucide-react";

export type AppNavItem = {
  label: string;
  path: string;
  icon: LucideIcon;
  shortLabel?: string;
};

export type AppNavGroup = {
  label: string;
  items: AppNavItem[];
};

export const APP_NAVIGATION: AppNavGroup[] = [
  {
    label: "Dashboard",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: Gauge,
      },
    ],
  },
  {
    label: "Detection",
    items: [
      {
        label: "Fake News",
        path: "/detect/news",
        icon: SearchCheck,
        shortLabel: "News",
      },
      {
        label: "Image Detection",
        path: "/detect/image",
        icon: ImageIcon,
        shortLabel: "Image",
      },
      {
        label: "Video Detection",
        path: "/detect/video",
        icon: Video,
        shortLabel: "Video",
      },
      {
        label: "Audio Detection",
        path: "/detect/audio",
        icon: AudioLines,
        shortLabel: "Audio",
      },
    ],
  },
  {
    label: "Analysis",
    items: [
      {
        label: "Source Credibility",
        path: "/source-credibility",
        icon: ShieldCheck,
      },
      {
        label: "History",
        path: "/history",
        icon: History,
      },
      {
        label: "Reports",
        path: "/reports",
        icon: FileText,
      },
    ],
  },
  {
    label: "Account",
    items: [
      {
        label: "Settings",
        path: "/settings",
        icon: Settings,
      },
      {
        label: "Profile",
        path: "/profile",
        icon: UserCircle2,
      },
    ],
  },
];

export const DASHBOARD_QUICK_ACTIONS = [
  {
    title: "Analyze a News Article",
    description: "Open the fake news workflow to stage article verification.",
    path: "/detect/news",
    icon: SearchCheck,
  },
  {
    title: "Review Source Credibility",
    description: "Inspect source-level trust signals with reusable placeholder views.",
    path: "/source-credibility",
    icon: BadgeCheck,
  },
  {
    title: "Generate a Report",
    description: "Jump into reports to prepare a shareable verification summary.",
    path: "/reports",
    icon: BarChart3,
  },
];
