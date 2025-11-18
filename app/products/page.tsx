import Image from 'next/image';

const products = [
  {
    id: 'rear',
    title: 'Поддержка задних лап',

    desc: 'Для питомцев с парезом или параличом задних конечностей: настраиваем по высоте, ширине и длине корпуса.',

    img: '/images/dog-placeholder.jpg'
  },
  {
    id: 'quad',
    title: 'Поддержка всех четырёх лап',

    desc: 'Опоры спереди и сзади удерживают корпус в равновесии и снимают нагрузку с позвоночника питомца.',

 
    img: '/images/dog-placeholder.jpg'
  },
  {
    id: 'rabbit',
    title: 'Коляска для кролика',
    desc: 'Конструкция с учётом миниатюрного корпуса и чувствительных лапок. Мягкие фиксаторы не трут кожу.',
    img: '/images/dog-placeholder.jpg'
  },
  {
    id: 'custom',

    title: 'Изготовление для любого питомца',

    desc: 'Если вашего любимца нет в каталоге, мы смоделируем индивидуальную коляску под мерки и особенности вида.',
    img: '/images/dog-placeholder.jpg'
  }
];

export default function ProductsPage() {
  return (
    <div className="container py-12 text-stone-900">
      <h1 className="text-3xl font-semibold mb-8">Модели</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(p => (
          <article key={p.id} className="rounded-2xl border border-brand-100/60 bg-white/80 shadow-sm overflow-hidden">
            <Image src={p.img} alt={p.title} width={800} height={600} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-stone-600 mt-2">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
