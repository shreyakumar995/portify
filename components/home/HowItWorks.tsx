import { User, Download, Sparkles } from "lucide-react";

const STEPS = [
  {
    step: 1,
    icon: User,
    title: "Enter Username",
    desc: "Type any public GitHub handle — yours or someone else's.",
  },
  {
    step: 2,
    icon: Download,
    title: "Fetch GitHub Data",
    desc: "Repos, languages, stats, and profile info pulled in real time.",
  },
  {
    step: 3,
    icon: Sparkles,
    title: "Generate Portfolio",
    desc: "Get a polished, shareable page ready to send to recruiters.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="border-b border-[#21262d]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2
            id="how-it-works-heading"
            className="text-2xl sm:text-3xl font-bold text-[#f0f6fc] mb-3"
          >
            How it works
          </h2>
          <p className="text-[#8b949e] max-w-md mx-auto">
            Three steps from GitHub profile to portfolio link.
          </p>
        </div>

        <ol className="grid gap-6 sm:grid-cols-3">
          {STEPS.map(({ step, icon: Icon, title, desc }) => (
            <li
              key={step}
              className="relative rounded-xl border border-[#30363d] bg-[#161b22] p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#238636]/15 text-[#3fb950] text-sm font-mono font-semibold">
                  {step}
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#21262d] text-[#58a6ff]">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#f0f6fc] mb-2">{title}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
