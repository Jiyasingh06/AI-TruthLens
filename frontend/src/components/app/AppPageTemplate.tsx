import type { LucideIcon } from "lucide-react";
import { Button } from "../ui/Button";
import { EmptyState } from "../ui/EmptyState";
import { PageHeader } from "../ui/PageHeader";
import { SectionCard } from "../ui/SectionCard";

type AppPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  emptyTitle: string;
  emptyDescription: string;
};

export function AppPageTemplate({
  eyebrow,
  title,
  description,
  icon,
  emptyTitle,
  emptyDescription,
}: AppPageTemplateProps) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        actions={
          <Button variant="secondary" className="rounded-full px-5">
            Placeholder Action
          </Button>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(20rem,1fr)]">
        <SectionCard
          title="Workspace Preview"
          description="This reusable content region keeps the page structure polished while backend and analysis logic are added later."
        >
          <EmptyState
            icon={icon}
            title={emptyTitle}
            description={emptyDescription}
          />
        </SectionCard>

        <SectionCard
          title="Implementation Notes"
          description="Reusable cards help each module stay consistent across the app shell."
        >
          <ul className="space-y-3 text-sm leading-6 text-slate-300">
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              Route scaffolding is connected and protected by frontend-only auth guards.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              Future detection logic can replace these placeholders without redesigning the layout.
            </li>
            <li className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              Shared header and card components keep page structure accessible and production-ready.
            </li>
          </ul>
        </SectionCard>
      </div>
    </>
  );
}
