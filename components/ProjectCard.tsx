import{GithubRepo} from "@/types/github";
const LANG_COLORS: Record<string, string> = {
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Python:     "#3572A5",
    Java:       "#B07219",
    Go:         "#00ADD8",
    Rust:       "#DEA584",
    CSS:        "#563D7C",
    HTML:       "#E34C26",
    Shell:      "#89E051",
    "C++":      "#F34B7D",
    C:          "#555555",
  };
  type Props = {
    repo: GithubRepo;
  };
  export default function ProjectCard({ repo }: Props) {
    const langColor=repo.language ? LANG_COLORS[repo.language]??"#888":null;
    return (
        <div className="border border-gray-200 rounded-xl p-5
                        hover:border-gray-400 hover:shadow-sm
                        transition-all duration-200 flex flex-col gap-3">
        <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900 text-sm">{repo.name}</h3>
            <span className="text-xs text-gray-400 shrink-0 ml-2">
          ⭐ {repo.stargazers_count}
        </span>
      </div>
      <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed flex-1">
        {repo.description ?? "No description provided"}
      </p>
      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {repo.topics.slice(0, 3).map(topic => (
            <span
              key={topic}
              className="text-xs bg-blue-50 text-blue-600
                         px-2 py-0.5 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
       <div className="flex justify-between items-center mt-auto pt-2
                      border-t border-gray-100">
        {repo.language ? (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: langColor! }}
            />
            <span className="text-xs text-gray-500">{repo.language}</span>
          </div>
        ) : (
          <span />
        )}
        <div className="flex gap-3">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-black transition"
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

      
      
      