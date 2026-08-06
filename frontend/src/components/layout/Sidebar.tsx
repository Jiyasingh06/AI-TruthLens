import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { PanelLeftClose } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { APP_NAVIGATION } from "../../config/app-navigation";
import { cn } from "../../utils/cn";

type SidebarProps = {
  isMobileOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isMobileOpen, onClose }: SidebarProps) {
  const reducedMotion = useReducedMotion() ?? false;

  const content = (
    <div className="flex h-full flex-col border-r border-white/10 bg-slate-950/80 px-4 py-5 backdrop-blur-2xl">
      <div className="flex items-center justify-between gap-3 px-2">
        <Link
          to="/dashboard"
          className="group inline-flex items-center gap-3 rounded-2xl px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
          onClick={onClose}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10">
            <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.85)]" />
          </span>
          <div>
            <p className="font-display text-base font-semibold tracking-tight text-white">
              AI TruthLens
            </p>
            <p className="text-xs text-slate-400">Verification workspace</p>
          </div>
        </Link>

        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition-colors duration-[280ms] hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 lg:hidden"
          aria-label="Close sidebar"
        >
          <PanelLeftClose className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <nav className="mt-8 flex-1 overflow-y-auto pr-1" aria-label="Application sidebar">
        <div className="space-y-7">
          {APP_NAVIGATION.map((group) => (
            <section key={group.label}>
              <p className="px-3 text-[11px] font-semibold tracking-[0.24em] text-slate-500 uppercase">
                {group.label}
              </p>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        cn(
                          "group relative flex items-center gap-3 rounded-2xl px-3 py-3 text-sm transition-[background-color,border-color,color,transform,box-shadow] duration-[280ms] ease-out",
                          "border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white",
                          isActive &&
                            "border-cyan-400/25 bg-cyan-400/12 text-white shadow-[0_0_28px_rgba(34,211,238,0.14)]",
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            aria-hidden
                            className={cn(
                              "absolute inset-y-2 left-0 w-1 rounded-r-full bg-transparent transition-colors duration-[280ms]",
                              isActive && "bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]",
                            )}
                          />
                          <span
                            className={cn(
                              "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-colors duration-[280ms] group-hover:text-cyan-300",
                              isActive && "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
                            )}
                          >
                            <item.icon className="h-4.5 w-4.5" aria-hidden />
                          </span>
                          <span className={cn("font-medium", isActive && "font-semibold")}>
                            {item.label}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </nav>

      <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-4">
        <p className="text-sm font-semibold text-white">Workspace Status</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Frontend foundation is active. App modules are ready for future AI and backend
          integration.
        </p>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden h-svh w-80 shrink-0 lg:block">{content}</aside>

      <AnimatePresence>
        {isMobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close sidebar overlay"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reducedMotion ? 0.01 : 0.2 }}
              className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: reducedMotion ? 0 : -24, opacity: reducedMotion ? 1 : 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: reducedMotion ? 0 : -24, opacity: reducedMotion ? 1 : 0 }}
              transition={{ duration: reducedMotion ? 0.01 : 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 left-0 z-50 w-[min(20rem,88vw)] lg:hidden"
            >
              {content}
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
