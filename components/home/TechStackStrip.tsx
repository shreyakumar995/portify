import GithubIcon from "./GithubIcon";
import { CONTAINER, SECTION_BORDER } from "./layout";

const STACK = [
  { label: "GitHub", icon: "github" as const },
  { label: "React", icon: null },
  { label: "Next.js", icon: null },
  { label: "TypeScript", icon: null },
  { label: "Vercel", icon: null },
  { label: "PDF Export", icon: null },
] as const;

export default function TechStackStrip() {
  return (
    <section aria-label="Built with" className={`${SECTION_BORDER} bg-[var(--home-bg)]`}>
      <div className={`${CONTAINER} py-8 sm:py-10`}>
        <p className="text-center home-eyebrow mb-5 text-[var(--home-subtle)]">
          Powered by your stack
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          {STACK.map(({ label, icon }) => (
            <li key={label} className="flex items-center gap-2 text-sm font-medium text-[var(--home-muted)]">
              {icon === "github" ? (
                <GithubIcon className="h-4 w-4" />
              ) : (
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--home-border)]" aria-hidden />
              )}
              <span className="font-mono text-[13px]">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
