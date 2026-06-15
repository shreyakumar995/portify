import { ArrowRight } from "lucide-react";
import GithubIcon from "./GithubIcon";
import SectionHeader from "./SectionHeader";
import { CONTAINER, SECTION_PY, SECTION_BORDER, CARD_HOVER } from "./layout";

export default function BeforeAfter() {
  return (
    <section
      aria-labelledby="before-after-heading"
      className={`${SECTION_BORDER} bg-[var(--home-section-alt)]`}
    >
      <div className={`${CONTAINER} ${SECTION_PY}`}>
        <SectionHeader
          id="before-after-heading"
          eyebrow="Transformation"
          title="See the difference instantly"
          description="Your GitHub profile has the data — Portify turns it into a portfolio recruiters can scan in seconds."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-8 xl:gap-10">
          <article className={`rounded-2xl overflow-hidden ${CARD_HOVER}`}>
            <div className="px-5 py-3.5 border-b border-[var(--home-border)] bg-[var(--home-bg)]">
              <span className="home-eyebrow normal-case tracking-[0.15em]">
                Before — Raw GitHub Profile
              </span>
            </div>
            <div className="p-5 sm:p-7 bg-[var(--home-surface)]">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[var(--home-border-subtle)]">
                <GithubIcon className="h-4 w-4 text-[var(--home-text)]" />
                <span className="text-xs font-mono text-[var(--home-muted)]">github.com/developer</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-12 rounded-full border border-[var(--home-border)] bg-[var(--home-elevated)]" />
                <div>
                  <p className="text-sm font-medium text-[var(--home-text)]">Developer Name</p>
                  <p className="text-xs text-[var(--home-muted)]">Scattered across tabs and repos</p>
                </div>
              </div>
              <ul className="space-y-2.5 mb-6">
                {["Pinned repos buried in tabs", "Stats hidden in sidebar", "No shareable link"].map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[var(--home-muted)]">
                    <span className="h-1 w-1 rounded-full bg-[var(--home-subtle)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg border border-dashed border-[var(--home-border)] bg-[var(--home-bg)] p-6 text-center">
                <p className="text-xs text-[var(--home-subtle)] font-mono">Raw GitHub UI</p>
              </div>
            </div>
          </article>

          <div className="flex items-center justify-center py-2 lg:py-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--home-border)] bg-[var(--home-elevated)] text-[var(--home-success)] shadow-lg shadow-[var(--home-shadow)]">
              <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" aria-hidden />
            </div>
          </div>

          <article className={`rounded-2xl overflow-hidden ring-1 ring-[var(--home-ring)] ${CARD_HOVER}`}>
            <div className="px-5 py-3.5 border-b border-[var(--home-border)] bg-[var(--home-bg)]">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--home-success)]">
                After — Generated Portfolio
              </span>
            </div>
            <div className="p-5 sm:p-7 bg-[var(--home-surface)]">
              <div className="flex items-center gap-1.5 mb-5 pb-4 border-b border-[var(--home-border-subtle)]">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
                <span className="ml-2 text-[11px] font-mono text-[var(--home-muted)]">portify /u/developer</span>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-12 rounded-full border-2 border-[var(--home-success)]/40 bg-[var(--home-elevated)]" />
                <div>
                  <p className="text-sm font-semibold text-[var(--home-text)]">Developer Name</p>
                  <p className="text-xs text-[var(--home-success)]">Portfolio-ready · One link to share</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-5">
                {["Repos", "Stars", "Langs"].map(label => (
                  <div
                    key={label}
                    className="rounded-md border border-[var(--home-border)] bg-[var(--home-bg)] px-2 py-2.5 text-center"
                  >
                    <p className="text-sm font-semibold font-mono text-[var(--home-text)]">42</p>
                    <p className="text-[10px] text-[var(--home-muted)]">{label}</p>
                  </div>
                ))}
              </div>
              <div className="h-2 rounded-full overflow-hidden flex mb-4">
                <span className="bg-[#3178C6]" style={{ width: "45%" }} />
                <span className="bg-[#F7DF1E]" style={{ width: "30%" }} />
                <span className="bg-[#3572A5]" style={{ width: "25%" }} />
              </div>
              <ul className="space-y-2">
                {["react", "next.js"].map(repo => (
                  <li
                    key={repo}
                    className="rounded-md border border-[var(--home-border)] bg-[var(--home-bg)] px-3 py-2 text-xs font-mono text-[var(--home-code-link)]"
                  >
                    {repo}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
