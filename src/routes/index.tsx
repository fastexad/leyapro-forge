import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { ProjectCard } from "@/components/ProjectCard";
import { MaterialCard } from "@/components/MaterialCard";
import { FilterTabs } from "@/components/FilterTabs";
import { DigitalDashboardPreview } from "@/components/DigitalDashboardPreview";


import { projects, projectCategories, ProjectCategory } from "@/data/projects";
import { materials, materialCategories, MaterialCategory } from "@/data/materials";
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
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>("all");
  const [materialFilter, setMaterialFilter] = useState<MaterialCategory>("all");

  const visibleProjects =
    projectFilter === "all" 
      ? projects 
      : projects.filter((p) => p.category.includes(projectFilter));
  
  const visibleMaterials =
    materialFilter === "all" 
      ? materials 
      : materials.filter((m) => m.category === materialFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        <Section id="indicators" muted>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="panel p-6 border-l-2 border-l-orange">
                <p className="font-display text-4xl text-white font-bold">{stat.value}</p>
                <p className="mt-2 text-[10px] label-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </Section>

          <SectionHeader
            index="01"
            eyebrow="Наша основная среда"
            title="Мосты — наша основная среда"
            description="Мостовые сооружения — основная специализация СК ЛЕЯ. Мы работаем с металлическими пролётными строениями, фермами, балками, связями, опорами, железобетоном, старым ЛКП, коррозией, сложным доступом и жёсткими требованиями технадзора."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="panel group p-6 hover:border-orange/30 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] label-mono text-orange/50">0{i + 1}</span>
                  <div className="h-px flex-1 bg-white/5" />
                </div>
                <h3 className="text-lg font-display font-semibold uppercase tracking-tight group-hover:text-orange transition-colors">{service.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.summary}</p>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="solutions">
          <SectionHeader
            index="02"
            eyebrow="Процесс"
            title="Комплексное решение под ключ"
            description="Мы не просто красим — мы ведем объект от анализа ТЗ до сдачи технадзору."
          />
          <div className="mt-16 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
            <div className="space-y-12">
              {[
                { t: "Изучаем ТЗ, проект и ведомости объёмов", d: "Глубокий технический аудит входящей документации." },
                { t: "Анализируем конструкцию и условия эксплуатации", d: "Учет климатической зоны, агрессивности среды и нагрузок." },
                { t: "Подбираем систему материалов", d: "Оптимизация по цене, качеству и сроку службы (до 25+ лет)." },
                { t: "Планируем технологию и организацию работ", d: "Разработка ППР, графиков и схем доступа." },
                { t: "Выполняем подготовку поверхности", d: "Абразивоструйная очистка Sa 2.5/3, обеспыливание, обезжиривание." },
                { t: "Наносим защитные покрытия", d: "Соблюдение ТТК и рекомендаций производителей материалов." },
                { t: "Контролируем параметры", d: "Замеры толщины (ТСП), адгезии, климатических условий (точка росы)." },
                { t: "Ведём фотофиксацию и отчётность", d: "Прозрачный процесс работ в режиме реального времени." },
                { t: "Закрываем исполнительную документацию", d: "Формирование полного пакета актов и журналов." },
                { t: "Сдаём объект заказчику и технадзору", d: "Юридически безупречная передача выполненных работ." },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-8 relative"
                >
                  <div className="flex-none w-16 h-16 rounded-sm bg-graphite border border-white/10 flex items-center justify-center text-orange font-display text-xl z-10">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight">{step.t}</h3>
                    <p className="mt-2 text-muted-foreground">{step.d}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>


        <Section id="projects">
          <SectionHeader index="03" eyebrow="Портфолио" title="Объекты" />
          <div className="mt-8">
            <FilterTabs
              tabs={projectCategories}
              active={projectFilter}
              onChange={(val) => setProjectFilter(val as ProjectCategory)}
            />
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section id="materials" muted>
          <SectionHeader index="04" eyebrow="Производство" title="Материалы" description="Мы не выбираем материал случайно. Система защиты подбирается под объект, среду эксплуатации, проектные требования, срок службы и экономику производства работ." />
          <div className="mt-8">
            <FilterTabs
              tabs={materialCategories}
              active={materialFilter}
              onChange={(val) => setMaterialFilter(val as MaterialCategory)}
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
            index="05"
            eyebrow="Прозрачность"
            title="Цифровой контроль"
            description="Заказчик видит не обещания, а ход работ в режиме реального времени."
          />
          <div className="mt-10">
            <DigitalDashboardPreview />
          </div>
        </Section>

        <Section id="about" muted>
          <SectionHeader index="06" eyebrow="Почему СК ЛЕЯ" title="Компетенции и надежность" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="panel p-6">
                <p className="font-display text-3xl text-orange">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <CTASection title="Готовы к новому объекту?" description="Инженерный расчёт, подбор системы материалов и полная исполнительная документация. Финальный результат, который пройдет любой технадзор." />


        <Section id="contacts">
          <SectionHeader index="07" eyebrow="Связь" title="Контакты" />
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
