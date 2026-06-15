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

  if (compact) {
    const active = OPTIONS.find(o => o.id === theme) ?? OPTIONS[0];
    const Icon = active.icon;
    return (
      <button
        type="button"
        onClick={() => {
          const idx = OPTIONS.findIndex(o => o.id === theme);
          setTheme(OPTIONS[(idx + 1) % OPTIONS.length].id);
        }}
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--home-border)] bg-[var(--home-surface)] text-[var(--home-text)] hover:border-[var(--home-border-hover)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)]"
        aria-label={`Theme: ${active.label}. Click to change.`}
      >
        <Icon className="h-4 w-4" aria-hidden />
      </button>
    );
  }

  return (
    <div
      className="inline-flex items-center rounded-lg border border-[var(--home-border)] bg-[var(--home-surface)] p-0.5"
      role="radiogroup"
      aria-label="Theme"
    >
      {OPTIONS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          role="radio"
          aria-checked={theme === id}
          onClick={() => setTheme(id)}
          className={`inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--home-primary)] ${
            theme === id
              ? "bg-[var(--home-elevated)] text-[var(--home-text)] shadow-sm"
              : "text-[var(--home-muted)] hover:text-[var(--home-text)]"
          }`}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
