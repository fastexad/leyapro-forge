import { stats } from "@/data/stats";

export function DigitalDashboardPreview() {
  return (
    <div className="panel relative overflow-hidden p-6">
      <div className="tech-grid-fine pointer-events-none absolute inset-0 opacity-25" />
      <div className="relative">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <span className="label-mono">Цифровой кабинет / прототип</span>
          <span className="flex items-center gap-2 label-mono text-orange">
            <span className="h-1.5 w-1.5 rounded-full bg-orange" />
            online
          </span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="border-l border-border pl-3">
              <p className="font-display text-2xl text-foreground">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3">
          {[72, 45, 88].map((value, i) => (
            <div key={i}>
              <div className="flex justify-between label-mono">
                <span>Объект {i + 1}</span>
                <span>{value}%</span>
              </div>
              <div className="mt-2 h-1 w-full bg-secondary">
                <div
                  className="h-full bg-[image:var(--gradient-orange)]"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}