"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EXAMPLES = ["torvalds", "gaearon", "sindresorhus"] as const;

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.005-.54-1.695-.185-2.13.045-.66.33-.015 1.005.12 1.395.12.375.54 1.455.735 1.965.24.57.495 1.185.21 1.8-.285.615-1.26 2.31-1.785 3.09-.48.705-1.005 1.59-.435 2.295.555.69 2.445.96 3.75.48 1.005-.375 1.755-.57 2.01-.885.255-.33.195-.855-.12-1.8-.27-.615-1.14-1.515-1.605-2.04-.54-.615-1.155-1.305-.495-2.505.15-.285.405-.75.405-1.53 0-1.185-.435-2.145-1.185-2.895-.12-.285-.27-.75-.24-1.575.075-.615.24-1.545 1.59-1.545.465 0 1.005.165 1.695.615 1.02-.27 2.115-.405 3.21-.405 1.095 0 2.19.135 3.21.405.69-.45 1.23-.615 1.695-.615 1.35 0 1.515.93 1.59 1.545.03.825-.12 1.29-.24 1.575-.75.75-1.185 1.71-1.185 2.895 0 .78.255 1.245.405 1.53.66 1.2.045 1.89-.495 2.505-.465.525-1.335 1.425-1.605 2.04-.315.945-.375 1.47-.12 1.8.255.315 1.005.51 2.01.885 1.305.48 3.195.21 3.75-.48.57-.705.045-1.59-.435-2.295-.525-.78-1.5-2.475-1.785-3.09-.285-.615-.03-1.23.21-1.8.195-.51.615-1.59.735-1.965.135-.39.78-1.065.12-1.395-.435-.23-1.125-.585-2.13-.045-.51.285-1.095 1.35-1.23 1.695-.24.675-1.02 1.965-4.035 1.41 0 1.005-.015 1.935-.015 2.22 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = username.trim();
    if (!trimmed || loading) return;

    setLoading(true);
    router.push(`/u/${trimmed}`);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-16 text-zinc-900">
      <div className="w-full max-w-lg text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-500">
          <GithubIcon className="h-3.5 w-3.5" />
          Powered by GitHub
        </div>

        <h1 className="text-5xl font-semibold tracking-tight text-zinc-900">
          Portify
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-500">
          Turn any GitHub profile into a clean developer portfolio in seconds.
        </p>

        <form onSubmit={handleSubmit} className="mt-10">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <GithubIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="GitHub username"
                disabled={loading}
                className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:ring-2 focus:ring-zinc-100 disabled:cursor-not-allowed disabled:opacity-60"
              />
            </div>
            <button
              type="submit"
              disabled={!username.trim() || loading}
              className="inline-flex h-11 min-w-[132px] items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Generating
                </>
              ) : (
                "Generate"
              )}
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-zinc-400">
          Try{" "}
          {EXAMPLES.map((name, index) => (
            <span key={name}>
              {index > 0 && (index === EXAMPLES.length - 1 ? ", or " : ", ")}
              <button
                type="button"
                onClick={() => setUsername(name)}
                disabled={loading}
                className="font-medium text-zinc-600 underline-offset-2 transition hover:text-zinc-900 hover:underline disabled:cursor-not-allowed disabled:opacity-50"
              >
                {name}
              </button>
            </span>
          ))}
        </p>
      </div>
    </main>
  );
}
