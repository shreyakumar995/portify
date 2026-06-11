// components/LanguageBar.tsx
import { LanguageStat } from "@/lib/github";

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
  stats: LanguageStat[];
};

export default function LanguageBar({ stats }: Props) {
  if (stats.length === 0) return null;

  const total = stats.reduce((sum, s) => sum + s.count, 0);

  return (
    <section className="mb-10">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Languages
      </h2>

      {/* Segmented bar */}
      <div className="flex rounded-full overflow-hidden h-3 mb-3">
        {stats.map(({ language, count }) => (
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

      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1">
        {stats.map(({ language, count }) => (
          <div key={language} className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ backgroundColor: LANG_COLORS[language] ?? "#888" }}
            />
            <span className="text-xs text-gray-500">
              {language}{" "}
              <span className="text-gray-400">
                {Math.round((count / total) * 100)}%
              </span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}