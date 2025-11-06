# Dog Wheelchairs (Next.js + Tailwind)

Готовый каркас сайта для производства инвалидных колясок для собак. Включает базовые страницы, компоненты, API‑роут для формы связи.

## Локальный запуск

```bash
npm i
npm run dev
# или
pnpm i
pnpm dev
```

Откройте http://localhost:3000

## Переменные окружения

Скопируйте `.env.local.example` в `.env.local` и при необходимости задайте значения (например, `CONTACT_INBOX_WEBHOOK`).

## Билд

```bash
npm run build && npm start
```

## Стек
- Next.js (App Router)
- TypeScript
- Tailwind CSS
