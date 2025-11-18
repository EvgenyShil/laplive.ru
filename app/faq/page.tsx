const faqs = [
  {
    question: 'Сколько идёт изготовление?',
    answer: 'Обычно до 2 недель с момента подтверждения мерок.'
  },
  {
    question: 'А если делаем коляску для нового вида питомца?',
    answer: 'На разработку и производство уходит около 1 месяца — согласовываем узлы и отправляем промежуточные рендеры.'
  },
  {
    question: 'Доставка',
    answer: 'Доставляем по России и миру: коляска приезжает настроенной, а мы остаёмся на связи для подсказок.'
  }
] as const;

export default function FAQPage() {
  return (
    <div className="container py-12">
      <section className="space-y-6 rounded-3xl border border-brand-100/60 bg-white/80 p-8 text-stone-700 shadow-sm">
        <h1 className="text-3xl font-semibold text-stone-900">FAQ</h1>
        <dl className="space-y-4">
          {faqs.map(item => (
            <div key={item.question} className="space-y-1">
              <dt className="text-xl font-semibold text-stone-900">{item.question}</dt>
              <dd>{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
