import Link from 'next/link';

export function CTA() {
  return (
    <section className="rounded-2xl border border-brand-100/70 bg-gradient-to-r from-brand-50/70 via-white to-brand-50/50 p-8 shadow-sm">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold">Готовы помочь вашему питомцу</h3>
          <p className="text-stone-600">Фиксируем мерки, моделируем в 3D и держим связь на каждом этапе.</p>
        </div>
        <Link href="/contact#fit-form" className="inline-flex items-center rounded-xl bg-brand-600 px-5 py-3 text-white shadow hover:bg-brand-700">
          Подобрать коляску
        </Link>
      </div>
    </section>
  );
}
