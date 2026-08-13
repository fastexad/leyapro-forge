import { motion } from "framer-motion";
import { Activity, Camera, CheckCircle2, FileText, Package, Ruler, AlertCircle, Clock } from "lucide-react";

export function DigitalDashboardPreview() {
  const metrics = [
    { label: "Общий прогресс", value: "74%", icon: Activity, color: "text-orange" },
    { label: "Выполнено м²", value: "12,450", icon: Ruler, color: "text-white" },
    { label: "Расход ЛКМ (л)", value: "3,120 / 4,000", icon: Package, color: "text-white" },
    { label: "Документация", value: "85%", icon: FileText, color: "text-steel" },
  ];

  return (
    <div className="panel relative overflow-hidden p-0 border-white/5 bg-graphite-deep/50">
      {/* Header Bar */}
      <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="h-2 w-2 rounded-full bg-orange animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
            Контроль объекта: #24-001 (Крымский мост)
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-black/40 rounded border border-white/5">
          <Clock className="w-3 h-3 text-muted-foreground" />
          <span className="text-[10px] label-mono text-muted-foreground">Обновлено: 14:32</span>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-black/20 p-4 border border-white/5 rounded-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <m.icon className={`w-4 h-4 ${m.color}`} />
                <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-semibold">
                  {m.label}
                </span>
              </div>
              <p className={`text-2xl font-display font-bold ${m.color}`}>{m.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-3 gap-8">
          {/* Main Progress Chart Area */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-black/20 p-6 border border-white/5 rounded-sm relative overflow-hidden">
               <div className="tech-grid-fine absolute inset-0 opacity-10" />
               <div className="relative">
                 <div className="flex justify-between items-end mb-4">
                   <div>
                     <h4 className="text-xs uppercase tracking-widest text-white mb-1">Динамика работ (План / Факт)</h4>
                     <p className="text-[10px] text-muted-foreground">Ежедневный прирост площади</p>
                   </div>
                   <div className="flex gap-4 text-[10px] label-mono uppercase">
                     <span className="flex items-center gap-2"><span className="w-2 h-2 bg-steel" /> План</span>
                     <span className="flex items-center gap-2"><span className="w-2 h-2 bg-orange" /> Факт</span>
                   </div>
                 </div>
                 
                 {/* Mock Chart Lines */}
                 <div className="h-32 flex items-end gap-1">
                   {Array.from({ length: 30 }).map((_, i) => {
                     const planHeight = 40 + Math.sin(i * 0.5) * 20;
                     const factHeight = planHeight * (0.8 + Math.random() * 0.4);
                     return (
                       <div key={i} className="flex-1 flex flex-col justify-end gap-[1px]">
                         <div style={{ height: `${planHeight}%` }} className="bg-steel/20 w-full" />
                         <div style={{ height: `${factHeight}%` }} className="bg-orange/50 w-full" />
                       </div>
                     );
                   })}
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-black/20 p-4 border border-white/5 rounded-sm">
                 <div className="flex items-center gap-2 mb-3">
                   <Camera className="w-3 h-3 text-orange" />
                   <span className="text-[9px] uppercase tracking-widest text-white">Фотофиксация</span>
                 </div>
                 <div className="grid grid-cols-2 gap-2">
                   <div className="aspect-video bg-white/5 border border-white/5 rounded-sm flex items-center justify-center text-[9px] text-muted-foreground">IMG_4821.JPG</div>
                   <div className="aspect-video bg-white/5 border border-white/5 rounded-sm flex items-center justify-center text-[9px] text-muted-foreground">IMG_4822.JPG</div>
                 </div>
               </div>
               <div className="bg-black/20 p-4 border border-white/5 rounded-sm">
                 <div className="flex items-center gap-2 mb-3">
                   <AlertCircle className="w-3 h-3 text-red-500" />
                   <span className="text-[9px] uppercase tracking-widest text-white">Технадзор</span>
                 </div>
                 <div className="space-y-2">
                   <div className="p-2 bg-red-500/5 border border-red-500/10 rounded-sm">
                     <p className="text-[9px] text-red-400">#3 Замечание: адгезия на опоре 4</p>
                   </div>
                   <div className="p-2 bg-green-500/5 border border-green-500/10 rounded-sm">
                     <p className="text-[9px] text-green-400">#2 Исправлено: подготовка Sa 2.5</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Side Info */}
          <div className="bg-white/5 p-6 border-l border-white/5 space-y-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-white mb-4">Текущий этап</h4>
              <div className="space-y-4">
                {[
                  { label: "Анализ проекта", done: true },
                  { label: "Подготовка Sa 2.5", done: true },
                  { label: "Нанесение грунта", done: true },
                  { label: "Финишная эмаль", done: false, active: true },
                  { label: "Сдача ПТО", done: false },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {step.done ? (
                      <CheckCircle2 className="w-4 h-4 text-orange" />
                    ) : (
                      <div className={`w-4 h-4 rounded-full border ${step.active ? 'border-orange animate-pulse' : 'border-white/20'}`} />
                    )}
                    <span className={`text-[11px] uppercase tracking-wide ${step.done ? 'text-white' : step.active ? 'text-orange font-bold' : 'text-muted-foreground'}`}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
               <h4 className="text-[10px] uppercase tracking-widest text-white mb-2">Прогноз завершения</h4>
               <p className="text-xl font-display font-bold text-white">12 октября 2026</p>
               <p className="text-[9px] text-muted-foreground mt-1 uppercase tracking-tight">Отставание от графика: 2 дня</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
