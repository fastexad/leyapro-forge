import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { materials } from "@/data/materials";
import { CTASection } from "@/components/CTASection";
import { ShieldCheck, Info, Package, ListCheck } from "lucide-react";

export const Route = createFileRoute("/materials/$slug")({
  loader: ({ params }) => {
    const material = materials.find((m) => m.slug === params.slug);
    if (!material) throw notFound();
    return material;
  },
  component: MaterialDetailsPage,
});

function MaterialDetailsPage() {
  const material = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <main>
        <section className="bg-graphite-deep py-24 relative overflow-hidden">
          <div className="tech-grid absolute inset-0 opacity-20" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <SectionHeader 
                  eyebrow="Материал" 
                  title={material.title} 
                  description={material.description}
                />

                <div className="mt-16">
                  <h3 className="text-xl font-display font-bold text-white uppercase mb-8 flex items-center gap-3">
                    <ListCheck className="text-orange w-6 h-6" />
                    Ключевые характеристики
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {material.features.map((feature, i) => (
                      <div key={i} className="panel p-6 bg-white/[0.02] border-white/5 flex items-start gap-4">
                        <div className="h-2 w-2 rounded-full bg-orange mt-1.5 flex-none" />
                        <span className="text-sm text-white leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-16 panel p-8 border-white/5 bg-white/[0.01]">
                   <h3 className="text-xl font-display font-bold text-white uppercase mb-6 flex items-center gap-3">
                    <Info className="text-orange w-6 h-6" />
                    Применение в системах
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Данный материал является частью сертифицированных систем защиты для агрессивных сред (C3-C5). 
                    Для достижения максимального срока службы (25+ лет) рекомендуется использовать в комплексе с совместимыми грунтами и промежуточными слоями.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-1 space-y-6">
                <div className="panel p-8 bg-black/40 border-white/5">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-orange mb-8">Информация</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Package className="w-4 h-4 text-muted-foreground mt-1" />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Код продукта</p>
                        <p className="text-sm text-white font-bold">{material.id}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <ShieldCheck className="w-4 h-4 text-muted-foreground mt-1" />
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Сертификация</p>
                        <p className="text-sm text-white font-bold">СТО ГК Автодор / ЦНИИС</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel p-8 bg-orange/5 border-orange/10">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-4">Нужен расчет системы?</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">Наши инженеры подготовят спецификацию и расчет расхода под ваш проект.</p>
                  <Link to="/contacts" className="flex items-center justify-center w-full h-12 bg-orange text-black font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-orange/90 transition-colors">
                    Связаться с инженером
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
