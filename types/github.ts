/** SPDX license info returned on repos that declare a license in GitHub settings. */
export interface GithubLicense {
  /** Short identifier, e.g. "mit", "apache-2.0". */
  key: string;
  /** Human-readable name, e.g. "MIT License". */
  name: string;
  /** SPDX identifier when available; null for custom or unknown licenses. */
  spdx_id: string | null;
  /** Link to the license text on GitHub. */
  url: string | null;
}

export interface GithubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  /** Company or organization shown on the profile; good for a portfolio header. */
  company: string | null;
  /** Public email if the user chose to expose it; often null. */
  email: string | null;
  /** ISO 8601 date when the account was created; useful for "on GitHub since …". */
  created_at: string;
  /** Whether the user marked themselves as open to work (job-seeker portfolios). */
  hireable: boolean | null;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
  /** Full name including owner, e.g. "octocat/Hello-World" — use for display and links. */
  full_name: string;
  /** ISO 8601 date when the repo was created; shows project age on a portfolio. */
  created_at: string;
  /** ISO 8601 date of the last push; better than updated_at for "last active" badges. */
  pushed_at: string | null;
  /** True if the repo is archived; hide or de-emphasize on a portfolio. */
  archived: boolean;
  /** True when GitHub Pages is enabled; pair with homepage for live demos. */
  has_pages: boolean;
  /** Default branch name, usually "main"; useful for README or demo deep links. */
  default_branch: string;
  /** "public" or "private"; filter to public repos when listing work. */
  visibility: "public" | "private" | "internal";
  /** Open issue count; signals maintenance and community activity. */
  open_issues_count: number;
  /** License metadata when set; display badges like MIT on open-source work. */
  license: GithubLicense | null;
}
