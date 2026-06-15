"use client";

import { ArrowDown, Loader2 } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { useHomeInteractions } from "./HomeInteractions";

const EXAMPLES = ["torvalds", "gaearon", "sindresorhus"] as const;

export function HomeHeroForm() {
  const { username, loading, usernameInputRef, setUsername, handleSubmit } = useHomeInteractions();

  return (
    <form
      onSubmit={handleSubmit}
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
            ref={usernameInputRef}
            id="github-username"
            type="text"
            value={username}
            onChange={event => setUsername(event.target.value)}
            onFocus={event => event.currentTarget.select()}
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
      <p id="github-username-hint" className="mt-2 text-xs text-(--home-subtle)" aria-live="polite">
        Press Enter to generate. Press / anytime to focus this field.
      </p>
    </form>
  );
}

export function HomeHeroExamples() {
  const { loading, handleExampleClick, handleViewExamples } = useHomeInteractions();

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4 w-full max-w-lg">
      <button
        type="button"
        onClick={handleViewExamples}
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
              onClick={() => handleExampleClick(name)}
              disabled={loading}
              className="home-link inline-flex min-h-11 items-center rounded underline underline-offset-2 decoration-(--home-border) hover:decoration-(--home-primary) disabled:cursor-not-allowed disabled:opacity-50 font-mono"
            >
              {name}
            </button>
          </span>
        ))}
      </p>
    </div>
  );
}
