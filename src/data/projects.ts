export type ProjectCategory = 
  | "all"
  | "bridges" 
  | "metal" 
  | "concrete" 
  | "fireproof" 
  | "waterproof" 
  | "sandblast" 
  | "painting" 
  | "oil-gas" 
  | "federal" 
  | "restoration" 
  | "construction" 
  | "repair";

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory[];
  location: string;
  year: string | number;
  status: "В работе" | "Завершён";
  description?: string;
  imageUrl?: string;
  tags: string[];
};

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "bridges", label: "Мосты" },
  { id: "metal", label: "Металл" },
  { id: "concrete", label: "Железобетон" },
  { id: "fireproof", label: "Огнезащита" },
  { id: "waterproof", label: "Гидроизоляция" },
  { id: "sandblast", label: "Пескоструй" },
  { id: "painting", label: "Промышленная окраска" },
  { id: "oil-gas", label: "Нефтегаз" },
  { id: "federal", label: "Федеральные объекты" },
  { id: "restoration", label: "Восстановление" },
  { id: "construction", label: "Строительство" },
  { id: "repair", label: "Капремонт" },
];

export const projects: Project[] = [
  {
    id: "p1",
    slug: "krymsky-bridge-construction",
    title: "Крымский мост — строительство",
    category: ["bridges", "federal", "metal", "construction"],
    location: "Керченский пролив",
    year: "2016-2019",
    status: "Завершён",
    description: "Участие в выполнении комплекса работ по антикоррозийной защите металлоконструкций пролетных строений.",
    tags: ["Антикор", "Металлоконструкции", "Федеральный уровень"],
  },
  {
    id: "p2",
    slug: "krymsky-bridge-restoration",
    title: "Крымский мост — восстановительные работы",
    category: ["bridges", "federal", "restoration", "metal"],
    location: "Керченский пролив",
    year: "2022-2023",
    status: "Завершён",
    description: "Практический опыт на инфраструктурных объектах повышенной сложности: восстановление защитных покрытий.",
    tags: ["Восстановление", "Срочные работы", "Антикор"],
  },
  {
    id: "p3",
    slug: "world-cup-objects",
    title: "Объекты к Чемпионату мира по футболу",
    category: ["federal", "metal", "construction", "painting"],
    location: "Россия",
    year: 2018,
    status: "Завершён",
    description: "Опыт участия команды в подготовке инфраструктуры к ЧМ-2018: стадионы и транспортные развязки.",
    tags: ["Стадионы", "Инфраструктура", "Окраска"],
  },
  {
    id: "p4",
    slug: "olympic-objects",
    title: "Олимпийские объекты",
    category: ["federal", "metal", "concrete", "construction"],
    location: "Сочи",
    year: 2014,
    status: "Завершён",
    description: "Участие в строительстве и защите объектов горного и прибрежного кластеров.",
    tags: ["Олимпиада", "Горные условия", "Защита ЖБ"],
  },
  {
    id: "p5",
    slug: "federal-bridge-object",
    title: "Мостовой объект федерального значения",
    category: ["bridges", "federal", "metal", "fireproof"],
    location: "ЮФО",
    year: 2024,
    status: "В работе",
    description: "Комплекс работ по антикоррозийной и огнезащите металлоконструкций.",
    tags: ["Мост", "Огнезащита", "Антикор"],
  },
  {
    id: "p6",
    slug: "oil-gas-object",
    title: "Нефтегазовый объект",
    category: ["oil-gas", "metal", "sandblast", "painting"],
    location: "Западная Сибирь",
    year: 2023,
    status: "Завершён",
    description: "Пескоструйная подготовка и промышленная окраска резервуарного парка.",
    tags: ["Нефтегаз", "Резервуары", "Пескоструй"],
  },
  {
    id: "p7",
    slug: "concrete-structure",
    title: "Железобетонное сооружение",
    category: ["concrete", "waterproof", "repair"],
    location: "Краснодарский край",
    year: 2024,
    status: "В работе",
    description: "Гидроизоляция и восстановление железобетонных конструкций промышленного назначения.",
    tags: ["ЖБ", "Гидроизоляция", "Ремонт"],
  },
  {
    id: "p8",
    slug: "industrial-metal-structure",
    title: "Металлоконструкции промышленного здания",
    category: ["metal", "fireproof", "painting"],
    location: "Ростовская область",
    year: 2023,
    status: "Завершён",
    description: "Огнезащита и финишная окраска несущих металлоконструкций цеха.",
    tags: ["Промздание", "Огнезащита", "Металл"],
  },
];
