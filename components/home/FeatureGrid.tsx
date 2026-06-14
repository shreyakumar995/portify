import {
  BarChart3,
  FolderGit2,
  Smartphone,
  Palette,
  FileDown,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: BarChart3,
    title: "GitHub Statistics",
    desc: "Repos, followers, and activity displayed at a glance.",
  },
  {
    icon: FolderGit2,
    title: "Project Showcase",
    desc: "Top repositories with stars, languages, and descriptions.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Looks sharp on desktop, tablet, and mobile screens.",
  },
  {
    icon: Palette,
    title: "Theme Customization",
    desc: "Switch between Minimal, Dark, and Gradient styles instantly.",
  },
  {
    icon: FileDown,
    title: "PDF Export",
    desc: "Print or save your portfolio as a PDF to share offline.",
  },
  {
    icon: Zap,
    title: "Fast Generation",
    desc: "Live GitHub data rendered in seconds — no manual setup.",
  },
] as const;

export default function FeatureGrid() {
  return (
    <section aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2
            id="features-heading"
            className="text-2xl sm:text-3xl font-bold text-[#f0f6fc] mb-3"
          >
            Everything in one portfolio
          </h2>
          <p className="text-[#8b949e] max-w-md mx-auto">
            All the details recruiters and collaborators look for — pulled straight from GitHub.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="rounded-xl border border-[#30363d] bg-[#161b22] p-5 transition-colors hover:border-[#484f58]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#21262d] text-[#58a6ff] mb-3">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold text-[#f0f6fc] mb-1.5">{title}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
