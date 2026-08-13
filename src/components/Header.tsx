import { Link } from "@tanstack/react-router";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center border border-orange text-sm font-semibold text-orange">
            Л
          </span>
          <span className="font-display text-lg font-semibold tracking-widest">
            {siteConfig.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="label-mono transition-colors hover:text-orange"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button variant="industrial" size="sm">
          Запрос КП
        </Button>
      </div>
    </header>
  );
}