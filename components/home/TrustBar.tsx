import { Zap, BarChart3, Palette, FileDown } from "lucide-react";

const ITEMS = [
  { icon: Zap, label: "Instant Portfolio Generation" },
  { icon: BarChart3, label: "GitHub Analytics" },
  { icon: Palette, label: "Multiple Themes" },
  { icon: FileDown, label: "PDF Export" },
] as const;

export default function TrustBar() {
  return (
    <section aria-label="Key capabilities" className="border-b border-[#21262d] bg-[#0d1117]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {ITEMS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-lg border border-[#21262d] bg-[#161b22] px-4 py-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#21262d] text-[#3fb950]">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-sm font-medium text-[#c9d1d9] leading-snug">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
