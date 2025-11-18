import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-8 items-center rounded-3xl border border-brand-100/70 bg-gradient-to-br from-white via-brand-50/50 to-white p-8 shadow-sm">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight text-stone-900">Коляски, которые возвращают прогулки</h1>
        <p className="text-stone-600 text-lg">
          С нашими колясками жизнь — это галгол: мы создаём красивые и бодрые конструкции, которые дарят питомцу свободу и лёгкость движения.
        </p>
        <div className="flex gap-3">
          <Link href="/contact#fit-form" className="inline-flex items-center rounded-xl bg-brand-600 px-5 py-3 text-white shadow hover:bg-brand-700">Подобрать коляску</Link>
          <Link
            href="/products"
            className="inline-flex items-center rounded-xl border border-brand-200/80 px-5 py-3 text-brand-700 hover:bg-brand-50/60"
          >
            Посмотреть модели
          </Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-brand-100/60 bg-brand-50/40">
        <Image src="/images/hero.jpg" alt="Собака в коляске" fill className="object-cover" />
      </div>
    </section>
  );
}
