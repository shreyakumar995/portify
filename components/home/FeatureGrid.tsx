import {
  BarChart3,
  Zap,
  Palette,
  FileDown,
  Smartphone,
} from "lucide-react";
import SectionHeader from "./SectionHeader";
import { CONTAINER, SECTION_PY, SECTION_BORDER, CARD_FEATURED, CARD_SUPPORTING } from "./layout";

function StatsVisual() {
  return (
    <div className="h-full min-h-[220px] rounded-xl border border-[var(--home-border)] bg-[var(--home-bg)] p-4 flex flex-col justify-center" aria-hidden>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Repos", value: "42" },
          { label: "Followers", value: "1.2k" },
          { label: "Languages", value: "8" },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg border border-[var(--home-border-subtle)] bg-[var(--home-surface)] px-3 py-3 text-center">
            <p className="text-xl font-semibold font-mono text-[var(--home-text)]">{value}</p>
            <p className="text-[10px] uppercase tracking-wide text-[var(--home-muted)] mt-1">{label}</p>
          </div>
        ))}
      </div>
      <div className="h-2.5 rounded-full overflow-hidden flex mb-3">
        <span className="bg-[#3178C6]" style={{ width: "40%" }} />
        <span className="bg-[#F7DF1E]" style={{ width: "35%" }} />
        <span className="bg-[#3572A5]" style={{ width: "25%" }} />
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="aspect-square rounded-[2px]"
            style={{
              backgroundColor: [
                "var(--home-contrib-empty)",
                "var(--home-contrib-1)",
                "var(--home-contrib-2)",
                "var(--home-contrib-3)",
                "var(--home-contrib-4)",
              ][i % 5],
            }}
          />
        ))}
      </div>
    </div>
  );
}

function GenerateVisual() {
  return (
    <div className="h-full min-h-[220px] rounded-xl border border-[var(--home-border)] bg-[var(--home-bg)] p-4 flex flex-col" aria-hidden>
      <div className="flex items-center gap-1.5 mb-3 pb-3 border-b border-[var(--home-border-subtle)]">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
        <span className="ml-2 text-[11px] font-mono text-[var(--home-muted)]">portify /u/developer</span>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-10 w-10 rounded-full border border-[var(--home-border)] bg-[var(--home-elevated)]" />
        <div>
          <p className="text-sm font-medium text-[var(--home-text)]">Developer Name</p>
          <p className="text-xs font-mono text-[var(--home-muted)]">@developer</p>
        </div>
      </div>
      {["react", "next.js", "typescript"].map(repo => (
        <div
          key={repo}
          className="mb-2 rounded-md border border-[var(--home-border-subtle)] bg-[var(--home-surface)] px-3 py-2 text-xs font-mono text-[var(--home-code-link)]"
        >
          {repo}
        </div>
      ))}
    </div>
  );
}

function ThemeVisual() {
  const themes = [
    { name: "Minimal", bg: "#ffffff", text: "#24292f" },
    { name: "Dark", bg: "#0d1117", text: "#f0f6fc" },
    { name: "Gradient", bg: "linear-gradient(135deg,#f5f3ff,#fdf2f8)", text: "#4c1d95" },
  ];
  return (
    <div className="h-full min-h-[150px] rounded-xl border border-[var(--home-border)] bg-[var(--home-bg)] p-3 flex gap-2" aria-hidden>
      {themes.map(t => (
        <div key={t.name} className="flex-1 rounded-lg border border-[var(--home-border)] overflow-hidden" style={{ background: t.bg }}>
          <div className="h-2 border-b border-black/10" />
          <div className="p-2">
            <div className="h-2 w-8 rounded mb-1.5 opacity-40" style={{ backgroundColor: t.text }} />
            <div className="h-1.5 w-full rounded opacity-20" style={{ backgroundColor: t.text }} />
          </div>
          <p className="text-[9px] text-center py-1 font-mono" style={{ color: t.text }}>{t.name}</p>
        </div>
      ))}
    </div>
  );
}

