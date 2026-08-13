import type { Project } from "@/data/projects";
import { Link } from "@tanstack/react-router";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link 
      to="/objects/$slug" 
      params={{ slug: project.slug }}
      className="panel group relative block overflow-hidden p-6 transition-all hover:border-orange/50 hover:translate-y-[-4px]"
    >
      <div className="tech-grid-fine pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="label-mono text-orange">{project.year}</span>
          <span className="label-mono text-[10px] border border-white/10 px-2 py-0.5 rounded uppercase tracking-tighter">
            {project.status}
          </span>
        </div>
        <h3 className="mt-6 text-xl font-display font-semibold transition-colors group-hover:text-orange leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
        
        {project.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] text-steel uppercase tracking-widest">
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 h-px w-full bg-border transition-colors group-hover:bg-orange/30" />
        <div className="mt-4 flex items-center justify-end">
          <span className="text-xs font-semibold text-orange opacity-0 group-hover:opacity-100 transition-opacity">
            Подробнее
          </span>
        </div>
      </div>
    </Link>
  );
}
