import { CONTAINER } from "./layout";
import FinalCTAForm from "./FinalCTAForm";

export default function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="home-cta-section relative overflow-hidden border-t border-(--home-border-subtle) py-20 sm:py-24 lg:py-28 xl:py-32"
    >
      <div className={`relative ${CONTAINER}`}>
        <div className="home-cta-panel text-center">
          <h2
            id="final-cta-heading"
            className="home-section-title mb-4 text-balance text-[clamp(1.75rem,3vw+0.5rem,3rem)]"
          >
            Ready to Build Your Developer Portfolio?
          </h2>
          <p className="home-body mb-8 max-w-md mx-auto text-base">
            Enter your GitHub username and get a shareable portfolio in seconds.
          </p>

          <FinalCTAForm />
        </div>
      </div>
    </section>
  );
}
