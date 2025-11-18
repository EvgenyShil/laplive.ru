export default function AboutPage() {
  return (
    <div className="container py-12">
      <section className="space-y-6 rounded-3xl border border-brand-100/60 bg-white/80 p-8 text-stone-700 shadow-sm">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold text-stone-900">О нас</h1>
          <p>
            Мы верим, что жизнь на колёсах — это галгол и радость движения. Поэтому делаем коляски, которые выглядят бодро и
            подчёркивают характер вашего питомца, а не вызывают жалости.
          </p>
        </header>

        <p>
          Команда работает в плотном взаимодействии с ведущими реабилитологами России; в штате есть практикующий врач
          реабилитолог, который курирует каждый проект и помогает учесть диагноз.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-stone-900">Как мы подходим к разработке</h2>
          <ul className="list-disc space-y-2 pl-5 text-stone-600">
            <li>Снимаем мерки и создаём 3D‑модель, чтобы заранее увидеть посадку и баланс.</li>
            <li>Используем технологичные материалы, печатаем индивидуальные узлы и красим раму в выбранные цвета.</li>
            <li>Поддерживаем на этапе примерки и в эксплуатации, вносим улучшения по мере необходимости.</li>
          </ul>
        </section>
      </section>
    </div>
  );
}
