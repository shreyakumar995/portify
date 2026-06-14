// components/TopicBar.tsx
import { TopicStat } from "@/lib/github";
import type { Theme } from "@/lib/themes";

// Map common topics to colours — makes tags visually meaningful
const TOPIC_COLORS: Record<string, string> = {
  // Frontend
  react:          "bg-blue-100    text-blue-700",
  nextjs:         "bg-black       text-white",
  vue:            "bg-green-100   text-green-700",
  angular:        "bg-red-100     text-red-700",
  tailwindcss:    "bg-cyan-100    text-cyan-700",
  typescript:     "bg-blue-100    text-blue-800",
  javascript:     "bg-yellow-100  text-yellow-800",
  html:           "bg-orange-100  text-orange-700",
  css:            "bg-purple-100  text-purple-700",

  // Backend
  nodejs:         "bg-green-100   text-green-800",
  python:         "bg-blue-100    text-blue-800",
  django:         "bg-green-100   text-green-900",
  flask:          "bg-gray-100    text-gray-800",
  fastapi:        "bg-teal-100    text-teal-700",
  java:           "bg-red-100     text-red-800",
  springboot:     "bg-green-100   text-green-700",
  golang:         "bg-cyan-100    text-cyan-800",
  rust:           "bg-orange-100  text-orange-800",

  // Database
  mongodb:        "bg-green-100   text-green-700",
  postgresql:     "bg-blue-100    text-blue-700",
  mysql:          "bg-blue-100    text-blue-800",
  redis:          "bg-red-100     text-red-700",
  firebase:       "bg-yellow-100  text-yellow-800",

  // DevOps / Cloud
  docker:         "bg-blue-100    text-blue-700",
  kubernetes:     "bg-blue-100    text-blue-800",
  aws:            "bg-orange-100  text-orange-700",
  gcp:            "bg-blue-100    text-blue-600",
  azure:          "bg-blue-100    text-blue-700",
  github:         "bg-gray-100    text-gray-800",

  // AI / ML
  "machine-learning": "bg-purple-100 text-purple-700",
  "deep-learning":    "bg-purple-100 text-purple-800",
  tensorflow:         "bg-orange-100 text-orange-700",
  pytorch:            "bg-red-100    text-red-700",
  openai:             "bg-green-100  text-green-700",
  langchain:          "bg-green-100  text-green-800",
};

// Default colour for topics not in the map
const DEFAULT_COLOR = "bg-gray-100 text-gray-700";

type Props = {
  stats: TopicStat[];
  theme: Theme;
};

export default function TopicBar({ stats, theme }: Props) {
  if (stats.length === 0) return null;

  return (
    <section className="mb-10">

      {/* Section heading */}
      <h2 className={`text-base font-semibold mb-3 ${theme.heading}`}>
        Skills & Technologies
      </h2>

      {/* Tags cloud */}
      <div className="flex flex-wrap gap-2">
        {stats.map(({ topic, count }) => {
          const colorClass = TOPIC_COLORS[topic.toLowerCase()] ?? DEFAULT_COLOR;

          return (
            <div
              key={topic}
              className={`
                flex items-center gap-1.5 px-3 py-1.5
                rounded-full text-xs font-medium
                transition-transform hover:scale-105
                cursor-default select-none
                ${colorClass}
              `}
              title={`Used in ${count} repo${count !== 1 ? 's' : ''}`}
            >
              {/* Topic name */}
              <span>{topic}</span>

              {/* Count badge — only show if used in 2+ repos */}
              {count > 1 && (
                <span className="opacity-60 text-xs">
                  ×{count}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Subtle note */}
      <p className={`text-xs mt-3 opacity-50 ${theme.body}`}>
        Based on {stats.length} topics across public repositories
      </p>

    </section>
  );
}