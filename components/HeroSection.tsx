import Image from "next/image";
import GithubIcon from "@/components/home/GithubIcon";
import type { GithubUser } from "@/types/github";

type Props = {
  user: GithubUser;
};

function memberSinceYear(dateStr: string): number {
  return new Date(dateStr).getFullYear();
}

function yearsOnGitHub(dateStr: string): number {
  return new Date().getFullYear() - new Date(dateStr).getFullYear();
}

export default function HeroSection({ user }: Props) {
  const since = memberSinceYear(user.created_at);
  const years = yearsOnGitHub(user.created_at);

  return (
    <section className="mb-10 sm:mb-12">
      <div className="home-card home-card-featured p-4 sm:p-5">
        <div className="rounded-lg border border-[var(--home-border)] bg-[var(--home-bg)] p-4 sm:p-5">
          {/* Browser chrome */}
          <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-[var(--home-border-subtle)]">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
            <span className="ml-2 text-[11px] font-mono text-[var(--home-muted)] truncate">
              portify /u/{user.login}
            </span>
          </div>

          {/* Avatar + identity */}
          <div className="flex gap-4 sm:gap-5 items-start mb-5">
            <div className="relative shrink-0">
              <Image
                src={user.avatar_url}
                alt={user.login}
                width={80}
                height={80}
                sizes="80px"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[var(--home-success)]/40"
              />
              <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-[var(--home-success)] rounded-full border-2 border-[var(--home-bg)]" />
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-xl sm:text-2xl font-bold leading-tight text-[var(--home-text)]">
                {user.name ?? user.login}
              </h1>
              <p className="text-sm font-mono text-[var(--home-muted)] mt-0.5">
                @{user.login}
                {user.company && (
                  <span className="ml-2 opacity-70">· {user.company}</span>
                )}
              </p>
              {user.bio && (
                <p className="text-sm leading-relaxed max-w-lg text-[var(--home-muted)] mt-2">
                  {user.bio}
                </p>
              )}
            </div>
          </div>

          {/* Stats grid — matches hero preview */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 mb-5">
            {[
              { label: "Repos", value: user.public_repos },
              { label: "Followers", value: user.followers, cls: "stat-followers" },
              { label: "Following", value: user.following, cls: "stat-following" },
              { label: "Since", value: since, suffix: `· ${years} yr${years !== 1 ? "s" : ""}` },
            ].map(stat => (
              <div
                key={stat.label}
                className={`rounded-md border border-[var(--home-border-subtle)] bg-[var(--home-surface)] py-2 sm:py-2.5 text-center ${stat.cls ?? ""}`}
              >
                <p className="text-sm sm:text-base font-semibold font-mono text-[var(--home-text)]">
                  {typeof stat.value === "number" ? stat.value.toLocaleString() : stat.value}
                </p>
                <p className="text-[10px] sm:text-xs text-[var(--home-muted)]">
                  {stat.label}
                  {stat.suffix && (
                    <span className="hidden sm:inline"> {stat.suffix}</span>
                  )}
                </p>
              </div>
            ))}
          </div>

          {user.location && (
            <p className="text-xs text-[var(--home-muted)] mb-4 flex items-center gap-1.5">
              <span aria-hidden>📍</span>
              {user.location}
            </p>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 text-sm pt-1 border-t border-[var(--home-border-subtle)]">
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="home-link inline-flex items-center gap-1.5 font-medium"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              GitHub Profile
            </a>
            {user.blog && (
              <a
                href={user.blog.startsWith("http") ? user.blog : `https://${user.blog}`}
                target="_blank"
                rel="noopener noreferrer"
                className="home-link font-medium"
              >
                Website ↗
              </a>
            )}
            {user.twitter_username && (
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="home-link font-medium"
              >
                @{user.twitter_username}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
