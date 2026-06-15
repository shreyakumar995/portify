"use client";

import { Moon, Sun, Sparkles } from "lucide-react";
import { useHomeTheme, type HomeTheme } from "./ThemeProvider";

const OPTIONS: { id: HomeTheme; label: string; icon: typeof Sun }[] = [
  { id: "dark", label: "Dark", icon: Moon },
  { id: "light", label: "Light", icon: Sun },
  { id: "aurora", label: "Aurora", icon: Sparkles },
];

export default function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useHomeTheme();
  const activeIndex = OPTIONS.findIndex(o => o.id === theme);

  function moveTheme(nextIndex: number, buttons?: NodeListOf<HTMLButtonElement>) {
    const option = OPTIONS[(nextIndex + OPTIONS.length) % OPTIONS.length];
    setTheme(option.id);
    window.requestAnimationFrame(() => buttons?.[OPTIONS.indexOf(option)]?.focus());
  }

  if (compact) {
    const active = OPTIONS[activeIndex] ?? OPTIONS[0];
    const next = OPTIONS[((activeIndex === -1 ? 0 : activeIndex) + 1) % OPTIONS.length];
    const Icon = active.icon;
    return (
      <button
        type="button"
        onClick={() => {
          setTheme(next.id);
        }}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-(--home-border) bg-(--home-surface) text-(--home-text) hover:border-(--home-border-hover) transition-colors"
        aria-label={`Current theme: ${active.label}. Switch to ${next.label} theme.`}
        title={`Current theme: ${active.label}`}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </button>
    );
  }

  return (
    <div
      className="inline-flex items-center rounded-lg border border-(--home-border) bg-(--home-surface) p-0.5"
      role="radiogroup"
      aria-label="Theme"
      onKeyDown={event => {
        const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("[role='radio']");
        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
          event.preventDefault();
          moveTheme((activeIndex === -1 ? 0 : activeIndex) + 1, buttons);
        }
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
          event.preventDefault();
          moveTheme((activeIndex === -1 ? 0 : activeIndex) - 1, buttons);
        }
        if (event.key === "Home") {
          event.preventDefault();
          moveTheme(0, buttons);
        }
        if (event.key === "End") {
          event.preventDefault();
          moveTheme(OPTIONS.length - 1, buttons);
        }
      }}
    >
      {OPTIONS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={theme === id}
          aria-label={`${label} theme`}
          onClick={() => setTheme(id)}
          className={`inline-flex min-h-11 items-center gap-1.5 rounded-md px-3 text-xs font-medium transition-colors ${
            theme === id
              ? "bg-(--home-elevated) text-(--home-text) shadow-sm"
              : "text-(--home-muted) hover:text-(--home-text)"
          }`}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
