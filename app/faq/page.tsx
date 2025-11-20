import type { Metadata } from 'next';

const title = 'FAQ DogWheel — ответы на вопросы о колясках для животных';
const description = 'Сроки изготовления, доставка и разработка индивидуальных колясок DogWheel для собак, кроликов и других питомцев.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['DogWheel FAQ', 'сколько делается коляска для собаки', 'доставка коляски для животных'],
  alternates: { canonical: '/faq' },
  openGraph: {
    title,
    description,
    url: 'https://dogwheel.ru/faq',
    type: 'article'
  }
};

export default function FAQPage() {
  return (
    <div className="container py-12">
      <div className="prose prose-stone max-w-none rounded-3xl border border-brand-100/60 bg-white/80 p-8 shadow-sm">
        <h1>FAQ</h1>
        <h3>Сколько идёт изготовление?</h3>
        <p>Обычно до 2 недель с момента подтверждения мерок.</p>
        <h3>А если делаем коляску для нового вида животного?</h3>
        <p>На разработку и производство уходит около 1 месяца — согласовываем узлы и отправляем промежуточные рендеры.</p>
        <h3>Доставка</h3>
        <p>Доставляем по России и миру: коляска приезжает настроенной, а мы остаёмся на связи для подсказок.</p>
      </div>
    </div>
  );
}
