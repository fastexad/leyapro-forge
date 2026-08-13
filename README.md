# LEYA Forge

Создай минимальную стартовую оболочку проекта для будущего сайта строительной компании ООО СК «ЛЕЯ».

Важно: сейчас НЕ нужно делать полноценный сайт.

Сейчас НЕ нужно генерировать картинки.

Сейчас НЕ нужно делать 3D.

Сейчас НЕ нужно делать backend, авторизацию, базу данных, личный кабинет, сложные анимации и много контента.

Цель этого первого шага — создать лёгкий технический каркас и визуальное направление, чтобы следующими сообщениями я расширил проект до полноценного сайта.

Сделай только:

1. Проект на React + TypeScript + Vite + Tailwind CSS.

2. Тёмную технологичную дизайн-систему:

   - фон: графит / почти чёрный;

   - акценты: оранжевый, медный, стальной, белый;

   - стиль: агрессивный промышленный premium;

   - без стоковых фото;

   - без обычного строительного шаблона.

3. Одну главную страницу `/` как wireframe / skeleton.

На странице должны быть только заглушки будущих секций:

- Hero;

- Фокус на мостах;

- Объекты;

- Материалы;

- Цифровой кабинет;

- О компании;

- Контакты.

4. Hero пока сделать без картинок и без 3D:

- тёмный фон;

- техническая сетка;

- лёгкие CSS glow-эффекты;

- простая геометрическая абстракция моста из линий/SVG;

- заголовок;

- подзаголовок;

- 2 кнопки.

5. Создай базовую структуру файлов:

src/data/projects.ts

src/data/materials.ts

src/data/services.ts

src/data/navigation.ts

src/data/stats.ts

src/config/siteConfig.ts

6. Создай базовые компоненты:

Header

Footer

SectionHeader

CTASection

ProjectCard

MaterialCard

FilterTabs

DigitalDashboardPreview

7. Пока не наполняй сайт большим количеством текста.

8. Пока не создавай все страницы.

9. Пока не делай сложные эффекты.

10. Сделай аккуратный минимальный каркас, чтобы следующий prompt мог расширить проект.

Главная задача: лёгкая оболочка, понятная структура, тёмный технологичный стиль и готовность к дальнейшему развитию.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/22751b30-0743-409b-b23f-2afef779eeb2).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
