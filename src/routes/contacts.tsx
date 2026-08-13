import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contacts")({
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Header />
      <main>
        <section className="bg-graphite-deep py-24 relative overflow-hidden">
          <div className="tech-grid absolute inset-0 opacity-20" />
          <div className="mx-auto max-w-7xl px-6 relative">
            <SectionHeader 
              eyebrow="Связь" 
              title="Контакты и заявка" 
              description="Свяжитесь с нами для расчета проекта или получения консультации по технологиям защиты."
            />

            
            <div className="mt-16 grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 space-y-6">
                <div className="panel p-8 border-white/5 bg-white/5">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-orange mt-1" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Телефон</p>
                      <p className="text-xl font-display font-bold text-white">{siteConfig.phone}</p>
                    </div>
                  </div>
                </div>
                
                <div className="panel p-8 border-white/5 bg-white/5">
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-orange mt-1" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                      <p className="text-xl font-display font-bold text-white">{siteConfig.email}</p>
                    </div>
                  </div>
                </div>

                <div className="panel p-8 border-white/5 bg-white/5">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-orange mt-1" />
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Адрес</p>
                      <p className="text-white text-sm">{siteConfig.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="panel p-8 border-orange/10 bg-black/40">
                  <h3 className="text-2xl font-display font-bold text-white uppercase mb-8">Запрос расчета проекта</h3>
                  <form className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Имя</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 focus:border-orange outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Компания</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 focus:border-orange outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Телефон</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 focus:border-orange outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Тип объекта</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 focus:border-orange outline-none transition-colors appearance-none">
                         <option>Мост</option>
                         <option>Промздание</option>
                         <option>Нефтегаз</option>
                         <option>Другое</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-muted-foreground">Комментарий к проекту</label>
                      <textarea className="w-full bg-white/5 border border-white/10 rounded-sm h-32 p-4 focus:border-orange outline-none transition-colors resize-none"></textarea>
                    </div>
                    <div className="sm:col-span-2">
                      <Button variant="industrial" className="w-full h-14 text-base uppercase tracking-widest font-bold">Отправить запрос</Button>
                    </div>
                  </form>
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
