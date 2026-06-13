'use client';

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const EXAMPLES = ["torvalds", "gaearon", "sindresorhus"] as const;

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.005-.54-1.695-.185-2.13.045-.66.33-.015 1.005.12 1.395.12.375.54 1.455.735 1.965.24.57.495 1.185.21 1.8-.285.615-1.26 2.31-1.785 3.09-.48.705-1.005 1.59-.435 2.295.555.69 2.445.96 3.75.48 1.005-.375 1.755-.57 2.01-.885.255-.33.195-.855-.12-1.8-.27-.615-1.14-1.515-1.605-2.04-.54-.615-1.155-1.305-.495-2.505.15-.285.405-.75.405-1.53 0-1.185-.435-2.145-1.185-2.895-.12-.285-.27-.75-.24-1.575.075-.615.24-1.545 1.59-1.545.465 0 1.005.165 1.695.615 1.02-.27 2.115-.405 3.21-.405 1.095 0 2.19.135 3.21.405.69-.45 1.23-.615 1.695-.615 1.35 0 1.515.93 1.59 1.545.03.825-.12 1.29-.24 1.575-.75.75-1.185 1.71-1.185 2.895 0 .78.255 1.245.405 1.53.66 1.2.045 1.89-.495 2.505-.465.525-1.335 1.425-1.605 2.04-.315.945-.375 1.47-.12 1.8.255.315 1.005.51 2.01.885 1.305.48 3.195.21 3.75-.48.57-.705.045-1.59-.435-2.295-.525-.78-1.5-2.475-1.785-3.09-.285-.615-.03-1.23.21-1.8.195-.51.615-1.59.735-1.965.135-.39.78-1.065.12-1.395-.435-.23-1.125-.585-2.13-.045-.51.285-1.095 1.35-1.23 1.695-.24.675-1.02 1.965-4.035 1.41 0 1.005-.015 1.935-.015 2.22 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

// ── Fake portfolio preview card data ──────────────────────
const PREVIEW_REPOS = [
  { name: "linux", lang: "C", color: "#555555", stars: "180k", desc: "The Linux kernel source tree" },
  { name: "next.js", lang: "TypeScript", color: "#3178C6", stars: "120k", desc: "The React Framework for the Web" },
  { name: "react", lang: "JavaScript", color: "#F7DF1E", stars: "218k", desc: "The library for web and native UI" },
];

const PREVIEW_LANGS = [
  { name: "TypeScript", pct: 42, color: "#3178C6" },
  { name: "JavaScript", pct: 28, color: "#F7DF1E" },
  { name: "Python", pct: 18, color: "#3572A5" },
  { name: "C", pct: 12, color: "#555555" },
];

