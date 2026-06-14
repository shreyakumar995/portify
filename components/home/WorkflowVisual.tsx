import { ArrowDown, GitBranch, LayoutTemplate } from "lucide-react";
import GithubIcon from "./GithubIcon";

const REPOS = [
  { name: "react", stars: "218k" },
  { name: "next.js", stars: "120k" },
  { name: "typescript", stars: "95k" },
];

const SKILLS = [
  { name: "TypeScript", pct: 42, color: "#3178C6" },
  { name: "JavaScript", pct: 28, color: "#F7DF1E" },
  { name: "Python", pct: 18, color: "#3572A5" },
];

export default function WorkflowVisual() {
  return (
    <div
      className="relative h-full min-h-[520px] rounded-2xl border border-[var(--home-border)] bg-[var(--home-surface)] p-5 sm:p-6 lg:p-8 home-card home-card-featured"
      aria-hidden
    >
      <div className="flex flex-col gap-3 h-full">
        <div className="flex-1 rounded-xl border border-[var(--home-border)] bg-[var(--home-bg)] p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--home-border-subtle)]">
            <GithubIcon className="h-4 w-4 text-[var(--home-text)]" />
            <span className="text-xs font-mono text-[var(--home-muted)]">GitHub</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-11 w-11 rounded-full border border-[var(--home-border)] bg-[var(--home-elevated)]" />
            <div>
              <p className="text-sm font-medium text-[var(--home-text)]">@developer</p>
              <p className="text-xs text-[var(--home-muted)]">42 repos · 1.2k followers</p>
            </div>
          </div>
          <ul className="space-y-2">
            {REPOS.map(repo => (
              <li
                key={repo.name}
                className="flex items-center justify-between rounded-md border border-[var(--home-border-subtle)] bg-[var(--home-surface)] px-3 py-2"
              >
                <span className="text-xs font-mono text-[var(--home-code-link)]">{repo.name}</span>
                <span className="text-[11px] text-[var(--home-muted)]">★ {repo.stars}</span>
              </li>
            ))}
          </ul>
        </div>

        <FlowStep label="Processing" icon={GitBranch} />

        <div className="flex-1 rounded-xl border border-[var(--home-border)] bg-[var(--home-bg)] p-4 sm:p-5">
          <p className="text-xs font-mono text-[var(--home-muted)] mb-3 uppercase tracking-wide">
            Extracted skills
          </p>
          <div className="h-2 rounded-full overflow-hidden flex mb-3">
            {SKILLS.map(s => (
              <span key={s.name} style={{ width: `${s.pct}%`, backgroundColor: s.color }} />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map(s => (
              <span
                key={s.name}
                className="rounded-full border border-[var(--home-border)] bg-[var(--home-surface)] px-2.5 py-1 text-[11px] font-mono text-[var(--home-text)]"
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>

        <FlowStep label="Portfolio" icon={LayoutTemplate} />

        <div className="flex-1 rounded-xl border border-[var(--home-border)] bg-[var(--home-bg)] p-4 sm:p-5 ring-1 ring-[var(--home-ring)]">
          <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-[var(--home-border-subtle)]">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
            <span className="ml-2 text-[11px] font-mono text-[var(--home-muted)] truncate">
              portify /u/developer
            </span>
          </div>
          <div className="space-y-2">
            {["Profile & stats", "Language breakdown", "Top repositories"].map(row => (
              <div
                key={row}
                className="rounded-md border border-[var(--home-border-subtle)] bg-[var(--home-surface)] px-3 py-2.5 flex items-center justify-between"
              >
                <span className="text-xs text-[var(--home-text)]">{row}</span>
                <span className="text-[10px] text-[var(--home-success)] font-mono">live</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowStep({
  label,
  icon: Icon,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="flex flex-col items-center gap-1 py-1">
      <ArrowDown className="h-4 w-4 text-[var(--home-success)]" />
      <div className="flex items-center gap-1.5 rounded-full border border-[var(--home-border)] bg-[var(--home-elevated)] px-3 py-1">
        <Icon className="h-3 w-3 text-[var(--home-primary)]" />
        <span className="text-[11px] font-medium text-[var(--home-muted)]">{label}</span>
      </div>
    </div>
  );
}
