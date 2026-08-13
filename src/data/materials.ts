export type MaterialCategory =
  | "all"
  | "primers"
  | "intermediate"
  | "finishes"
  | "fireproof"
  | "waterproof"
  | "concrete"
  | "repair"
  | "bridge-special"
  | "industrial-special";

export type Material = {
  id: string;
  slug: string;
  title: string;
  category: MaterialCategory;
  description: string;
  features: string[];
};

export const materialCategories: { id: MaterialCategory; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "primers", label: "Грунты" },
  { id: "intermediate", label: "Промежуточные покрытия" },
  { id: "finishes", label: "Финишные эмали" },
  { id: "fireproof", label: "Огнезащита" },
  { id: "waterproof", label: "Гидроизоляция" },
  { id: "concrete", label: "Для железобетона" },
  { id: "repair", label: "Ремонтные составы" },
  { id: "bridge-special", label: "Системы для мостов" },
  { id: "industrial-special", label: "Для промышленности" },
];

export const materials: Material[] = [
  {
    id: "m1",
    slug: "epoxy-primer-high-build",
    title: "Эпоксидный грунт высокой наполненности",
    category: "primers",
    description: "Двухкомпонентный состав для долговременной защиты металла в тяжелых коррозионных средах.",
    features: ["Высокий сухой остаток", "Антикоррозийные пигменты", "Отличная адгезия"],
  },
  {
    id: "m2",
    slug: "polyurethane-finish-uv",
    title: "Полиуретановая финишная эмаль",
    category: "finishes",
    description: "Стойкое к УФ-излучению и атмосферным воздействиям покрытие для мостов и промзон.",
    features: ["Стойкость цвета", "Химстойкость", "Долговечность"],
  },
  {
    id: "m3",
    slug: "bridge-system-ultra",
    title: "Специальная мостовая система «ЛЕЯ-Мост»",
    category: "bridge-special",
    description: "Комплексная система (грунт + промежуточный слой + финиш), разработанная специально для агрессивных условий эксплуатации мостов.",
    features: ["Срок службы 25+ лет", "Соответствие СТО ГК Автодор", "Быстрая сушка"],
  },
  {
    id: "m4",
    slug: "fire-protect-steel",
    title: "Огнезащитный состав для металлоконструкций",
    category: "fireproof",
    description: "Вспучивающееся покрытие, обеспечивающее предел огнестойкости до R120.",
    features: ["Сертифицировано", "Тонкослойное", "Совместимо с грунтами"],
  },
];
