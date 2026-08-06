import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Clock3,
  Command,
  LayoutPanelTop,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { DASHBOARD_QUICK_ACTIONS } from "../../config/app-navigation";
import { GlassCard } from "../../components/ui/GlassCard";
import { PageHeader } from "../../components/ui/PageHeader";
import { SectionCard } from "../../components/ui/SectionCard";
import { StatCard } from "../../components/ui/StatCard";

const DASHBOARD_STATS = [
  {
    label: "Investigations Prepared",
    value: "24",
    change: "+12% this week",
    helper: "vs last cycle",
    icon: Activity,
  },
  {
    label: "Detection Workflows",
    value: "4",
    change: "All modules scaffolded",
    helper: "news, image, video, audio",
    icon: SearchCheck,
  },
  {
    label: "Source Reviews",
    value: "18",
    change: "+5 queued",
    helper: "analysis-ready",
    icon: ShieldCheck,
  },
  {
    label: "Reports Planned",
    value: "9",
    change: "+3 drafts",
    helper: "awaiting data integrations",
    icon: BadgeCheck,
  },
];

const RECENT_ACTIVITY = [
  {
    title: "Dashboard foundation activated",
    description: "Core routing, auth gates, and the premium shell are now wired together.",
    time: "Just now",
  },
  {
    title: "Detection routes prepared",
    description: "News, image, video, and audio placeholder experiences are ready for future analysis logic.",
    time: "Today",
  },
  {
    title: "Reports workspace reserved",
    description: "A polished structure is in place for export-ready verification summaries.",
    time: "Today",
  },
];

export function DashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Overview"
        title="Verification Command Center"
        description="A professional placeholder dashboard for tracking investigations, navigating core workflows, and surfacing the next actions for your team."
        actions={
          <Link
            to="/detect/news"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/12 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.14)] transition-[transform,border-color,background-color] duration-[280ms] hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-400/16"
          >
            <Command className="h-4 w-4" aria-hidden />
            Start Analysis
          </Link>
        }
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {DASHBOARD_STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(20rem,1fr)]">
        <SectionCard
          title="Recent Activity"
          description="Use this section later for live investigation logs, verification outcomes, and collaboration events."
          action={
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
              <Clock3 className="h-3.5 w-3.5" aria-hidden />
              Updated in real time later
            </span>
          }
        >
          <div className="space-y-4">
            {RECENT_ACTIVITY.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
              >
                <div className="flex flex-col items-center">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <LayoutPanelTop className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  {index < RECENT_ACTIVITY.length - 1 ? (
                    <span className="mt-2 h-full w-px bg-white/10" aria-hidden />
                  ) : null}
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-base font-semibold text-white">{item.title}</h2>
                    <span className="text-xs font-medium text-slate-500">{item.time}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          title="Quick Actions"
          description="Primary entry points for the most common verification flows."
        >
          <div className="space-y-4">
            {DASHBOARD_QUICK_ACTIONS.map((action) => (
              <Link
                key={action.title}
                to={action.path}
                className="group block"
              >
                <GlassCard className="rounded-[1.75rem] border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5">
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.12)]">
                      <action.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <h2 className="text-base font-semibold text-white">{action.title}</h2>
                        <ArrowRight className="h-4 w-4 text-slate-500 transition-transform duration-[280ms] group-hover:translate-x-1 group-hover:text-cyan-300" />
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{action.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </SectionCard>
      </div>
    </>
  );
}
