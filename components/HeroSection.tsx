import{GithubUser} from "@/types/github";
type Props = {
    user: GithubUser;
};
export default function HeroSection({ user }: Props) {
    return (
        <div className="flex gap-6 items-start mb-12">
            <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full border border-gray-200 shrink-0"
            />
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">{user.name ?? user.login}</h1>
                <p className="text-sm text-gray-400 mt-0.5">@{user.login}</p>
                {user.bio &&(
                    <p className="text-gray-600 mt-2 max-w-lg text-sm leading relaxed">{user.bio}</p>
                )}
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                  <span>📦 {user.public_repos} repos</span>
                  <span>👥 {user.followers} followers</span>
                  <span>➕ {user.following} following</span>
                  {user.location && <span>📍 {user.location}</span>}
                </div>
                <div className="flex flex-wrap gap-4 mt-2 text-sm">
                    <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">
                    GitHub Profile →
                    </a>
                    {user.blog && (
                        <a
                        href={user.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline">
                        Website →
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}