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
] as const;

export default function ProductsPage() {
  return (
    <div className="container py-12 text-stone-900">
      <h1 className="mb-8 text-3xl font-semibold">Модели</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(product => (
          <article key={product.id} className="overflow-hidden rounded-2xl border border-brand-100/60 bg-white/80 shadow-sm">
            <Image
              src={product.img}
              alt={product.title}
              width={800}
              height={600}
              className="h-48 w-full object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{product.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
