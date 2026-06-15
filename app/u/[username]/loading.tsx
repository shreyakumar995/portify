import { CONTAINER } from "@/components/home/layout";

function Pulse({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-md bg-[var(--home-elevated)] animate-pulse ${className ?? ""}`}
    />
  );
}

export default function Loading() {
  return (
    <main className={`${CONTAINER} py-10 sm:py-12 lg:py-14`}>
      <div className="home-card home-card-featured p-4 sm:p-5 mb-10">
        <div className="rounded-lg border border-[var(--home-border)] bg-[var(--home-bg)] p-4 sm:p-5">
          <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-[var(--home-border-subtle)]">
            <Pulse className="h-2 w-2 rounded-full" />
            <Pulse className="h-2 w-2 rounded-full" />
            <Pulse className="h-2 w-2 rounded-full" />
            <Pulse className="ml-2 h-3 w-32" />
          </div>

          <div className="flex gap-4 items-start mb-5">
            <Pulse className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0" />
            <div className="flex-1 space-y-2.5">
              <Pulse className="h-7 w-48" />
              <Pulse className="h-4 w-32" />
              <Pulse className="h-4 w-full max-w-md" />
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <Pulse key={i} className="h-14" />
            ))}
          </div>
        </div>
      </div>

      <Pulse className="h-4 w-24 mb-4" />
      <div className="home-card p-4 sm:p-5 mb-10">
        <Pulse className="h-2.5 w-full rounded-full mb-4" />
        <div className="flex gap-4">
          <Pulse className="h-3 w-20" />
          <Pulse className="h-3 w-20" />
          <Pulse className="h-3 w-20" />
        </div>
      </div>

      <Pulse className="h-5 w-36 mb-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="home-card p-4 sm:p-5 space-y-3">
            <div className="flex justify-between gap-4">
              <Pulse className="h-5 w-32" />
              <Pulse className="h-4 w-10 shrink-0" />
            </div>
            <Pulse className="h-3 w-full" />
            <Pulse className="h-3 w-4/5" />
            <Pulse className="h-3 w-24" />
          </div>
        ))}
      </div>
    </main>
  );
}
