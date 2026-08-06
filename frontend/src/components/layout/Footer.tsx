import { GitHubIcon } from "../ui/GitHubIcon";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_TECH_PREVIEW,
  GITHUB_URL,
} from "../../config/landing";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      aria-labelledby="footer-heading"
      className="relative scroll-mt-24 border-t border-white/10 bg-slate-950/80"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="page-container grid gap-12 py-16 md:grid-cols-4 md:gap-10 lg:py-20">
        <div className="md:col-span-1">
          <a
            href="#home"
            className="font-display text-lg font-semibold text-white rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            AI TruthLens
          </a>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Multimodal fake news and deepfake detection for teams that need to
            trust what they publish and share.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors duration-[280ms] hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            Technology
          </h3>
          <ul className="mt-5 space-y-3">
            {FOOTER_TECH_PREVIEW.map((tech) => (
              <li key={tech} className="text-sm text-slate-400">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
            GitHub
          </h3>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-sm text-sm text-slate-400 transition-colors duration-[280ms] hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            aria-label="View AI TruthLens repository on GitHub (opens in a new tab)"
          >
            <GitHubIcon className="h-4 w-4" />
            View repository
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="page-container py-6 text-center text-xs text-slate-500">
          © {year} AI TruthLens. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
