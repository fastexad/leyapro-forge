type SectionHeaderProps = {
  index?: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ index, eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        {index ? <span className="label-mono text-orange">{index}</span> : null}
        {eyebrow ? <span className="label-mono">{eyebrow}</span> : null}
      </div>
      <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-16 bg-orange" />
      {description ? <p className="mt-4 text-muted-foreground">{description}</p> : null}
    </div>
  );
}