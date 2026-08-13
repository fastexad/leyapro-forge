import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Обсудим ваш объект",
  description = "Инженерный расчёт, подбор системы материалов и коммерческое предложение — подготовим за 48 часов.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-black py-24">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange/10 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-steel/5 blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-display font-bold sm:text-5xl uppercase tracking-tight text-white">{title}</h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">{description}</p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild variant="industrial" size="lg" className="h-14 px-10 text-base uppercase tracking-widest font-bold">
              <Link to="/contacts">Запросить расчет</Link>
            </Button>
            <Button asChild variant="steel" size="lg" className="h-14 px-10 text-base uppercase tracking-widest font-bold">
              <Link to="/digital-cabinet">Демо-кабинет</Link>
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-12 opacity-30 grayscale contrast-125">
             <div className="text-[10px] label-mono uppercase tracking-[0.3em]">ГОСТ Р ИСО 9001-2015</div>
             <div className="text-[10px] label-mono uppercase tracking-[0.3em]">СТО ГК АВТОДОР</div>
             <div className="text-[10px] label-mono uppercase tracking-[0.3em]">РД 03-606-03</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
