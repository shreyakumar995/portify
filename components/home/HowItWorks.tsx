import { Search, GitBranch, LayoutTemplate } from "lucide-react";
import SectionHeader from "./SectionHeader";
import WorkflowVisual from "./WorkflowVisual";
import { CONTAINER, SECTION_PY, SECTION_BORDER } from "./layout";

const STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Analyze GitHub Profile",
    desc: "Public profile data, repository metadata, and contribution patterns pulled from GitHub.",
  },
  {
    num: "02",
    icon: GitBranch,
    title: "Extract Projects & Skills",
    desc: "Top repos, language stats, and topics organized into portfolio-ready sections.",
  },
  {
    num: "03",
    icon: LayoutTemplate,
    title: "Generate Portfolio",
    desc: "A polished, shareable page rendered instantly — ready for recruiters.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className={`${SECTION_BORDER} bg-[var(--home-bg)] scroll-mt-20`}
    >
      <div className={`${CONTAINER} ${SECTION_PY}`}>
        <SectionHeader
          id="how-it-works-heading"
          eyebrow="Workflow"
          title="From GitHub profile to portfolio in three steps"
          description="No manual data entry. Portify transforms live GitHub activity into a professional developer presence."
          align="left"
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-stretch">
          <ol className="relative flex flex-col justify-center lg:max-w-md xl:max-w-lg">
            {STEPS.map(({ num, icon: Icon, title, desc }, index) => (
              <li key={num} className="relative flex gap-5 pb-8 last:pb-0">
                {index < STEPS.length - 1 && (
                  <span
                    className="absolute left-[19px] top-10 bottom-0 w-px bg-[var(--home-border)]"
                    aria-hidden
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--home-border)] bg-[var(--home-surface)] text-xs font-mono font-semibold text-[var(--home-success)]">
                  {num}
                </span>
                <div className="pt-1.5 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--home-elevated)] text-[var(--home-primary)]">
                      <Icon className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <h3 className="home-card-title text-base sm:text-lg">{title}</h3>
                  </div>
                  <p className="home-body text-sm sm:text-base">{desc}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="min-h-[520px] lg:min-h-0">
            <WorkflowVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
