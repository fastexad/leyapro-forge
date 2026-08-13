import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border-2 border-orange text-xl font-display font-bold text-orange">Л</span>
              <span className="font-display text-xl font-bold tracking-[0.2em] uppercase">{siteConfig.shortName}</span>
            </Link>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Комплексные решения по защите мостов, металлоконструкций и железобетона. 30 лет практического опыта.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">Навигация</h4>
            <nav className="flex flex-col gap-3">
              {navigation.slice(0, 4).map((item) => (
                <Link key={item.id} to={item.href as any} className="text-sm text-muted-foreground hover:text-orange transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">Компания</h4>
            <nav className="flex flex-col gap-3">
              {navigation.slice(4).map((item) => (
                <Link key={item.id} to={item.href as any} className="text-sm text-muted-foreground hover:text-orange transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="col-span-1">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6">Контакты</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] label-mono text-muted-foreground uppercase">Телефон</p>
                <p className="text-sm text-white mt-1">{siteConfig.phone}</p>
              </div>
              <div>
                <p className="text-[10px] label-mono text-muted-foreground uppercase">Email</p>
                <p className="text-sm text-white mt-1">{siteConfig.email}</p>
              </div>
              <div>
                <p className="text-[10px] label-mono text-muted-foreground uppercase">Адрес</p>
                <p className="text-sm text-white mt-1">{siteConfig.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] label-mono text-muted-foreground uppercase">
            © {new Date().getFullYear()} {siteConfig.legalName}. Все права защищены.
          </p>
          <div className="flex gap-6">
            <span className="text-[10px] label-mono text-muted-foreground uppercase hover:text-orange cursor-pointer transition-colors tracking-widest">Презентация.pdf</span>
            <span className="text-[10px] label-mono text-muted-foreground uppercase hover:text-orange cursor-pointer transition-colors tracking-widest">Реквизиты.pdf</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
