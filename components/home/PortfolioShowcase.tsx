import Image from "next/image";

const EXAMPLES = [
  {
    src: "/examples/minimal.svg",
    theme: "Minimal",
    username: "torvalds",
    alt: "Minimal theme portfolio preview",
  },
  {
    src: "/examples/dark.svg",
    theme: "Dark",
    username: "gaearon",
    alt: "Dark theme portfolio preview",
  },
  {
    src: "/examples/gradient.svg",
    theme: "Gradient",
    username: "sindresorhus",
    alt: "Gradient theme portfolio preview",
  },
] as const;

export default function PortfolioShowcase() {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="border-b border-[#21262d] scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2
            id="showcase-heading"
            className="text-2xl sm:text-3xl font-bold text-[#f0f6fc] mb-3"
          >
            Portfolio showcase
          </h2>
          <p className="text-[#8b949e] max-w-lg mx-auto">
            Every profile gets a clean layout with repos, language breakdowns,
            and theme options — generated automatically.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLES.map(({ src, theme, username, alt }) => (
            <li
              key={theme}
              className="group rounded-xl border border-[#30363d] bg-[#161b22] overflow-hidden transition-colors hover:border-[#484f58]"
            >
              <div className="relative aspect-[16/10] bg-[#0d1117] border-b border-[#30363d]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-[#f0f6fc]">{theme} theme</p>
                  <p className="text-xs text-[#8b949e] font-mono">@{username}</p>
                </div>
                <span className="text-[11px] text-[#484f58] font-mono hidden sm:inline">
                  portify /u/{username}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
