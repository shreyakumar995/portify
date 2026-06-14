"use client";

import { Loader2, ArrowDown } from "lucide-react";
import GithubIcon from "./GithubIcon";
import RepoPreviewCard from "./RepoPreviewCard";
import ContributionGrid from "./ContributionGrid";

const EXAMPLES = ["torvalds", "gaearon", "sindresorhus"] as const;

type Props = {
  username: string;
  loading: boolean;
  onUsernameChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onExampleClick: (name: string) => void;
  onViewExamples: () => void;
};

export default function HomeHero({
  username,
  loading,
  onUsernameChange,
  onSubmit,
  onExampleClick,
  onViewExamples,
}: Props) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-[#21262d]"
    >
      <ContributionGrid />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1">
              <GithubIcon className="h-3.5 w-3.5 text-[#8b949e]" />
              <span className="text-xs text-[#8b949e] tracking-wide">
                Built for GitHub developers
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#f0f6fc] mb-4"
            >
              Ship a portfolio from your{" "}
              <span className="text-[#58a6ff]">GitHub profile</span>
            </h1>

            <p className="text-[#8b949e] text-base sm:text-lg max-w-lg leading-relaxed mb-8">
              Enter a username and get a shareable developer portfolio — repos,
              stats, and languages pulled live. No templates to configure.
            </p>

            <form onSubmit={onSubmit} className="w-full max-w-md" aria-label="Generate portfolio">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <label htmlFor="github-username" className="sr-only">
                    GitHub username
                  </label>
                  <GithubIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#484f58]" />
                  <input
                    id="github-username"
                    type="text"
                    value={username}
                    onChange={e => onUsernameChange(e.target.value)}
                    placeholder="GitHub username"
                    disabled={loading}
                    autoComplete="off"
                    spellCheck={false}
                    className="w-full rounded-lg border border-[#30363d] bg-[#0d1117] py-2.5 pl-10 pr-4 text-sm text-[#f0f6fc] placeholder:text-[#484f58] outline-none focus:border-[#58a6ff] focus:ring-2 focus:ring-[#58a6ff]/20 transition-all disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!username.trim() || loading}
                  className="inline-flex h-10 min-w-[148px] items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium text-white transition-colors bg-[#238636] hover:bg-[#2ea043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#238636] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                      Generating
                    </>
                  ) : (
                    "Generate Portfolio"
                  )}
                </button>
              </div>
            </form>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={onViewExamples}
                className="inline-flex items-center gap-1.5 text-sm text-[#58a6ff] hover:text-[#79c0ff] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58a6ff] rounded"
              >
                View Example Portfolio
                <ArrowDown className="h-3.5 w-3.5" aria-hidden />
              </button>
              <span className="hidden sm:inline text-[#30363d]" aria-hidden>·</span>
              <p className="text-sm text-[#484f58]">
                Try{" "}
                {EXAMPLES.map((name, index) => (
                  <span key={name}>
                    {index > 0 && (index === EXAMPLES.length - 1 ? ", or " : ", ")}
                    <button
                      type="button"
                      onClick={() => onExampleClick(name)}
                      disabled={loading}
                      className="text-[#58a6ff]/80 hover:text-[#79c0ff] underline underline-offset-2 decoration-[#30363d] hover:decoration-[#58a6ff]/50 transition-colors disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                    >
                      {name}
                    </button>
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-sm lg:max-w-none hidden md:flex justify-center lg:justify-end">
            <RepoPreviewCard />
          </div>
        </div>
      </div>
    </section>
  );
}
