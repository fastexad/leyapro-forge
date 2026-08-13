export type MaterialCategory = "concrete" | "metal" | "aggregate";

export type Material = {
  id: string;
  title: string;
  category: MaterialCategory;
  spec: string;
  unit: string;
};

export const materialCategories: { id: MaterialCategory | "all"; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "concrete", label: "Бетон" },
  { id: "metal", label: "Металл" },
  { id: "aggregate", label: "Инертные" },
];

export const materials: Material[] = [
  { id: "m-01", title: "Бетон товарный", category: "concrete", spec: "B15—B45", unit: "м³" },
  { id: "m-02", title: "ЖБИ конструкции", category: "concrete", spec: "по проекту", unit: "шт" },
  { id: "m-03", title: "Металлоконструкции", category: "metal", spec: "С245—С355", unit: "т" },
  { id: "m-04", title: "Щебень", category: "aggregate", spec: "фр. 5—20", unit: "т" },
];