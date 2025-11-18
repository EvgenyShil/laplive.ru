import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { CTA } from '@/components/CTA';

const features = [
  {
    title: 'Индивидуальный подбор',
    description: 'Учитываем породу, вес, рост и диагноз питомца.'
  },
  {
    title: '3D‑технологичное производство',
    description: 'Моделируем коляску в 3D, подбираем современные материалы и печатаем узлы с точностью до миллиметра.'
  },
  {
    title: 'Сервис и поддержка',
    description: 'Полная техническая гарантия на коляску и все агрегаты в течение 1 года.'
  },
  {
    title: 'Гибкая кастомизация',
    description: 'Кастомизация вашей коляски в процессе эксплуатации.'
  }
] as const;

const steps = [
  {
    title: 'Запрос',
    body: 'Вы пишете нам, какой питомец, сколько весит и какую проблему нужно компенсировать.'
  },
  {
    title: 'Снятие мерок',
    body: 'Отправляем информацию об измерениях или организуем выезд нашего специалиста.'
  },
  {
    title: 'Материалы и цвет',
    body: 'Согласовываем материал, упрочнения и цветовую гамму под образ питомца.'
  },
  {
    title: '3D‑моделирование и производство',
    body: 'Создаём 3D‑модель, отправляем фото/рендер изделия и выполняем производство.'
  },
  {
    title: 'Примерка и поддержка',
    body: 'Приезжаем на примерку, дорабатываем по результатам и остаёмся на связи по всем вопросам.'
  }
] as const;

export default function HomePage() {
  return (
    <div className="container space-y-16 py-12 text-stone-900">
      <Hero />

      <section className="rounded-3xl border border-brand-100/70 bg-white/80 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Почему выбирают нас</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(feature => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-brand-100/60 bg-gradient-to-br from-white via-brand-50/40 to-white p-8 space-y-4">
        <h2 className="text-2xl font-semibold">DogWheel — эстетика движения</h2>
        <p className="text-stone-600">
          Мы разрабатываем решения в плотном взаимодействии с ведущими реабилитологами России и практикующим врачом в команде.
          Конструкции получаются не только функциональными, но и красивыми — они поддерживают бодрый образ питомца и не вызывают грусти при взгляде.
        </p>
        <p className="text-stone-600">Каждая коляска окрашивается в выбранную вами гамму, чтобы подчеркнуть характер вашего питомца.</p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Как проходит работа</h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-brand-100/60 bg-white/80 p-5">
              <h3 className="font-semibold">{`${index + 1}. ${step.title}`}</h3>
              <p className="text-stone-600">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTA />
    </div>
  );
}
