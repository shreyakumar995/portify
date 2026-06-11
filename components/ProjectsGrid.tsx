import ProjectCard from "@/components/ProjectCard";
import type { GithubRepo } from "@/types/github";

type Props = {
  repos: GithubRepo[];
};

export default function ProjectsGrid({ repos }: Props) {
  if (repos.length === 0) {
    return (
      <section>
        <h2 className="text-lg font-medium mb-4">No projects found</h2>
      </section>
    );
  }
  return (
    <section>
      <h2 className="text-lg font-medium mb-4">Top Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}
