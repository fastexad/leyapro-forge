export type Service = {
  id: string;
  title: string;
  summary: string;
};

export const services: Service[] = [
  { id: "s-01", title: "Мосты и путепроводы", summary: "Строительство и реконструкция." },
  { id: "s-02", title: "Инженерные сооружения", summary: "Опоры, набережные, укрепления." },
  { id: "s-03", title: "Промышленное строительство", summary: "Корпуса и площадки." },
  { id: "s-04", title: "Материалы", summary: "Собственное производство и поставка." },
];