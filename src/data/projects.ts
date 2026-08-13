export type ProjectCategory = "bridges" | "industrial" | "roads";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  status: "В работе" | "Завершён";
};

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "bridges", label: "Мосты" },
  { id: "industrial", label: "Промышленные" },
  { id: "roads", label: "Дороги" },
];

export const projects: Project[] = [
  {
    id: "bridge-01",
    title: "Мостовой переход",
    category: "bridges",
    location: "Астраханская область",
    year: 2025,
    status: "В работе",
  },
  {
    id: "bridge-02",
    title: "Реконструкция моста",
    category: "bridges",
    location: "Волгоградская область",
    year: 2024,
    status: "Завершён",
  },
  {
    id: "ind-01",
    title: "Производственный корпус",
    category: "industrial",
    location: "Астрахань",
    year: 2023,
    status: "Завершён",
  },
  {
    id: "road-01",
    title: "Участок автодороги",
    category: "roads",
    location: "Республика Калмыкия",
    year: 2024,
    status: "Завершён",
  },
];