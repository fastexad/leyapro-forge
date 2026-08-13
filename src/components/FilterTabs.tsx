type Tab = { id: string; label: string };

type FilterTabsProps = {
  tabs: readonly Tab[];
  active: string;
  onChange: (id: string) => void;
};

export function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={
              isActive
                ? "border border-orange px-4 py-2 text-xs font-semibold uppercase tracking-widest text-orange"
                : "border border-border px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-steel hover:text-foreground"
            }
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}