// ── Floating preview card ─────────────────────────────────
function PortfolioPreviewCard() {
  const [visible, setVisible] = useState(false);

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`
        relative w-full max-w-sm rounded-2xl overflow-hidden
        border border-white/10 bg-white/5 backdrop-blur-md
        shadow-2xl shadow-black/60
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{
        // Subtle floating animation via CSS
        animation: visible ? "floatCard 4s ease-in-out infinite" : "none",
      }}
    >
      {/* Card header — fake browser chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3
                      border-b border-white/5 bg-white/3">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        <span className="ml-3 text-xs text-white/20 font-mono">
          portify.dev/u/torvalds
        </span>
      </div>

      {/* Card body */}
      <div className="p-5">

        {/* Fake user hero */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br
                          from-violet-400 to-indigo-600 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-white/90">
              Linus Torvalds
            </p>
            <p className="text-xs text-white/30">@torvalds · Helsinki</p>
          </div>
          <div className="ml-auto flex gap-3 text-xs text-white/30">
            <span>📦 11</span>
            <span>👥 236k</span>
          </div>
        </div>

        {/* Language bar */}
        <div className="mb-4">
          <p className="text-xs text-white/30 mb-1.5">Languages</p>
          <div className="flex rounded-full overflow-hidden h-1.5 mb-2">
            {PREVIEW_LANGS.map(l => (
              <div
                key={l.name}
                style={{ width: `${l.pct}%`, backgroundColor: l.color }}
              />
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {PREVIEW_LANGS.map(l => (
              <div key={l.name} className="flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: l.color }}
                />
                <span className="text-xs text-white/30">{l.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fake repo cards */}
        <p className="text-xs text-white/30 mb-2">Top Projects</p>
        <div className="flex flex-col gap-2">
          {PREVIEW_REPOS.map(repo => (
            <div
              key={repo.name}
              className="rounded-lg border border-white/5 bg-white/3
                         px-3 py-2.5"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-white/80">
                  {repo.name}
                </span>
                <span className="text-xs text-white/25">⭐ {repo.stars}</span>
              </div>
              <p className="text-xs text-white/30 line-clamp-1 mb-1.5">
                {repo.desc}
              </p>
              <div className="flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: repo.color }}
                />
                <span className="text-xs text-white/25">{repo.lang}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Glow under card */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2
                      w-3/4 h-10 bg-violet-600/30 blur-xl
                      pointer-events-none rounded-full" />
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────
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
    <main className="relative min-h-screen bg-black flex flex-col
                     items-center justify-center overflow-hidden px-4">

      {/* Floating card animation keyframes */}
      <style>{`
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px);   }
          50%       { transform: translateY(-10px); }
        }
      `}</style>

      {/* ── Glow blobs ── */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px]
                      bg-violet-600 opacity-20 rounded-full blur-[120px]
                      animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px]
                      bg-indigo-500 opacity-15 rounded-full blur-[100px]
                      animate-pulse pointer-events-none" />
      <div className="absolute top-[40%] left-[-5%] w-[300px] h-[300px]
                      bg-pink-600 opacity-10 rounded-full blur-[90px]
                      pointer-events-none" />

      {/* ── Dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Two column layout — left: text/form | right: preview ── */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col
                      lg:flex-row items-center gap-16 lg:gap-20 px-4">

        {/* ── LEFT — hero + form ── */}
        <div className="flex flex-col items-center lg:items-start
                        text-center lg:text-left flex-1">

          {/* Badge */}
          <div className="flex items-center gap-2 mb-8
                          bg-white/5 border border-white/10 rounded-full
                          px-4 py-1.5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-white/50 tracking-wide">
              Powered by GitHub
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-white via-violet-200
                             to-indigo-300 bg-clip-text text-transparent">
              Portify
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-white/40 text-lg max-w-sm leading-relaxed mb-10">
            Turn any GitHub profile into a{' '}
            <span className="text-white/70">clean developer portfolio</span>
            {' '}in seconds.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">

              <div className="relative flex-1">
                <GithubIcon className="pointer-events-none absolute left-3.5
                                       top-1/2 h-4 w-4 -translate-y-1/2
                                       text-white/20" />
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="GitHub username"
                  disabled={loading}
                  className="w-full rounded-xl border border-white/10
                             bg-white/5 backdrop-blur-sm py-3 pl-10 pr-4
                             text-sm text-white placeholder:text-white/20
                             outline-none focus:border-violet-500/60
                             focus:ring-1 focus:ring-violet-500/30
                             transition-all disabled:cursor-not-allowed
                             disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={!username.trim() || loading}
                className="inline-flex h-11 min-w-[132px] items-center
                           justify-center gap-2 rounded-xl px-5 text-sm
                           font-medium text-white transition-all duration-300
                           bg-violet-600 hover:bg-violet-500
                           shadow-lg shadow-violet-900/50
                           hover:shadow-violet-700/60
                           disabled:cursor-not-allowed disabled:opacity-30"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating
                  </>
                ) : (
                  'Generate →'
                )}
              </button>

            </div>
          </form>

          {/* Example links */}
          <p className="mt-6 text-sm text-white/25">
            Try{' '}
            {EXAMPLES.map((name, index) => (
              <span key={name}>
                {index > 0 && (index === EXAMPLES.length - 1 ? ', or ' : ', ')}
                <button
                  type="button"
                  onClick={() => {
                    setUsername(name);
                    setLoading(true);
                    router.push(`/u/${name}`);
                  }}
                  disabled={loading}
                  className="text-violet-400/70 hover:text-violet-300
                             underline underline-offset-2
                             decoration-violet-400/30
                             hover:decoration-violet-300
                             transition-all duration-200
                             disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {name}
                </button>
              </span>
            ))}
          </p>

          {/* Feature pills */}
          <div className="mt-12 grid grid-cols-3 gap-3 w-full max-w-md">
            {[
              { icon: '⚡', label: 'Instant', desc: 'Seconds' },
              { icon: '🎨', label: '3 Themes', desc: 'Your style' },
              { icon: '📄', label: 'PDF Export', desc: 'Share it' },
            ].map(f => (
              <div
                key={f.label}
                className="flex flex-col items-center text-center gap-1
                           bg-white/3 border border-white/5 rounded-xl p-3
                           hover:border-white/10 hover:bg-white/5
                           transition-all duration-300"
              >
                <span className="text-lg mb-0.5">{f.icon}</span>
                <span className="text-xs text-white/60 font-medium">
                  {f.label}
                </span>
                <span className="text-xs text-white/20">{f.desc}</span>
              </div>
            ))}
          </div>

        </div>

        {/* ── RIGHT — floating portfolio preview ── */}
        <div className="flex-1 w-full max-w-sm lg:max-w-none
                        hidden md:flex justify-center lg:justify-end">
          <PortfolioPreviewCard />
        </div>

      </div>

    </main>
  );
}