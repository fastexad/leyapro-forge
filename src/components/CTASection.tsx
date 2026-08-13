import { Button } from "@/components/ui/button";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Обсудим ваш объект",
  description = "Инженерный расчёт и коммерческое предложение — по запросу.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden border-y border-border bg-graphite">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-orange/15 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-3">
          <Button variant="industrial">Запрос КП</Button>
          <Button variant="steel">Связаться</Button>
        </div>
      </div>
    </section>
  );
}