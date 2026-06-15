"use client";

import { useEffect, useState } from "react";

const PREVIEW_REPOS = [
  { name: "next.js", lang: "TypeScript", color: "#3178C6", stars: "120k", desc: "The React Framework for the Web" },
  { name: "react", lang: "JavaScript", color: "#F7DF1E", stars: "218k", desc: "The library for web and native UI" },
  { name: "linux", lang: "C", color: "#555555", stars: "180k", desc: "The Linux kernel source tree" },
];

const PREVIEW_LANGS = [
  { name: "TypeScript", pct: 42, color: "#3178C6" },
  { name: "JavaScript", pct: 28, color: "#F7DF1E" },
  { name: "Python", pct: 18, color: "#3572A5" },
  { name: "C", pct: 12, color: "#555555" },
];

export default function RepoPreviewCard() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`
        relative w-full max-w-sm rounded-xl overflow-hidden
        border border-[#30363d] bg-[#161b22]
        shadow-xl shadow-black/40
        transition-all duration-500 ease-out
        hover:border-[#484f58] hover:shadow-2xl hover:shadow-black/50
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#30363d] bg-[#0d1117]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-2 text-[11px] text-[#8b949e] font-mono truncate">
          portify-git.vercel.app/u/torvalds
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#21262d] border border-[#30363d] shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#f0f6fc] truncate">Linus Torvalds</p>
            <p className="text-xs text-[#8b949e] font-mono">@torvalds</p>
          </div>
          <div className="ml-auto flex gap-3 text-xs text-[#8b949e] font-mono shrink-0">
            <span>11 repos</span>
            <span>236k</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-[11px] text-[#8b949e] mb-1.5 uppercase tracking-wide">Languages</p>
          <div className="flex rounded-full overflow-hidden h-1.5 mb-2">
            {PREVIEW_LANGS.map(l => (
              <div key={l.name} style={{ width: `${l.pct}%`, backgroundColor: l.color }} />
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            {PREVIEW_LANGS.map(l => (
              <div key={l.name} className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: l.color }} />
                <span className="text-[11px] text-[#8b949e]">{l.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[11px] text-[#8b949e] mb-2 uppercase tracking-wide">Top Projects</p>
        <div className="flex flex-col gap-2">
          {PREVIEW_REPOS.map(repo => (
            <div
              key={repo.name}
              className="rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-2"
            >
              <div className="flex justify-between items-center mb-1 gap-2">
                <span className="text-xs font-medium text-[#58a6ff] font-mono truncate">
                  {repo.name}
                </span>
                <span className="text-[11px] text-[#8b949e] shrink-0">★ {repo.stars}</span>
              </div>
              <p className="text-[11px] text-[#8b949e] line-clamp-1 mb-1">{repo.desc}</p>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: repo.color }} />
                <span className="text-[11px] text-[#8b949e]">{repo.lang}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
