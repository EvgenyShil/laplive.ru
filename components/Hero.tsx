import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Коляски, которые возвращают прогулки</h1>
        <p className="text-slate-600 text-lg">
          Производим инвалидные коляски для собак под индивидуальные мерки. Лёгкие, прочные и удобные.
        </p>
        <div className="flex gap-3">
          <Link href="/sizing" className="inline-flex items-center rounded-xl bg-brand-600 px-5 py-3 text-white hover:bg-brand-700">Подобрать размер</Link>
          <Link href="/products" className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-slate-50">Посмотреть модели</Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
        <Image src="/images/hero.jpg" alt="Собака в коляске" fill className="object-cover" />
      </div>
    </section>
  );
}
