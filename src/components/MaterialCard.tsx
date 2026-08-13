import { Material } from "@/data/materials";

export function MaterialCard({ material }: { material: Material }) {
  return (
    <div className="panel tech-grid-fine group overflow-hidden p-6 transition-all hover:border-orange/50">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl font-display font-semibold group-hover:text-orange transition-colors">
            {material.title}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {material.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {material.features.slice(0, 3).map((feature, i) => (
              <span key={i} className="text-[10px] uppercase tracking-wider text-steel border border-steel/20 px-2 py-0.5 rounded">
                {feature}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-[10px] label-mono text-muted-foreground uppercase">
            Код: {material.id}
          </span>
          <button className="text-xs font-semibold text-orange hover:underline">
            Подробнее →
          </button>
        </div>
      </div>
    </div>
  );
}
