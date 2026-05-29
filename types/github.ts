export interface GithubUser {
    login: string;
    name: string|null;
    avatar_url: string;
    bio: string|null;
    location: string|null;
    blog: string|null;
    twitter_username: string|null;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
}
export interface GithubRepo{
    id: number;
    name: string;
    description: string|null;
    html_url: string;
    homepage: string|null;
    language: string|null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    topics: string[];
    fork: boolean;
}