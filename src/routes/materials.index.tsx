import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { materials, materialCategories, MaterialCategory } from "@/data/materials";
import { MaterialCard } from "@/components/MaterialCard";
import { useState } from "react";
import { FilterTabs } from "@/components/FilterTabs";

export const Route = createFileRoute("/materials/")({
  component: MaterialsPage,
});

function MaterialsPage() {
  const [filter, setFilter] = useState<MaterialCategory>("all");

  const filteredMaterials = filter === "all"
    ? materials
    : materials.filter(m => m.category === filter);

  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <main>
        <section className="bg-graphite-deep py-20 relative overflow-hidden">
          <div className="tech-grid absolute inset-0 opacity-20" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <SectionHeader 
              eyebrow="Экспертиза" 
              title="Материалы и системы" 
              description="Мы подбираем системы защиты на основе 30-летнего практического опыта, учитывая среду эксплуатации и бюджет проекта."
            />

            
            <div className="mt-12">
              <FilterTabs 
                tabs={materialCategories} 
                active={filter} 
                onChange={(val) => setFilter(val as MaterialCategory)} 
              />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {filteredMaterials.map((material) => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
