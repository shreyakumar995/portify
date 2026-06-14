const LEVELS = [
  "#161b22", "#0e4429", "#006d32", "#26a641", "#39d353",
] as const;

function level(seed: number) {
  return LEVELS[seed % LEVELS.length];
}

export default function ContributionGrid() {
  return (
    <div
      className="absolute inset-0 overflow-hidden opacity-[0.35] pointer-events-none"
      aria-hidden
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-[repeat(26,minmax(0,1fr))] gap-[3px] p-8 rotate-[-8deg] scale-110">
          {Array.from({ length: 26 * 7 }).map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px]"
              style={{ backgroundColor: level(i * 7 + 3) }}
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#0d1117]/80 to-[#0d1117]" />
    </div>
  );
}
