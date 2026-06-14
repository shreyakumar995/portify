import { Zap, BarChart3, Palette, FileDown } from "lucide-react";
import { CONTAINER, SECTION_BORDER, CARD_HOVER_SUBTLE } from "./layout";

const ITEMS = [
  { icon: Zap, label: "Instant Portfolio Generation" },
  { icon: BarChart3, label: "GitHub Analytics" },
  { icon: Palette, label: "Multiple Themes" },
  { icon: FileDown, label: "PDF Export" },
] as const;

export default function TrustBar() {
  return (
    <section aria-label="Key capabilities" className={`${SECTION_BORDER} bg-[var(--home-surface)]/50`}>
      <div className={`${CONTAINER} py-10 sm:py-12`}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className={`flex items-center gap-3 rounded-xl border border-[var(--home-border)] bg-[var(--home-surface)] px-4 py-4 ${CARD_HOVER_SUBTLE}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--home-elevated)] text-[var(--home-success)]">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-sm font-medium text-[var(--home-text)] leading-snug">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
