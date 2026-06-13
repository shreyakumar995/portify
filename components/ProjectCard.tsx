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
      className={`rounded-xl p-5 transition-all duration-200 flex flex-col gap-3 ${theme.card}`}
    >
      <div className="flex justify-between items-start">
        <h3 className={`font-medium text-sm ${theme.heading}`}>{repo.name}</h3>
        <span className={`text-xs shrink-0 ml-2 ${theme.body}`}>
          ⭐ {repo.stargazers_count}
        </span>
      </div>
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
        </div>
      )}
      <div
        className={`flex justify-between items-center mt-auto pt-2 border-t ${theme.border}`}
      >
        {repo.language ? (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: langColor! }}
            />
            <span className={`text-xs ${theme.body}`}>{repo.language}</span>
          </div>
        ) : (
          <span />
        )}
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
              className="text-xs text-blue-500 hover:underline"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
