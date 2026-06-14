import type { GithubUser } from "@/types/github";
import type { Theme } from "@/lib/themes";

type Props = {
  user: GithubUser;
  theme: Theme;
};

export default function HeroSection({ user, theme }: Props) {
  return (
    <div className="mb-10">

    {/* ── Avatar + name row ── */}
    <div className="flex gap-5 items-start mb-6">

      {/* Avatar with ring */}
      <div className="relative shrink-0">
        <img
          src={user.avatar_url}
          alt={user.login}
          className={`w-20 h-20 rounded-full border-2 ${theme.border}`}
        />
        {/* Online-style dot */}
        <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5
                         bg-green-400 rounded-full border-2 border-white" />
      </div>

      {/* Name + username + bio */}
      <div className="flex-1 min-w-0">
        <h1 className={`text-2xl font-bold leading-tight ${theme.heading}`}>
          {user.name ?? user.login}
        </h1>
        <p className={`text-sm mt-0.5 mb-2 ${theme.body}`}>
          @{user.login}
          {user.company && (
            <span className="ml-2 opacity-60">· {user.company}</span>
          )}
        </p>
        {user.bio && (
          <p className={`text-sm leading-relaxed max-w-lg ${theme.body}`}>
            {user.bio}
          </p>
        )}
      </div>
    </div>

    {/* ── Stats row ── */}
    <div className="flex flex-wrap gap-3 mb-4">
      {[
        { label: 'Repos',     value: user.public_repos, icon: '📦' },
        { label: 'Followers', value: user.followers,    icon: '👥' },
        { label: 'Following', value: user.following,    icon: '➕' },
      ].map(stat => (
        <div
          key={stat.label}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg
                      border text-sm ${theme.card}`}
        >
          <span>{stat.icon}</span>
          <span className={`font-medium ${theme.heading}`}>
            {stat.value.toLocaleString()}
          </span>
          <span className={`text-xs ${theme.body}`}>{stat.label}</span>
        </div>
      ))}
      {user.location && (
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg
                         border text-sm ${theme.card}`}>
          <span>📍</span>
          <span className={`text-xs ${theme.body}`}>{user.location}</span>
        </div>
      )}
    </div>

    {/* ── Links row ── */}
    <div className="flex flex-wrap gap-3 text-sm">
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-blue-500
                   hover:text-blue-400 transition-colors"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24"
          fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-1.005-.54-1.695-.185-2.13.045-.66.33-.015 1.005.12 1.395.12.375.54 1.455.735 1.965.24.57.495 1.185.21 1.8-.285.615-1.26 2.31-1.785 3.09-.48.705-1.005 1.59-.435 2.295.555.69 2.445.96 3.75.48 1.005-.375 1.755-.57 2.01-.885.255-.33.195-.855-.12-1.8-.27-.615-1.14-1.515-1.605-2.04-.54-.615-1.155-1.305-.495-2.505.15-.285.405-.75.405-1.53 0-1.185-.435-2.145-1.185-2.895-.12-.285-.27-.75-.24-1.575.075-.615.24-1.545 1.59-1.545.465 0 1.005.165 1.695.615 1.02-.27 2.115-.405 3.21-.405 1.095 0 2.19.135 3.21.405.69-.45 1.23-.615 1.695-.615 1.35 0 1.515.93 1.59 1.545.03.825-.12 1.29-.24 1.575-.75.75-1.185 1.71-1.185 2.895 0 .78.255 1.245.405 1.53.66 1.2.045 1.89-.495 2.505-.465.525-1.335 1.425-1.605 2.04-.315.945-.375 1.47-.12 1.8.255.315 1.005.51 2.01.885 1.305.48 3.195.21 3.75-.48.57-.705.045-1.59-.435-2.295-.525-.78-1.5-2.475-1.785-3.09-.285-.615-.03-1.23.21-1.8.195-.51.615-1.59.735-1.965.135-.39.78-1.065.12-1.395-.435-.23-1.125-.585-2.13-.045-.51.285-1.095 1.35-1.23 1.695-.24.675-1.02 1.965-4.035 1.41 0 1.005-.015 1.935-.015 2.22 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
        </svg>
        GitHub Profile
      </a>
      {user.blog && (
        <a
          href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-blue-500
                     hover:text-blue-400 transition-colors"
        >
          🌐 Website
        </a>
      )}
      {user.twitter_username && (
        <a
          href={`https://twitter.com/${user.twitter_username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-blue-500
                     hover:text-blue-400 transition-colors"
        >
          𝕏 @{user.twitter_username}
        </a>
      )}
    </div>

  </div>
);
}