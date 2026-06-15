import type { GithubRepo } from "@/types/github";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  Java: "#B07219",
  Go: "#00ADD8",
  Rust: "#DEA584",
  CSS: "#563D7C",
  HTML: "#E34C26",
  Shell: "#89E051",
  "C++": "#F34B7D",
  C: "#555555",
  Swift: "#F05138",
  Kotlin: "#7F52FF",
  Ruby: "#CC342D",
};

type Props = {
  repo: GithubRepo;
};

export default function ProjectCard({ repo }: Props) {
  const langColor = repo.language
    ? (LANG_COLORS[repo.language] ?? "#888")
    : null;

  return (
    <div className="home-card home-card-interactive rounded-xl p-4 sm:p-5 flex flex-col gap-3 h-full">
      <div className="flex justify-between items-start gap-2">
        <h3 className="font-semibold text-sm font-mono text-[var(--home-code-link)] leading-snug truncate">
          {repo.name}
        </h3>
        <span className="text-xs shrink-0 text-[var(--home-muted)] font-mono">
          ★ {repo.stargazers_count.toLocaleString()}
        </span>
      </div>

      <p className="text-xs line-clamp-2 leading-relaxed flex-1 text-[var(--home-muted)]">
        {repo.description ?? "No description provided"}
      </p>

      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {repo.topics.slice(0, 3).map(topic => (
            <span
              key={topic}
              className="text-[11px] px-2 py-0.5 rounded-full border border-[var(--home-border-subtle)] bg-[var(--home-elevated)] text-[var(--home-muted)]"
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 3 && (
            <span className="text-[11px] px-2 py-0.5 text-[var(--home-subtle)]">
              +{repo.topics.length - 3}
            </span>
          )}
        </div>
      )}

      <div className="flex justify-between items-center mt-auto pt-3 border-t border-[var(--home-border-subtle)]">
        <div className="flex items-center gap-3">
          {repo.language && (
            <div className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: langColor! }}
              />
              <span className="text-xs text-[var(--home-muted)]">{repo.language}</span>
            </div>
          )}
          {repo.forks_count > 0 && (
            <span className="text-xs text-[var(--home-subtle)]">
              🍴 {repo.forks_count.toLocaleString()}
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs home-link font-medium"
          >
            Code ↗
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs home-link font-medium"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
