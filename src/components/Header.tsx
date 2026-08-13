import { Link } from "@tanstack/react-router";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-graphite-deep/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border-2 border-orange text-xl font-display font-bold text-orange">
            Л
          </span>
          <div className="flex flex-col">
            <span className="font-display text-xl font-bold tracking-[0.2em] leading-none uppercase">
              {siteConfig.shortName}
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
              Industrial Construction
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.href as any}
              className="text-[11px] uppercase tracking-widest font-semibold transition-colors hover:text-orange text-muted-foreground active-link:text-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="steel" size="sm" className="hidden sm:inline-flex">
            <Link to="/contacts">Запрос КП</Link>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
