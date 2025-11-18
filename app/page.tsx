import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { CTA } from '@/components/CTA';

export default function HomePage() {
  return (
    <div className="container space-y-16 py-12 text-stone-900">
      <Hero />

      <section className="rounded-3xl border border-brand-100/70 bg-white/80 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Почему выбирают нас</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="Индивидуальный подбор" description="Учитываем породу, вес, рост и диагноз питомца." />
          <FeatureCard
            title="3D‑технологичное производство"
            description="Моделируем коляску в 3D, подбираем современные материалы и печатаем узлы с точностью до миллиметра."
          />
          <FeatureCard
            title="Сервис и поддержка"
            description="Полная техническая гарантия на коляску и все агрегаты в течение 1 года."
          />
          <FeatureCard
            title="Гибкая кастомизация"

            description="Кастомизация вашей коляски в процессе эксплуатации."

          />
        </div>
      </section>

      <section className="rounded-3xl border border-brand-100/60 bg-gradient-to-br from-white via-brand-50/40 to-white p-8 space-y-4">

        <h2 className="text-2xl font-semibold">DogWheel — эстетика движения</h2>

        <p className="text-stone-600">
          Мы разрабатываем решения в плотном взаимодействии с ведущими реабилитологами России и практикующим врачом в
          команде. Конструкции получаются не только функциональными, но и красивыми — они поддерживают бодрый образ
          питомца и не вызывают грусти при взгляде.
        </p>

        <p className="text-stone-600">
          Каждая коляска окрашивается в выбранную вами гамму, чтобы подчеркнуть характер вашего питомца.
        </p>

      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Как проходит работа</h2>
        <ol className="space-y-4">
          <li className="rounded-2xl border border-brand-100/60 p-5 bg-white/80">
            <h3 className="font-semibold">1. Запрос</h3>

            <p className="text-stone-600">Вы пишете нам, какое животное, сколько весит и какую проблему нужно компенсировать.</p>

          </li>
          <li className="rounded-2xl border border-brand-100/60 p-5 bg-white/80">
            <h3 className="font-semibold">2. Снятие мерок</h3>
            <p className="text-stone-600">Отправляем информацию об измерениях или организуем выезд нашего специалиста.</p>
          </li>
          <li className="rounded-2xl border border-brand-100/60 p-5 bg-white/80">
            <h3 className="font-semibold">3. Материалы и цвет</h3>
            <p className="text-stone-600">Согласовываем материал, упрочнения и цветовую гамму под образ питомца.</p>
          </li>
          <li className="rounded-2xl border border-brand-100/60 p-5 bg-white/80">
            <h3 className="font-semibold">4. 3D‑моделирование и производство</h3>
            <p className="text-stone-600">Создаём 3D‑модель, отправляем фото/рендер изделия и выполняем производство.</p>
          </li>
          <li className="rounded-2xl border border-brand-100/60 p-5 bg-white/80">
            <h3 className="font-semibold">5. Примерка и поддержка</h3>
            <p className="text-stone-600">Приезжаем на примерку, дорабатываем по результатам и остаёмся на связи по всем вопросам.</p>
          </li>
        </ol>
      </section>

      <CTA />
    </div>
  );
}
