import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="grid items-center gap-8 rounded-3xl border border-brand-100/70 bg-gradient-to-br from-white via-brand-50/50 to-white p-8 shadow-sm lg:grid-cols-2">
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">DogWheel возвращает прогулки и характер вашего питомца</h1>
        <p className="text-lg text-stone-600">
          С нашими решениями жизнь — это галгол: яркие конструкции поддерживают питомца, не выглядят как медоборудование и подчёркивают его уверенность.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact#fit-form" className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-white shadow hover:bg-brand-700">
            Подобрать коляску
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-xl border border-brand-200/80 px-5 py-3 text-brand-700 hover:bg-brand-50/60"
          >
            Посмотреть модели
          </Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-100/60 bg-brand-50/40">
        <Image src="/images/hero.jpg" alt="Собака в поддерживающей коляске DogWheel" fill className="object-cover" priority sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
    </section>
  );
}
