import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { motion } from "framer-motion";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
});

function CompanyPage() {
  const companyValues = [
    { 
      t: "30 лет опыта", 
      d: "Практический опыт реализации сложнейших проектов на объектах федерального значения." 
    },
    { 
      t: "Фокус на мостах", 
      d: "Мостовые сооружения — наша основная специализация и среда, где мы максимально эффективны." 
    },
    { 
      t: "Вся Россия", 
      d: "Работаем по всей стране, сохраняя высокую конкурентность в европейской части РФ." 
    },
    { 
      t: "Цифровизация", 
      d: "Собственные IT-решения для контроля темпов, расхода материалов и качества работ." 
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
                eyebrow="О компании" 
                title="Инженерная мощь и опыт" 
                description="ООО СК «ЛЕЯ» — строительная компания, выполняющая комплексную защиту мостов, металлоконструкций и железобетона под ключ."
              />
              
              <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {companyValues.map((v, i) => (
                   <div key={i} className="panel p-8 bg-white/[0.02] border-white/5">
                      <p className="text-3xl font-display font-bold text-orange mb-4 tracking-tight">{v.t}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        <section className="py-24">
           <div className="mx-auto max-w-7xl px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                 <div>
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-8">Наш подход</h3>
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                       <p>Мы убеждены, что качественная защита конструкций — это не просто нанесение краски, а сложный технологический процесс, требующий глубокой экспертизы.</p>
                       <p>СК ЛЕЯ продает не м² окраски, а комплексное решение: от анализа проектной документации и подбора оптимальных материалов до полной сдачи исполнительной документации технадзору.</p>
                       <p>Наш собственный отдел ПТО и внедренные цифровые системы контроля позволяют заказчику быть уверенным в соблюдении технологий и сроков на каждом этапе работ.</p>
                    </div>
                 </div>
                 <div className="panel p-10 bg-graphite border-orange/10 relative overflow-hidden">
                    <div className="tech-grid-fine absolute inset-0 opacity-10" />
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange mb-8 relative">Компетенции</h4>
                    <div className="space-y-4 relative">
                       {[
                         "Собственный парк оборудования для подготовки и окраски",
                         "Обученные бригады со стажем от 10 лет",
                         "Прямые контракты с заводами-производителями ЛКМ",
                         "Сформированный пакет документов для объектов РЖД и Автодор",
                         "Цифровой мониторинг объектов 24/7"
                       ].map((item, i) => (
                         <div key={i} className="flex gap-4 items-center">
                            <span className="w-1.5 h-1.5 bg-orange rounded-full" />
                            <span className="text-sm text-white uppercase tracking-wider">{item}</span>
                         </div>
                       ))}
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

