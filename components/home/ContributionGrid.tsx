export default function ContributionGrid() {
  const levels = [
    "var(--home-contrib-empty)",
    "var(--home-contrib-1)",
    "var(--home-contrib-2)",
    "var(--home-contrib-3)",
    "var(--home-contrib-4)",
  ];

  return (
    <div
      className="absolute inset-0 overflow-hidden opacity-[0.3] pointer-events-none"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[3px] p-8 rotate-[-8deg] scale-110">
          {Array.from({ length: 26 * 7 }).map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px]"
              style={{ backgroundColor: levels[(i * 7 + 3) % levels.length] }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--home-bg)] via-[var(--home-bg)]/80 to-[var(--home-bg)]" />
    </div>
  );
}
