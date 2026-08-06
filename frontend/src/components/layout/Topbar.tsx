import { Bell, ChevronDown, LogOut, Menu, Search, Settings2, UserCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { APP_NAVIGATION } from "../../config/app-navigation";
import { useAuth } from "../../hooks/useAuth";
import { cn } from "../../utils/cn";

type TopbarProps = {
  onOpenSidebar: () => void;
};

type Breadcrumb = {
  label: string;
  path: string;
};

const LABEL_OVERRIDES: Record<string, string> = {
  detect: "Detection",
  news: "Fake News",
  image: "Image Detection",
  video: "Video Detection",
  audio: "Audio Detection",
  "source-credibility": "Source Credibility",
};

function getBreadcrumbs(pathname: string): Breadcrumb[] {
  if (pathname === "/dashboard") {
    return [{ label: "Dashboard", path: "/dashboard" }];
  }

  const segments = pathname.split("/").filter(Boolean);

  return segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    const match = APP_NAVIGATION.flatMap((group) => group.items).find((item) => item.path === path);

    return {
      path,
      label:
        match?.label ??
        LABEL_OVERRIDES[segment] ??
        segment.replace(/-/g, " ").replace(/\b\w/g, (value) => value.toUpperCase()),
    };
  });
}

export function Topbar({ onOpenSidebar }: TopbarProps) {
  const location = useLocation();
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);

  const breadcrumbs = useMemo(() => getBreadcrumbs(location.pathname), [location.pathname]);
  const initials = useMemo(() => {
    const fallback = "AT";
    const name = user?.name?.trim();

    if (!name) {
      return fallback;
    }

    const letters = name
      .split(/\s+/)
      .slice(0, 2)
      .map((segment) => segment[0]?.toUpperCase() ?? "")
      .join("");

    return letters || fallback;
  }, [user?.name]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <div className="flex min-h-20 flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition-colors duration-[280ms] hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </button>

            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-slate-500 uppercase">
                Workspace
              </p>
              <nav aria-label="Breadcrumb" className="mt-2 overflow-x-auto">
                <ol className="flex items-center gap-2 whitespace-nowrap text-sm text-slate-400">
                  {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.path} className="flex items-center gap-2">
                      {index > 0 ? <span className="text-slate-600">/</span> : null}
                      {index === breadcrumbs.length - 1 ? (
                        <span className="font-medium text-white">{crumb.label}</span>
                      ) : (
                        <Link
                          to={crumb.path}
                          className="transition-colors duration-[280ms] hover:text-slate-200"
                        >
                          {crumb.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition-colors duration-[280ms] hover:border-cyan-400/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
              aria-label="Notifications"
            >
              <span className="absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.95)]" />
              <Bell className="h-5 w-5" aria-hidden />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => setOpen((current) => !current)}
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-left transition-colors duration-[280ms] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                aria-haspopup="menu"
                aria-expanded={open}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.24),rgba(14,165,233,0.1))] text-sm font-semibold text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.18)]">
                  {initials}
                </span>
                <span className="hidden text-sm sm:block">
                  <span className="block font-medium text-white">
                    {user?.name ?? "AI Analyst"}
                  </span>
                  <span className="block text-slate-400">{user?.role ?? "Workspace Member"}</span>
                </span>
                <ChevronDown
                  className={cn(
                    "hidden h-4 w-4 text-slate-400 transition-transform duration-[280ms] sm:block",
                    open && "rotate-180",
                  )}
                  aria-hidden
                />
              </button>

              {open ? (
                <div
                  role="menu"
                  className="absolute right-0 mt-3 w-72 rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
                >
                  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-[linear-gradient(135deg,rgba(34,211,238,0.22),rgba(14,165,233,0.08))] text-sm font-semibold text-cyan-100">
                        {initials}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{user?.name ?? "AI Analyst"}</p>
                        <p className="mt-1 text-sm text-slate-400">
                          {user?.email ?? "analyst@truthlens.ai"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-slate-300 transition-colors duration-[280ms] hover:bg-white/5 hover:text-white"
                    >
                      <UserCircle2 className="h-4 w-4" aria-hidden />
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm text-slate-300 transition-colors duration-[280ms] hover:bg-white/5 hover:text-white"
                    >
                      <Settings2 className="h-4 w-4" aria-hidden />
                      Preferences
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        signOut();
                      }}
                      className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm text-rose-200 transition-colors duration-[280ms] hover:bg-rose-500/10 hover:text-rose-100"
                    >
                      <LogOut className="h-4 w-4" aria-hidden />
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative block w-full max-w-xl">
            <Search
              className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-slate-500"
              aria-hidden
            />
            <input
              type="search"
              placeholder="Search investigations, reports, and sources"
              className="dashboard-search-input w-full"
              aria-label="Search workspace"
            />
          </label>

          <div className="hidden text-xs font-medium tracking-[0.16em] text-slate-500 uppercase xl:block">
            AI-assisted verification workspace
          </div>
        </div>
      </div>
    </header>
  );
}
