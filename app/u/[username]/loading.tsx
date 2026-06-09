export default function Loading() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex gap-6 items-start mb-10">
        <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse shrink-0" />
        <div className="flex-1 space-y-3">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full max-w-md bg-gray-200 rounded animate-pulse" />
          <div className="flex gap-4 pt-1">
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>

      <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-lg p-4 space-y-3"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-10 bg-gray-200 rounded animate-pulse shrink-0" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-4/5 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-3 w-28 bg-gray-200 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </main>
  );
}
