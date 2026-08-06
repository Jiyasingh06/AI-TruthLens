import { useState, type ReactNode } from "react";
import { Sidebar } from "../components/layout/Sidebar";
import { Topbar } from "../components/layout/Topbar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-svh bg-[#04070f] text-slate-100">
      <div className="hero-radial-stack pointer-events-none absolute inset-0 opacity-60" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_58%)]" />

      <div className="relative flex min-h-svh">
        <Sidebar
          isMobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar onOpenSidebar={() => setMobileSidebarOpen(true)} />
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
