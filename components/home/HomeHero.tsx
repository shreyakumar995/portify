import { Check } from "lucide-react";
import GithubIcon from "./GithubIcon";
import HeroTransformVisual from "./HeroTransformVisual";
import ContributionGrid from "./ContributionGrid";
import { CONTAINER } from "./layout";
import { instrumentSerif } from "./fonts";
import { HomeHeroExamples, HomeHeroForm } from "./HomeHeroActions";

const TRUST_BADGES = [
  "No Sign Up Required",
  "GitHub Powered",
  "Open Source",
  "Instant Generation",
] as const;

export default function HomeHero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="home-hero-section relative overflow-hidden border-b border-(--home-border-subtle) scroll-mt-24"
    >
      <ContributionGrid />

      <div className={`relative z-10 ${CONTAINER} pt-16 pb-10 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-20 xl:pt-32 xl:pb-24`}>
        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-14 lg:items-start">
          {/* Copy — top */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:col-start-1 lg:row-start-1">
            <div className="inline-flex items-center gap-2 mb-5 rounded-full border border-(--home-border) bg-(--home-surface)/95 px-3.5 py-1">
              <GithubIcon className="h-3.5 w-3.5 text-(--home-muted)" />
              <span className="text-[11px] font-medium text-(--home-muted) tracking-wide">
                Developer portfolio generator
              </span>
            </div>

            <h1 id="hero-heading" className="home-hero-title mb-4 text-balance w-full max-w-2xl">
              Turn Your GitHub Profile Into a{" "}
              <span className="block sm:inline">
                <span className={`${instrumentSerif.className} home-hero-title-accent`}>
                  Professional
                </span>{" "}
                Developer Portfolio
              </span>
            </h1>

            <p className="home-hero-subtitle mb-0 text-pretty w-full max-w-xl">
              Generate a polished portfolio from your repositories, skills, and
              contributions in seconds.
            </p>
          </div>

          {/* Visual — mobile: after subtitle; tablet: after trust; desktop: right column */}
          <div className="order-2 md:order-4 lg:order-0 lg:col-start-2 lg:row-start-1 lg:self-start lg:-mt-1 w-full flex justify-center lg:justify-end">
            <HeroTransformVisual compact />
          </div>

          {/* Copy — form, trust, examples */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-3 md:order-2 lg:col-start-1 lg:row-start-2 w-full max-w-lg lg:max-w-none mx-auto lg:mx-0">
            <HomeHeroForm />

            <ul className="home-trust-badges w-full max-w-lg mb-4">
              {TRUST_BADGES.map(badge => (
                <li key={badge} className="home-trust-badge">
                  <Check className="h-2.5 w-2.5 text-(--home-success) shrink-0" aria-hidden />
                  {badge}
                </li>
              ))}
            </ul>

            <HomeHeroExamples />
          </div>
        </div>
      </div>
    </section>
  );
}
