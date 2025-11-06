import Link from 'next/link';

export function CTA() {
  return (
    <section className="rounded-2xl border bg-gradient-to-r from-brand-100 to-white p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold">Готовы помочь вашему питомцу</h3>
          <p className="text-slate-600">Отправьте параметры — предложим конфигурацию и смету.</p>
        </div>
        <Link href="/contact" className="inline-flex items-center rounded-xl bg-brand-600 px-5 py-3 text-white hover:bg-brand-700">Связаться</Link>
      </div>
    </section>
  );
}
