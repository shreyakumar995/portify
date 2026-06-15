"use client";

import { Loader2, ArrowDown, Check } from "lucide-react";
import GithubIcon from "./GithubIcon";
import HeroTransformVisual from "./HeroTransformVisual";
import ContributionGrid from "./ContributionGrid";
import { CONTAINER } from "./layout";
import { instrumentSerif } from "./fonts";

const EXAMPLES = ["torvalds", "gaearon", "sindresorhus"] as const;

const TRUST_BADGES = [
  "No Sign Up Required",
  "GitHub Powered",
  "Open Source",
  "Instant Generation",
] as const;

type Props = {
  inputRef: React.RefObject<HTMLInputElement | null>;
  username: string;
  loading: boolean;
  onUsernameChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onExampleClick: (name: string) => void;
  onViewExamples: () => void;
};

export default function HomeHero({
  inputRef,
  username,
  loading,
  onUsernameChange,
  onSubmit,
  onExampleClick,
  onViewExamples,
}: Props) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="home-hero-section relative overflow-hidden border-b border-(--home-border-subtle) scroll-mt-24"
    >
      <ContributionGrid />

      <div className={`relative z-10 ${CONTAINER} pt-16 pb-10 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 xl:pt-32 xl:pb-24`}>
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-14 lg:items-start">
          {/* Copy — top */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:col-start-1 lg:row-start-1">
            <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-(--home-border) bg-(--home-surface)/90 px-3.5 py-1 backdrop-blur-sm">
              <GithubIcon className="h-3.5 w-3.5 text-(--home-muted)" />
              <span className="text-[11px] font-medium text-(--home-muted) tracking-wide">
                Developer portfolio generator
              </span>
            </div>

            <h1 id="hero-heading" className="home-hero-title mb-4 text-balance w-full max-w-2xl">
              Turn Your GitHub Profile Into a{" "}
              <span className="block sm:inline">
                <span className={`${instrumentSerif.className} home-hero-title-accent`}>
                  Professional
                </span>{" "}
                Developer Portfolio
              </span>
            </h1>

            <p className="home-hero-subtitle mb-0 text-pretty w-full max-w-xl">
              Generate a polished portfolio from your repositories, skills, and
              contributions in seconds.
            </p>
          </div>

          {/* Visual — mobile: after subtitle; tablet: after trust; desktop: right column */}
          <div className="order-2 md:order-4 lg:order-0 lg:col-start-2 lg:row-start-1 lg:self-start lg:-mt-1 w-full flex justify-center lg:justify-end">
            <HeroTransformVisual compact />
          </div>

          {/* Copy — form, trust, examples */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-3 md:order-2 lg:col-start-1 lg:row-start-2 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
            <form
              onSubmit={onSubmit}
              className="w-full max-w-lg mb-4 md:mb-5"
              aria-label="Generate portfolio"
            >
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <div className="relative flex-1">
                  <label htmlFor="github-username" className="sr-only">
                    GitHub username
                  </label>
                  <GithubIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-(--home-subtle)" />
                  <input
                    ref={inputRef}
                    id="github-username"
                    type="text"
                    value={username}
                    onChange={e => onUsernameChange(e.target.value)}
                    onFocus={e => e.currentTarget.select()}
                    placeholder="GitHub username"
                    disabled={loading}
                    autoComplete="off"
                    enterKeyHint="go"
                    aria-describedby="github-username-hint"
                    aria-keyshortcuts="/"
                    spellCheck={false}
                    className="home-input home-input-compact"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!username.trim() || loading}
                  aria-busy={loading}
                  className="home-btn-primary home-btn-primary-lg h-11 min-w-[152px] shrink-0"
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
                id="github-username-hint"
                className="mt-2 text-xs text-(--home-subtle)"
                aria-live="polite"
              >
                Press Enter to generate. Press / anytime to focus this field.
              </p>
            </form>

            <ul className="home-trust-badges w-full max-w-lg mb-4">
              {TRUST_BADGES.map(badge => (
                <li key={badge} className="home-trust-badge">
                  <Check className="h-2.5 w-2.5 text-(--home-success) shrink-0" aria-hidden />
                  {badge}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full max-w-lg">
              <button
                type="button"
                onClick={onViewExamples}
                className="home-link inline-flex min-h-11 items-center gap-1.5 rounded text-sm font-medium"
              >
                View Example Portfolio
                <ArrowDown className="h-3.5 w-3.5" aria-hidden />
              </button>
              <span className="hidden sm:inline text-(--home-border)" aria-hidden>
                ·
              </span>
              <p className="text-sm text-(--home-subtle)">
                Try{" "}
                {EXAMPLES.map((name, index) => (
                  <span key={name}>
                    {index > 0 && (index === EXAMPLES.length - 1 ? ", or " : ", ")}
                    <button
                      type="button"
                      onClick={() => onExampleClick(name)}
                      disabled={loading}
                      className="home-link inline-flex min-h-11 items-center rounded underline underline-offset-2 decoration-(--home-border) hover:decoration-(--home-primary) disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                    >
                      {name}
                    </button>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
