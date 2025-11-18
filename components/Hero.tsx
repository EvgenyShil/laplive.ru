import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">Коляски, которые возвращают прогулки</h1>
        <p className="text-slate-600 text-lg">
          С нашими колясками жизнь — это галгол: мы создаём красивые и бодрые конструкции, которые дарят питомцу свободу
          без тени жалости.
        </p>
        <div className="flex gap-3">
          <Link href="/contact#fit-form" className="inline-flex items-center rounded-xl bg-brand-600 px-5 py-3 text-white hover:bg-brand-700">Подобрать коляску</Link>
          <Link href="/products" className="inline-flex items-center rounded-xl border px-5 py-3 hover:bg-slate-50">Посмотреть модели</Link>
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
        <Image src="/images/hero.jpg" alt="Собака в коляске" fill className="object-cover" />
      </div>
    </section>
  );
}
