import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useState } from "react";
import { FilterTabs } from "@/components/FilterTabs";
import { projectCategories, ProjectCategory } from "@/data/projects";

export const Route = createFileRoute("/objects/index")({
  component: ObjectsPage,
});

function ObjectsPage() {
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <main>
        <section className="bg-graphite-deep py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader 
              eyebrow="Портфолио" 
              title="Наши объекты" 
              description="Опыт участия команды в проектах федерального уровня и работа на инфраструктурных объектах повышенной сложности."
            />
            
            <div className="mt-12">
              <FilterTabs 
                tabs={projectCategories} 
                active={filter} 
                onChange={(val) => setFilter(val as ProjectCategory)} 
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
