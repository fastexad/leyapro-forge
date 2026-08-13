import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  return (
    <footer className="border-t border-border bg-graphite-deep">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg tracking-widest">{siteConfig.legalName}</p>
          <p className="mt-2 text-sm text-muted-foreground">{siteConfig.tagline}</p>
        </div>
        <nav className="flex flex-col gap-2">
          {navigation.map((item) => (
            <a key={item.id} href={item.href} className="text-sm text-muted-foreground hover:text-orange">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm text-muted-foreground">
          <p>{siteConfig.address}</p>
          <p className="mt-2">{siteConfig.phone}</p>
          <p>{siteConfig.email}</p>
        </div>
      </div>
      <div className="border-t border-border px-6 py-4">
        <p className="label-mono mx-auto max-w-7xl">© {new Date().getFullYear()} {siteConfig.shortName}</p>
      </div>
    </footer>
  );
}