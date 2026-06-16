export default function ContributionGrid() {
  return (
    <div
      className="absolute inset-0 overflow-hidden opacity-[0.3] pointer-events-none"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="h-[180px] w-[680px] rotate-[-8deg] scale-110 sm:h-[220px] sm:w-[820px]"
          viewBox="0 0 680 180"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="home-contribution-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="10" height="10" rx="2" fill="var(--home-contrib-empty)" />
              <rect x="16" y="0" width="10" height="10" rx="2" fill="var(--home-contrib-2)" />
              <rect x="32" y="0" width="10" height="10" rx="2" fill="var(--home-contrib-1)" />
              <rect x="8" y="16" width="10" height="10" rx="2" fill="var(--home-contrib-4)" />
              <rect x="24" y="16" width="10" height="10" rx="2" fill="var(--home-contrib-empty)" />
              <rect x="0" y="32" width="10" height="10" rx="2" fill="var(--home-contrib-3)" />
              <rect x="16" y="32" width="10" height="10" rx="2" fill="var(--home-contrib-empty)" />
              <rect x="32" y="32" width="10" height="10" rx="2" fill="var(--home-contrib-2)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#home-contribution-pattern)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-(--home-bg) via-(--home-bg)/80 to-(--home-bg)" />
    </div>
  );
}
