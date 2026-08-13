import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { DigitalDashboardPreview } from "@/components/DigitalDashboardPreview";

export const Route = createFileRoute("/digital-cabinet")({
  component: DigitalCabinetPage,
});

function DigitalCabinetPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <main>
        <section className="bg-graphite-deep py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader 
              eyebrow="Личный кабинет" 
              title="Цифровой контроль" 
              description="Прозрачность процессов и отчетность в реальном времени для заказчиков СК ЛЕЯ."
            />
            
            <div className="mt-16">
              <DigitalDashboardPreview />
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="panel p-6 border-white/5 bg-white/5">
                <h3 className="font-display font-bold uppercase tracking-tight text-white mb-4">Фотоотчеты</h3>
                <p className="text-sm text-muted-foreground">Ежедневная фиксация всех этапов работ с привязкой к осям и элементам конструкции.</p>
              </div>
              <div className="panel p-6 border-white/5 bg-white/5">
                <h3 className="font-display font-bold uppercase tracking-tight text-white mb-4">Технадзор</h3>
                <p className="text-sm text-muted-foreground">Оперативное управление замечаниями и контроль их устранения в цифровом виде.</p>
              </div>
              <div className="panel p-6 border-white/5 bg-white/5">
                <h3 className="font-display font-bold uppercase tracking-tight text-white mb-4">Документация</h3>
                <p className="text-sm text-muted-foreground">Доступ ко всем актам скрытых работ и сертификатам на материалы 24/7.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
