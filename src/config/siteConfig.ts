export const siteConfig = {
  legalName: 'ООО СК «ЛЕЯ»',
  shortName: "ЛЕЯ",
  tagline: "Мостовое и промышленное строительство",
  description:
    "Строительная компания ЛЕЯ: мосты, инженерные сооружения, собственные материалы и цифровой контроль объектов.",
  city: "Астрахань",
  phone: "+7 (000) 000-00-00",
  email: "info@sk-leya.ru",
  address: "г. Астрахань",
  foundedYear: 2008,
} as const;

export type SiteConfig = typeof siteConfig;