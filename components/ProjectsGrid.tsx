import ProjectCard from "@/components/ProjectCard";
import type { Theme } from "@/lib/themes";
import type { GithubRepo } from "@/types/github";

type Props = {
  repos: GithubRepo[];
  theme: Theme;
};

export default function ProjectsGrid({ repos, theme }: Props) {
  if (repos.length === 0) {
    return (
      <section>
        <h2 className={`text-lg font-medium mb-4 ${theme.heading}`}>
          No projects found
        </h2>
      </section>
    );
  }

  return (
    <section>
      <h2 className={`text-lg font-medium mb-4 ${theme.heading}`}>
        Top Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
           <div key={repo.id} className="project-card">
          <ProjectCard repo={repo}  theme={theme} />
          </div>
        ))}
      </div>
    </section>
  );
}
