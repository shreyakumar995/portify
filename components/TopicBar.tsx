import { TopicStat } from "@/lib/github";

type Props = {
  stats: TopicStat[];
};

export default function TopicBar({ stats }: Props) {
  if (stats.length === 0) return null;

  return (
    <section className="mb-10 sm:mb-12">
      <p className="home-eyebrow mb-2">Expertise</p>
      <h2 className="home-card-title text-base sm:text-lg mb-4">
        Skills & Technologies
      </h2>

      <div className="flex flex-wrap gap-2">
        {stats.map(({ topic, count }) => (
          <div
            key={topic}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--home-border-subtle)] bg-[var(--home-surface)] text-xs font-medium text-[var(--home-muted)] transition-colors hover:border-[var(--home-border-hover)] hover:text-[var(--home-text)] cursor-default select-none"
            title={`Used in ${count} repo${count !== 1 ? "s" : ""}`}
          >
            <span>{topic}</span>
            {count > 1 && (
              <span className="font-mono text-[var(--home-subtle)] text-[10px]">
                ×{count}
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="text-xs mt-3 text-[var(--home-subtle)]">
        Based on {stats.length} topics across public repositories
      </p>
    </section>
  );
}
