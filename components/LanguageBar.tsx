import { LanguageStat } from "@/lib/github";

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
  PHP: "#777BB4",
  Dart: "#00B4AB",
  "Objective-C": "#438EFF",
};

type Props = {
  stats: LanguageStat[];
};

export default function LanguageBar({ stats }: Props) {
  if (stats.length === 0) return null;

  const top = stats.slice(0, 6);
  const total = top.reduce((sum, s) => sum + s.count, 0);

  return (
    <section className="mb-10 sm:mb-12">
      <p className="home-eyebrow mb-2">Stack</p>
      <h2 className="home-card-title text-base sm:text-lg mb-4">Languages</h2>

      <div className="home-card p-4 sm:p-5">
        <div className="flex rounded-full overflow-hidden h-2 sm:h-2.5 mb-4 gap-px">
          {top.map(({ language, count }) => (
            <div
              key={language}
              style={{
                width: `${(count / total) * 100}%`,
                backgroundColor: LANG_COLORS[language] ?? "#888",
              }}
              title={`${language}: ${Math.round((count / total) * 100)}%`}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {top.map(({ language, count }) => (
            <div key={language} className="flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: LANG_COLORS[language] ?? "#888" }}
              />
              <span className="text-xs text-[var(--home-muted)]">
                {language}{" "}
                <span className="font-mono text-[var(--home-subtle)]">
                  {Math.round((count / total) * 100)}%
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
