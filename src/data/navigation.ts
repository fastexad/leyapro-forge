export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { id: "bridges", label: "Мосты", href: "#bridges" },
  { id: "projects", label: "Объекты", href: "#projects" },
  { id: "materials", label: "Материалы", href: "#materials" },
  { id: "digital", label: "Цифровой кабинет", href: "#digital" },
  { id: "about", label: "О компании", href: "#about" },
  { id: "contacts", label: "Контакты", href: "#contacts" },
];