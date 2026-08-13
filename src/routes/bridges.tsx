import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import heroAsset from "@/assets/hero-bridge.png.asset.json";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ShieldCheck, Zap, Maximize, Ruler, FileText } from "lucide-react";

export const Route = createFileRoute("/bridges")({
  component: BridgesPage,
});

function BridgesPage() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const imgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const imgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const bridgeServices = [
    { 
      t: "Металлические пролётные строения", 
      d: "Антикоррозийная защита ферм, балок, связей и главных балок.",
      icon: ShieldCheck
    },
    { 
      t: "Железобетонные элементы", 
      d: "Гидроизоляция плит проезжей части, защита опор и ригелей.",
      icon: Ruler
    },
    { 
      t: "Сложный доступ", 
      d: "Работа на высоте, над водой и в условиях действующих ж/д путей.",
      icon: Maximize
    },
    { 
      t: "Старое ЛКП и коррозия", 
      d: "Полное удаление деградировавших слоев до степени Sa 2.5.",
      icon: Zap
    },
    { 
      t: "Контроль качества", 
      d: "Инструментальный замер ТСП, адгезии и климата на каждом этапе.",
      icon: CheckCircle2
    },
    { 
      t: "ПТО и Исполнительная", 
      d: "Формирование пакета документов по ВСН и СТО ГК Автодор.",
      icon: FileText
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          ref={ref}
          onMouseMove={handleMouseMove}
          className="relative bg-graphite-deep py-24 overflow-hidden min-h-[70vh] flex items-center"
        >
          <div className="tech-grid absolute inset-0 opacity-20" />
          <div className="mx-auto max-w-7xl px-6 relative w-full z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <SectionHeader 
                  eyebrow="Специализация" 
                  title="Мосты — наша основная среда" 
                  description="Мостовые сооружения требуют особого подхода из-за динамических нагрузок, агрессивной среды и жестких требований безопасности."
                />
                <div className="mt-10">
                   <Button asChild variant="industrial" size="lg" className="h-14 px-8 text-[10px] uppercase tracking-[0.2em] font-bold">
                      <Link to="/contacts">Обсудить проект</Link>
                   </Button>
                </div>
              </motion.div>
              <div className="relative hidden lg:block h-[420px] overflow-hidden border border-white/10">
                <motion.img
                  src={heroAsset.url}
                  alt="Мостовое пролётное строение"
                  style={{ x: imgX, y: imgY }}
                  className="absolute inset-0 h-full w-full scale-110 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-graphite-deep via-graphite-deep/40 to-transparent" />
                <div className="tech-grid-fine absolute inset-0 opacity-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Grid */}
        <section className="py-24 relative">
           <div className="mx-auto max-w-7xl px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {bridgeServices.map((s, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="panel p-8 hover:border-orange/30 transition-all group bg-white/[0.02]"
                    >
                      <s.icon className="w-8 h-8 text-orange mb-6" />
                      <h3 className="text-xl font-display font-bold text-white uppercase tracking-tight mb-4 group-hover:text-orange transition-colors">
                        {s.t}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {s.d}
                      </p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Technical Detail Section */}
        <section className="py-24 bg-graphite border-y border-white/5 relative">
           <div className="mx-auto max-w-7xl px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="order-2 lg:order-1">
                    <div className="panel p-8 border-orange/20 bg-orange/5 relative overflow-hidden">
                       <div className="tech-grid-fine absolute inset-0 opacity-20" />
                       <h3 className="text-2xl font-display font-bold text-white uppercase mb-6 relative">Почему мосты сложнее обычных объектов?</h3>
                       <ul className="space-y-4 relative">
                          {[
                            "Постоянные динамические и вибрационные нагрузки",
                            "Агрессивное воздействие реагентов и солей",
                            "Высокая влажность и ветровая нагрузка",
                            "Сложная геометрия (фермы, узлы, деформационные швы)",
                            "Ограниченные сроки (окна в движении транспорта)",
                            "Повышенная ответственность за срок службы покрытия"
                          ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                               <span className="text-orange">/</span> {item}
                            </li>
                          ))}
                       </ul>
                    </div>
                 </div>
                 <div className="order-1 lg:order-2">
                    <SectionHeader 
                      index="01"
                      title="Инженерный подход"
                      description="Для мостовых объектов мы подбираем системы с расчетным сроком службы не менее 25 лет. Работаем в строгом соответствии с регламентами ГК Автодор, ФКУ Упрдор и требованиями ОАО «РЖД»."
                    />
                 </div>
              </div>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

