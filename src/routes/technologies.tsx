import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Shield, Droplets, Flame, Hammer, Settings, FileCheck, Layers, Thermometer } from "lucide-react";

export const Route = createFileRoute("/technologies")({
  component: TechnologiesPage,
});

function TechnologiesPage() {
  const techCards = [
    { 
      t: "Подготовка поверхности", 
      d: "Абразивоструйная очистка до степеней Sa 2, Sa 2.5, Sa 3 (ISO 8501-1). Обеспыливание и обезжиривание по регламенту.",
      icon: Hammer
    },
    { 
      t: "Климатический контроль", 
      d: "Мониторинг температуры воздуха, поверхности и точки росы. Контроль влажности в зоне нанесения покрытия.",
      icon: Thermometer
    },
    { 
      t: "Контроль толщины (ТСП)", 
      d: "Измерение толщины сухого слоя на каждом элементе с занесением в цифровой журнал контроля.",
      icon: Ruler
    },
    { 
      t: "Адгезионный контроль", 
      d: "Проверка силы сцепления покрытия с подложкой методами решетчатого или X-образного надреза.",
      icon: Settings
    },
    { 
      t: "Межслойная сушка", 
      d: "Строгое соблюдение временных интервалов и условий полимеризации каждого слоя системы.",
      icon: Clock
    },
    { 
      t: "Дефектовка ЛКП", 
      d: "Визуальный и инструментальный поиск пор, кратеров, непрокрасов и других дефектов покрытия.",
      icon: AlertCircle
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <main>
        <section className="bg-graphite-deep py-24 relative overflow-hidden">
          <div className="tech-grid absolute inset-0 opacity-20" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <SectionHeader 
              eyebrow="Стандарты" 
              title="Технологии и контроль" 
              description="Мы гарантируем долговечность покрытия через строгое соблюдение регламентов нанесения и многоступенчатый технический надзор."
            />
            
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCards.map((card, i) => (
                <div key={i} className="panel p-8 bg-white/[0.02] border-white/5 hover:border-orange/30 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <card.icon className="w-8 h-8 text-orange" />
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-4 group-hover:text-orange transition-colors">
                    {card.t}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeader 
                  index="01"
                  title="Цифровой след объекта"
                  description="В СК ЛЕЯ внедрена система цифровой отчетности. Каждый замер, каждое фото с объекта мгновенно попадает в базу данных."
                />
                <div className="mt-8 space-y-4">
                  {[
                    "Фотофиксация до, во время и после работ",
                    "Электронный журнал общих работ и АКЗ",
                    "Автоматический расчет расхода материалов",
                    "Контроль простоев и погодных условий",
                    "Прозрачность для заказчика 24/7"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <FileCheck className="w-4 h-4 text-orange" />
                      <span className="text-sm text-white uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="panel p-2 bg-white/5 rounded-lg border border-white/10 overflow-hidden shadow-2xl">
                 <div className="aspect-video bg-black/40 flex items-center justify-center relative">
                    <div className="tech-grid-fine absolute inset-0 opacity-20" />
                    <span className="text-[10px] label-mono text-orange animate-pulse">SYSTEM_MONITOR_ACTIVE</span>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import { Ruler, Clock, AlertCircle } from "lucide-react";