function PdfVisual() {
  return (
    <div className="h-full min-h-[150px] rounded-xl border border-[var(--home-border)] bg-[var(--home-bg)] p-4 flex items-center justify-center" aria-hidden>
      <div className="relative">
        <div className="w-24 h-32 rounded-md border border-[var(--home-border)] bg-[var(--home-elevated)] shadow-md">
          <div className="h-3 border-b border-[var(--home-border-subtle)]" />
          <div className="p-2 space-y-1.5">
            <div className="h-1.5 w-12 rounded bg-[var(--home-border)]" />
            <div className="h-1 w-full rounded bg-[var(--home-border-subtle)]" />
            <div className="h-1 w-full rounded bg-[var(--home-border-subtle)]" />
          </div>
        </div>
        <span className="absolute -bottom-2 -right-2 rounded-md bg-[var(--home-success-bg)] px-2 py-0.5 text-[10px] font-medium text-[var(--home-on-success)]">
          PDF
        </span>
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="h-full min-h-[150px] rounded-xl border border-[var(--home-border)] bg-[var(--home-bg)] p-4 flex items-center justify-center" aria-hidden>
      <div className="w-[88px] rounded-[14px] border-2 border-[var(--home-border)] bg-[var(--home-surface)] p-1.5 shadow-lg">
        <div className="h-1.5 w-8 mx-auto rounded-full bg-[var(--home-border)] mb-2" />
        <div className="rounded-md bg-[var(--home-bg)] p-2 space-y-1.5">
          <div className="h-4 w-4 rounded-full bg-[var(--home-elevated)] mx-auto" />
          <div className="h-1 w-full rounded bg-[var(--home-border)]" />
          <div className="h-6 rounded border border-[var(--home-border-subtle)] bg-[var(--home-surface)]" />
          <div className="h-6 rounded border border-[var(--home-border-subtle)] bg-[var(--home-surface)]" />
        </div>
      </div>
    </div>
  );
}

const LARGE_FEATURES = [
  {
    icon: BarChart3,
    title: "GitHub Analytics",
    desc: "Repository counts, followers, language breakdowns, and contribution insights — displayed in a recruiter-friendly format.",
    Visual: StatsVisual,
  },
  {
    icon: Zap,
    title: "Automatic Portfolio Generation",
    desc: "Enter a username and get a complete portfolio in seconds. Your GitHub profile becomes your portfolio.",
    Visual: GenerateVisual,
  },
] as const;

const SMALL_FEATURES = [
  {
    icon: Palette,
    title: "Theme Switching",
    desc: "Switch between Minimal, Dark, and Gradient themes instantly.",
    Visual: ThemeVisual,
  },
  {
    icon: FileDown,
    title: "PDF Export",
    desc: "Print or save your portfolio as a PDF for offline sharing.",
    Visual: PdfVisual,
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Optimized layouts for phones, tablets, and desktop screens.",
    Visual: MobileVisual,
  },
] as const;

export default function FeatureGrid() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className={`${SECTION_BORDER} bg-[var(--home-section-alt)] scroll-mt-20`}
    >
      <div className={`${CONTAINER} ${SECTION_PY}`}>
        <SectionHeader
          id="features-heading"
          eyebrow="Features"
          title="Everything hiring managers look for"
          description="Built around real GitHub data — not placeholder content. Your repos, stats, and skills front and center."
        />

        <div className="space-y-8 lg:space-y-10">
          <ul className="grid gap-5 sm:gap-6 lg:grid-cols-2">
            {LARGE_FEATURES.map(({ icon: Icon, title, desc, Visual }) => (
              <li key={title} className={`overflow-hidden rounded-2xl ${CARD_FEATURED}`}>
                <div className="grid lg:grid-cols-2 lg:min-h-[340px]">
                  <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center order-2 lg:order-1 bg-[var(--home-surface)]">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--home-elevated)] text-[var(--home-primary)] mb-5 shadow-[var(--home-elevation-2)]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="home-card-title text-xl sm:text-2xl mb-3">{title}</h3>
                    <p className="home-body text-sm sm:text-base leading-relaxed">{desc}</p>
                  </div>
                  <div className="p-5 sm:p-6 lg:p-8 order-1 lg:order-2 min-h-[240px] lg:min-h-0 bg-[var(--home-bg)] border-b lg:border-b-0 lg:border-l border-[var(--home-border-subtle)]">
                    <Visual />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <ul className="grid gap-4 sm:gap-5 sm:grid-cols-3 pt-2">
            {SMALL_FEATURES.map(({ icon: Icon, title, desc, Visual }) => (
              <li key={title} className={`overflow-hidden rounded-xl flex flex-col ${CARD_SUPPORTING}`}>
                <div className="p-4 sm:p-5 flex-1 bg-[var(--home-bg)]">
                  <Visual />
                </div>
                <div className="px-5 pb-5 sm:px-5 sm:pb-5 pt-3 bg-[var(--home-surface)] border-t border-[var(--home-border-subtle)]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--home-elevated)] text-[var(--home-primary)] mb-2.5">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-[var(--home-text)] mb-1">{title}</h3>
                  <p className="text-xs sm:text-sm text-[var(--home-muted)] leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
