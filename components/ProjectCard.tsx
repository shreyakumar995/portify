import type { Theme } from "@/lib/themes";
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
  Swift:         "#F05138",
  Kotlin:        "#7F52FF",
  Ruby:          "#CC342D",
};

type Props = {
  repo: GithubRepo;
  theme: Theme;
};

export default function ProjectCard({ repo, theme }: Props) {
  const langColor = repo.language
    ? (LANG_COLORS[repo.language] ?? "#888")
    : null;

  return (
    <div
      className={`rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 ${theme.card}`}
    >
      {/* ── Header ── */}
      <div className="flex justify-between items-start gap-2">
        <h3 className={`font-semibold text-sm leading-snug ${theme.heading}`}>{repo.name}</h3>
        <span className={`text-xs shrink-0 flex items-center gap-1 ${theme.body}`}>
          ⭐ {repo.stargazers_count.toLocaleString()}
        </span>
      </div>
      {/* ── Description ── */}
      <p className={`text-xs line-clamp-2 leading-relaxed flex-1 ${theme.body}`}>
        {repo.description ?? "No description provided"}
      </p>
      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className={`text-xs px-2 py-0.5 rounded-full ${theme.badge}`}
            >
              {topic}
            </span>
          ))}
          {repo.topics.length > 3 && (
            <span className={`text-xs px-2 py-0.5 ${theme.body} opacity-50`}>
            +{repo.topics.length - 3}
          </span>
          )}
        </div>
      )}
      {/* ── Footer ── */}
      <div
        className={`flex justify-between items-center mt-auto pt-2 border-t ${theme.border}`}
      >
         <div className="flex items-center gap-3">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: langColor! }}
            />
            <span className={`text-xs ${theme.body}`}>{repo.language}</span>
          </div>
        )} 
        {repo.forks_count > 0 && (
            <span className={`text-xs ${theme.body} opacity-60`}>
              🍴 {repo.forks_count.toLocaleString()}
            </span>
          )}
        </div>
          
        <div className="flex gap-3">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs transition hover:opacity-80 ${theme.body}`}
          >
            Code ↗
          </a>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-500 hover:text-blue-400 transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
