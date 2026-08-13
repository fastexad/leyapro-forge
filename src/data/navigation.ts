export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { id: "objects", label: "Объекты", href: "/objects" },
  { id: "bridges", label: "Мосты", href: "/bridges" },
  { id: "materials", label: "Материалы", href: "/materials" },
  { id: "digital", label: "Цифровой кабинет", href: "/digital-cabinet" },
  { id: "company", label: "О компании", href: "/company" },
  { id: "technologies", label: "Технологии", href: "/technologies" },
  { id: "contacts", label: "Контакты", href: "/contacts" },
];
