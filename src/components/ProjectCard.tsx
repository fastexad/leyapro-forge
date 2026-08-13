import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel group relative overflow-hidden p-6">
      <div className="tech-grid-fine pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="label-mono text-orange">{project.year}</span>
          <span className="label-mono">{project.status}</span>
        </div>
        <h3 className="mt-6 text-xl font-semibold transition-colors group-hover:text-orange">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
        <div className="mt-6 h-px w-full bg-border transition-colors group-hover:bg-orange" />
      </div>
    </article>
  );
}