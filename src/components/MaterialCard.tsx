import type { Material } from "@/data/materials";

export function MaterialCard({ material }: { material: Material }) {
  return (
    <article className="panel flex items-start justify-between gap-4 p-5">
      <div>
        <h3 className="text-base font-semibold">{material.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{material.spec}</p>
      </div>
      <span className="label-mono text-orange">{material.unit}</span>
    </article>
  );
}