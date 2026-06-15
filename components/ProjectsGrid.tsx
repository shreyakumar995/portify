import ProjectCard from "@/components/ProjectCard";
import type { GithubRepo } from "@/types/github";

type Props = {
  repos: GithubRepo[];
};

export default function ProjectsGrid({ repos }: Props) {
  if (repos.length === 0) {
    return (
      <section>
        <h2 className="home-card-title text-lg mb-4">No projects found</h2>
      </section>
    );
  }

  return (
    <section>
      <p className="home-eyebrow mb-2">Repositories</p>
      <h2 className="home-card-title text-lg sm:text-xl mb-5 sm:mb-6">Top Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map(repo => (
          <div key={repo.id} className="project-card">
            <ProjectCard repo={repo} />
          </div>
        ))}
      </div>
    </section>
  );
}
