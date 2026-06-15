"use client";

import { Loader2 } from "lucide-react";
import GithubIcon from "./GithubIcon";
import { useHomeInteractions } from "./HomeInteractions";

export default function FinalCTAForm() {
  const { username, loading, setUsername, handleSubmit } = useHomeInteractions();

  return (
    <form
      onSubmit={handleSubmit}
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
            onChange={event => setUsername(event.target.value)}
            onFocus={event => event.currentTarget.select()}
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
      <p id="github-username-cta-hint" className="mt-2 text-xs text-(--home-subtle)" aria-live="polite">
        Press Enter to generate.
      </p>
    </form>
  );
}
