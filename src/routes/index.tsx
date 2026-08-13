import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { MaterialCard } from "@/components/MaterialCard";
import { FilterTabs } from "@/components/FilterTabs";
import { DigitalDashboardPreview } from "@/components/DigitalDashboardPreview";
import { BridgeAbstract } from "@/components/BridgeAbstract";

import { projects, projectCategories } from "@/data/projects";
import { materials, materialCategories } from "@/data/materials";
import { services } from "@/data/services";
import { stats } from "@/data/stats";
import { siteConfig } from "@/config/siteConfig";

const title = "ООО СК «ЛЕЯ» — мостовое и промышленное строительство";
const description =
  "СК «ЛЕЯ»: строительство мостов и инженерных сооружений, собственные материалы, цифровой контроль объектов.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Section({
  id,
  children,
  muted = false,
}: {
  id: string;
  children: React.ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={muted ? "bg-graphite" : "bg-background"}>
      <div className="mx-auto max-w-7xl px-6 py-20">{children}</div>
    </section>
  );
}

function Index() {
  const [projectFilter, setProjectFilter] = useState("all");
  const [materialFilter, setMaterialFilter] = useState("all");

  const visibleProjects =
    projectFilter === "all" ? projects : projects.filter((p) => p.category === projectFilter);
  const visibleMaterials =
    materialFilter === "all" ? materials : materials.filter((m) => m.category === materialFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        <Section id="bridges" muted>
          <SectionHeader
            index="01"
            eyebrow="Специализация"
            title="Фокус на мостах"
            description="Ключевое направление компании — мостовые сооружения и переходы."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="panel relative overflow-hidden p-6">
              <BridgeAbstract className="w-full text-steel" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.id} className="panel p-5">
                  <h3 className="text-base font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="projects">
          <SectionHeader index="02" eyebrow="Портфолио" title="Объекты" />
          <div className="mt-8">
            <FilterTabs
              tabs={projectCategories}
              active={projectFilter}
              onChange={setProjectFilter}
            />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section id="materials" muted>
          <SectionHeader index="03" eyebrow="Производство" title="Материалы" />
          <div className="mt-8">
            <FilterTabs
              tabs={materialCategories}
              active={materialFilter}
              onChange={setMaterialFilter}
            />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {visibleMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
        </Section>

        <Section id="digital">
          <SectionHeader
            index="04"
            eyebrow="Прозрачность"
            title="Цифровой кабинет"
            description="Онлайн-контроль хода работ — раздел в разработке."
          />
          <div className="mt-10">
            <DigitalDashboardPreview />
          </div>
        </Section>

        <Section id="about" muted>
          <SectionHeader index="05" eyebrow="Компания" title="О компании" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="panel p-6">
                <p className="font-display text-3xl text-orange">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <CTASection />

        <Section id="contacts">
          <SectionHeader index="06" eyebrow="Связь" title="Контакты" />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="panel p-6">
              <p className="label-mono">Телефон</p>
              <p className="mt-2">{siteConfig.phone}</p>
            </div>
            <div className="panel p-6">
              <p className="label-mono">Email</p>
              <p className="mt-2">{siteConfig.email}</p>
            </div>
            <div className="panel p-6">
              <p className="label-mono">Адрес</p>
              <p className="mt-2">{siteConfig.address}</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
