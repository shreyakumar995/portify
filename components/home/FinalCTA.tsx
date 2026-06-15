"use client";

import { Loader2 } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { CONTAINER } from "./layout";

type Props = {
  username: string;
  loading: boolean;
  onUsernameChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function FinalCTA({
  username,
  loading,
  onUsernameChange,
  onSubmit,
}: Props) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="home-cta-section relative overflow-hidden border-t border-(--home-border-subtle) py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      <div className={`relative ${CONTAINER}`}>
        <div className="home-cta-panel text-center">
          <h2
            id="final-cta-heading"
            className="home-section-title mb-4 text-balance text-[clamp(1.75rem,3vw+0.5rem,3rem)]"
          >
            Ready to Build Your Developer Portfolio?
          </h2>
          <p className="home-body mb-8 max-w-md mx-auto text-base">
            Enter your GitHub username and get a shareable portfolio in seconds.
          </p>

          <form
            onSubmit={onSubmit}
            className="mx-auto max-w-md"
            aria-label="Generate portfolio from footer"
          >
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
              <div className="relative flex-1 sm:max-w-[240px]">
                <label htmlFor="github-username-cta" className="sr-only">
                  GitHub username
                </label>
                <GithubIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-(--home-subtle)" />
                <input
                  id="github-username-cta"
                  type="text"
                  value={username}
                  onChange={e => onUsernameChange(e.target.value)}
                  onFocus={e => e.currentTarget.select()}
                  placeholder="GitHub username"
                  disabled={loading}
                  autoComplete="off"
                  enterKeyHint="go"
                  aria-describedby="github-username-cta-hint"
                  spellCheck={false}
                  className="home-input home-input-compact bg-(--home-input-bg)"
                />
              </div>
              <button
                type="submit"
                disabled={!username.trim() || loading}
                aria-busy={loading}
                className="home-btn-primary home-btn-primary-lg h-11 min-w-[168px] shrink-0 sm:min-w-[180px]"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Generating portfolio...
                  </>
                ) : (
                  "Generate Portfolio"
                )}
              </button>
            </div>
            <p
              id="github-username-cta-hint"
              className="mt-2 text-xs text-(--home-subtle)"
              aria-live="polite"
            >
              Press Enter to generate.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
