import { createFileRoute, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { CTASection } from "@/components/CTASection";
import { MapPin, Calendar, Tag, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/objects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  component: ObjectDetailsPage,
});

function ObjectDetailsPage() {
  const project = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <main>
        <section className="bg-graphite-deep py-24 relative overflow-hidden">
           <div className="tech-grid absolute inset-0 opacity-20" />
           <div className="mx-auto max-w-7xl px-6 relative">
              <div className="grid lg:grid-cols-3 gap-12">
                 <div className="lg:col-span-2">
                    <SectionHeader 
                      eyebrow="Объект" 
                      title={project.title} 
                      description={project.description}
                    />
                    
                    <div className="mt-12 aspect-video bg-white/5 border border-white/5 rounded-sm flex items-center justify-center relative overflow-hidden group">
                       <div className="tech-grid-fine absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" />
                       <span className="text-[10px] label-mono text-muted-foreground uppercase tracking-[0.3em]">Фото объекта в разработке</span>
                    </div>

                    <div className="mt-16">
                       <h3 className="text-xl font-display font-bold text-white uppercase mb-8">Выполненные работы</h3>
                       <div className="grid sm:grid-cols-2 gap-4">
                          {project.tags.map((tag, i) => (
                             <div key={i} className="panel p-4 flex items-center gap-4 bg-white/[0.02]">
                                <ShieldCheck className="w-5 h-5 text-orange" />
                                <span className="text-sm text-white uppercase tracking-wider">{tag}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="lg:col-span-1 space-y-6">
                    <div className="panel p-8 bg-black/40 border-white/5">
                       <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange mb-8">Спецификация</h4>
                       <div className="space-y-6">
                          <div className="flex items-start gap-4">
                             <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                             <div>
                                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Регион</p>
                                <p className="text-sm text-white font-bold">{project.location}</p>
                             </div>
                          </div>
                          <div className="flex items-start gap-4">
                             <Calendar className="w-4 h-4 text-muted-foreground mt-1" />
                             <div>
                                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Период</p>
                                <p className="text-sm text-white font-bold">{project.year}</p>
                             </div>
                          </div>
                          <div className="flex items-start gap-4">
                             <Tag className="w-4 h-4 text-muted-foreground mt-1" />
                             <div>
                                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Статус</p>
                                <p className="text-sm text-white font-bold">{project.status}</p>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="panel p-8 bg-orange/5 border-orange/10">
                       <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-4">Нужен похожий результат?</h4>
                       <p className="text-xs text-muted-foreground leading-relaxed mb-6">Получите консультацию инженера по технологиям защиты для вашего объекта.</p>
                       <button className="w-full h-12 bg-orange text-black font-bold text-[10px] uppercase tracking-[0.2em]">Обсудить проект</button>
                    </div>
                 </div>
              </div>
           </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
