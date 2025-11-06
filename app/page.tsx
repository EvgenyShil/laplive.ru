import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { CTA } from '@/components/CTA';
import { Testimonial } from '@/components/Testimonial';

export default function HomePage() {
  return (
    <div className="container space-y-16 py-12">
      <Hero />

      <section>
        <h2 className="text-2xl font-semibold mb-6">Почему выбирают нас</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard title="Индивидуальный подбор" description="Учитываем породу, вес, рост и диагноз питомца." />
          <FeatureCard title="Лёгкие и прочные материалы" description="Алюминий/карбон, гипоаллергенные ремни, мягкие опоры." />
          <FeatureCard title="Сервис и поддержка" description="Пожизненная консультация по подстройке и эксплуатации." />
        </div>
      </section>

      <Testimonial author="Анна и пёс Буч" quote="Колясочка вернула нашему хвостику прогулки и радость. Очень бережный сервис!" />
      <CTA />
    </div>
  );
}
