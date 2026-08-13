import { Button } from "@/components/ui/button";
import { BridgeAbstract } from "@/components/BridgeAbstract";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center overflow-hidden bg-graphite-deep pt-20">
      {/* Background Layers for Pseudo-3D */}
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />
      
      <motion.div 
        style={{ y: y1 }}
        className="pointer-events-none absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-orange/10 blur-[120px]" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-steel/5 blur-[100px]" 
      />

      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 w-full h-px bg-steel/30" />
        <div className="absolute top-2/4 w-full h-px bg-steel/30" />
        <div className="absolute left-1/3 h-full w-px bg-steel/30" />
        <div className="absolute left-2/3 h-full w-px bg-steel/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="label-mono text-orange flex items-center gap-2">
            <span className="h-px w-8 bg-orange" />
            {siteConfig.legalName}
          </span>
          
          <h1 className="mt-8 max-w-4xl text-4xl font-display font-bold leading-[1.05] sm:text-7xl uppercase tracking-tight">
            Делаем из сложных конструкций объекты, <span className="text-orange">которые можно показать</span>, сдать и эксплуатировать годами
          </h1>
          
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Мосты, металл, железобетон, антикоррозионная защита, огнезащита, гидроизоляция, подбор материалов, ПТО и исполнительная документация под ключ.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild variant="industrial" size="lg" className="h-14 px-8 text-base">
              <Link to="/objects">Смотреть объекты</Link>
            </Button>
            <Button asChild variant="steel" size="lg" className="h-14 px-8 text-base">
              <Link to="/contacts">Рассчитать проект</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-white/10 hover:bg-white/5">
              <Link to="/digital-cabinet">Кабинет заказчика</Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats Summary Panel */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12"
        >
          <div>
            <p className="text-3xl font-display font-bold text-orange">80%</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Объектов — мосты</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-white">30 лет</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Практического опыта</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-white">РФ</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Работаем по всей стране</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-steel">Digital</p>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">Цифровой контроль</p>
          </div>
        </motion.div>

        {/* Bridge Abstract SVG for Parallax/Pseudo-3D */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
          className="absolute -right-20 bottom-0 pointer-events-none hidden lg:block"
        >
          <BridgeAbstract className="w-[800px] text-steel/30" />
        </motion.div>
      </div>

      <span className="sr-only">'''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            I have approved the plan</span>
    </section>
  );
}
