import { ArrowDown } from "lucide-react";
import GithubIcon from "./GithubIcon";

type Props = {
  compact?: boolean;
};

export default function HeroTransformVisual({ compact = false }: Props) {
  return (
    <div className="home-hero-visual-enter w-full max-w-[340px] sm:max-w-md mx-auto lg:max-w-none">
      <div className={`home-card home-card-featured ${compact ? "p-3 sm:p-4" : "p-4 sm:p-5"}`}>
        <div className="rounded-lg border border-[var(--home-border)] bg-[var(--home-bg)] p-3 sm:p-3.5">
          <div className="flex items-center gap-2 mb-2.5 pb-2.5 border-b border-[var(--home-border-subtle)]">
            <GithubIcon className="h-3.5 w-3.5 text-[var(--home-text)]" />
            <span className="text-[11px] font-mono text-[var(--home-muted)]">GitHub Profile</span>
          </div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="h-8 w-8 rounded-full border border-[var(--home-border)] bg-[var(--home-elevated)]" />
            <div>
              <p className="text-xs font-medium text-[var(--home-text)]">@developer</p>
              <p className="text-[11px] text-[var(--home-muted)]">42 repos · 1.2k followers</p>
            </div>
          </div>
          <div className="space-y-1">
            {["react", "next.js"].map(repo => (
              <div
                key={repo}
                className="rounded-md border border-[var(--home-border-subtle)] bg-[var(--home-surface)] px-2.5 py-1.5 text-[11px] font-mono text-[var(--home-code-link)]"
              >
                {repo}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center py-2.5">
          <ArrowDown className="h-4 w-4 text-[var(--home-success)] mb-1" aria-hidden />
          <span className="rounded-full border border-[var(--home-border)] bg-[var(--home-elevated)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--home-muted)]">
            Transform
          </span>
        </div>

        <div className="rounded-lg border border-[var(--home-border)] bg-[var(--home-bg)] p-3 sm:p-3.5 ring-1 ring-[var(--home-ring)]">
          <div className="flex items-center gap-1.5 mb-2.5 pb-2.5 border-b border-[var(--home-border-subtle)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]/70" />
            <span className="ml-1.5 text-[10px] font-mono text-[var(--home-muted)] truncate">
              portify /u/developer
            </span>
          </div>
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="h-8 w-8 rounded-full border-2 border-[var(--home-success)]/40 bg-[var(--home-elevated)]" />
            <div>
              <p className="text-xs font-semibold text-[var(--home-text)]">Developer Name</p>
              <p className="text-[11px] text-[var(--home-success)]">Portfolio ready</p>
            </div>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden flex mb-2.5">
            <span className="bg-[#3178C6]" style={{ width: "45%" }} />
            <span className="bg-[#F7DF1E]" style={{ width: "30%" }} />
            <span className="bg-[#3572A5]" style={{ width: "25%" }} />
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {["Repos", "Stars", "Langs"].map(label => (
              <div
                key={label}
                className="rounded-md border border-[var(--home-border-subtle)] bg-[var(--home-surface)] py-1.5 text-center"
              >
                <p className="text-xs font-semibold font-mono text-[var(--home-text)]">42</p>
                <p className="text-[9px] text-[var(--home-muted)]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
